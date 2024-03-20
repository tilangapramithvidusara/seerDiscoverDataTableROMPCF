import { Buffer } from 'buffer';
import { fitGapObject, fitGapMoscowObject } from '../Constants/fitGap';

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

export const generateFitGapTotalAndPrecentage = async(fitGap: any[]) => {  
  let fitGapObj = {
    moduleName: '',
    moduleId: '',
    fit_M: 0,
    isvfit_M: 0,
    partial_M: 0,
    gap_M: 0,
    fit_MS: 0,
    isvfit_MS: 0,
    partial_MS: 0,
    gap_MS: 0,
    fit_MSC: 0,
    isvfit_MSC: 0,
    partial_MSC: 0,
    gap_MSC: 0,
  };
  let fitGapObjPercent  = {};
  fitGap.map((item: any) => {
    fitGapObj.fit_M += item?.fit_M
    fitGapObj.isvfit_M += item?.isvfit_M
    fitGapObj.partial_M += item?.partial_M
    fitGapObj.gap_M += item?.gap_M
    fitGapObj.fit_MS += item?.fit_MS
    fitGapObj.isvfit_MS += item?.isvfit_MS
    fitGapObj.partial_MS += item?.partial_MS
    fitGapObj.gap_MS += item?.gap_MS
    fitGapObj.fit_MSC += item?.fit_MSC
    fitGapObj.isvfit_MSC += item?.isvfit_MSC
    fitGapObj.partial_MSC += item?.partial_MSC
    fitGapObj.gap_MSC += item?.gap_MSC
  });
  fitGap.push(fitGapObj);
  const responseM = generateFitGapPercentatge(fitGapObj, 'M')
  const responseMS = generateFitGapPercentatge(fitGapObj, 'MS')
  const responseMSC = generateFitGapPercentatge(fitGapObj, 'MSC')

  fitGapObjPercent = {
    ...fitGapObjPercent,
    ...responseM,
    ...responseMS,
    ...responseMSC,
  }

  fitGap.push(fitGapObjPercent);

  return fitGap;
}

export const generateFitGapPercentatge = (fitGapObject: any, moscow: string) => {
  let returnObject = {}
  let total = (
    fitGapObject[`fit_${moscow}`] +
    fitGapObject[`isvfit_${moscow}`] +
    fitGapObject[`partial_${moscow}`] +
    fitGapObject[`gap_${moscow}`]
  )
  returnObject = {
    ...returnObject,
    [`fit_${moscow}`]: ((fitGapObject[`fit_${moscow}`]/total)*100)?.toFixed(2)+"%",
    [`isvfit_${moscow}`]: ((fitGapObject[`isvfit_${moscow}`]/total)*100)?.toFixed(2)+"%",
    [`partial_${moscow}`]: ((fitGapObject[`partial_${moscow}`]/total)*100)?.toFixed(2)+"%",
    [`gap_${moscow}`]: ((fitGapObject[`gap_${moscow}`]/total)*100)?.toFixed(2)+"%"
  }
  return returnObject;
}