import { fitGapData, moscowsData } from "../../Constants/pickListData";


export const generateAnalysisDesignMValue = async(inititlaData: any, condition: boolean) => {
  // need to check with 'Estimate - Resource Milestone'!$C$1
 let resultValue = 0;
 let resultValueMS = 0;
 let resultValueMSC = 0;
 let x = 0
 let y = 0
 // Must
 let primaryResourceDesignValueFromBaseData = 0;
 let secondaryResourceDesignValueFromBaseData = 0;
 let primaryResourceDesignValueFromModuleData = 0;
 let secondaryResourceDesignValueFromModuleData = 0;

 // Must Should
 let primaryResourceDesignValueFromBaseDataMS = 0;
 let secondaryResourceDesignValueFromBaseDataMS = 0;
 let primaryResourceDesignValueFromModuleDataMS = 0;
 let secondaryResourceDesignValueFromModuleDataMS = 0;

 // Must Should Could
 let primaryResourceDesignValueFromBaseDataMSC = 0;
 let secondaryResourceDesignValueFromBaseDataMSC = 0;
 let primaryResourceDesignValueFromModuleDataMSC = 0;
 let secondaryResourceDesignValueFromModuleDataMSC = 0;

 // Must
 const seenBaseMIds = new Set();
 const seenModuleMIds = new Set();

 // Must Should
 const seenBaseMSIdsMS = new Set();
 const seenModuleMSIdsMS = new Set();

 // Must Should Could
 const seenBaseMSCIdsMSC = new Set();
 const seenModuleMSCIdsMSC = new Set();
 // seerMoscow
 try {
   const {BaseData, resourceModelData, ModuleData, parameterModel} = inititlaData
   if (inititlaData) {
     const baseLoop = await BaseData && BaseData.length && BaseData.map(async(baseItem: any, baseIndex: number) => {

       // Must
       if (moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000000] && fitGapData[baseItem?.fitGap] != fitGapData[100000001]) {
         //
         const res = baseReader(baseItem, primaryResourceDesignValueFromBaseData, secondaryResourceDesignValueFromBaseData, x);
         primaryResourceDesignValueFromBaseData = res.primaryResourceDesignValueFromBaseData;
         secondaryResourceDesignValueFromBaseData = res.secondaryResourceDesignValueFromBaseData;
       }

       // Must Should
       if ((moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000000] || moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000001]) && fitGapData[baseItem?.fitGap] != fitGapData[100000001]) {
         //
         const res = baseReader(baseItem, primaryResourceDesignValueFromBaseDataMS, secondaryResourceDesignValueFromBaseDataMS, x);
         primaryResourceDesignValueFromBaseDataMS = res.primaryResourceDesignValueFromBaseData;
         secondaryResourceDesignValueFromBaseDataMS = res.secondaryResourceDesignValueFromBaseData;
       }

       // Must Should Could
       if ((moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000000] || moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000001] || moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000002]) && fitGapData[baseItem?.fitGap] != fitGapData[100000001]) {
         //
         const res = baseReader(baseItem, primaryResourceDesignValueFromBaseDataMSC, secondaryResourceDesignValueFromBaseDataMSC, x);
         primaryResourceDesignValueFromBaseDataMSC = res.primaryResourceDesignValueFromBaseData;
         secondaryResourceDesignValueFromBaseDataMSC = res.secondaryResourceDesignValueFromBaseData;
       }
     });
     
     const moduleLoop = await ModuleData && ModuleData?.length && ModuleData.map((moduleDataItem: any, moduleDataIndex: any) => {
       // console.log('ccw ==> ', moduleDataItem?.moduleSeerEstimateDesign * ((100 - moduleDataItem?.moduleSeerResourceSplit) / 100));

       // Must
       if (moscowsData?.[moduleDataItem?.seerMoscow] == moscowsData?.[100000000]) {
         if (!seenModuleMIds.has(moduleDataItem?.fitGapProductSeerModule?.id)) {
           seenModuleMIds.add(moduleDataItem?.fitGapProductSeerModule?.id)
           const res = moduleReader(moduleDataItem, primaryResourceDesignValueFromModuleData, secondaryResourceDesignValueFromModuleData, y);
           primaryResourceDesignValueFromModuleData = res.primaryResourceDesignValueFromModuleData;
           secondaryResourceDesignValueFromModuleData = res.secondaryResourceDesignValueFromModuleData;
         }
       }

       // Must Should
       if (moscowsData?.[moduleDataItem?.seerMoscow] == moscowsData?.[100000000] || moscowsData?.[moduleDataItem?.seerMoscow] == moscowsData?.[100000001]) {
         //
         if (!seenModuleMSIdsMS.has(moduleDataItem?.fitGapProductSeerModule?.id)) {
           seenModuleMSIdsMS.add(moduleDataItem?.fitGapProductSeerModule?.id)
           const res = moduleReader(moduleDataItem, primaryResourceDesignValueFromModuleDataMS, secondaryResourceDesignValueFromModuleDataMS, y);
           primaryResourceDesignValueFromModuleDataMS = res.primaryResourceDesignValueFromModuleData;
           secondaryResourceDesignValueFromModuleDataMS = res.secondaryResourceDesignValueFromModuleData;
         }
       }

       // Must Should Could
       if (moscowsData?.[moduleDataItem?.seerMoscow] == moscowsData?.[100000000] || moscowsData?.[moduleDataItem?.seerMoscow] == moscowsData?.[100000001] || moscowsData?.[moduleDataItem?.seerMoscow] == moscowsData?.[100000002]) {
         //
         if (!seenModuleMSCIdsMSC.has(moduleDataItem?.fitGapProductSeerModule?.id)) {
           seenModuleMSCIdsMSC.add(moduleDataItem?.fitGapProductSeerModule?.id);
         
           const res = moduleReader(moduleDataItem, primaryResourceDesignValueFromModuleDataMSC, secondaryResourceDesignValueFromModuleDataMSC, y);
           primaryResourceDesignValueFromModuleDataMSC = res.primaryResourceDesignValueFromModuleData;
           secondaryResourceDesignValueFromModuleDataMSC = res.secondaryResourceDesignValueFromModuleData;
         }
       }
     });
     if (parameterModel?.length) {
       resultValue = generateReturnValue(
         primaryResourceDesignValueFromBaseData,
         secondaryResourceDesignValueFromBaseData,
         primaryResourceDesignValueFromModuleData,
         secondaryResourceDesignValueFromModuleData,
         parameterModel[0].hoursPerday,
         condition
       );
       // (
       //     primaryResourceDesignValueFromBaseData 
       //     + secondaryResourceDesignValueFromBaseData 
       //     + primaryResourceDesignValueFromModuleData 
       //     + secondaryResourceDesignValueFromModuleData
       //   )/parameterModel[0].hoursPerday;
       
       resultValueMS = generateReturnValue(
         primaryResourceDesignValueFromBaseDataMS,
         secondaryResourceDesignValueFromBaseDataMS,
         primaryResourceDesignValueFromModuleDataMS,
         secondaryResourceDesignValueFromModuleDataMS,
         parameterModel[0].hoursPerday,
         condition
       );
       // (
       //   primaryResourceDesignValueFromBaseDataMS 
       //     + secondaryResourceDesignValueFromBaseDataMS 
       //     + primaryResourceDesignValueFromModuleDataMS 
       //     + secondaryResourceDesignValueFromModuleDataMS
       //   )/parameterModel[0].hoursPerday;

       resultValueMSC = generateReturnValue(
         primaryResourceDesignValueFromBaseDataMSC,
         secondaryResourceDesignValueFromBaseDataMSC,
         primaryResourceDesignValueFromModuleDataMSC,
         secondaryResourceDesignValueFromModuleDataMSC,
         parameterModel[0].hoursPerday,
         condition
       );
       // (
       //   primaryResourceDesignValueFromBaseDataMSC 
       //     + secondaryResourceDesignValueFromBaseDataMSC
       //     + primaryResourceDesignValueFromModuleDataMSC 
       //     + secondaryResourceDesignValueFromModuleDataMSC
       //   )/parameterModel[0].hoursPerday;
       
     }
     await Promise.all([baseLoop, moduleLoop])
     return {resultValue, resultValueMS, resultValueMSC};
   } else {
     return {resultValue, resultValueMS, resultValueMSC};
   }
 } catch (error) {
   console.log("generateAnalysisDesignMValue error ==> ", error);
   return {resultValue, resultValueMS, resultValueMSC};
 }
}

