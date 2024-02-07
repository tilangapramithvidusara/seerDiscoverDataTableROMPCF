import { hoursPerWeek, romParameter } from "../../Constants/fteConstants";
import { parameterKeyIndex } from "../../Constants/parametersSetting";
import { fitGapData, moscowsData, percentData } from "../../Constants/pickListData";
let para_d4 = 10/100;

export const generatePostGoLiveMValue = async(inititlaData: any, analisisDesignPre: {responseCustomRequirementDesign: any, responseAnalisisDesign: any, responseCustomisationDesign: any, responseIntegration: any}, condition: boolean, isFte?: boolean, settingParameters?: any, isSnapshotModeEnable?: boolean) => {
  // need to check with 'Estimate - Resource Milestone'!$C$1
  let hasParameters = settingParameters && isSnapshotModeEnable;

  let fte = isFte ? true : false;

  let resultValue = 0;
  let resultValueMS = 0;
  let resultValueMSC = 0;
  let x = 0
  let y = 0

  let returnObject = {
    postGoLive: {
      resultValue,
      resultValueMS,
      resultValueMSC
    },
    postGoLiveAveRateMilestone: {
      resultValue,
      resultValueMS,
      resultValueMSC
    }
  }
  // seerMoscow
  try {
    const {parameterModel, fteValue} = inititlaData
    let {hoursPerday, postGoLiveSupportType, postGoLiveSupport} = parameterModel[0];
    let postGoLiveValue = postGoLiveSupport;
    let postGoLiveTypeValue = postGoLiveSupportType;
      if (hasParameters) {
        para_d4 = parseFloat(settingParameters?.formattedData[
          parameterKeyIndex.fteBase
        ]?.currentValue || '0')
        hoursPerday = parseFloat(settingParameters?.formattedData[
          parameterKeyIndex.hoursPerDay
        ]?.currentValue || '0');
        postGoLiveValue = parseFloat(settingParameters?.formattedData[
          parameterKeyIndex.postGoLiveSupport
        ]?.currentValue || '0')
        postGoLiveTypeValue = parseFloat(settingParameters?.formattedData[
          parameterKeyIndex.postGoLiveSupport
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

      if (fte) {
        if (percentData?.[postGoLiveTypeValue] == percentData?.[100000001]) {
          returnObject.postGoLiveAveRateMilestone.resultValue = mustCal * (postGoLiveValue/100);
          returnObject.postGoLiveAveRateMilestone.resultValueMS = mustShouldCal * (postGoLiveValue/100);
          returnObject.postGoLiveAveRateMilestone.resultValueMSC = mustShouldCouldCal * (postGoLiveValue/100);
        } else {
          returnObject.postGoLiveAveRateMilestone.resultValue = mustCal * (para_d4); // not postGoLiveSupport it need to get from backend
          returnObject.postGoLiveAveRateMilestone.resultValueMS = mustShouldCal * (para_d4);
          returnObject.postGoLiveAveRateMilestone.resultValueMSC = mustShouldCouldCal * (para_d4);
        }
        // if (hasParameters) {
        //   const postGoLiveValue = parseFloat(settingParameters?.formattedData[
        //     parameterKeyIndex.postGoLiveSupport
        //   ]?.currentValue || '0')
        //   const postGoLiveTypeValue = parseFloat(settingParameters?.formattedData[
        //     parameterKeyIndex.postGoLiveSupport
        //   ]?.typeValueCurrent)

        //   if (percentData?.[postGoLiveTypeValue] == percentData?.[100000001]) {
        //     returnObject.postGoLiveAveRateMilestone.resultValue = mustCal * (postGoLiveValue/100);
        //     returnObject.postGoLiveAveRateMilestone.resultValueMS = mustShouldCal * (postGoLiveValue/100);
        //     returnObject.postGoLiveAveRateMilestone.resultValueMSC = mustShouldCouldCal * (postGoLiveValue/100);
        //   } else {
        //     returnObject.postGoLiveAveRateMilestone.resultValue = mustCal * (para_d4); // not postGoLiveSupport it need to get from backend
        //     returnObject.postGoLiveAveRateMilestone.resultValueMS = mustShouldCal * (para_d4);
        //     returnObject.postGoLiveAveRateMilestone.resultValueMSC = mustShouldCouldCal * (para_d4);
        //   }

        // } else {
        //   if (percentData?.[parameterModel[0]?.postGoLiveSupportType] === percentData?.[100000001]) {
        //     returnObject.postGoLiveAveRateMilestone.resultValue = mustCal * (parameterModel[0]?.postGoLiveSupport/100);
        //     returnObject.postGoLiveAveRateMilestone.resultValueMS = mustShouldCal * (parameterModel[0]?.postGoLiveSupport/100);
        //     returnObject.postGoLiveAveRateMilestone.resultValueMSC = mustShouldCouldCal * (parameterModel[0]?.postGoLiveSupport/100);
        //   } else {
        //     returnObject.postGoLiveAveRateMilestone.resultValue = mustCal * (para_d4); // not postGoLiveSupport it need to get from backend
        //     returnObject.postGoLiveAveRateMilestone.resultValueMS = mustShouldCal * (para_d4);
        //     returnObject.postGoLiveAveRateMilestone.resultValueMSC = mustShouldCouldCal * (para_d4);
        //   }
        // }
        
      } else {
        if (percentData?.[postGoLiveTypeValue] == percentData?.[100000001]) {

          returnObject.postGoLive.resultValue = mustCal * (postGoLiveValue/100);
          returnObject.postGoLive.resultValueMS = mustShouldCal * (postGoLiveValue/100);
          returnObject.postGoLive.resultValueMSC = mustShouldCouldCal * (postGoLiveValue/100);
        } else if (percentData?.[postGoLiveTypeValue] == percentData?.[100000002]) { // hours
          
          returnObject.postGoLive.resultValue = romParameter == "Hours" ? postGoLiveValue :  postGoLiveValue/hoursPerday // if c2 === hours then get direct parameterModel[0]?.postGoLiveSupport
          returnObject.postGoLive.resultValueMS = romParameter == "Hours" ? postGoLiveValue :  postGoLiveValue/hoursPerday // if c2 === hours then get direct parameterModel[0]?.postGoLiveSupport
          returnObject.postGoLive.resultValueMSC = romParameter == "Hours" ? postGoLiveValue :  postGoLiveValue/hoursPerday
        } else if (percentData?.[postGoLiveTypeValue] == percentData?.[100000000]) { // FTE
          // dont need yet
          returnObject.postGoLive.resultValue = romParameter == "Hours" ? (postGoLiveValue * h8) : (postGoLiveValue * h8)/hoursPerday // if c2 === hours then get direct (parameterModel[0]?.postGoLiveSupport * h8)  // need to find H8
          returnObject.postGoLive.resultValueMS = romParameter == "Hours" ? (postGoLiveValue * g8) : (postGoLiveValue * g8)/hoursPerday // if c2 === hours then get direct parameterModel[0]?.postGoLiveSupport * g8  // need to find G8
          returnObject.postGoLive.resultValueMSC = romParameter == "Hours" ? (postGoLiveValue * f8) : (postGoLiveValue * f8)/hoursPerday // if c2 === hours then get direct parameterModel[0]?.postGoLiveSupport * f8  // need to find F8
        }
        // not done yet
        // if (hasParameters) {
        //   const postGoLiveValue = parseFloat(settingParameters?.formattedData[
        //     parameterKeyIndex.postGoLiveSupport
        //   ]?.currentValue || '0')
        //   const postGoLiveTypeValue = parseFloat(settingParameters?.formattedData[
        //     parameterKeyIndex.postGoLiveSupport
        //   ]?.typeValueCurrent)

        //   if (percentData?.[postGoLiveTypeValue] == percentData?.[100000001]) {

        //     returnObject.postGoLive.resultValue = mustCal * (postGoLiveValue/100);
        //     returnObject.postGoLive.resultValueMS = mustShouldCal * (postGoLiveValue/100);
        //     returnObject.postGoLive.resultValueMSC = mustShouldCouldCal * (postGoLiveValue/100);
        //   } else if (percentData?.[postGoLiveTypeValue] == percentData?.[100000002]) { // hours
            
        //     returnObject.postGoLive.resultValue = romParameter == "Hours" ? postGoLiveValue :  postGoLiveValue/hoursPerday // if c2 === hours then get direct parameterModel[0]?.postGoLiveSupport
        //     returnObject.postGoLive.resultValueMS = romParameter == "Hours" ? postGoLiveValue :  postGoLiveValue/hoursPerday // if c2 === hours then get direct parameterModel[0]?.postGoLiveSupport
        //     returnObject.postGoLive.resultValueMSC = romParameter == "Hours" ? postGoLiveValue :  postGoLiveValue/hoursPerday
        //   } else if (percentData?.[postGoLiveTypeValue] == percentData?.[100000000]) { // FTE
        //     // dont need yet
        //     returnObject.postGoLive.resultValue = romParameter == "Hours" ? (postGoLiveValue * h8) : (postGoLiveValue * h8)/hoursPerday // if c2 === hours then get direct (parameterModel[0]?.postGoLiveSupport * h8)  // need to find H8
        //     returnObject.postGoLive.resultValueMS = romParameter == "Hours" ? (postGoLiveValue * g8) : (postGoLiveValue * g8)/hoursPerday // if c2 === hours then get direct parameterModel[0]?.postGoLiveSupport * g8  // need to find G8
        //     returnObject.postGoLive.resultValueMSC = romParameter == "Hours" ? (postGoLiveValue * f8) : (postGoLiveValue * f8)/hoursPerday // if c2 === hours then get direct parameterModel[0]?.postGoLiveSupport * f8  // need to find F8
        //   }
        // } else {
        //   if (percentData?.[parameterModel[0]?.postGoLiveSupportType] === percentData?.[100000001]) {

        //     returnObject.postGoLive.resultValue = mustCal * (parameterModel[0]?.postGoLiveSupport/100);
        //     returnObject.postGoLive.resultValueMS = mustShouldCal * (parameterModel[0]?.postGoLiveSupport/100);
        //     returnObject.postGoLive.resultValueMSC = mustShouldCouldCal * (parameterModel[0]?.postGoLiveSupport/100);
        //   } else if (percentData?.[parameterModel[0]?.postGoLiveSupportType] === percentData?.[100000002]) { // hours
            
        //     returnObject.postGoLive.resultValue = romParameter == "Hours" ? parameterModel[0]?.postGoLiveSupport :  parameterModel[0]?.postGoLiveSupport/parameterModel[0]?.hoursPerday // if c2 === hours then get direct parameterModel[0]?.postGoLiveSupport
        //     returnObject.postGoLive.resultValueMS = romParameter == "Hours" ? parameterModel[0]?.postGoLiveSupport :  parameterModel[0]?.postGoLiveSupport/parameterModel[0]?.hoursPerday // if c2 === hours then get direct parameterModel[0]?.postGoLiveSupport
        //     returnObject.postGoLive.resultValueMSC = romParameter == "Hours" ? parameterModel[0]?.postGoLiveSupport :  parameterModel[0]?.postGoLiveSupport/parameterModel[0]?.hoursPerday
        //   } else if (percentData?.[parameterModel[0]?.postGoLiveSupportType] === percentData?.[100000000]) { // FTE
        //     // dont need yet
        //     returnObject.postGoLive.resultValue = romParameter == "Hours" ? (parameterModel[0]?.postGoLiveSupport * h8) : (parameterModel[0]?.postGoLiveSupport * h8)/parameterModel[0]?.hoursPerday // if c2 === hours then get direct (parameterModel[0]?.postGoLiveSupport * h8)  // need to find H8
        //     returnObject.postGoLive.resultValueMS = romParameter == "Hours" ? (parameterModel[0]?.postGoLiveSupport * g8) : (parameterModel[0]?.postGoLiveSupport * g8)/parameterModel[0]?.hoursPerday // if c2 === hours then get direct parameterModel[0]?.postGoLiveSupport * g8  // need to find G8
        //     returnObject.postGoLive.resultValueMSC = romParameter == "Hours" ? (parameterModel[0]?.postGoLiveSupport * f8) : (parameterModel[0]?.postGoLiveSupport * f8)/parameterModel[0]?.hoursPerday // if c2 === hours then get direct parameterModel[0]?.postGoLiveSupport * f8  // need to find F8
        //   }
        // }
        
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
