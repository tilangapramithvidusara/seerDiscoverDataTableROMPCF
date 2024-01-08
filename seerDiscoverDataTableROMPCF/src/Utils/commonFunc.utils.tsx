

export const removeDuplicates : any = (array: any, removeKey: any) => {
  return array?.reduce((unique: any[], o: any) => {
      if(!unique.some((obj: any) => obj[removeKey] === o[removeKey])) {
        unique.push(o);
      }
      return unique;
    }, []);
}

export const executeAfterGivenDilay = (task: () => void, timeout = 0) => setTimeout(task, timeout);

export const convertJsonToBase64 : any = (jsonData: any) => {
  console.log("JSON Data", jsonData);
  console.log("Converted Data", btoa(JSON.stringify(jsonData)))
  return btoa(JSON.stringify(jsonData))
}

export const convertBase64ToJson : any = (base64Data: any) => {
  console.log("base64Data", base64Data);
  console.log("Converted Data", atob(base64Data))
  return JSON.parse(atob(base64Data))
}
