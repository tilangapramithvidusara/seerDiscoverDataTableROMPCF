import { Buffer } from 'buffer';

export const removeDuplicates : any = (array: any, removeKey: any) => {
  return array?.reduce((unique: any[], o: any) => {
      if(!unique.some((obj: any) => obj[removeKey] === o[removeKey])) {
        unique.push(o);
      }
      return unique;
    }, []);
}

export const executeAfterGivenDilay = (task: () => void, timeout = 0) => setTimeout(task, timeout);

export const convertJsonToBase64: any = (jsonData: any) => {
  console.log('JSON Data', jsonData);
  let objJsonStr = JSON.stringify(jsonData);
  let objJsonB64 = Buffer.from(objJsonStr).toString("base64");
  console.log('Base 64 Data', objJsonB64);
  return objJsonB64
};

export const convertBase64ToJson : any = (base64Data: any) => {
  console.log("base64Data", base64Data);
  console.log("Converted Data", atob(base64Data))
  return JSON.parse(atob(base64Data))
}
