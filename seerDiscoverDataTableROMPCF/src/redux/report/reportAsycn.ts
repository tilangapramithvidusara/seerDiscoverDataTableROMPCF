import axios from "axios";
import {
  initialFetchStart,
  initialFetchSuccess,
  initialFetchFailure,
} from "./reportSlice";

export const deleteOutputSetAsync: any = async(info: any) => {
  console.log('info ==> ', info);
  try {
    const data = {
      "outputsetid":  info?.OutputSetId
    };
    const response = await axios.post('https://prod-08.uksouth.logic.azure.com:443/workflows/ca2c7c8980354726999b8b76f250554c/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=4mCZMVAtQxN-tYZbGR1pFqylfIgmAPCrRLCsn0PB6_k',
      data,
      {
        headers: {
          'Content-Type': 'application/json',
        }
      },
    );
    return {result: response?.data, error: false}
  } catch (error) {
    console.log('error delete ==> ', error);
    return {result: [], error: true}
  }
  
}

export const fetchInitialDataAsync = async() => {
  try {
    console.log('KKKKKKKKKK');
    
    const requestBody = {
      "accountid": "c514b3d1-a45b-ee11-8def-002248015232",
      "languageId": "50122d0c-87d7-ec11-a7b5-002248008ee0",
      "lastexecutedOn" : "2023-10-25T07:47:46.0261668Z"
    }
    // {
    //   "accountid": "c514b3d1-a45b-ee11-8def-002248015232",
    //   "partnerid": "b388d7ee-bd7e-ec11-8d21-6045bd0e691e",
    //   "masterid": "1edca5e0-47d7-ec11-a7b5-6045bd1001f9",
    //   "apps": "2cc55a59-46d7-ec11-a7b5-6045bd1001f9",
    //   "languageId": "50122d0c-87d7-ec11-a7b5-002248008ee0",
    //   "outputSetId": "08585041680294683701939216538CU29",
    //   "outputHistoryId": "381097e1-ef6b-ee11-9ae7-002248015232"
    // }
    // {
    //   "accountid": "c514b3d1-a45b-ee11-8def-002248015232",
    //   "partnerid": "b388d7ee-bd7e-ec11-8d21-6045bd0e691e",
    //   "masterid": "1edca5e0-47d7-ec11-a7b5-6045bd1001f9",
    //   "apps": "2cc55a59-46d7-ec11-a7b5-6045bd1001f9",
    //   "languageId": "50122d0c-87d7-ec11-a7b5-002248008ee0",
    //   "outputSetId": "08585045133102494979573715267CU11",
    //   "outputHistoryId": "8f1416f5-cb68-ee11-9ae7-000d3a0bca56"
    // }
    // {
    //   "accountid": "82b4fc2f-bc4c-ee11-be6f-6045bdc1ec82",
    //   "partnerid": "b68dbc7d-76fc-ec11-82e6-002248428304",
    //   "masterid": "1edca5e0-47d7-ec11-a7b5-6045bd1001f9",
    //   "apps": "25635765-46d7-ec11-a7b5-6045bd1001f9",
    //   "languageId": "50122d0c-87d7-ec11-a7b5-002248008ee0",
    //   "outputSetId": "08585046738151656861741238998CU04",
    //   "outputHistoryId": "28cf9643-5667-ee11-9ae7-000d3a0be073"
    // }
    // {
    //   "accountid": "c514b3d1-a45b-ee11-8def-002248015232",
    //   "partnerid": "b388d7ee-bd7e-ec11-8d21-6045bd0e691e",
    //   "masterid": "1edca5e0-47d7-ec11-a7b5-6045bd1001f9",
    //   "apps": "2cc55a59-46d7-ec11-a7b5-6045bd1001f9",
    //   "languageId": "50122d0c-87d7-ec11-a7b5-002248008ee0",
    //   "outputSetId": "08585045016328982278967445319CU00",
    //   "outputHistoryId": "98f06824-e768-ee11-9ae7-002248015232"
    // }
    
    // {
    //   "accountid": "c514b3d1-a45b-ee11-8def-002248015232",
    //   "partnerid": "b388d7ee-bd7e-ec11-8d21-6045bd0e691e",
    //   "masterid": "1edca5e0-47d7-ec11-a7b5-6045bd1001f9",
    //   "apps": "2cc55a59-46d7-ec11-a7b5-6045bd1001f9",
    //   "languageId": "50122d0c-87d7-ec11-a7b5-002248008ee0",
    //   "outputSetId": "08585045133102494979573715267CU11",
    //   "outputHistoryId": "8f1416f5-cb68-ee11-9ae7-000d3a0bca56"
    // }
    
    // {
    //   "accountid": "c514b3d1-a45b-ee11-8def-002248015232",
    //   "partnerid": "b388d7ee-bd7e-ec11-8d21-6045bd0e691e",
    //   "masterid": "1edca5e0-47d7-ec11-a7b5-6045bd1001f9",
    //   "apps": "2cc55a59-46d7-ec11-a7b5-6045bd1001f9",
    //   "languageId": "50122d0c-87d7-ec11-a7b5-002248008ee0",
    //   "outputSetId": "08585045969990987213619994154CU04",
    //   "outputHistoryId": "bf6c241a-0968-ee11-9ae7-002248015232"
    // }
    // {
    //   "accountid": "82b4fc2f-bc4c-ee11-be6f-6045bdc1ec82",
    //   "partnerid": "b68dbc7d-76fc-ec11-82e6-002248428304",
    //   "masterid": "1edca5e0-47d7-ec11-a7b5-6045bd1001f9",
    //   "apps": "25635765-46d7-ec11-a7b5-6045bd1001f9",
    //   "languageId": "50122d0c-87d7-ec11-a7b5-002248008ee0",
    //   "outputSetId": "08585046738151656861741238998CU04",
    //   "outputHistoryId": "28cf9643-5667-ee11-9ae7-000d3a0be073"
    // }

    const res: any = await axios.post(
      'https://poc-rom-in-portal-uat.azurewebsites.net/api/DiscoverSMBROM?code=HwBgZK01CGG1OgSDraJwW3Nj-HdI_VaYznAPufDYEutDAzFuCIQvvg==', 
        requestBody, 
        {
          headers: {
            'Content-Type': 'application/json',
          },
          timeout: 30000,
        });
    console.log('res ==> ', res)
    if (res?.status !== 200) throw new Error();
    return {result: (res as any)?.data, error: false}
  } catch (error) {
    console.log('error ==> ', error);
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
            console.log("data ", data);
                
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
      console.log('error1  ==> ', error);
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
    console.log("error when load urls : ", error, error instanceof Error);
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
  console.log("jsonFormat ===> ", jsonFormat, data);
  
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

    // console.log(result)
    console.log('====> ', result && result?.data && result?.data?.length > 0, result?.data);
    
    if (result && result?.data && result?.data?.length > 0) {
      response = {error: false, result: result?.data}
    }

  })
  .catch(error=>{
    console.log('error', error);
    response = {error: true, result: error}
  });

  return response;
}