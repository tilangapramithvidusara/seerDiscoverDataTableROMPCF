import { hoursPerWeek, romParameter } from "../../Constants/fteConstants";
import { fitGapData, moscowsData, percentData } from "../../Constants/pickListData";
const para_d4 = 10/100;
export const generateCRPMValue = async(inititlaData: any, analisisDesignPre: {responseCustomRequirementDesign: any, responseAnalisisDesign: any, responseCustomisationDesign: any, responseIntegration: any}, condition: boolean, isFte?: boolean, settingParameters?: any, isSnapshotModeEnable?: boolean) => {
  // need to check with 'Estimate - Resource Milestone'!$C$1
  let fte = isFte ? true : false;
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
    const {parameterModel, fteValue} = inititlaData
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
      const h7 = fteValue?.totalFte // need to gets it from api
      const g7 = fteValue?.totalFteMS
      const f7 = fteValue?.totalFteMSC
      const h8 = h7 * hoursPerWeek
      const g8 = g7 * hoursPerWeek
      const f8 = f7 * hoursPerWeek
      
      // not done yet
      if (fte) {
        if (percentData?.[parameterModel[0]?.conferenceRoomPilotType] === percentData?.[100000001]) {
          returnObject.crpAveRateMilestone.resultValue = mustCal * (parameterModel[0]?.conferenceRoomPilot/100);
          returnObject.crpAveRateMilestone.resultValueMS = mustShouldCal * (parameterModel[0]?.conferenceRoomPilot/100);
          returnObject.crpAveRateMilestone.resultValueMSC = mustShouldCouldCal * (parameterModel[0]?.conferenceRoomPilot/100);
        } else {
          returnObject.crpAveRateMilestone.resultValue = mustCal * (para_d4); // not conferenceRoomPilot it need to get from backend
          returnObject.crpAveRateMilestone.resultValueMS = mustShouldCal * (para_d4);
          returnObject.crpAveRateMilestone.resultValueMSC = mustShouldCouldCal * (para_d4);
        }
      } else {
        if (percentData?.[parameterModel[0]?.conferenceRoomPilotType] === percentData?.[100000001]) {

          returnObject.crp.resultValue = mustCal * (parameterModel[0]?.conferenceRoomPilot/100);
          returnObject.crp.resultValueMS = mustShouldCal * (parameterModel[0]?.conferenceRoomPilot/100);
          returnObject.crp.resultValueMSC = mustShouldCouldCal * (parameterModel[0]?.conferenceRoomPilot/100);
        } else if (percentData?.[parameterModel[0]?.conferenceRoomPilotType] === percentData?.[100000002]) { // hours
          
          returnObject.crp.resultValue = romParameter == "Hours" ? parameterModel[0]?.conferenceRoomPilot : parameterModel[0]?.conferenceRoomPilot/parameterModel[0]?.hoursPerday // if c2 === hours then get direct parameterModel[0]?.conferenceRoomPilot
          returnObject.crp.resultValueMS = romParameter == "Hours" ? parameterModel[0]?.conferenceRoomPilot : parameterModel[0]?.conferenceRoomPilot/parameterModel[0]?.hoursPerday // if c2 === hours then get direct parameterModel[0]?.conferenceRoomPilot
          returnObject.crp.resultValueMSC = romParameter == "Hours" ? parameterModel[0]?.conferenceRoomPilot : parameterModel[0]?.conferenceRoomPilot/parameterModel[0]?.hoursPerday
        } else if (percentData?.[parameterModel[0]?.conferenceRoomPilotType] === percentData?.[100000000]) { // FTE
          // dont need yet
          returnObject.crp.resultValue = romParameter == "Hours" ? (parameterModel[0]?.conferenceRoomPilot * h8) : (parameterModel[0]?.conferenceRoomPilot * h8)/parameterModel[0]?.hoursPerday // if c2 === hours then get direct (parameterModel[0]?.conferenceRoomPilot * h8)  // need to find H8
          returnObject.crp.resultValueMS = romParameter == "Hours" ? (parameterModel[0]?.conferenceRoomPilot * g8) : (parameterModel[0]?.conferenceRoomPilot * g8)/parameterModel[0]?.hoursPerday // if c2 === hours then get direct parameterModel[0]?.conferenceRoomPilot * g8  // need to find G8
          returnObject.crp.resultValueMSC = romParameter == "Hours" ? (parameterModel[0]?.conferenceRoomPilot * f8) : (parameterModel[0]?.conferenceRoomPilot * f8)/parameterModel[0]?.hoursPerday // if c2 === hours then get direct parameterModel[0]?.conferenceRoomPilot * f8  // need to find F8
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
