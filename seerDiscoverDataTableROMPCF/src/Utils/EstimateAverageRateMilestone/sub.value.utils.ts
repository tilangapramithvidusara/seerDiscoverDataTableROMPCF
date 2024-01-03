import { fitGapData, moscowsData } from "../../Constants/pickListData";
import { calculateProjectManagerEstimateResource, calculateSubTotal, generateEstimateResourceValue } from "../EstimateResource";
import { generateCRPMValue } from "../EstimateAveRate/crp.utils";
import { generateCustomRequirementMValue } from "../EstimateAveRate/custom.requirements.utils";
import { generateCustomisationDesignMValue } from "../EstimateAveRate/customization.design.utils";
import { generateDataMigrationMValue } from "../EstimateAveRate/data.migration.utils";
import { generateDesignReviewMValue } from "../EstimateAveRate/design.review.utils";
import { generateDocumentLayoutMValue } from "../EstimateAveRate/document.layout";
import { generateDocumentationMValue } from "../EstimateAveRate/documentation.utils";
import { generateIntegrationMValue } from "../EstimateAveRate/integration.utils";
import { generatePostGoLiveMValue } from "../EstimateAveRate/post.go.live.utils";
import { generateProdEnvironmentPreparationMValue } from "../EstimateAveRate/prod.environement.preparation.utils";
import { generateReportingMValue } from "../EstimateAveRate/reporting.utils";
import { generateSupportHandoverMValue } from "../EstimateAveRate/supprot.handover.utils";
import { generateTestingMValue } from "../EstimateAveRate/testing.utils";
import { generateTrainTheTrainerMValue } from "../EstimateAveRate/train.the.trainer.utils";
import { generateUATEnvironmentPreparationMValue } from "../EstimateAveRate/uat.environment.preparation.utils";
import { generateUATSupportMValue } from "../EstimateAveRate/uat.support.utils";
import { romParameter } from "../../Constants/fteConstants";
import { checkTypeParseInt } from "../setting.values.convertor.utils";
import { parameterKeyIndex } from "../../Constants/parametersSetting";

let para_d4 = 10/100;

