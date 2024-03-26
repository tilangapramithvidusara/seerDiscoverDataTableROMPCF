import { fitGapMoscowObject, fitGapObject } from "../../Constants/fitGap";
import { fitGapData, moscowsData } from "../../Constants/pickListData";
import { FitGapItem, FitGapMoscowType, FitGapObjectType } from "../../types/fitgap.types";


export const fitGapTabValue = async(inititlaData: any, condition: boolean, settingParameters?: any, isSnapshotModeEnable?: boolean) => {
  const fitGapModules = new Set();
  let fitGapRecords: FitGapObjectType[] = [];
  let fitGapMoscowRecords: FitGapMoscowType[] = [];
  let fitGapGapMoscowRecords: FitGapMoscowType[] = [];
  let fitGapWithoutGapRecords: FitGapMoscowType[] = [];

  // let fitGapValue: FitGapObjectType = fitGapObject;

  try {
    const {FitGapDataList} = inititlaData;    

    const fitGapLoop = await FitGapDataList?.map(async(fitGapItem: FitGapItem, index: number) => {
      let response = {
        fitGapRecords,
        fitGapMoscowRecords,
        fitGapGapMoscowRecords,
        fitGapWithoutGapRecords,
      };

      if (index == 0) {
        fitGapRecords = [];
      }
      if (fitGapModules.has(fitGapItem?.module?.id)) {
        response = await fitGapHanlder(fitGapItem, fitGapRecords, fitGapMoscowRecords, fitGapGapMoscowRecords, fitGapWithoutGapRecords);
      } else {        
        fitGapModules.add(fitGapItem?.module?.id)
        fitGapRecords.push({
          // ...fitGapObject,
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
          moduleName: fitGapItem?.module?.name,
          moduleId: fitGapItem?.module?.id,
        });
        fitGapMoscowRecords.push({
          ...fitGapMoscowObject,
          moduleName: fitGapItem?.module?.name,
          moduleId: fitGapItem?.module?.id,
        })
        fitGapGapMoscowRecords.push({
          ...fitGapMoscowObject,
          moduleName: fitGapItem?.module?.name,
          moduleId: fitGapItem?.module?.id,
        })
        fitGapWithoutGapRecords.push({
          ...fitGapMoscowObject,
          moduleName: fitGapItem?.module?.name,
          moduleId: fitGapItem?.module?.id,
        })
        // fitGapRecords = 
        response = await fitGapHanlder(fitGapItem, fitGapRecords, fitGapMoscowRecords, fitGapGapMoscowRecords, fitGapWithoutGapRecords);
      }
      
      fitGapRecords = response?.fitGapRecords;
      fitGapMoscowRecords = response?.fitGapMoscowRecords;
      fitGapGapMoscowRecords = response?.fitGapGapMoscowRecords;
      fitGapWithoutGapRecords = response?.fitGapWithoutGapRecords;

    });

    await Promise.allSettled(fitGapLoop);
    return {
      fitGapTab: fitGapRecords,
      fitGapAllMoscowTab: fitGapMoscowRecords,
      fitGapGapMoscowTab: fitGapGapMoscowRecords,
      fitGapWithoutGapMoscow: fitGapWithoutGapRecords,
    }

    
    
  } catch (error) {
    console.log("error fitgap ==> ", error);
    return {
      fitGapTab: fitGapRecords,
      fitGapAllMoscowTab: fitGapMoscowRecords,
      fitGapGapMoscowTab: fitGapGapMoscowRecords,
      fitGapWithoutGapMoscow: fitGapWithoutGapRecords,
    }
    
  }
}

export const fitGapHanlder = async(baseItem: FitGapItem, fitGapRecords: FitGapObjectType[], fitGapMoscowRecords: FitGapMoscowType[], fitGapGapMoscowRecords: FitGapMoscowType[], fitGapWithoutGapRecords: FitGapMoscowType[]) => {  
  let response: any;
  
  if (moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000000]) {
    response = await checkFitGapTypeHandler(baseItem, fitGapRecords, 'M', fitGapMoscowRecords, fitGapGapMoscowRecords, fitGapWithoutGapRecords);

  }
  if (moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000000] || moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000001]) {
    response = await checkFitGapTypeHandler(baseItem, fitGapRecords, 'MS', fitGapMoscowRecords, fitGapGapMoscowRecords, fitGapWithoutGapRecords);
  }
  if (moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000000] || moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000001] || moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000002]) {
    response = await checkFitGapTypeHandler(baseItem, fitGapRecords, 'MSC', fitGapMoscowRecords, fitGapGapMoscowRecords, fitGapWithoutGapRecords);
  } 


  return response;
}

