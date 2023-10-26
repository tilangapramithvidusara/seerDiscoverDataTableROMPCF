import { fitGapData, moscowsData } from "../../Constants/pickListData";
import { generateCRPMValue } from "./crp.utils";
import { generateCustomRequirementMValue } from "./custom.requirements.utils";
import { generateCustomisationDesignMValue } from "./customization.design.utils";
import { generateDataMigrationMValue } from "./data.migration.utils";
import { generateDesignReviewMValue } from "./design.review.utils";
import { generateDocumentLayoutMValue } from "./document.layout";
import { generateDocumentationMValue } from "./documentation.utils";
import { generateIntegrationMValue } from "./integration.utils";
import { generatePostGoLiveMValue } from "./post.go.live.utils";
import { generateProdEnvironmentPreparationMValue } from "./prod.environement.preparation.utils";
import { generateReportingMValue } from "./reporting.utils";
import { generateSupportHandoverMValue } from "./supprot.handover.utils";
import { generateTestingMValue } from "./testing.utils";
import { generateTrainTheTrainerMValue } from "./train.the.trainer.utils";
import { generateUATEnvironmentPreparationMValue } from "./uat.environment.preparation.utils";
import { generateUATSupportMValue } from "./uat.support.utils";

export const generateIColoumnValue = async(inititlaData: any, title: string) => {
  const romParameter = "Days"
  const condition = romParameter === "Days";
  // ################################ESTIMATE AVERAGE RATE################################
  // ANALYSIS AND DESIGN
  let resultValue = 0;
  let resultValueMS = 0;
  let resultValueMSC = 0;

  let resultValueAnalisisDesign = 0;
  let resultValueMSAnalisisDesign = 0;
  let resultValueMSCAnalisisDesign = 0;

  let resultValueCustomisationDesign = 0;
  let resultValueMSCustomisationDesign = 0;
  let resultValueMSCCustomisationDesign = 0;

  let resultValueCustomRequirementDesign = 0;
  let resultValueMSCustomRequirementDesign = 0;
  let resultValueMSCCustomRequirementDesign = 0;

  let resultValueDocumentation = 0;
  let resultValueMSDocumentation = 0;
  let resultValueMSCDocumentation = 0;

  let resultValueDesignReview = 0;
  let resultValueMSDesignReview = 0;
  let resultValueMSCDesignReview = 0;

  // BUILD
  // let resultValue
  let resultValueConfiguration = 0;
  let resultValueMSConfiguration = 0;
  let resultValueMSCConfiguration = 0;

  let resultValueIntegration = 0;
  let resultValueMSIntegration = 0;
  let resultValueMSCIntegration = 0;

  let resultValueCustomisationBuild = 0;
  let resultValueMSCustomisationBuild = 0;
  let resultValueMSCCustomisationBuild = 0;

  let resultValueCustomRequirementBuild = 0;
  let resultValueMSCustomRequirementBuild = 0;
  let resultValueMSCCustomRequirementBuild = 0;

  let resultValueDocumentLayout = 0;
  let resultValueMSDocumentLayout = 0;
  let resultValueMSCDocumentLayout = 0;

  let resultValueReporting = 0;
  let resultValueMSReporting = 0;
  let resultValueMSCReporting = 0;

  let resultValueDataMigration = 0;
  let resultValueMSDataMigration = 0;
  let resultValueMSCDataMigration = 0;

  let resultValueCRP = 0;
  let resultValueMSCRP = 0;
  let resultValueMSCCRP = 0

  let resultValueTesting = 0;
  let resultValueMSTesting = 0;
  let resultValueMSCTesting = 0

  let resultValueTrainTheTrainer = 0;
  let resultValueMSTrainTheTrainer = 0;
  let resultValueMSCTrainTheTrainer = 0;

  let resultValueUATEnvironmentPreparation = 0;
  let resultValueMSUATEnvironmentPreparation = 0;
  let resultValueMSCUATEnvironmentPreparation = 0

  let resultValueUATSupport = 0;
  let resultValueMSUATSupport = 0;
  let resultValueMSCUATSupport = 0

  let resultValueProdEnvironmentPreparation = 0;
  let resultValueMSProdEnvironmentPreparation = 0;
  let resultValueMSCProdEnvironmentPreparation = 0

  let resultValueSupportHandover = 0;
  let resultValueMSSupportHandover = 0;
  let resultValueMSCSupportHandover = 0;

  let resultValueEndUserTraining = 0;
  let resultValueMSEndUserTraining = 0;
  let resultValueMSCEndUserTraining = 0;
  
  let resultValuePostGoLive = 0;
  let resultValueMSPostGoLive = 0;
  let resultValueMSCPostGoLive = 0

  let fColmnValueEstimateAveRate = 0;


  // ################################ESTIMATE RESOURCE################################
  let resultValueAnalisisDesignEstimateResource = {};
  let resultValueMSAnalisisDesignEstimateResource = {};
  let resultValueMSCAnalisisDesignEstimateResource = {};

  let resultValueCustomisationDesignEstimateResource = {};
  let resultValueMSCustomisationDesignEstimateResource = {};
  let resultValueMSCCustomisationDesignEstimateResource = {};

  let resultValueCustomRequirementDesignEstimateResource = {};
  let resultValueMSCustomRequirementDesignEstimateResource = {};
  let resultValueMSCCustomRequirementDesignEstimateResource = {};

  let resultValueDocumentationEstimateResource = {};
  let resultValueMSDocumentationEstimateResource = {};
  let resultValueMSCDocumentationEstimateResource = {};

  let resultValueDesignReviewEstimateResource = {};
  let resultValueMSDesignReviewEstimateResource = {};
  let resultValueMSCDesignReviewEstimateResource = {};

  // BUILD
  // let resultValue
  let resultValueConfigurationEstimateResource = {};
  let resultValueMSConfigurationEstimateResource = {};
  let resultValueMSCConfigurationEstimateResource = {};

  let resultValueIntegrationEstimateResource = {};
  let resultValueMSIntegrationEstimateResource = {};
  let resultValueMSCIntegrationEstimateResource = {};

  let resultValueCustomisationBuildEstimateResource = {};
  let resultValueMSCustomisationBuildEstimateResource = {};
  let resultValueMSCCustomisationBuildEstimateResource = {};

  let resultValueCustomRequirementBuildEstimateResource = {};
  let resultValueMSCustomRequirementBuildEstimateResource = {};
  let resultValueMSCCustomRequirementBuildEstimateResource = {};

  let resultValueDocumentLayoutEstimateResource = {};
  let resultValueMSDocumentLayoutEstimateResource = {};
  let resultValueMSCDocumentLayoutEstimateResource = {};

  let resultValueReportingEstimateResource = {};
  let resultValueMSReportingEstimateResource = {};
  let resultValueMSCReportingEstimateResource = {};

  let resultValueDataMigrationEstimateResource = {};
  let resultValueMSDataMigrationEstimateResource = {};
  let resultValueMSCDataMigrationEstimateResource = {};

  let resultValueCRPEstimateResource = {};
  let resultValueMSCRPEstimateResource = {};
  let resultValueMSCCRPEstimateResource = {}

  let resultValueTestingEstimateResource = {};
  let resultValueMSTestingEstimateResource = {};
  let resultValueMSCTestingEstimateResource = {}

  let resultValueTrainTheTrainerEstimateResource = {};
  let resultValueMSTrainTheTrainerEstimateResource = {};
  let resultValueMSCTrainTheTrainerEstimateResource = {};

  let resultValueUATEnvironmentPreparationEstimateResource = {};
  let resultValueMSUATEnvironmentPreparationEstimateResource = {};
  let resultValueMSCUATEnvironmentPreparationEstimateResource = {}

  let resultValueUATSupportEstimateResource = {};
  let resultValueMSUATSupportEstimateResource = {};
  let resultValueMSCUATSupportEstimateResource = {}

  let resultValueProdEnvironmentPreparationEstimateResource = {};
  let resultValueMSProdEnvironmentPreparationEstimateResource = {};
  let resultValueMSCProdEnvironmentPreparationEstimateResource = {}

  let resultValueSupportHandoverEstimateResource = {};
  let resultValueMSSupportHandoverEstimateResource = {};
  let resultValueMSCSupportHandoverEstimateResource = {};

  let resultValueEndUserTrainingEstimateResource = {};
  let resultValueMSEndUserTrainingEstimateResource = {};
  let resultValueMSCEndUserTrainingEstimateResource = {};
  
  let resultValuePostGoLiveEstimateResource = {};
  let resultValueMSPostGoLiveEstimateResource = {};
  let resultValueMSCPostGoLiveEstimateResource = {}
  

  try {
    const responseAnalisisDesign = await generateAnalysisDesignMValue(inititlaData, condition);
    const responseCustomisationDesign = await generateCustomisationDesignMValue(inititlaData, condition)
    const responseCustomRequirementDesign = await generateCustomRequirementMValue(inititlaData, condition);

    const responseDocumentation = await generateDocumentationMValue(inititlaData, {responseAnalisisDesign, responseCustomisationDesign, responseCustomRequirementDesign}, condition)
    const responseDesignReview = await generateDesignReviewMValue(inititlaData, {responseAnalisisDesign, responseCustomisationDesign, responseCustomRequirementDesign, responseDocumentation}, condition);

    const responseIntegration = await generateIntegrationMValue(inititlaData, condition);
    const responseDocumentLayout = await generateDocumentLayoutMValue(inititlaData, condition);
    const responseReporting = await generateReportingMValue(inititlaData, {responseAnalisisDesign, responseCustomisationDesign, responseCustomRequirementDesign, responseIntegration}, condition)
    const responseDataMigration = await generateDataMigrationMValue(inititlaData, {responseAnalisisDesign, responseCustomisationDesign, responseCustomRequirementDesign, responseIntegration}, condition);
    const responseCRP = await generateCRPMValue(inititlaData, {responseAnalisisDesign, responseCustomisationDesign, responseCustomRequirementDesign, responseIntegration}, condition);
    const responseTesting = await generateTestingMValue(inititlaData, {responseAnalisisDesign, responseCustomisationDesign, responseCustomRequirementDesign, responseIntegration}, condition);
    console.log("response ====> ", responseAnalisisDesign, responseCustomisationDesign);

    // In "train the trainer" has to 0 when "End user train" has value --- Keith said it hold for now
    const responseTrainTheTrainer = await generateTrainTheTrainerMValue(inititlaData, {responseAnalisisDesign}, condition);
// UAT ENV MISSING
    const responseUATEnvironmentPreparation = await generateUATEnvironmentPreparationMValue(inititlaData, {responseAnalisisDesign, responseCustomisationDesign, responseCustomRequirementDesign, responseIntegration}, condition);
    const responseUATSupport = await generateUATSupportMValue(inititlaData, {responseAnalisisDesign, responseCustomisationDesign, responseCustomRequirementDesign, responseIntegration}, condition)
    const responseProdEnvironmentPreparation = await generateProdEnvironmentPreparationMValue(inititlaData, {responseAnalisisDesign, responseCustomisationDesign, responseCustomRequirementDesign, responseIntegration}, condition)
    const responseSupportHandover = await generateSupportHandoverMValue(inititlaData, {responseAnalisisDesign, responseCustomisationDesign, responseCustomRequirementDesign, responseIntegration}, condition)
    const responsePostGoLive = await generatePostGoLiveMValue(inititlaData, {responseAnalisisDesign, responseCustomisationDesign, responseCustomRequirementDesign, responseIntegration}, condition);

    const {parameterModel} = inititlaData;
    if (parameterModel?.length) {
      // ################################ESTIMATE AVERAGE RATE################################
      const { hoursPerday, hourlyRate } = parameterModel[0];
      resultValueAnalisisDesign = checkConditionAndGenerateValue(responseAnalisisDesign?.resultValue, hourlyRate?.value, hoursPerday, condition)
      resultValueMSAnalisisDesign = checkConditionAndGenerateValue(responseAnalisisDesign?.resultValueMS, hourlyRate?.value, hoursPerday, condition)
      resultValueMSCAnalisisDesign = checkConditionAndGenerateValue(responseAnalisisDesign?.resultValueMSC, hourlyRate?.value, hoursPerday, condition)

      resultValueCustomisationDesign = checkConditionAndGenerateValue(responseCustomisationDesign?.customisation?.resultValue, hourlyRate?.value, hoursPerday, condition);
      resultValueMSCustomisationDesign = checkConditionAndGenerateValue(responseCustomisationDesign?.customisation?.resultValueMS, hourlyRate?.value, hoursPerday, condition);
      resultValueMSCCustomisationDesign = checkConditionAndGenerateValue(responseCustomisationDesign?.customisation?.resultValueMSC, hourlyRate?.value, hoursPerday, condition);

      resultValueCustomRequirementDesign = checkConditionAndGenerateValue(responseCustomRequirementDesign?.customRequirement?.resultValue, hourlyRate?.value, hoursPerday, condition);
      resultValueMSCustomRequirementDesign = checkConditionAndGenerateValue(responseCustomRequirementDesign?.customRequirement?.resultValueMS, hourlyRate?.value, hoursPerday, condition);
      resultValueMSCCustomRequirementDesign = checkConditionAndGenerateValue(responseCustomRequirementDesign?.customRequirement?.resultValueMSC, hourlyRate?.value, hoursPerday, condition);

      resultValueDocumentation = checkConditionAndGenerateValue(responseDocumentation?.documentation?.resultValue, hourlyRate?.value, hoursPerday, condition);
      resultValueMSDocumentation = checkConditionAndGenerateValue(responseDocumentation?.documentation?.resultValueMS, hourlyRate?.value, hoursPerday, condition);
      resultValueMSCDocumentation = checkConditionAndGenerateValue(responseDocumentation?.documentation?.resultValueMSC, hourlyRate?.value, hoursPerday, condition);

      resultValueDesignReview = checkConditionAndGenerateValue(responseDesignReview?.designReview?.resultValue, hourlyRate?.value, hoursPerday, condition);
      resultValueMSDesignReview = checkConditionAndGenerateValue(responseDesignReview?.designReview?.resultValueMS, hourlyRate?.value, hoursPerday, condition);
      resultValueMSCDesignReview = checkConditionAndGenerateValue(responseDesignReview?.designReview?.resultValueMSC, hourlyRate?.value, hoursPerday, condition);

      resultValueConfiguration = checkConditionAndGenerateValue(responseAnalisisDesign?.configuration?.resultValue, hourlyRate?.value, hoursPerday, condition)
      resultValueMSConfiguration = checkConditionAndGenerateValue(responseAnalisisDesign?.configuration?.resultValueMS, hourlyRate?.value, hoursPerday, condition)
      resultValueMSCConfiguration = checkConditionAndGenerateValue(responseAnalisisDesign?.configuration?.resultValueMSC, hourlyRate?.value, hoursPerday, condition)

      resultValueIntegration = checkConditionAndGenerateValue(responseIntegration?.integration?.resultValue, hourlyRate?.value, hoursPerday, condition)
      resultValueMSIntegration = checkConditionAndGenerateValue(responseIntegration?.integration?.resultValueMS, hourlyRate?.value, hoursPerday, condition)
      resultValueMSCIntegration = checkConditionAndGenerateValue(responseIntegration?.integration?.resultValueMSC, hourlyRate?.value, hoursPerday, condition)

      // integration pending

      resultValueCustomisationBuild = checkConditionAndGenerateValue(responseCustomisationDesign?.customisationBuild?.resultValue, hourlyRate?.value, hoursPerday, condition);
      resultValueMSCustomisationBuild = checkConditionAndGenerateValue(responseCustomisationDesign?.customisationBuild?.resultValueMS, hourlyRate?.value, hoursPerday, condition);
      resultValueMSCCustomisationBuild = checkConditionAndGenerateValue(responseCustomisationDesign?.customisationBuild?.resultValueMSC, hourlyRate?.value, hoursPerday, condition);

      resultValueCustomRequirementBuild = checkConditionAndGenerateValue(responseCustomRequirementDesign?.customRequirementBuild?.resultValue, hourlyRate?.value, hoursPerday, condition);
      resultValueMSCustomRequirementBuild = checkConditionAndGenerateValue(responseCustomRequirementDesign?.customRequirementBuild?.resultValueMS, hourlyRate?.value, hoursPerday, condition);
      resultValueMSCCustomRequirementBuild = checkConditionAndGenerateValue(responseCustomRequirementDesign?.customRequirementBuild?.resultValueMSC, hourlyRate?.value, hoursPerday, condition);

      resultValueDocumentLayout = checkConditionAndGenerateValue(responseDocumentLayout?.documentLayout?.resultValue, hourlyRate?.value, hoursPerday, condition);
      resultValueMSDocumentLayout = checkConditionAndGenerateValue(responseDocumentLayout?.documentLayout?.resultValueMS, hourlyRate?.value, hoursPerday, condition);
      resultValueMSCDocumentLayout = checkConditionAndGenerateValue(responseDocumentLayout?.documentLayout?.resultValueMSC, hourlyRate?.value, hoursPerday, condition);

      resultValueReporting = checkConditionAndGenerateValue(responseReporting?.reporting?.resultValue, hourlyRate?.value, hoursPerday, condition);
      resultValueMSReporting = checkConditionAndGenerateValue(responseReporting?.reporting?.resultValueMS, hourlyRate?.value, hoursPerday, condition);
      resultValueMSCReporting = checkConditionAndGenerateValue(responseReporting?.reporting?.resultValueMSC, hourlyRate?.value, hoursPerday, condition);

      resultValueDataMigration = checkConditionAndGenerateValue(responseDataMigration?.dataMigration?.resultValue, hourlyRate?.value, hoursPerday, condition);
      resultValueMSDataMigration = checkConditionAndGenerateValue(responseDataMigration?.dataMigration?.resultValueMS, hourlyRate?.value, hoursPerday, condition);
      resultValueMSCDataMigration = checkConditionAndGenerateValue(responseDataMigration?.dataMigration?.resultValueMSC, hourlyRate?.value, hoursPerday, condition);

      resultValueCRP = checkConditionAndGenerateValue(responseCRP?.crp?.resultValue, hourlyRate?.value, hoursPerday, condition);
      resultValueMSCRP = checkConditionAndGenerateValue(responseCRP?.crp?.resultValueMS, hourlyRate?.value, hoursPerday, condition);
      resultValueMSCCRP = checkConditionAndGenerateValue(responseCRP?.crp?.resultValueMSC, hourlyRate?.value, hoursPerday, condition);

      resultValueTesting = checkConditionAndGenerateValue(responseTesting?.testing?.resultValue, hourlyRate?.value, hoursPerday, condition);
      resultValueMSTesting = checkConditionAndGenerateValue(responseTesting?.testing?.resultValueMS, hourlyRate?.value, hoursPerday, condition);
      resultValueMSCTesting = checkConditionAndGenerateValue(responseTesting?.testing?.resultValueMSC, hourlyRate?.value, hoursPerday, condition);

      // SKIP 4 ROWS

      resultValueTrainTheTrainer = checkConditionAndGenerateValue(responseTrainTheTrainer?.trainTheTrainer?.resultValue, hourlyRate?.value, hoursPerday, condition);
      resultValueMSTrainTheTrainer = checkConditionAndGenerateValue(responseTrainTheTrainer?.trainTheTrainer?.resultValueMS, hourlyRate?.value, hoursPerday, condition);
      resultValueMSCTrainTheTrainer = checkConditionAndGenerateValue(responseTrainTheTrainer?.trainTheTrainer?.resultValueMSC, hourlyRate?.value, hoursPerday, condition);

      // UAT ENVIROMENT PREPARATION MISSING // responseUATEnvironmentPreparation

      resultValueUATEnvironmentPreparation = checkConditionAndGenerateValue(responseUATEnvironmentPreparation?.uatEnvironmentPreparation?.resultValue, hourlyRate?.value, hoursPerday, condition);
      resultValueMSUATEnvironmentPreparation = checkConditionAndGenerateValue(responseUATEnvironmentPreparation?.uatEnvironmentPreparation?.resultValueMS, hourlyRate?.value, hoursPerday, condition);
      resultValueMSCUATEnvironmentPreparation = checkConditionAndGenerateValue(responseUATEnvironmentPreparation?.uatEnvironmentPreparation?.resultValueMSC, hourlyRate?.value, hoursPerday, condition);

      resultValueUATSupport = checkConditionAndGenerateValue(responseUATSupport?.uatSupport?.resultValue, hourlyRate?.value, hoursPerday, condition);
      resultValueMSUATSupport = checkConditionAndGenerateValue(responseUATSupport?.uatSupport?.resultValueMS, hourlyRate?.value, hoursPerday, condition);
      resultValueMSCUATSupport = checkConditionAndGenerateValue(responseUATSupport?.uatSupport?.resultValueMSC, hourlyRate?.value, hoursPerday, condition);

      resultValueProdEnvironmentPreparation = checkConditionAndGenerateValue(responseProdEnvironmentPreparation?.prodEnvironmentPreparation?.resultValue, hourlyRate?.value, hoursPerday, condition);
      resultValueMSProdEnvironmentPreparation = checkConditionAndGenerateValue(responseProdEnvironmentPreparation?.prodEnvironmentPreparation?.resultValueMS, hourlyRate?.value, hoursPerday, condition);
      resultValueMSCProdEnvironmentPreparation = checkConditionAndGenerateValue(responseProdEnvironmentPreparation?.prodEnvironmentPreparation?.resultValueMSC, hourlyRate?.value, hoursPerday, condition);

      resultValueSupportHandover = checkConditionAndGenerateValue(responseSupportHandover?.supportHandover?.resultValue, hourlyRate?.value, hoursPerday, condition);
      resultValueMSSupportHandover = checkConditionAndGenerateValue(responseSupportHandover?.supportHandover?.resultValueMS, hourlyRate?.value, hoursPerday, condition);
      resultValueMSCSupportHandover = checkConditionAndGenerateValue(responseSupportHandover?.supportHandover?.resultValueMSC, hourlyRate?.value, hoursPerday, condition);
      // responseDocumentLayout
      resultValueEndUserTraining = checkConditionAndGenerateValue(responseDocumentLayout?.endUserTraining?.resultValue, hourlyRate?.value, hoursPerday, condition);
      resultValueMSEndUserTraining = checkConditionAndGenerateValue(responseDocumentLayout?.endUserTraining?.resultValueMS, hourlyRate?.value, hoursPerday, condition);
      resultValueMSCEndUserTraining = checkConditionAndGenerateValue(responseDocumentLayout?.endUserTraining?.resultValueMSC, hourlyRate?.value, hoursPerday, condition);

      resultValuePostGoLive = checkConditionAndGenerateValue(responsePostGoLive?.postGoLive?.resultValue, hourlyRate?.value, hoursPerday, condition);
      resultValueMSPostGoLive = checkConditionAndGenerateValue(responsePostGoLive?.postGoLive?.resultValueMS, hourlyRate?.value, hoursPerday, condition);
      resultValueMSCPostGoLive = checkConditionAndGenerateValue(responsePostGoLive?.postGoLive?.resultValueMSC, hourlyRate?.value, hoursPerday, condition);

      fColmnValueEstimateAveRate = responseDocumentLayout?.projectRisk?.estimateAveRate


      // ################################ESTIMATE RESOURCE################################
      resultValueAnalisisDesignEstimateResource = 0;
      resultValueMSAnalisisDesignEstimateResource = 0;
      resultValueMSCAnalisisDesignEstimateResource = 0;

    }
    console.log('ll ==> ', resultValueReporting);
    
    console.log("generateIColoumnValue resultValueAnalisisDesign true ==> ", resultValueAnalisisDesign, resultValueMSAnalisisDesign, resultValueMSCAnalisisDesign);
    console.log("generateIColoumnValue CustomisationDesign true ==> ", resultValueCustomisationDesign, resultValueMSCustomisationDesign, resultValueMSCCustomisationDesign);
    console.log("generateIColoumnValue customRequirement true ==> ", resultValueCustomRequirementDesign, resultValueMSCustomRequirementDesign, resultValueMSCCustomRequirementDesign);
    return {
      analysisDesing: {
        resultValue: resultValueAnalisisDesign,
        resultValueMS: resultValueMSAnalisisDesign, 
        resultValueMSC: resultValueMSCAnalisisDesign
      },
      customisationDesing: {
        resultValue: resultValueCustomisationDesign,
        resultValueMS: resultValueMSCustomisationDesign, 
        resultValueMSC: resultValueMSCCustomisationDesign
      },
      customRequirementDesing: {
        resultValue: resultValueCustomRequirementDesign,
        resultValueMS: resultValueMSCustomRequirementDesign, 
        resultValueMSC: resultValueMSCCustomRequirementDesign
      },
      documentation: {
        resultValue: resultValueDocumentation,
        resultValueMS: resultValueMSDocumentation, 
        resultValueMSC: resultValueMSCDocumentation
      },
      designReview: {
        resultValue: resultValueDesignReview,
        resultValueMS: resultValueMSDesignReview, 
        resultValueMSC: resultValueMSCDesignReview
      },
      configuration: {
        resultValue: resultValueConfiguration,
        resultValueMS: resultValueMSConfiguration, 
        resultValueMSC: resultValueMSCConfiguration
      },
      integration: {
        resultValue: resultValueIntegration,
        resultValueMS: resultValueMSIntegration, 
        resultValueMSC: resultValueMSCIntegration
      },
      customisationBuild: {
        resultValue: resultValueCustomisationBuild,
        resultValueMS: resultValueMSCustomisationBuild, 
        resultValueMSC: resultValueMSCCustomisationBuild
      },
      customRequirementBuild: {
        resultValue: resultValueCustomRequirementBuild,
        resultValueMS: resultValueMSCustomRequirementBuild, 
        resultValueMSC: resultValueMSCCustomRequirementBuild
      },
      documentLayout: {
        resultValue: resultValueDocumentLayout,
        resultValueMS: resultValueMSDocumentLayout,
        resultValueMSC: resultValueMSCDocumentLayout,
      },
      reporting: {
        resultValue: resultValueReporting,
        resultValueMS: resultValueMSReporting,
        resultValueMSC: resultValueMSCReporting,
      },
      dataMigration: {
        resultValue: resultValueDataMigration,
        resultValueMS: resultValueMSDataMigration,
        resultValueMSC: resultValueMSCDataMigration,
      },
      crp: {
        resultValue: resultValueCRP,
        resultValueMS: resultValueMSCRP,
        resultValueMSC: resultValueMSCCRP,
      },
      testing: {
        resultValue: resultValueTesting,
        resultValueMS: resultValueMSTesting,
        resultValueMSC: resultValueMSCTesting,
      },
      // SKIP 4 ROWS
      trainTheTrainer: {
        resultValue: resultValueTrainTheTrainer,
        resultValueMS: resultValueMSTrainTheTrainer,
        resultValueMSC: resultValueMSCTrainTheTrainer,
      },
      uatEnvironmentPreparation: {
        resultValue: resultValueUATEnvironmentPreparation,
        resultValueMS: resultValueMSUATEnvironmentPreparation,
        resultValueMSC: resultValueMSCUATEnvironmentPreparation,
      },
      uatSupport: {
        resultValue: resultValueUATSupport,
        resultValueMS: resultValueMSUATSupport,
        resultValueMSC: resultValueMSCUATSupport,
      },
      prodEnvironmentPreparation: {
        resultValue: resultValueProdEnvironmentPreparation,
        resultValueMS: resultValueMSProdEnvironmentPreparation,
        resultValueMSC: resultValueMSCProdEnvironmentPreparation,
      },
      supportHandover: { //resultValueSupportHandover
        resultValue: resultValueSupportHandover,
        resultValueMS: resultValueMSSupportHandover,
        resultValueMSC: resultValueMSCSupportHandover,
      },
      endUserTraining: { // EndUserTraining
        resultValue: resultValueEndUserTraining,
        resultValueMS: resultValueMSEndUserTraining,
        resultValueMSC: resultValueMSCEndUserTraining,
      },
      postGoLive: {
        resultValue: resultValuePostGoLive,
        resultValueMS: resultValueMSPostGoLive,
        resultValueMSC: resultValueMSCPostGoLive,
      },
      fColmnValueEstimateAveRate: {
        resultValue: fColmnValueEstimateAveRate
      }
    };
  } catch (error) {
    console.log("generateIColoumnValue error ==> ", error);
    return {
      analysisDesing: {
        resultValue,
        resultValueMS, 
        resultValueMSC
      },
      customisationDesing: {
        resultValue,
        resultValueMS, 
        resultValueMSC
      }
    }
  }
}

