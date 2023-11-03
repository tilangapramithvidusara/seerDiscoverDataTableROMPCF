import { fitGapData, moscowsData, percentData } from "../../Constants/pickListData";

export const generateDataMigrationMValue = async(inititlaData: any, analisisDesignPre: {responseCustomRequirementDesign: any, responseAnalisisDesign: any, responseCustomisationDesign: any, responseIntegration: any}, condition: boolean, isFte?: boolean) => {
  // need to check with 'Estimate - Resource Milestone'!$C$1
  let fte = isFte ? true : false;
  let resultValue = 0;
  let resultValueMS = 0;
  let resultValueMSC = 0;
  let x = 0
  let y = 0

  let returnObject = {
    dataMigration: {
      resultValue,
      resultValueMS,
      resultValueMSC
    },
    dataMigrationAveRateMilestone: {
      resultValue,
      resultValueMS,
      resultValueMSC
    }
  }
  // seerMoscow
  try {
    const {parameterModel} = inititlaData
    if (inititlaData) {
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
        if (percentData?.[parameterModel[0]?.dataMigrationType] === percentData?.[100000001]) {
          returnObject.dataMigrationAveRateMilestone.resultValue = mustCal * (parameterModel[0]?.dataMigration/100);
          returnObject.dataMigrationAveRateMilestone.resultValueMS = mustShouldCal * (parameterModel[0]?.dataMigration/100);
          returnObject.dataMigrationAveRateMilestone.resultValueMSC = mustShouldCouldCal * (parameterModel[0]?.dataMigration/100);
        } else {
          returnObject.dataMigrationAveRateMilestone.resultValue = mustCal * (parameterModel[0]?.dataMigration/100); // not dataMigration it need to get from backend
          returnObject.dataMigrationAveRateMilestone.resultValueMS = mustShouldCal * (parameterModel[0]?.dataMigration/100);
          returnObject.dataMigrationAveRateMilestone.resultValueMSC = mustShouldCouldCal * (parameterModel[0]?.dataMigration/100);
        }
      } else {
        if (percentData?.[parameterModel[0]?.dataMigrationType] === percentData?.[100000001]) {

          returnObject.dataMigration.resultValue = mustCal * (parameterModel[0]?.dataMigration/100);
          returnObject.dataMigration.resultValueMS = mustShouldCal * (parameterModel[0]?.dataMigration/100);
          returnObject.dataMigration.resultValueMSC = mustShouldCouldCal * (parameterModel[0]?.dataMigration/100);
        } else if (percentData?.[parameterModel[0]?.dataMigrationType] === percentData?.[100000002]) { // hours
          
          returnObject.dataMigration.resultValue = parameterModel[0]?.dataMigration/parameterModel[0]?.hoursPerday // if c2 === hours then get direct parameterModel[0]?.dataMigration
          returnObject.dataMigration.resultValueMS = parameterModel[0]?.dataMigration/parameterModel[0]?.hoursPerday // if c2 === hours then get direct parameterModel[0]?.dataMigration
          returnObject.dataMigration.resultValueMSC = mustShouldCouldCal * (parameterModel[0]?.dataMigration/100);
        } else if (percentData?.[parameterModel[0]?.dataMigrationType] === percentData?.[100000000]) { // FTE
          // dont need yet
          // returnObject.dataMigration.resultValue = (parameterModel[0]?.dataMigration * h8)/parameterModel[0]?.hoursPerday // if c2 === hours then get direct (parameterModel[0]?.dataMigration * h8)  // need to find H8
          // returnObject.dataMigration.resultValueMS = (parameterModel[0]?.dataMigration * g8)/parameterModel[0]?.hoursPerday // if c2 === hours then get direct parameterModel[0]?.dataMigration * g8  // need to find G8
          // returnObject.dataMigration.resultValueMSC = (parameterModel[0]?.dataMigration * f8)/parameterModel[0]?.hoursPerday // if c2 === hours then get direct parameterModel[0]?.dataMigration * f8  // need to find F8
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
