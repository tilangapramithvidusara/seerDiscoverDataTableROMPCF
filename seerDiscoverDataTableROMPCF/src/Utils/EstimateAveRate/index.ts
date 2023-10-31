import { fitGapData, moscowsData } from "../../Constants/pickListData";

export const generateIColoumnValue = async(inititlaData: any, type: string) => {
  const condition = true;
  let resultValue = 0
  
  try {
    const response = await generateAnalysisDesignMValue(inititlaData, type);
    console.log("response ====> ", response);
    
    if (condition) {
      const {parameterModel} = inititlaData;
      if (parameterModel?.length) {
        const { hoursPerday, hourlyRate } = parameterModel[0];
        resultValue = response * hoursPerday * hourlyRate?.value || 0
      }
      
      console.log("generateIColoumnValue true ==> ", resultValue);
      return resultValue;
    } else {
      console.log("generateIColoumnValue false ==> ", resultValue);
      return resultValue;
    }
  } catch (error) {
    console.log("generateIColoumnValue error ==> ", error);
    return 0;
  }
}

// C5 value generate
export const generateAnalysisDesignMValue = async(inititlaData: any, type: string) => {
  const condition = "Days"; // need to check with 'Estimate - Resource Milestone'!$C$1
  let resultValue = 0;
  let x = 0
  let y = 0
  // seerMoscow
  try {
    const {BaseData, resourceModelData, ModuleData, parameterModel} = inititlaData
    if (condition && inititlaData) {
      let primaryResourceDesignValueFromBaseData = 0;
      let secondaryResourceDesignValueFromBaseData = 0;
      let primaryResourceDesignValueFromModuleData = 0;
      let secondaryResourceDesignValueFromModuleData = 0;

      const seenBaseMIds = new Set();
      const seenBaseMSIds = new Set();
      const seenBaseMSCIds = new Set();
      const seenModuleMIds = new Set();
      const seenModuleMSIds = new Set();
      const seenModuleMSCIds = new Set();

      const baseLoop = await BaseData && BaseData.length && BaseData.map(async(baseItem: any, baseIndex: number) => {
        switch (type) {
          case "M":
            if (moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000000] && fitGapData[baseItem?.fitGap] != fitGapData[100000001]) {
              //
              const res = baseReader(baseItem, primaryResourceDesignValueFromBaseData, secondaryResourceDesignValueFromBaseData, x);
              primaryResourceDesignValueFromBaseData = res.primaryResourceDesignValueFromBaseData;
              secondaryResourceDesignValueFromBaseData = res.secondaryResourceDesignValueFromBaseData;
              console.log('switch M primaryResourceDesignValueFromBaseData => ', primaryResourceDesignValueFromBaseData);
              console.log('switch M secondaryResourceDesignValueFromBaseData => ', secondaryResourceDesignValueFromBaseData);
            }
            break;
          
          case "M/S":
            if ((moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000000] || moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000001]) && fitGapData[baseItem?.fitGap] != fitGapData[100000001]) {
              //
              const res = baseReader(baseItem, primaryResourceDesignValueFromBaseData, secondaryResourceDesignValueFromBaseData, x);
              primaryResourceDesignValueFromBaseData = res.primaryResourceDesignValueFromBaseData;
              secondaryResourceDesignValueFromBaseData = res.secondaryResourceDesignValueFromBaseData;
              console.log('switch MS primaryResourceDesignValueFromBaseData => ', primaryResourceDesignValueFromBaseData);
              console.log('switch MS secondaryResourceDesignValueFromBaseData => ', secondaryResourceDesignValueFromBaseData);
            }
            break;
          case "M/S/C":
            if ((moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000000] || moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000001] || moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000002]) && fitGapData[baseItem?.fitGap] != fitGapData[100000001]) {
              //
              const res = baseReader(baseItem, primaryResourceDesignValueFromBaseData, secondaryResourceDesignValueFromBaseData, x);
              primaryResourceDesignValueFromBaseData = res.primaryResourceDesignValueFromBaseData;
              secondaryResourceDesignValueFromBaseData = res.secondaryResourceDesignValueFromBaseData;
              console.log('switch MSC primaryResourceDesignValueFromBaseData => ', primaryResourceDesignValueFromBaseData);
              console.log('switch MSC secondaryResourceDesignValueFromBaseData => ', secondaryResourceDesignValueFromBaseData);
            }
            break;
          // default:
          //   break;
        }
        // if (moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000000] && fitGapData[baseItem?.fitGap] != fitGapData[100000001]) { // Equal to Must
        //   x += 1;
        //   if (baseItem?.quantity && baseItem?.quantity > 0) { // Quantity greaterthan 0
        //     // (design*(split/100))*quantity
        //     console.log('primaryResourceDesignValueFromBaseData => ', primaryResourceDesignValueFromBaseData, (baseItem?.designEstimate * (baseItem?.resourceSplit / 100)) * baseItem?.quantity);
            
        //     primaryResourceDesignValueFromBaseData += (baseItem?.designEstimate * (baseItem?.resourceSplit / 100)) * baseItem?.quantity
        //   } else {
        //     // design value
        //     console.log('primaryResourceDesignValueFromBaseData22 => ', primaryResourceDesignValueFromBaseData, (baseItem?.designEstimate * (baseItem?.resourceSplit / 100)));
        //     primaryResourceDesignValueFromBaseData += (baseItem?.designEstimate * (baseItem?.resourceSplit / 100))
        //   }

        //   secondaryResourceDesignValueFromBaseData += (baseItem?.designEstimate * ((100 - baseItem?.resourceSplit) / 100))

          
        // } else {
        //   //
        // }
      });
      
      const moduleLoop = await ModuleData && ModuleData?.length && ModuleData.map((moduleDataItem: any, moduleDataIndex: any) => {
        console.log('cc ==> ', moduleDataItem?.moduleSeerEstimateDesign, moduleDataItem?.moduleSeerResourceSplit, moduleDataItem?.moduleOverridePartnerSeerEstimateDesign);
        // console.log('ccw ==> ', moduleDataItem?.moduleSeerEstimateDesign * ((100 - moduleDataItem?.moduleSeerResourceSplit) / 100));
        switch (type) {
          case "M":
            if (moscowsData?.[moduleDataItem?.seerMoscow] == moscowsData?.[100000000]) {
              if (!seenModuleMIds.has(moduleDataItem?.fitGapProductSeerModule?.id)) {
                seenModuleMIds.add(moduleDataItem?.fitGapProductSeerModule?.id)
                const res = moduleReader(moduleDataItem, primaryResourceDesignValueFromModuleData, secondaryResourceDesignValueFromModuleData, y);
                primaryResourceDesignValueFromModuleData = res.primaryResourceDesignValueFromModuleData;
                secondaryResourceDesignValueFromModuleData = res.secondaryResourceDesignValueFromModuleData;
              }
              // const res = moduleReader(moduleDataItem, primaryResourceDesignValueFromModuleData, secondaryResourceDesignValueFromModuleData, y);
              // primaryResourceDesignValueFromModuleData = res.primaryResourceDesignValueFromModuleData;
              // secondaryResourceDesignValueFromModuleData = res.secondaryResourceDesignValueFromModuleData;
            }
            break;
          
          case "M/S":
            if (moscowsData?.[moduleDataItem?.seerMoscow] == moscowsData?.[100000000] || moscowsData?.[moduleDataItem?.seerMoscow] == moscowsData?.[100000001]) {
              //
              if (!seenModuleMSIds.has(moduleDataItem?.fitGapProductSeerModule?.id)) {
                seenModuleMSIds.add(moduleDataItem?.fitGapProductSeerModule?.id)
                const res = moduleReader(moduleDataItem, primaryResourceDesignValueFromModuleData, secondaryResourceDesignValueFromModuleData, y);
                primaryResourceDesignValueFromModuleData = res.primaryResourceDesignValueFromModuleData;
                secondaryResourceDesignValueFromModuleData = res.secondaryResourceDesignValueFromModuleData;
              }
              // const res = moduleReader(moduleDataItem, primaryResourceDesignValueFromModuleData, secondaryResourceDesignValueFromModuleData, y);
              // primaryResourceDesignValueFromModuleData = res.primaryResourceDesignValueFromModuleData;
              // secondaryResourceDesignValueFromModuleData = res.secondaryResourceDesignValueFromModuleData;
            }
            break;
          case "M/S/C":
            if (moscowsData?.[moduleDataItem?.seerMoscow] == moscowsData?.[100000000] || moscowsData?.[moduleDataItem?.seerMoscow] == moscowsData?.[100000001] || moscowsData?.[moduleDataItem?.seerMoscow] == moscowsData?.[100000002]) {
              //
              if (!seenModuleMSCIds.has(moduleDataItem?.fitGapProductSeerModule?.id)) {
                seenModuleMSCIds.add(moduleDataItem?.fitGapProductSeerModule?.id);
                console.log('cc ==>wwwww ==> ', seenModuleMSCIds, moduleDataItem?.moduleOverridePartnerSeerEstimateDesign, moduleDataItem?.moduleSeerEstimateDesign, moduleDataItem?.moduleOverrideCustomerSeerEstimateDesign);
              
                const res = moduleReader(moduleDataItem, primaryResourceDesignValueFromModuleData, secondaryResourceDesignValueFromModuleData, y);
                primaryResourceDesignValueFromModuleData = res.primaryResourceDesignValueFromModuleData;
                secondaryResourceDesignValueFromModuleData = res.secondaryResourceDesignValueFromModuleData;
                console.log('switch MSC primaryResourceDesignValueFromModuleData => ', primaryResourceDesignValueFromModuleData);
                console.log('switch MSC secondaryResourceDesignValueFromModuleData => ', secondaryResourceDesignValueFromModuleData);
              }
              // console.log('cc ==>wwwww ==> ', moduleDataItem?.moduleOverridePartnerSeerEstimateDesign, moduleDataItem?.moduleSeerEstimateDesign, moduleDataItem?.moduleOverrideCustomerSeerEstimateDesign);
              
              // const res = moduleReader(moduleDataItem, primaryResourceDesignValueFromModuleData, secondaryResourceDesignValueFromModuleData, y);
              // primaryResourceDesignValueFromModuleData = res.primaryResourceDesignValueFromModuleData;
              // secondaryResourceDesignValueFromModuleData = res.secondaryResourceDesignValueFromModuleData;
              // console.log('switch MSC primaryResourceDesignValueFromModuleData => ', primaryResourceDesignValueFromModuleData);
              // console.log('switch MSC secondaryResourceDesignValueFromModuleData => ', secondaryResourceDesignValueFromModuleData);
            }
            break;
          // default:
          //   break;
        }
        // if (moscowsData?.[moduleDataItem?.seerMoscow] == moscowsData?.[100000000]) {
        //   y += 1;
        //   // design*(split/100)
        //   // Design*((100-Split)/100)
        //   console.log('primaryResourceDesignValueFromModuleData => ', primaryResourceDesignValueFromModuleData, moduleDataItem?.moduleSeerEstimateDesign * (moduleDataItem?.moduleSeerResourceSplit / 100));
        //   primaryResourceDesignValueFromModuleData += moduleDataItem?.moduleOverridePartnerSeerEstimateDesign * (moduleDataItem?.moduleSeerResourceSplit / 100)
        //   console.log('secondaryResourceDesignValueFromModuleData => ', secondaryResourceDesignValueFromModuleData, moduleDataItem?.moduleSeerEstimateDesign * ((100 - moduleDataItem?.moduleSeerResourceSplit) / 100));
        //   secondaryResourceDesignValueFromModuleData += moduleDataItem?.moduleOverridePartnerSeerEstimateDesign * ((100 - moduleDataItem?.moduleSeerResourceSplit) / 100)
        // } else {
        //   //
        // }

      });
      console.log("generateAnalysisDesignMValue true ==> ", x, BaseData.length, y, ModuleData.length);
      console.log("primaryResourceDesignValueFromBaseData ===> ", primaryResourceDesignValueFromBaseData);
      console.log("secondaryResourceDesignValueFromBaseData ===> ", secondaryResourceDesignValueFromBaseData);
      console.log("primaryaResourceDesignValueFromModuleData ===> ", primaryResourceDesignValueFromModuleData);
      console.log("secondaryResourceDesignValueFromModuleData ===> ", secondaryResourceDesignValueFromModuleData);
      if (parameterModel?.length)
        resultValue = (
            primaryResourceDesignValueFromBaseData 
            + secondaryResourceDesignValueFromBaseData 
            + primaryResourceDesignValueFromModuleData 
            + secondaryResourceDesignValueFromModuleData
          )/parameterModel[0].hoursPerday
        console.log("resultValue => ", resultValue);
      await Promise.all([baseLoop, moduleLoop])
      return resultValue;
    } else {
      console.log("generateAnalysisDesignMValue false ==> ");
      return resultValue;
    }
  } catch (error) {
    console.log("generateAnalysisDesignMValue error ==> ", error);
    return 0;
  }
}
export const generateAnalysisDesignMValue2 = async (inititlaData: any) => {
  try {
    const { BaseData, ModuleData, parameterModel } = inititlaData;
    const resultValue = calculateResultValue(BaseData, ModuleData, parameterModel);
    
    console.log("generateAnalysisDesignMValue true ==> ");
    console.log("resultValue => ", resultValue);
    return resultValue;
  } catch (error) {
    console.log("generateAnalysisDesignMValue error ==> ", error);
    return 0;
  }
}

