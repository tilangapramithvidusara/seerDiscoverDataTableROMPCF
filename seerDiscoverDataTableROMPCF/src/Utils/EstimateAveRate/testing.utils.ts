import { hoursPerWeek, romParameter } from "../../Constants/fteConstants";
import { parameterKeyIndex } from "../../Constants/parametersSetting";
import { fitGapData, moscowsData, percentData } from "../../Constants/pickListData";
let para_d4 = 10/100;

export const generateTestingMValue = async(inititlaData: any, analisisDesignPre: {responseCustomRequirementDesign: any, responseAnalisisDesign: any, responseCustomisationDesign: any, responseIntegration: any}, condition: boolean, isFte?: boolean, settingParameters?: any, isSnapshotModeEnable?: boolean) => {
  // need to check with 'Estimate - Resource Milestone'!$C$1
  let hasParameters = settingParameters && isSnapshotModeEnable;
  let fte = isFte ? true : false;
  if (hasParameters) {
    para_d4 = parseInt(settingParameters?.formattedData[
      parameterKeyIndex.fteBase
    ]?.currentValue || '0')
    console.log("doc ==> ", para_d4);
    
  }
  let resultValue = 0;
  let resultValueMS = 0;
  let resultValueMSC = 0;
  let x = 0
  let y = 0

  let returnObject = {
    testing: {
      resultValue,
      resultValueMS,
      resultValueMSC
    },
    testingAveRateMilestone: {
      resultValue,
      resultValueMS,
      resultValueMSC
    }
  }
  // seerMoscow
  try {
    const {parameterModel, fteValue} = inititlaData
    if (inititlaData) {
      let {hoursPerday} = parameterModel[0]
      if (hasParameters) {
        hoursPerday = parseInt(settingParameters?.formattedData[
          parameterKeyIndex.hoursPerDay
        ]?.currentValue || '0');
      }
      // Must Custom Requirement
      const mustCal = 
        (analisisDesignPre?.responseCustomRequirementDesign?.customRequirementBuild?.resultValue || 0) + 
        (analisisDesignPre?.responseAnalisisDesign?.configuration?.resultValue || 0) + 
        (analisisDesignPre?.responseCustomisationDesign.customisationBuild?.resultValue || 0) + 
        (analisisDesignPre?.responseIntegration.integration?.resultValue || 0)
      const mustShouldCal = 
        (analisisDesignPre?.responseCustomRequirementDesign?.customRequirementBuild?.resultValueMS || 0) + 
        (analisisDesignPre?.responseAnalisisDesign?.configuration?.resultValueMS || 0) + 
        (analisisDesignPre?.responseCustomisationDesign.customisationBuild?.resultValueMS || 0) + 
        (analisisDesignPre?.responseIntegration.integration?.resultValueMS || 0)
      const mustShouldCouldCal = 
        (analisisDesignPre?.responseCustomRequirementDesign?.customRequirementBuild?.resultValueMSC || 0) +
        (analisisDesignPre?.responseAnalisisDesign?.configuration?.resultValueMSC || 0) + 
        (analisisDesignPre?.responseCustomisationDesign.customisationBuild?.resultValueMSC || 0) + 
        (analisisDesignPre?.responseIntegration.integration?.resultValueMSC || 0)
      const F4Parameter = hoursPerday * 5;
      const O37 = 0// to find this we need to complete Estimate Avg Rate Milestone table
      const H6 = 29// if days === c2 => O37/5 else (O37/8)/5
      const h7 = fteValue?.totalFte // need to gets it from api
      const g7 = fteValue?.totalFteMS
      const f7 = fteValue?.totalFteMSC
      const h8 = h7 * F4Parameter
      // hoursPerWeek
      const g8 = g7 * F4Parameter
      // hoursPerWeek
      const f8 = f7 * F4Parameter
      // hoursPerWeek

      if (fte) {
        if (hasParameters) {
          const testingValue = parseInt(settingParameters?.formattedData[
            parameterKeyIndex.testing
          ]?.currentValue || '0')
          const testingTypeValue = parseInt(settingParameters?.formattedData[
            parameterKeyIndex.testing
          ]?.typeValueCurrent)

          if (percentData?.[testingTypeValue] == percentData?.[100000001]) {
            returnObject.testingAveRateMilestone.resultValue = mustCal * (testingValue/100);
            returnObject.testingAveRateMilestone.resultValueMS = mustShouldCal * (testingValue/100);
            returnObject.testingAveRateMilestone.resultValueMSC = mustShouldCouldCal * (testingValue/100);
          } else {
            returnObject.testingAveRateMilestone.resultValue = mustCal * (para_d4); // not testing it need to get from backend
            returnObject.testingAveRateMilestone.resultValueMS = mustShouldCal * (para_d4);
            returnObject.testingAveRateMilestone.resultValueMSC = mustShouldCouldCal * (para_d4);
          }
        } else {
          if (percentData?.[parameterModel[0]?.testingType] === percentData?.[100000001]) {
            returnObject.testingAveRateMilestone.resultValue = mustCal * (parameterModel[0]?.testing/100);
            returnObject.testingAveRateMilestone.resultValueMS = mustShouldCal * (parameterModel[0]?.testing/100);
            returnObject.testingAveRateMilestone.resultValueMSC = mustShouldCouldCal * (parameterModel[0]?.testing/100);
          } else {
            returnObject.testingAveRateMilestone.resultValue = mustCal * (para_d4); // not testing it need to get from backend
            returnObject.testingAveRateMilestone.resultValueMS = mustShouldCal * (para_d4);
            returnObject.testingAveRateMilestone.resultValueMSC = mustShouldCouldCal * (para_d4);
          }
        }
        
      } else {
        if (hasParameters) {
          const testingValue = parseInt(settingParameters?.formattedData[
            parameterKeyIndex.testing
          ]?.currentValue || '0')
          const testingTypeValue = parseInt(settingParameters?.formattedData[
            parameterKeyIndex.testing
          ]?.typeValueCurrent)

          if (percentData?.[testingTypeValue] === percentData?.[100000001]) {

            returnObject.testing.resultValue = mustCal * (testingValue/100);
            returnObject.testing.resultValueMS = mustShouldCal * (testingValue/100);
            returnObject.testing.resultValueMSC = mustShouldCouldCal * (testingValue/100);
            returnObject.testingAveRateMilestone.resultValue = mustCal * (testingValue/100);
            returnObject.testingAveRateMilestone.resultValueMS = mustShouldCal * (testingValue/100);
            returnObject.testingAveRateMilestone.resultValueMSC = mustShouldCouldCal * (testingValue/100);
          } else if (percentData?.[testingTypeValue] === percentData?.[100000002]) { // hours
            
            returnObject.testing.resultValue =  romParameter == "Hours" ? testingValue : testingValue/hoursPerday // if c2 === hours then get direct parameterModel[0]?.testing
            returnObject.testing.resultValueMS = romParameter == "Hours" ? testingValue : testingValue/hoursPerday // if c2 === hours then get direct parameterModel[0]?.testing
            returnObject.testing.resultValueMSC = romParameter == "Hours" ? testingValue : testingValue/hoursPerday
          } else if (percentData?.[testingTypeValue] === percentData?.[100000000]) { // FTE
            // dont need yet
            returnObject.testing.resultValue = romParameter == "Hours" ? (testingValue * h8) : (testingValue * h8)/hoursPerday // if c2 === hours then get direct (parameterModel[0]?.testing * h8)  // need to find H8
            returnObject.testing.resultValueMS = romParameter == "Hours" ? (testingValue * g8) : (testingValue * g8)/hoursPerday // if c2 === hours then get direct parameterModel[0]?.testing * g8  // need to find G8
            returnObject.testing.resultValueMSC = romParameter == "Hours" ? (testingValue * f8) : (testingValue * f8)/hoursPerday // if c2 === hours then get direct parameterModel[0]?.testing * f8  // need to find F8
          }
        } else {
          if (percentData?.[parameterModel[0]?.testingType] === percentData?.[100000001]) {

            returnObject.testing.resultValue = mustCal * (parameterModel[0]?.testing/100);
            returnObject.testing.resultValueMS = mustShouldCal * (parameterModel[0]?.testing/100);
            returnObject.testing.resultValueMSC = mustShouldCouldCal * (parameterModel[0]?.testing/100);
            returnObject.testingAveRateMilestone.resultValue = mustCal * (parameterModel[0]?.testing/100);
            returnObject.testingAveRateMilestone.resultValueMS = mustShouldCal * (parameterModel[0]?.testing/100);
            returnObject.testingAveRateMilestone.resultValueMSC = mustShouldCouldCal * (parameterModel[0]?.testing/100);
          } else if (percentData?.[parameterModel[0]?.testingType] === percentData?.[100000002]) { // hours
            
            returnObject.testing.resultValue =  romParameter == "Hours" ? parameterModel[0]?.testing : parameterModel[0]?.testing/parameterModel[0]?.hoursPerday // if c2 === hours then get direct parameterModel[0]?.testing
            returnObject.testing.resultValueMS = romParameter == "Hours" ? parameterModel[0]?.testing : parameterModel[0]?.testing/parameterModel[0]?.hoursPerday // if c2 === hours then get direct parameterModel[0]?.testing
            returnObject.testing.resultValueMSC = romParameter == "Hours" ? parameterModel[0]?.testing : parameterModel[0]?.testing/parameterModel[0]?.hoursPerday
          } else if (percentData?.[parameterModel[0]?.testingType] === percentData?.[100000000]) { // FTE
            // dont need yet
            returnObject.testing.resultValue = romParameter == "Hours" ? (parameterModel[0]?.testing * h8) : (parameterModel[0]?.testing * h8)/parameterModel[0]?.hoursPerday // if c2 === hours then get direct (parameterModel[0]?.testing * h8)  // need to find H8
            returnObject.testing.resultValueMS = romParameter == "Hours" ? (parameterModel[0]?.testing * g8) : (parameterModel[0]?.testing * g8)/parameterModel[0]?.hoursPerday // if c2 === hours then get direct parameterModel[0]?.testing * g8  // need to find G8
            returnObject.testing.resultValueMSC = romParameter == "Hours" ? (parameterModel[0]?.testing * f8) : (parameterModel[0]?.testing * f8)/parameterModel[0]?.hoursPerday // if c2 === hours then get direct parameterModel[0]?.testing * f8  // need to find F8
          }
        }
        
      }      
      
      await Promise.all([returnObject])
      return returnObject;
    } else {
      return returnObject;
    }
  } catch (error) {
    console.log("generateAnalysisDesignMValue error ==> ", error);
    return returnObject;
  }
}
