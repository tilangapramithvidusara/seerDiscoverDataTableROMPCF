import { fitGapData, moscowsData, percentData } from "../../Constants/pickListData";

export const generateSupportHandoverMValue = async(inititlaData: any, analisisDesignPre: {responseCustomRequirementDesign: any, responseAnalisisDesign: any, responseCustomisationDesign: any, responseIntegration: any}, condition: boolean, isFte?: boolean) => {
  // need to check with 'Estimate - Resource Milestone'!$C$1
  let fte = isFte ? true : false;
  let romParameter = 'Days'
  let resultValue = 0;
  let resultValueMS = 0;
  let resultValueMSC = 0;
  let x = 0
  let y = 0

  let returnObject = {
    supportHandover: {
      resultValue,
      resultValueMS,
      resultValueMSC
    },
    supportHandoverAveRateMilestone: {
      resultValue,
      resultValueMS,
      resultValueMSC
    }
  }
  // seerMoscow
  try {
    const {parameterModel} = inititlaData
    if (inititlaData) { // condition && 
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
      const F4Parameter = parameterModel[0]?.hoursPerday * 5;
      const O37 = 0// to find this we need to complete Estimate Avg Rate Milestone table
      const H6 = 29// if days === c2 => O37/5 else (O37/8)/5
      const h8 = 1123.176 // need to gets it from api
      const g8 = 1217.546
      const f8 = 1406.438

      if (fte) {
        if (percentData?.[parameterModel[0]?.supportHandOverType] === percentData?.[100000001]) {
          returnObject.supportHandoverAveRateMilestone.resultValue = mustCal * (parameterModel[0]?.supportHandOver/100);
          returnObject.supportHandoverAveRateMilestone.resultValueMS = mustShouldCal * (parameterModel[0]?.supportHandOver/100);
          returnObject.supportHandoverAveRateMilestone.resultValueMSC = mustShouldCouldCal * (parameterModel[0]?.supportHandOver/100);
        } else {
          returnObject.supportHandoverAveRateMilestone.resultValue = mustCal * (parameterModel[0]?.supportHandOver/100); // not testing it need to get from backend
          returnObject.supportHandoverAveRateMilestone.resultValueMS = mustShouldCal * (parameterModel[0]?.supportHandOver/100);
          returnObject.supportHandoverAveRateMilestone.resultValueMSC = mustShouldCouldCal * (parameterModel[0]?.supportHandOver/100);
        }
      } else {
        if (percentData?.[parameterModel[0]?.supportHandOverType] === percentData?.[100000001]) {

          returnObject.supportHandover.resultValue = mustCal * (parameterModel[0]?.supportHandOver/100);
          returnObject.supportHandover.resultValueMS = mustShouldCal * (parameterModel[0]?.supportHandOver/100);
          returnObject.supportHandover.resultValueMSC = mustShouldCouldCal * (parameterModel[0]?.supportHandOver/100);
        } else if (percentData?.[parameterModel[0]?.supportHandOverType] === percentData?.[100000002]) { // hours
          
          returnObject.supportHandover.resultValue = romParameter == "Hours" ? parameterModel[0]?.supportHandOver : parameterModel[0]?.supportHandOver/parameterModel[0]?.hoursPerday // if c2 === hours then get direct parameterModel[0]?.supportHandOver
          returnObject.supportHandover.resultValueMS = romParameter == "Hours" ? parameterModel[0]?.supportHandOver : parameterModel[0]?.supportHandOver/parameterModel[0]?.hoursPerday // if c2 === hours then get direct parameterModel[0]?.supportHandOver
          returnObject.supportHandover.resultValueMSC = mustShouldCouldCal * (parameterModel[0]?.supportHandOver/100);
        } else if (percentData?.[parameterModel[0]?.supportHandOverType] === percentData?.[100000000]) { // FTE
          // dont need yet
          // returnObject.supportHandover.resultValue = (parameterModel[0]?.supportHandOver * h8)/parameterModel[0]?.hoursPerday // if c2 === hours then get direct (parameterModel[0]?.supportHandOver * h8)  // need to find H8
          // returnObject.supportHandover.resultValueMS = (parameterModel[0]?.supportHandOver * g8)/parameterModel[0]?.hoursPerday // if c2 === hours then get direct parameterModel[0]?.supportHandOver * g8  // need to find G8
          // returnObject.supportHandover.resultValueMSC = (parameterModel[0]?.supportHandOver * f8)/parameterModel[0]?.hoursPerday // if c2 === hours then get direct parameterModel[0]?.supportHandOver * f8  // need to find F8
        }
      }
      
      // not done yet
      
      
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
