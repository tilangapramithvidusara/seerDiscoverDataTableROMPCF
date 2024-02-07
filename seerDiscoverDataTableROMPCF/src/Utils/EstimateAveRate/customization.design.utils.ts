import { parameterKeyIndex } from "../../Constants/parametersSetting";
import { fitGapData, moscowsData } from "../../Constants/pickListData";

export const generateCustomisationDesignMValue = async(inititlaData: any, condition: boolean, settingParameters?: any, isSnapshotModeEnable?: boolean) => {
  // need to check with 'Estimate - Resource Milestone'!$C$1
  const hasParameters = settingParameters && isSnapshotModeEnable
  let resultValue = 0;
  let resultValueMS = 0;
  let resultValueMSC = 0;
  let x = 0
  let y = 0
  // DESIGN
  let cmCustomisationDesign: any = [];

  let cmCustomisationDesignMS: any = [];

  let cmCustomisationDesignMSC: any = [];

  // BUILD
  let cmCustomisationBuild: any = [];

  let cmCustomisationBuildMS: any = [];

  let cmCustomisationBuildMSC: any = [];

  let returnObject = {
    customisation: {
      resultValue,
      resultValueMS,
      resultValueMSC,
      resultBase: [],
      resultBaseMS: [],
      resultBaseMSC: [],
      resultBaseValue: 0,
      resultBaseValueMS: 0,
      resultBaseValueMSC: 0
    },
    customisationBuild: {
      resultValue,
      resultValueMS,
      resultValueMSC,
      resultBase: [],
      resultBaseMS: [],
      resultBaseMSC: [],
      resultBaseValue: 0,
      resultBaseValueMS: 0,
      resultBaseValueMSC: 0
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
    let {hourlyRate, hoursPerday} = parameterModel[0]
    if (hasParameters) {
      hoursPerday = parseFloat(settingParameters?.formattedData[
        parameterKeyIndex.hoursPerDay
      ]?.currentValue || '0');
    }
    if (inititlaData) {
      

      const customizationLoop = await CustomisationModels && CustomisationModels.length && CustomisationModels.map(async(customisationItem: any, customisationIndex: number) => {
        
        // Must
        // && fitGapData[customisationItem?.seer_fitgap] != fitGapData[100000001]
        if (moscowsData?.[customisationItem?.seer_moscow] == moscowsData?.[100000000]) {
          //
          cmCustomisationDesign.push(customisationItem);
          cmCustomisationBuild.push(customisationItem);
          const resCustomisation = baseReader(customisationItem, primaryResourceDesignValueFromCustomisationModels, 'design');
          primaryResourceDesignValueFromCustomisationModels = resCustomisation.primaryResourceDesignValueFromCustomisationModels;
          const resCustomisationBuild = baseReader(customisationItem, primaryResourceDesignValueBuildFromCustomisationModels, 'build');
          primaryResourceDesignValueBuildFromCustomisationModels = resCustomisationBuild.primaryResourceDesignValueFromCustomisationModels;
        }

        // Must Should
        if ((moscowsData?.[customisationItem?.seer_moscow] == moscowsData?.[100000000] || moscowsData?.[customisationItem?.seer_moscow] == moscowsData?.[100000001])) {
          // !seenModuleMIds.has(moduleDataItem?.fitGapProductSeerModule?.id)
          cmCustomisationDesignMS.push(customisationItem);
          cmCustomisationBuildMS.push(customisationItem);
          const resCustomisation = baseReader(customisationItem, primaryResourceDesignValueFromCustomisationModelsMS, 'design');
          primaryResourceDesignValueFromCustomisationModelsMS = resCustomisation.primaryResourceDesignValueFromCustomisationModels;
          const resCustomisationBuild = baseReader(customisationItem, primaryResourceDesignValueBuildFromCustomisationModelsMS, 'build');
          primaryResourceDesignValueBuildFromCustomisationModelsMS = resCustomisationBuild.primaryResourceDesignValueFromCustomisationModels;
        }

        // Must Should Could
        if ((moscowsData?.[customisationItem?.seer_moscow] == moscowsData?.[100000000] || moscowsData?.[customisationItem?.seer_moscow] == moscowsData?.[100000001] || moscowsData?.[customisationItem?.seer_moscow] == moscowsData?.[100000002])) {
          //
          cmCustomisationDesignMSC.push(customisationItem);
          cmCustomisationBuildMSC.push(customisationItem);
          const resCustomisation = baseReader(customisationItem, primaryResourceDesignValueFromCustomisationModelsMSC, 'design');
          primaryResourceDesignValueFromCustomisationModelsMSC = resCustomisation.primaryResourceDesignValueFromCustomisationModels;
          const resCustomisationBuild = baseReader(customisationItem, primaryResourceDesignValueBuildFromCustomisationModelsMSC, 'build');
          primaryResourceDesignValueBuildFromCustomisationModelsMSC = resCustomisationBuild.primaryResourceDesignValueFromCustomisationModels;
        }
      });
      
      if (parameterModel?.length) {
        returnObject.customisation.resultValue = generateReturnValue(
          primaryResourceDesignValueFromCustomisationModels,
          hoursPerday,
          condition
        )
        returnObject.customisation.resultBase = cmCustomisationDesign;
        returnObject.customisation.resultBaseValue = returnObject.customisation.resultValue;
        // cmCustomisationDesignMSC
        
        returnObject.customisation.resultValueMS = generateReturnValue(
          primaryResourceDesignValueFromCustomisationModelsMS,
          hoursPerday,
          condition
        )
        returnObject.customisation.resultBaseMS = cmCustomisationDesignMS;
        returnObject.customisation.resultBaseValueMS = returnObject.customisation.resultValueMS;

        returnObject.customisation.resultValueMSC =  generateReturnValue(
          primaryResourceDesignValueFromCustomisationModelsMSC,
          hoursPerday,
          condition
        )
        returnObject.customisation.resultBaseMSC = cmCustomisationDesignMSC;
        returnObject.customisation.resultBaseValueMSC = returnObject.customisation.resultValueMSC;

        returnObject.customisationBuild.resultValue =  generateReturnValue(
          primaryResourceDesignValueBuildFromCustomisationModels,
          hoursPerday,
          condition
        )
        returnObject.customisationBuild.resultBase = cmCustomisationBuild;
        returnObject.customisationBuild.resultBaseValue = returnObject.customisationBuild.resultValue;

        returnObject.customisationBuild.resultValueMS =  generateReturnValue(
          primaryResourceDesignValueBuildFromCustomisationModelsMS,
          hoursPerday,
          condition
        )
        returnObject.customisationBuild.resultBaseMS = cmCustomisationBuildMS;
        returnObject.customisationBuild.resultBaseValueMS = returnObject.customisationBuild.resultValueMS;

        returnObject.customisationBuild.resultValueMSC =  generateReturnValue(
          primaryResourceDesignValueBuildFromCustomisationModelsMSC,
          hoursPerday,
          condition
        )
        returnObject.customisationBuild.resultBaseMSC = cmCustomisationBuildMSC;
        returnObject.customisationBuild.resultBaseValueMSC = returnObject.customisationBuild.resultValueMSC;
        
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
