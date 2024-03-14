import { hoursPerWeek, romParameter } from "../../Constants/fteConstants";
import { parameterKeyIndex } from "../../Constants/parametersSetting";
import { fitGapData, moscowsData, percentData } from "../../Constants/pickListData";
let para_d4 = 10/100;

export const generateSupportHandoverMValue = async(inititlaData: any, analisisDesignPre: {responseCustomRequirementDesign: any, responseAnalisisDesign: any, responseCustomisationDesign: any, responseIntegration: any}, condition: boolean, isFte?: boolean, settingParameters?: any, isSnapshotModeEnable?: boolean) => {
  // need to check with 'Estimate - Resource Milestone'!$C$1
  let hasParameters = settingParameters && isSnapshotModeEnable;

  let fte = isFte ? true : false;

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
    const {parameterModel, fteValue} = inititlaData
    let {hoursPerday, supportHandOverType, supportHandOver} = parameterModel[0];
    let supportHandOverValue = supportHandOver;
    let supportHandOverTypeValue = supportHandOverType;
      if (hasParameters) {
        para_d4 = parseFloat(settingParameters?.formattedData[
          parameterKeyIndex.fteBase
        ]?.currentValue || '0')
        hoursPerday = parseFloat(settingParameters?.formattedData[
          parameterKeyIndex.hoursPerDay
        ]?.currentValue || '0');
        supportHandOverValue = parseFloat(settingParameters?.formattedData[
          parameterKeyIndex.supportHandover
        ]?.currentValue || '0')
        supportHandOverTypeValue = parseFloat(settingParameters?.formattedData[
          parameterKeyIndex.supportHandover
        ]?.typeValueCurrent)
      }
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
        if (percentData?.[supportHandOverTypeValue] == percentData?.[100000001]) {
          returnObject.supportHandoverAveRateMilestone.resultValue = mustCal * (supportHandOverValue/100);
          returnObject.supportHandoverAveRateMilestone.resultValueMS = mustShouldCal * (supportHandOverValue/100);
          returnObject.supportHandoverAveRateMilestone.resultValueMSC = mustShouldCouldCal * (supportHandOverValue/100);
        } else {
          returnObject.supportHandoverAveRateMilestone.resultValue = mustCal * (para_d4); // not testing it need to get from backend
          returnObject.supportHandoverAveRateMilestone.resultValueMS = mustShouldCal * (para_d4);
          returnObject.supportHandoverAveRateMilestone.resultValueMSC = mustShouldCouldCal * (para_d4);
        }
        
      } else {
        if (percentData?.[supportHandOverTypeValue] == percentData?.[100000001]) {

          returnObject.supportHandover.resultValue = mustCal * (supportHandOverValue/100);
          returnObject.supportHandover.resultValueMS = mustShouldCal * (supportHandOverValue/100);
          returnObject.supportHandover.resultValueMSC = mustShouldCouldCal * (supportHandOverValue/100);
        } else if (percentData?.[supportHandOverTypeValue] == percentData?.[100000002]) { // hours
          
          returnObject.supportHandover.resultValue = romParameter == "Hours" ? supportHandOverValue : supportHandOverValue/hoursPerday // if c2 === hours then get direct parameterModel[0]?.supportHandOver
          returnObject.supportHandover.resultValueMS = romParameter == "Hours" ? supportHandOverValue : supportHandOverValue/hoursPerday // if c2 === hours then get direct parameterModel[0]?.supportHandOver
          returnObject.supportHandover.resultValueMSC = romParameter == "Hours" ? supportHandOverValue : supportHandOverValue/hoursPerday
        } else if (percentData?.[supportHandOverTypeValue] == percentData?.[100000000]) { // FTE
          // dont need yet
          returnObject.supportHandover.resultValue = romParameter == "Hours" ? (supportHandOverValue * h8) : (supportHandOverValue * h8)/hoursPerday // if c2 === hours then get direct (parameterModel[0]?.supportHandOver * h8)  // need to find H8
          returnObject.supportHandover.resultValueMS = romParameter == "Hours" ? (supportHandOverValue * g8) : (supportHandOverValue * g8)/hoursPerday // if c2 === hours then get direct parameterModel[0]?.supportHandOver * g8  // need to find G8
          returnObject.supportHandover.resultValueMSC = romParameter == "Hours" ? (supportHandOverValue * f8) : (supportHandOverValue * f8)/hoursPerday // if c2 === hours then get direct parameterModel[0]?.supportHandOver * f8  // need to find F8
        }
        
      }
      
      await Promise.all([returnObject])
      return returnObject;
    } else {
      return returnObject;
    }
  } catch (error) {
    return returnObject;
  }
}
