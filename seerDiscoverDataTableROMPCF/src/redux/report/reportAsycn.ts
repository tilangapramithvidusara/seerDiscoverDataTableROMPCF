import axios from "axios";
import {
  initialFetchStart,
  initialFetchSuccess,
  initialFetchFailure,
} from "./reportSlice";

export const deleteOutputSetAsync: any = async(info: {OutputSetId: string}) => {
  try {
    const data = {
      "outputsetid":  info?.OutputSetId
    };
    const response = {data: ''}    
    await axios.post(localStorage.getItem("flowurl") || 'https://prod-08.uksouth.logic.azure.com:443/workflows/ca2c7c8980354726999b8b76f250554c/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=4mCZMVAtQxN-tYZbGR1pFqylfIgmAPCrRLCsn0PB6_k',
      data,
      {
        headers: {
          'Content-Type': 'application/json',
        }
      },
    );
    return {result: response?.data, error: false}
  } catch (error) {
    return {result: [], error: true}
  }
  
}

export const fetchInitialDataAsync = async() => {
  try {    
    const url = new URL(window.location.href);
    const queryParameters = url.searchParams;
    const currentDate = new Date();
    const isoString = currentDate?.toISOString();
    // "14130939-4eb1-ee11-a569-002248015232" ||
    const requestBody = {
      "accountid": localStorage.getItem("accountId") || queryParameters?.get("accountId"),
      // || 
      // "5172763a-52b1-ee11-a569-000d3a0bcfb2" || "77c96e64-e3b6-ee11-a568-6045bdd2c9ae" || "3c278286-8c5e-ed11-9562-002248428304" || "5172763a-52b1-ee11-a569-000d3a0bcfb2" ||'b8357ad8-a499-ee11-be37-000d3a0be042',
      "languageId": "50122d0c-87d7-ec11-a7b5-002248008ee0",
      "lastexecutedOn" : isoString,
    }    
    const res: any = await axios.post(
      // UAT Url
      localStorage.getItem("azureFunction") || '',
      //  || 'https://poc-rom-in-portal-uat.azurewebsites.net/api/DiscoverSMBROM?code=HwBgZK01CGG1OgSDraJwW3Nj-HdI_VaYznAPufDYEutDAzFuCIQvvg==', 
      // Prod Url
      // 'https://rom-in-portal-prod.azurewebsites.net/api/DiscoverSMBROM?code=ud6ha95-yiOmqooksNCaf95hdDJwx60GSu-0hZgypDVDAzFu6G-qBA==',
        requestBody, 
        {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          },
          timeout: 30000,
        });
    if (res?.status !== 200) throw new Error();
    return {result: (res as any)?.data, error: false}
  } catch (error) {
    return {result: [], error: true}
  }
}

export const initialFetch = (context?: any) => {
  return async(dispatch: any) => {
    dispatch(initialFetchStart());
    const reportId = context?.parameters?.reportId?.raw;
    const accountId = context?.parameters?.accountId?.raw;
    try {
      const urlsData = await getUrls(reportId, context);
      const {error, result} = urlsData;
      if (!error) {
        const entities: any = result?.entities;
        
        const data = entities[0];
        
        const res: {error: boolean, result: any} | any = await jsonLoader(data, accountId);
        if (res.error) {
          throw new Error();
        }
        dispatch(initialFetchSuccess(res?.result));
      } else {
        if(result instanceof Error){
          if(result?.name === "PCFNonImplementedError"){       
            const data = {
              "@odata.etag": "W/\"115657148\"",
              "seerdwp_rompcfconfigurationid": "bd1b3f25-e43c-ee11-bdf4-002248015a1b",
              "seerdwp_functionappurl": "https://seerv2samplefunctions.azurewebsites.net/api/GetRomData?code=-MzCAimwQEWOrW4ZNgz8ZbETkcPy0LUzQtGMGVOQXpCiAzFupB0xYA==",
              "seerdwp_jasonobjectformat": "{\n\"id\": \"accountId\"\n}",
              "seerdwp_reportid": "testROMReport"
            };
                
            const res: {error: boolean, result: any} | any = await jsonLoader(data, accountId);
            if (res.error) {
              throw new Error();
            }
            dispatch(initialFetchSuccess(res?.result));
          }
        } else {
          throw new Error();
        }
      }
    } catch (error) {
      dispatch(initialFetchFailure(error));
    }
  }
}

const getUrls = async(reportId: any, context: any) => { 
  //testROMReport
  let returnMethod: any = {}
  try {
    let result = await context?.webAPI?.retrieveMultipleRecords(
      "seerdwp_rompcfconfiguration", 
      `?$select=seerdwp_rompcfconfigurationid,seerdwp_functionappurl,seerdwp_jasonobjectformat,seerdwp_reportid&$filter=seerdwp_reportid eq '${reportId}'`
    );
    const res: any = result
    returnMethod = {error: false, result: res};
  } catch (error: any) {
    returnMethod = {error: true, result: error} 
  }
  return returnMethod;
}


const jsonLoader = async(data?: any, accountId?: any) => {
  // context: ComponentFramework.Context<IInputs>
  
  const jsonFormat = await JSON.parse(data?.['seerdwp_jasonobjectformat']?.trim());
  if (jsonFormat?.['id'] === "accountId") {
      jsonFormat['id'] = accountId;
  }
  
  var raw = JSON.stringify(jsonFormat);

  var requestOptions: any = {
    method:'POST',
    headers: {
        "Content-Type": "application/json"
    },
    body:raw,
    redirect:'follow'
  };

  let response;

  await fetch(
    data?.["seerdwp_functionappurl"], 
    requestOptions
  )
  .then(response=>response.json())
  .then((result: any)=> {    
    if (result && result?.data && result?.data?.length > 0) {
      response = {error: false, result: result?.data}
    }

  })
  .catch(error=>{
    response = {error: true, result: error}
  });

  return response;
}