export const generateIColoumnValueFte = async(inititlaData: any, title?: string, settingParameters?: any, isSnapshotModeEnable?: boolean) => {
  const condition = romParameter === "Days";
  const hasParameters = settingParameters && isSnapshotModeEnable;
  if (hasParameters) {
    para_d4 = parseInt(settingParameters?.formattedData[
      parameterKeyIndex.fteBase
    ]?.currentValue || '0')
    console.log("doc ==> ", para_d4);
    
  }
  // formattedData
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

  let totalOfSubAnalysisDesign = 0;
  let totalOfSubAnalysisDesignMS = 0;
  let totalOfSubAnalysisDesignMSC = 0;

  let projectManagerAnalysisDesign = 0;
  let projectManagerAnalysisDesignMS = 0;
  let projectManagerAnalysisDesignMSC = 0;

  let totalOfAnalysisDesign = 0;
  let totalOfAnalysisDesignMS = 0;
  let totalOfAnalysisDesignMSC = 0;

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

  let totalOfSubBuild = 0;
  let totalOfSubBuildMS = 0;
  let totalOfSubBuildMSC = 0;

  let projectManagerBuild = 0;
  let projectManagerBuildMS = 0;
  let projectManagerBuildMSC = 0;

  let totalOfBuild = 0;
  let totalOfBuildMS = 0;
  let totalOfBuildMSC = 0;



  // Deploy

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

  let totalOfSubDeploy = 0;
  let totalOfSubDeployMS = 0;
  let totalOfSubDeployMSC = 0;

  let projectManagerDeploy = 0;
  let projectManagerDeployMS = 0;
  let projectManagerDeployMSC = 0;

  let totalOfDeploy = 0;
  let totalOfDeployMS = 0;
  let totalOfDeployMSC = 0;



  // Operation

  let resultValueEndUserTraining = 0;
  let resultValueMSEndUserTraining = 0;
  let resultValueMSCEndUserTraining = 0;
  
  let resultValuePostGoLive = 0;
  let resultValueMSPostGoLive = 0;
  let resultValueMSCPostGoLive = 0

  let totalOfSubOperation = 0;
  let totalOfSubOperationMS = 0;
  let totalOfSubOperationMSC = 0;

  let projectManagerOperation = 0;
  let projectManagerOperationMS = 0;
  let projectManagerOperationMSC = 0;

  let totalOfOperation = 0;
  let totalOfOperationMS = 0;
  let totalOfOperationMSC = 0;

  let totalFte = 0;
  let totalFteMS = 0;
  let totalFteMSC = 0;

  let fColmnValueEstimateAveRate = 0;


  // ################################ESTIMATE RESOURCE################################
  
  try {
    const responseAnalisisDesign = await generateAnalysisDesignMValue(inititlaData, condition, settingParameters, isSnapshotModeEnable);
    const responseCustomisationDesign = await generateCustomisationDesignMValue(inititlaData, condition, settingParameters, isSnapshotModeEnable)
    const responseCustomRequirementDesign = await generateCustomRequirementMValue(inititlaData, condition, settingParameters, isSnapshotModeEnable);

    const responseDocumentation = await generateDocumentationMValue(inititlaData, {responseAnalisisDesign, responseCustomisationDesign, responseCustomRequirementDesign}, condition, true, settingParameters, isSnapshotModeEnable)
    const responseDesignReview = await generateDesignReviewMValue(inititlaData, {responseAnalisisDesign, responseCustomisationDesign, responseCustomRequirementDesign, responseDocumentation}, condition, true, settingParameters, isSnapshotModeEnable);

    const responseIntegration = await generateIntegrationMValue(inititlaData, condition);
    const responseDocumentLayout = await generateDocumentLayoutMValue(inititlaData, condition);
    const responseReporting = await generateReportingMValue(inititlaData, {responseAnalisisDesign, responseCustomisationDesign, responseCustomRequirementDesign, responseIntegration}, condition, true, settingParameters, isSnapshotModeEnable)
    const responseDataMigration = await generateDataMigrationMValue(inititlaData, {responseAnalisisDesign, responseCustomisationDesign, responseCustomRequirementDesign, responseIntegration}, condition, true, settingParameters, isSnapshotModeEnable);
    const responseCRP = await generateCRPMValue(inititlaData, {responseAnalisisDesign, responseCustomisationDesign, responseCustomRequirementDesign, responseIntegration}, condition, true, settingParameters, isSnapshotModeEnable);
    const responseTesting = await generateTestingMValue(inititlaData, {responseAnalisisDesign, responseCustomisationDesign, responseCustomRequirementDesign, responseIntegration}, condition, true, settingParameters, isSnapshotModeEnable);

    // In "train the trainer" has to 0 when "End user train" has value --- Keith said it hold for now
    const responseTrainTheTrainer = await generateTrainTheTrainerMValue(inititlaData, {responseAnalisisDesign}, condition, true, settingParameters, isSnapshotModeEnable);
// UAT ENV MISSING
    const responseUATEnvironmentPreparation = await generateUATEnvironmentPreparationMValue(inititlaData, {responseAnalisisDesign, responseCustomisationDesign, responseCustomRequirementDesign, responseIntegration}, condition, true, settingParameters, isSnapshotModeEnable);
    const responseUATSupport = await generateUATSupportMValue(inititlaData, {responseAnalisisDesign, responseCustomisationDesign, responseCustomRequirementDesign, responseIntegration}, condition, true, settingParameters, isSnapshotModeEnable)
    const responseProdEnvironmentPreparation = await generateProdEnvironmentPreparationMValue(inititlaData, {responseAnalisisDesign, responseCustomisationDesign, responseCustomRequirementDesign, responseIntegration}, condition, true, settingParameters, isSnapshotModeEnable)
    const responseSupportHandover = await generateSupportHandoverMValue(inititlaData, {responseAnalisisDesign, responseCustomisationDesign, responseCustomRequirementDesign, responseIntegration}, condition, true, settingParameters, isSnapshotModeEnable)
    const responsePostGoLive = await generatePostGoLiveMValue(inititlaData, {responseAnalisisDesign, responseCustomisationDesign, responseCustomRequirementDesign, responseIntegration}, condition, true, settingParameters, isSnapshotModeEnable);

    // const responseProjectManagementSub = await calculateProjectManagerEstimateResource(inititlaData, {responseAnalisisDesign, responseCustomisationDesign, responseCustomRequirementDesign, responseIntegration});

    const {parameterModel} = inititlaData;
    if (parameterModel?.length) {
      // ################################ESTIMATE AVERAGE RATE################################
      const { hoursPerday, hourlyRate } = parameterModel[0];
      resultValueAnalisisDesign = responseAnalisisDesign?.resultValue
      resultValueMSAnalisisDesign = responseAnalisisDesign?.resultValueMS
      resultValueMSCAnalisisDesign = responseAnalisisDesign?.resultValueMSC

      resultValueCustomisationDesign = responseCustomisationDesign?.customisation?.resultValue
      resultValueMSCustomisationDesign = responseCustomisationDesign?.customisation?.resultValueMS
      resultValueMSCCustomisationDesign = responseCustomisationDesign?.customisation?.resultValueMSC

      resultValueCustomRequirementDesign = responseCustomRequirementDesign?.customRequirement?.resultValue
      resultValueMSCustomRequirementDesign = responseCustomRequirementDesign?.customRequirement?.resultValueMS
      resultValueMSCCustomRequirementDesign = responseCustomRequirementDesign?.customRequirement?.resultValueMSC

      resultValueDocumentation = responseDocumentation?.documentationAveRateMilestone?.resultValue
      resultValueMSDocumentation = responseDocumentation?.documentationAveRateMilestone?.resultValueMS
      resultValueMSCDocumentation = responseDocumentation?.documentationAveRateMilestone?.resultValueMSC

      resultValueDesignReview = responseDesignReview?.designReviewAveRateMilestone?.resultValue;
      resultValueMSDesignReview = responseDesignReview?.designReviewAveRateMilestone?.resultValueMS;
      resultValueMSCDesignReview = responseDesignReview?.designReviewAveRateMilestone?.resultValueMSC;

      totalOfSubAnalysisDesign = resultValueAnalisisDesign 
        + resultValueCustomisationDesign 
        + resultValueCustomRequirementDesign
        + resultValueDocumentation
        + resultValueDesignReview;
      totalOfSubAnalysisDesignMS = resultValueMSAnalisisDesign 
        + resultValueMSCustomisationDesign 
        + resultValueMSCustomRequirementDesign
        + resultValueMSDocumentation
        + resultValueMSDesignReview;
      totalOfSubAnalysisDesignMSC = resultValueMSCAnalisisDesign 
        + resultValueMSCCustomisationDesign 
        + resultValueMSCCustomRequirementDesign
        + resultValueMSCDocumentation
        + resultValueMSCDesignReview;

      projectManagerAnalysisDesign = totalOfSubAnalysisDesign * para_d4;
      projectManagerAnalysisDesignMS = totalOfSubAnalysisDesignMS * para_d4;
      projectManagerAnalysisDesignMSC = totalOfSubAnalysisDesignMSC * para_d4;

      totalOfAnalysisDesign = totalOfSubAnalysisDesign + projectManagerAnalysisDesign;
      totalOfAnalysisDesignMS = totalOfSubAnalysisDesignMS + projectManagerAnalysisDesignMS;
      totalOfAnalysisDesignMSC = totalOfSubAnalysisDesignMSC + projectManagerAnalysisDesignMSC;

      totalFte += totalOfAnalysisDesign
      totalFteMS += totalOfAnalysisDesignMS
      totalFteMSC += totalOfAnalysisDesignMSC

      resultValueConfiguration = responseAnalisisDesign?.configuration?.resultValue
      resultValueMSConfiguration = responseAnalisisDesign?.configuration?.resultValueMS
      resultValueMSCConfiguration = responseAnalisisDesign?.configuration?.resultValueMSC

      resultValueIntegration = responseIntegration?.integration?.resultValue
      resultValueMSIntegration = responseIntegration?.integration?.resultValueMS
      resultValueMSCIntegration = responseIntegration?.integration?.resultValueMSC

      // integration pending

      resultValueCustomisationBuild = responseCustomisationDesign?.customisationBuild?.resultValue;
      resultValueMSCustomisationBuild = responseCustomisationDesign?.customisationBuild?.resultValueMS;
      resultValueMSCCustomisationBuild = responseCustomisationDesign?.customisationBuild?.resultValueMSC;

      resultValueCustomRequirementBuild = responseCustomRequirementDesign?.customRequirementBuild?.resultValue;
      resultValueMSCustomRequirementBuild = responseCustomRequirementDesign?.customRequirementBuild?.resultValueMS;
      resultValueMSCCustomRequirementBuild = responseCustomRequirementDesign?.customRequirementBuild?.resultValueMSC;

      resultValueDocumentLayout = responseDocumentLayout?.documentLayout?.resultValue;
      resultValueMSDocumentLayout = responseDocumentLayout?.documentLayout?.resultValueMS;
      resultValueMSCDocumentLayout = responseDocumentLayout?.documentLayout?.resultValueMSC;

      resultValueReporting = responseReporting?.reportingAveRateMilestone?.resultValue;
      resultValueMSReporting = responseReporting?.reportingAveRateMilestone?.resultValueMS;
      resultValueMSCReporting = responseReporting?.reportingAveRateMilestone?.resultValueMSC;

      resultValueDataMigration = responseDataMigration?.dataMigrationAveRateMilestone?.resultValue;
      resultValueMSDataMigration = responseDataMigration?.dataMigrationAveRateMilestone?.resultValueMS;
      resultValueMSCDataMigration = responseDataMigration?.dataMigrationAveRateMilestone?.resultValueMSC;

      resultValueCRP = responseCRP?.crpAveRateMilestone?.resultValue;
      resultValueMSCRP = responseCRP?.crpAveRateMilestone?.resultValueMS;
      resultValueMSCCRP = responseCRP?.crpAveRateMilestone?.resultValueMSC;

      resultValueTesting = responseTesting?.testingAveRateMilestone?.resultValue;
      resultValueMSTesting = responseTesting?.testingAveRateMilestone?.resultValueMS;
      resultValueMSCTesting = responseTesting?.testingAveRateMilestone?.resultValueMSC;

      totalOfSubBuild = resultValueConfiguration
        + resultValueIntegration
        + resultValueCustomisationBuild
        + resultValueCustomRequirementBuild
        + resultValueDocumentLayout
        + resultValueReporting
        + resultValueDataMigration
        + resultValueCRP
        + resultValueTesting
      totalOfSubBuildMS = resultValueMSConfiguration
        + resultValueMSIntegration
        + resultValueMSCustomisationBuild
        + resultValueMSCustomRequirementBuild
        + resultValueMSDocumentLayout
        + resultValueMSReporting
        + resultValueMSDataMigration
        + resultValueMSCRP
        + resultValueMSTesting
      totalOfSubBuildMSC = resultValueMSCConfiguration
        + resultValueMSCIntegration
        + resultValueMSCCustomisationBuild
        + resultValueMSCCustomRequirementBuild
        + resultValueMSCDocumentLayout
        + resultValueMSCReporting
        + resultValueMSCDataMigration
        + resultValueMSCCRP
        + resultValueMSCTesting
      
      projectManagerBuild = totalOfSubBuild * para_d4;
      projectManagerBuildMS = totalOfSubBuildMS * para_d4;
      projectManagerBuildMSC = totalOfSubBuildMSC * para_d4;

      totalOfBuild = totalOfSubBuild + projectManagerBuild;
      totalOfBuildMS = totalOfSubBuildMS + projectManagerBuildMS;
      totalOfBuildMSC = totalOfSubBuildMSC + projectManagerBuildMSC;

      totalFte += totalOfBuild
      totalFteMS += totalOfBuildMS
      totalFteMSC += totalOfBuildMSC

      // SKIP 4 ROWS
      
      resultValueTrainTheTrainer = responseTrainTheTrainer?.trainTheTrainerAveRateMilestone?.resultValue;
      resultValueMSTrainTheTrainer = responseTrainTheTrainer?.trainTheTrainerAveRateMilestone?.resultValueMS;
      resultValueMSCTrainTheTrainer = responseTrainTheTrainer?.trainTheTrainerAveRateMilestone?.resultValueMSC;

      // UAT ENVIROMENT PREPARATION MISSING // responseUATEnvironmentPreparation

      resultValueUATEnvironmentPreparation = responseUATEnvironmentPreparation?.uatEnvironmentPreparationAveRateMilestone?.resultValue;
      resultValueMSUATEnvironmentPreparation = responseUATEnvironmentPreparation?.uatEnvironmentPreparationAveRateMilestone?.resultValueMS;
      resultValueMSCUATEnvironmentPreparation = responseUATEnvironmentPreparation?.uatEnvironmentPreparationAveRateMilestone?.resultValueMSC;

      resultValueUATSupport = responseUATSupport?.uatSupportAveRateMilestone?.resultValue;
      resultValueMSUATSupport = responseUATSupport?.uatSupportAveRateMilestone?.resultValueMS;
      resultValueMSCUATSupport = responseUATSupport?.uatSupportAveRateMilestone?.resultValueMSC;

      resultValueProdEnvironmentPreparation = responseProdEnvironmentPreparation?.prodEnvironmentPreparationAveRateMilestone?.resultValue;
      resultValueMSProdEnvironmentPreparation = responseProdEnvironmentPreparation?.prodEnvironmentPreparationAveRateMilestone?.resultValueMS;
      resultValueMSCProdEnvironmentPreparation = responseProdEnvironmentPreparation?.prodEnvironmentPreparationAveRateMilestone?.resultValueMSC;

      resultValueSupportHandover = responseSupportHandover?.supportHandoverAveRateMilestone?.resultValue;
      resultValueMSSupportHandover = responseSupportHandover?.supportHandoverAveRateMilestone?.resultValueMS;
      resultValueMSCSupportHandover = responseSupportHandover?.supportHandoverAveRateMilestone?.resultValueMSC;

      totalOfSubDeploy = resultValueTrainTheTrainer
        + resultValueUATEnvironmentPreparation
        + resultValueUATSupport
        + resultValueProdEnvironmentPreparation
        + resultValueSupportHandover;
      totalOfSubDeployMS = resultValueMSTrainTheTrainer
        + resultValueMSUATEnvironmentPreparation
        + resultValueMSUATSupport
        + resultValueMSProdEnvironmentPreparation
        + resultValueMSSupportHandover;
      totalOfSubDeployMSC = resultValueMSCTrainTheTrainer
        + resultValueMSCUATEnvironmentPreparation
        + resultValueMSCUATSupport
        + resultValueMSCProdEnvironmentPreparation
        + resultValueMSCSupportHandover;

      projectManagerDeploy = totalOfSubDeploy * para_d4;
      projectManagerDeployMS = totalOfSubDeployMS * para_d4;
      projectManagerDeployMSC = totalOfSubDeployMSC * para_d4;

      totalOfDeploy = totalOfSubDeploy + projectManagerDeploy;
      totalOfDeployMS = totalOfSubDeployMS + projectManagerDeployMS;
      totalOfDeployMSC = totalOfSubDeployMSC + projectManagerDeployMSC;

      totalFte += totalOfDeploy
      totalFteMS += totalOfDeployMS
      totalFteMSC += totalOfDeployMSC

      // responseDocumentLayout
      resultValueEndUserTraining = responseDocumentLayout?.endUserTraining?.resultValue;
      resultValueMSEndUserTraining = responseDocumentLayout?.endUserTraining?.resultValueMS;
      resultValueMSCEndUserTraining = responseDocumentLayout?.endUserTraining?.resultValueMSC;

      resultValuePostGoLive = responsePostGoLive?.postGoLiveAveRateMilestone?.resultValue;
      resultValueMSPostGoLive = responsePostGoLive?.postGoLiveAveRateMilestone?.resultValueMS;
      resultValueMSCPostGoLive = responsePostGoLive?.postGoLiveAveRateMilestone?.resultValueMSC;

      totalOfSubOperation = resultValueEndUserTraining
        + resultValuePostGoLive;
      totalOfSubOperationMS = resultValueMSEndUserTraining
        + resultValueMSPostGoLive;
      totalOfSubOperationMSC = resultValueMSCEndUserTraining
        + resultValueMSCPostGoLive;

      projectManagerOperation = totalOfSubOperation * para_d4;
      projectManagerOperationMS = totalOfSubOperationMS * para_d4;
      projectManagerOperationMSC = totalOfSubOperationMSC * para_d4;

      totalOfOperation = totalOfSubOperation + projectManagerOperation;
      totalOfOperationMS = totalOfSubOperationMS + projectManagerOperationMS;
      totalOfOperationMSC = totalOfSubOperationMSC + projectManagerOperationMSC;

      totalFte += totalOfOperation
      totalFteMS += totalOfOperationMS
      totalFteMSC += totalOfOperationMSC

      fColmnValueEstimateAveRate = responseDocumentLayout?.projectRisk?.estimateAveRate

      // ################################ESTIMATE RESOURCE################################

    }

    ////////////////ESTIMATE RESOURCE MILESTONE START///////////////
    
    return {
      totalFte,
      totalFteMS,
      totalFteMSC,
    };
  } catch (error) {
    console.log("generateIColoumnValue error ==> ", error);
    return {
      totalFte,
      totalFteMS,
      totalFteMSC,
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
export const generateAnalysisDesignMValue = async(inititlaData: any, condition: boolean, settingParameters?: any, isSnapshotModeEnable?: boolean) => {
   // need to check with 'Estimate - Resource Milestone'!$C$1
  let hasParameters = settingParameters && isSnapshotModeEnable;
  if (hasParameters) {
    para_d4 = parseInt(settingParameters?.formattedData[
      parameterKeyIndex.fteBase
    ]?.currentValue || '0')
    console.log("doc ==> ", para_d4);
    
  }

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
    let {hourlyRate, hoursPerday} = parameterModel[0];
    if (hasParameters) {
      hoursPerday = checkTypeParseInt(settingParameters?.formattedData[
        parameterKeyIndex.hoursPerDay
      ]?.currentValue || '0');
      hourlyRate = {
        ...hourlyRate,
        value: parseInt(settingParameters?.formattedData[
          parameterKeyIndex.hourlyRate
        ]?.currentValue || '0')
      }
    }
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