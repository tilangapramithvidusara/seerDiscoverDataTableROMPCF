import { fitGapData, moscowsData } from "../../Constants/pickListData";
import { generateCustomRequirementMValue } from "./custom.requirements.utils";
import { generateCustomisationDesignMValue } from "./customization.design.utils";
import { generateDesignReviewMValue } from "./design.review.utils";
import { generateDocumentationMValue } from "./documentation.utils";

export const generateIColoumnValue = async(inititlaData: any, title: string) => {
  const romParameter = "Days"
  const condition = romParameter === "Days";
  // ANALYSIS AND DESIGN
  let resultValue = 0;
  let resultValueMS = 0;
  let resultValueMSC = 0;

  let resultValueAnalisisDesign = 0;
  let resultValueMSAnalisisDesign = 0;
  let resultValueMSCAnalisisDesign = 0;

  let resultValueCustomisationDesign = 0;
  let resultValueMSCustomisationDesign = 0;
  let resultValueMSCCustomisationDesign = 0;

  let resultValueCustomRequirementDesign = 0;
  let resultValueMSCustomRequirementDesign = 0;
  let resultValueMSCCustomRequirementDesign = 0;

  let resultValueDocumentation = 0;
  let resultValueMSDocumentation = 0;
  let resultValueMSCDocumentation = 0;

  let resultValueDesignReview = 0;
  let resultValueMSDesignReview = 0;
  let resultValueMSCDesignReview = 0;

  // BUILD
  // let resultValue
  let resultValueConfiguration = 0;
  let resultValueMSConfiguration = 0;
  let resultValueMSCConfiguration = 0;

  
  try {
    const responseAnalisisDesign = await generateAnalysisDesignMValue(inititlaData, condition);
    const responseCustomisationDesign = await generateCustomisationDesignMValue(inititlaData, condition)
    const responseCustomRequirementDesign = await generateCustomRequirementMValue(inititlaData, condition);

    const responseDocumentation = await generateDocumentationMValue(inititlaData, {responseAnalisisDesign, responseCustomisationDesign, responseCustomRequirementDesign}, condition)
    const responseDesignReview = await generateDesignReviewMValue(inititlaData, {responseAnalisisDesign, responseCustomisationDesign, responseCustomRequirementDesign, responseDocumentation}, condition)

    console.log("response ====> ", responseAnalisisDesign, responseCustomisationDesign);

    const {parameterModel} = inititlaData;
    if (parameterModel?.length) {
      const { hoursPerday, hourlyRate } = parameterModel[0];
      resultValueAnalisisDesign = checkConditionAndGenerateValue(responseAnalisisDesign?.resultValue, hourlyRate?.value, hoursPerday, condition)
      resultValueMSAnalisisDesign = checkConditionAndGenerateValue(responseAnalisisDesign?.resultValueMS, hourlyRate?.value, hoursPerday, condition)
      resultValueMSCAnalisisDesign = checkConditionAndGenerateValue(responseAnalisisDesign?.resultValueMSC, hourlyRate?.value, hoursPerday, condition)

      resultValueCustomisationDesign = checkConditionAndGenerateValue(responseCustomisationDesign?.customisation?.resultValue, hourlyRate?.value, hoursPerday, condition);
      resultValueMSCustomisationDesign = checkConditionAndGenerateValue(responseCustomisationDesign?.customisation?.resultValueMS, hourlyRate?.value, hoursPerday, condition);
      resultValueMSCCustomisationDesign = checkConditionAndGenerateValue(responseCustomisationDesign?.customisation?.resultValueMSC, hourlyRate?.value, hoursPerday, condition);

      resultValueCustomRequirementDesign = checkConditionAndGenerateValue(responseCustomRequirementDesign?.customRequirement?.resultValue, hourlyRate?.value, hoursPerday, condition);
      resultValueMSCustomRequirementDesign = checkConditionAndGenerateValue(responseCustomRequirementDesign?.customRequirement?.resultValueMS, hourlyRate?.value, hoursPerday, condition);
      resultValueMSCCustomRequirementDesign = checkConditionAndGenerateValue(responseCustomRequirementDesign?.customRequirement?.resultValueMSC, hourlyRate?.value, hoursPerday, condition);

      resultValueDocumentation = checkConditionAndGenerateValue(responseDocumentation?.documentation?.resultValue, hourlyRate?.value, hoursPerday, condition);
      resultValueMSDocumentation = checkConditionAndGenerateValue(responseDocumentation?.documentation?.resultValueMS, hourlyRate?.value, hoursPerday, condition);
      resultValueMSCDocumentation = checkConditionAndGenerateValue(responseDocumentation?.documentation?.resultValueMSC, hourlyRate?.value, hoursPerday, condition);

      resultValueDesignReview = checkConditionAndGenerateValue(responseDesignReview?.designReview?.resultValue, hourlyRate?.value, hoursPerday, condition);
      resultValueMSDesignReview = checkConditionAndGenerateValue(responseDesignReview?.designReview?.resultValueMS, hourlyRate?.value, hoursPerday, condition);
      resultValueMSCDesignReview = checkConditionAndGenerateValue(responseDesignReview?.designReview?.resultValueMSC, hourlyRate?.value, hoursPerday, condition);

      resultValueConfiguration = checkConditionAndGenerateValue(responseAnalisisDesign?.configuration?.resultValue, hourlyRate?.value, hoursPerday, condition)
      resultValueMSConfiguration = checkConditionAndGenerateValue(responseAnalisisDesign?.configuration?.resultValueMS, hourlyRate?.value, hoursPerday, condition)
      resultValueMSCConfiguration = checkConditionAndGenerateValue(responseAnalisisDesign?.configuration?.resultValueMSC, hourlyRate?.value, hoursPerday, condition)
    }
    
    console.log("generateIColoumnValue resultValueAnalisisDesign true ==> ", resultValueAnalisisDesign, resultValueMSAnalisisDesign, resultValueMSCAnalisisDesign);
    console.log("generateIColoumnValue CustomisationDesign true ==> ", resultValueCustomisationDesign, resultValueMSCustomisationDesign, resultValueMSCCustomisationDesign);
    console.log("generateIColoumnValue customRequirement true ==> ", resultValueCustomRequirementDesign, resultValueMSCustomRequirementDesign, resultValueMSCCustomRequirementDesign);
    return {
      analysisDesing: {
        resultValue: resultValueAnalisisDesign,
        resultValueMS: resultValueMSAnalisisDesign, 
        resultValueMSC: resultValueMSCAnalisisDesign
      },
      customisationDesing: {
        resultValue: resultValueCustomisationDesign,
        resultValueMS: resultValueMSCustomisationDesign, 
        resultValueMSC: resultValueMSCCustomisationDesign
      },
      customRequirementDesing: {
        resultValue: resultValueCustomRequirementDesign,
        resultValueMS: resultValueMSCustomRequirementDesign, 
        resultValueMSC: resultValueMSCCustomRequirementDesign
      },
      documentation: {
        resultValue: resultValueDocumentation,
        resultValueMS: resultValueMSDocumentation, 
        resultValueMSC: resultValueMSCDocumentation
      },
      designReview: {
        resultValue: resultValueDesignReview,
        resultValueMS: resultValueMSDesignReview, 
        resultValueMSC: resultValueMSCDesignReview
      },
      configuration: {
        resultValue: resultValueConfiguration,
        resultValueMS: resultValueMSConfiguration, 
        resultValueMSC: resultValueMSCConfiguration
      }
    };
  } catch (error) {
    console.log("generateIColoumnValue error ==> ", error);
    return {
      analysisDesing: {
        resultValue,
        resultValueMS, 
        resultValueMSC
      },
      customisationDesing: {
        resultValue,
        resultValueMS, 
        resultValueMSC
      }
    }
  }
}

