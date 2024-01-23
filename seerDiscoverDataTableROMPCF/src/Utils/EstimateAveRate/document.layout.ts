import { romParameter } from "../../Constants/fteConstants";
import { parameterKeyIndex } from "../../Constants/parametersSetting";
import { fitGapData, moscowsData, percentData } from "../../Constants/pickListData";
import { getMigratedMoscow } from "./data.migration.utils";

export const generateDocumentLayoutMValue = async(inititlaData: any, analisisDesignPre: {responseCustomRequirementDesign: any, responseAnalisisDesign: any, responseCustomisationDesign: any, responseIntegration: any}, condition: boolean, isFte?: boolean, settingParameters?: any, isSnapshotModeEnable?: boolean) => {
  // need to check with 'Estimate - Resource Milestone'!$C$1
  let hasParameters = settingParameters && isSnapshotModeEnable;
  let resultValue = 0;
  let resultValueMS = 0;
  let resultValueMSC = 0;
  let x = 0
  let y = 0

  let returnObject = {
    documentLayout: {
      resultValue,
      resultValueMS,
      resultValueMSC
    },
    endUserTraining: {
      resultValue,
      resultValueMS,
      resultValueMSC
    },
    projectRisk: {
      estimateAveRate: 0,
    }
  }

  let layoutValue = 0;
  let endUserTrainingValue = 0;


  let getGColValue = 0;
  let getFcolValue = 0
  let supportValueMForProjectRisk = 0

  // seerMoscow
  // ad_QuestionNumber
  // wholeNumber
  try {
    const {BaseData, resourceModelData, ModuleData, parameterModel, CustomisationModels, FactorsModel, DocumentlayoutModel} = inititlaData
    let {hoursPerday, documentlayoutstype, dataMigration, documentlayouts } = parameterModel[0]
      if (hasParameters) {
        hoursPerday = parseInt(settingParameters?.formattedData[
          parameterKeyIndex.hoursPerDay
        ]?.currentValue || '0');
        // need to change as document layout
        dataMigration = parseInt(settingParameters?.formattedData[
          parameterKeyIndex.dataMigration
        ]?.currentValue || '0')
        // documentlayoutstype = parseInt(settingParameters?.formattedData[
        //   parameterKeyIndex.dataMigration
        // ]?.typeValueCurrent)
      }
    if (inititlaData) {
      const mustCal = 
      (analisisDesignPre?.responseCustomRequirementDesign?.customRequirementBuild?.resultValue || 0) + 
      (analisisDesignPre?.responseAnalisisDesign?.configuration?.resultValue || 0) + 
      (analisisDesignPre?.responseCustomisationDesign?.customisationBuild?.resultValue || 0) + 
      (analisisDesignPre?.responseIntegration?.integration?.resultValue || 0)
    const mustShouldCal = 
      (analisisDesignPre?.responseCustomRequirementDesign?.customRequirementBuild?.resultValueMS || 0) + 
      (analisisDesignPre?.responseAnalisisDesign?.configuration?.resultValueMS || 0) + 
      (analisisDesignPre?.responseCustomisationDesign?.customisationBuild?.resultValueMS || 0) + 
      (analisisDesignPre?.responseIntegration?.integration?.resultValueMS || 0)
    const mustShouldCouldCal = 
      (analisisDesignPre?.responseCustomRequirementDesign?.customRequirementBuild?.resultValueMSC || 0) +
      (analisisDesignPre?.responseAnalisisDesign?.configuration?.resultValueMSC || 0) + 
      (analisisDesignPre?.responseCustomisationDesign?.customisationBuild?.resultValueMSC || 0) + 
      (analisisDesignPre?.responseIntegration?.integration?.resultValueMSC || 0)
      console.log("Configured 1", FactorsModel)

      if(FactorsModel?.length) {
      const customizationLoop = await FactorsModel && FactorsModel?.length && FactorsModel?.map(async(factorItem: any, factorIndex: number) => {
        if (factorItem?.ad_QuestionNumber == '500000' || factorItem?.ad_QuestionNumber == '500100') {
          layoutValue += factorItem?.wholeNumber
        }

        console.log("GHGH 1")
        if (factorItem?.ad_QuestionNumber == '201900') {
          if (factorItem?.answerChoice == 'End user training') {
            if (hasParameters) {
              const totalLicenceCountSettingValue = parseInt(settingParameters?.formattedData[
                parameterKeyIndex.users
              ]?.currentValue || '0')
              const endUserTrainingUsersSettingValue = parseInt(settingParameters?.formattedData[
                parameterKeyIndex.endUserTrainingUsers
              ]?.currentValue || '0')
              const endUserTrainingSettingValue = parseInt(settingParameters?.formattedData[
                parameterKeyIndex.endUserTraining
              ]?.currentValue || '0')
              if (condition) {
                // d5 = parameterModel[0].hoursPerday
                // d8 = parameterModel[0]?.totalLicenceCount
                // d21 = endUserTrainingUsers
                // d20 = endUserTraining
                // (para d8/ parad21) * (para d20/ para d5)
  
                endUserTrainingValue += 
                  ((totalLicenceCountSettingValue || 0)/ (endUserTrainingUsersSettingValue || 0)) *
                   ((endUserTrainingSettingValue || 0)/(hoursPerday || 0))
              } else {
                // (para d8/ parad21) * (para d20)
                endUserTrainingValue += ((totalLicenceCountSettingValue || 0)/ (endUserTrainingUsersSettingValue || 0)) *
                ((endUserTrainingSettingValue || 0))
              }
            } else {
              if (condition) {
                // d5 = parameterModel[0].hoursPerday
                // d8 = parameterModel[0]?.totalLicenceCount
                // d21 = endUserTrainingUsers
                // d20 = endUserTraining
                // (para d8/ parad21) * (para d20/ para d5)
  
                endUserTrainingValue += 
                  ((parameterModel[0]?.totalLicenceCount || 0)/ (parameterModel[0]?.endUserTrainingUsers || 0)) *
                   ((parameterModel[0]?.endUserTraining || 0)/(hoursPerday || 0))
              } else {
                // (para d8/ parad21) * (para d20)
                endUserTrainingValue += ((parameterModel[0]?.totalLicenceCount || 0)/ (parameterModel[0]?.endUserTrainingUsers || 0)) *
                ((parameterModel[0]?.endUserTraining || 0))
              }
            }
          }
        }

        // risk releated
        if (factorItem?.ad_CalculationType?.value == 100000000) {
          if (factorItem?.ad_QuestionNumber == '100900') {
            let value = factorItem?.wholeNumber <= 50 ? 10 : (factorItem?.wholeNumber > 50 && factorItem?.wholeNumber <= 100) ? 5 : factorItem?.wholeNumber > 100 ? 0 : 0;
            getGColValue += value;
          }
          if (
            factorItem?.ad_QuestionNumber == '101000' || 
            factorItem?.ad_QuestionNumber == '101300' ||
            factorItem?.ad_QuestionNumber == '200700'
            ) {
            let value = factorItem?.boolean ? -5 : 5;
            getGColValue += value;
          }
          if (
            factorItem?.ad_QuestionNumber == '200400' || 
            factorItem?.ad_QuestionNumber == '200900'
            ) {
            let value = factorItem?.boolean ? 10 : -5;
            getGColValue += value;
          }
          if (
            factorItem?.ad_QuestionNumber == '201000' || 
            factorItem?.ad_QuestionNumber == '202100'
            ) {
            let value = factorItem?.boolean ? 10 : 0;
            getGColValue += value;
          }
          if (
            factorItem?.ad_QuestionNumber == '201800' || 
            factorItem?.ad_QuestionNumber == '202700' || 
            factorItem?.ad_QuestionNumber == '500100'
            ) {
            let value = factorItem?.boolean ? 5 : 0;
            getGColValue += value;
          } // Train-the-trainer
          if (
            factorItem?.ad_QuestionNumber == '201900' 
            ) {
            let value = factorItem?.answerChoice == 'Train-the-trainer' ? 10 : -10;
            getGColValue += value;
          }
          if (
            factorItem?.ad_QuestionNumber == '202400' 
            ) {
            let value = factorItem?.answerChoice == 'No internal resource' ? -10 :
            factorItem?.answerChoice == 'Staff less than 50% on project' ? 0 :
            factorItem?.answerChoice == 'Staff more than 50% on project' ? 5 :
            factorItem?.answerChoice == 'Staff fully allocated to project' ? 10 : 0;
            getGColValue += value;
          }
          if (
            factorItem?.ad_QuestionNumber == '500000' 
            ) {
            let value = factorItem?.wholeNumber;
            getGColValue += value;
          }
        }
        
      
      });

      console.log("GETGG VALL", getGColValue)

      await Promise.all(customizationLoop);
    }
      // if (getGColValue == 43) {
      //   getFcolValue = 0;
      // }


       if (getGColValue >= 70) {
        getFcolValue = 5/100;
      } else if (getGColValue >= 50 && getGColValue < 70) {
        getFcolValue = 10/100;
      } else if (getGColValue >= 30 && getGColValue < 50) {
        getFcolValue = 15/100;
      } else if (getGColValue < 30) {
        getFcolValue = 20/100;
      }


      console.log("GETFF VALL", getFcolValue)
      console.log("parameterModel VALL", getFcolValue)

      if (parameterModel?.length) {
        console.log("parameterModel", parameterModel);
        console.log("percentData", percentData);
        console.log("documentlayoutstype", documentlayoutstype);

        if (percentData?.[documentlayoutstype] === percentData?.[100000003]) {
          // moscow
          const moscowCal = getMigratedMoscow(DocumentlayoutModel, romParameter, hoursPerday);
          returnObject.documentLayout.resultValue = moscowCal?.mustValue;
          returnObject.documentLayout.resultValueMS = moscowCal?.mustShouldValue;
          returnObject.documentLayout.resultValueMSC = moscowCal?.mustShouldCouldValue;
        } else {
          console.log("layoutValue", layoutValue);
          console.log("parameterModel[0]", parameterModel[0]);
          console.log("hoursPerday[0]", hoursPerday)
          console.log("condition[0]", condition)
          console.log("mustCal[0]", mustCal)

          if (percentData?.[parameterModel[0]?.documentlayoutstype] === percentData?.[100000001]) {
            returnObject.documentLayout.resultValue = mustCal * (documentlayouts/100);
            returnObject.documentLayout.resultValueMS = mustShouldCal * (documentlayouts/100);
            returnObject.documentLayout.resultValueMSC = mustShouldCouldCal * (documentlayouts/100);
          } else if (percentData?.[parameterModel[0]?.documentlayoutstype] === percentData?.[100000002]) {
            returnObject.documentLayout.resultValue = romParameter == "Hours" ? documentlayouts : documentlayouts/hoursPerday;
            returnObject.documentLayout.resultValueMS = romParameter == "Hours" ? documentlayouts : documentlayouts/hoursPerday;
            returnObject.documentLayout.resultValueMSC = romParameter == "Hours" ? documentlayouts : (documentlayouts/hoursPerday);
          } 
          // else {
            // returnObject.documentLayout.resultValue = mustCal * (para_d4); // not dataMigration it need to get from backend
            // returnObject.documentLayout.resultValueMS = mustShouldCal * (para_d4);
            // returnObject.documentLayout.resultValueMSC = mustShouldCouldCal * (para_d4);
          // }
          // returnObject.documentLayout.resultValue = generateReturnValue(
          //   documentlayouts,
          //   hoursPerday,
          //   condition
          // )
          
          // returnObject.documentLayout.resultValueMS = generateReturnValue(
          //   documentlayouts,
          //   hoursPerday,
          //   condition
          // )
  
          // returnObject.documentLayout.resultValueMSC =  generateReturnValue(
          //   documentlayouts,
          //   hoursPerday,
          //   condition
          // )
        }
        
        returnObject.endUserTraining.resultValue = endUserTrainingValue;
        returnObject.endUserTraining.resultValueMS = endUserTrainingValue;
        returnObject.endUserTraining.resultValueMSC = endUserTrainingValue;

        returnObject.projectRisk.estimateAveRate = getFcolValue;
        
      }
      // await Promise.all([customizationLoop])
      return returnObject;
    } else {
      return returnObject;
    }
  } catch (error) {
    console.log("generateAnalysisDesignMValue error ==> ", error);
    return returnObject;
  }
}

const generateReturnValue = (val1: number, hoursPerDay: number, condtion: boolean) => {
  if (!condtion) {
    return (val1)*hoursPerDay
  }
  return (val1)
}

