import { fitGapData, moscowsData } from "../../Constants/pickListData";

export const generateCustomisationDesignMValue = async(inititlaData: any) => {
  const condition = "Days"; // need to check with 'Estimate - Resource Milestone'!$C$1
  let resultValue = 0;
  let resultValueMS = 0;
  let resultValueMSC = 0;
  let x = 0
  let y = 0

  let returnObject = {
    customisation: {
      resultValue,
      resultValueMS,
      resultValueMSC
    },
    customRequirement: {
      resultValue,
      resultValueMS,
      resultValueMSC
    }
  }
  // seerMoscow
  try {
    const {BaseData, resourceModelData, ModuleData, parameterModel, CustomisationModels} = inititlaData
    if (condition && inititlaData) {
      // Must Customisation
      let primaryResourceDesignValueFromCustomisationModels = 0;
      let secondaryResourceDesignValueFromBaseData = 0;

      // Must Should Customisation
      let primaryResourceDesignValueFromCustomisationModelsMS = 0;
      let secondaryResourceDesignValueFromBaseDataMS = 0;

      // Must Should Could Customisation
      let primaryResourceDesignValueFromCustomisationModelsMSC = 0;
      let secondaryResourceDesignValueFromBaseDataMSC = 0;

      // Must Custom Requirement
      let primaryResourceDesignValueFromCustomRequirment = 0;
      let secondaryResourceDesignValueFromCustomRequirment = 0;
      let primaryResourceDesignValueFromModuleData = 0;
      let secondaryResourceDesignValueFromModuleData = 0;

      // Must Should Custom Requirement
      let primaryResourceDesignValueFromCustomRequirmentMS = 0;
      let secondaryResourceDesignValueFromCustomRequirmentMS = 0;
      let primaryResourceDesignValueFromModuleDataMS = 0;
      let secondaryResourceDesignValueFromModuleDataMS = 0;

      // Must Should Could Custom Requirement
      let primaryResourceDesignValueFromCustomRequirmentMSC = 0;
      let secondaryResourceDesignValueFromCustomRequirmentMSC = 0;
      let primaryResourceDesignValueFromModuleDataMSC = 0;
      let secondaryResourceDesignValueFromModuleDataMSC = 0;

      // Must
      const seenCustomRequirmentMIds = new Set();
      const seenModuleMIds = new Set();

      // Must Should
      const seenCustomRequirmentMSIdsMS = new Set();
      const seenModuleMSIdsMS = new Set();

      // Must Should Could
      const seenCustomRequirmentMSCIdsMSC = new Set();
      const seenModuleMSCIdsMSC = new Set();

      const customizationLoop = await CustomisationModels && CustomisationModels.length && CustomisationModels.map(async(customisationItem: any, customisationIndex: number) => {
        console.log('m customisationItem => ', customisationItem);
        console.log('com ==> ', moscowsData?.[customisationItem?.seer_moscow] == moscowsData?.[100000000], fitGapData[customisationItem?.seer_fitgap] != fitGapData[100000001]);
        
        // Must
        // && fitGapData[customisationItem?.seer_fitgap] != fitGapData[100000001]
        if (moscowsData?.[customisationItem?.seer_moscow] == moscowsData?.[100000000]) {
          //
          const resCustomisation = baseReader(customisationItem, primaryResourceDesignValueFromCustomisationModels, secondaryResourceDesignValueFromBaseData, x);
          primaryResourceDesignValueFromCustomisationModels = resCustomisation.primaryResourceDesignValueFromCustomisationModels;
          console.log('switch M primaryResourceDesignValueFromCustomisationModels => ', primaryResourceDesignValueFromCustomisationModels);

          const resCustomRequirment = baseReaderCustomRequirement(customisationItem, primaryResourceDesignValueFromCustomRequirment, secondaryResourceDesignValueFromCustomRequirment);
          primaryResourceDesignValueFromCustomRequirment = resCustomRequirment.primaryResourceDesignValueFromCustomRequirment
        }

        // Must Should
        if ((moscowsData?.[customisationItem?.seer_moscow] == moscowsData?.[100000000] || moscowsData?.[customisationItem?.seer_moscow] == moscowsData?.[100000001])) {
          // !seenModuleMIds.has(moduleDataItem?.fitGapProductSeerModule?.id)
          const resCustomisation = baseReader(customisationItem, primaryResourceDesignValueFromCustomisationModelsMS, secondaryResourceDesignValueFromBaseDataMS, x);
          primaryResourceDesignValueFromCustomisationModelsMS = resCustomisation.primaryResourceDesignValueFromCustomisationModels;
          secondaryResourceDesignValueFromBaseDataMS = resCustomisation.secondaryResourceDesignValueFromBaseData;
          console.log('switch MS primaryResourceDesignValueFromCustomisationModels => ', primaryResourceDesignValueFromCustomisationModelsMS);
          console.log('switch MS secondaryResourceDesignValueFromBaseData => ', secondaryResourceDesignValueFromBaseDataMS);
        }

        // Must Should Could
        if ((moscowsData?.[customisationItem?.seer_moscow] == moscowsData?.[100000000] || moscowsData?.[customisationItem?.seer_moscow] == moscowsData?.[100000001] || moscowsData?.[customisationItem?.seer_moscow] == moscowsData?.[100000002])) {
          //
          const resCustomisation = baseReader(customisationItem, primaryResourceDesignValueFromCustomisationModelsMSC, secondaryResourceDesignValueFromBaseDataMSC, x);
          primaryResourceDesignValueFromCustomisationModelsMSC = resCustomisation.primaryResourceDesignValueFromCustomisationModels;
          secondaryResourceDesignValueFromBaseDataMSC = resCustomisation.secondaryResourceDesignValueFromBaseData;
          console.log('switch MSC primaryResourceDesignValueFromCustomisationModels => ', primaryResourceDesignValueFromCustomisationModelsMSC);
          console.log('switch MSC secondaryResourceDesignValueFromBaseData => ', secondaryResourceDesignValueFromBaseDataMSC);
        }
      });
      
      console.log("generateCustomisationDesignMValue true ==> ", CustomisationModels.length);
      if (parameterModel?.length) {
        returnObject.customisation.resultValue = (
            primaryResourceDesignValueFromCustomisationModels 
          )/parameterModel[0].hoursPerday;
        
        returnObject.customisation.resultValueMS = (
          primaryResourceDesignValueFromCustomisationModelsMS 
          )/parameterModel[0].hoursPerday;

        returnObject.customisation.resultValueMSC = (
          primaryResourceDesignValueFromCustomisationModelsMSC 
          )/parameterModel[0].hoursPerday;

          returnObject.customRequirement.resultValue = (
            primaryResourceDesignValueFromCustomRequirment 
          )/parameterModel[0].hoursPerday;
        
        returnObject.customRequirement.resultValueMS = (
          primaryResourceDesignValueFromCustomRequirmentMS 
          )/parameterModel[0].hoursPerday;

        returnObject.customRequirement.resultValueMSC = (
          primaryResourceDesignValueFromCustomRequirmentMSC 
          )/parameterModel[0].hoursPerday;
        
      }
        console.log("resultValue => ", resultValue);
      await Promise.all([customizationLoop])
      return returnObject;
    } else {
      console.log("generateAnalysisDesignMValue false ==> ");
      return returnObject;
    }
  } catch (error) {
    console.log("generateAnalysisDesignMValue error ==> ", error);
    return returnObject;
  }
}

const baseReader = (customisationItem: any, primaryResourceDesignValueFromCustomisationModels: number, secondaryResourceDesignValueFromBaseData: number, x?: number) => {
  primaryResourceDesignValueFromCustomisationModels += customisationItem?.seer_estimatedesign
  return {primaryResourceDesignValueFromCustomisationModels, secondaryResourceDesignValueFromBaseData}
}

// Custom Requirment
const baseReaderCustomRequirement = (customisationItem: any, primaryResourceDesignValueFromCustomRequirment: number, secondaryResourceDesignValueFromCustomRequirment: number, x?: number) => {
  primaryResourceDesignValueFromCustomRequirment += customisationItem?.seer_estimatedesign * (customisationItem?.seer_resourcesplit / 100)
  // += moduleDataItem?.moduleOverridePartnerSeerEstimateDesign * (moduleDataItem?.moduleSeerResourceSplit / 100)
  // += moduleDataItem?.moduleOverridePartnerSeerEstimateDesign * ((100 - moduleDataItem?.moduleSeerResourceSplit) / 100)
  return {primaryResourceDesignValueFromCustomRequirment, secondaryResourceDesignValueFromCustomRequirment}
}