const checkConditionAndGenerateValue = (calculatedValue: number, hourlyRate: number, hoursPerDay: number, condition: boolean) => {
  if (condition) {
    return calculatedValue * hourlyRate * hoursPerDay || 0;
  }
  return calculatedValue * hourlyRate || 0;
}

// C5 value generate
export const generateAnalysisDesignMValue = async(inititlaData: any, condition: boolean) => {
   // need to check with 'Estimate - Resource Milestone'!$C$1
  let resultValue = 0;
  let resultValueMS = 0;
  let resultValueMSC = 0;
  let x = 0
  let y = 0

  // ANALYSIS AND DESIGN
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

  // CONFIGURATION

  let resultConfigurationValue = 0;
  let resultConfigurationValueMS = 0;
  let resultConfigurationValueMSC = 0;

  let buildEstimateConfigurationValueFromBaseData = 0;
  let buildEstimateConfigurationValueFromModlueData = 0;

  let buildEstimateConfigurationValueFromBaseDataMS = 0;
  let buildEstimateConfigurationValueFromModlueDataMS = 0;

  let buildEstimateConfigurationValueFromBaseDataMSC = 0;
  let buildEstimateConfigurationValueFromModlueDataMSC = 0;

  const seenModuleConfigurationMIds = new Set();
  const seenModuleConfigurationMSIds = new Set();
  const seenModuleConfigurationMSCIds = new Set();
  try {
    const {BaseData, resourceModelData, ModuleData, parameterModel} = inititlaData
    if (inititlaData) {

      // BASE DATA LOOP
      const baseLoop = await BaseData && BaseData.length && BaseData.map(async(baseItem: any, baseIndex: number) => {
        // ANALYSIS AND DESING
        // Must
        if (moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000000] && fitGapData[baseItem?.fitGap] != fitGapData[100000001]) {
          //
          const res = baseReader(baseItem, primaryResourceDesignValueFromBaseData, secondaryResourceDesignValueFromBaseData, x);
          primaryResourceDesignValueFromBaseData = res.primaryResourceDesignValueFromBaseData;
          secondaryResourceDesignValueFromBaseData = res.secondaryResourceDesignValueFromBaseData;
          console.log('switch M primaryResourceDesignValueFromBaseData => ', primaryResourceDesignValueFromBaseData);
          console.log('switch M secondaryResourceDesignValueFromBaseData => ', secondaryResourceDesignValueFromBaseData);
        }

        // Must Should
        if ((moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000000] || moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000001]) && fitGapData[baseItem?.fitGap] != fitGapData[100000001]) {
          //
          const res = baseReader(baseItem, primaryResourceDesignValueFromBaseDataMS, secondaryResourceDesignValueFromBaseDataMS, x);
          primaryResourceDesignValueFromBaseDataMS = res.primaryResourceDesignValueFromBaseData;
          secondaryResourceDesignValueFromBaseDataMS = res.secondaryResourceDesignValueFromBaseData;
          console.log('switch MS primaryResourceDesignValueFromBaseData => ', primaryResourceDesignValueFromBaseDataMS);
          console.log('switch MS secondaryResourceDesignValueFromBaseData => ', secondaryResourceDesignValueFromBaseDataMS);
        }

        // Must Should Could
        if ((moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000000] || moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000001] || moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000002]) && fitGapData[baseItem?.fitGap] != fitGapData[100000001]) {
          //
          const res = baseReader(baseItem, primaryResourceDesignValueFromBaseDataMSC, secondaryResourceDesignValueFromBaseDataMSC, x);
          primaryResourceDesignValueFromBaseDataMSC = res.primaryResourceDesignValueFromBaseData;
          secondaryResourceDesignValueFromBaseDataMSC = res.secondaryResourceDesignValueFromBaseData;
          console.log('switch MSC primaryResourceDesignValueFromBaseData => ', primaryResourceDesignValueFromBaseDataMSC);
          console.log('switch MSC secondaryResourceDesignValueFromBaseData => ', secondaryResourceDesignValueFromBaseDataMSC);
        }

        // CONFIGURATION
        // Must

        if (moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000000] && fitGapData[baseItem?.fitGap] != fitGapData[100000001]) {
          // (baseItem?.designEstimate * (baseItem?.resourceSplit / 100)) * baseItem?.quantity
          buildEstimateConfigurationValueFromBaseData += 
          baseItem?.quantity > 0 ? baseItem?.buildEstimate * (baseItem?.resourceSplit / 100) * baseItem?.quantity : baseItem?.buildEstimate * (baseItem?.resourceSplit / 100)
        }

        // Must Should
        if ((moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000000] || moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000001]) && fitGapData[baseItem?.fitGap] != fitGapData[100000001]) {
          buildEstimateConfigurationValueFromBaseDataMS += 
          baseItem?.quantity > 0 ? baseItem?.buildEstimate * (baseItem?.resourceSplit / 100) * baseItem?.quantity : baseItem?.buildEstimate * (baseItem?.resourceSplit / 100)
        }

        // Must Should Could
        if ((moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000000] || moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000001] || moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000002]) && fitGapData[baseItem?.fitGap] != fitGapData[100000001]) {
          buildEstimateConfigurationValueFromBaseDataMSC += 
          baseItem?.quantity > 0 ? baseItem?.buildEstimate * (baseItem?.resourceSplit / 100) * baseItem?.quantity : baseItem?.buildEstimate * (baseItem?.resourceSplit / 100)
        }

      });
      
      const moduleLoop = await ModuleData && ModuleData?.length && ModuleData.map((moduleDataItem: any, moduleDataIndex: any) => {
        console.log('cc ==> ', moduleDataItem?.moduleSeerEstimateDesign, moduleDataItem?.moduleSeerResourceSplit, moduleDataItem?.moduleOverridePartnerSeerEstimateDesign);
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
            console.log('cc ==>wwwww ==> ', seenModuleMSCIdsMSC, moduleDataItem?.moduleOverridePartnerSeerEstimateDesign, moduleDataItem?.moduleSeerEstimateDesign, moduleDataItem?.moduleOverrideCustomerSeerEstimateDesign);
          
            const res = moduleReader(moduleDataItem, primaryResourceDesignValueFromModuleDataMSC, secondaryResourceDesignValueFromModuleDataMSC, y);
            primaryResourceDesignValueFromModuleDataMSC = res.primaryResourceDesignValueFromModuleData;
            secondaryResourceDesignValueFromModuleDataMSC = res.secondaryResourceDesignValueFromModuleData;
            console.log('switch MSC primaryResourceDesignValueFromModuleData => ', primaryResourceDesignValueFromModuleDataMSC);
            console.log('switch MSC secondaryResourceDesignValueFromModuleData => ', secondaryResourceDesignValueFromModuleDataMSC);
          }
        }

        // CONFIGURATION  moduleOverrideCustomerSeerEstimateBuild  moduleSeerEstimateBuild moduleOverridePartnerSeerEstimateBuild

        // Must
        if (moscowsData?.[moduleDataItem?.seerMoscow] == moscowsData?.[100000000]) {
          if (!seenModuleConfigurationMIds.has(moduleDataItem?.fitGapProductSeerModule?.id)) {
            seenModuleConfigurationMIds.add(moduleDataItem?.fitGapProductSeerModule?.id)
            buildEstimateConfigurationValueFromModlueData += (
              moduleDataItem?.moduleOverridePartnerSeerEstimateBuild * (moduleDataItem?.moduleSeerResourceSplit / 100)
              ) + 
            (moduleDataItem?.moduleOverridePartnerSeerEstimateBuild * ((100 - moduleDataItem?.moduleSeerResourceSplit) / 100))
          }
        }

        // Must Should
        if (moscowsData?.[moduleDataItem?.seerMoscow] == moscowsData?.[100000000] || moscowsData?.[moduleDataItem?.seerMoscow] == moscowsData?.[100000001]) {
          if (!seenModuleConfigurationMSIds.has(moduleDataItem?.fitGapProductSeerModule?.id)) {
            seenModuleConfigurationMSIds.add(moduleDataItem?.fitGapProductSeerModule?.id)
            buildEstimateConfigurationValueFromModlueDataMS += (
              moduleDataItem?.moduleOverridePartnerSeerEstimateBuild * (moduleDataItem?.moduleSeerResourceSplit / 100)
              ) + 
            (moduleDataItem?.moduleOverridePartnerSeerEstimateBuild * ((100 - moduleDataItem?.moduleSeerResourceSplit) / 100))
          }
        }

        // Must Should Could
        if (moscowsData?.[moduleDataItem?.seerMoscow] == moscowsData?.[100000000] || moscowsData?.[moduleDataItem?.seerMoscow] == moscowsData?.[100000001] || moscowsData?.[moduleDataItem?.seerMoscow] == moscowsData?.[100000002]) {
          if (!seenModuleConfigurationMSCIds.has(moduleDataItem?.fitGapProductSeerModule?.id)) {
            seenModuleConfigurationMSCIds.add(moduleDataItem?.fitGapProductSeerModule?.id)
            buildEstimateConfigurationValueFromModlueDataMSC += (
              moduleDataItem?.moduleOverridePartnerSeerEstimateBuild * (moduleDataItem?.moduleSeerResourceSplit / 100)
              ) + 
            (moduleDataItem?.moduleOverridePartnerSeerEstimateBuild * ((100 - moduleDataItem?.moduleSeerResourceSplit) / 100))
          }
        }
      });
      console.log("generateAnalysisDesignMValue true ==> ", BaseData.length, ModuleData.length);
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

        resultConfigurationValue = generateReturnValue(
          buildEstimateConfigurationValueFromBaseData, 
          buildEstimateConfigurationValueFromModlueData, 0, 0, 
          parameterModel[0].hoursPerday, 
          condition
        )
        // (buildEstimateConfigurationValueFromBaseData + buildEstimateConfigurationValueFromModlueData)/parameterModel[0].hoursPerday
        resultConfigurationValueMS = resultConfigurationValue = generateReturnValue(
          buildEstimateConfigurationValueFromBaseDataMS, 
          buildEstimateConfigurationValueFromModlueDataMS, 0, 0, 
          parameterModel[0].hoursPerday, 
          condition
        )
        //(buildEstimateConfigurationValueFromBaseDataMS + buildEstimateConfigurationValueFromModlueDataMS)/parameterModel[0].hoursPerday
        resultConfigurationValueMSC = resultConfigurationValue = generateReturnValue(
          buildEstimateConfigurationValueFromBaseDataMSC, 
          buildEstimateConfigurationValueFromModlueDataMSC, 0, 0, 
          parameterModel[0].hoursPerday, 
          condition
        )
        //(buildEstimateConfigurationValueFromBaseDataMSC + buildEstimateConfigurationValueFromModlueDataMSC)/parameterModel[0].hoursPerday
        // (
        //   primaryResourceDesignValueFromBaseDataMSC 
        //     + secondaryResourceDesignValueFromBaseDataMSC
        //     + primaryResourceDesignValueFromModuleDataMSC 
        //     + secondaryResourceDesignValueFromModuleDataMSC
        //   )/parameterModel[0].hoursPerday;
        
      }
        console.log("resultValue => ", resultValue);
        console.log('mm ===> ', 
        buildEstimateConfigurationValueFromBaseData, 
        buildEstimateConfigurationValueFromBaseData/8, 
        buildEstimateConfigurationValueFromModlueData, 
        (buildEstimateConfigurationValueFromBaseData + buildEstimateConfigurationValueFromModlueData)/8);
      await Promise.all([baseLoop, moduleLoop])
      return {resultValue, resultValueMS, resultValueMSC, configuration: {
        resultValue: resultConfigurationValue,
        resultValueMS: resultConfigurationValueMS,
        resultValueMSC: resultConfigurationValueMSC,
      }};
    } else {
      console.log("generateAnalysisDesignMValue false ==> ");
      return {resultValue, resultValueMS, resultValueMSC, configuration: {
        resultValue: resultConfigurationValue,
        resultValueMS: resultConfigurationValueMS,
        resultValueMSC: resultConfigurationValueMSC,
      }};
    }
  } catch (error) {
    console.log("generateAnalysisDesignMValue error ==> ", error);
    return {resultValue, resultValueMS, resultValueMSC, configuration: {
      resultValue: resultConfigurationValue,
      resultValueMS: resultConfigurationValueMS,
      resultValueMSC: resultConfigurationValueMSC,
    }};
  }
}

