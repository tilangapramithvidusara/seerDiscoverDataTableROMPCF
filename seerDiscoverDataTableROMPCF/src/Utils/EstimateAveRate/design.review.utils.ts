import { fitGapData, moscowsData, percentData } from "../../Constants/pickListData";

export const generateDesignReviewMValue = async(inititlaData: any, analisisDesignPre: {responseCustomRequirementDesign: any, responseAnalisisDesign: any, responseCustomisationDesign: any, responseDocumentation: any}) => {
  const condition = "Days"; // need to check with 'Estimate - Resource Milestone'!$C$1
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
      
      if (percentData?.[parameterModel[0]?.designReviewType] === percentData?.[100000001]) {

        returnObject.designReview.resultValue = mustCal * (parameterModel[0]?.designReview/100);
        returnObject.designReview.resultValueMS = mustShouldCal * (parameterModel[0]?.designReview/100);
        returnObject.designReview.resultValueMSC = mustShouldCouldCal * (parameterModel[0]?.designReview/100);
      } else {
        // 
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
