import { percentData } from "../../Constants/pickListData";

export const calculateProjectManagerEstimateAvgRateMilestone = async(inititlaData: any, subSections: any, type: string) => {
  const {parameterModel} = inititlaData;
  let romParameter = 'Days'

  const {
    responseAnalisisDesign,
    responseCustomisationDesign,
    responseCustomRequirementDesign,
    responseDocumentation,
    responseDesignReview,
    responseIntegration,
    responseDocumentLayout,
    responseReporting,
    responseDataMigration,
    responseCRP,
    responseTesting,
    responseTrainTheTrainer,
    responseUATEnvironmentPreparation,
    responseUATSupport,
    responseProdEnvironmentPreparation,
    responseSupportHandover,
    responsePostGoLive,
  } = subSections

  const returnObject = {
    resultValue: 0,
    resultValueMS: 0,
    resultValueMSC: 0,
    resultValueSub: 0,
    resultValueMSSub: 0,
    resultValueMSCSub: 0,
  }
  let mustCal = 0
  let mustShouldCal = 0;
  let mustShouldCouldCal = 0
  if (type == 'Analysis and Design') {
    mustCal = responseAnalisisDesign?.resultValue +
      responseCustomisationDesign?.customisation?.resultValue +
      responseCustomRequirementDesign?.customRequirement?.resultValue +
      responseDocumentation?.documentation?.resultValue +
      responseDesignReview?.designReview?.resultValue;
    
    mustShouldCal = responseAnalisisDesign?.resultValueMS +
      responseCustomisationDesign?.customisation?.resultValueMS +
      responseCustomRequirementDesign?.customRequirement?.resultValueMS +
      responseDocumentation?.documentation?.resultValueMS +
      responseDesignReview?.designReview?.resultValueMS;

    mustShouldCouldCal = responseAnalisisDesign?.resultValueMSC +
      responseCustomisationDesign?.customisation?.resultValueMSC +
      responseCustomRequirementDesign?.customRequirement?.resultValueMSC +
      responseDocumentation?.documentation?.resultValueMSC +
      responseDesignReview?.designReview?.resultValueMSC;
  } else if (type == 'BUILD') {
    mustCal = responseAnalisisDesign?.configuration?.resultValue +
      responseIntegration?.integration?.resultValue +
      responseCustomisationDesign?.customisationBuild?.resultValue +
      responseCustomRequirementDesign?.customRequirementBuild?.resultValue +
      responseDocumentLayout?.documentLayout?.resultValue +
      responseReporting?.reporting?.resultValue +
      responseDataMigration?.dataMigration?.resultValue +
      responseCRP?.crp?.resultValue +
      responseTesting?.testing?.resultValue;

    mustShouldCal = responseAnalisisDesign?.configuration?.resultValueMS +
      responseIntegration?.integration?.resultValueMS +
      responseCustomisationDesign?.customisationBuild?.resultValueMS +
      responseCustomRequirementDesign?.customRequirementBuild?.resultValueMS +
      responseDocumentLayout?.documentLayout?.resultValueMS +
      responseReporting?.reporting?.resultValueMS +
      responseDataMigration?.dataMigration?.resultValueMS +
      responseCRP?.crp?.resultValueMS +
      responseTesting?.testing?.resultValueMS;

    mustShouldCouldCal = responseAnalisisDesign?.configuration?.resultValueMSC +
      responseIntegration?.integration?.resultValueMSC +
      responseCustomisationDesign?.customisationBuild?.resultValueMSC +
      responseCustomRequirementDesign?.customRequirementBuild?.resultValueMSC +
      responseDocumentLayout?.documentLayout?.resultValueMSC +
      responseReporting?.reporting?.resultValueMSC +
      responseDataMigration?.dataMigration?.resultValueMSC +
      responseCRP?.crp?.resultValueMSC +
      responseTesting?.testing?.resultValueMSC;
  } else if (type == 'DEPLOY') {
    mustCal = responseTrainTheTrainer?.trainTheTrainer?.resultValue +
      responseUATEnvironmentPreparation?.uatEnvironmentPreparation?.resultValue +
      responseUATSupport?.uatSupport?.resultValue +
      responseProdEnvironmentPreparation?.prodEnvironmentPreparation?.resultValue +
      responseSupportHandover?.supportHandover?.resultValue;

    mustShouldCal = responseTrainTheTrainer?.trainTheTrainer?.resultValueMS +
      responseUATEnvironmentPreparation?.uatEnvironmentPreparation?.resultValueMS +
      responseUATSupport?.uatSupport?.resultValueMS +
      responseProdEnvironmentPreparation?.prodEnvironmentPreparation?.resultValueMS +
      responseSupportHandover?.supportHandover?.resultValueMS;

    mustShouldCouldCal = responseTrainTheTrainer?.trainTheTrainer?.resultValueMSC +
      responseUATEnvironmentPreparation?.uatEnvironmentPreparation?.resultValueMSC +
      responseUATSupport?.uatSupport?.resultValueMSC +
      responseProdEnvironmentPreparation?.prodEnvironmentPreparation?.resultValueMSC +
      responseSupportHandover?.supportHandover?.resultValueMSC;
  } else if (type == 'OPERATION') {
    mustCal = responseDocumentLayout?.endUserTraining?.resultValue +
      responsePostGoLive?.postGoLive?.resultValue;
    
    mustShouldCal = responseDocumentLayout?.endUserTraining?.resultValueMS +
      responsePostGoLive?.postGoLive?.resultValueMS;

    mustShouldCouldCal = responseDocumentLayout?.endUserTraining?.resultValueMSC +
      responsePostGoLive?.postGoLive?.resultValueMSC;
  }

  console.log('mmm ==> ', mustCal, mustShouldCal, mustShouldCal);
  const F4Parameter = parameterModel[0]?.hoursPerday * 5;
  const O37 = 0// to find this we need to complete Estimate Avg Rate Milestone table
  const H6 = 29// if days === c2 => O37/5 else (O37/8)/5
  const h8 = 1123.176 // need to gets it from api
  const g8 = 1217.546
  const f8 = 1406.438
  
  try {
    if (percentData?.[parameterModel[0]?.projectManagementType] === percentData?.[100000001]) {
      returnObject.resultValue = mustCal * (parameterModel[0].projectManagement /100)
      returnObject.resultValueMS = mustShouldCal * (parameterModel[0].projectManagement /100)
      returnObject.resultValueMSC = mustShouldCouldCal * (parameterModel[0].projectManagement /100)
    } else {
      //
      // not done yet
      if (percentData?.[parameterModel[0]?.solutionArchitectureType] === percentData?.[100000001]) {
        // solutionArchitecture
        returnObject.resultValue = (mustCal * (parameterModel[0]?.solutionArchitecture/100))/4;
        returnObject.resultValueMS = (mustShouldCal * (parameterModel[0]?.solutionArchitecture/100))/4;
        returnObject.resultValueMSC = (mustShouldCouldCal * (parameterModel[0]?.solutionArchitecture/100))/4;
      } else if (percentData?.[parameterModel[0]?.solutionArchitectureType] === percentData?.[100000002]) { // hours
        
        returnObject.resultValue = romParameter == "Hours" ? (parameterModel[0]?.solutionArchitecture)/4 : (parameterModel[0]?.solutionArchitecture/parameterModel[0]?.hoursPerday)/4 // if c2 === hours then get direct parameterModel[0]?.reporting
        returnObject.resultValueMS = romParameter == "Hours" ? (parameterModel[0]?.solutionArchitecture)/4 : (parameterModel[0]?.solutionArchitecture/parameterModel[0]?.hoursPerday)/4 // if c2 === hours then get direct parameterModel[0]?.reporting
        returnObject.resultValueMSC = (mustShouldCouldCal * (parameterModel[0]?.solutionArchitecture/100))/4;
      } else if (percentData?.[parameterModel[0]?.solutionArchitectureType] === percentData?.[100000000]) { // FTE
        // dont need yet
        // returnObject.resultValue = (parameterModel[0]?.solutionArchitecture * h8)/parameterModel[0]?.hoursPerday // if c2 === hours then get direct (parameterModel[0]?.reporting * h8)  // need to find H8
        // returnObject.resultValueMS = (parameterModel[0]?.solutionArchitecture * g8)/parameterModel[0]?.hoursPerday // if c2 === hours then get direct parameterModel[0]?.reporting * g8  // need to find G8
        // returnObject.resultValueMSC = (parameterModel[0]?.solutionArchitecture * f8)/parameterModel[0]?.hoursPerday // if c2 === hours then get direct parameterModel[0]?.reporting * f8  // need to find F8
      }
    }
    console.log('returnObject', returnObject);

    returnObject.resultValueSub = (mustCal || 0) + (returnObject.resultValue || 0);
    returnObject.resultValueMSSub = (mustShouldCal || 0) + (returnObject.resultValueMS || 0);
    returnObject.resultValueMSCSub = (mustShouldCouldCal || 0) + (returnObject.resultValueMSC || 0);
    return returnObject
  } catch (error) {
    return returnObject;
  }
}

const getSubSectionTotal = () => {

}