import { hoursPerWeek, romParameter } from "../../Constants/fteConstants";
import { fitGapData, moscowsData, percentData } from "../../Constants/pickListData";
const para_d4 = 10/100;

export const generateDesignReviewMValue = async(inititlaData: any, analisisDesignPre: {responseCustomRequirementDesign: any, responseAnalisisDesign: any, responseCustomisationDesign: any, responseDocumentation: any}, condition: boolean, isFte?: boolean) => {
  // need to check with 'Estimate - Resource Milestone'!$C$1
  let fte = isFte ? true : false;
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
    if (inititlaData) {
      // Must Custom Requirement
      const mustCal = analisisDesignPre?.responseCustomRequirementDesign.customRequirement?.resultValue + analisisDesignPre?.responseAnalisisDesign?.resultValue + analisisDesignPre?.responseCustomisationDesign.customisation?.resultValue + analisisDesignPre?.responseDocumentation.documentation?.resultValue
      const mustShouldCal = analisisDesignPre?.responseCustomRequirementDesign.customRequirement?.resultValueMS + analisisDesignPre?.responseAnalisisDesign?.resultValueMS + analisisDesignPre?.responseCustomisationDesign.customisation?.resultValueMS + analisisDesignPre?.responseDocumentation.documentation?.resultValueMS
      const mustShouldCouldCal = analisisDesignPre?.responseCustomRequirementDesign.customRequirement?.resultValueMSC + analisisDesignPre?.responseAnalisisDesign?.resultValueMSC + analisisDesignPre?.responseCustomisationDesign.customisation?.resultValueMSC + + analisisDesignPre?.responseDocumentation.documentation?.resultValueMSC
      const F4Parameter = parameterModel[0]?.hoursPerday * 5;
      const O37 = 0// to find this we need to complete Estimate Avg Rate Milestone table
      const H6 = 29// if days === c2 => O37/5 else (O37/8)/5
      const h7 = fteValue?.totalFte // need to gets it from api
      const g7 = fteValue?.totalFteMS
      const f7 = fteValue?.totalFteMSC
      const h8 = h7 * hoursPerWeek
      const g8 = g7 * hoursPerWeek
      const f8 = f7 * hoursPerWeek

      if (fte) {
        if (percentData?.[parameterModel[0]?.designReviewType] === percentData?.[100000001]) {
          returnObject.designReviewAveRateMilestone.resultValue = mustCal * (parameterModel[0]?.designReview/100);
          returnObject.designReviewAveRateMilestone.resultValueMS = mustShouldCal * (parameterModel[0]?.designReview/100);
          returnObject.designReviewAveRateMilestone.resultValueMSC = mustShouldCouldCal * (parameterModel[0]?.designReview/100);
        } else {
          returnObject.designReviewAveRateMilestone.resultValue = mustCal * (para_d4); // not designReview it need to get from backend
          returnObject.designReviewAveRateMilestone.resultValueMS = mustShouldCal * (para_d4);
          returnObject.designReviewAveRateMilestone.resultValueMSC = mustShouldCouldCal * (para_d4);
        }
      } else {
        if (percentData?.[parameterModel[0]?.designReviewType] === percentData?.[100000001]) {

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
