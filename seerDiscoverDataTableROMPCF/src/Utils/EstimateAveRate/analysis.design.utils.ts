import { romParameter } from "../../Constants/fteConstants";
import { fitGapData, moscowsData } from "../../Constants/pickListData";
import { calculateProjectManagerEstimateResource, calculateSubTotal, generateEstimateResourceValue } from "../EstimateResource";
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
  console.log(inititlaData.fteValue);
  
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
  let resultValueAnalisisDesignEstimateResource: any = {};
  let resultValueCustomisationDesignEstimateResource: any = {};
  let resultValueCustomRequirementDesignEstimateResource: any = {};
  let resultValueDocumentationEstimateResource: any = {};
  let resultValueDesignReviewEstimateResource: any = {};

  // BUILD
  // let resultValue
  let resultValueConfigurationEstimateResource: any = {};
  let resultValueIntegrationEstimateResource: any = {};
  let resultValueCustomisationBuildEstimateResource: any = {};
  let resultValueCustomRequirementBuildEstimateResource: any = {};
  let resultValueDocumentLayoutEstimateResource: any = {};
  let resultValueReportingEstimateResource: any = {};
  let resultValueDataMigrationEstimateResource: any = {};
  let resultValueCRPEstimateResource: any = {};
  let resultValueTestingEstimateResource: any = {};
  let resultValueTrainTheTrainerEstimateResource: any = {};
  let resultValueUATEnvironmentPreparationEstimateResource: any = {};
  let resultValueUATSupportEstimateResource: any = {};
  let resultValueProdEnvironmentPreparationEstimateResource: any = {};
  let resultValueSupportHandoverEstimateResource: any = {};
  let resultValueEndUserTrainingEstimateResource: any = {};
  let resultValuePostGoLiveEstimateResource: any = {};
  let resultValueProjectManagerEstimateResource: any = {};


  // ################################ESTIMATE RESOURCE MILESTONE################################
  let resultValueAnalisisDesignEstimateResourceMilestone: any = {};
  let resultValueCustomisationDesignEstimateResourceMilestone: any = {};
  let resultValueCustomRequirementDesignEstimateResourceMilestone: any = {};
  let resultValueDocumentationEstimateResourceMilestone: any = {};
  let resultValueDesignReviewEstimateResourceMilestone: any = {};
  let resultValueAnalysisDesignProjectManagerEstimateResourceMilestone: any = {};
  let resultValueAnalysisDesignTotalEstimateResourceMilestone: any = {};

  // BUILD
  // let resultValue
  let resultValueConfigurationEstimateResourceMilestone: any = {};
  let resultValueIntegrationEstimateResourceMilestone: any = {};
  let resultValueCustomisationBuildEstimateResourceMilestone: any = {};
  let resultValueCustomRequirementBuildEstimateResourceMilestone: any = {};
  let resultValueDocumentLayoutEstimateResourceMilestone: any = {};
  let resultValueReportingEstimateResourceMilestone: any = {};
  let resultValueDataMigrationEstimateResourceMilestone: any = {};
  let resultValueCRPEstimateResourceMilestone: any = {};
  let resultValueTestingEstimateResourceMilestone: any = {};
  let resultValueBuildProjectManagerEstimateResourceMilestone: any = {};
  let resultValueBuildTotalEstimateResourceMilestone: any = {};

  let resultValueTrainTheTrainerEstimateResourceMilestone: any = {};
  let resultValueUATEnvironmentPreparationEstimateResourceMilestone: any = {};
  let resultValueUATSupportEstimateResourceMilestone: any = {};
  let resultValueProdEnvironmentPreparationEstimateResourceMilestone: any = {};
  let resultValueSupportHandoverEstimateResourceMilestone: any = {};
  let resultValueDeployProjectManagerEstimateResourceMilestone: any = {};
  let resultValueDeployToatalEstimateResourceMilestone: any = {};

  let resultValueEndUserTrainingEstimateResourceMilestone: any = {};
  let resultValuePostGoLiveEstimateResourceMilestone: any = {};
  let resultValueOperationProjectManagerEstimateResourceMilestone: any = {};
  let resultValueOperationTotalEstimateResourceMilestone: any = {};
  // let resultValueProjectManagerEstimateResourceMilestone: any = {};

  let projectManagementSub: any = 0;
  let projectManagementSubMS: any = 0;
  let projectManagementSubMSC: any = 0;
  
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

    // const responseProjectManagementSub = await calculateProjectManagerEstimateResource(inititlaData, {responseAnalisisDesign, responseCustomisationDesign, responseCustomRequirementDesign, responseIntegration});

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
      console.log('hmmm', responseAnalisisDesign?.resultValue, responseAnalisisDesign?.resultValueMSC);
      
      resultValueAnalisisDesignEstimateResource = generateEstimateResourceValue(
        inititlaData, {
          M: (responseAnalisisDesign?.resultValue || 0),
          'M/S': (responseAnalisisDesign?.resultValueMS || 0),
          "M/S/C": (responseAnalisisDesign?.resultValueMSC || 0),
        },
        responseAnalisisDesign,
        'Analysis and Design',
        'All',
        condition
      );

      console.log('resultValueAnalisisDesignEstimateResource ==> ', resultValueAnalisisDesignEstimateResource);
      

      resultValueCustomisationDesignEstimateResource = generateEstimateResourceValue(
        inititlaData, {
          M: (responseCustomisationDesign?.customisation?.resultValue || 0),
          'M/S': (responseCustomisationDesign?.customisation?.resultValueMS || 0),
          "M/S/C": (responseCustomisationDesign?.customisation?.resultValueMSC || 0),
        },
        responseCustomisationDesign?.customisation,
        'Customisations (Design)',
        'All',
        condition
      );

      resultValueCustomRequirementDesignEstimateResource = generateEstimateResourceValue(
        inititlaData, {
          M: (responseCustomRequirementDesign?.customRequirement?.resultValue || 0),
          'M/S': (responseCustomRequirementDesign?.customRequirement?.resultValueMS || 0),
          "M/S/C": (responseCustomRequirementDesign?.customRequirement?.resultValueMSC || 0),
        },
        responseCustomRequirementDesign?.customRequirement,
        'Custom Requirements (Design)',
        'All',
        condition
      );

      resultValueDocumentationEstimateResource = generateEstimateResourceValue(
        inititlaData, {
          M: (responseDocumentation?.documentation?.resultValue || 0),
          'M/S': (responseDocumentation?.documentation?.resultValueMS || 0),
          "M/S/C": (responseDocumentation?.documentation?.resultValueMSC || 0),
        },
        responseDocumentation?.documentation,
        'Documentation',
        'All',
        condition
      );

      resultValueDesignReviewEstimateResource = generateEstimateResourceValue(
        inititlaData, {
          M: (responseDesignReview?.designReview?.resultValue || 0),
          'M/S': (responseDesignReview?.designReview?.resultValueMS || 0),
          "M/S/C": (responseDesignReview?.designReview?.resultValueMSC || 0),
        },
        responseDesignReview?.designReview,
        'Design Review',
        'All',
        condition
      );

      resultValueConfigurationEstimateResource = generateEstimateResourceValue(
        inititlaData, {
          M: (responseAnalisisDesign?.configuration?.resultValue || 0),
          'M/S': (responseAnalisisDesign?.configuration?.resultValueMS || 0),
          "M/S/C": (responseAnalisisDesign?.configuration?.resultValueMSC || 0),
        },
        responseAnalisisDesign?.configuration,
        'Configuration',
        'All',
        condition
      );

      resultValueIntegrationEstimateResource = generateEstimateResourceValue(
        inititlaData, {
          M: (responseIntegration?.integration?.resultValue || 0),
          'M/S': (responseIntegration?.integration?.resultValueMS || 0),
          "M/S/C": (responseIntegration?.integration?.resultValueMSC || 0),
        },
        responseIntegration?.integration,
        'Integrations',
        'All',
        condition
      );

      resultValueCustomisationBuildEstimateResource = generateEstimateResourceValue(
        inititlaData, {
          M: (responseCustomisationDesign?.customisationBuild?.resultValue || 0),
          'M/S': (responseCustomisationDesign?.customisationBuild?.resultValueMS || 0),
          "M/S/C": (responseCustomisationDesign?.customisationBuild?.resultValueMSC || 0),
        },
        responseCustomisationDesign?.customisationBuild,
        'Customisations (Build)',
        'All',
        condition
      );

      resultValueCustomRequirementBuildEstimateResource = generateEstimateResourceValue(
        inititlaData, {
          M: (responseCustomRequirementDesign?.customRequirementBuild?.resultValue || 0),
          'M/S': (responseCustomRequirementDesign?.customRequirementBuild?.resultValueMS || 0),
          "M/S/C": (responseCustomRequirementDesign?.customRequirementBuild?.resultValueMSC || 0),
        },
        responseCustomRequirementDesign?.customRequirementBuild,
        'Custom Requirements (Build)',
        'All',
        condition
      );

      resultValueDocumentLayoutEstimateResource = generateEstimateResourceValue(
        inititlaData, {
          M: (responseDocumentLayout?.documentLayout?.resultValue || 0),
          'M/S': (responseDocumentLayout?.documentLayout?.resultValueMS || 0),
          "M/S/C": (responseDocumentLayout?.documentLayout?.resultValueMSC || 0),
        },
        responseDocumentLayout?.documentLayout,
        'Document Layouts',
        'All',
        condition
      );

      resultValueReportingEstimateResource = generateEstimateResourceValue(
        inititlaData, {
          M: (responseReporting?.reporting?.resultValue || 0),
          'M/S': (responseReporting?.reporting?.resultValueMS || 0),
          "M/S/C": (responseReporting?.reporting?.resultValueMSC || 0),
        },
        responseReporting?.reporting,
        'Reporting',
        'All',
        condition
      );

      resultValueDataMigrationEstimateResource = generateEstimateResourceValue(
        inititlaData, {
          M: (responseDataMigration?.dataMigration?.resultValue || 0),
          'M/S': (responseDataMigration?.dataMigration?.resultValueMS || 0),
          "M/S/C": (responseDataMigration?.dataMigration?.resultValueMSC || 0),
        },
        responseDataMigration?.dataMigration,
        'Data Migration',
        'All',
        condition
      );

      resultValueCRPEstimateResource = generateEstimateResourceValue(
        inititlaData, {
          M: (responseCRP?.crp?.resultValue || 0),
          'M/S': (responseCRP?.crp?.resultValueMS || 0),
          "M/S/C": (responseCRP?.crp?.resultValueMSC || 0),
        },
        responseCRP?.crp?.resultValue,
        'CRP',
        'All',
        condition
      );

      resultValueTestingEstimateResource = generateEstimateResourceValue(
        inititlaData, {
          M: (responseTesting?.testing?.resultValue || 0),
          'M/S': (responseTesting?.testing?.resultValueMS || 0),
          "M/S/C": (responseTesting?.testing?.resultValueMSC || 0),
        },
        responseTesting?.testing,
        'Testing',
        'All',
        condition
      );

      resultValueTrainTheTrainerEstimateResource = generateEstimateResourceValue(
        inititlaData, {
          M: (responseTrainTheTrainer?.trainTheTrainer?.resultValue || 0),
          'M/S': (responseTrainTheTrainer?.trainTheTrainer?.resultValueMS || 0),
          "M/S/C": (responseTrainTheTrainer?.trainTheTrainer?.resultValueMSC || 0),
        },
        responseTrainTheTrainer?.trainTheTrainer,
        'Train-the-trainer',
        'All',
        condition
      );

      resultValueUATEnvironmentPreparationEstimateResource = generateEstimateResourceValue(
        inititlaData, {
          M: (responseUATEnvironmentPreparation?.uatEnvironmentPreparation?.resultValue || 0),
          'M/S': (responseUATEnvironmentPreparation?.uatEnvironmentPreparation?.resultValueMS || 0),
          "M/S/C": (responseUATEnvironmentPreparation?.uatEnvironmentPreparation?.resultValueMSC || 0),
        },
        responseUATEnvironmentPreparation?.uatEnvironmentPreparation,
        'UAT Environment Preparation',
        'All',
        condition
      );

      resultValueUATSupportEstimateResource = generateEstimateResourceValue(
        inititlaData, {
          M: (responseUATSupport?.uatSupport?.resultValue || 0),
          'M/S': (responseUATSupport?.uatSupport?.resultValueMS || 0),
          "M/S/C": (responseUATSupport?.uatSupport?.resultValueMSC || 0),
        },
        responseUATSupport?.uatSupport,
        'UAT Support',
        'All',
        condition
      );

      resultValueProdEnvironmentPreparationEstimateResource = generateEstimateResourceValue(
        inititlaData, {
          M: (responseProdEnvironmentPreparation?.prodEnvironmentPreparation?.resultValue || 0),
          'M/S': (responseProdEnvironmentPreparation?.prodEnvironmentPreparation?.resultValueMS || 0),
          "M/S/C": (responseProdEnvironmentPreparation?.prodEnvironmentPreparation?.resultValueMSC || 0),
        },
        responseProdEnvironmentPreparation?.prodEnvironmentPreparation,
        'PROD Environment Preparation',
        'All',
        condition
      );

      resultValueSupportHandoverEstimateResource = generateEstimateResourceValue(
        inititlaData, {
          M: (responseSupportHandover?.supportHandover?.resultValue || 0),
          'M/S': (responseSupportHandover?.supportHandover?.resultValueMS || 0),
          "M/S/C": (responseSupportHandover?.supportHandover?.resultValueMSC || 0),
        },
        responseSupportHandover?.supportHandover,
        'Support Handover',
        'All',
        condition
      );

      resultValueEndUserTrainingEstimateResource = generateEstimateResourceValue(
        inititlaData, {
          M: (responseDocumentLayout?.endUserTraining?.resultValue || 0),
          'M/S': (responseDocumentLayout?.endUserTraining?.resultValueMS || 0),
          "M/S/C": (responseDocumentLayout?.endUserTraining?.resultValueMSC || 0),
        },
        responseDocumentLayout?.endUserTraining,
        'End user training',
        'All',
        condition
      );

      resultValuePostGoLiveEstimateResource = generateEstimateResourceValue(
        inititlaData, {
          M: (responsePostGoLive?.postGoLive?.resultValue || 0),
          'M/S': (responsePostGoLive?.postGoLive?.resultValueMS || 0),
          "M/S/C": (responsePostGoLive?.postGoLive?.resultValueMSC || 0),
        },
        responsePostGoLive?.postGoLive,
        'Post Go-Live Support',
        'All',
        condition
      );

      console.log('resultValuePostGoLiveEstimateResource', resultValuePostGoLiveEstimateResource);
      
      let totalOfSub = await calculateSubTotal(
        responsePostGoLive?.postGoLive, 
        responseDocumentLayout?.endUserTraining,
        responseSupportHandover?.supportHandover,
        responseProdEnvironmentPreparation?.prodEnvironmentPreparation,
        responseUATSupport?.uatSupport,
        responseUATEnvironmentPreparation?.uatEnvironmentPreparation,
        responseTrainTheTrainer?.trainTheTrainer,
        responseTesting?.testing,
        responseCRP?.crp,
        responseDataMigration?.dataMigration,
        responseReporting?.reporting,
        responseDocumentLayout?.documentLayout,
        responseCustomRequirementDesign?.customRequirementBuild,
        responseCustomisationDesign?.customisationBuild,
        responseIntegration?.integration,
        responseAnalisisDesign?.configuration,
        responseDesignReview?.designReview,
        responseDocumentation?.documentation,
        responseCustomRequirementDesign?.customRequirement,
        responseCustomisationDesign?.customisation,
        responseAnalisisDesign,
      );

      console.log('', totalOfSub);
      

      const responseProjectManagementSub = await calculateProjectManagerEstimateResource(inititlaData, {responseAnalisisDesign, responseCustomisationDesign, responseCustomRequirementDesign, responseIntegration}, totalOfSub);


      resultValueProjectManagerEstimateResource = generateEstimateResourceValue(
        inititlaData, {
          M: (responseProjectManagementSub?.resultValue || 0),
          'M/S': (responseProjectManagementSub?.resultValueMS || 0),
          "M/S/C": (responseProjectManagementSub?.resultValueMSC || 0),
        },
        {},
        'Project Manager',
        'All',
        condition
      );
      console.log(resultValueProjectManagerEstimateResource);
      console.log(responseProjectManagementSub?.resultValue);
    }
    
    
    console.log('ll ==> ', resultValueReporting);


    ////////////////ESTIMATE RESOURCE MILESTONE START///////////////
    
    
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
      },
      analysisDesingEstimateResource: resultValueAnalisisDesignEstimateResource,
      customisationDesignEstimateResource: resultValueCustomisationDesignEstimateResource,
      customRequirementDesignEstimateResource: resultValueCustomRequirementDesignEstimateResource,
      documentationEstimateResource: resultValueDocumentationEstimateResource,
      designReviewEstimateResource: resultValueDesignReviewEstimateResource,
      configurationEstimateResource: resultValueConfigurationEstimateResource,
      integrationEstimateResource: resultValueIntegrationEstimateResource,
      customisationBuildEstimateResource: resultValueCustomisationBuildEstimateResource,
      customRequirementBuildEstimateResource: resultValueCustomRequirementBuildEstimateResource,
      documentLayoutEstimateResource: resultValueDocumentLayoutEstimateResource,
      reportingEstimateResource: resultValueReportingEstimateResource,
      dataMigrationEstimateResource: resultValueDataMigrationEstimateResource,
      crpEstimateResource: resultValueCRPEstimateResource,
      testingEstimateResource: resultValueTestingEstimateResource,
      trainTheTrainerEstimateResource: resultValueTrainTheTrainerEstimateResource,
      uatEnvironmentPreparationEstimateResource: resultValueUATEnvironmentPreparationEstimateResource,
      uatSupportEstimateResource: resultValueUATSupportEstimateResource,
      prodEnvironmentPreparationEstimateResource: resultValueProdEnvironmentPreparationEstimateResource,
      supportHandoverEstimateResource: resultValueSupportHandoverEstimateResource,
      endUserTrainingEstimateResource: resultValueEndUserTrainingEstimateResource,
      postGoLiveEstimateResource: resultValuePostGoLiveEstimateResource,
      projectManager: resultValueProjectManagerEstimateResource,
      subSections: {
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

export const checkConditionAndGenerateValue = (calculatedValue: number, hourlyRate: number, hoursPerDay: number, condition: boolean) => {
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
        const {allResources} = baseItem;
        // ANALYSIS AND DESING
        // Must
        if (moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000000] && fitGapData[baseItem?.fitGap] != fitGapData[100000001]) {
          //
          const res = baseReader(baseItem, primaryResourceDesignValueFromBaseData, secondaryResourceDesignValueFromBaseData, x);
          primaryResourceDesignValueFromBaseData = res.primaryResourceDesignValueFromBaseData;
          secondaryResourceDesignValueFromBaseData = res.secondaryResourceDesignValueFromBaseData;
        }

        // Must Should
        if ((moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000000] || moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000001]) && fitGapData[baseItem?.fitGap] != fitGapData[100000001]) {
          //
          const res = baseReader(baseItem, primaryResourceDesignValueFromBaseDataMS, secondaryResourceDesignValueFromBaseDataMS, x);
          primaryResourceDesignValueFromBaseDataMS = res.primaryResourceDesignValueFromBaseData;
          secondaryResourceDesignValueFromBaseDataMS = res.secondaryResourceDesignValueFromBaseData;
        }

        // Must Should Could
        if ((moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000000] || moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000001] || moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000002]) && fitGapData[baseItem?.fitGap] != fitGapData[100000001]) {
          //
          const res = baseReader(baseItem, primaryResourceDesignValueFromBaseDataMSC, secondaryResourceDesignValueFromBaseDataMSC, x);
          primaryResourceDesignValueFromBaseDataMSC = res.primaryResourceDesignValueFromBaseData;
          secondaryResourceDesignValueFromBaseDataMSC = res.secondaryResourceDesignValueFromBaseData;
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
          
            const res = moduleReader(moduleDataItem, primaryResourceDesignValueFromModuleDataMSC, secondaryResourceDesignValueFromModuleDataMSC, y);
            primaryResourceDesignValueFromModuleDataMSC = res.primaryResourceDesignValueFromModuleData;
            secondaryResourceDesignValueFromModuleDataMSC = res.secondaryResourceDesignValueFromModuleData;
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
      await Promise.all([baseLoop, moduleLoop])
      return {resultValue, resultValueMS, resultValueMSC, configuration: {
        resultValue: resultConfigurationValue,
        resultValueMS: resultConfigurationValueMS,
        resultValueMSC: resultConfigurationValueMSC,
      }};
    } else {
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
    
    return (val1 + val2 + val3 + val4)/hoursPerDay
  }
  
  return (val1 + val2 + val3 + val4)
}
export const generateAnalysisDesignMValue2 = async (inititlaData: any) => {
  try {
    const { BaseData, ModuleData, parameterModel } = inititlaData;
    const resultValue = calculateResultValue(BaseData, ModuleData, parameterModel);
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
  const primaryResourceDesignValueFromBaseData = BaseData.reduce((acc: any, baseItem: any) => {
    if (moscowsData?.[baseItem?.seerMoscow] === moscowsData?.[100000000] && fitGapData[baseItem?.fitGap] != fitGapData[100000001]) {
      const quantityFactor = baseItem?.quantity > 0 ? baseItem?.quantity : 1;
      return acc + (baseItem?.designEstimate * (baseItem?.resourceSplit / 100) * quantityFactor);
    }
    return acc;
  }, 0);

  const secondaryResourceDesignValueFromBaseData = BaseData.reduce((acc: any, baseItem: any) => {
    if (moscowsData?.[baseItem?.seerMoscow] === moscowsData?.[100000000] && fitGapData[baseItem?.fitGap] != fitGapData[100000001]) {
      return acc + (baseItem?.designEstimate * ((100 - baseItem?.resourceSplit) / 100));
    }
    return acc;
  }, 0);

  const primaryResourceDesignValueFromModuleData = ModuleData.reduce((acc: any, moduleDataItem: any) => {
    if (moscowsData?.[moduleDataItem?.seerMoscow] === moscowsData?.[100000000]) {
      return acc + (moduleDataItem?.moduleSeerEstimateDesign * (moduleDataItem?.moduleSeerResourceSplit / 100));
    }
    return acc;
  }, 0);

  const secondaryResourceDesignValueFromModuleData = ModuleData.reduce((acc: any, moduleDataItem: any) => {
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
    primaryResourceDesignValueFromBaseData += (baseItem?.designEstimate * (baseItem?.resourceSplit / 100)) * baseItem?.quantity
  } else {
    // design value
    primaryResourceDesignValueFromBaseData += (baseItem?.designEstimate * (baseItem?.resourceSplit / 100))
  }

  secondaryResourceDesignValueFromBaseData += (baseItem?.designEstimate * ((100 - baseItem?.resourceSplit) / 100))
  return {primaryResourceDesignValueFromBaseData, secondaryResourceDesignValueFromBaseData}
}

const moduleReader = (moduleDataItem: any, primaryResourceDesignValueFromModuleData: number, secondaryResourceDesignValueFromModuleData: number ,y: number) => {
  y += 1;
  // design*(split/100)
  // Design*((100-Split)/100)
  primaryResourceDesignValueFromModuleData += moduleDataItem?.moduleOverridePartnerSeerEstimateDesign * (moduleDataItem?.moduleSeerResourceSplit / 100)
  secondaryResourceDesignValueFromModuleData += moduleDataItem?.moduleOverridePartnerSeerEstimateDesign * ((100 - moduleDataItem?.moduleSeerResourceSplit) / 100)
  return {primaryResourceDesignValueFromModuleData, secondaryResourceDesignValueFromModuleData}
}