import { percentData } from "../../Constants/pickListData";


export const generateEstimateResourceValue = (
  inititlaData: any, 
  subCal: any, // M M/S M/S/C 
  mainCal: any,
  name: string,
  priority: string,
  condition: boolean
  ) => {
  try {
    
    const {ProjectTasktModel, resourceModelData, parameterModel} = inititlaData;
    const filteredValue: any = ProjectTasktModel?.length && ProjectTasktModel.find((item: any, index: number) => {
      return item?.projectTaskPartner_Name == name
    });
    if (filteredValue) {
      //
      const {
        projectTaskPartner_Resource, 
        projectTaskPartner_ResourceSecondary, 
        projectTaskPartner_ResourceSplit,
        projectTaskCustomer_Name,
        projectTaskCustomer_Resource,
        projectTaskCustomer_ResourceSecondary,
        projectTaskCustomer_ResourceSplit
      } = filteredValue;
      // projectTaskCustomer_Name
      const checkIsCustomer = projectTaskCustomer_Name ? true : false;
      const split = checkIsCustomer ? projectTaskCustomer_ResourceSplit : projectTaskPartner_ResourceSplit

      const findProjectTaskPartner_Resource = projectTaskPartner_Resource?.id && resourceModelData?.find((item: any, index: number) => checkIsCustomer ? item?.resourceId == projectTaskCustomer_Resource?.id : item?.resourceId == projectTaskPartner_Resource?.id);
      const findProjectTaskPartner_ResourceSecondary = projectTaskPartner_ResourceSecondary?.id && resourceModelData?.find((item: any, index: number) => checkIsCustomer ? item?.resourceId == projectTaskCustomer_ResourceSecondary?.id : item?.resourceId == projectTaskPartner_ResourceSecondary?.id)
      // hourlyRate
      

      const r1Mvalue = priority === 'Estimate Resource Milestone' ? subCal.M *  (split || 0)/100 : generateValue(split || 0, subCal.M || 0, findProjectTaskPartner_Resource?.hourlyRate || 0, parameterModel[0]?.hoursPerday || 0, condition);
      // condition ? 
      //   subCal.M * ((split || 0) / 100) * findProjectTaskPartner_Resource?.hourlyRate * parameterModel?.hoursPerday :
      //   subCal.M * ((split || 0) / 100) * findProjectTaskPartner_Resource?.hourlyRate

      const r2Mvalue = priority === 'Estimate Resource Milestone' ? subCal.M *  (100 - split || 0)/100 : generateValue((100 - split) || 0, subCal.M || 0, findProjectTaskPartner_ResourceSecondary?.hourlyRate || 0, parameterModel[0]?.hoursPerday || 0, condition)
      // condition ? 
      //   subCal.M * ((100 - (split || 0)) / 100) * findProjectTaskPartner_ResourceSecondary?.hourlyRate * parameterModel?.hoursPerday :
      //   subCal.M * ((100 - (split || 0)) / 100) * findProjectTaskPartner_ResourceSecondary?.hourlyRate

      const r1MSvalue = priority === 'Estimate Resource Milestone' ? (subCal['M/S'] || 0) *  (split || 0)/100 : generateValue((split) || 0, subCal['M/S'] || 0, findProjectTaskPartner_Resource?.hourlyRate || 0, parameterModel[0]?.hoursPerday || 0, condition)
      // condition ? 
      //   subCal['M/S'] * ((split || 0) / 100) * findProjectTaskPartner_Resource?.hourlyRate * parameterModel?.hoursPerday :
      //   subCal['M/S']* ((split || 0) / 100) * findProjectTaskPartner_Resource?.hourlyRate

      const r2MSvalue = priority === 'Estimate Resource Milestone' ? (subCal['M/S'] || 0) *  (100 - split || 0)/100 : generateValue((100 - split) || 0, subCal['M/S'] || 0, findProjectTaskPartner_ResourceSecondary?.hourlyRate || 0, parameterModel[0]?.hoursPerday || 0, condition)
      // condition ? 
      //   subCal['M/S'] * ((100 - (split || 0)) / 100) * findProjectTaskPartner_ResourceSecondary?.hourlyRate * parameterModel?.hoursPerday :
      //   subCal['M/S'] * ((100 - (split || 0)) / 100) * findProjectTaskPartner_ResourceSecondary?.hourlyRate

      const r1MSCvalue = priority === 'Estimate Resource Milestone' ? (subCal['M/S/C'] || 0) *  (split || 0)/100 : generateValue((split) || 0, subCal['M/S/C'] || 0, findProjectTaskPartner_Resource?.hourlyRate || 0, parameterModel[0]?.hoursPerday || 0, condition)
      // condition ? 
      //   subCal['M/S/C'] * ((split || 0) / 100) * findProjectTaskPartner_Resource?.hourlyRate * parameterModel?.hoursPerday :
      //   subCal['M/S/C'] * ((split || 0) / 100) * findProjectTaskPartner_Resource?.hourlyRate

      const r2MSCvalue = priority === 'Estimate Resource Milestone' ? (subCal['M/S/C'] || 0) *  (100 - split || 0)/100 : generateValue((100 - split) || 0, subCal['M/S/C'] || 0, findProjectTaskPartner_ResourceSecondary?.hourlyRate || 0, parameterModel[0]?.hoursPerday || 0, condition)
      // condition ? 
      //   subCal['M/S/C'] * ((100 - (split || 0)) / 100) * findProjectTaskPartner_ResourceSecondary?.hourlyRate * parameterModel?.hoursPerday :
      //   subCal['M/S/C'] * ((100 - (split || 0)) / 100) * findProjectTaskPartner_ResourceSecondary?.hourlyRate
      const numberOfResources = 2;

      return {
        resultValue1:  r1Mvalue,
        resultValue2: r2Mvalue,
        "M_Resource_Total":  r1Mvalue + r2Mvalue,
        resultValueMS1: r1MSvalue,
        resultValueMS2: r2MSvalue,
        "M/S_Resource_Total": r1MSvalue + r2MSvalue,
        resultValueMSC1: r1MSCvalue,
        resultValueMSC2:  r2MSCvalue,
        "M/S/C_Resource_Total": r1MSCvalue + r2MSCvalue,
        numberOfResources,
      }
    } else {
      throw new Error();
    }
  } catch (error) {
    return {
      resultValue1: 0,
      resultValue2: 0,
      resultValueMS1: 0,
      resultValueMS2: 0,
      resultValueMSC1: 0,
      resultValueMSC2: 0,
      numberOfResources: 2,
    }
  }
}

