import { fitGapData, moscowsData } from "../../Constants/pickListData";

export const generateDocumentLayoutMValue = async(inititlaData: any, condition: boolean) => {
  // need to check with 'Estimate - Resource Milestone'!$C$1
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
    const {BaseData, resourceModelData, ModuleData, parameterModel, CustomisationModels, FactorsModel} = inititlaData
    if (inititlaData) {
      

      const customizationLoop = await FactorsModel && FactorsModel.length && FactorsModel.map(async(factorItem: any, factorIndex: number) => {
        if (factorItem?.ad_QuestionNumber == '500000' || factorItem?.ad_QuestionNumber == '500100') {
          layoutValue += factorItem?.wholeNumber
        }
        if (factorItem?.ad_QuestionNumber == '201900') {
          if (factorItem?.answerChoice == 'End user training') {
            if (condition) {
              // d5 = parameterModel[0].hoursPerday
              // d8 = parameterModel[0]?.totalLicenceCount
              // d21 = endUserTrainingUsers
              // d20 = endUserTraining
              // (para d8/ parad21) * (para d20/ para d5)
              endUserTrainingValue += 
                ((parameterModel[0]?.totalLicenceCount || 0)/ (parameterModel[0]?.endUserTrainingUsers || 0)) *
                 ((parameterModel[0]?.endUserTraining || 0)/(parameterModel[0].hoursPerday || 0))
            } else {
              // (para d8/ parad21) * (para d20)
              endUserTrainingValue += ((parameterModel[0]?.totalLicenceCount || 0)/ (parameterModel[0]?.endUserTrainingUsers || 0)) *
              ((parameterModel[0]?.endUserTraining || 0))
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
      
      
      console.log("generateCustomisationDesignMValue true ==> ", CustomisationModels.length);
      if (parameterModel?.length) {
        returnObject.documentLayout.resultValue = generateReturnValue(
          layoutValue,
          parameterModel[0].hoursPerday,
          condition
        )
        
        returnObject.documentLayout.resultValueMS = generateReturnValue(
          layoutValue,
          parameterModel[0].hoursPerday,
          condition
        )

        returnObject.documentLayout.resultValueMSC =  generateReturnValue(
          layoutValue,
          parameterModel[0].hoursPerday,
          condition
        )
        returnObject.endUserTraining.resultValue = endUserTrainingValue;
        returnObject.endUserTraining.resultValueMS = endUserTrainingValue;
        returnObject.endUserTraining.resultValueMSC = endUserTrainingValue;

        returnObject.projectRisk.estimateAveRate = getFcolValue;
        
      }
        console.log("resultValue => ", resultValue, endUserTrainingValue);
      await Promise.all([customizationLoop])
      return returnObject;
    } else {
      console.log("generateAnalysisDesignMValue false ==> ");
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

