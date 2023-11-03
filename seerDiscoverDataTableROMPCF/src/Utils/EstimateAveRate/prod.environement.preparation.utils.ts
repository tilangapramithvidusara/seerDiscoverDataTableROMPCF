import { fitGapData, moscowsData, percentData } from "../../Constants/pickListData";

export const generateProdEnvironmentPreparationMValue = async(inititlaData: any, analisisDesignPre: {responseCustomRequirementDesign: any, responseAnalisisDesign: any, responseCustomisationDesign: any, responseIntegration: any}, condition: boolean, isFte?: boolean) => {
  // need to check with 'Estimate - Resource Milestone'!$C$1
  let fte = isFte ? true : false;
  let romParameter = 'Days'
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
      
      // not done yet

      if (fte) {
        if (percentData?.[parameterModel[0]?.deployProdType] === percentData?.[100000001]) {
          returnObject.prodEnvironmentPreparationAveRateMilestone.resultValue = mustCal * (parameterModel[0]?.deployProd/100);
          returnObject.prodEnvironmentPreparationAveRateMilestone.resultValueMS = mustShouldCal * (parameterModel[0]?.deployProd/100);
          returnObject.prodEnvironmentPreparationAveRateMilestone.resultValueMSC = mustShouldCouldCal * (parameterModel[0]?.deployProd/100);
        } else {
          returnObject.prodEnvironmentPreparationAveRateMilestone.resultValue = mustCal * (parameterModel[0]?.deployProd/100); // not deployProd it need to get from backend
          returnObject.prodEnvironmentPreparationAveRateMilestone.resultValueMS = mustShouldCal * (parameterModel[0]?.deployProd/100);
          returnObject.prodEnvironmentPreparationAveRateMilestone.resultValueMSC = mustShouldCouldCal * (parameterModel[0]?.deployProd/100);
        }
      } else {
        if (percentData?.[parameterModel[0]?.deployProdType] === percentData?.[100000001]) {

          returnObject.prodEnvironmentPreparation.resultValue = mustCal * (parameterModel[0]?.deployProd/100);
          returnObject.prodEnvironmentPreparation.resultValueMS = mustShouldCal * (parameterModel[0]?.deployProd/100);
          returnObject.prodEnvironmentPreparation.resultValueMSC = mustShouldCouldCal * (parameterModel[0]?.deployProd/100);
        } else if (percentData?.[parameterModel[0]?.deployProdType] === percentData?.[100000002]) { // hours
          
          returnObject.prodEnvironmentPreparation.resultValue = romParameter == "Hours" ? parameterModel[0]?.deployProd :  parameterModel[0]?.deployProd/parameterModel[0]?.hoursPerday // if c2 === hours then get direct parameterModel[0]?.deployProd
          returnObject.prodEnvironmentPreparation.resultValueMS = romParameter == "Hours" ? parameterModel[0]?.deployProd : parameterModel[0]?.deployProd/parameterModel[0]?.hoursPerday // if c2 === hours then get direct parameterModel[0]?.deployProd
          returnObject.prodEnvironmentPreparation.resultValueMSC = mustShouldCouldCal * (parameterModel[0]?.deployProd/100);
        } else if (percentData?.[parameterModel[0]?.deployProdType] === percentData?.[100000000]) { // FTE
          // dont need yet
          // returnObject.prodEnvironmentPreparation.resultValue = (parameterModel[0]?.deployProd * h8)/parameterModel[0]?.hoursPerday // if c2 === hours then get direct (parameterModel[0]?.deployProd * h8)  // need to find H8
          // returnObject.prodEnvironmentPreparation.resultValueMS = (parameterModel[0]?.deployProd * g8)/parameterModel[0]?.hoursPerday // if c2 === hours then get direct parameterModel[0]?.deployProd * g8  // need to find G8
          // returnObject.prodEnvironmentPreparation.resultValueMSC = (parameterModel[0]?.deployProd * f8)/parameterModel[0]?.hoursPerday // if c2 === hours then get direct parameterModel[0]?.deployProd * f8  // need to find F8
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
