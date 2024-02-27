import { hoursPerWeek, romParameter } from "../../Constants/fteConstants";
import { parameterKeyIndex } from "../../Constants/parametersSetting";
import { fitGapData, moscowsData, percentData } from "../../Constants/pickListData";
let para_d4 = 10/100;

export const generateReportingMValue = async(inititlaData: any, analisisDesignPre: {responseCustomRequirementDesign: any, responseAnalisisDesign: any, responseCustomisationDesign: any, responseIntegration: any}, condition: boolean, isFte?: boolean, settingParameters?: any, isSnapshotModeEnable?: boolean) => {
  // need to check with 'Estimate - Resource Milestone'!$C$1
  const hasParameters = settingParameters && isSnapshotModeEnable;
  let fte = isFte ? true : false;

  let resultValue = 0;
  let resultValueMS = 0;
  let resultValueMSC = 0;
  let x = 0
  let y = 0

  let returnObject = {
    reporting: {
      resultValue,
      resultValueMS,
      resultValueMSC
    },
    reportingAveRateMilestone: {
      resultValue,
      resultValueMS,
      resultValueMSC
    }
  }
  // seerMoscow
  try {
    const {parameterModel, fteValue} = inititlaData
    if (inititlaData) {
      let {hoursPerday, reportingType, reporting} = parameterModel[0]
      let reportingValue = reporting;
      let reportingTypeValue = reportingType;
      
      if (hasParameters) {
        para_d4 = parseFloat(settingParameters?.formattedData[
          parameterKeyIndex.fteBase
        ]?.currentValue || '0')
        hoursPerday = parseFloat(settingParameters?.formattedData[
          parameterKeyIndex.hoursPerDay
        ]?.currentValue || '0');

        reportingValue = parseFloat(settingParameters?.formattedData[
          parameterKeyIndex.reporting
        ]?.currentValue || '0')
        reportingTypeValue = parseFloat(settingParameters?.formattedData[
          parameterKeyIndex.reporting
        ]?.typeValueCurrent)
      }
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
      const F4Parameter = hoursPerday * 5;
      const O37 = 0// to find this we need to complete Estimate Avg Rate Milestone table
      const H6 = 29// if days === c2 => O37/5 else (O37/8)/5
      const h7 = fteValue?.totalFte // need to gets it from api
      const g7 = fteValue?.totalFteMS
      const f7 = fteValue?.totalFteMSC
      const h8 = h7 * F4Parameter
      // hoursPerWeek
      const g8 = g7 * F4Parameter
      // hoursPerWeek
      const f8 = f7 * F4Parameter
      // hoursPerWeek

      if (fte) {
        if (percentData?.[reportingTypeValue] == percentData?.[100000001]) {
          
          returnObject.reportingAveRateMilestone.resultValue = mustCal * (reportingValue/100);
          returnObject.reportingAveRateMilestone.resultValueMS = mustShouldCal * (reportingValue/100);
          returnObject.reportingAveRateMilestone.resultValueMSC = mustShouldCouldCal * (reportingValue/100);
        } else {
          returnObject.reportingAveRateMilestone.resultValue = mustCal * (para_d4); // not reporting it need to get from backend
          returnObject.reportingAveRateMilestone.resultValueMS = mustShouldCal * (para_d4);
          returnObject.reportingAveRateMilestone.resultValueMSC = mustShouldCouldCal * (para_d4);
        }
        
      } else {
        if (percentData?.[reportingTypeValue] == percentData?.[100000001]) {
          returnObject.reporting.resultValue = mustCal * (reportingValue/100);
          returnObject.reporting.resultValueMS = mustShouldCal * (reportingValue/100);
          returnObject.reporting.resultValueMSC = mustShouldCouldCal * (reportingValue/100);
        } else if (percentData?.[reportingTypeValue] == percentData?.[100000002]) { // hours
          
          returnObject.reporting.resultValue = romParameter == "Hours" ? reportingValue : reportingValue/hoursPerday // if c2 === hours then get direct parameterModel[0]?.reporting
          returnObject.reporting.resultValueMS = romParameter == "Hours" ? reportingValue : reportingValue/hoursPerday // if c2 === hours then get direct parameterModel[0]?.reporting
          returnObject.reporting.resultValueMSC = romParameter == "Hours" ? reportingValue : reportingValue/hoursPerday
        } else if (percentData?.[reportingTypeValue] == percentData?.[100000000]) { // FTE
          // dont need yet
          returnObject.reporting.resultValue = romParameter == "Hours" ? (reportingValue * h8) : (reportingValue * h8)/hoursPerday // if c2 === hours then get direct (parameterModel[0]?.reporting * h8)  // need to find H8
          returnObject.reporting.resultValueMS = romParameter == "Hours" ? (reportingValue * g8) : (reportingValue * g8)/hoursPerday // if c2 === hours then get direct parameterModel[0]?.reporting * g8  // need to find G8
          returnObject.reporting.resultValueMSC = romParameter == "Hours" ? (reportingValue * f8) : (reportingValue * f8)/hoursPerday // if c2 === hours then get direct parameterModel[0]?.reporting * f8  // need to find F8
        }
      }
      
      // not done yet
      
      await Promise.all([returnObject])
      return returnObject;
    } else {
      return returnObject;
    }
  } catch (error) {
    return returnObject;
  }
}