export const checkFitGapTypeHandler = (baseItem: FitGapItem, fitGapRecords: FitGapObjectType[], moscowKeyValue: string, fitGapMoscowRecords: FitGapMoscowType[], fitGapGapMoscowRecords: FitGapMoscowType[], fitGapWithoutGapRecords: FitGapMoscowType[]) => {
  let response: any;
  if (fitGapData?.[baseItem?.fitGap] == fitGapData?.[100000000]) { // Fit
    response = findAndSetFitGapValue(baseItem, fitGapRecords, moscowKeyValue, 'fit', fitGapMoscowRecords, fitGapGapMoscowRecords, fitGapWithoutGapRecords);

  } else if (fitGapData?.[baseItem?.fitGap] == fitGapData?.[100000001]) { // Gap
    response = findAndSetFitGapValue(baseItem, fitGapRecords, moscowKeyValue, 'gap', fitGapMoscowRecords, fitGapGapMoscowRecords, fitGapWithoutGapRecords);
  } else if (fitGapData?.[baseItem?.fitGap] == fitGapData?.[100000002]) { // Partial
    response = findAndSetFitGapValue(baseItem, fitGapRecords, moscowKeyValue, 'partial', fitGapMoscowRecords, fitGapGapMoscowRecords, fitGapWithoutGapRecords);

  } else if (fitGapData?.[baseItem?.fitGap] == fitGapData?.[100000003]) { // ISV Fit
    response = findAndSetFitGapValue(baseItem, fitGapRecords, moscowKeyValue, 'isvfit', fitGapMoscowRecords, fitGapGapMoscowRecords, fitGapWithoutGapRecords);
  }
  return response;
}

export const findAndSetFitGapValue = (baseItem: FitGapItem, fitGapRecords: FitGapObjectType[], moscowKeyValue: string, fitgapKeyValue: string, fitGapMoscowRecords: FitGapMoscowType[], fitGapGapMoscowRecords: FitGapMoscowType[], fitGapWithoutGapRecords: FitGapMoscowType[]) => {
  const index = fitGapRecords.findIndex((item: any) => item?.moduleId == baseItem?.module?.id);
  let itemValue: any;
  itemValue = fitGapRecords[index];    
  const key = `${fitgapKeyValue}_${moscowKeyValue}`;  
  itemValue = {
    ...itemValue,
    [key]: itemValue?.[key] + 1
  }

  fitGapRecords[index] = itemValue;

  let fitGapMoscowRecordItemValue: any = fitGapMoscowRecords[index];
  let fitGapGapMoscowRecordsItemValue: any = fitGapGapMoscowRecords[index];
  let fitGapWithoutGapRecordsItemValue: any = fitGapWithoutGapRecords[index];
  // if (moscowKeyValue == 'M') {
    fitGapMoscowRecordItemValue = {
      ...fitGapMoscowRecordItemValue,
      [moscowKeyValue]: fitGapMoscowRecordItemValue?.[moscowKeyValue] + 1
    }
    if (fitgapKeyValue == 'gap') {
      fitGapGapMoscowRecordsItemValue = {
        ...fitGapGapMoscowRecordsItemValue,
        [moscowKeyValue]: fitGapGapMoscowRecordsItemValue?.[moscowKeyValue] + 1
      }
    } else {
      
      fitGapWithoutGapRecordsItemValue = {
        ...fitGapWithoutGapRecordsItemValue,
        [moscowKeyValue]: fitGapWithoutGapRecordsItemValue?.[moscowKeyValue] + 1
      }
    }
  // }
  fitGapMoscowRecords[index] = fitGapMoscowRecordItemValue;
  fitGapGapMoscowRecords[index] = fitGapGapMoscowRecordsItemValue;
  fitGapWithoutGapRecords[index] = fitGapWithoutGapRecordsItemValue;  
  return {fitGapRecords, fitGapMoscowRecords, fitGapGapMoscowRecords, fitGapWithoutGapRecords}
}


export const getFilteredFitGapsAgainstMoscow = async(dataArray: FitGapMoscowType[]) => {
  try {
    const res = dataArray.map((item: FitGapMoscowType) => {
      let itemValue = item;
      itemValue = {
        ...itemValue,
        M: item.M,
        MS: (item.MS - item.M),
        MSC: (item.MSC - item.MS)
      }
      return itemValue;
    });
    await Promise.all(res);
    return res;
  } catch (error) {
    return []
  }

}