import { hoursPerWeek, romParameter } from "../../Constants/fteConstants";
import { parameterKeyIndex } from "../../Constants/parametersSetting";
import { fitGapData, moscowsData, percentData } from "../../Constants/pickListData";
let para_d4 = 10/100;

export const generateDataMigrationMValue = async(inititlaData: any, analisisDesignPre: {responseCustomRequirementDesign: any, responseAnalisisDesign: any, responseCustomisationDesign: any, responseIntegration: any}, condition: boolean, isFte?: boolean, settingParameters?: any, isSnapshotModeEnable?: boolean) => {
  // need to check with 'Estimate - Resource Milestone'!$C$1
  let hasParameters = settingParameters && isSnapshotModeEnable;
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
    const {parameterModel, fteValue, DataMigrationModel} = inititlaData
    if (inititlaData) {
      let {hoursPerday, dataMigrationType, dataMigration} = parameterModel[0]
      let dataMigrationValue = dataMigration;
      let dataMigrationTypeValue = dataMigrationType;
      if (hasParameters) {
        para_d4 = parseFloat(settingParameters?.formattedData[
          parameterKeyIndex.fteBase
        ]?.currentValue || '0') 
        hoursPerday = parseFloat(settingParameters?.formattedData[
          parameterKeyIndex.hoursPerDay
        ]?.currentValue || '0');
        dataMigrationValue = parseFloat(settingParameters?.formattedData[
          parameterKeyIndex.dataMigration
        ]?.currentValue || '0')
        dataMigrationTypeValue = parseFloat(settingParameters?.formattedData[
          parameterKeyIndex.dataMigration
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
      const h7 = fteValue?.totalFte || 0; // need to gets it from api
      const g7 = fteValue?.totalFteMS || 0;
      const f7 = fteValue?.totalFteMSC || 0;
      const h8 = h7 * F4Parameter
      // hoursPerWeek
      const g8 = g7 * F4Parameter
      // hoursPerWeek
      const f8 = f7 * F4Parameter
      // hoursPerWeek

      // STRAT NEW DATA MIGRATION
      // Variables for When it moscow

      // END NEW DATA MIRATION
      
      // not done yet
      if (fte) {

        if (percentData?.[dataMigrationTypeValue] == percentData?.[100000001]) {
          returnObject.dataMigrationAveRateMilestone.resultValue = mustCal * (dataMigrationValue/100);
          returnObject.dataMigrationAveRateMilestone.resultValueMS = mustShouldCal * (dataMigrationValue/100);
          returnObject.dataMigrationAveRateMilestone.resultValueMSC = mustShouldCouldCal * (dataMigrationValue/100);
        } else {
          returnObject.dataMigrationAveRateMilestone.resultValue = mustCal * (para_d4); // not dataMigration it need to get from backend
          returnObject.dataMigrationAveRateMilestone.resultValueMS = mustShouldCal * (para_d4);
          returnObject.dataMigrationAveRateMilestone.resultValueMSC = mustShouldCouldCal * (para_d4);
        }
        
      } else {
        if (percentData?.[dataMigrationTypeValue] == percentData?.[100000001]) {
          returnObject.dataMigration.resultValue = mustCal * (dataMigrationValue/100);
          returnObject.dataMigration.resultValueMS = mustShouldCal * (dataMigrationValue/100);
          returnObject.dataMigration.resultValueMSC = mustShouldCouldCal * (dataMigrationValue/100);
        } else if (percentData?.[dataMigrationTypeValue] == percentData?.[100000003]) {
          // moscow
          const moscowCal = getMigratedMoscow(DataMigrationModel, romParameter, hoursPerday);          
          returnObject.dataMigration.resultValue = moscowCal?.mustValue;
          returnObject.dataMigration.resultValueMS = moscowCal?.mustShouldValue;
          returnObject.dataMigration.resultValueMSC = moscowCal?.mustShouldCouldValue;
        } else if (percentData?.[dataMigrationTypeValue] == percentData?.[100000002]) { // hours
          
          returnObject.dataMigration.resultValue = romParameter == "Hours" ? dataMigrationValue : dataMigrationValue/hoursPerday // if c2 === hours then get direct parameterModel[0]?.dataMigration
          returnObject.dataMigration.resultValueMS = romParameter == "Hours" ? dataMigrationValue : dataMigrationValue/hoursPerday // if c2 === hours then get direct parameterModel[0]?.dataMigration
          returnObject.dataMigration.resultValueMSC = romParameter == "Hours" ? dataMigrationValue : (dataMigrationValue/hoursPerday);
        } else if (percentData?.[dataMigrationTypeValue] == percentData?.[100000000]) { // FTE
          // dont need yet
          returnObject.dataMigration.resultValue = romParameter == "Hours" ? (dataMigrationValue * h8) : (dataMigrationValue * h8)/hoursPerday // if c2 === hours then get direct (parameterModel[0]?.dataMigration * h8)  // need to find H8
          returnObject.dataMigration.resultValueMS = romParameter == "Hours" ? (dataMigrationValue * g8) : (dataMigrationValue * g8)/hoursPerday // if c2 === hours then get direct parameterModel[0]?.dataMigration * g8  // need to find G8
          returnObject.dataMigration.resultValueMSC = romParameter == "Hours" ? (dataMigrationValue * f8) : (dataMigrationValue * f8)/hoursPerday // if c2 === hours then get direct parameterModel[0]?.dataMigration * f8  // need to find F8
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


export const getMigratedMoscow = (DataMigrationModel: any[], romParameter: string, hoursPerday: number) => {
  
  let mustValue = 0;
  let mustShouldValue = 0;
  let mustShouldCouldValue = 0;
  DataMigrationModel?.map(async(dataMigrationItem: any) => {
    if (moscowsData?.[dataMigrationItem?.seerMoscow] == moscowsData?.[100000000]) {
      mustValue += generateMoscowCalcultaion(dataMigrationItem);
    }
    if (moscowsData?.[dataMigrationItem?.seerMoscow] == moscowsData?.[100000000] || moscowsData?.[dataMigrationItem?.seerMoscow] == moscowsData?.[100000001]) {
      mustShouldValue += generateMoscowCalcultaion(dataMigrationItem); 
    }
    if ((moscowsData?.[dataMigrationItem?.seerMoscow] == moscowsData?.[100000000]) || (moscowsData?.[dataMigrationItem?.seerMoscow] == moscowsData?.[100000001]) || (moscowsData?.[dataMigrationItem?.seerMoscow] == moscowsData?.[100000002])) {
      mustShouldCouldValue +=generateMoscowCalcultaion(dataMigrationItem); 
    }
  });

  return {
    mustValue: romParameter == 'Days' ? mustValue / hoursPerday : mustValue,
    mustShouldValue: romParameter == 'Days' ? mustShouldValue / hoursPerday : mustShouldValue,
    mustShouldCouldValue: romParameter == 'Days' ? mustShouldCouldValue / hoursPerday : mustShouldCouldValue,
  }
}

export const generateMoscowCalcultaion = (dataMigrationItem: any) => {
  
  return ((((dataMigrationItem?.seerEstimateDesign || 0) * (dataMigrationItem?.seerQuantity > 0 ? dataMigrationItem?.seerQuantity : 1)) * ((dataMigrationItem?.seerResourceSplit || 0)/100)) 
  + (((dataMigrationItem?.seerEstimateDesign || 0) * (dataMigrationItem?.seerQuantity > 0 ? dataMigrationItem?.seerQuantity : 1)) * ((100 - (dataMigrationItem?.seerResourceSplit || 0))/100)) 
  + (((dataMigrationItem?.seerEstimateBuild || 0) * (dataMigrationItem?.seerQuantity > 0 ? dataMigrationItem?.seerQuantity : 1)) * ((dataMigrationItem?.seerResourceSplit || 0)/100)) 
  + (((dataMigrationItem?.seerEstimateBuild || 0) * (dataMigrationItem?.seerQuantity > 0 ? dataMigrationItem?.seerQuantity : 1)) * ((100 - (dataMigrationItem?.seerResourceSplit || 0))/100)));
}