const checkConditionAndGenerateValue = (calculatedValue: number, hourlyRate: number, hoursPerDay: number, condition: boolean) => {
  if (condition) {
    return calculatedValue * hourlyRate * hoursPerDay || 0;
  }
  return calculatedValue * hourlyRate || 0;
}

// C5 value generate
export const generateAnalysisDesignMValue = async(inititlaData: any, condition: boolean) => {
   // need to check with 'Estimate - Resource Milestone'!$C$1
  let resultValue = 0;
  let resultValueMS = 0;
  let resultValueMSC = 0;
  let x = 0
  let y = 0

  // ANALYSIS AND DESIGN
  // Must
  let primaryResourceDesignValueFromBaseData = 0;
  let secondaryResourceDesignValueFromBaseData = 0;
  let primaryResourceDesignValueFromModuleData = 0;
  let secondaryResourceDesignValueFromModuleData = 0;

  // Must Should
  let primaryResourceDesignValueFromBaseDataMS = 0;
  let secondaryResourceDesignValueFromBaseDataMS = 0;
  let primaryResourceDesignValueFromModuleDataMS = 0;
  let secondaryResourceDesignValueFromModuleDataMS = 0;

  // Must Should Could
  let primaryResourceDesignValueFromBaseDataMSC = 0;
  let secondaryResourceDesignValueFromBaseDataMSC = 0;
  let primaryResourceDesignValueFromModuleDataMSC = 0;
  let secondaryResourceDesignValueFromModuleDataMSC = 0;

  // Must
  const seenBaseMIds = new Set();
  const seenModuleMIds = new Set();

  // Must Should
  const seenBaseMSIdsMS = new Set();
  const seenModuleMSIdsMS = new Set();

  // Must Should Could
  const seenBaseMSCIdsMSC = new Set();
  const seenModuleMSCIdsMSC = new Set();
  // seerMoscow

  // CONFIGURATION

  let resultConfigurationValue = 0;
  let resultConfigurationValueMS = 0;
  let resultConfigurationValueMSC = 0;

  let buildEstimateConfigurationValueFromBaseData = 0;
  let buildEstimateConfigurationValueFromModlueData = 0;

  let buildEstimateConfigurationValueFromBaseDataMS = 0;
  let buildEstimateConfigurationValueFromModlueDataMS = 0;

  let buildEstimateConfigurationValueFromBaseDataMSC = 0;
  let buildEstimateConfigurationValueFromModlueDataMSC = 0;

  const seenModuleConfigurationMIds = new Set();
  const seenModuleConfigurationMSIds = new Set();
  const seenModuleConfigurationMSCIds = new Set();
  try {
    const {BaseData, resourceModelData, ModuleData, parameterModel} = inititlaData
    if (inititlaData) {

      // BASE DATA LOOP
      const baseLoop = await BaseData && BaseData.length && BaseData.map(async(baseItem: any, baseIndex: number) => {
        // ANALYSIS AND DESING
        // Must
        if (moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000000] && fitGapData[baseItem?.fitGap] != fitGapData[100000001]) {
          //
          const res = baseReader(baseItem, primaryResourceDesignValueFromBaseData, secondaryResourceDesignValueFromBaseData, x);
          primaryResourceDesignValueFromBaseData = res.primaryResourceDesignValueFromBaseData;
          secondaryResourceDesignValueFromBaseData = res.secondaryResourceDesignValueFromBaseData;
          console.log('switch M primaryResourceDesignValueFromBaseData => ', primaryResourceDesignValueFromBaseData);
          console.log('switch M secondaryResourceDesignValueFromBaseData => ', secondaryResourceDesignValueFromBaseData);
        }

        // Must Should
        if ((moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000000] || moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000001]) && fitGapData[baseItem?.fitGap] != fitGapData[100000001]) {
          //
          const res = baseReader(baseItem, primaryResourceDesignValueFromBaseDataMS, secondaryResourceDesignValueFromBaseDataMS, x);
          primaryResourceDesignValueFromBaseDataMS = res.primaryResourceDesignValueFromBaseData;
          secondaryResourceDesignValueFromBaseDataMS = res.secondaryResourceDesignValueFromBaseData;
          console.log('switch MS primaryResourceDesignValueFromBaseData => ', primaryResourceDesignValueFromBaseDataMS);
          console.log('switch MS secondaryResourceDesignValueFromBaseData => ', secondaryResourceDesignValueFromBaseDataMS);
        }

        // Must Should Could
        if ((moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000000] || moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000001] || moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000002]) && fitGapData[baseItem?.fitGap] != fitGapData[100000001]) {
          //
          const res = baseReader(baseItem, primaryResourceDesignValueFromBaseDataMSC, secondaryResourceDesignValueFromBaseDataMSC, x);
          primaryResourceDesignValueFromBaseDataMSC = res.primaryResourceDesignValueFromBaseData;
          secondaryResourceDesignValueFromBaseDataMSC = res.secondaryResourceDesignValueFromBaseData;
          console.log('switch MSC primaryResourceDesignValueFromBaseData => ', primaryResourceDesignValueFromBaseDataMSC);
          console.log('switch MSC secondaryResourceDesignValueFromBaseData => ', secondaryResourceDesignValueFromBaseDataMSC);
        }

        // CONFIGURATION
        // Must

        if (moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000000] && fitGapData[baseItem?.fitGap] != fitGapData[100000001]) {
          // (baseItem?.designEstimate * (baseItem?.resourceSplit / 100)) * baseItem?.quantity
          buildEstimateConfigurationValueFromBaseData += 
          baseItem?.quantity > 0 ? baseItem?.buildEstimate * (baseItem?.resourceSplit / 100) * baseItem?.quantity : baseItem?.buildEstimate * (baseItem?.resourceSplit / 100)
        }

        // Must Should
        if ((moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000000] || moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000001]) && fitGapData[baseItem?.fitGap] != fitGapData[100000001]) {
          buildEstimateConfigurationValueFromBaseDataMS += 
          baseItem?.quantity > 0 ? baseItem?.buildEstimate * (baseItem?.resourceSplit / 100) * baseItem?.quantity : baseItem?.buildEstimate * (baseItem?.resourceSplit / 100)
        }

        // Must Should Could
        if ((moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000000] || moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000001] || moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000002]) && fitGapData[baseItem?.fitGap] != fitGapData[100000001]) {
          buildEstimateConfigurationValueFromBaseDataMSC += 
          baseItem?.quantity > 0 ? baseItem?.buildEstimate * (baseItem?.resourceSplit / 100) * baseItem?.quantity : baseItem?.buildEstimate * (baseItem?.resourceSplit / 100)
        }

      });
      
      const moduleLoop = await ModuleData && ModuleData?.length && ModuleData.map((moduleDataItem: any, moduleDataIndex: any) => {
        console.log('cc ==> ', moduleDataItem?.moduleSeerEstimateDesign, moduleDataItem?.moduleSeerResourceSplit, moduleDataItem?.moduleOverridePartnerSeerEstimateDesign);
        // console.log('ccw ==> ', moduleDataItem?.moduleSeerEstimateDesign * ((100 - moduleDataItem?.moduleSeerResourceSplit) / 100));

        // Must
        if (moscowsData?.[moduleDataItem?.seerMoscow] == moscowsData?.[100000000]) {
          if (!seenModuleMIds.has(moduleDataItem?.fitGapProductSeerModule?.id)) {
            seenModuleMIds.add(moduleDataItem?.fitGapProductSeerModule?.id)
            const res = moduleReader(moduleDataItem, primaryResourceDesignValueFromModuleData, secondaryResourceDesignValueFromModuleData, y);
            primaryResourceDesignValueFromModuleData = res.primaryResourceDesignValueFromModuleData;
            secondaryResourceDesignValueFromModuleData = res.secondaryResourceDesignValueFromModuleData;
          }
        }

        // Must Should
        if (moscowsData?.[moduleDataItem?.seerMoscow] == moscowsData?.[100000000] || moscowsData?.[moduleDataItem?.seerMoscow] == moscowsData?.[100000001]) {
          //
          if (!seenModuleMSIdsMS.has(moduleDataItem?.fitGapProductSeerModule?.id)) {
            seenModuleMSIdsMS.add(moduleDataItem?.fitGapProductSeerModule?.id)
            const res = moduleReader(moduleDataItem, primaryResourceDesignValueFromModuleDataMS, secondaryResourceDesignValueFromModuleDataMS, y);
            primaryResourceDesignValueFromModuleDataMS = res.primaryResourceDesignValueFromModuleData;
            secondaryResourceDesignValueFromModuleDataMS = res.secondaryResourceDesignValueFromModuleData;
          }
        }

        // Must Should Could
        if (moscowsData?.[moduleDataItem?.seerMoscow] == moscowsData?.[100000000] || moscowsData?.[moduleDataItem?.seerMoscow] == moscowsData?.[100000001] || moscowsData?.[moduleDataItem?.seerMoscow] == moscowsData?.[100000002]) {
          //
          if (!seenModuleMSCIdsMSC.has(moduleDataItem?.fitGapProductSeerModule?.id)) {
            seenModuleMSCIdsMSC.add(moduleDataItem?.fitGapProductSeerModule?.id);
            console.log('cc ==>wwwww ==> ', seenModuleMSCIdsMSC, moduleDataItem?.moduleOverridePartnerSeerEstimateDesign, moduleDataItem?.moduleSeerEstimateDesign, moduleDataItem?.moduleOverrideCustomerSeerEstimateDesign);
          
            const res = moduleReader(moduleDataItem, primaryResourceDesignValueFromModuleDataMSC, secondaryResourceDesignValueFromModuleDataMSC, y);
            primaryResourceDesignValueFromModuleDataMSC = res.primaryResourceDesignValueFromModuleData;
            secondaryResourceDesignValueFromModuleDataMSC = res.secondaryResourceDesignValueFromModuleData;
            console.log('switch MSC primaryResourceDesignValueFromModuleData => ', primaryResourceDesignValueFromModuleDataMSC);
            console.log('switch MSC secondaryResourceDesignValueFromModuleData => ', secondaryResourceDesignValueFromModuleDataMSC);
          }
        }

        // CONFIGURATION  moduleOverrideCustomerSeerEstimateBuild  moduleSeerEstimateBuild moduleOverridePartnerSeerEstimateBuild

        // Must
        if (moscowsData?.[moduleDataItem?.seerMoscow] == moscowsData?.[100000000]) {
          if (!seenModuleConfigurationMIds.has(moduleDataItem?.fitGapProductSeerModule?.id)) {
            seenModuleConfigurationMIds.add(moduleDataItem?.fitGapProductSeerModule?.id)
            buildEstimateConfigurationValueFromModlueData += (
              moduleDataItem?.moduleOverridePartnerSeerEstimateBuild * (moduleDataItem?.moduleSeerResourceSplit / 100)
              ) + 
            (moduleDataItem?.moduleOverridePartnerSeerEstimateBuild * ((100 - moduleDataItem?.moduleSeerResourceSplit) / 100))
          }
        }

        // Must Should
        if (moscowsData?.[moduleDataItem?.seerMoscow] == moscowsData?.[100000000] || moscowsData?.[moduleDataItem?.seerMoscow] == moscowsData?.[100000001]) {
          if (!seenModuleConfigurationMSIds.has(moduleDataItem?.fitGapProductSeerModule?.id)) {
            seenModuleConfigurationMSIds.add(moduleDataItem?.fitGapProductSeerModule?.id)
            buildEstimateConfigurationValueFromModlueDataMS += (
              moduleDataItem?.moduleOverridePartnerSeerEstimateBuild * (moduleDataItem?.moduleSeerResourceSplit / 100)
              ) + 
            (moduleDataItem?.moduleOverridePartnerSeerEstimateBuild * ((100 - moduleDataItem?.moduleSeerResourceSplit) / 100))
          }
        }

        // Must Should Could
        if (moscowsData?.[moduleDataItem?.seerMoscow] == moscowsData?.[100000000] || moscowsData?.[moduleDataItem?.seerMoscow] == moscowsData?.[100000001] || moscowsData?.[moduleDataItem?.seerMoscow] == moscowsData?.[100000002]) {
          if (!seenModuleConfigurationMSCIds.has(moduleDataItem?.fitGapProductSeerModule?.id)) {
            seenModuleConfigurationMSCIds.add(moduleDataItem?.fitGapProductSeerModule?.id)
            buildEstimateConfigurationValueFromModlueDataMSC += (
              moduleDataItem?.moduleOverridePartnerSeerEstimateBuild * (moduleDataItem?.moduleSeerResourceSplit / 100)
              ) + 
            (moduleDataItem?.moduleOverridePartnerSeerEstimateBuild * ((100 - moduleDataItem?.moduleSeerResourceSplit) / 100))
          }
        }
      });
      console.log("generateAnalysisDesignMValue true ==> ", BaseData.length, ModuleData.length);
      if (parameterModel?.length) {
        resultValue = generateReturnValue(
          primaryResourceDesignValueFromBaseData,
          secondaryResourceDesignValueFromBaseData,
          primaryResourceDesignValueFromModuleData,
          secondaryResourceDesignValueFromModuleData,
          parameterModel[0].hoursPerday,
          condition
        );
        // (
        //     primaryResourceDesignValueFromBaseData 
        //     + secondaryResourceDesignValueFromBaseData 
        //     + primaryResourceDesignValueFromModuleData 
        //     + secondaryResourceDesignValueFromModuleData
        //   )/parameterModel[0].hoursPerday;
        
        resultValueMS = generateReturnValue(
          primaryResourceDesignValueFromBaseDataMS,
          secondaryResourceDesignValueFromBaseDataMS,
          primaryResourceDesignValueFromModuleDataMS,
          secondaryResourceDesignValueFromModuleDataMS,
          parameterModel[0].hoursPerday,
          condition
        );
        // (
        //   primaryResourceDesignValueFromBaseDataMS 
        //     + secondaryResourceDesignValueFromBaseDataMS 
        //     + primaryResourceDesignValueFromModuleDataMS 
        //     + secondaryResourceDesignValueFromModuleDataMS
        //   )/parameterModel[0].hoursPerday;

        resultValueMSC = generateReturnValue(
          primaryResourceDesignValueFromBaseDataMSC,
          secondaryResourceDesignValueFromBaseDataMSC,
          primaryResourceDesignValueFromModuleDataMSC,
          secondaryResourceDesignValueFromModuleDataMSC,
          parameterModel[0].hoursPerday,
          condition
        );

        resultConfigurationValue = generateReturnValue(
          buildEstimateConfigurationValueFromBaseData, 
          buildEstimateConfigurationValueFromModlueData, 0, 0, 
          parameterModel[0].hoursPerday, 
          condition
        )
        // (buildEstimateConfigurationValueFromBaseData + buildEstimateConfigurationValueFromModlueData)/parameterModel[0].hoursPerday
        resultConfigurationValueMS = generateReturnValue(
          buildEstimateConfigurationValueFromBaseDataMS, 
          buildEstimateConfigurationValueFromModlueDataMS, 0, 0, 
          parameterModel[0].hoursPerday, 
          condition
        )
        //(buildEstimateConfigurationValueFromBaseDataMS + buildEstimateConfigurationValueFromModlueDataMS)/parameterModel[0].hoursPerday
        resultConfigurationValueMSC = generateReturnValue(
          buildEstimateConfigurationValueFromBaseDataMSC, 
          buildEstimateConfigurationValueFromModlueDataMSC, 0, 0, 
          parameterModel[0].hoursPerday, 
          condition
        )
        //(buildEstimateConfigurationValueFromBaseDataMSC + buildEstimateConfigurationValueFromModlueDataMSC)/parameterModel[0].hoursPerday
        // (
        //   primaryResourceDesignValueFromBaseDataMSC 
        //     + secondaryResourceDesignValueFromBaseDataMSC
        //     + primaryResourceDesignValueFromModuleDataMSC 
        //     + secondaryResourceDesignValueFromModuleDataMSC
        //   )/parameterModel[0].hoursPerday;
        
      }
        console.log("resultValue => ", resultConfigurationValue, resultConfigurationValueMS, resultConfigurationValueMSC);
        console.log('mm ===> ', 
        buildEstimateConfigurationValueFromBaseData, 
        buildEstimateConfigurationValueFromBaseData/8, 
        buildEstimateConfigurationValueFromModlueData, 
        (buildEstimateConfigurationValueFromBaseData + buildEstimateConfigurationValueFromModlueData)/8);
      await Promise.all([baseLoop, moduleLoop])
      return {resultValue, resultValueMS, resultValueMSC, configuration: {
        resultValue: resultConfigurationValue,
        resultValueMS: resultConfigurationValueMS,
        resultValueMSC: resultConfigurationValueMSC,
      }};
    } else {
      console.log("generateAnalysisDesignMValue false ==> ");
      return {resultValue, resultValueMS, resultValueMSC, configuration: {
        resultValue: resultConfigurationValue,
        resultValueMS: resultConfigurationValueMS,
        resultValueMSC: resultConfigurationValueMSC,
      }};
    }
  } catch (error) {
    console.log("generateAnalysisDesignMValue error ==> ", error);
    return {resultValue, resultValueMS, resultValueMSC, configuration: {
      resultValue: resultConfigurationValue,
      resultValueMS: resultConfigurationValueMS,
      resultValueMSC: resultConfigurationValueMSC,
    }};
  }
}