const calculateResultValue = (
  BaseData: any[],
  ModuleData: any[],
  parameterModel: any[]
) => {
  const primaryResourceDesignValueFromBaseData = BaseData.reduce((acc, baseItem) => {
    if (moscowsData?.[baseItem?.seerMoscow] === moscowsData?.[100000000]) {
      const quantityFactor = baseItem?.quantity > 0 ? baseItem?.quantity : 1;
      return acc + (baseItem?.designEstimate * (baseItem?.resourceSplit / 100) * quantityFactor);
    }
    return acc;
  }, 0);

  const secondaryResourceDesignValueFromBaseData = BaseData.reduce((acc, baseItem) => {
    if (moscowsData?.[baseItem?.seerMoscow] === moscowsData?.[100000000]) {
      return acc + (baseItem?.designEstimate * ((100 - baseItem?.resourceSplit) / 100));
    }
    return acc;
  }, 0);

  const primaryResourceDesignValueFromModuleData = ModuleData.reduce((acc, moduleDataItem) => {
    if (moscowsData?.[moduleDataItem?.seerMoscow] === moscowsData?.[100000000]) {
      return acc + (moduleDataItem?.moduleSeerEstimateDesign * (moduleDataItem?.moduleSeerResourceSplit / 100));
    }
    return acc;
  }, 0);

  const secondaryResourceDesignValueFromModuleData = ModuleData.reduce((acc, moduleDataItem) => {
    if (moscowsData?.[moduleDataItem?.seerMoscow] === moscowsData?.[100000000]) {
      return acc + (moduleDataItem?.moduleSeerEstimateDesign * ((100 - moduleDataItem?.moduleSeerResourceSplit) / 100));
    }
    return acc;
  }, 0);

  if (parameterModel?.length) {
    return (
      primaryResourceDesignValueFromBaseData +
      secondaryResourceDesignValueFromBaseData +
      primaryResourceDesignValueFromModuleData +
      secondaryResourceDesignValueFromModuleData
    ) / parameterModel[0].hoursPerday;
  }
  return 0;
};


