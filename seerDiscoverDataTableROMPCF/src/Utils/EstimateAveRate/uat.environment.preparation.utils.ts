import { hoursPerWeek, romParameter } from "../../Constants/fteConstants";
import { parameterKeyIndex } from "../../Constants/parametersSetting";
import { fitGapData, moscowsData, percentData } from "../../Constants/pickListData";
let para_d4 = 10/100;

export const generateUATEnvironmentPreparationMValue = async(inititlaData: any, analisisDesignPre: {responseCustomRequirementDesign: any, responseAnalisisDesign: any, responseCustomisationDesign: any, responseIntegration: any}, condition: boolean, isFte?: boolean, settingParameters?: any, isSnapshotModeEnable?: boolean) => {
  // need to check with 'Estimate - Resource Milestone'!$C$1
  let hasParameters = settingParameters && isSnapshotModeEnable;

  let fte = isFte ? true : false;

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
    uatEnvironmentPreparationAveRateMilestone: {
      resultValue,
      resultValueMS,
      resultValueMSC
    }
  }
  // seerMoscow
  try {
    const {parameterModel, fteValue} = inititlaData
    if (inititlaData) { // condition && 
      let {hoursPerday, deployUatType, deployUat} = parameterModel[0];
      let deploayUatValue = deployUat;
      let deploayUatTypeValue = deployUatType;
      if (hasParameters) {
        para_d4 = parseFloat(settingParameters?.formattedData[
          parameterKeyIndex.fteBase
        ]?.currentValue || '0')
        hoursPerday = parseFloat(settingParameters?.formattedData[
          parameterKeyIndex.hoursPerDay
        ]?.currentValue || '0');
        deploayUatValue = parseFloat(settingParameters?.formattedData[
          parameterKeyIndex.uatEnvPrep
        ]?.currentValue || '0')
        deploayUatTypeValue = parseFloat(settingParameters?.formattedData[
          parameterKeyIndex.uatEnvPrep
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
      
      // not done yet

      // HAS TO FIND parameterModel[0]?.testing LIKE VALUE FOR UAT ENV
      if (fte) {
        if (percentData?.[deploayUatTypeValue] == percentData?.[100000001]) {
          returnObject.uatEnvironmentPreparationAveRateMilestone.resultValue = mustCal * (deploayUatValue/100);
          returnObject.uatEnvironmentPreparationAveRateMilestone.resultValueMS = mustShouldCal * (deploayUatValue/100);
          returnObject.uatEnvironmentPreparationAveRateMilestone.resultValueMSC = mustShouldCouldCal * (deploayUatValue/100);
        } else {
          returnObject.uatEnvironmentPreparationAveRateMilestone.resultValue = mustCal * (para_d4); // not deployUat it need to get from backend
          returnObject.uatEnvironmentPreparationAveRateMilestone.resultValueMS = mustShouldCal * (para_d4);
          returnObject.uatEnvironmentPreparationAveRateMilestone.resultValueMSC = mustShouldCouldCal * (para_d4);
        }
        // if (hasParameters) {
        //   const deploayUatValue = parseFloat(settingParameters?.formattedData[
        //     parameterKeyIndex.uatEnvPrep
        //   ]?.currentValue || '0')
        //   const deploayUatTypeValue = parseFloat(settingParameters?.formattedData[
        //     parameterKeyIndex.uatEnvPrep
        //   ]?.typeValueCurrent)

        //   if (percentData?.[deploayUatTypeValue] === percentData?.[100000001]) {
        //     returnObject.uatEnvironmentPreparationAveRateMilestone.resultValue = mustCal * (deploayUatValue/100);
        //     returnObject.uatEnvironmentPreparationAveRateMilestone.resultValueMS = mustShouldCal * (deploayUatValue/100);
        //     returnObject.uatEnvironmentPreparationAveRateMilestone.resultValueMSC = mustShouldCouldCal * (deploayUatValue/100);
        //   } else {
        //     returnObject.uatEnvironmentPreparationAveRateMilestone.resultValue = mustCal * (para_d4); // not deployUat it need to get from backend
        //     returnObject.uatEnvironmentPreparationAveRateMilestone.resultValueMS = mustShouldCal * (para_d4);
        //     returnObject.uatEnvironmentPreparationAveRateMilestone.resultValueMSC = mustShouldCouldCal * (para_d4);
        //   }
        // } else {
        //   if (percentData?.[parameterModel[0]?.deployUatType] === percentData?.[100000001]) {
        //     returnObject.uatEnvironmentPreparationAveRateMilestone.resultValue = mustCal * (parameterModel[0]?.deployUat/100);
        //     returnObject.uatEnvironmentPreparationAveRateMilestone.resultValueMS = mustShouldCal * (parameterModel[0]?.deployUat/100);
        //     returnObject.uatEnvironmentPreparationAveRateMilestone.resultValueMSC = mustShouldCouldCal * (parameterModel[0]?.deployUat/100);
        //   } else {
        //     returnObject.uatEnvironmentPreparationAveRateMilestone.resultValue = mustCal * (para_d4); // not deployUat it need to get from backend
        //     returnObject.uatEnvironmentPreparationAveRateMilestone.resultValueMS = mustShouldCal * (para_d4);
        //     returnObject.uatEnvironmentPreparationAveRateMilestone.resultValueMSC = mustShouldCouldCal * (para_d4);
        //   }
        // }
        
      } else {
        if (percentData?.[deploayUatTypeValue] == percentData?.[100000001]) {

          returnObject.uatEnvironmentPreparation.resultValue = mustCal * (deploayUatValue/100);
          returnObject.uatEnvironmentPreparation.resultValueMS = mustShouldCal * (deploayUatValue/100);
          returnObject.uatEnvironmentPreparation.resultValueMSC = mustShouldCouldCal * (deploayUatValue/100);
        } else if (percentData?.[deploayUatTypeValue] == percentData?.[100000002]) { // hours
          
          returnObject.uatEnvironmentPreparation.resultValue = romParameter == "Hours" ? deploayUatValue : deploayUatValue/hoursPerday // if c2 === hours then get direct parameterModel[0]?.deployUat
          returnObject.uatEnvironmentPreparation.resultValueMS = romParameter == "Hours" ? deploayUatValue : deploayUatValue/hoursPerday // if c2 === hours then get direct parameterModel[0]?.deployUat
          returnObject.uatEnvironmentPreparation.resultValueMSC = romParameter == "Hours" ? deploayUatValue : deploayUatValue/hoursPerday
        } else if (percentData?.[deploayUatTypeValue] == percentData?.[100000000]) { // FTE
          // dont need yet
          returnObject.uatEnvironmentPreparation.resultValue = romParameter == "Hours" ? (deploayUatValue * h8) : (deploayUatValue * h8)/hoursPerday // if c2 === hours then get direct (parameterModel[0]?.deployUat * h8)  // need to find H8
          returnObject.uatEnvironmentPreparation.resultValueMS = romParameter == "Hours" ? (deploayUatValue * g8) : (deploayUatValue * g8)/hoursPerday // if c2 === hours then get direct parameterModel[0]?.deployUat * g8  // need to find G8
          returnObject.uatEnvironmentPreparation.resultValueMSC = romParameter == "Hours" ? (deploayUatValue * f8) : (deploayUatValue * f8)/hoursPerday // if c2 === hours then get direct parameterModel[0]?.deployUat * f8  // need to find F8
        }
        // if (hasParameters) {
        //   const deploayUatValue = parseFloat(settingParameters?.formattedData[
        //     parameterKeyIndex.uatEnvPrep
        //   ]?.currentValue || '0')
        //   const deploayUatTypeValue = parseFloat(settingParameters?.formattedData[
        //     parameterKeyIndex.uatEnvPrep
        //   ]?.typeValueCurrent)

        //   if (percentData?.[deploayUatTypeValue] == percentData?.[100000001]) {

        //     returnObject.uatEnvironmentPreparation.resultValue = mustCal * (deploayUatValue/100);
        //     returnObject.uatEnvironmentPreparation.resultValueMS = mustShouldCal * (deploayUatValue/100);
        //     returnObject.uatEnvironmentPreparation.resultValueMSC = mustShouldCouldCal * (deploayUatValue/100);
        //   } else if (percentData?.[deploayUatTypeValue] == percentData?.[100000002]) { // hours
            
        //     returnObject.uatEnvironmentPreparation.resultValue = romParameter == "Hours" ? deploayUatValue : deploayUatValue/hoursPerday // if c2 === hours then get direct parameterModel[0]?.deployUat
        //     returnObject.uatEnvironmentPreparation.resultValueMS = romParameter == "Hours" ? deploayUatValue : deploayUatValue/hoursPerday // if c2 === hours then get direct parameterModel[0]?.deployUat
        //     returnObject.uatEnvironmentPreparation.resultValueMSC = romParameter == "Hours" ? deploayUatValue : deploayUatValue/hoursPerday
        //   } else if (percentData?.[deploayUatTypeValue] == percentData?.[100000000]) { // FTE
        //     // dont need yet
        //     returnObject.uatEnvironmentPreparation.resultValue = romParameter == "Hours" ? (deploayUatValue * h8) : (deploayUatValue * h8)/hoursPerday // if c2 === hours then get direct (parameterModel[0]?.deployUat * h8)  // need to find H8
        //     returnObject.uatEnvironmentPreparation.resultValueMS = romParameter == "Hours" ? (deploayUatValue * g8) : (deploayUatValue * g8)/hoursPerday // if c2 === hours then get direct parameterModel[0]?.deployUat * g8  // need to find G8
        //     returnObject.uatEnvironmentPreparation.resultValueMSC = romParameter == "Hours" ? (deploayUatValue * f8) : (deploayUatValue * f8)/hoursPerday // if c2 === hours then get direct parameterModel[0]?.deployUat * f8  // need to find F8
        //   }
        // } else {
        //   if (percentData?.[parameterModel[0]?.deployUatType] === percentData?.[100000001]) {

        //     returnObject.uatEnvironmentPreparation.resultValue = mustCal * (parameterModel[0]?.deployUat/100);
        //     returnObject.uatEnvironmentPreparation.resultValueMS = mustShouldCal * (parameterModel[0]?.deployUat/100);
        //     returnObject.uatEnvironmentPreparation.resultValueMSC = mustShouldCouldCal * (parameterModel[0]?.deployUat/100);
        //   } else if (percentData?.[parameterModel[0]?.deployUatType] === percentData?.[100000002]) { // hours
            
        //     returnObject.uatEnvironmentPreparation.resultValue = romParameter == "Hours" ? parameterModel[0]?.deployUat : parameterModel[0]?.deployUat/parameterModel[0]?.hoursPerday // if c2 === hours then get direct parameterModel[0]?.deployUat
        //     returnObject.uatEnvironmentPreparation.resultValueMS = romParameter == "Hours" ? parameterModel[0]?.deployUat : parameterModel[0]?.deployUat/parameterModel[0]?.hoursPerday // if c2 === hours then get direct parameterModel[0]?.deployUat
        //     returnObject.uatEnvironmentPreparation.resultValueMSC = romParameter == "Hours" ? parameterModel[0]?.deployUat : parameterModel[0]?.deployUat/parameterModel[0]?.hoursPerday
        //   } else if (percentData?.[parameterModel[0]?.deployUatType] === percentData?.[100000000]) { // FTE
        //     // dont need yet
        //     returnObject.uatEnvironmentPreparation.resultValue = romParameter == "Hours" ? (parameterModel[0]?.deployUat * h8) : (parameterModel[0]?.deployUat * h8)/parameterModel[0]?.hoursPerday // if c2 === hours then get direct (parameterModel[0]?.deployUat * h8)  // need to find H8
        //     returnObject.uatEnvironmentPreparation.resultValueMS = romParameter == "Hours" ? (parameterModel[0]?.deployUat * g8) : (parameterModel[0]?.deployUat * g8)/parameterModel[0]?.hoursPerday // if c2 === hours then get direct parameterModel[0]?.deployUat * g8  // need to find G8
        //     returnObject.uatEnvironmentPreparation.resultValueMSC = romParameter == "Hours" ? (parameterModel[0]?.deployUat * f8) : (parameterModel[0]?.deployUat * f8)/parameterModel[0]?.hoursPerday // if c2 === hours then get direct parameterModel[0]?.deployUat * f8  // need to find F8
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