const generateReturnValue = (val1: number, val2: number, val3: number, val4: number, hoursPerDay: number, condtion: boolean) => {
  if (condtion) {
    console.log((val1 + val2 + val3 + val4)/hoursPerDay);
    
    return (val1 + val2 + val3 + val4)/hoursPerDay
  }
  console.log((val1 + val2 + val3 + val4));
  
  return (val1 + val2 + val3 + val4)
}
export const generateAnalysisDesignMValue2 = async (inititlaData: any) => {
  try {
    const { BaseData, ModuleData, parameterModel } = inititlaData;
    const resultValue = calculateResultValue(BaseData, ModuleData, parameterModel);
    
    console.log("generateAnalysisDesignMValue true ==> ");
    console.log("resultValue => ", resultValue);
    return resultValue;
  } catch (error) {
    console.log("generateAnalysisDesignMValue error ==> ", error);
    return 0;
  }
}

const calculateResultValue = (
  BaseData: any[],
  ModuleData: any[],
  parameterModel: any[]
) => {
  const primaryResourceDesignValueFromBaseData = BaseData.reduce((acc, baseItem) => {
    if (moscowsData?.[baseItem?.seerMoscow] === moscowsData?.[100000000] && fitGapData[baseItem?.fitGap] != fitGapData[100000001]) {
      const quantityFactor = baseItem?.quantity > 0 ? baseItem?.quantity : 1;
      return acc + (baseItem?.designEstimate * (baseItem?.resourceSplit / 100) * quantityFactor);
    }
    return acc;
  }, 0);

  const secondaryResourceDesignValueFromBaseData = BaseData.reduce((acc, baseItem) => {
    if (moscowsData?.[baseItem?.seerMoscow] === moscowsData?.[100000000] && fitGapData[baseItem?.fitGap] != fitGapData[100000001]) {
      return acc + (baseItem?.designEstimate * ((100 - baseItem?.resourceSplit) / 100));
    }
    return acc;
  }, 0);

  const primaryResourceDesignValueFromModuleData = ModuleData.reduce((acc, moduleDataItem) => {
    if (moscowsData?.[moduleDataItem?.seerMoscow] === moscowsData?.[100000000]) {
      return acc + (moduleDataItem?.moduleSeerEstimateDesign * (moduleDataItem?.moduleSeerResourceSplit / 100));
    }
    return acc;
  }, 0);

  const secondaryResourceDesignValueFromModuleData = ModuleData.reduce((acc, moduleDataItem) => {
    if (moscowsData?.[moduleDataItem?.seerMoscow] === moscowsData?.[100000000]) {
      return acc + (moduleDataItem?.moduleSeerEstimateDesign * ((100 - moduleDataItem?.moduleSeerResourceSplit) / 100));
    }
    return acc;
  }, 0);

  if (parameterModel?.length) {
    return (
      primaryResourceDesignValueFromBaseData +
      secondaryResourceDesignValueFromBaseData +
      primaryResourceDesignValueFromModuleData +
      secondaryResourceDesignValueFromModuleData
    ) / parameterModel[0].hoursPerday;
  }
  return 0;
};


