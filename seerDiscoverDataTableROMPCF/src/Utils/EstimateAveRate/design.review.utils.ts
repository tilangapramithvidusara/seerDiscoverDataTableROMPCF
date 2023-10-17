import { fitGapData, moscowsData, percentData } from "../../Constants/pickListData";

export const generateDesignReviewMValue = async(inititlaData: any, analisisDesignPre: {responseCustomRequirementDesign: any, responseAnalisisDesign: any, responseCustomisationDesign: any, responseDocumentation: any}, condition: boolean) => {
  // need to check with 'Estimate - Resource Milestone'!$C$1
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
  }
  // seerMoscow
  try {
    const {parameterModel} = inititlaData
    if (condition && inititlaData) {
      // Must Custom Requirement
      const mustCal = analisisDesignPre?.responseCustomRequirementDesign.customRequirement?.resultValue + analisisDesignPre?.responseAnalisisDesign?.resultValue + analisisDesignPre?.responseCustomisationDesign.customisation?.resultValue + analisisDesignPre?.responseDocumentation.documentation?.resultValue
      const mustShouldCal = analisisDesignPre?.responseCustomRequirementDesign.customRequirement?.resultValueMS + analisisDesignPre?.responseAnalisisDesign?.resultValueMS + analisisDesignPre?.responseCustomisationDesign.customisation?.resultValueMS + analisisDesignPre?.responseDocumentation.documentation?.resultValueMS
      const mustShouldCouldCal = analisisDesignPre?.responseCustomRequirementDesign.customRequirement?.resultValueMSC + analisisDesignPre?.responseAnalisisDesign?.resultValueMSC + analisisDesignPre?.responseCustomisationDesign.customisation?.resultValueMSC + + analisisDesignPre?.responseDocumentation.documentation?.resultValueMSC
      console.log('mmm ==> ', );
      const F4Parameter = parameterModel[0]?.hoursPerday * 5;
      const O37 = 0// to find this we need to complete Estimate Avg Rate Milestone table
      const H6 = 29// if days === c2 => O37/5 else (O37/8)/5
      const h8 = 1123.176 // need to gets it from api
      const g8 = 1217.546
      const f8 = 1406.438
      
      if (percentData?.[parameterModel[0]?.designReviewType] === percentData?.[100000001]) {

        returnObject.designReview.resultValue = mustCal * (parameterModel[0]?.designReview/100);
        returnObject.designReview.resultValueMS = mustShouldCal * (parameterModel[0]?.designReview/100);
        returnObject.designReview.resultValueMSC = mustShouldCouldCal * (parameterModel[0]?.designReview/100);
      } else if (percentData?.[parameterModel[0]?.designReviewType] === percentData?.[100000002]) { // hours
        
        returnObject.designReview.resultValue = parameterModel[0]?.designReview/parameterModel[0]?.hoursPerday // if c2 === hours then get direct parameterModel[0]?.designReview
        returnObject.designReview.resultValueMS = parameterModel[0]?.designReview/parameterModel[0]?.hoursPerday // if c2 === hours then get direct parameterModel[0]?.designReview
        returnObject.designReview.resultValueMSC = mustShouldCouldCal * (parameterModel[0]?.designReview/100);
      } else if (percentData?.[parameterModel[0]?.designReviewType] === percentData?.[100000000]) { // FTE
        // returnObject.designReview.resultValue = (parameterModel[0]?.designReview * h8)/parameterModel[0]?.hoursPerday // if c2 === hours then get direct (parameterModel[0]?.designReview * h8)  // need to find H8
        // returnObject.designReview.resultValueMS = (parameterModel[0]?.designReview * g8)/parameterModel[0]?.hoursPerday // if c2 === hours then get direct parameterModel[0]?.designReview * g8  // need to find G8
        // returnObject.designReview.resultValueMSC = (parameterModel[0]?.designReview * f8)/parameterModel[0]?.hoursPerday // if c2 === hours then get direct parameterModel[0]?.designReview * f8  // need to find F8
      }
      
      console.log("resultValue => ", resultValue, returnObject);
      await Promise.all([returnObject])
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