const generateValue = (split: number, value1: number, value2:  number, hourlyRate: number, condition: boolean) => {
  if (condition) {
    return value1 * (split/100) * value2 * hourlyRate
  }
  return value1 * (split/100) * value2
}

export const calculateSubTotal = async(

    resultValuePostGoLiveEstimateResource: any, 
    resultValueEndUserTrainingEstimateResource: any,
    resultValueSupportHandoverEstimateResource: any,
    resultValueProdEnvironmentPreparationEstimateResource: any,
    resultValueUATSupportEstimateResource: any,
    resultValueUATEnvironmentPreparationEstimateResource: any,
    resultValueTrainTheTrainerEstimateResource: any,
    resultValueTestingEstimateResource: any,
    resultValueCRPEstimateResource: any,
    resultValueDataMigrationEstimateResource: any,
    resultValueReportingEstimateResource: any,
    resultValueDocumentLayoutEstimateResource: any,
    resultValueCustomRequirementBuildEstimateResource: any,
    resultValueCustomisationBuildEstimateResource: any,
    resultValueIntegrationEstimateResource: any,
    resultValueConfigurationEstimateResource: any,
    resultValueDesignReviewEstimateResource: any,
    resultValueDocumentationEstimateResource: any,
    resultValueCustomRequirementDesignEstimateResource: any,
    resultValueCustomisationDesignEstimateResource: any,
    resultValueAnalisisDesignEstimateResource: any,
  
) => {
  let responseObject: any = {}

  try {
    responseObject['M'] = (resultValuePostGoLiveEstimateResource?.resultValue || 0) +
      (resultValueEndUserTrainingEstimateResource?.resultValue || 0) +
      (resultValueSupportHandoverEstimateResource?.resultValue || 0) +
      (resultValueProdEnvironmentPreparationEstimateResource?.resultValue || 0) +
      (resultValueUATSupportEstimateResource?.resultValue || 0) +
      (resultValueUATEnvironmentPreparationEstimateResource?.resultValue || 0) +
      (resultValueTrainTheTrainerEstimateResource?.resultValue || 0) +
      (resultValueTestingEstimateResource?.resultValue || 0) +
      (resultValueCRPEstimateResource?.resultValue || 0) +
      (resultValueDataMigrationEstimateResource?.resultValue || 0) +
      (resultValueReportingEstimateResource?.resultValue || 0) +
      (resultValueDocumentLayoutEstimateResource?.resultValue || 0) +
      (resultValueCustomRequirementBuildEstimateResource?.resultValue || 0) +
      (resultValueCustomisationBuildEstimateResource?.resultValue || 0) +
      (resultValueIntegrationEstimateResource?.resultValue || 0) +
      (resultValueConfigurationEstimateResource?.resultValue || 0) + 
      (resultValueDesignReviewEstimateResource?.resultValue || 0) + 
      (resultValueDocumentationEstimateResource?.resultValue || 0) +
      (resultValueCustomRequirementDesignEstimateResource?.resultValue || 0) +
      (resultValueCustomisationDesignEstimateResource?.resultValue || 0) +
      (resultValueAnalisisDesignEstimateResource?.resultValue || 0)

    responseObject['M/S'] = (resultValuePostGoLiveEstimateResource?.resultValueMS || 0) +
      (resultValueEndUserTrainingEstimateResource?.resultValueMS || 0) +
      (resultValueSupportHandoverEstimateResource?.resultValueMS || 0) +
      (resultValueProdEnvironmentPreparationEstimateResource?.resultValueMS || 0) +
      (resultValueUATSupportEstimateResource?.resultValueMS || 0) +
      (resultValueUATEnvironmentPreparationEstimateResource?.resultValueMS || 0) +
      (resultValueTrainTheTrainerEstimateResource?.resultValueMS || 0) +
      (resultValueTestingEstimateResource?.resultValueMS || 0) +
      (resultValueCRPEstimateResource?.resultValueMS || 0) +
      (resultValueDataMigrationEstimateResource?.resultValueMS || 0) +
      (resultValueReportingEstimateResource?.resultValueMS || 0) +
      (resultValueDocumentLayoutEstimateResource?.resultValueMS || 0) +
      (resultValueCustomRequirementBuildEstimateResource?.resultValueMS || 0) +
      (resultValueCustomisationBuildEstimateResource?.resultValueMS || 0) +
      (resultValueIntegrationEstimateResource?.resultValueMS || 0) +
      (resultValueConfigurationEstimateResource?.resultValueMS || 0) + 
      (resultValueDesignReviewEstimateResource?.resultValueMS || 0) + 
      (resultValueDocumentationEstimateResource?.resultValueMS || 0) +
      (resultValueCustomRequirementDesignEstimateResource?.resultValueMS || 0) +
      (resultValueCustomisationDesignEstimateResource?.resultValueMS || 0) +
      (resultValueAnalisisDesignEstimateResource?.resultValueMS || 0)

    responseObject['M/S/C'] = (resultValuePostGoLiveEstimateResource?.resultValueMSC || 0) +
      (resultValueEndUserTrainingEstimateResource?.resultValueMSC || 0) +
      (resultValueSupportHandoverEstimateResource?.resultValueMSC || 0) +
      (resultValueProdEnvironmentPreparationEstimateResource?.resultValueMSC || 0) +
      (resultValueUATSupportEstimateResource?.resultValueMSC || 0) +
      (resultValueUATEnvironmentPreparationEstimateResource?.resultValueMSC || 0) +
      (resultValueTrainTheTrainerEstimateResource?.resultValueMSC || 0) +
      (resultValueTestingEstimateResource?.resultValueMSC || 0) +
      (resultValueCRPEstimateResource?.resultValueMSC || 0) +
      (resultValueDataMigrationEstimateResource?.resultValueMSC || 0) +
      (resultValueReportingEstimateResource?.resultValueMSC || 0) +
      (resultValueDocumentLayoutEstimateResource?.resultValueMSC || 0) +
      (resultValueCustomRequirementBuildEstimateResource?.resultValueMSC || 0) +
      (resultValueCustomisationBuildEstimateResource?.resultValueMSC || 0) +
      (resultValueIntegrationEstimateResource?.resultValueMSC || 0) +
      (resultValueConfigurationEstimateResource?.resultValueMSC || 0) + 
      (resultValueDesignReviewEstimateResource?.resultValueMSC || 0) + 
      (resultValueDocumentationEstimateResource?.resultValueMSC || 0) +
      (resultValueCustomRequirementDesignEstimateResource?.resultValueMSC || 0) +
      (resultValueCustomisationDesignEstimateResource?.resultValueMSC || 0) +
      (resultValueAnalisisDesignEstimateResource?.resultValueMSC || 0)
    
    return responseObject
  } catch (error) {
    return responseObject
  }
}


