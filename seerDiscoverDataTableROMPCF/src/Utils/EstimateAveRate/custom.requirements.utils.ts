import { fitGapData, moscowsData } from "../../Constants/pickListData";

export const generateCustomRequirementMValue = async(inititlaData: any, condition: boolean) => {
  // need to check with 'Estimate - Resource Milestone'!$C$1
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
    },
    customRequirementBuild: {
      resultValue,
      resultValueMS,
      resultValueMSC
    }
  }
  // Must Custom Requirement Design
  let primaryResourceDesignValueFromCustomRequirment = 0;

  // Must Should Custom Requirement Design
  let primaryResourceDesignValueFromCustomRequirmentMS = 0;

  // Must Should Could Custom Requirement Design
  let primaryResourceDesignValueFromCustomRequirmentMSC = 0;

   // Must Custom Requirement Build
   let primaryResourceDesignValueBuildFromCustomRequirment = 0;

   // Must Should Custom Requirement Build
   let primaryResourceDesignValueBuildFromCustomRequirmentMS = 0;
 
   // Must Should Could Custom Requirement Build
   let primaryResourceDesignValueBuildFromCustomRequirmentMSC = 0;

  // seerMoscow
  try {
    const {BaseData, resourceModelData, ModuleData, parameterModel, CustomisationModels, CustomRequirmentModel} = inititlaData
    if (inititlaData) {

      const customRequirementLoop = await CustomRequirmentModel && CustomRequirmentModel.length && CustomRequirmentModel.map(async(customRequirementItem: any, customRequirementIndex: number) => {
        console.log('m CustomRequirmentModel => ', customRequirementItem);
        console.log('com ==> ', moscowsData?.[customRequirementItem?.mosCow] == moscowsData?.[100000000], fitGapData[customRequirementItem?.fitGap] != fitGapData[100000001]);
        
        // Must
        // && fitGapData[customisationItem?.seer_fitgap] != fitGapData[100000001]
        if (moscowsData?.[customRequirementItem?.mosCow] == moscowsData?.[100000000]) {
          //
          const resCustomRequirment = baseReader(customRequirementItem, primaryResourceDesignValueFromCustomRequirment, "design");
          primaryResourceDesignValueFromCustomRequirment = resCustomRequirment.primaryResourceDesignValueFromCustomRequirment

          const resCustomRequirmentBuild = baseReader(customRequirementItem, primaryResourceDesignValueBuildFromCustomRequirment, "build");
          primaryResourceDesignValueBuildFromCustomRequirment = resCustomRequirmentBuild.primaryResourceDesignValueFromCustomRequirment
        }

        // Must Should
        if ((moscowsData?.[customRequirementItem?.mosCow] == moscowsData?.[100000000] || moscowsData?.[customRequirementItem?.mosCow] == moscowsData?.[100000001])) {
          // !seenModuleMIds.has(moduleDataItem?.fitGapProductSeerModule?.id)
          const resCustomRequirment = baseReader(customRequirementItem, primaryResourceDesignValueFromCustomRequirmentMS, "design");
          primaryResourceDesignValueFromCustomRequirmentMS = resCustomRequirment.primaryResourceDesignValueFromCustomRequirment;
          console.log('switch MS primaryResourceDesignValueFromCustomRequirmentModel => ', primaryResourceDesignValueFromCustomRequirmentMS);
          const resCustomRequirmentBuild = baseReader(customRequirementItem, primaryResourceDesignValueBuildFromCustomRequirmentMS, "build");
          primaryResourceDesignValueBuildFromCustomRequirmentMS = resCustomRequirmentBuild.primaryResourceDesignValueFromCustomRequirment;
        }

        // Must Should Could
        if ((moscowsData?.[customRequirementItem?.mosCow] == moscowsData?.[100000000] || moscowsData?.[customRequirementItem?.mosCow] == moscowsData?.[100000001] || moscowsData?.[customRequirementItem?.mosCow] == moscowsData?.[100000002])) {
          //
          const resCustomRequirment = baseReader(customRequirementItem, primaryResourceDesignValueFromCustomRequirmentMSC, "design");
          primaryResourceDesignValueFromCustomRequirmentMSC = resCustomRequirment.primaryResourceDesignValueFromCustomRequirment;
          console.log('switch MSC primaryResourceDesignValueFromCustomRequirmentModel => ', primaryResourceDesignValueFromCustomRequirmentMSC);
          const resCustomRequirmentBuild = baseReader(customRequirementItem, primaryResourceDesignValueBuildFromCustomRequirmentMSC, "build");
          primaryResourceDesignValueBuildFromCustomRequirmentMSC = resCustomRequirmentBuild.primaryResourceDesignValueFromCustomRequirment;
        }
      });
      
      console.log("generateCustomRequirmentModelMValue true ==> ", CustomRequirmentModel.length);
      if (parameterModel?.length) {
        returnObject.customRequirement.resultValue = generateReturnValue(
          primaryResourceDesignValueFromCustomRequirment,
          parameterModel[0].hoursPerday,
          condition
        )
        returnObject.customRequirement.resultValueMS = generateReturnValue(
          primaryResourceDesignValueFromCustomRequirmentMSC,
          parameterModel[0].hoursPerday,
          condition
        )
        returnObject.customRequirement.resultValueMSC = 
        generateReturnValue(
          primaryResourceDesignValueFromCustomRequirmentMSC,
          parameterModel[0].hoursPerday,
          condition
        )

        returnObject.customRequirementBuild.resultValue = generateReturnValue(
          primaryResourceDesignValueBuildFromCustomRequirment,
          parameterModel[0].hoursPerday,
          condition
        )
        returnObject.customRequirementBuild.resultValueMS = generateReturnValue(
          primaryResourceDesignValueBuildFromCustomRequirmentMSC,
          parameterModel[0].hoursPerday,
          condition
        )
        returnObject.customRequirementBuild.resultValueMSC = 
        generateReturnValue(
          primaryResourceDesignValueBuildFromCustomRequirmentMSC,
          parameterModel[0].hoursPerday,
          condition
        )
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

const generateReturnValue = (val1: number, hoursPerDay: number, condtion: boolean) => {
  if (condtion) {
    return (val1)/hoursPerDay
  }
  return (val1)
}

const baseReader = (customRequirementItem: any, primaryResourceDesignValueFromCustomRequirment: number, type: string) => {
  primaryResourceDesignValueFromCustomRequirment += type === 'design' ? customRequirementItem?.design : customRequirementItem?.build
  return {primaryResourceDesignValueFromCustomRequirment}
}
