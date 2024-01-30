import { hoursPerWeek, romParameter } from "../../Constants/fteConstants";
import { parameterKeyIndex } from "../../Constants/parametersSetting";
import { fitGapData, moscowsData, percentData } from "../../Constants/pickListData";
let para_d4 = 10/100;

export const generateDesignReviewMValue = async(inititlaData: any, analisisDesignPre: {responseCustomRequirementDesign: any, responseAnalisisDesign: any, responseCustomisationDesign: any, responseDocumentation: any}, condition: boolean, isFte?: boolean, settingParameters?: any, isSnapshotModeEnable?: boolean) => {
  // need to check with 'Estimate - Resource Milestone'!$C$1
  let fte = isFte ? true : false;
  let hasParameters = settingParameters && isSnapshotModeEnable;
  if (hasParameters) {
    para_d4 = parseInt(settingParameters?.formattedData[
      parameterKeyIndex.fteBase
    ]?.currentValue || '0')
  }
  let resultValue = 0;
  let resultValueMS = 0;
  let resultValueMSC = 0;
  let x = 0
  let y = 0

  let returnObject = {
    designReview: {
      resultValue,
      resultValueMS,
      resultValueMSC
    },
    designReviewAveRateMilestone: {
      resultValue,
      resultValueMS,
      resultValueMSC
    }
  }
  // seerMoscow
  try {
    const {parameterModel, fteValue} = inititlaData
    let {hoursPerday} = parameterModel[0]
      if (hasParameters) {
        hoursPerday = parseInt(settingParameters?.formattedData[
          parameterKeyIndex.hoursPerDay
        ]?.currentValue || '0');
      }
    if (inititlaData) {
      // Must Custom Requirement
      const mustCal = analisisDesignPre?.responseCustomRequirementDesign.customRequirement?.resultValue + analisisDesignPre?.responseAnalisisDesign?.resultValue + analisisDesignPre?.responseCustomisationDesign.customisation?.resultValue 
      // + analisisDesignPre?.responseDocumentation.documentation?.resultValue
      const mustShouldCal = analisisDesignPre?.responseCustomRequirementDesign.customRequirement?.resultValueMS + analisisDesignPre?.responseAnalisisDesign?.resultValueMS + analisisDesignPre?.responseCustomisationDesign.customisation?.resultValueMS 
      // + analisisDesignPre?.responseDocumentation.documentation?.resultValueMS
      const mustShouldCouldCal = analisisDesignPre?.responseCustomRequirementDesign.customRequirement?.resultValueMSC + analisisDesignPre?.responseAnalisisDesign?.resultValueMSC + analisisDesignPre?.responseCustomisationDesign.customisation?.resultValueMSC 
      // + analisisDesignPre?.responseDocumentation.documentation?.resultValueMSC
      const F4Parameter = hoursPerday * 5;
      const O37 = 0// to find this we need to complete Estimate Avg Rate Milestone table
      const H6 = 29// if days === c2 => O37/5 else (O37/8)/5
      const h7 = fteValue?.totalFte || 0;// need to gets it from api
      const g7 = fteValue?.totalFteMS|| 0;
      const f7 = fteValue?.totalFteMSC|| 0;
      const h8 = h7 * F4Parameter
      // hoursPerWeek
      const g8 = g7 * F4Parameter
      // hoursPerWeek
      const f8 = f7 * F4Parameter
      // hoursPerWeek
      console.log('====> ', parameterModel[0]?.designReview);
      
      if (fte) {
        console.log('1');
        
        if (hasParameters) {
          console.log('2');
          
          const designValue = parseInt(settingParameters?.formattedData[
            parameterKeyIndex.designReview
          ]?.currentValue || '0')
          const designTypeValue = parseInt(settingParameters?.formattedData[
            parameterKeyIndex.designReview
          ]?.typeValueCurrent)
          if (percentData?.[designTypeValue] === percentData?.[100000001]) {
            returnObject.designReviewAveRateMilestone.resultValue = mustCal * (designValue/100);
            returnObject.designReviewAveRateMilestone.resultValueMS = mustShouldCal * (designValue/100);
            returnObject.designReviewAveRateMilestone.resultValueMSC = mustShouldCouldCal * (designValue/100);
          } else {
            returnObject.designReviewAveRateMilestone.resultValue = mustCal * (para_d4); // not designReview it need to get from backend
            returnObject.designReviewAveRateMilestone.resultValueMS = mustShouldCal * (para_d4);
            returnObject.designReviewAveRateMilestone.resultValueMSC = mustShouldCouldCal * (para_d4);
          }
        } else {
          console.log('3', parameterModel[0]?.designReviewType, mustCal, mustShouldCal, mustShouldCouldCal);
          
          if (percentData?.[parameterModel[0]?.designReviewType] === percentData?.[100000001]) {
            returnObject.designReviewAveRateMilestone.resultValue = mustCal * (parameterModel[0]?.designReview/100);
            returnObject.designReviewAveRateMilestone.resultValueMS = mustShouldCal * (parameterModel[0]?.designReview/100);
            returnObject.designReviewAveRateMilestone.resultValueMSC = mustShouldCouldCal * (parameterModel[0]?.designReview/100);
          } else {
            returnObject.designReviewAveRateMilestone.resultValue = mustCal * (para_d4); // not designReview it need to get from backend
            returnObject.designReviewAveRateMilestone.resultValueMS = mustShouldCal * (para_d4);
            returnObject.designReviewAveRateMilestone.resultValueMSC = mustShouldCouldCal * (para_d4);
          }
        }
        
      } else {
        console.log('4');
        
        if (hasParameters) {
          console.log('5');
          
          const designValue = parseInt(settingParameters?.formattedData[
            parameterKeyIndex.designReview
          ]?.currentValue || '0')
          const designTypeValue = parseInt(settingParameters?.formattedData[
            parameterKeyIndex.designReview
          ]?.typeValueCurrent)
          if (percentData?.[designTypeValue] == percentData?.[100000001]) {

            returnObject.designReview.resultValue = mustCal * (designValue/100);
            returnObject.designReview.resultValueMS = mustShouldCal * (designValue/100);
            returnObject.designReview.resultValueMSC = mustShouldCouldCal * (designValue/100);
          } else if (percentData?.[designTypeValue] == percentData?.[100000002]) { // hours
            
            returnObject.designReview.resultValue = romParameter == "Hours" ? designValue :  designValue/hoursPerday // if c2 === hours then get direct parameterModel[0]?.designReview
            returnObject.designReview.resultValueMS = romParameter == "Hours" ? designValue :  designValue/hoursPerday // if c2 === hours then get direct parameterModel[0]?.designReview
            returnObject.designReview.resultValueMSC = romParameter == "Hours" ? designValue :  designValue/hoursPerday
          } else if (percentData?.[designTypeValue] == percentData?.[100000000]) { // FTE
            returnObject.designReview.resultValue = romParameter == "Hours" ? (designValue * h8) : (designValue * h8)/hoursPerday // if c2 === hours then get direct (parameterModel[0]?.designReview * h8)  // need to find H8
            returnObject.designReview.resultValueMS = romParameter == "Hours" ? (designValue * g8) : (designValue * g8)/hoursPerday // if c2 === hours then get direct parameterModel[0]?.designReview * g8  // need to find G8
            returnObject.designReview.resultValueMSC = romParameter == "Hours" ? (designValue * f8) : (designValue * f8)/hoursPerday // if c2 === hours then get direct parameterModel[0]?.designReview * f8  // need to find F8
          }
        } else {
          console.log('6');
          
          if (percentData?.[parameterModel[0]?.designReviewType] === percentData?.[100000001]) {
            console.log('desi rev => ', mustCal, parameterModel[0]?.designReview, mustCal * (parameterModel[0]?.designReview/100));
            
            returnObject.designReview.resultValue = mustCal * (parameterModel[0]?.designReview/100);
            returnObject.designReview.resultValueMS = mustShouldCal * (parameterModel[0]?.designReview/100);
            returnObject.designReview.resultValueMSC = mustShouldCouldCal * (parameterModel[0]?.designReview/100);
          } else if (percentData?.[parameterModel[0]?.designReviewType] === percentData?.[100000002]) { // hours
            
            returnObject.designReview.resultValue = romParameter == "Hours" ? parameterModel[0]?.designReview :  parameterModel[0]?.designReview/parameterModel[0]?.hoursPerday // if c2 === hours then get direct parameterModel[0]?.designReview
            returnObject.designReview.resultValueMS = romParameter == "Hours" ? parameterModel[0]?.designReview :  parameterModel[0]?.designReview/parameterModel[0]?.hoursPerday // if c2 === hours then get direct parameterModel[0]?.designReview
            returnObject.designReview.resultValueMSC = romParameter == "Hours" ? parameterModel[0]?.designReview :  parameterModel[0]?.designReview/parameterModel[0]?.hoursPerday
          } else if (percentData?.[parameterModel[0]?.designReviewType] === percentData?.[100000000]) { // FTE
            returnObject.designReview.resultValue = romParameter == "Hours" ? (parameterModel[0]?.designReview * h8) : (parameterModel[0]?.designReview * h8)/parameterModel[0]?.hoursPerday // if c2 === hours then get direct (parameterModel[0]?.designReview * h8)  // need to find H8
            returnObject.designReview.resultValueMS = romParameter == "Hours" ? (parameterModel[0]?.designReview * g8) : (parameterModel[0]?.designReview * g8)/parameterModel[0]?.hoursPerday // if c2 === hours then get direct parameterModel[0]?.designReview * g8  // need to find G8
            returnObject.designReview.resultValueMSC = romParameter == "Hours" ? (parameterModel[0]?.designReview * f8) : (parameterModel[0]?.designReview * f8)/parameterModel[0]?.hoursPerday // if c2 === hours then get direct parameterModel[0]?.designReview * f8  // need to find F8
          }
        }
        
      }
      
      await Promise.all([returnObject])
      console.log('de=> ',returnObject);
      
      return returnObject;
    } else {
      return returnObject;
    }
  } catch (error) {
    console.log("generateAnalysisDesignMValue error ==> ", error);
    return returnObject;
  }
}