export const calculateProjectManagerEstimateResource = async(inititlaData: any, analisisDesignPre: {responseCustomRequirementDesign: any, responseAnalisisDesign: any, responseCustomisationDesign: any, responseIntegration: any}, totalOfSub: any) => {
  const {parameterModel} = inititlaData;
  let romParameter = 'Days'

  const returnObject = {
    resultValue: 0,
    resultValueMS: 0,
    resultValueMSC: 0,
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
  const F4Parameter = parameterModel[0]?.hoursPerday * 5;
  const O37 = 0// to find this we need to complete Estimate Avg Rate Milestone table
  const H6 = 29// if days === c2 => O37/5 else (O37/8)/5
  const h8 = 1123.176 // need to gets it from api
  const g8 = 1217.546
  const f8 = 1406.438
  
  try {
    if (percentData?.[parameterModel[0]?.projectManagementType] === percentData?.[100000001]) {
      // "projectManagement": 20.0000000000,
      //       "projectManagementType": 100000001,
      //(totalOfSub?.['M_Resource1] + totalOfSub?.['M_Resource2]) * (parameterModel[0].projectManagement /100)
      
      returnObject.resultValue = (totalOfSub?.['M']) * (parameterModel[0].projectManagement /100)
      returnObject.resultValueMS = (totalOfSub?.['M/S']) * (parameterModel[0].projectManagement /100)
      returnObject.resultValueMSC = (totalOfSub?.['M/S/C']) * (parameterModel[0].projectManagement /100)
    } else {
      //
      // not done yet
      if (percentData?.[parameterModel[0]?.solutionArchitectureType] === percentData?.[100000001]) {
        // solutionArchitecture
        returnObject.resultValue = mustCal * (parameterModel[0]?.solutionArchitecture/100);
        returnObject.resultValueMS = mustShouldCal * (parameterModel[0]?.solutionArchitecture/100);
        returnObject.resultValueMSC = mustShouldCouldCal * (parameterModel[0]?.solutionArchitecture/100);
      } else if (percentData?.[parameterModel[0]?.solutionArchitectureType] === percentData?.[100000002]) { // hours
        
        returnObject.resultValue = romParameter == "Hours" ? parameterModel[0]?.solutionArchitecture : parameterModel[0]?.solutionArchitecture/parameterModel[0]?.hoursPerday // if c2 === hours then get direct parameterModel[0]?.reporting
        returnObject.resultValueMS = romParameter == "Hours" ? parameterModel[0]?.solutionArchitecture : parameterModel[0]?.solutionArchitecture/parameterModel[0]?.hoursPerday // if c2 === hours then get direct parameterModel[0]?.reporting
        returnObject.resultValueMSC = mustShouldCouldCal * (parameterModel[0]?.solutionArchitecture/100);
      } else if (percentData?.[parameterModel[0]?.solutionArchitectureType] === percentData?.[100000000]) { // FTE
        // dont need yet
        // returnObject.resultValue = (parameterModel[0]?.solutionArchitecture * h8)/parameterModel[0]?.hoursPerday // if c2 === hours then get direct (parameterModel[0]?.reporting * h8)  // need to find H8
        // returnObject.resultValueMS = (parameterModel[0]?.solutionArchitecture * g8)/parameterModel[0]?.hoursPerday // if c2 === hours then get direct parameterModel[0]?.reporting * g8  // need to find G8
        // returnObject.resultValueMSC = (parameterModel[0]?.solutionArchitecture * f8)/parameterModel[0]?.hoursPerday // if c2 === hours then get direct parameterModel[0]?.reporting * f8  // need to find F8
      }
    }
    
    return returnObject
  } catch (error) {
    return returnObject;
  }
}