import { parameterKeyIndex } from "../../Constants/parametersSetting";
import { fitGapData, moscowsData } from "../../Constants/pickListData";
import {
  c1AverageRate,
  c1AverageRateMilestone,
  d1AverageRate,
  d1AverageRateMilestone,
  e1AverageRate,
  e1AverageRateMilestone,
} from "../../Constants/fteConstants";

export const generateCustomRequirementMValue = async(inititlaData: any, condition: boolean, settingParameters?: any, isSnapshotModeEnable?: boolean) => {
  // need to check with 'Estimate - Resource Milestone'!$C$1
  const hasParameters = settingParameters && isSnapshotModeEnable
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
    },
    customRequirementMilestone: {
      resultValue,
      resultValueMS,
      resultValueMSC
    },
    customRequirementBuildMilestone: {
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

   // Must Custom Requirement Design
  let primaryResourceDesignValueFromCustomRequirmentMilestone = 0;
  // Must Should Custom Requirement Design
  let primaryResourceDesignValueFromCustomRequirmentMilestoneMS = 0;
  // Must Should Could Custom Requirement Design
  let primaryResourceDesignValueFromCustomRequirmentMilestoneMSC = 0;

   // Must Custom Requirement Build
   let primaryResourceDesignValueBuildFromCustomRequirmentMilestone = 0;
   // Must Should Custom Requirement Build
   let primaryResourceDesignValueBuildFromCustomRequirmentMilestoneMS = 0;
   // Must Should Could Custom Requirement Build
   let primaryResourceDesignValueBuildFromCustomRequirmentMilestoneMSC = 0;

  // seerMoscow
  try {
    const {BaseData, resourceModelData, ModuleData, parameterModel, CustomisationModels, CustomRequirmentModel} = inititlaData
    let {hoursPerday} = parameterModel[0]
    if (hasParameters) {
      hoursPerday = parseFloat(settingParameters?.formattedData[
        parameterKeyIndex.hoursPerDay
      ]?.currentValue || '0');
    }
    if (inititlaData) {

      const customRequirementLoop = await CustomRequirmentModel && CustomRequirmentModel.length && CustomRequirmentModel.map(async(customRequirementItem: any, customRequirementIndex: number) => {
        
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
          const resCustomRequirmentBuild = baseReader(customRequirementItem, primaryResourceDesignValueBuildFromCustomRequirmentMS, "build");
          primaryResourceDesignValueBuildFromCustomRequirmentMS = resCustomRequirmentBuild.primaryResourceDesignValueFromCustomRequirment;
        }
       
        // Must Should Could
        if ((moscowsData?.[customRequirementItem?.mosCow] == moscowsData?.[100000000] || moscowsData?.[customRequirementItem?.mosCow] == moscowsData?.[100000001] || moscowsData?.[customRequirementItem?.mosCow] == moscowsData?.[100000002])) {
          //
          const resCustomRequirment = baseReader(customRequirementItem, primaryResourceDesignValueFromCustomRequirmentMSC, "design");
          primaryResourceDesignValueFromCustomRequirmentMSC = resCustomRequirment.primaryResourceDesignValueFromCustomRequirment;
          const resCustomRequirmentBuild = baseReader(customRequirementItem, primaryResourceDesignValueBuildFromCustomRequirmentMSC, "build");
          primaryResourceDesignValueBuildFromCustomRequirmentMSC = resCustomRequirmentBuild.primaryResourceDesignValueFromCustomRequirment;
        }
      });
      
      if (parameterModel?.length) {
        returnObject.customRequirement.resultValue = generateReturnValue(
          primaryResourceDesignValueFromCustomRequirment,
          hoursPerday,
          condition
        )
        returnObject.customRequirement.resultValueMS = generateReturnValue(
          primaryResourceDesignValueFromCustomRequirmentMS,
          hoursPerday,
          condition
        )
        returnObject.customRequirement.resultValueMSC = 
        generateReturnValue(
          primaryResourceDesignValueFromCustomRequirmentMSC,
          hoursPerday,
          condition
        )

        returnObject.customRequirementBuild.resultValue = generateReturnValue(
          primaryResourceDesignValueBuildFromCustomRequirment,
          hoursPerday,
          condition
        )
        returnObject.customRequirementBuild.resultValueMS = generateReturnValue(
          primaryResourceDesignValueBuildFromCustomRequirmentMS,
          hoursPerday,
          condition
        )
        returnObject.customRequirementBuild.resultValueMSC = 
        generateReturnValue(
          primaryResourceDesignValueBuildFromCustomRequirmentMSC,
          hoursPerday,
          condition
        )
        // milestone
        returnObject.customRequirementMilestone.resultValue = generateReturnValue(
          primaryResourceDesignValueFromCustomRequirmentMilestone,
          hoursPerday,
          condition
        )
        returnObject.customRequirementMilestone.resultValueMS = generateReturnValue(
          primaryResourceDesignValueFromCustomRequirmentMilestoneMS,
          hoursPerday,
          condition
        )
        returnObject.customRequirementMilestone.resultValueMSC = 
        generateReturnValue(
          primaryResourceDesignValueFromCustomRequirmentMilestoneMSC,
          hoursPerday,
          condition
        )

        returnObject.customRequirementBuildMilestone.resultValue = generateReturnValue(
          primaryResourceDesignValueBuildFromCustomRequirmentMilestone,
          hoursPerday,
          condition
        )
        returnObject.customRequirementBuildMilestone.resultValueMS = generateReturnValue(
          primaryResourceDesignValueBuildFromCustomRequirmentMilestoneMS,
          hoursPerday,
          condition
        )
        returnObject.customRequirementBuildMilestone.resultValueMSC = 
        generateReturnValue(
          primaryResourceDesignValueBuildFromCustomRequirmentMilestoneMSC,
          hoursPerday,
          condition
        )
      }
      await Promise.all([customRequirementLoop])      
      return returnObject;
    } else {      
      return returnObject;
    }
  } catch (error) {    
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
