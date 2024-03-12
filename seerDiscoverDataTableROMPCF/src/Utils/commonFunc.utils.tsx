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
  let objJsonStr = JSON.stringify(jsonData);
  let objJsonB64 = Buffer.from(objJsonStr).toString("base64");
  return objJsonB64
};

export const convertBase64ToJson : any = async(base64Data: any) => {
  const convertValue = atob(base64Data)
  return JSON.parse(atob(base64Data))
}

export const arraySearch = (array: any[], key: string, value: any) => {
  return array?.find((item: any) => item[key] == value)
}