const generateReturnValue = (val1: number, val2: number, val3: number, val4: number, hoursPerDay: number, condtion: boolean) => {
 if (condtion) {
   return (val1 + val2 + val3 + val4)/hoursPerDay
 }
 return (val1 + val2 + val3 + val4)
}


const baseReader = (baseItem: any, primaryResourceDesignValueFromBaseData: number, secondaryResourceDesignValueFromBaseData: number, x: number) => {
  x += 1;
  if (baseItem?.quantity && baseItem?.quantity > 0) { // Quantity greaterthan 0
    // (design*(split/100))*quantity    
    primaryResourceDesignValueFromBaseData += (baseItem?.designEstimate * (baseItem?.resourceSplit / 100)) * baseItem?.quantity
  } else {
    // design value
    primaryResourceDesignValueFromBaseData += (baseItem?.designEstimate * (baseItem?.resourceSplit / 100))
  }

  secondaryResourceDesignValueFromBaseData += (baseItem?.designEstimate * ((100 - baseItem?.resourceSplit) / 100))
  return {primaryResourceDesignValueFromBaseData, secondaryResourceDesignValueFromBaseData}
}

const moduleReader = (moduleDataItem: any, primaryResourceDesignValueFromModuleData: number, secondaryResourceDesignValueFromModuleData: number ,y: number) => {
  y += 1;
  // design*(split/100)
  // Design*((100-Split)/100)
  primaryResourceDesignValueFromModuleData += moduleDataItem?.moduleOverridePartnerSeerEstimateDesign * (moduleDataItem?.moduleSeerResourceSplit / 100)
  secondaryResourceDesignValueFromModuleData += moduleDataItem?.moduleOverridePartnerSeerEstimateDesign * ((100 - moduleDataItem?.moduleSeerResourceSplit) / 100)
  return {primaryResourceDesignValueFromModuleData, secondaryResourceDesignValueFromModuleData}
}