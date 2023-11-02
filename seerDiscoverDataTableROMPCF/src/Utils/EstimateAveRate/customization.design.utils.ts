import { fitGapData, moscowsData } from "../../Constants/pickListData";

export const generateCustomisationDesignMValue = async(inititlaData: any, condition: boolean) => {
  // need to check with 'Estimate - Resource Milestone'!$C$1
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
    customisationBuild: {
      resultValue,
      resultValueMS,
      resultValueMSC
    }
  }
  // Must Customisation Design
  let primaryResourceDesignValueFromCustomisationModels = 0;

  // Must Should Customisation Design
  let primaryResourceDesignValueFromCustomisationModelsMS = 0;

  // Must Should Could Customisation Design
  let primaryResourceDesignValueFromCustomisationModelsMSC = 0;

  // Must Customisation Build
  let primaryResourceDesignValueBuildFromCustomisationModels = 0;

  // Must Should Customisation Build
  let primaryResourceDesignValueBuildFromCustomisationModelsMS = 0;

  // Must Should Could Customisation Build
  let primaryResourceDesignValueBuildFromCustomisationModelsMSC = 0;

  // seerMoscow
  try {
    const {BaseData, resourceModelData, ModuleData, parameterModel, CustomisationModels} = inititlaData
    if (inititlaData) {
      

      const customizationLoop = await CustomisationModels && CustomisationModels.length && CustomisationModels.map(async(customisationItem: any, customisationIndex: number) => {
        
        // Must
        // && fitGapData[customisationItem?.seer_fitgap] != fitGapData[100000001]
        if (moscowsData?.[customisationItem?.seer_moscow] == moscowsData?.[100000000]) {
          //
          const resCustomisation = baseReader(customisationItem, primaryResourceDesignValueFromCustomisationModels, 'design');
          primaryResourceDesignValueFromCustomisationModels = resCustomisation.primaryResourceDesignValueFromCustomisationModels;
          const resCustomisationBuild = baseReader(customisationItem, primaryResourceDesignValueBuildFromCustomisationModels, 'build');
          primaryResourceDesignValueBuildFromCustomisationModels = resCustomisationBuild.primaryResourceDesignValueFromCustomisationModels;
        }

        // Must Should
        if ((moscowsData?.[customisationItem?.seer_moscow] == moscowsData?.[100000000] || moscowsData?.[customisationItem?.seer_moscow] == moscowsData?.[100000001])) {
          // !seenModuleMIds.has(moduleDataItem?.fitGapProductSeerModule?.id)
          const resCustomisation = baseReader(customisationItem, primaryResourceDesignValueFromCustomisationModelsMS, 'design');
          primaryResourceDesignValueFromCustomisationModelsMS = resCustomisation.primaryResourceDesignValueFromCustomisationModels;
          const resCustomisationBuild = baseReader(customisationItem, primaryResourceDesignValueBuildFromCustomisationModelsMS, 'build');
          primaryResourceDesignValueBuildFromCustomisationModelsMS = resCustomisationBuild.primaryResourceDesignValueFromCustomisationModels;
        }

        // Must Should Could
        if ((moscowsData?.[customisationItem?.seer_moscow] == moscowsData?.[100000000] || moscowsData?.[customisationItem?.seer_moscow] == moscowsData?.[100000001] || moscowsData?.[customisationItem?.seer_moscow] == moscowsData?.[100000002])) {
          //
          const resCustomisation = baseReader(customisationItem, primaryResourceDesignValueFromCustomisationModelsMSC, 'design');
          primaryResourceDesignValueFromCustomisationModelsMSC = resCustomisation.primaryResourceDesignValueFromCustomisationModels;
          const resCustomisationBuild = baseReader(customisationItem, primaryResourceDesignValueBuildFromCustomisationModelsMSC, 'build');
          primaryResourceDesignValueBuildFromCustomisationModelsMSC = resCustomisationBuild.primaryResourceDesignValueFromCustomisationModels;
        }
      });
      
      if (parameterModel?.length) {
        returnObject.customisation.resultValue = generateReturnValue(
          primaryResourceDesignValueFromCustomisationModels,
          parameterModel[0].hoursPerday,
          condition
        )
        
        returnObject.customisation.resultValueMS = generateReturnValue(
          primaryResourceDesignValueFromCustomisationModelsMS,
          parameterModel[0].hoursPerday,
          condition
        )

        returnObject.customisation.resultValueMSC =  generateReturnValue(
          primaryResourceDesignValueFromCustomisationModelsMSC,
          parameterModel[0].hoursPerday,
          condition
        )

        returnObject.customisationBuild.resultValue =  generateReturnValue(
          primaryResourceDesignValueBuildFromCustomisationModels,
          parameterModel[0].hoursPerday,
          condition
        )

        returnObject.customisationBuild.resultValueMS =  generateReturnValue(
          primaryResourceDesignValueBuildFromCustomisationModelsMS,
          parameterModel[0].hoursPerday,
          condition
        )

        returnObject.customisationBuild.resultValueMSC =  generateReturnValue(
          primaryResourceDesignValueBuildFromCustomisationModelsMSC,
          parameterModel[0].hoursPerday,
          condition
        )
        
      }
      await Promise.all([customizationLoop])
      return returnObject;
    } else {
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

const baseReader = (customisationItem: any, primaryResourceDesignValueFromCustomisationModels: number, type: string) => {
  primaryResourceDesignValueFromCustomisationModels += type === 'design' ? customisationItem?.seer_estimatedesign : customisationItem?.seer_estimatebuild
  return {primaryResourceDesignValueFromCustomisationModels}
}