const baseReader = (baseItem: any, primaryResourceDesignValueFromBaseData: number, secondaryResourceDesignValueFromBaseData: number, x: number) => {
  x += 1;
  if (baseItem?.quantity && baseItem?.quantity > 0) { // Quantity greaterthan 0
    // (design*(split/100))*quantity
    console.log('primaryResourceDesignValueFromBaseData => ', primaryResourceDesignValueFromBaseData, (baseItem?.designEstimate * (baseItem?.resourceSplit / 100)) * baseItem?.quantity);
    
    primaryResourceDesignValueFromBaseData += (baseItem?.designEstimate * (baseItem?.resourceSplit / 100)) * baseItem?.quantity
  } else {
    // design value
    console.log('primaryResourceDesignValueFromBaseData22 => ', primaryResourceDesignValueFromBaseData, (baseItem?.designEstimate * (baseItem?.resourceSplit / 100)));
    primaryResourceDesignValueFromBaseData += (baseItem?.designEstimate * (baseItem?.resourceSplit / 100))
  }

  secondaryResourceDesignValueFromBaseData += (baseItem?.designEstimate * ((100 - baseItem?.resourceSplit) / 100))
  return {primaryResourceDesignValueFromBaseData, secondaryResourceDesignValueFromBaseData}
}

const moduleReader = (moduleDataItem: any, primaryResourceDesignValueFromModuleData: number, secondaryResourceDesignValueFromModuleData: number ,y: number) => {
  y += 1;
  // design*(split/100)
  // Design*((100-Split)/100)
  // console.log('primaryResourceDesignValueFromModuleData => ', primaryResourceDesignValueFromModuleData, moduleDataItem?.moduleSeerEstimateDesign * (moduleDataItem?.moduleSeerResourceSplit / 100));
  primaryResourceDesignValueFromModuleData += moduleDataItem?.moduleOverridePartnerSeerEstimateDesign * (moduleDataItem?.moduleSeerResourceSplit / 100)
  // console.log('secondaryResourceDesignValueFromModuleData => ', secondaryResourceDesignValueFromModuleData, moduleDataItem?.moduleSeerEstimateDesign * ((100 - moduleDataItem?.moduleSeerResourceSplit) / 100));
  secondaryResourceDesignValueFromModuleData += moduleDataItem?.moduleOverridePartnerSeerEstimateDesign * ((100 - moduleDataItem?.moduleSeerResourceSplit) / 100)
  return {primaryResourceDesignValueFromModuleData, secondaryResourceDesignValueFromModuleData}
}