const generateReturnValue = (val1: number, val2: number, val3: number, val4: number, hoursPerDay: number, condtion: boolean) => {
  if (condtion) {
    return (val1 + val2 + val3 + val4)/hoursPerDay
  }
  return (val1 + val2 + val3 + val4)
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
    if (moscowsData?.[baseItem?.seerMoscow] === moscowsData?.[100000000] && fitGapData[baseItem?.fitGap] != fitGapData[100000001]) {
      const quantityFactor = baseItem?.quantity > 0 ? baseItem?.quantity : 1;
      return acc + (baseItem?.designEstimate * (baseItem?.resourceSplit / 100) * quantityFactor);
    }
    return acc;
  }, 0);

  const secondaryResourceDesignValueFromBaseData = BaseData.reduce((acc, baseItem) => {
    if (moscowsData?.[baseItem?.seerMoscow] === moscowsData?.[100000000] && fitGapData[baseItem?.fitGap] != fitGapData[100000001]) {
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
  // console.log('primaryResourceDesignValueFromModuleData => ', primaryResourceDesignValueFromModuleData, moduleDataItem?.moduleSeerEstimateDesign * (moduleDataItem?.moduleSeerResourceSplit / 100));
  primaryResourceDesignValueFromModuleData += moduleDataItem?.moduleOverridePartnerSeerEstimateDesign * (moduleDataItem?.moduleSeerResourceSplit / 100)
  // console.log('secondaryResourceDesignValueFromModuleData => ', secondaryResourceDesignValueFromModuleData, moduleDataItem?.moduleSeerEstimateDesign * ((100 - moduleDataItem?.moduleSeerResourceSplit) / 100));
  secondaryResourceDesignValueFromModuleData += moduleDataItem?.moduleOverridePartnerSeerEstimateDesign * ((100 - moduleDataItem?.moduleSeerResourceSplit) / 100)
  return {primaryResourceDesignValueFromModuleData, secondaryResourceDesignValueFromModuleData}
}