const baseReader = (baseItem: any, primaryResourceDesignValueFromBaseData: number, secondaryResourceDesignValueFromBaseData: number, x: number) => {
  x += 1;
  if (baseItem?.quantity && baseItem?.quantity > 0) { // Quantity greaterthan 0
    // (design*(split/100))*quantity
    console.log('primaryResourceDesignValueFromBaseData => ', primaryResourceDesignValueFromBaseData, (baseItem?.designEstimate * (baseItem?.resourceSplit / 100)) * baseItem?.quantity);
    
    primaryResourceDesignValueFromBaseData += (baseItem?.designEstimate * (baseItem?.resourceSplit / 100)) * baseItem?.quantity
  } else {
    // design value
    console.log('primaryResourceDesignValueFromBaseData22 => ', primaryResourceDesignValueFromBaseData, (baseItem?.designEstimate * (baseItem?.resourceSplit / 100)));
    primaryResourceDesignValueFromBaseData += (baseItem?.designEstimate * (baseItem?.resourceSplit / 100))
  }

  secondaryResourceDesignValueFromBaseData += (baseItem?.designEstimate * ((100 - baseItem?.resourceSplit) / 100))
  return {primaryResourceDesignValueFromBaseData, secondaryResourceDesignValueFromBaseData}
}

const moduleReader = (moduleDataItem: any, primaryResourceDesignValueFromModuleData: number, secondaryResourceDesignValueFromModuleData: number ,y: number) => {
  y += 1;
  // design*(split/100)
  // Design*((100-Split)/100)
  console.log('primaryResourceDesignValueFromModuleData => ', primaryResourceDesignValueFromModuleData, moduleDataItem?.moduleSeerEstimateDesign * (moduleDataItem?.moduleSeerResourceSplit / 100));
  primaryResourceDesignValueFromModuleData += moduleDataItem?.moduleOverridePartnerSeerEstimateDesign * (moduleDataItem?.moduleSeerResourceSplit / 100)
  console.log('secondaryResourceDesignValueFromModuleData => ', secondaryResourceDesignValueFromModuleData, moduleDataItem?.moduleSeerEstimateDesign * ((100 - moduleDataItem?.moduleSeerResourceSplit) / 100));
  secondaryResourceDesignValueFromModuleData += moduleDataItem?.moduleOverridePartnerSeerEstimateDesign * ((100 - moduleDataItem?.moduleSeerResourceSplit) / 100)
  return {primaryResourceDesignValueFromModuleData, secondaryResourceDesignValueFromModuleData}
}