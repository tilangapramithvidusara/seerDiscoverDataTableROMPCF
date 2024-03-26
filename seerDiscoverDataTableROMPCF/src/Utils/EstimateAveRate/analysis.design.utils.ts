import { useDispatch } from "react-redux";
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
import { setEstimateAveRateAnalysisDesign } from "../../redux/report/reportSlice";
import { parameterKeyIndex } from "../../Constants/parametersSetting";
import { checkTypeparseFloat } from "../setting.values.convertor.utils";
import { fitGapMoscowObject, fitGapObject } from "../../Constants/fitGap";

export const generateIColoumnValue = async(inititlaData: any, title: string, dispatch: any, hasFteValue?: boolean, settingParameters?: any, isSnapshotModeEnable?: boolean) => {
  const hasParameters = settingParameters && isSnapshotModeEnable;
  const condition = romParameter === "Days";
  // ################################ESTIMATE AVERAGE RATE################################
  // ANALYSIS AND DESIGN
  let resultValue = 0;
  let resultValueMS = 0;
  let resultValueMSC = 0;

  let resultValueAnalisisDesign = 0;
  let resultValueMSAnalisisDesign = 0;
  let resultValueMSCAnalisisDesign = 0;
  let resultValueAnalisisDesignBase = 0;
  let resultValueMSAnalisisDesignBase = 0;
  let resultValueMSCAnalisisDesignBase = 0;
  let resultValueAnalisisDesignModule = 0;
  let resultValueMSAnalisisDesignModule = 0;
  let resultValueMSCAnalisisDesignModule = 0;

  let resultValueCustomisationDesign = 0;
  let resultValueMSCustomisationDesign = 0;
  let resultValueMSCCustomisationDesign = 0;
  let resultValueCustomisationDesignBase = 0;
  let resultValueMSCustomisationDesignBase = 0;
  let resultValueMSCCustomisationDesignBase = 0;

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
  let resultValueConfigurationBase = 0;
  let resultValueMSConfigurationBase = 0;
  let resultValueMSCConfigurationBase = 0;
  let resultValueConfigurationModule = 0;
  let resultValueMSConfigurationModule = 0;
  let resultValueMSCConfigurationModule = 0;

  let resultValueIntegration = 0;
  let resultValueMSIntegration = 0;
  let resultValueMSCIntegration = 0;

  let resultValueCustomisationBuild = 0;
  let resultValueMSCustomisationBuild = 0;
  let resultValueMSCCustomisationBuild = 0;
  let resultValueCustomisationBuildBase = 0;
  let resultValueMSCustomisationBuildBase = 0;
  let resultValueMSCCustomisationBuildBase = 0;

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

  let estimageAveRateAnalysisDesignSidePane: any;
  let estimageAveRateCustomisationDesignSidePane: any;
  let estimageAveRateCustomerRequirementDesignSidePane: any;
  let estimageAveRateCustomerDocumentationSidePane: any;
  let estimageAveRateCustomerDesignReviewSidePane: any;
  let estimageAveRateCustomerConfigurationSidePane: any;
  let estimageAveRateCustomerIntegrationSidePane: any;
  let estimageAveRateCustomerCustomisationBuildSidePane: any;
  let estimageAveRateCustomerCustomRequirementBuildSidePane: any;
  let estimageAveRateDocumentLayoutSidePane: any;
  
  try {
    const responseAnalisisDesign = await generateAnalysisDesignMValue(inititlaData, condition, settingParameters, isSnapshotModeEnable);    
    const responseCustomisationDesign = await generateCustomisationDesignMValue(inititlaData, condition, settingParameters, isSnapshotModeEnable)
    const responseCustomRequirementDesign = await generateCustomRequirementMValue(inititlaData, condition, settingParameters, isSnapshotModeEnable);

    const responseDocumentation = await generateDocumentationMValue(inititlaData, {responseAnalisisDesign, responseCustomisationDesign, responseCustomRequirementDesign}, condition, 
      // hasFteValue, 
      false,
      settingParameters, isSnapshotModeEnable)
    const responseDesignReview = await generateDesignReviewMValue(inititlaData, {responseAnalisisDesign, responseCustomisationDesign, responseCustomRequirementDesign, responseDocumentation}, condition, 
      // hasFteValue,
      false, 
      settingParameters, isSnapshotModeEnable);

    const responseIntegration = await generateIntegrationMValue(inititlaData, condition, settingParameters, isSnapshotModeEnable);
    const responseDocumentLayout = await generateDocumentLayoutMValue(inititlaData, {responseAnalisisDesign, responseCustomisationDesign, responseCustomRequirementDesign, responseIntegration}, condition, false, settingParameters, isSnapshotModeEnable);
    // console.log("y ===> responseDocumentLayout", responseDocumentLayout);
    
    const responseReporting = await generateReportingMValue(inititlaData, {responseAnalisisDesign, responseCustomisationDesign, responseCustomRequirementDesign, responseIntegration}, condition, 
      // hasFteValue, 
      false,
      settingParameters, isSnapshotModeEnable)
    const responseDataMigration = await generateDataMigrationMValue(inititlaData, {responseAnalisisDesign, responseCustomisationDesign, responseCustomRequirementDesign, responseIntegration}, condition, 
      // hasFteValue, 
      false,
      settingParameters, isSnapshotModeEnable);
    const responseCRP = await generateCRPMValue(inititlaData, {responseAnalisisDesign, responseCustomisationDesign, responseCustomRequirementDesign, responseIntegration}, condition, 
      // hasFteValue, 
      false,
      settingParameters, isSnapshotModeEnable);
    const responseTesting = await generateTestingMValue(inititlaData, {responseAnalisisDesign, responseCustomisationDesign, responseCustomRequirementDesign, responseIntegration}, condition, 
      // hasFteValue, 
      false,
      settingParameters, isSnapshotModeEnable);

    // In "train the trainer" has to 0 when "End user train" has value --- Keith said it hold for now
    const responseTrainTheTrainer = await generateTrainTheTrainerMValue(inititlaData, {responseAnalisisDesign}, condition, 
      // hasFteValue, 
      false,
      settingParameters, isSnapshotModeEnable);
// UAT ENV MISSING
    const responseUATEnvironmentPreparation = await generateUATEnvironmentPreparationMValue(inititlaData, {responseAnalisisDesign, responseCustomisationDesign, responseCustomRequirementDesign, responseIntegration}, condition, 
      // hasFteValue, 
      false,
      settingParameters, isSnapshotModeEnable);
    const responseUATSupport = await generateUATSupportMValue(inititlaData, {responseAnalisisDesign, responseCustomisationDesign, responseCustomRequirementDesign, responseIntegration}, condition, 
      // hasFteValue, 
      false,
      settingParameters, isSnapshotModeEnable)
    const responseProdEnvironmentPreparation = await generateProdEnvironmentPreparationMValue(inititlaData, {responseAnalisisDesign, responseCustomisationDesign, responseCustomRequirementDesign, responseIntegration}, condition, 
      // hasFteValue, 
      false,
      settingParameters, isSnapshotModeEnable)
    const responseSupportHandover = await generateSupportHandoverMValue(inititlaData, {responseAnalisisDesign, responseCustomisationDesign, responseCustomRequirementDesign, responseIntegration}, condition, 
      // hasFteValue, 
      false,
      settingParameters, isSnapshotModeEnable)
    const responsePostGoLive = await generatePostGoLiveMValue(inititlaData, {responseAnalisisDesign, responseCustomisationDesign, responseCustomRequirementDesign, responseIntegration}, condition, 
      // hasFteValue, 
      false,
      settingParameters, isSnapshotModeEnable);

    // const responseProjectManagementSub = await calculateProjectManagerEstimateResource(inititlaData, {responseAnalisisDesign, responseCustomisationDesign, responseCustomRequirementDesign, responseIntegration});
    const {parameterModel} = inititlaData;
    if (parameterModel?.length) {
      // ################################ESTIMATE AVERAGE RATE################################
      let { hoursPerday, hourlyRate } = parameterModel[0];
      
      
      if (hasParameters) {
        hoursPerday = checkTypeparseFloat(settingParameters?.formattedData[
          parameterKeyIndex.hoursPerDay
        ]?.currentValue || '0')
        hourlyRate = {
          ...hourlyRate,
          value: parseFloat(settingParameters?.formattedData[
            parameterKeyIndex.hourlyRate
          ]?.currentValue || '0')
        }        
      }
      resultValueAnalisisDesign = checkConditionAndGenerateValue(responseAnalisisDesign?.resultValue, hourlyRate?.value, hoursPerday, condition)      
      resultValueMSAnalisisDesign = checkConditionAndGenerateValue(responseAnalisisDesign?.resultValueMS, hourlyRate?.value, hoursPerday, condition)
      resultValueMSCAnalisisDesign = checkConditionAndGenerateValue(responseAnalisisDesign?.resultValueMSC, hourlyRate?.value, hoursPerday, condition)
      resultValueAnalisisDesignBase = checkConditionAndGenerateValue(responseAnalisisDesign?.resultBaseValue, hourlyRate?.value, hoursPerday, condition)
      resultValueMSAnalisisDesignBase = checkConditionAndGenerateValue(responseAnalisisDesign?.resultBaseValueMS, hourlyRate?.value, hoursPerday, condition)
      resultValueMSCAnalisisDesignBase = checkConditionAndGenerateValue(responseAnalisisDesign?.resultBaseValueMSC, hourlyRate?.value, hoursPerday, condition)
      resultValueAnalisisDesignModule = checkConditionAndGenerateValue(responseAnalisisDesign?.resultModuleValue, hourlyRate?.value, hoursPerday, condition)
      resultValueMSAnalisisDesignModule = checkConditionAndGenerateValue(responseAnalisisDesign?.resultModuleValueMS, hourlyRate?.value, hoursPerday, condition)
      resultValueMSCAnalisisDesignModule = checkConditionAndGenerateValue(responseAnalisisDesign?.resultModuleValueMSC, hourlyRate?.value, hoursPerday, condition)
      estimageAveRateAnalysisDesignSidePane = costReportMainObject({// resultModuleNumber
        resultValue: resultValueAnalisisDesign,
        resultValueMS: resultValueMSAnalisisDesign,
        resultValueMSC: resultValueMSCAnalisisDesign,
      }, {
        resultValue: responseAnalisisDesign?.resultValue,
        resultValueMS: responseAnalisisDesign?.resultValueMS,
        resultValueMSC: responseAnalisisDesign?.resultValueMSC,
      }, hourlyRate?.value, hoursPerday, condition, "AnalysisDesign", responseAnalisisDesign, {
        resultValueBase: resultValueAnalisisDesignBase,
        resultValueMSBase: resultValueMSAnalisisDesignBase,
        resultValueMSCBase: resultValueMSCAnalisisDesignBase,
      }, {
        resultValueModule: resultValueAnalisisDesignModule,
        resultValueMSModule: resultValueMSAnalisisDesignModule,
        resultValueMSCModule: resultValueMSCAnalisisDesignModule,
        totalModules: responseAnalisisDesign?.resultModuleNumber
      });

      resultValueCustomisationDesign = checkConditionAndGenerateValue(responseCustomisationDesign?.customisation?.resultValue, hourlyRate?.value, hoursPerday, condition);
      resultValueMSCustomisationDesign = checkConditionAndGenerateValue(responseCustomisationDesign?.customisation?.resultValueMS, hourlyRate?.value, hoursPerday, condition);
      resultValueMSCCustomisationDesign = checkConditionAndGenerateValue(responseCustomisationDesign?.customisation?.resultValueMSC, hourlyRate?.value, hoursPerday, condition);
      resultValueCustomisationDesignBase = checkConditionAndGenerateValue(responseCustomisationDesign?.customisation?.resultBaseValue, hourlyRate?.value, hoursPerday, condition)
      resultValueMSCustomisationDesignBase = checkConditionAndGenerateValue(responseCustomisationDesign?.customisation?.resultBaseValueMS, hourlyRate?.value, hoursPerday, condition)
      resultValueMSCCustomisationDesignBase = checkConditionAndGenerateValue(responseCustomisationDesign?.customisation?.resultBaseValueMSC, hourlyRate?.value, hoursPerday, condition)
      estimageAveRateCustomisationDesignSidePane = costReportMainObject({
          resultValue: resultValueCustomisationDesign,
          resultValueMS: resultValueMSCustomisationDesign,
          resultValueMSC: resultValueMSCCustomisationDesign,
        }, {
          resultValue: responseCustomisationDesign?.customisation?.resultValue,
          resultValueMS: responseCustomisationDesign?.customisation?.resultValueMS,
          resultValueMSC: responseCustomisationDesign?.customisation?.resultValueMSC,
        }, hourlyRate?.value, hoursPerday, condition, "CutomisationDesign", responseAnalisisDesign, {
          resultValueBase: resultValueCustomisationDesignBase,
          resultValueMSBase: resultValueMSCustomisationDesignBase,
          resultValueMSCBase: resultValueMSCCustomisationDesignBase,
        }, {
          resultValueModule: 0,
          resultValueMSModule: 0,
          resultValueMSCModule: 0,
        }, true);

      resultValueCustomRequirementDesign = checkConditionAndGenerateValue(responseCustomRequirementDesign?.customRequirement?.resultValue, hourlyRate?.value, hoursPerday, condition);
      resultValueMSCustomRequirementDesign = checkConditionAndGenerateValue(responseCustomRequirementDesign?.customRequirement?.resultValueMS, hourlyRate?.value, hoursPerday, condition);
      resultValueMSCCustomRequirementDesign = checkConditionAndGenerateValue(responseCustomRequirementDesign?.customRequirement?.resultValueMSC, hourlyRate?.value, hoursPerday, condition);
      estimageAveRateCustomerRequirementDesignSidePane = costReportMainObject({
          resultValue: resultValueCustomRequirementDesign,
          resultValueMS: resultValueMSCustomRequirementDesign,
          resultValueMSC: resultValueMSCCustomRequirementDesign,
        }, {
          resultValue: responseCustomRequirementDesign?.customRequirement?.resultValue,
          resultValueMS: responseCustomRequirementDesign?.customRequirement?.resultValueMS,
          resultValueMSC: responseCustomRequirementDesign?.customRequirement?.resultValueMSC,
        }, hourlyRate?.value, hoursPerday, condition)

      resultValueDocumentation = checkConditionAndGenerateValue(responseDocumentation?.documentation?.resultValue, hourlyRate?.value, hoursPerday, condition);
      resultValueMSDocumentation = checkConditionAndGenerateValue(responseDocumentation?.documentation?.resultValueMS, hourlyRate?.value, hoursPerday, condition);
      resultValueMSCDocumentation = checkConditionAndGenerateValue(responseDocumentation?.documentation?.resultValueMSC, hourlyRate?.value, hoursPerday, condition);
      estimageAveRateCustomerDocumentationSidePane = costReportMainObject({
          resultValue: resultValueDocumentation,
          resultValueMS: resultValueMSDocumentation,
          resultValueMSC: resultValueMSCDocumentation,
        }, {
          resultValue: responseDocumentation?.documentation?.resultValue,
          resultValueMS: responseDocumentation?.documentation?.resultValueMS,
          resultValueMSC: responseDocumentation?.documentation?.resultValueMSC,
        }, hourlyRate?.value, hoursPerday, condition)

      resultValueDesignReview = checkConditionAndGenerateValue(responseDesignReview?.designReview?.resultValue, hourlyRate?.value, hoursPerday, condition);
      resultValueMSDesignReview = checkConditionAndGenerateValue(responseDesignReview?.designReview?.resultValueMS, hourlyRate?.value, hoursPerday, condition);
      resultValueMSCDesignReview = checkConditionAndGenerateValue(responseDesignReview?.designReview?.resultValueMSC, hourlyRate?.value, hoursPerday, condition);
      estimageAveRateCustomerDesignReviewSidePane = costReportMainObject({
          resultValue: resultValueDesignReview,
          resultValueMS: resultValueMSDesignReview,
          resultValueMSC: resultValueMSCDesignReview,
        }, {
          resultValue: responseDesignReview?.designReview?.resultValue,
          resultValueMS: responseDesignReview?.designReview?.resultValueMS,
          resultValueMSC: responseDesignReview?.designReview?.resultValueMSC,
        }, hourlyRate?.value, hoursPerday, condition)

      resultValueConfiguration = checkConditionAndGenerateValue(responseAnalisisDesign?.configuration?.resultValue, hourlyRate?.value, hoursPerday, condition)
      resultValueMSConfiguration = checkConditionAndGenerateValue(responseAnalisisDesign?.configuration?.resultValueMS, hourlyRate?.value, hoursPerday, condition)
      resultValueMSCConfiguration = checkConditionAndGenerateValue(responseAnalisisDesign?.configuration?.resultValueMSC, hourlyRate?.value, hoursPerday, condition)
      resultValueConfigurationBase = checkConditionAndGenerateValue(responseAnalisisDesign?.configuration?.resultBaseValue, hourlyRate?.value, hoursPerday, condition)
      resultValueMSConfigurationBase = checkConditionAndGenerateValue(responseAnalisisDesign?.configuration?.resultBaseValueMS, hourlyRate?.value, hoursPerday, condition)
      resultValueMSCConfigurationBase = checkConditionAndGenerateValue(responseAnalisisDesign?.configuration?.resultBaseValueMSC, hourlyRate?.value, hoursPerday, condition)
      resultValueConfigurationModule = checkConditionAndGenerateValue(responseAnalisisDesign?.configuration?.resultModuleValue, hourlyRate?.value, hoursPerday, condition)
      resultValueMSConfigurationModule = checkConditionAndGenerateValue(responseAnalisisDesign?.configuration?.resultModuleValueMS, hourlyRate?.value, hoursPerday, condition)
      resultValueMSCConfigurationModule = checkConditionAndGenerateValue(responseAnalisisDesign?.configuration?.resultModuleValueMSC, hourlyRate?.value, hoursPerday, condition)
      estimageAveRateCustomerConfigurationSidePane = costReportMainObject({
          resultValue: resultValueConfiguration,
          resultValueMS: resultValueMSConfiguration,
          resultValueMSC: resultValueMSCConfiguration,
        }, {
          resultValue: responseAnalisisDesign?.configuration?.resultValue,
          resultValueMS: responseAnalisisDesign?.configuration?.resultValueMS,
          resultValueMSC: responseAnalisisDesign?.configuration?.resultValueMSC,
        }, hourlyRate?.value, hoursPerday, condition, "Configuration", responseAnalisisDesign?.configuration, {
          resultValueBase: resultValueConfigurationBase,
          resultValueMSBase: resultValueMSConfigurationBase,
          resultValueMSCBase: resultValueMSCConfigurationBase,
        }, {
          resultValueModule: resultValueConfigurationModule,
          resultValueMSModule: resultValueMSConfigurationModule,
          resultValueMSCModule: resultValueMSCConfigurationModule,
          totalModules: responseAnalisisDesign?.configuration?.resultModuleNumber
        })

      resultValueIntegration = checkConditionAndGenerateValue(responseIntegration?.integration?.resultValue, hourlyRate?.value, hoursPerday, condition)
      resultValueMSIntegration = checkConditionAndGenerateValue(responseIntegration?.integration?.resultValueMS, hourlyRate?.value, hoursPerday, condition)
      resultValueMSCIntegration = checkConditionAndGenerateValue(responseIntegration?.integration?.resultValueMSC, hourlyRate?.value, hoursPerday, condition)
      estimageAveRateCustomerIntegrationSidePane = costReportMainObject({
          resultValue: resultValueIntegration,
          resultValueMS: resultValueMSIntegration,
          resultValueMSC: resultValueMSCIntegration,
        }, {
          resultValue: responseIntegration?.integration?.resultValue,
          resultValueMS: responseIntegration?.integration?.resultValueMS,
          resultValueMSC: responseIntegration?.integration?.resultValueMSC,
        }, hourlyRate?.value, hoursPerday, condition)

      // integration pending

      resultValueCustomisationBuild = checkConditionAndGenerateValue(responseCustomisationDesign?.customisationBuild?.resultValue, hourlyRate?.value, hoursPerday, condition);
      resultValueMSCustomisationBuild = checkConditionAndGenerateValue(responseCustomisationDesign?.customisationBuild?.resultValueMS, hourlyRate?.value, hoursPerday, condition);
      resultValueMSCCustomisationBuild = checkConditionAndGenerateValue(responseCustomisationDesign?.customisationBuild?.resultValueMSC, hourlyRate?.value, hoursPerday, condition);
      resultValueCustomisationBuildBase = checkConditionAndGenerateValue(responseCustomisationDesign?.customisationBuild?.resultBaseValue, hourlyRate?.value, hoursPerday, condition)
      resultValueMSCustomisationBuildBase = checkConditionAndGenerateValue(responseCustomisationDesign?.customisationBuild?.resultBaseValueMS, hourlyRate?.value, hoursPerday, condition)
      resultValueMSCCustomisationBuildBase = checkConditionAndGenerateValue(responseCustomisationDesign?.customisationBuild?.resultBaseValueMSC, hourlyRate?.value, hoursPerday, condition)
      estimageAveRateCustomerCustomisationBuildSidePane = costReportMainObject({
          resultValue: resultValueCustomisationBuild,
          resultValueMS: resultValueMSCustomisationBuild,
          resultValueMSC: resultValueMSCCustomisationBuild,
        }, {
          resultValue: responseCustomisationDesign?.customisationBuild?.resultValue,
          resultValueMS: responseCustomisationDesign?.customisationBuild?.resultValueMS,
          resultValueMSC: responseCustomisationDesign?.customisationBuild?.resultValueMSC,
        }, hourlyRate?.value, hoursPerday, condition, "CutomisationBuild", responseAnalisisDesign, {
          resultValueBase: resultValueCustomisationBuildBase,
          resultValueMSBase: resultValueMSCustomisationBuildBase,
          resultValueMSCBase: resultValueMSCCustomisationBuildBase,
        }, {
          resultValueModule: 0,
          resultValueMSModule: 0,
          resultValueMSCModule: 0,
        }, true)

      resultValueCustomRequirementBuild = checkConditionAndGenerateValue(responseCustomRequirementDesign?.customRequirementBuild?.resultValue, hourlyRate?.value, hoursPerday, condition);
      resultValueMSCustomRequirementBuild = checkConditionAndGenerateValue(responseCustomRequirementDesign?.customRequirementBuild?.resultValueMS, hourlyRate?.value, hoursPerday, condition);
      resultValueMSCCustomRequirementBuild = checkConditionAndGenerateValue(responseCustomRequirementDesign?.customRequirementBuild?.resultValueMSC, hourlyRate?.value, hoursPerday, condition);
      estimageAveRateCustomerCustomRequirementBuildSidePane = costReportMainObject({
        resultValue: resultValueCustomRequirementBuild,
        resultValueMS: resultValueMSCustomRequirementBuild,
        resultValueMSC: resultValueMSCCustomRequirementBuild,
      }, {
        resultValue: responseCustomRequirementDesign?.customRequirementBuild?.resultValue,
        resultValueMS: responseCustomRequirementDesign?.customRequirementBuild?.resultValueMS,
        resultValueMSC: responseCustomRequirementDesign?.customRequirementBuild?.resultValueMSC,
      }, hourlyRate?.value, hoursPerday, condition)
      
      resultValueDocumentLayout = checkConditionAndGenerateValue(responseDocumentLayout?.documentLayout?.resultValue, hourlyRate?.value, hoursPerday, condition);
      resultValueMSDocumentLayout = checkConditionAndGenerateValue(responseDocumentLayout?.documentLayout?.resultValueMS, hourlyRate?.value, hoursPerday, condition);
      resultValueMSCDocumentLayout = checkConditionAndGenerateValue(responseDocumentLayout?.documentLayout?.resultValueMSC, hourlyRate?.value, hoursPerday, condition);
      estimageAveRateDocumentLayoutSidePane = costReportMainObject({
          resultValue: resultValueDocumentLayout,
          resultValueMS: resultValueMSDocumentLayout,
          resultValueMSC: resultValueMSCDocumentLayout,
        }, {
          resultValue: responseDocumentLayout?.documentLayout?.resultValue,
          resultValueMS: responseDocumentLayout?.documentLayout?.resultValueMS,
          resultValueMSC: responseDocumentLayout?.documentLayout?.resultValueMSC,
        }, hourlyRate?.value, hoursPerday, condition)

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
      resultValueAnalisisDesignEstimateResource = generateEstimateResourceValue(
        inititlaData, {
          M: (responseAnalisisDesign?.resultValue || 0),
          'M/S': (responseAnalisisDesign?.resultValueMS || 0),
          "M/S/C": (responseAnalisisDesign?.resultValueMSC || 0),
        },
        responseAnalisisDesign,
        'Analysis and Design',
        'All',
        condition,
        settingParameters, 
        isSnapshotModeEnable
      );            

      resultValueCustomisationDesignEstimateResource = generateEstimateResourceValue(
        inititlaData, {
          M: (responseCustomisationDesign?.customisation?.resultValue || 0),
          'M/S': (responseCustomisationDesign?.customisation?.resultValueMS || 0),
          "M/S/C": (responseCustomisationDesign?.customisation?.resultValueMSC || 0),
        },
        responseCustomisationDesign?.customisation,
        'Customisations (Design)',
        'All',
        condition,
        settingParameters, 
        isSnapshotModeEnable
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
        condition,
        settingParameters, 
        isSnapshotModeEnable
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
        condition,
        settingParameters, 
        isSnapshotModeEnable
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
        condition,
        settingParameters, 
        isSnapshotModeEnable
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
        condition,
        settingParameters, 
        isSnapshotModeEnable
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
        condition,
        settingParameters, 
        isSnapshotModeEnable,
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
        condition,
        settingParameters, 
        isSnapshotModeEnable
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
        condition,
        settingParameters, 
        isSnapshotModeEnable
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
        condition,
        settingParameters, 
        isSnapshotModeEnable
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
        condition,
        settingParameters, 
        isSnapshotModeEnable
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
        condition,
        settingParameters, 
        isSnapshotModeEnable
      );

      resultValueCRPEstimateResource = generateEstimateResourceValue(
        inititlaData, {
          M: (responseCRP?.crp?.resultValue || 0),
          'M/S': (responseCRP?.crp?.resultValueMS || 0),
          "M/S/C": (responseCRP?.crp?.resultValueMSC || 0),
        },
        responseCRP?.crp,
        // ?.resultValue,
        'CRP',
        'All',
        condition,
        settingParameters, 
        isSnapshotModeEnable
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
        condition,
        settingParameters, 
        isSnapshotModeEnable
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
        condition,
        settingParameters, 
        isSnapshotModeEnable
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
        condition,
        settingParameters, 
        isSnapshotModeEnable
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
        condition,
        settingParameters, 
        isSnapshotModeEnable
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
        condition,
        settingParameters, 
        isSnapshotModeEnable
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
        condition,
        settingParameters, 
        isSnapshotModeEnable
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
        condition,
        settingParameters, 
        isSnapshotModeEnable
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
        condition,
        settingParameters,
        isSnapshotModeEnable
      );
      
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

      const responseProjectManagementSub = await calculateProjectManagerEstimateResource(inititlaData, {responseAnalisisDesign, responseCustomisationDesign, responseCustomRequirementDesign, responseIntegration}, totalOfSub, settingParameters, isSnapshotModeEnable);


      resultValueProjectManagerEstimateResource = generateEstimateResourceValue(
        inititlaData, {
          M: (responseProjectManagementSub?.resultValue || 0),
          'M/S': (responseProjectManagementSub?.resultValueMS || 0),
          "M/S/C": (responseProjectManagementSub?.resultValueMSC || 0),
        },
        {},
        'Project Manager',
        'All',
        condition,
        settingParameters,
        isSnapshotModeEnable
      );

    }    

    ////////////////ESTIMATE RESOURCE MILESTONE START///////////////    
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
      },
      reducerValues: {
        estimageAveRateAnalysisDesignSidePane,
        estimageAveRateCustomisationDesignSidePane,
        estimageAveRateCustomerRequirementDesignSidePane,
        estimageAveRateCustomerDocumentationSidePane,
        estimageAveRateCustomerDesignReviewSidePane,
        estimageAveRateCustomerConfigurationSidePane,
        estimageAveRateCustomerIntegrationSidePane,
        estimageAveRateCustomerCustomisationBuildSidePane,
        estimageAveRateCustomerCustomRequirementBuildSidePane,
        estimageAveRateDocumentLayoutSidePane,
      },
      fitGapTab: responseAnalisisDesign?.fitGapTab,
      fitGapAllMoscowTab: responseAnalisisDesign?.fitGapAllMoscowTab,
      fitGapGapMoscowTab: responseAnalisisDesign?.fitGapGapMoscowTab,
      fitGapWithoutGapMoscow: responseAnalisisDesign?.fitGapWithoutGapMoscow,
    };
  } catch (error) {
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

export const costReportMainObject = (values: any, subValues: any, hourlyRate: number, hoursPerday: number, condition: boolean, type?: string, typeData?: any, baseValue?: any, moduleValues?: any, returnModule = false) => {
  const object: any = {
    M: {
      value: values?.resultValue,
      hourlyRate: hourlyRate,
      hoursPerday,
      subValue: subValues?.resultValue,
      logic: condition ? 'Effort * hourlyRate * hoursPerday' : 'Effort * hourlyRate',
      shown: condition ? `${subValues?.resultValue} * ${hourlyRate} * ${hoursPerday}` : `${subValues?.resultValue} * ${hourlyRate}`,
    },
    MS: {
      value: values?.resultValueMS,
      hourlyRate: hourlyRate,
      hoursPerday,
      subValue: subValues?.resultValueMS,
      logic: condition ? 'Effort * hourlyRate * hoursPerday' : 'Effort * hourlyRate',
      shown: condition ? `${subValues?.resultValueMS} * ${hourlyRate} * ${hoursPerday}` : `${subValues?.resultValue} * ${hourlyRate}`,
    },
    MSC: {
      value: values?.resultValueMSC,
      hourlyRate: hourlyRate,
      hoursPerday,
      subValue: subValues?.resultValueMSC,
      logic: condition ? 'Effort * hourlyRate * hoursPerday' : 'Effort * hourlyRate',
      shown: condition ? `${subValues?.resultValueMSC} * ${hourlyRate} * ${hoursPerday}` : `${subValues?.resultValue} * ${hourlyRate}`,
    }
  };
  if (type) {
    object.M.resultModule = moduleReturn(returnModule, typeData.resultModule);
    object.MS.resultModule = moduleReturn(returnModule, typeData.resultModuleMS);
    object.MSC.resultModule = moduleReturn(returnModule, typeData.resultModuleMSC);
    object.M.resultOverideModule = moduleReturn(returnModule, typeData.resultOverideModule);
    object.MS.resultOverideModule = moduleReturn(returnModule, typeData.resultOverideModuleMS);
    object.MSC.resultOverideModule = moduleReturn(returnModule, typeData.resultOverideModuleMSC);
    object.M.resultBase = typeData.resultBase;
    object.MS.resultBase = typeData.resultBaseMS;
    object.MSC.resultBase = typeData.resultBaseMSC;
    object.M.resultOverideBase = moduleReturn(returnModule, typeData.resultOverideBase);
    object.MS.resultOverideBase = moduleReturn(returnModule, typeData.resultOverideBaseMS);
    object.MSC.resultOverideBase = moduleReturn(returnModule, typeData.resultOverideBaseMSC);
    object.M.baseValue = baseValue?.resultValueBase;
    object.M.moduleValue = moduleReturn(returnModule, moduleValues?.resultValueModule);
    object.MS.baseValue = baseValue?.resultValueMSBase;
    object.MS.moduleValue = moduleReturn(returnModule, moduleValues?.resultValueMSModule);
    object.MSC.baseValue = baseValue?.resultValueMSCBase;
    object.MSC.moduleValue = moduleReturn(returnModule, moduleValues?.resultValueMSCModule);
    object.M.totalNumberOfModules = typeData?.resultModuleNumber;
    object.MS.totalNumberOfModules = typeData?.resultModuleNumber;
    object.MSC.totalNumberOfModules = typeData?.resultModuleNumber;
  }
  return object;
}

const moduleReturn = (returnModule: boolean, value: any) => {
  return returnModule ? null : value;
}

export const checkConditionAndGenerateValue = (calculatedValue: number, hourlyRate: number, hoursPerDay: number, condition: boolean) => {
  if (condition) {
    return calculatedValue * hourlyRate * hoursPerDay || 0;
  }
  return calculatedValue * hourlyRate || 0;
}

// C5 value generate
export const generateAnalysisDesignMValue = async(inititlaData: any, condition: boolean, settingParameters?: any, isSnapshotModeEnable?: boolean) => {
   // need to check with 'Estimate - Resource Milestone'!$C$1
  const hasParameters = settingParameters && isSnapshotModeEnable
  let resultValue = 0;
  let resultValueMS = 0;
  let resultValueMSC = 0;
  let x = 0
  let y = 0;

  // ANALYSIS DESIGN
  let modulesAnalysisDesign: any = [];
  let modulesAnalysisDesignMS: any = [];
  let modulesAnalysisDesignMSC: any = [];

  let overidesModulesAnalysisDesign: any = [];
  let overidesModulesAnalysisDesignMS: any = [];
  let overidesModulesAnalysisDesignMSC: any = [];

  let baseAnalysisDesign: any = [];
  let baseAnalysisDesignMS: any = [];
  let baseAnalysisDesignMSC: any = [];

  let overidesBaseAnalysisDesign: any = [];
  let overidesBaseAnalysisDesignMS: any = [];
  let overidesBaseAnalysisDesignMSC: any = [];

  // CONFIGURATION
  let modulesConfiguration: any = [];
  let modulesConfigurationMS: any = [];
  let modulesConfigurationMSC: any = [];

  let overidesModulesConfiguration: any = [];
  let overidesModulesConfigurationMS: any = [];
  let overidesModulesConfigurationMSC: any = [];

  let baseConfiguration: any = [];
  let baseConfigurationMS: any = [];
  let baseConfigurationMSC: any = [];

  let overidesBaseConfiguration: any = [];
  let overidesBaseConfigurationMS: any = [];
  let overidesBaseConfigurationMSC: any = [];

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
  let primaryResourceConfigurationValueFromBaseData = 0
  let secondaryResourceConfigurationValueFromBaseData = 0
  let buildEstimateConfigurationValueFromModlueData = 0;
  let primaryResourceConfigurationValueFromModuleData = 0;
  let secondaryResourceConfigurationValueFromModuleData = 0;

  let buildEstimateConfigurationValueFromBaseDataMS = 0;
  let primaryResourceConfigurationValueFromBaseDataMS = 0
  let secondaryResourceConfigurationValueFromBaseDataMS = 0
  let buildEstimateConfigurationValueFromModlueDataMS = 0;
  let primaryResourceConfigurationValueFromModuleDataMS = 0;
  let secondaryResourceConfigurationValueFromModuleDataMS = 0;

  let buildEstimateConfigurationValueFromBaseDataMSC = 0;
  let primaryResourceConfigurationValueFromBaseDataMSC = 0
  let secondaryResourceConfigurationValueFromBaseDataMSC = 0
  let buildEstimateConfigurationValueFromModlueDataMSC = 0;
  let primaryResourceConfigurationValueFromModuleDataMSC = 0;
  let secondaryResourceConfigurationValueFromModuleDataMSC = 0;

  const seenModuleConfigurationMIds = new Set();
  const seenModuleConfigurationMSIds = new Set();
  const seenModuleConfigurationMSCIds = new Set();

  const fitGapModules = new Set();
  let fitGapRecords: any[] = [];
  let fitGapMoscowRecords: any[] = [];
  let fitGapGapMoscowRecords: any[] = [];
  let fitGapWithoutGapRecords: any[] = [];

  let fitGapValue = fitGapObject;
  try {
    const {BaseData, resourceModelData, ModuleData, parameterModel} = inititlaData
    let {hoursPerday} = parameterModel[0];
    if (hasParameters) {
      hoursPerday = parseFloat(settingParameters?.formattedData[
        parameterKeyIndex.hoursPerDay
      ]?.currentValue || '0')
    }

    if (inititlaData) {
      // let response: any;
      // BASE DATA LOOP
      const baseLoop = await BaseData && BaseData.length && BaseData.map(async(baseItem: any, baseIndex: number) => {
        const {allResources} = baseItem;
        // let response = {
        //   fitGapRecords,
        //   fitGapMoscowRecords,
        //   fitGapGapMoscowRecords,
        //   fitGapWithoutGapRecords,
        // };
        // console.log('x ==> ', baseItem?.module?.name);
          
        // console.log('2222 ==> ', baseItem?.module?.id == '641dfbc7-ff5b-ec11-8f8f-000d3ad652a4', fitGapModules.has(baseItem?.module?.id));
        
        // if (fitGapModules.has(baseItem?.module?.id)) {
        //   // fitGapRecords 
        //   console.log('we2');
          
        //   response = await fitGapHanlder(baseItem, fitGapRecords, fitGapMoscowRecords, fitGapGapMoscowRecords, fitGapWithoutGapRecords);
        //   console.log('wwww ==> ', response);
          

        // } else {
        //   console.log('qq');
          
        //   fitGapModules.add(baseItem?.module?.id)
        //   fitGapRecords.push({
        //     ...fitGapObject,
        //     moduleName: baseItem?.module?.name,
        //     moduleId: baseItem?.module?.id,
        //   });
        //   fitGapMoscowRecords.push({
        //     ...fitGapMoscowObject,
        //     moduleName: baseItem?.module?.name,
        //     moduleId: baseItem?.module?.id,
        //   })
        //   fitGapGapMoscowRecords.push({
        //     ...fitGapMoscowObject,
        //     moduleName: baseItem?.module?.name,
        //     moduleId: baseItem?.module?.id,
        //   })
        //   fitGapWithoutGapRecords.push({
        //     ...fitGapMoscowObject,
        //     moduleName: baseItem?.module?.name,
        //     moduleId: baseItem?.module?.id,
        //   })
        //   // fitGapRecords = 
        //   response = await fitGapHanlder(baseItem, fitGapRecords, fitGapMoscowRecords, fitGapGapMoscowRecords, fitGapWithoutGapRecords);
        //   console.log('wwww2222 ==> ', response);
        // }
        // console.log('response ==> ', response);
        
        // fitGapRecords = response?.fitGapRecords;
        // fitGapMoscowRecords = response?.fitGapMoscowRecords;
        // fitGapGapMoscowRecords = response?.fitGapGapMoscowRecords;
        // fitGapWithoutGapRecords = response?.fitGapWithoutGapRecords;

        // && baseItem?.module?.name != "Assembly - BC"
        // Assembly - BC
        // ANALYSIS AND DESING
        // Must
        // Removed this "Cost Accounting - BC" 18 jan 
        // if (moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000000] && (fitGapData[baseItem?.fitGap] != fitGapData[100000001]) && (baseItem?.module?.name != "Cost Accounting - BC")

        if (moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000000] && (fitGapData[baseItem?.fitGap] != fitGapData[100000001])
          ) {
          //
          if (baseItem?.entityName != 'Master') {
            overidesBaseAnalysisDesign.push(baseItem);
          } else {
            baseAnalysisDesign.push(baseItem);
          }
          const res = baseReader(baseItem, primaryResourceDesignValueFromBaseData, secondaryResourceDesignValueFromBaseData, x);
          primaryResourceDesignValueFromBaseData = res.primaryResourceDesignValueFromBaseData;
          secondaryResourceDesignValueFromBaseData = res.secondaryResourceDesignValueFromBaseData;
        }

        // Must Should
        if ((moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000000] || moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000001]) && fitGapData[baseItem?.fitGap] != fitGapData[100000001]) {
          //
          if (baseItem?.entityName != 'Master') {
            overidesBaseAnalysisDesignMS.push(baseItem);
          } else {
            baseAnalysisDesignMS.push(baseItem);
          }
          const res = baseReader(baseItem, primaryResourceDesignValueFromBaseDataMS, secondaryResourceDesignValueFromBaseDataMS, x);
          primaryResourceDesignValueFromBaseDataMS = res.primaryResourceDesignValueFromBaseData;
          secondaryResourceDesignValueFromBaseDataMS = res.secondaryResourceDesignValueFromBaseData;
        }

        // Must Should Could
        if ((moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000000] || moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000001] || moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000002]) && fitGapData[baseItem?.fitGap] != fitGapData[100000001]) {
          //
          if (baseItem?.entityName != 'Master') {
            overidesBaseAnalysisDesignMSC.push(baseItem);
          } else {
            baseAnalysisDesignMSC.push(baseItem);
          }
          const res = baseReader(baseItem, primaryResourceDesignValueFromBaseDataMSC, secondaryResourceDesignValueFromBaseDataMSC, x);
          primaryResourceDesignValueFromBaseDataMSC = res.primaryResourceDesignValueFromBaseData;
          secondaryResourceDesignValueFromBaseDataMSC = res.secondaryResourceDesignValueFromBaseData;
        }

        // CONFIGURATION
        // Must
        // Removed this Cost Accounting - BC
        // if (moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000000] && fitGapData[baseItem?.fitGap] != fitGapData[100000001] && baseItem?.module?.name != "Cost Accounting - BC") {
          if (moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000000] && fitGapData[baseItem?.fitGap] != fitGapData[100000001]) {
          if (baseItem?.entityName != 'Master') {
            overidesBaseConfiguration.push(baseItem);
          } else {
            baseConfiguration.push(baseItem);
          }
          // (baseItem?.designEstimate * (baseItem?.resourceSplit / 100)) * baseItem?.quantity
          // new addding
          const res = baseReaderConfiguration(baseItem, primaryResourceConfigurationValueFromBaseData, secondaryResourceConfigurationValueFromBaseData, x);
          primaryResourceConfigurationValueFromBaseData = res.primaryResourceConfigurationValueFromBaseData;
          secondaryResourceConfigurationValueFromBaseData = res.secondaryResourceConfigurationValueFromBaseData;

          buildEstimateConfigurationValueFromBaseData += 
          baseItem?.quantity > 0 ? baseItem?.buildEstimate * (baseItem?.resourceSplit / 100) * baseItem?.quantity : baseItem?.buildEstimate * (baseItem?.resourceSplit / 100)
          
        }

        // Must Should
        if ((moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000000] || moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000001]) && fitGapData[baseItem?.fitGap] != fitGapData[100000001]) {
        // if ((moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000000] || moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000001]) && fitGapData[baseItem?.fitGap] != fitGapData[100000001] && baseItem?.module?.name != "Cost Accounting - BC") {
          if (baseItem?.entityName != 'Master') {
            overidesBaseConfigurationMS.push(baseItem);
          } else {
            baseConfigurationMS.push(baseItem);
          }
          // new addding
          const res = baseReaderConfiguration(baseItem, primaryResourceConfigurationValueFromBaseDataMS, secondaryResourceConfigurationValueFromBaseDataMS, x);
          primaryResourceConfigurationValueFromBaseDataMS = res.primaryResourceConfigurationValueFromBaseData;
          secondaryResourceConfigurationValueFromBaseDataMS = res.secondaryResourceConfigurationValueFromBaseData;

          buildEstimateConfigurationValueFromBaseDataMS += 
          baseItem?.quantity > 0 ? baseItem?.buildEstimate * (baseItem?.resourceSplit / 100) * baseItem?.quantity : baseItem?.buildEstimate * (baseItem?.resourceSplit / 100)
        }

        // Must Should Could
        // if ((moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000000] || moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000001] || moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000002]) && fitGapData[baseItem?.fitGap] != fitGapData[100000001] && baseItem?.module?.name != "Cost Accounting - BC") {
        if ((moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000000] || moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000001] || moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000002]) && fitGapData[baseItem?.fitGap] != fitGapData[100000001]) {
        if (baseItem?.entityName != 'Master') {
            overidesBaseConfigurationMSC.push(baseItem);
          } else {
            baseConfigurationMSC.push(baseItem);
          }
          // new addding
          const res = baseReaderConfiguration(baseItem, primaryResourceConfigurationValueFromBaseDataMSC, secondaryResourceConfigurationValueFromBaseDataMSC, x);
          primaryResourceConfigurationValueFromBaseDataMSC = res.primaryResourceConfigurationValueFromBaseData;
          secondaryResourceConfigurationValueFromBaseDataMSC = res.secondaryResourceConfigurationValueFromBaseData;

          buildEstimateConfigurationValueFromBaseDataMSC += 
          baseItem?.quantity > 0 ? baseItem?.buildEstimate * (baseItem?.resourceSplit / 100) * baseItem?.quantity : baseItem?.buildEstimate * (baseItem?.resourceSplit / 100)
        }

      });
      
      const totalModules: any[] = [];
      const moduleLoop = await ModuleData && ModuleData?.length && ModuleData.map((moduleDataItem: any, moduleDataIndex: any) => {
        
        if (!totalModules.find((moduleElement) => moduleElement.moduleSeerModuleName == moduleDataItem?.moduleSeerModuleName)) {
          totalModules.push(moduleDataItem)
        }
        // Must
        // if (moscowsData?.[moduleDataItem?.seerMoscow] == moscowsData?.[100000000] && moduleDataItem?.moduleSeerModuleName != 'Cost Accounting - BC') {
        if (moscowsData?.[moduleDataItem?.seerMoscow] == moscowsData?.[100000000]) {
          if (moduleDataItem?.moduleOverrideCustomerSeerName || moduleDataItem?.moduleOverridePartnerSeerName) {
            overidesModulesAnalysisDesign.push(moduleDataItem);
          } else {
            modulesAnalysisDesign.push(moduleDataItem);
          }
          
          if (!seenModuleMIds.has(moduleDataItem?.fitGapProductSeerModule?.id)) {
            seenModuleMIds.add(moduleDataItem?.fitGapProductSeerModule?.id)
            const res = moduleReader(moduleDataItem, primaryResourceDesignValueFromModuleData, secondaryResourceDesignValueFromModuleData, y);
            primaryResourceDesignValueFromModuleData = res.primaryResourceDesignValueFromModuleData;
            secondaryResourceDesignValueFromModuleData = res.secondaryResourceDesignValueFromModuleData;
          }
        }

        // Must Should
        // if ((moscowsData?.[moduleDataItem?.seerMoscow] == moscowsData?.[100000000] || moscowsData?.[moduleDataItem?.seerMoscow] == moscowsData?.[100000001]) && moduleDataItem?.moduleSeerModuleName != 'Cost Accounting - BC') {
        if ((moscowsData?.[moduleDataItem?.seerMoscow] == moscowsData?.[100000000] || moscowsData?.[moduleDataItem?.seerMoscow] == moscowsData?.[100000001])) {
        //
          if (moduleDataItem?.moduleOverrideCustomerSeerName || moduleDataItem?.moduleOverridePartnerSeerName) {
            overidesModulesAnalysisDesignMS.push(moduleDataItem);
          } else {
            modulesAnalysisDesignMS.push(moduleDataItem);
          }
          if (!seenModuleMSIdsMS.has(moduleDataItem?.fitGapProductSeerModule?.id)) {
            seenModuleMSIdsMS.add(moduleDataItem?.fitGapProductSeerModule?.id)
            const res = moduleReader(moduleDataItem, primaryResourceDesignValueFromModuleDataMS, secondaryResourceDesignValueFromModuleDataMS, y);
            primaryResourceDesignValueFromModuleDataMS = res.primaryResourceDesignValueFromModuleData;
            secondaryResourceDesignValueFromModuleDataMS = res.secondaryResourceDesignValueFromModuleData;
          }
        }

        // Must Should Could
        // if ((moscowsData?.[moduleDataItem?.seerMoscow] == moscowsData?.[100000000] || moscowsData?.[moduleDataItem?.seerMoscow] == moscowsData?.[100000001] || moscowsData?.[moduleDataItem?.seerMoscow] == moscowsData?.[100000002]) && moduleDataItem?.moduleSeerModuleName != 'Cost Accounting - BC') {
        if ((moscowsData?.[moduleDataItem?.seerMoscow] == moscowsData?.[100000000] || moscowsData?.[moduleDataItem?.seerMoscow] == moscowsData?.[100000001] || moscowsData?.[moduleDataItem?.seerMoscow] == moscowsData?.[100000002])) {

        //
          if (moduleDataItem?.moduleOverrideCustomerSeerName || moduleDataItem?.moduleOverridePartnerSeerName) {
            overidesModulesAnalysisDesignMSC.push(moduleDataItem);
          } else {
            modulesAnalysisDesignMSC.push(moduleDataItem);
          }
          if (!seenModuleMSCIdsMSC.has(moduleDataItem?.fitGapProductSeerModule?.id)) {
            seenModuleMSCIdsMSC.add(moduleDataItem?.fitGapProductSeerModule?.id);
          
            const res = moduleReader(moduleDataItem, primaryResourceDesignValueFromModuleDataMSC, secondaryResourceDesignValueFromModuleDataMSC, y);
            primaryResourceDesignValueFromModuleDataMSC = res.primaryResourceDesignValueFromModuleData;
            secondaryResourceDesignValueFromModuleDataMSC = res.secondaryResourceDesignValueFromModuleData;
          }
        }

        // CONFIGURATION  moduleOverrideCustomerSeerEstimateBuild  moduleSeerEstimateBuild moduleOverridePartnerSeerEstimateBuild

        // Must
        // if ((moscowsData?.[moduleDataItem?.seerMoscow] == moscowsData?.[100000000]) && moduleDataItem?.moduleSeerModuleName != 'Cost Accounting - BC') {
          if ((moscowsData?.[moduleDataItem?.seerMoscow] == moscowsData?.[100000000])) {
          if (moduleDataItem?.moduleOverrideCustomerSeerName || moduleDataItem?.moduleOverridePartnerSeerName) {
            overidesModulesConfiguration.push(moduleDataItem);
          } else {
            modulesConfiguration.push(moduleDataItem);
          }
          if (!seenModuleConfigurationMIds.has(moduleDataItem?.fitGapProductSeerModule?.id)) {
            seenModuleConfigurationMIds.add(moduleDataItem?.fitGapProductSeerModule?.id)
            // new part
            const res = moduleReaderConfiguration(moduleDataItem, primaryResourceConfigurationValueFromModuleData, secondaryResourceConfigurationValueFromModuleData, y);
            primaryResourceConfigurationValueFromModuleData = res.primaryResourceConfigurationValueFromModuleData;
            secondaryResourceConfigurationValueFromModuleData = res.secondaryResourceConfigurationValueFromModuleData;

            // buildEstimateConfigurationValueFromModlueData += (
            //   moduleDataItem?.moduleOverridePartnerSeerEstimateBuild * (moduleDataItem?.moduleSeerResourceSplit / 100)
            //   ) + 
            // (moduleDataItem?.moduleOverridePartnerSeerEstimateBuild * ((100 - moduleDataItem?.moduleSeerResourceSplit) / 100))
          }
        }

        // Must Should
        // if ((moscowsData?.[moduleDataItem?.seerMoscow] == moscowsData?.[100000000] || moscowsData?.[moduleDataItem?.seerMoscow] == moscowsData?.[100000001]) && moduleDataItem?.moduleSeerModuleName != 'Cost Accounting - BC') {
        if ((moscowsData?.[moduleDataItem?.seerMoscow] == moscowsData?.[100000000] || moscowsData?.[moduleDataItem?.seerMoscow] == moscowsData?.[100000001])) {
          if (moduleDataItem?.moduleOverrideCustomerSeerName || moduleDataItem?.moduleOverridePartnerSeerName) {
            overidesModulesConfigurationMS.push(moduleDataItem);
          } else {
            modulesConfigurationMS.push(moduleDataItem);
          }
          if (!seenModuleConfigurationMSIds.has(moduleDataItem?.fitGapProductSeerModule?.id)) {
            seenModuleConfigurationMSIds.add(moduleDataItem?.fitGapProductSeerModule?.id)
            // new part
            const res = moduleReaderConfiguration(moduleDataItem, primaryResourceConfigurationValueFromModuleDataMS, secondaryResourceConfigurationValueFromModuleDataMS, y);
            primaryResourceConfigurationValueFromModuleDataMS = res.primaryResourceConfigurationValueFromModuleData;
            secondaryResourceConfigurationValueFromModuleDataMS = res.secondaryResourceConfigurationValueFromModuleData;
            // buildEstimateConfigurationValueFromModlueDataMS += (
            //   moduleDataItem?.moduleOverridePartnerSeerEstimateBuild * (moduleDataItem?.moduleSeerResourceSplit / 100)
            //   ) + 
            // (moduleDataItem?.moduleOverridePartnerSeerEstimateBuild * ((100 - moduleDataItem?.moduleSeerResourceSplit) / 100))
          }
        }

        // Must Should Could
        // if ((moscowsData?.[moduleDataItem?.seerMoscow] == moscowsData?.[100000000] || moscowsData?.[moduleDataItem?.seerMoscow] == moscowsData?.[100000001] || moscowsData?.[moduleDataItem?.seerMoscow] == moscowsData?.[100000002]) && moduleDataItem?.moduleSeerModuleName != "Cost Accounting - BC") {
        if ((moscowsData?.[moduleDataItem?.seerMoscow] == moscowsData?.[100000000] || moscowsData?.[moduleDataItem?.seerMoscow] == moscowsData?.[100000001] || moscowsData?.[moduleDataItem?.seerMoscow] == moscowsData?.[100000002])) {
          if (moduleDataItem?.moduleOverrideCustomerSeerName || moduleDataItem?.moduleOverridePartnerSeerName) {
            overidesModulesConfigurationMSC.push(moduleDataItem);
          } else {
            modulesConfigurationMSC.push(moduleDataItem);
          }
          if (!seenModuleConfigurationMSCIds.has(moduleDataItem?.fitGapProductSeerModule?.id)) {
            seenModuleConfigurationMSCIds.add(moduleDataItem?.fitGapProductSeerModule?.id)
            // new part
            const res = moduleReaderConfiguration(moduleDataItem, primaryResourceConfigurationValueFromModuleDataMSC, secondaryResourceConfigurationValueFromModuleDataMSC, y);
            primaryResourceConfigurationValueFromModuleDataMSC = res.primaryResourceConfigurationValueFromModuleData;
            secondaryResourceConfigurationValueFromModuleDataMSC = res.secondaryResourceConfigurationValueFromModuleData;

            // buildEstimateConfigurationValueFromModlueDataMSC += (
            //   moduleDataItem?.moduleOverridePartnerSeerEstimateBuild * (moduleDataItem?.moduleSeerResourceSplit / 100)
            //   ) + 
            // (moduleDataItem?.moduleOverridePartnerSeerEstimateBuild * ((100 - moduleDataItem?.moduleSeerResourceSplit) / 100))
          }
        }
      });
      // console.log('p ==>', 
      // totalModules.length, 
      // overidesModulesConfiguration.length, 
      // overidesModulesConfigurationMS.length,
      // overidesModulesConfigurationMSC.length,
      // modulesConfiguration.length,
      // modulesConfigurationMS.length,
      // modulesConfigurationMSC.length,
      // );      
      
      buildEstimateConfigurationValueFromBaseData = primaryResourceConfigurationValueFromBaseData + secondaryResourceConfigurationValueFromBaseData
      buildEstimateConfigurationValueFromBaseDataMS = primaryResourceConfigurationValueFromBaseDataMS + secondaryResourceConfigurationValueFromBaseDataMS
      buildEstimateConfigurationValueFromBaseDataMSC = primaryResourceConfigurationValueFromBaseDataMSC + secondaryResourceConfigurationValueFromBaseDataMSC 
      buildEstimateConfigurationValueFromModlueData = primaryResourceConfigurationValueFromModuleData + secondaryResourceConfigurationValueFromModuleData
      buildEstimateConfigurationValueFromModlueDataMS = primaryResourceConfigurationValueFromModuleDataMS + secondaryResourceConfigurationValueFromModuleDataMS
      buildEstimateConfigurationValueFromModlueDataMSC = primaryResourceConfigurationValueFromModuleDataMSC + secondaryResourceConfigurationValueFromModuleDataMSC
      if (parameterModel?.length) {        
        resultValue = generateReturnValue(
          primaryResourceDesignValueFromBaseData,
          secondaryResourceDesignValueFromBaseData,
          primaryResourceDesignValueFromModuleData,
          secondaryResourceDesignValueFromModuleData,
          hoursPerday,
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
          hoursPerday,
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
          hoursPerday,
          condition
        );

        resultConfigurationValue = generateReturnValue(
          buildEstimateConfigurationValueFromBaseData, 
          buildEstimateConfigurationValueFromModlueData, 0, 0, 
          hoursPerday, 
          condition
        )
        // (buildEstimateConfigurationValueFromBaseData + buildEstimateConfigurationValueFromModlueData)/parameterModel[0].hoursPerday
        resultConfigurationValueMS = generateReturnValue(
          buildEstimateConfigurationValueFromBaseDataMS, 
          buildEstimateConfigurationValueFromModlueDataMS, 0, 0, 
          hoursPerday, 
          condition
        )
        //(buildEstimateConfigurationValueFromBaseDataMS + buildEstimateConfigurationValueFromModlueDataMS)/parameterModel[0].hoursPerday
        resultConfigurationValueMSC = generateReturnValue(
          buildEstimateConfigurationValueFromBaseDataMSC, 
          buildEstimateConfigurationValueFromModlueDataMSC, 0, 0, 
          hoursPerday, 
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
      return {resultValue, resultValueMS, resultValueMSC, 
        resultModule: modulesAnalysisDesign,
        resultModuleMS: modulesAnalysisDesignMS,
        resultModuleMSC: modulesAnalysisDesignMSC,
        resultOverideModule: overidesModulesAnalysisDesign,
        resultOverideModuleMS: overidesModulesAnalysisDesignMS,
        resultOverideModuleMSC: overidesModulesAnalysisDesignMSC,
        resultBase: baseAnalysisDesign,
        resultBaseMS: baseAnalysisDesignMS,
        resultBaseMSC: baseAnalysisDesignMSC,
        resultOverideBase: overidesBaseAnalysisDesign,
        resultOverideBaseMS: overidesBaseAnalysisDesignMS,
        resultOverideBaseMSC: overidesBaseAnalysisDesignMSC,
        resultModuleNumber: totalModules?.length,
        resultModuleValue: generateReturnValue(
          0,
          0,
          primaryResourceDesignValueFromModuleData,
          secondaryResourceDesignValueFromModuleData,
          hoursPerday,
          condition
        ),
        resultModuleValueMS: generateReturnValue(
          0,
          0,
          primaryResourceDesignValueFromModuleDataMS,
          secondaryResourceDesignValueFromModuleDataMS,
          hoursPerday,
          condition
        ),
        resultModuleValueMSC: generateReturnValue(
          0,
          0,
          primaryResourceDesignValueFromModuleDataMSC,
          secondaryResourceDesignValueFromModuleDataMSC,
          hoursPerday,
          condition
        ),
        resultBaseValue: generateReturnValue(
          primaryResourceDesignValueFromBaseData,
          secondaryResourceDesignValueFromBaseData,
          0,
          0,
          hoursPerday,
          condition
        ),
        resultBaseValueMS: generateReturnValue(
          primaryResourceDesignValueFromBaseDataMS,
          secondaryResourceDesignValueFromBaseDataMS,
          0,
          0,
          hoursPerday,
          condition
        ),
        resultBaseValueMSC: generateReturnValue(
          primaryResourceDesignValueFromBaseDataMSC,
          secondaryResourceDesignValueFromBaseDataMSC,
          0,
          0,
          hoursPerday,
          condition
        ),
        configuration: {
          resultValue: resultConfigurationValue,
          resultValueMS: resultConfigurationValueMS,
          resultValueMSC: resultConfigurationValueMSC,
          resultModule: modulesConfiguration,
          resultModuleMS: modulesConfigurationMS,
          resultModuleMSC: modulesConfigurationMSC,
          resultOverideModule: overidesModulesConfiguration,
          resultOverideModuleMS: overidesModulesConfigurationMS,
          resultOverideModuleMSC: overidesModulesConfigurationMSC,
          resultBase: baseConfiguration,
          resultBaseMS: baseConfigurationMS,
          resultBaseMSC: baseConfigurationMSC,
          resultOverideBase: overidesBaseConfiguration,
          resultOverideBaseMS: overidesBaseConfigurationMS,
          resultOverideBaseMSC: overidesBaseConfigurationMSC,
          resultModuleNumber: totalModules?.length,
          resultModuleValue: generateReturnValue(
            0,
            0,
            0,
            buildEstimateConfigurationValueFromModlueData,
            hoursPerday,
            condition
          ),
          resultModuleValueMS: generateReturnValue(
            0,
            0,
            0,
            buildEstimateConfigurationValueFromModlueDataMS,
            hoursPerday,
            condition
          ),
          resultModuleValueMSC: generateReturnValue(
            0,
            0,
            0,
            buildEstimateConfigurationValueFromModlueDataMSC,
            hoursPerday,
            condition
          ),
          resultBaseValue: generateReturnValue(
            buildEstimateConfigurationValueFromBaseData,
            0,
            0,
            0,
            hoursPerday,
            condition
          ),
          resultBaseValueMS: generateReturnValue(
            buildEstimateConfigurationValueFromBaseDataMS,
            0,
            0,
            0,
            hoursPerday,
            condition
          ),
          resultBaseValueMSC: generateReturnValue(
            buildEstimateConfigurationValueFromBaseDataMSC,
            0,
            0,
            0,
            hoursPerday,
            condition
          ),
        },
        
        fitGapTab: fitGapRecords,
        fitGapAllMoscowTab: fitGapMoscowRecords,
        fitGapGapMoscowTab: fitGapGapMoscowRecords,
        fitGapWithoutGapMoscow: fitGapWithoutGapRecords,
      };
    } else {
      return {resultValue, resultValueMS, resultValueMSC, 
        resultModule: modulesAnalysisDesign,
        resultModuleMS: modulesAnalysisDesignMS,
        resultModuleMSC: modulesAnalysisDesignMSC,
        resultOverideModule: overidesModulesAnalysisDesign,
        resultOverideModuleMS: overidesModulesAnalysisDesignMS,
        resultOverideModuleMSC: overidesModulesAnalysisDesignMSC,
        resultBase: baseAnalysisDesign,
        resultBaseMS: baseAnalysisDesignMS,
        resultBaseMSC: baseAnalysisDesignMSC,
        resultOverideBase: overidesBaseAnalysisDesign,
        resultOverideBaseMS: overidesBaseAnalysisDesignMS,
        resultOverideBaseMSC: overidesBaseAnalysisDesignMSC,
        resultModuleValue: 0,
        resultModuleValueMS: 0,
        resultModuleValueMSC: 0,
        resultBaseValue: 0,
        resultBaseValueMS: 0,
        resultBaseValueMSC: 0,
        configuration: {
          resultValue: resultConfigurationValue,
          resultValueMS: resultConfigurationValueMS,
          resultValueMSC: resultConfigurationValueMSC,
          resultModule: modulesConfiguration,
          resultModuleMS: modulesConfigurationMS,
          resultModuleMSC: modulesConfigurationMSC,
          resultOverideModule: overidesModulesConfiguration,
          resultOverideModuleMS: overidesModulesConfigurationMS,
          resultOverideModuleMSC: overidesModulesConfigurationMSC,
          resultBase: baseConfiguration,
          resultBaseMS: baseConfigurationMS,
          resultBaseMSC: baseConfigurationMSC,
          resultOverideBase: overidesBaseConfiguration,
          resultOverideBaseMS: overidesBaseConfigurationMS,
          resultOverideBaseMSC: overidesBaseConfigurationMSC,
          resultModuleValue: 0,
          resultModuleValueMS: 0,
          resultModuleValueMSC: 0,
          resultBaseValue: 0,
          resultBaseValueMS: 0,
          resultBaseValueMSC: 0,
        },
        // fitGapTab: fitGapRecords,
        // fitGapAllMoscowTab: fitGapMoscowRecords,
        // fitGapGapMoscowTab: fitGapGapMoscowRecords,
        // fitGapWithoutGapMoscow: fitGapWithoutGapRecords,
      };
    }
  } catch (error) {
    return {resultValue, resultValueMS, resultValueMSC, 
      resultModule: modulesAnalysisDesign,
      resultModuleMS: modulesAnalysisDesignMS,
      resultModuleMSC: modulesAnalysisDesignMSC,
      resultOverideModule: overidesModulesAnalysisDesign,
      resultOverideModuleMS: overidesModulesAnalysisDesignMS,
      resultOverideModuleMSC: overidesModulesAnalysisDesignMSC,
      resultBase: baseAnalysisDesign,
      resultBaseMS: baseAnalysisDesignMS,
      resultBaseMSC: baseAnalysisDesignMSC,
      resultOverideBase: overidesBaseAnalysisDesign,
      resultOverideBaseMS: overidesBaseAnalysisDesignMS,
      resultOverideBaseMSC: overidesBaseAnalysisDesignMSC,
      resultModuleValue: 0,
      resultModuleValueMS: 0,
      resultModuleValueMSC: 0,
      resultBaseValue: 0,
      resultBaseValueMS: 0,
      resultBaseValueMSC: 0,
      configuration: {
        resultValue: resultConfigurationValue,
        resultValueMS: resultConfigurationValueMS,
        resultValueMSC: resultConfigurationValueMSC,
        resultModule: modulesConfiguration,
        resultModuleMS: modulesConfigurationMS,
        resultModuleMSC: modulesConfigurationMSC,
        resultOverideModule: overidesModulesConfiguration,
        resultOverideModuleMS: overidesModulesConfigurationMS,
        resultOverideModuleMSC: overidesModulesConfigurationMSC,
        resultBase: baseConfiguration,
        resultBaseMS: baseConfigurationMS,
        resultBaseMSC: baseConfigurationMSC,
        resultOverideBase: overidesBaseConfiguration,
        resultOverideBaseMS: overidesBaseConfigurationMS,
        resultOverideBaseMSC: overidesBaseConfigurationMSC,
        resultModuleValue: 0,
        resultModuleValueMS: 0,
        resultModuleValueMSC: 0,
        resultBaseValue: 0,
        resultBaseValueMS: 0,
        resultBaseValueMSC: 0,
      },
      // fitGapTab: fitGapRecords,
      // fitGapAllMoscowTab: fitGapMoscowRecords,
      // fitGapGapMoscowTab: fitGapGapMoscowRecords,
      // fitGapWithoutGapMoscow: fitGapWithoutGapRecords,
    };
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


export const baseReader = (baseItem: any, primaryResourceDesignValueFromBaseData: number, secondaryResourceDesignValueFromBaseData: number, x: number) => {
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

export const baseReaderConfiguration = (baseItem: any, primaryResourceConfigurationValueFromBaseData: number, secondaryResourceConfigurationValueFromBaseData: number, x: number) => {
  x += 1;
  if (baseItem?.quantity && baseItem?.quantity > 0) { // Quantity greaterthan 0
    // (design*(split/100))*quantity    
    primaryResourceConfigurationValueFromBaseData += (baseItem?.buildEstimate * (baseItem?.resourceSplit / 100)) * baseItem?.quantity
  } else {
    // design value
    primaryResourceConfigurationValueFromBaseData += (baseItem?.buildEstimate * (baseItem?.resourceSplit / 100))
  }

  secondaryResourceConfigurationValueFromBaseData += (baseItem?.buildEstimate * ((100 - baseItem?.resourceSplit) / 100))
  return {primaryResourceConfigurationValueFromBaseData, secondaryResourceConfigurationValueFromBaseData}
}

export const moduleReader = (moduleDataItem: any, primaryResourceDesignValueFromModuleData: number, secondaryResourceDesignValueFromModuleData: number ,y: number) => {
  y += 1;
  // design*(split/100)
  // Design*((100-Split)/100)
  // moduleSeerEstimateDesign moduleSeerResourceSplit
  // moduleOverrideCustomerSeerEstimateDesign  moduleOverrideCustomerSeerResourceSplit
  // moduleOverridePartnerSeerEstimateDesign moduleOverridePartnerSeerResourceSplit
  if (moduleDataItem?.moduleOverrideCustomerSeerEstimateDesign > 0) {
    primaryResourceDesignValueFromModuleData += 
    moduleDataItem?.moduleOverrideCustomerSeerEstimateDesign * (moduleDataItem?.moduleOverrideCustomerSeerResourceSplit / 100)

  secondaryResourceDesignValueFromModuleData += 
    moduleDataItem?.moduleOverrideCustomerSeerEstimateDesign * ((100 - moduleDataItem?.moduleOverrideCustomerSeerResourceSplit) / 100) 

  } else if (moduleDataItem?.moduleOverridePartnerSeerEstimateDesign > 0) {
    primaryResourceDesignValueFromModuleData += 
    moduleDataItem?.moduleOverridePartnerSeerEstimateDesign * (moduleDataItem?.moduleOverridePartnerSeerResourceSplit / 100) 

  secondaryResourceDesignValueFromModuleData += 
    moduleDataItem?.moduleOverridePartnerSeerEstimateDesign * ((100 - moduleDataItem?.moduleOverridePartnerSeerResourceSplit) / 100) 

  } else {
    primaryResourceDesignValueFromModuleData += 
    moduleDataItem?.moduleSeerEstimateDesign * (moduleDataItem?.moduleSeerResourceSplit / 100)

  secondaryResourceDesignValueFromModuleData += 
    moduleDataItem?.moduleSeerEstimateDesign * ((100 - moduleDataItem?.moduleSeerResourceSplit) / 100)
  }
  // primaryResourceDesignValueFromModuleData += moduleDataItem?.moduleOverridePartnerSeerEstimateDesign * (moduleDataItem?.moduleSeerResourceSplit / 100)
  // secondaryResourceDesignValueFromModuleData += moduleDataItem?.moduleOverridePartnerSeerEstimateDesign * ((100 - moduleDataItem?.moduleSeerResourceSplit) / 100)
  return {primaryResourceDesignValueFromModuleData, secondaryResourceDesignValueFromModuleData}
}


export const moduleReaderConfiguration = (moduleDataItem: any, primaryResourceConfigurationValueFromModuleData: number, secondaryResourceConfigurationValueFromModuleData: number ,y: number) => {
  y += 1;
  if (moduleDataItem?.moduleOverrideCustomerSeerEstimateBuild > 0) {
    primaryResourceConfigurationValueFromModuleData += 
      moduleDataItem?.moduleOverrideCustomerSeerEstimateBuild * (moduleDataItem?.moduleOverrideCustomerSeerResourceSplit / 100)

    secondaryResourceConfigurationValueFromModuleData += 
      moduleDataItem?.moduleOverrideCustomerSeerEstimateBuild * ((100 - moduleDataItem?.moduleOverrideCustomerSeerResourceSplit) / 100) 

  } else if (moduleDataItem?.moduleOverridePartnerSeerEstimateBuild > 0) {
    primaryResourceConfigurationValueFromModuleData += 
      moduleDataItem?.moduleOverridePartnerSeerEstimateBuild * (moduleDataItem?.moduleOverridePartnerSeerResourceSplit / 100) 

    secondaryResourceConfigurationValueFromModuleData += 
      moduleDataItem?.moduleOverridePartnerSeerEstimateBuild * ((100 - moduleDataItem?.moduleOverridePartnerSeerResourceSplit) / 100) 

  } else {
    primaryResourceConfigurationValueFromModuleData += 
      moduleDataItem?.moduleSeerEstimateBuild * (moduleDataItem?.moduleSeerResourceSplit / 100)

    secondaryResourceConfigurationValueFromModuleData += 
      moduleDataItem?.moduleSeerEstimateBuild * ((100 - moduleDataItem?.moduleSeerResourceSplit) / 100)
  }
  // primaryResourceDesignValueFromModuleData += moduleDataItem?.moduleOverridePartnerSeerEstimateDesign * (moduleDataItem?.moduleSeerResourceSplit / 100)
  // secondaryResourceDesignValueFromModuleData += moduleDataItem?.moduleOverridePartnerSeerEstimateDesign * ((100 - moduleDataItem?.moduleSeerResourceSplit) / 100)
  return {primaryResourceConfigurationValueFromModuleData, secondaryResourceConfigurationValueFromModuleData}
}

// export const fitGapHanlder = async(baseItem: {module: {id: string}, seerMoscow: string, fitGap: string}, fitGapRecords: any[], fitGapMoscowRecords: any[], fitGapGapMoscowRecords: any[], fitGapWithoutGapRecords: any[]) => {
//   console.log('wswswswwsww');
  
//   let response: any;
//   // response.fitGapRecords = fitGapRecords;
//   // response.fitGapMoscowRecords = fitGapMoscowRecords;
//   // response.fitGapGapMoscowRecords = fitGapGapMoscowRecords;
//   // response.fitGapWithoutGapRecords = fitGapWithoutGapRecords;
//   console.log('sesese ===> ');
  
//   if (moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000000]) {
//     response = await checkFitGapTypeHandler(baseItem, fitGapRecords, 'M', fitGapMoscowRecords, fitGapGapMoscowRecords, fitGapWithoutGapRecords);

//   }
//   if (moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000000] || moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000001]) {
//     response = await checkFitGapTypeHandler(baseItem, fitGapRecords, 'MS', fitGapMoscowRecords, fitGapGapMoscowRecords, fitGapWithoutGapRecords);
//   }
//   if (moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000000] || moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000001] || moscowsData?.[baseItem?.seerMoscow] == moscowsData?.[100000002]) {
//     response = await checkFitGapTypeHandler(baseItem, fitGapRecords, 'MSC', fitGapMoscowRecords, fitGapGapMoscowRecords, fitGapWithoutGapRecords);
//   }

//   console.log('reswwwww ==> ', response);
  
//   return response;
// }

// export const checkFitGapTypeHandler = (baseItem: {module: {id: string}, seerMoscow: string, fitGap: string}, fitGapRecords: any[], moscowKeyValue: string, fitGapMoscowRecords: any[], fitGapGapMoscowRecords: any[], fitGapWithoutGapRecords: any[]) => {
//   let response: any;
//   // response.fitGapRecords = fitGapRecords;
//   // response.fitGapMoscowRecords = fitGapMoscowRecords;
//   // response.fitGapGapMoscowRecords = fitGapGapMoscowRecords;
//   // response.fitGapWithoutGapRecords = fitGapWithoutGapRecords;
//   if (fitGapData?.[baseItem?.fitGap] == fitGapData?.[100000000]) { // Fit
//     response = findAndSetFitGapValue(baseItem, fitGapRecords, moscowKeyValue, 'fit', fitGapMoscowRecords, fitGapGapMoscowRecords, fitGapWithoutGapRecords);

//   } else if (fitGapData?.[baseItem?.fitGap] == fitGapData?.[100000001]) { // Gap
//     response = findAndSetFitGapValue(baseItem, fitGapRecords, moscowKeyValue, 'gap', fitGapMoscowRecords, fitGapGapMoscowRecords, fitGapWithoutGapRecords);
//   } else if (fitGapData?.[baseItem?.fitGap] == fitGapData?.[100000002]) { // Partial
//     response = findAndSetFitGapValue(baseItem, fitGapRecords, moscowKeyValue, 'partial', fitGapMoscowRecords, fitGapGapMoscowRecords, fitGapWithoutGapRecords);

//   } else if (fitGapData?.[baseItem?.fitGap] == fitGapData?.[100000003]) { // ISV Fit
//     response = findAndSetFitGapValue(baseItem, fitGapRecords, moscowKeyValue, 'isvfit', fitGapMoscowRecords, fitGapGapMoscowRecords, fitGapWithoutGapRecords);
//   } else {
//     console.log('****** ==> ', baseItem?.fitGap);
    
//   }
//   return response;
// }

// export const findAndSetFitGapValue = (baseItem: {module: {id: string}, seerMoscow: string, fitGap: string}, fitGapRecords: any[], moscowKeyValue: string, fitgapKeyValue: string, fitGapMoscowRecords: any[], fitGapGapMoscowRecords: any[], fitGapWithoutGapRecords: any[]) => {
//   const index = fitGapRecords.findIndex((item: any) => item?.moduleId == baseItem?.module?.id);
//   let itemValue = fitGapRecords[index];  
//   const key = `${fitgapKeyValue}_${moscowKeyValue}`;  
//   itemValue = {
//     ...itemValue,
//     [key]: itemValue?.[key] + 1
//   }

//   fitGapRecords[index] = itemValue;

//   let fitGapMoscowRecordItemValue = fitGapMoscowRecords[index];
//   let fitGapGapMoscowRecordsItemValue = fitGapGapMoscowRecords[index];
//   let fitGapWithoutGapRecordsItemValue = fitGapWithoutGapRecords[index];
//   // if (moscowKeyValue == 'M') {
//     fitGapMoscowRecordItemValue = {
//       ...fitGapMoscowRecordItemValue,
//       [moscowKeyValue]: fitGapMoscowRecordItemValue?.[moscowKeyValue] + 1
//     }
//     if (fitgapKeyValue == 'gap') {
//       fitGapGapMoscowRecordsItemValue = {
//         ...fitGapGapMoscowRecordsItemValue,
//         [moscowKeyValue]: fitGapGapMoscowRecordsItemValue?.[moscowKeyValue] + 1
//       }
//     } else {
      
//       fitGapWithoutGapRecordsItemValue = {
//         ...fitGapWithoutGapRecordsItemValue,
//         [moscowKeyValue]: fitGapWithoutGapRecordsItemValue?.[moscowKeyValue] + 1
//       }
//     }
//   // }
//   fitGapMoscowRecords[index] = fitGapMoscowRecordItemValue;
//   fitGapGapMoscowRecords[index] = fitGapGapMoscowRecordsItemValue;
//   fitGapWithoutGapRecords[index] = fitGapWithoutGapRecordsItemValue;
//   console.log(' ===> ', fitGapMoscowRecordItemValue, fitGapRecords);
  
//   return {fitGapRecords, fitGapMoscowRecords, fitGapGapMoscowRecords, fitGapWithoutGapRecords}
// }