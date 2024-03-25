import { hoursPerWeek, romParameter } from "../../Constants/fteConstants";
import { parameterKeyIndex } from "../../Constants/parametersSetting";
import { fitGapData, moscowsData, percentData } from "../../Constants/pickListData";
let para_d4 = 10/100;
export const generateCRPMValue = async(inititlaData: any, analisisDesignPre: {responseCustomRequirementDesign: any, responseAnalisisDesign: any, responseCustomisationDesign: any, responseIntegration: any}, condition: boolean, isFte?: boolean, settingParameters?: any, isSnapshotModeEnable?: boolean) => {
  // need to check with 'Estimate - Resource Milestone'!$C$1
  let fte = isFte ? true : false;
  let hasParameters = settingParameters && isSnapshotModeEnable;

  let resultValue = 0;
  let resultValueMS = 0;
  let resultValueMSC = 0;
  let x = 0
  let y = 0

  let returnObject = {
    crp: {
      resultValue,
      resultValueMS,
      resultValueMSC
    },
    crpAveRateMilestone: {
      resultValue,
      resultValueMS,
      resultValueMSC
    }
  }
  // seerMoscow
  try {
    const {parameterModel, fteValue} = inititlaData;
    let {hourlyRate, hoursPerday, conferenceRoomPilotType, conferenceRoomPilot} = parameterModel[0];
    let crpValue = conferenceRoomPilot;
    let crpTypeValue = conferenceRoomPilotType;
    if (hasParameters) {
      para_d4 = parseFloat(settingParameters?.formattedData[
        parameterKeyIndex.fteBase
      ]?.currentValue || '0')
      hoursPerday = parseFloat(settingParameters?.formattedData[
        parameterKeyIndex.hoursPerDay
      ]?.currentValue || '0');
      hourlyRate = {
        ...hourlyRate,
        value: parseFloat(settingParameters?.formattedData[
          parameterKeyIndex.hourlyRate
        ]?.currentValue || '0')
      }
      crpValue = parseFloat(settingParameters?.formattedData[
        parameterKeyIndex.crp
      ]?.currentValue || '0')
      crpTypeValue = parseFloat(settingParameters?.formattedData[
        parameterKeyIndex.crp
      ]?.typeValueCurrent)
    }
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
      
      // not done yet
      if (fte) {
        if (percentData?.[crpTypeValue] == percentData?.[100000001]) {
          returnObject.crpAveRateMilestone.resultValue = mustCal * (crpValue/100);
          returnObject.crpAveRateMilestone.resultValueMS = mustShouldCal * (crpValue/100);
          returnObject.crpAveRateMilestone.resultValueMSC = mustShouldCouldCal * (crpValue/100);
        } else {
          returnObject.crpAveRateMilestone.resultValue = mustCal * (para_d4); // not conferenceRoomPilot it need to get from backend
          returnObject.crpAveRateMilestone.resultValueMS = mustShouldCal * (para_d4);
          returnObject.crpAveRateMilestone.resultValueMSC = mustShouldCouldCal * (para_d4);
        }
        
      } else {
        if (percentData?.[crpTypeValue] == percentData?.[100000001]) {

          returnObject.crp.resultValue = mustCal * (crpValue/100);
          returnObject.crp.resultValueMS = mustShouldCal * (crpValue/100);
          returnObject.crp.resultValueMSC = mustShouldCouldCal * (crpValue/100);
        } else if (percentData?.[crpTypeValue] == percentData?.[100000002]) { // hours
          
          returnObject.crp.resultValue = romParameter == "Hours" ? crpValue : crpValue/hoursPerday // if c2 === hours then get direct parameterModel[0]?.conferenceRoomPilot
          returnObject.crp.resultValueMS = romParameter == "Hours" ? crpValue : crpValue/hoursPerday // if c2 === hours then get direct parameterModel[0]?.conferenceRoomPilot
          returnObject.crp.resultValueMSC = romParameter == "Hours" ? crpValue : crpValue/hoursPerday
        } else if (percentData?.[crpTypeValue] == percentData?.[100000000]) { // FTE
          // dont need yet
          returnObject.crp.resultValue = romParameter == "Hours" ? (crpValue * h8) : (crpValue * h8)/hoursPerday // if c2 === hours then get direct (parameterModel[0]?.conferenceRoomPilot * h8)  // need to find H8
          returnObject.crp.resultValueMS = romParameter == "Hours" ? (crpValue * g8) : (crpValue * g8)/hoursPerday // if c2 === hours then get direct parameterModel[0]?.conferenceRoomPilot * g8  // need to find G8
          returnObject.crp.resultValueMSC = romParameter == "Hours" ? (crpValue * f8) : (crpValue * f8)/hoursPerday // if c2 === hours then get direct parameterModel[0]?.conferenceRoomPilot * f8  // need to find F8
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
