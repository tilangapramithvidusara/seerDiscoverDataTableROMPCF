import { fitGapData, moscowsData, percentData } from "../../Constants/pickListData";

export const generateUATEnvironmentPreparationMValue = async(inititlaData: any, analisisDesignPre: {responseCustomRequirementDesign: any, responseAnalisisDesign: any, responseCustomisationDesign: any, responseIntegration: any}, condition: boolean) => {
  // need to check with 'Estimate - Resource Milestone'!$C$1
  let romParameter = 'Days'
  let resultValue = 0;
  let resultValueMS = 0;
  let resultValueMSC = 0;
  let x = 0
  let y = 0

  let returnObject = {
    uatEnvironmentPreparation: {
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
      console.log(analisisDesignPre?.responseCustomRequirementDesign?.customRequirementBuild?.resultValue);
      console.log(analisisDesignPre?.responseAnalisisDesign?.configuration?.resultValue);
      console.log(analisisDesignPre?.responseCustomisationDesign.customisationBuild?.resultValue);
      console.log(analisisDesignPre?.responseIntegration.integration?.resultValue);
      
      console.log(
        (analisisDesignPre?.responseCustomRequirementDesign?.customRequirementBuild?.resultValue || 0) + 
        (analisisDesignPre?.responseAnalisisDesign?.configuration?.resultValue || 0) + 
        (analisisDesignPre?.responseCustomisationDesign.customisationBuild?.resultValue || 0 ) +
        (analisisDesignPre?.responseIntegration.integration?.resultValue || 0)
        );
      
      
      
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
      console.log('mmm ==> ', mustCal, mustShouldCal, mustShouldCal);
      const F4Parameter = parameterModel[0]?.hoursPerday * 5;
      const O37 = 0// to find this we need to complete Estimate Avg Rate Milestone table
      const H6 = 29// if days === c2 => O37/5 else (O37/8)/5
      const h8 = 1123.176 // need to gets it from api
      const g8 = 1217.546
      const f8 = 1406.438
      
      // not done yet

      // HAS TO FIND parameterModel[0]?.testing LIKE VALUE FOR UAT ENV
      if (percentData?.[parameterModel[0]?.deployUatType] === percentData?.[100000001]) {

        returnObject.uatEnvironmentPreparation.resultValue = mustCal * (parameterModel[0]?.deployUat/100);
        returnObject.uatEnvironmentPreparation.resultValueMS = mustShouldCal * (parameterModel[0]?.deployUat/100);
        returnObject.uatEnvironmentPreparation.resultValueMSC = mustShouldCouldCal * (parameterModel[0]?.deployUat/100);
      } else if (percentData?.[parameterModel[0]?.deployUatType] === percentData?.[100000002]) { // hours
        
        returnObject.uatEnvironmentPreparation.resultValue = romParameter == "Hours" ? parameterModel[0]?.deployUat : parameterModel[0]?.deployUat/parameterModel[0]?.hoursPerday // if c2 === hours then get direct parameterModel[0]?.deployUat
        returnObject.uatEnvironmentPreparation.resultValueMS = romParameter == "Hours" ? parameterModel[0]?.deployUat : parameterModel[0]?.deployUat/parameterModel[0]?.hoursPerday // if c2 === hours then get direct parameterModel[0]?.deployUat
        returnObject.uatEnvironmentPreparation.resultValueMSC = mustShouldCouldCal * (parameterModel[0]?.deployUat/100);
      } else if (percentData?.[parameterModel[0]?.deployUatType] === percentData?.[100000000]) { // FTE
        // dont need yet
        // returnObject.uatEnvironmentPreparation.resultValue = (parameterModel[0]?.deployUat * h8)/parameterModel[0]?.hoursPerday // if c2 === hours then get direct (parameterModel[0]?.deployUat * h8)  // need to find H8
        // returnObject.uatEnvironmentPreparation.resultValueMS = (parameterModel[0]?.deployUat * g8)/parameterModel[0]?.hoursPerday // if c2 === hours then get direct parameterModel[0]?.deployUat * g8  // need to find G8
        // returnObject.uatEnvironmentPreparation.resultValueMSC = (parameterModel[0]?.deployUat * f8)/parameterModel[0]?.hoursPerday // if c2 === hours then get direct parameterModel[0]?.deployUat * f8  // need to find F8
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
