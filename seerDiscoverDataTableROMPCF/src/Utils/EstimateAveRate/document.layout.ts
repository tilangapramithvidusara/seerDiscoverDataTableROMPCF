import { romParameter } from "../../Constants/fteConstants";
import { parameterKeyIndex } from "../../Constants/parametersSetting";
import { fitGapData, moscowsData, percentData } from "../../Constants/pickListData";
import { getMigratedMoscow } from "./data.migration.utils";
let para_d4 = 10/100;

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
    const {BaseData, resourceModelData, ModuleData, parameterModel, CustomisationModels, FactorsModel, DocumentlayoutModel, fteValue} = inititlaData
    let {hoursPerday, documentlayoutstype, dataMigration, documentlayouts } = parameterModel[0]
      if (hasParameters) {

        hoursPerday = parseFloat(settingParameters?.formattedData[
          parameterKeyIndex.hoursPerDay
        ]?.currentValue || '0');
        // need to change as document layout
        documentlayouts = parseFloat(settingParameters?.formattedData[
          parameterKeyIndex.documnentLayout
        ]?.currentValue || '0')
        documentlayoutstype = parseFloat(settingParameters?.formattedData[
          parameterKeyIndex.documnentLayout
        ]?.typeValueCurrent)
      }
      const F4Parameter = hoursPerday * 5;
      
      const O37 = 0// to find this we need to complete Estimate Avg Rate Milestone table
      const H6 = 29// if days === c2 => O37/5 else (O37/8)/5
      const h7 = fteValue?.totalFte || 0 // need to gets it from api
      const g7 = fteValue?.totalFteMS || 0
      const f7 = fteValue?.totalFteMSC || 0
      const h8 = h7 * F4Parameter
      // hoursPerWeek
      const g8 = g7 * F4Parameter
      // hoursPerWeek
      const f8 = f7 * F4Parameter
      // hoursPerWeek

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
    let valueOf202400 = 0;
    if (isFte) {
      const customizationLoop = await FactorsModel && FactorsModel.length && FactorsModel.map(async(factorItem: any, factorIndex: number) => {
        // console.log('llu ===> ', FactorsModel);
        
        if (factorItem?.ad_QuestionNumber == '500000' || factorItem?.ad_QuestionNumber == '500100') {
          layoutValue += factorItem?.wholeNumber
        }
        if (factorItem?.ad_QuestionNumber == '201900') {
          if (factorItem?.answerChoice == 'End user training') {
            if (hasParameters) {
              const totalLicenceCountSettingValue = parseFloat(settingParameters?.formattedData[
                parameterKeyIndex.users
              ]?.currentValue || '0')
              const endUserTrainingUsersSettingValue = parseFloat(settingParameters?.formattedData[
                parameterKeyIndex.endUserTrainingUsers
              ]?.currentValue || '0')
              const endUserTrainingSettingValue = parseFloat(settingParameters?.formattedData[
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
        // if (factorItem?.ad_CalculationType?.value == 100000000) {
          if (factorItem?.ad_QuestionNumber == '100900') {
            let value = factorItem?.wholeNumber <= 50 ? 10 : (factorItem?.wholeNumber > 50 && factorItem?.wholeNumber <= 100) ? 5 : factorItem?.wholeNumber > 100 ? 0 : 0;
            getGColValue += value;
          }
          if (
            factorItem?.ad_QuestionNumber == '101000' || 
            factorItem?.ad_QuestionNumber == '101300' ||
            factorItem?.ad_QuestionNumber == '200700' ||
            factorItem?.ad_QuestionNumber == '101700'
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
            factorItem?.ad_QuestionNumber == '202100' ||
            factorItem?.ad_QuestionNumber == '202200' ||
            factorItem?.ad_QuestionNumber == '202300'
            ) {
            let value = factorItem?.boolean ? 10 : 0;
            getGColValue += value;
          }
          if (
            factorItem?.ad_QuestionNumber == '201800' || 
            factorItem?.ad_QuestionNumber == '202700' || 
            factorItem?.ad_QuestionNumber == '500100' || 
            factorItem?.ad_QuestionNumber == '202800'
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
            factorItem?.ad_QuestionNumber == '202400' || 
            factorItem?.ad_QuestionNumber == '202401'
            ) {
            let value = factorItem?.answerChoice == 'No internal resource' ? -10 :
            factorItem?.answerChoice == 'Staff less than 50% on project' ? 0 :
            factorItem?.answerChoice == 'Staff more than 50% on project' ? 5 :
            factorItem?.answerChoice == 'Staff fully allocated to project' ? 10 : 0;
            getGColValue += value;
            valueOf202400 = value;
          }
          if (
            factorItem?.ad_QuestionNumber == '500000' 
            ) {
            let value = factorItem?.wholeNumber;
            getGColValue += value;
          }
          if (
            factorItem?.ad_QuestionNumber == '200500'
            ) {
            let value = factorItem?.boolean ? 0 : 5;
            // console.log( value, factorItem?.ad_QuestionNumber);
            getGColValue += value;
          }
          if (
            factorItem?.ad_QuestionNumber == '202600' ||
            factorItem?.ad_QuestionNumber == '302500' ||
            factorItem?.ad_QuestionNumber == '303200' ||
            factorItem?.ad_QuestionNumber == '303300' ||
            factorItem?.ad_QuestionNumber == '302000' ||
            factorItem?.ad_QuestionNumber == '302100'
            ) {
            let value = factorItem?.boolean ? -5 : 0;
            // console.log( value, factorItem?.ad_QuestionNumber);
            getGColValue += value;
          }

          if (factorItem?.ad_QuestionNumber == '303100') {
            let value = factorItem?.wholeNumber > 10 ? -5 : 0            
            getGColValue += value;
          }

          // 
          // if (factorItem?.ad_QuestionNumber == '202401') {           
          //   getGColValue += valueOf202400;
          // }
        // }
        
      });
      await Promise.all(customizationLoop);
      if (getGColValue == 43) {
        getFcolValue = 0;
      } else if (getGColValue >= 70) {
        getFcolValue = 5/100;
      } else if (getGColValue >= 50 && getGColValue < 70) {
        getFcolValue = 10/100;
      } else if (getGColValue >= 30 && getGColValue < 50) {
        getFcolValue = 15/100;
      } else if (getGColValue < 30) {
        getFcolValue = 20/100;
      }
      
      if (parameterModel?.length) {
        returnObject.documentLayout.resultValue = generateReturnValue(
          layoutValue,
          hoursPerday,
          condition
        )
        
        returnObject.documentLayout.resultValueMS = generateReturnValue(
          layoutValue,
          hoursPerday,
          condition
        )

        returnObject.documentLayout.resultValueMSC =  generateReturnValue(
          layoutValue,
          hoursPerday,
          condition
        )
        returnObject.endUserTraining.resultValue = endUserTrainingValue;
        returnObject.endUserTraining.resultValueMS = endUserTrainingValue;
        returnObject.endUserTraining.resultValueMSC = endUserTrainingValue;
        
        // console.log('y getFcolValue ==> ', getFcolValue);
        
        returnObject.projectRisk.estimateAveRate = getFcolValue;
        
      }
      await Promise.all([customizationLoop])
      return returnObject;
    } else {
      if (parameterModel?.length) {
        
        if (percentData?.[documentlayoutstype] == percentData?.[100000003]) {
          // moscow
          const moscowCal = getMigratedMoscow(DocumentlayoutModel, romParameter, hoursPerday);
          returnObject.documentLayout.resultValue = moscowCal?.mustValue;
          returnObject.documentLayout.resultValueMS = moscowCal?.mustShouldValue;
          returnObject.documentLayout.resultValueMSC = moscowCal?.mustShouldCouldValue;
        } else {
          if (percentData?.[documentlayoutstype] == percentData?.[100000001]) {
            returnObject.documentLayout.resultValue = mustCal * (documentlayouts/100);
            returnObject.documentLayout.resultValueMS = mustShouldCal * (documentlayouts/100);
            returnObject.documentLayout.resultValueMSC = mustShouldCouldCal * (documentlayouts/100);
          } else if (percentData?.[documentlayoutstype] == percentData?.[100000002]) {
            returnObject.documentLayout.resultValue = romParameter == "Hours" ? documentlayouts : documentlayouts/hoursPerday;
            returnObject.documentLayout.resultValueMS = romParameter == "Hours" ? documentlayouts : documentlayouts/hoursPerday;
            returnObject.documentLayout.resultValueMSC = romParameter == "Hours" ? documentlayouts : (documentlayouts/hoursPerday);
          } else if (percentData?.[documentlayoutstype] == percentData?.[100000000]) { // FTE
            
            returnObject.documentLayout.resultValue = romParameter == "Hours" ? (documentlayouts * h8) : (documentlayouts * h8)/hoursPerday // if c2 === hours then get direct (parameterModel[0]?.collateRequirment * h8)  // need to find H8
            returnObject.documentLayout.resultValueMS = romParameter == "Hours" ? (documentlayouts * g8) : (documentlayouts * g8)/hoursPerday // if c2 === hours then get direct parameterModel[0]?.collateRequirment * g8  // need to find G8
            returnObject.documentLayout.resultValueMSC = romParameter == "Hours" ? (documentlayouts * f8) :  (documentlayouts * f8)/hoursPerday
          }
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

        if(FactorsModel?.length > 0) {
          const customizationLoop = await FactorsModel && FactorsModel?.length && FactorsModel?.map(async(factorItem: any, factorIndex: number) => {
            // console.log('xxx ==> Factor', factorItem);
            
            if (factorItem?.ad_QuestionNumber == '500000' || factorItem?.ad_QuestionNumber == '500100') {
              layoutValue += factorItem?.wholeNumber
            }
    
            if (factorItem?.ad_QuestionNumber == '201900') {
              if (factorItem?.answerChoice == 'End user training') {
                if (hasParameters) {
                  const totalLicenceCountSettingValue = parseFloat(settingParameters?.formattedData[
                    parameterKeyIndex.users
                  ]?.currentValue || '0')
                  const endUserTrainingUsersSettingValue = parseFloat(settingParameters?.formattedData[
                    parameterKeyIndex.endUserTrainingUsers
                  ]?.currentValue || '0')
                  const endUserTrainingSettingValue = parseFloat(settingParameters?.formattedData[
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
            // if (factorItem?.ad_CalculationType?.value == 100000000) {
              if (factorItem?.ad_QuestionNumber == '100900') {
                let value = factorItem?.wholeNumber <= 50 ? 10 : (factorItem?.wholeNumber > 50 && factorItem?.wholeNumber <= 100) ? 5 : factorItem?.wholeNumber > 100 ? 0 : 0;
                // console.log('100900 ', value);
                
                getGColValue += value;
              }
              if (
                factorItem?.ad_QuestionNumber == '101000' || 
                factorItem?.ad_QuestionNumber == '101300' ||
                factorItem?.ad_QuestionNumber == '200700' || 
                factorItem?.ad_QuestionNumber == '101700'
                ) {
                let value = factorItem?.boolean ? -5 : 5;
                // console.log(value, factorItem?.ad_QuestionNumber);
                getGColValue += value;
              }
              if (
                factorItem?.ad_QuestionNumber == '200400' || 
                factorItem?.ad_QuestionNumber == '200900'
                ) {
                let value = factorItem?.boolean ? 10 : -5;
                // console.log(value, factorItem?.ad_QuestionNumber);
                getGColValue += value;
              }
              if (
                factorItem?.ad_QuestionNumber == '201000' || 
                factorItem?.ad_QuestionNumber == '202100' ||
                factorItem?.ad_QuestionNumber == '202200' ||
                factorItem?.ad_QuestionNumber == '202300'
                ) {
                let value = factorItem?.boolean ? 10 : 0;
                // console.log('201000 || 202100', value, factorItem?.ad_QuestionNumber);
                getGColValue += value;
              }
              if (
                factorItem?.ad_QuestionNumber == '201800' || 
                factorItem?.ad_QuestionNumber == '202700' || 
                factorItem?.ad_QuestionNumber == '500100' ||
                factorItem?.ad_QuestionNumber == '202800' 
                ) {
                let value = factorItem?.boolean ? 5 : 0;
                // console.log('201800 || 202700 || 500100', value, factorItem?.ad_QuestionNumber);
                getGColValue += value;
              } // Train-the-trainer
              if (
                factorItem?.ad_QuestionNumber == '201900' 
                ) {
                  
                let value = factorItem?.answerChoice == 'Train-the-trainer' ? 10 : -10;
                // console.log('201900', value, factorItem?.ad_QuestionNumber);
                getGColValue += value;
              }
              if (
                factorItem?.ad_QuestionNumber == '202400' ||
                factorItem?.ad_QuestionNumber == '202401'
                ) {
                let value = factorItem?.answerChoice == 'No internal resource' ? -10 :
                factorItem?.answerChoice == 'Staff less than 50% on project' ? 0 :
                factorItem?.answerChoice == 'Staff more than 50% on project' ? 5 :
                factorItem?.answerChoice == 'Staff fully allocated to project' ? 10 : 0;
                // console.log(value, factorItem?.ad_QuestionNumber);
                getGColValue += value;
                valueOf202400 = value;
              }
              if (
                factorItem?.ad_QuestionNumber == '500000' 
                ) {
                let value = factorItem?.wholeNumber;
                // console.log('500000', value, factorItem?.ad_QuestionNumber);
                getGColValue += value;
              }
              if (
                factorItem?.ad_QuestionNumber == '202600' ||
                factorItem?.ad_QuestionNumber == '302500' ||
                factorItem?.ad_QuestionNumber == '303200' ||
                factorItem?.ad_QuestionNumber == '303300' ||
                factorItem?.ad_QuestionNumber == '302000' ||
                factorItem?.ad_QuestionNumber == '302100'
                ) {
                let value = factorItem?.boolean ? -5 : 0;
                // console.log( value, factorItem?.ad_QuestionNumber);
                getGColValue += value;
              }

              if (
                factorItem?.ad_QuestionNumber == '200500'
                ) {
                let value = factorItem?.boolean ? 0 : 5;
                // console.log( value, factorItem?.ad_QuestionNumber);
                getGColValue += value;
              }

              if (factorItem?.ad_QuestionNumber == '303100') {
                let value = factorItem?.wholeNumber > 10 ? -5 : 0
                // console.log('100900 ', value);
                
                getGColValue += value;
              }
              // valueOf202400
              // if (factorItem?.ad_QuestionNumber == '202401') {
              //   getGColValue += valueOf202400;
              // }
            // }
          });
        
          await Promise.all(customizationLoop);
        }
          // if (getGColValue == 43) {
          //   getFcolValue = 0;
          // }
    
        // console.log('xxx ====> ', getGColValue);
        
        if (FactorsModel.length > 0) {
          if (getGColValue >= 70) {
            getFcolValue = 5/100;
          } else if (getGColValue >= 50 && getGColValue < 70) {
            getFcolValue = 10/100;
          } else if (getGColValue >= 30 && getGColValue < 50) {
            getFcolValue = 15/100;
          } else if (getGColValue < 30) {
            getFcolValue = 20/100;
          }
        } else {
          getFcolValue = 0
        }
          // if (getGColValue >= 70) {
          //   getFcolValue = 5/100;
          // } else if (getGColValue >= 50 && getGColValue < 70) {
          //   getFcolValue = 10/100;
          // } else if (getGColValue >= 30 && getGColValue < 50) {
          //   getFcolValue = 15/100;
          // } else if (getGColValue < 30) {
          //   getFcolValue = 20/100;
          // }

        returnObject.endUserTraining.resultValue = endUserTrainingValue;
        returnObject.endUserTraining.resultValueMS = endUserTrainingValue;
        returnObject.endUserTraining.resultValueMSC = endUserTrainingValue;

        returnObject.projectRisk.estimateAveRate = getFcolValue;
        
      }
    }
      return returnObject;
    } else {
      return returnObject;
    }
  } catch (error) {
    return returnObject;
  }
}

const generateReturnValue = (val1: number, hoursPerDay: number, condtion: boolean) => {
  if (!condtion) {
    return (val1)*hoursPerDay
  }
  return (val1)
}
