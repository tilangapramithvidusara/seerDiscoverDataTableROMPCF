import { hoursPerWeek, romParameter } from "../../Constants/fteConstants";
import { parameterKeyIndex } from "../../Constants/parametersSetting";
import { fitGapData, moscowsData, percentData } from "../../Constants/pickListData";
let para_d4 = 10/100;

export const generateDocumentationMValue = async(inititlaData: any, analisisDesignPre: {responseCustomRequirementDesign: any, responseAnalisisDesign: any, responseCustomisationDesign: any}, condition: boolean, isFte?: boolean, settingParameters?: any, isSnapshotModeEnable?: boolean) => {
  // need to check with 'Estimate - Resource Milestone'!$C$1
  let fte = isFte ? true : false;
  let hasParameters = settingParameters && isSnapshotModeEnable;
  console.log('doc ==> ', hasParameters, settingParameters, isSnapshotModeEnable);
  
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
    documentation: {
      resultValue,
      resultValueMS,
      resultValueMSC
    },
    documentationAveRateMilestone: {
      resultValue,
      resultValueMS,
      resultValueMSC
    }
  }
  // seerMoscow
  try {
    const {parameterModel, fteValue} = inititlaData
    if (inititlaData) {
      // Must Custom Requirement
      const mustCal = analisisDesignPre?.responseCustomRequirementDesign.customRequirement?.resultValue + analisisDesignPre?.responseAnalisisDesign?.resultValue + analisisDesignPre?.responseCustomisationDesign.customisation?.resultValue
      const mustShouldCal = analisisDesignPre?.responseCustomRequirementDesign.customRequirement?.resultValueMS + analisisDesignPre?.responseAnalisisDesign?.resultValueMS + analisisDesignPre?.responseCustomisationDesign.customisation?.resultValueMS
      const mustShouldCouldCal = analisisDesignPre?.responseCustomRequirementDesign.customRequirement?.resultValueMSC + analisisDesignPre?.responseAnalisisDesign?.resultValueMSC + analisisDesignPre?.responseCustomisationDesign.customisation?.resultValueMSC

      let {hoursPerday} = parameterModel[0]
      if (hasParameters) {
        hoursPerday = parseInt(settingParameters?.formattedData[
          parameterKeyIndex.hoursPerDay
        ]?.currentValue || '0');
      }
      console.log('doc hoursPerday ==> ', hoursPerday, fteValue);
      
      const F4Parameter = hoursPerday * 5;
      const O37 = 0// to find this we need to complete Estimate Avg Rate Milestone table
      const H6 = 29// if days === c2 => O37/5 else (O37/8)/5
      const h7 = fteValue?.totalFte // need to gets it from api
      const g7 = fteValue?.totalFteMS
      const f7 = fteValue?.totalFteMSC
      const h8 = h7 * hoursPerWeek
      const g8 = g7 * hoursPerWeek
      const f8 = f7 * hoursPerWeek

      if (fte) {
        if (hasParameters) {
          const documentationValue = parseInt(settingParameters?.formattedData[
            parameterKeyIndex.documentation
          ]?.currentValue || '0')
          const documentationTypeValue = parseInt(settingParameters?.formattedData[
            parameterKeyIndex.documentation
          ]?.typeValueCurrent)

          console.log('doc => ', documentationValue, documentationTypeValue);
          
          // parameter values
          if (percentData?.[
            documentationTypeValue
            ] == percentData?.[100000001]) {
            returnObject.documentationAveRateMilestone.resultValue = mustCal * (
              documentationValue/100);
            returnObject.documentationAveRateMilestone.resultValueMS = mustShouldCal * (
              documentationValue/100);
            returnObject.documentationAveRateMilestone.resultValueMSC = mustShouldCouldCal * (
              documentationValue/100);
          } else {
            returnObject.documentationAveRateMilestone.resultValue = mustCal * (para_d4); // not collateRequirment it need to get from backend
            returnObject.documentationAveRateMilestone.resultValueMS = mustShouldCal * (para_d4);
            returnObject.documentationAveRateMilestone.resultValueMSC = mustShouldCouldCal * (para_d4);
          }
        } else {
          if (percentData?.[parameterModel[0]?.collateRequirmentType] === percentData?.[100000001]) {
            returnObject.documentationAveRateMilestone.resultValue = mustCal * (parameterModel[0]?.collateRequirment/100);
            returnObject.documentationAveRateMilestone.resultValueMS = mustShouldCal * (parameterModel[0]?.collateRequirment/100);
            returnObject.documentationAveRateMilestone.resultValueMSC = mustShouldCouldCal * (parameterModel[0]?.collateRequirment/100);
          } else {
            returnObject.documentationAveRateMilestone.resultValue = mustCal * (para_d4); // not collateRequirment it need to get from backend
            returnObject.documentationAveRateMilestone.resultValueMS = mustShouldCal * (para_d4);
            returnObject.documentationAveRateMilestone.resultValueMSC = mustShouldCouldCal * (para_d4);
          }
        }
      } else {
        // hoursPerDay
        if (hasParameters) {
          // need to change according to parameters
          const documentationValue = parseInt(settingParameters?.formattedData[
            parameterKeyIndex.documentation
          ]?.currentValue || '0')
          const documentationTypeValue = parseInt(settingParameters?.formattedData[
            parameterKeyIndex.documentation
          ]?.typeValueCurrent)

          if (percentData?.[documentationTypeValue] == percentData?.[100000001]) {

            returnObject.documentation.resultValue = mustCal * (documentationValue/100);
            returnObject.documentation.resultValueMS = mustShouldCal * (documentationValue/100);
            returnObject.documentation.resultValueMSC = mustShouldCouldCal * (documentationValue/100);
          } else if (percentData?.[documentationTypeValue] == percentData?.[100000002]) { // hours
            
            returnObject.documentation.resultValue = romParameter == "Hours" ? documentationValue :  documentationValue/hoursPerday // if c2 === hours then get direct parameterModel[0]?.collateRequirment
            returnObject.documentation.resultValueMS = romParameter == "Hours" ? documentationValue :  documentationValue/hoursPerday // if c2 === hours then get direct parameterModel[0]?.collateRequirment
            returnObject.documentation.resultValueMSC = romParameter == "Hours" ? documentationValue :  documentationValue/hoursPerday
          } else if (percentData?.[documentationTypeValue] == percentData?.[100000000]) { // FTE
            returnObject.documentation.resultValue = romParameter == "Hours" ? (documentationValue * h8) : (documentationValue * h8)/hoursPerday // if c2 === hours then get direct (parameterModel[0]?.collateRequirment * h8)  // need to find H8
            returnObject.documentation.resultValueMS = romParameter == "Hours" ? (documentationValue * g8) : (documentationValue * g8)/hoursPerday // if c2 === hours then get direct parameterModel[0]?.collateRequirment * g8  // need to find G8
            returnObject.documentation.resultValueMSC = romParameter == "Hours" ? (documentationValue * f8) :  (documentationValue * f8)/hoursPerday
          }
        } else {
          if (percentData?.[parameterModel[0]?.collateRequirmentType] === percentData?.[100000001]) {

            returnObject.documentation.resultValue = mustCal * (parameterModel[0]?.collateRequirment/100);
            returnObject.documentation.resultValueMS = mustShouldCal * (parameterModel[0]?.collateRequirment/100);
            returnObject.documentation.resultValueMSC = mustShouldCouldCal * (parameterModel[0]?.collateRequirment/100);
          } else if (percentData?.[parameterModel[0]?.collateRequirmentType] === percentData?.[100000002]) { // hours
            
            returnObject.documentation.resultValue = romParameter == "Hours" ? parameterModel[0]?.collateRequirment :  parameterModel[0]?.collateRequirment/parameterModel[0]?.hoursPerday // if c2 === hours then get direct parameterModel[0]?.collateRequirment
            returnObject.documentation.resultValueMS = romParameter == "Hours" ? parameterModel[0]?.collateRequirment :  parameterModel[0]?.collateRequirment/parameterModel[0]?.hoursPerday // if c2 === hours then get direct parameterModel[0]?.collateRequirment
            returnObject.documentation.resultValueMSC = romParameter == "Hours" ? parameterModel[0]?.collateRequirment :  parameterModel[0]?.collateRequirment/parameterModel[0]?.hoursPerday
          } else if (percentData?.[parameterModel[0]?.collateRequirmentType] === percentData?.[100000000]) { // FTE
            returnObject.documentation.resultValue = romParameter == "Hours" ? (parameterModel[0]?.collateRequirment * h8) : (parameterModel[0]?.collateRequirment * h8)/parameterModel[0]?.hoursPerday // if c2 === hours then get direct (parameterModel[0]?.collateRequirment * h8)  // need to find H8
            returnObject.documentation.resultValueMS = romParameter == "Hours" ? (parameterModel[0]?.collateRequirment * g8) : (parameterModel[0]?.collateRequirment * g8)/parameterModel[0]?.hoursPerday // if c2 === hours then get direct parameterModel[0]?.collateRequirment * g8  // need to find G8
            returnObject.documentation.resultValueMSC = romParameter == "Hours" ? (parameterModel[0]?.collateRequirment * f8) :  (parameterModel[0]?.collateRequirment * f8)/parameterModel[0]?.hoursPerday
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
