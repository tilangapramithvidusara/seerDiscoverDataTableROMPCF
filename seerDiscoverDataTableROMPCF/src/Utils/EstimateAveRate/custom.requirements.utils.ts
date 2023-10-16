import { fitGapData, moscowsData } from "../../Constants/pickListData";

export const generateCustomRequirementMValue = async(inititlaData: any) => {
  const condition = "Days"; // need to check with 'Estimate - Resource Milestone'!$C$1
  let resultValue = 0;
  let resultValueMS = 0;
  let resultValueMSC = 0;
  let x = 0
  let y = 0

  let returnObject = {
    customRequirement: {
      resultValue,
      resultValueMS,
      resultValueMSC
    }
  }
  // seerMoscow
  try {
    const {BaseData, resourceModelData, ModuleData, parameterModel, CustomisationModels, CustomRequirmentModel} = inititlaData
    if (condition && inititlaData) {
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

      const customRequirementLoop = await CustomRequirmentModel && CustomRequirmentModel.length && CustomRequirmentModel.map(async(customRequirementItem: any, customRequirementIndex: number) => {
        console.log('m CustomRequirmentModel => ', customRequirementItem);
        console.log('com ==> ', moscowsData?.[customRequirementItem?.mosCow] == moscowsData?.[100000000], fitGapData[customRequirementItem?.fitGap] != fitGapData[100000001]);
        
        // Must
        // && fitGapData[customisationItem?.seer_fitgap] != fitGapData[100000001]
        if (moscowsData?.[customRequirementItem?.mosCow] == moscowsData?.[100000000]) {
          //
          const resCustomRequirment = baseReader(customRequirementItem, primaryResourceDesignValueFromCustomRequirment, secondaryResourceDesignValueFromCustomRequirment);
          primaryResourceDesignValueFromCustomRequirment = resCustomRequirment.primaryResourceDesignValueFromCustomRequirment
        }

        // Must Should
        if ((moscowsData?.[customRequirementItem?.mosCow] == moscowsData?.[100000000] || moscowsData?.[customRequirementItem?.mosCow] == moscowsData?.[100000001])) {
          // !seenModuleMIds.has(moduleDataItem?.fitGapProductSeerModule?.id)
          const resCustomRequirment = baseReader(customRequirementItem, primaryResourceDesignValueFromCustomRequirmentMS, secondaryResourceDesignValueFromCustomRequirmentMS, x);
          primaryResourceDesignValueFromCustomRequirmentMS = resCustomRequirment.primaryResourceDesignValueFromCustomRequirment;
          secondaryResourceDesignValueFromCustomRequirmentMS = resCustomRequirment.secondaryResourceDesignValueFromCustomRequirment;
          console.log('switch MS primaryResourceDesignValueFromCustomRequirmentModel => ', primaryResourceDesignValueFromCustomRequirmentMS);
          console.log('switch MS secondaryResourceDesignValueFromCustomRequirmentModel => ', secondaryResourceDesignValueFromCustomRequirmentMS);
        }

        // Must Should Could
        if ((moscowsData?.[customRequirementItem?.mosCow] == moscowsData?.[100000000] || moscowsData?.[customRequirementItem?.mosCow] == moscowsData?.[100000001] || moscowsData?.[customRequirementItem?.mosCow] == moscowsData?.[100000002])) {
          //
          const resCustomRequirment = baseReader(customRequirementItem, primaryResourceDesignValueFromCustomRequirmentMSC, secondaryResourceDesignValueFromCustomRequirmentMSC, x);
          primaryResourceDesignValueFromCustomRequirmentMSC = resCustomRequirment.primaryResourceDesignValueFromCustomRequirment;
          secondaryResourceDesignValueFromCustomRequirmentMSC = resCustomRequirment.secondaryResourceDesignValueFromCustomRequirment;
          console.log('switch MSC primaryResourceDesignValueFromCustomRequirmentModel => ', primaryResourceDesignValueFromCustomRequirmentMSC);
          console.log('switch MSC secondaryResourceDesignValueFromCustomRequirmentModel => ', secondaryResourceDesignValueFromCustomRequirmentMSC);
        }
      });
      
      console.log("generateCustomRequirmentModelMValue true ==> ", CustomRequirmentModel.length);
      if (parameterModel?.length) {
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
      await Promise.all([customRequirementLoop])
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

const baseReader = (customRequirementItem: any, primaryResourceDesignValueFromCustomRequirment: number, secondaryResourceDesignValueFromCustomRequirment: number, x?: number) => {
  primaryResourceDesignValueFromCustomRequirment += customRequirementItem?.design
  return {primaryResourceDesignValueFromCustomRequirment, secondaryResourceDesignValueFromCustomRequirment}
}
