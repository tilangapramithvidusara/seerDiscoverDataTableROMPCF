import { hoursPerWeek, romParameter } from "../../Constants/fteConstants";
import { fitGapData, moscowsData, percentData } from "../../Constants/pickListData";
const para_d4 = 10/100;

export const generateUATSupportMValue = async(inititlaData: any, analisisDesignPre: {responseCustomRequirementDesign: any, responseAnalisisDesign: any, responseCustomisationDesign: any, responseIntegration: any}, condition: boolean, isFte?: boolean, settingParameters?: any, isSnapshotModeEnable?: boolean) => {
  // need to check with 'Estimate - Resource Milestone'!$C$1
  let fte = isFte ? true : false;
  let resultValue = 0;
  let resultValueMS = 0;
  let resultValueMSC = 0;
  let x = 0
  let y = 0

  let returnObject = {
    uatSupport: {
      resultValue,
      resultValueMS,
      resultValueMSC
    },
    uatSupportAveRateMilestone: {
      resultValue,
      resultValueMS,
      resultValueMSC
    }
  }
  // seerMoscow
  try {
    const {parameterModel, fteValue} = inititlaData
    if (inititlaData) { //condition && 
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
      const h7 = fteValue?.totalFte // need to gets it from api
      const g7 = fteValue?.totalFteMS
      const f7 = fteValue?.totalFteMSC
      const h8 = h7 * hoursPerWeek // need to gets it from api
      const g8 = g7 * hoursPerWeek
      const f8 = f7 * hoursPerWeek
      
      // not done yet

      // HAS TO FIND parameterModel[0]?.testing LIKE VALUE FOR UAT ENV
      if (fte) {
        if (percentData?.[parameterModel[0]?.uatSupportType] === percentData?.[100000001]) {
          returnObject.uatSupportAveRateMilestone.resultValue = mustCal * (parameterModel[0]?.uatSupport/100);
          returnObject.uatSupportAveRateMilestone.resultValueMS = mustShouldCal * (parameterModel[0]?.uatSupport/100);
          returnObject.uatSupportAveRateMilestone.resultValueMSC = mustShouldCouldCal * (parameterModel[0]?.uatSupport/100);
        } else {
          returnObject.uatSupportAveRateMilestone.resultValue = mustCal * (para_d4); // not uatSupport it need to get from backend
          returnObject.uatSupportAveRateMilestone.resultValueMS = mustShouldCal * (para_d4);
          returnObject.uatSupportAveRateMilestone.resultValueMSC = mustShouldCouldCal * (para_d4);
        }
      } else {
        if (percentData?.[parameterModel[0]?.uatSupportType] === percentData?.[100000001]) {

          returnObject.uatSupport.resultValue = mustCal * (parameterModel[0]?.uatSupport/100);
          returnObject.uatSupport.resultValueMS = mustShouldCal * (parameterModel[0]?.uatSupport/100);
          returnObject.uatSupport.resultValueMSC = mustShouldCouldCal * (parameterModel[0]?.uatSupport/100);
        } else if (percentData?.[parameterModel[0]?.uatSupportType] === percentData?.[100000002]) { // hours
          
          returnObject.uatSupport.resultValue = romParameter == "Hours" ? parameterModel[0]?.uatSupport : parameterModel[0]?.uatSupport/parameterModel[0]?.hoursPerday // if c2 === hours then get direct parameterModel[0]?.uatSupport
          returnObject.uatSupport.resultValueMS = romParameter == "Hours" ? parameterModel[0]?.uatSupport : parameterModel[0]?.uatSupport/parameterModel[0]?.hoursPerday // if c2 === hours then get direct parameterModel[0]?.uatSupport
          returnObject.uatSupport.resultValueMSC = romParameter == "Hours" ? parameterModel[0]?.uatSupport : parameterModel[0]?.uatSupport/parameterModel[0]?.hoursPerday
          
        } else if (percentData?.[parameterModel[0]?.uatSupportType] === percentData?.[100000000]) { // FTE
          // dont need yet
          returnObject.uatSupport.resultValue = romParameter == "Hours" ? (parameterModel[0]?.uatSupport * h8) : (parameterModel[0]?.uatSupport * h8)/parameterModel[0]?.hoursPerday // if c2 === hours then get direct (parameterModel[0]?.uatSupport * h8)  // need to find H8
          returnObject.uatSupport.resultValueMS = romParameter == "Hours" ? (parameterModel[0]?.uatSupport * g8) : (parameterModel[0]?.uatSupport * g8)/parameterModel[0]?.hoursPerday // if c2 === hours then get direct parameterModel[0]?.uatSupport * g8  // need to find G8
          returnObject.uatSupport.resultValueMSC = romParameter == "Hours" ? (parameterModel[0]?.uatSupport * f8) : (parameterModel[0]?.uatSupport * f8)/parameterModel[0]?.hoursPerday // if c2 === hours then get direct parameterModel[0]?.uatSupport * f8  // need to find F8
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
