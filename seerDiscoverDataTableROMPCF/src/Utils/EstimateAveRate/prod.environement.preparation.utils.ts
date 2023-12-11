import { hoursPerWeek, romParameter } from "../../Constants/fteConstants";
import { fitGapData, moscowsData, percentData } from "../../Constants/pickListData";
const para_d4 = 10/100;

export const generateProdEnvironmentPreparationMValue = async(inititlaData: any, analisisDesignPre: {responseCustomRequirementDesign: any, responseAnalisisDesign: any, responseCustomisationDesign: any, responseIntegration: any}, condition: boolean, isFte?: boolean, settingParameters?: any, isSnapshotModeEnable?: boolean) => {
  // need to check with 'Estimate - Resource Milestone'!$C$1
  let fte = isFte ? true : false;
  let resultValue = 0;
  let resultValueMS = 0;
  let resultValueMSC = 0;
  let x = 0
  let y = 0

  let returnObject = {
    prodEnvironmentPreparation: {
      resultValue,
      resultValueMS,
      resultValueMSC
    },
    prodEnvironmentPreparationAveRateMilestone: {
      resultValue,
      resultValueMS,
      resultValueMSC
    }
  }
  // seerMoscow
  try {
    const {parameterModel, fteValue} = inititlaData
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
      const h7 = fteValue?.totalFte // need to gets it from api
      const g7 = fteValue?.totalFteMS
      const f7 = fteValue?.totalFteMSC
      const h8 = h7 * hoursPerWeek
      const g8 = g7 * hoursPerWeek
      const f8 = f7 * hoursPerWeek
      
      // not done yet

      if (fte) {
        if (percentData?.[parameterModel[0]?.deployProdType] === percentData?.[100000001]) {
          returnObject.prodEnvironmentPreparationAveRateMilestone.resultValue = mustCal * (parameterModel[0]?.deployProd/100);
          returnObject.prodEnvironmentPreparationAveRateMilestone.resultValueMS = mustShouldCal * (parameterModel[0]?.deployProd/100);
          returnObject.prodEnvironmentPreparationAveRateMilestone.resultValueMSC = mustShouldCouldCal * (parameterModel[0]?.deployProd/100);
        } else {
          returnObject.prodEnvironmentPreparationAveRateMilestone.resultValue = mustCal * (para_d4); // not deployProd it need to get from backend
          returnObject.prodEnvironmentPreparationAveRateMilestone.resultValueMS = mustShouldCal * (para_d4);
          returnObject.prodEnvironmentPreparationAveRateMilestone.resultValueMSC = mustShouldCouldCal * (para_d4);
        }
      } else {
        if (percentData?.[parameterModel[0]?.deployProdType] === percentData?.[100000001]) {

          returnObject.prodEnvironmentPreparation.resultValue = mustCal * (parameterModel[0]?.deployProd/100);
          returnObject.prodEnvironmentPreparation.resultValueMS = mustShouldCal * (parameterModel[0]?.deployProd/100);
          returnObject.prodEnvironmentPreparation.resultValueMSC = mustShouldCouldCal * (parameterModel[0]?.deployProd/100);
        } else if (percentData?.[parameterModel[0]?.deployProdType] === percentData?.[100000002]) { // hours
          
          returnObject.prodEnvironmentPreparation.resultValue = romParameter == "Hours" ? parameterModel[0]?.deployProd :  parameterModel[0]?.deployProd/parameterModel[0]?.hoursPerday // if c2 === hours then get direct parameterModel[0]?.deployProd
          returnObject.prodEnvironmentPreparation.resultValueMS = romParameter == "Hours" ? parameterModel[0]?.deployProd : parameterModel[0]?.deployProd/parameterModel[0]?.hoursPerday // if c2 === hours then get direct parameterModel[0]?.deployProd
          returnObject.prodEnvironmentPreparation.resultValueMSC = romParameter == "Hours" ? parameterModel[0]?.deployProd : parameterModel[0]?.deployProd/parameterModel[0]?.hoursPerday
        } else if (percentData?.[parameterModel[0]?.deployProdType] === percentData?.[100000000]) { // FTE
          // dont need yet
          returnObject.prodEnvironmentPreparation.resultValue = romParameter == "Hours" ? (parameterModel[0]?.deployProd * h8) : (parameterModel[0]?.deployProd * h8)/parameterModel[0]?.hoursPerday // if c2 === hours then get direct (parameterModel[0]?.deployProd * h8)  // need to find H8
          returnObject.prodEnvironmentPreparation.resultValueMS = romParameter == "Hours" ? (parameterModel[0]?.deployProd * g8) : (parameterModel[0]?.deployProd * g8)/parameterModel[0]?.hoursPerday // if c2 === hours then get direct parameterModel[0]?.deployProd * g8  // need to find G8
          returnObject.prodEnvironmentPreparation.resultValueMSC = romParameter == "Hours" ? (parameterModel[0]?.deployProd * f8) : (parameterModel[0]?.deployProd * f8)/parameterModel[0]?.hoursPerday // if c2 === hours then get direct parameterModel[0]?.deployProd * f8  // need to find F8
        }
      }
      // HAS TO FIND parameterModel[0]?.testing LIKE VALUE FOR PROD ENV
      
      
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
