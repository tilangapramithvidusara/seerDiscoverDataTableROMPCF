

export const initialFetch = async (context?: any) => {
  const reportId = context?.parameters?.reportId?.raw;
  const accountId = context?.parameters?.accountId?.raw;
  try {
    const urlsData = await getUrls(reportId, context);
    const {error, result} = urlsData;
    if (!error) {
      const entities: any = result?.entities;
      
      const data = entities[0];
      
      const res = await jsonLoader(data, accountId);
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
          const res = await jsonLoader(data, accountId);
        }
      } else {
        throw new Error();
      }
    }
  } catch (error) {
    console.log('error1  ==> ', error);
    
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

    // console.log(result)
    
    if (result && result?.data && result?.data?.length > 0) {
      response = {error: false, result: result?.data}
    }

  })
  .catch(error=>{
    response = {error: true, result: error}
  });

  return response;
}