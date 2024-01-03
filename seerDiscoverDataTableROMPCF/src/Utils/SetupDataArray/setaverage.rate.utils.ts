import { generateProjectManagerMValue } from "../EstimateAveRate/project.manager.utils";
import { calculateProjectManagerEstimateAvgRateMilestone } from "../EstimateAverageRateMilestone/project.manager.utils";
import { generateEstimateResourceValue } from "../EstimateResource";

export const setDataSetAveRate = async(data: any, dataEstimateAverageRateMilestone: any, analisisAndDesignCalculation: any, initialDataSet: any, condition: boolean, settingParameters?: any, isSnapshotModeEnable?: boolean) => {

  const {parameterModel} = initialDataSet;
  const {hourlyRate, hoursPerday} = parameterModel[0];
  let subTotalMAnalysisDesignSub = 0;
  let subTotalMSAnalysisDesignSub = 0;
  let subTotalMSCAnalysisDesignSub = 0;

  let subTotalMEstimateDesignAvgRateMilestoneSub = 0;
  let subTotalMSEstimateDesignAvgRateMilestoneSub = 0;
  let subTotalMSCEstimateDesignAvgRateMilestoneSub = 0;
  
  (data[0] as any)['M_H'] = analisisAndDesignCalculation?.subSections?.responseAnalisisDesign?.resultValue;
  (data[0] as any)['M/S_H'] = analisisAndDesignCalculation?.subSections?.responseAnalisisDesign?.resultValueMS;
  (data[0] as any)['M/S/C_H'] = analisisAndDesignCalculation?.subSections?.responseAnalisisDesign?.resultValueMSC;
  subTotalMAnalysisDesignSub += analisisAndDesignCalculation?.subSections?.responseAnalisisDesign?.resultValue;
  subTotalMSAnalysisDesignSub += analisisAndDesignCalculation?.subSections?.responseAnalisisDesign?.resultValueMS;
  subTotalMSCAnalysisDesignSub += analisisAndDesignCalculation?.subSections?.responseAnalisisDesign?.resultValueMSC;
  (dataEstimateAverageRateMilestone[0] as any)['M_H'] = analisisAndDesignCalculation?.subSections?.responseAnalisisDesign?.resultValue;
  (dataEstimateAverageRateMilestone[0] as any)['M/S_H'] = analisisAndDesignCalculation?.subSections?.responseAnalisisDesign?.resultValueMS;
  (dataEstimateAverageRateMilestone[0] as any)['M/S/C_H'] = analisisAndDesignCalculation?.subSections?.responseAnalisisDesign?.resultValueMSC;

  (data[1] as any)['M_H'] = analisisAndDesignCalculation?.subSections?.responseCustomisationDesign?.customisation?.resultValue;
  (data[1] as any)['M/S_H'] = analisisAndDesignCalculation?.subSections?.responseCustomisationDesign?.customisation?.resultValueMS;
  (data[1] as any)['M/S/C_H'] = analisisAndDesignCalculation?.subSections?.responseCustomisationDesign?.customisation?.resultValueMSC;
  subTotalMAnalysisDesignSub += analisisAndDesignCalculation?.subSections?.responseCustomisationDesign?.customisation?.resultValue;
  subTotalMSAnalysisDesignSub += analisisAndDesignCalculation?.subSections?.responseCustomisationDesign?.customisation?.resultValueMS;
  subTotalMSCAnalysisDesignSub += analisisAndDesignCalculation?.subSections?.responseCustomisationDesign?.customisation?.resultValueMSC;
  (dataEstimateAverageRateMilestone[1] as any)['M_H'] = analisisAndDesignCalculation?.subSections?.responseCustomisationDesign?.customisation?.resultValue;
  (dataEstimateAverageRateMilestone[1] as any)['M/S_H'] = analisisAndDesignCalculation?.subSections?.responseCustomisationDesign?.customisation?.resultValueMS;
  (dataEstimateAverageRateMilestone[1] as any)['M/S/C_H'] = analisisAndDesignCalculation?.subSections?.responseCustomisationDesign?.customisation?.resultValueMSC;

  (data[2] as any)['M_H'] = analisisAndDesignCalculation?.subSections?.responseCustomRequirementDesign?.customRequirement?.resultValue || 0;
  (data[2] as any)['M/S_H'] = analisisAndDesignCalculation?.subSections?.responseCustomRequirementDesign?.customRequirement?.resultValueMS;
  (data[2] as any)['M/S/C_H'] = analisisAndDesignCalculation?.subSections?.responseCustomRequirementDesign?.customRequirement?.resultValueMSC;
  subTotalMAnalysisDesignSub += analisisAndDesignCalculation?.subSections?.responseCustomRequirementDesign?.customRequirement?.resultValue || 0;
  subTotalMSAnalysisDesignSub += analisisAndDesignCalculation?.subSections?.responseCustomRequirementDesign?.customRequirement?.resultValueMS;
  subTotalMSCAnalysisDesignSub += analisisAndDesignCalculation?.subSections?.responseCustomRequirementDesign?.customRequirement?.resultValueMSC;
  (dataEstimateAverageRateMilestone[2] as any)['M_H'] = analisisAndDesignCalculation?.subSections?.responseCustomRequirementDesign?.customRequirement?.resultValue || 0;
  (dataEstimateAverageRateMilestone[2] as any)['M/S_H'] = analisisAndDesignCalculation?.subSections?.responseCustomRequirementDesign?.customRequirement?.resultValueMS;
  (dataEstimateAverageRateMilestone[2] as any)['M/S/C_H'] = analisisAndDesignCalculation?.subSections?.responseCustomRequirementDesign?.customRequirement?.resultValueMSC;

  (data[3] as any)['M_H'] = analisisAndDesignCalculation?.subSections?.responseDocumentation?.documentation?.resultValue || 0;
  (data[3] as any)['M/S_H'] = analisisAndDesignCalculation?.subSections?.responseDocumentation?.documentation?.resultValueMS;
  (data[3] as any)['M/S/C_H'] = analisisAndDesignCalculation?.subSections?.responseDocumentation?.documentation?.resultValueMSC;
  subTotalMAnalysisDesignSub += analisisAndDesignCalculation?.subSections?.responseDocumentation?.documentation?.resultValue || 0;
  subTotalMSAnalysisDesignSub += analisisAndDesignCalculation?.subSections?.responseDocumentation?.documentation?.resultValueMS;
  subTotalMSCAnalysisDesignSub += analisisAndDesignCalculation?.subSections?.responseDocumentation?.documentation?.resultValueMSC;
  (dataEstimateAverageRateMilestone[3] as any)['M_H'] = analisisAndDesignCalculation?.subSections?.responseDocumentation?.documentation?.resultValue || 0;
  (dataEstimateAverageRateMilestone[3] as any)['M/S_H'] = analisisAndDesignCalculation?.subSections?.responseDocumentation?.documentation?.resultValueMS;
  (dataEstimateAverageRateMilestone[3] as any)['M/S/C_H'] = analisisAndDesignCalculation?.subSections?.responseDocumentation?.documentation?.resultValueMSC;
  
  (data[4] as any)['M_H'] = analisisAndDesignCalculation?.subSections?.responseDesignReview?.designReview?.resultValue;
  (data[4] as any)['M/S_H'] = analisisAndDesignCalculation?.subSections?.responseDesignReview?.designReview?.resultValueMS;
  (data[4] as any)['M/S/C_H'] = analisisAndDesignCalculation?.subSections?.responseDesignReview?.designReview?.resultValueMSC;
  subTotalMAnalysisDesignSub += analisisAndDesignCalculation?.subSections?.responseDesignReview?.designReview?.resultValue;
  subTotalMSAnalysisDesignSub += analisisAndDesignCalculation?.subSections?.responseDesignReview?.designReview?.resultValueMS;
  subTotalMSCAnalysisDesignSub += analisisAndDesignCalculation?.subSections?.responseDesignReview?.designReview?.resultValueMSC;
  (dataEstimateAverageRateMilestone[4] as any)['M_H'] = analisisAndDesignCalculation?.subSections?.responseDesignReview?.designReview?.resultValue;
  (dataEstimateAverageRateMilestone[4] as any)['M/S_H'] = analisisAndDesignCalculation?.subSections?.responseDesignReview?.designReview?.resultValueMS;
  (dataEstimateAverageRateMilestone[4] as any)['M/S/C_H'] = analisisAndDesignCalculation?.subSections?.responseDesignReview?.designReview?.resultValueMSC;
  const estimateDesignProjectManager = await calculateProjectManagerEstimateAvgRateMilestone(initialDataSet, analisisAndDesignCalculation?.subSections, 'Analysis and Design');
  (dataEstimateAverageRateMilestone[5] as any)['M_H'] = estimateDesignProjectManager?.resultValue;
  (dataEstimateAverageRateMilestone[5] as any)['M/S_H'] = estimateDesignProjectManager?.resultValueMS;
  (dataEstimateAverageRateMilestone[5] as any)['M/S/C_H'] = estimateDesignProjectManager?.resultValueMSC;
  (dataEstimateAverageRateMilestone[6] as any)['M_H'] = estimateDesignProjectManager?.resultValueSub;
  (dataEstimateAverageRateMilestone[6] as any)['M/S_H'] = estimateDesignProjectManager?.resultValueMSSub;
  (dataEstimateAverageRateMilestone[6] as any)['M/S/C_H'] = estimateDesignProjectManager?.resultValueMSCSub;
  subTotalMEstimateDesignAvgRateMilestoneSub += estimateDesignProjectManager?.resultValueSub;
  subTotalMSEstimateDesignAvgRateMilestoneSub += estimateDesignProjectManager?.resultValueMSSub;
  subTotalMSCEstimateDesignAvgRateMilestoneSub += estimateDesignProjectManager?.resultValueMSCSub;

  (data[5] as any)['M_H'] = analisisAndDesignCalculation?.subSections?.responseAnalisisDesign?.configuration?.resultValue;
  (data[5] as any)['M/S_H'] = analisisAndDesignCalculation?.subSections?.responseAnalisisDesign?.configuration?.resultValueMS;
  (data[5] as any)['M/S/C_H'] = analisisAndDesignCalculation?.subSections?.responseAnalisisDesign?.configuration?.resultValueMSC;
  subTotalMAnalysisDesignSub += analisisAndDesignCalculation?.subSections?.responseAnalisisDesign?.configuration?.resultValue;
  subTotalMSAnalysisDesignSub += analisisAndDesignCalculation?.subSections?.responseAnalisisDesign?.configuration?.resultValueMS;
  subTotalMSCAnalysisDesignSub += analisisAndDesignCalculation?.subSections?.responseAnalisisDesign?.configuration?.resultValueMSC;
  (dataEstimateAverageRateMilestone[7] as any)['M_H'] = analisisAndDesignCalculation?.subSections?.responseAnalisisDesign?.configuration?.resultValue;
  (dataEstimateAverageRateMilestone[7] as any)['M/S_H'] = analisisAndDesignCalculation?.subSections?.responseAnalisisDesign?.configuration?.resultValueMS;
  (dataEstimateAverageRateMilestone[7] as any)['M/S/C_H'] = analisisAndDesignCalculation?.subSections?.responseAnalisisDesign?.configuration?.resultValueMSC;

  (data[6] as any)["M_H"] = analisisAndDesignCalculation?.subSections?.responseIntegration?.integration?.resultValue;
  (data[6] as any)['M/S_H'] = analisisAndDesignCalculation?.subSections?.responseIntegration?.integration?.resultValueMS;
  (data[6] as any)['M/S/C_H'] = analisisAndDesignCalculation?.subSections?.responseIntegration?.integration?.resultValueMSC;
  subTotalMAnalysisDesignSub += analisisAndDesignCalculation?.subSections?.responseIntegration?.integration?.resultValue;
  subTotalMSAnalysisDesignSub += analisisAndDesignCalculation?.subSections?.responseIntegration?.integration?.resultValueMS;
  subTotalMSCAnalysisDesignSub += analisisAndDesignCalculation?.subSections?.responseIntegration?.integration?.resultValueMSC;
  (dataEstimateAverageRateMilestone[8] as any)['M_H'] = analisisAndDesignCalculation?.subSections?.responseIntegration?.integration?.resultValue;
  (dataEstimateAverageRateMilestone[8] as any)['M/S_H'] = analisisAndDesignCalculation?.subSections?.responseIntegration?.integration?.resultValueMS;
  (dataEstimateAverageRateMilestone[8] as any)['M/S/C_H'] = analisisAndDesignCalculation?.subSections?.responseIntegration?.integration?.resultValueMSC;

  (data[7] as any)['M_H'] = analisisAndDesignCalculation?.subSections?.responseCustomisationDesign?.customisationBuild?.resultValue;
  (data[7] as any)['M/S_H'] = analisisAndDesignCalculation?.subSections?.responseCustomisationDesign?.customisationBuild?.resultValueMS;
  (data[7] as any)['M/S/C_H'] = analisisAndDesignCalculation?.subSections?.responseCustomisationDesign?.customisationBuild?.resultValueMSC;
  subTotalMAnalysisDesignSub += analisisAndDesignCalculation?.subSections?.responseCustomisationDesign?.customisationBuild?.resultValue;
  subTotalMSAnalysisDesignSub += analisisAndDesignCalculation?.subSections?.responseCustomisationDesign?.customisationBuild?.resultValueMS;
  subTotalMSCAnalysisDesignSub += analisisAndDesignCalculation?.subSections?.responseCustomisationDesign?.customisationBuild?.resultValueMSC;
  (dataEstimateAverageRateMilestone[9] as any)['M_H'] = analisisAndDesignCalculation?.subSections?.responseCustomisationDesign?.customisationBuild?.resultValue;
  (dataEstimateAverageRateMilestone[9] as any)['M/S_H'] = analisisAndDesignCalculation?.subSections?.responseCustomisationDesign?.customisationBuild?.resultValueMS;
  (dataEstimateAverageRateMilestone[9] as any)['M/S/C_H'] = analisisAndDesignCalculation?.subSections?.responseCustomisationDesign?.customisationBuild?.resultValueMSC;

  //
  (data[8] as any)['M_H'] = analisisAndDesignCalculation?.subSections?.responseCustomRequirementDesign?.customRequirementBuild?.resultValue;
  (data[8] as any)['M/S_H'] = analisisAndDesignCalculation?.subSections?.responseCustomRequirementDesign?.customRequirementBuild?.resultValueMS;
  (data[8] as any)['M/S/C_H'] = analisisAndDesignCalculation?.subSections?.responseCustomRequirementDesign?.customRequirementBuild?.resultValueMSC;
  subTotalMAnalysisDesignSub += analisisAndDesignCalculation?.subSections?.responseCustomRequirementDesign?.customRequirementBuild?.resultValue;
  subTotalMSAnalysisDesignSub += analisisAndDesignCalculation?.subSections?.responseCustomRequirementDesign?.customRequirementBuild?.resultValueMS;
  subTotalMSCAnalysisDesignSub += analisisAndDesignCalculation?.subSections?.responseCustomRequirementDesign?.customRequirementBuild?.resultValueMSC;
  (dataEstimateAverageRateMilestone[10] as any)['M_H'] = analisisAndDesignCalculation?.subSections?.responseCustomRequirementDesign?.customRequirementBuild?.resultValue;
  (dataEstimateAverageRateMilestone[10] as any)['M/S_H'] = analisisAndDesignCalculation?.subSections?.responseCustomRequirementDesign?.customRequirementBuild?.resultValueMS;
  (dataEstimateAverageRateMilestone[10] as any)['M/S/C_H'] = analisisAndDesignCalculation?.subSections?.responseCustomRequirementDesign?.customRequirementBuild?.resultValueMSC;

  (data[9] as any)['M_H'] = analisisAndDesignCalculation?.subSections?.responseDocumentLayout?.documentLayout?.resultValue;
  (data[9] as any)['M/S_H'] = analisisAndDesignCalculation?.subSections?.responseDocumentLayout?.documentLayout?.resultValueMS;
  (data[9] as any)['M/S/C_H'] = analisisAndDesignCalculation?.subSections?.responseDocumentLayout?.documentLayout?.resultValueMSC;
  subTotalMAnalysisDesignSub += analisisAndDesignCalculation?.subSections?.responseDocumentLayout?.documentLayout?.resultValue;
  subTotalMSAnalysisDesignSub += analisisAndDesignCalculation?.subSections?.responseDocumentLayout?.documentLayout?.resultValueMS;
  subTotalMSCAnalysisDesignSub += analisisAndDesignCalculation?.subSections?.responseDocumentLayout?.documentLayout?.resultValueMSC;
  (dataEstimateAverageRateMilestone[11] as any)['M_H'] = analisisAndDesignCalculation?.subSections?.responseDocumentLayout?.documentLayout?.resultValue;
  (dataEstimateAverageRateMilestone[11] as any)['M/S_H'] = analisisAndDesignCalculation?.subSections?.responseDocumentLayout?.documentLayout?.resultValueMS;
  (dataEstimateAverageRateMilestone[11] as any)['M/S/C_H'] = analisisAndDesignCalculation?.subSections?.responseDocumentLayout?.documentLayout?.resultValueMSC;

  (data[10] as any)['M_H'] = analisisAndDesignCalculation?.subSections?.responseReporting?.reporting?.resultValue;
  (data[10] as any)['M/S_H'] = analisisAndDesignCalculation?.subSections?.responseReporting?.reporting?.resultValueMS;
  (data[10] as any)['M/S/C_H'] = analisisAndDesignCalculation?.subSections?.responseReporting?.reporting?.resultValueMSC;
  subTotalMAnalysisDesignSub += analisisAndDesignCalculation?.subSections?.responseReporting?.reporting?.resultValue;
  subTotalMSAnalysisDesignSub += analisisAndDesignCalculation?.subSections?.responseReporting?.reporting?.resultValueMS;
  subTotalMSCAnalysisDesignSub += analisisAndDesignCalculation?.subSections?.responseReporting?.reporting?.resultValueMSC;
  (dataEstimateAverageRateMilestone[12] as any)['M_H'] = analisisAndDesignCalculation?.subSections?.responseReporting?.reporting?.resultValue;
  (dataEstimateAverageRateMilestone[12] as any)['M/S_H'] = analisisAndDesignCalculation?.subSections?.responseReporting?.reporting?.resultValueMS;
  (dataEstimateAverageRateMilestone[12] as any)['M/S/C_H'] = analisisAndDesignCalculation?.subSections?.responseReporting?.reporting?.resultValueMSC;

  (data[11] as any)['M_H'] = analisisAndDesignCalculation?.subSections?.responseDataMigration?.dataMigration?.resultValue;
  (data[11] as any)['M/S_H'] = analisisAndDesignCalculation?.subSections?.responseDataMigration?.dataMigration?.resultValueMS;
  (data[11] as any)['M/S/C_H'] = analisisAndDesignCalculation?.subSections?.responseDataMigration?.dataMigration?.resultValueMSC;
  subTotalMAnalysisDesignSub += analisisAndDesignCalculation?.subSections?.responseDataMigration?.dataMigration?.resultValue;
  subTotalMSAnalysisDesignSub += analisisAndDesignCalculation?.subSections?.responseDataMigration?.dataMigration?.resultValueMS;
  subTotalMSCAnalysisDesignSub += analisisAndDesignCalculation?.subSections?.responseDataMigration?.dataMigration?.resultValueMSC;
  (dataEstimateAverageRateMilestone[13] as any)['M_H'] = analisisAndDesignCalculation?.subSections?.responseDataMigration?.dataMigration?.resultValue;
  (dataEstimateAverageRateMilestone[13] as any)['M/S_H'] = analisisAndDesignCalculation?.subSections?.responseDataMigration?.dataMigration?.resultValueMS;
  (dataEstimateAverageRateMilestone[13] as any)['M/S/C_H'] = analisisAndDesignCalculation?.subSections?.responseDataMigration?.dataMigration?.resultValueMSC;

  (data[12] as any)['M_H'] = analisisAndDesignCalculation?.subSections?.responseCRP?.crp?.resultValue;
  (data[12] as any)['M/S_H'] = analisisAndDesignCalculation?.subSections?.responseCRP?.crp?.resultValueMS;
  (data[12] as any)['M/S/C_H'] = analisisAndDesignCalculation?.subSections?.responseCRP?.crp?.resultValueMSC;
  subTotalMAnalysisDesignSub += analisisAndDesignCalculation?.subSections?.responseCRP?.crp?.resultValue;
  subTotalMSAnalysisDesignSub += analisisAndDesignCalculation?.subSections?.responseCRP?.crp?.resultValueMS;
  subTotalMSCAnalysisDesignSub += analisisAndDesignCalculation?.subSections?.responseCRP?.crp?.resultValueMSC;
  (dataEstimateAverageRateMilestone[14] as any)['M_H'] = analisisAndDesignCalculation?.subSections?.responseCRP?.crp?.resultValue;
  (dataEstimateAverageRateMilestone[14] as any)['M/S_H'] = analisisAndDesignCalculation?.subSections?.responseCRP?.crp?.resultValueMS;
  (dataEstimateAverageRateMilestone[14] as any)['M/S/C_H'] = analisisAndDesignCalculation?.subSections?.responseCRP?.crp?.resultValueMSC;

  (data[13] as any)['M_H'] = analisisAndDesignCalculation?.subSections?.responseTesting?.testing?.resultValue;
  (data[13] as any)['M/S_H'] = analisisAndDesignCalculation?.subSections?.responseTesting?.testing?.resultValueMS;
  (data[13] as any)['M/S/C_H'] = analisisAndDesignCalculation?.subSections?.responseTesting?.testing?.resultValueMSC;
  subTotalMAnalysisDesignSub += analisisAndDesignCalculation?.subSections?.responseTesting?.testing?.resultValue;
  subTotalMSAnalysisDesignSub += analisisAndDesignCalculation?.subSections?.responseTesting?.testing?.resultValueMS;
  subTotalMSCAnalysisDesignSub += analisisAndDesignCalculation?.subSections?.responseTesting?.testing?.resultValueMSC;
  (dataEstimateAverageRateMilestone[15] as any)['M_H'] = analisisAndDesignCalculation?.subSections?.responseTesting?.testing?.resultValue;
  (dataEstimateAverageRateMilestone[15] as any)['M/S_H'] = analisisAndDesignCalculation?.subSections?.responseTesting?.testing?.resultValueMS;
  (dataEstimateAverageRateMilestone[15] as any)['M/S/C_H'] = analisisAndDesignCalculation?.subSections?.responseTesting?.testing?.resultValueMSC;
  const buildProjectManager = await calculateProjectManagerEstimateAvgRateMilestone(initialDataSet, analisisAndDesignCalculation?.subSections, 'BUILD');
  (dataEstimateAverageRateMilestone[16] as any)['M_H'] = buildProjectManager?.resultValue;
  (dataEstimateAverageRateMilestone[16] as any)['M/S_H'] = buildProjectManager?.resultValueMS;
  (dataEstimateAverageRateMilestone[16] as any)['M/S/C_H'] = buildProjectManager?.resultValueMSC;
  // need to be done build total
  (dataEstimateAverageRateMilestone[17] as any)['M_H'] = buildProjectManager?.resultValueSub;
  (dataEstimateAverageRateMilestone[17] as any)['M/S_H'] = buildProjectManager?.resultValueMSSub;
  (dataEstimateAverageRateMilestone[17] as any)['M/S/C_H'] = buildProjectManager?.resultValueMSCSub;
  subTotalMEstimateDesignAvgRateMilestoneSub += buildProjectManager?.resultValueSub;
  subTotalMSEstimateDesignAvgRateMilestoneSub += buildProjectManager?.resultValueMSSub;
  subTotalMSCEstimateDesignAvgRateMilestoneSub += buildProjectManager?.resultValueMSCSub;


  (data[14] as any)['M_H'] = analisisAndDesignCalculation?.subSections?.responseTrainTheTrainer?.trainTheTrainer?.resultValue;
  (data[14] as any)['M/S_H'] = analisisAndDesignCalculation?.subSections?.responseTrainTheTrainer?.trainTheTrainer?.resultValueMS;
  (data[14] as any)['M/S/C_H'] = analisisAndDesignCalculation?.subSections?.responseTrainTheTrainer?.trainTheTrainer?.resultValueMSC;
  subTotalMAnalysisDesignSub += analisisAndDesignCalculation?.subSections?.responseTrainTheTrainer?.trainTheTrainer?.resultValue;
  subTotalMSAnalysisDesignSub += analisisAndDesignCalculation?.subSections?.responseTrainTheTrainer?.trainTheTrainer?.resultValueMS;
  subTotalMSCAnalysisDesignSub += analisisAndDesignCalculation?.subSections?.responseTrainTheTrainer?.trainTheTrainer?.resultValueMSC;
  (dataEstimateAverageRateMilestone[18] as any)['M_H'] = analisisAndDesignCalculation?.subSections?.responseTrainTheTrainer?.trainTheTrainer?.resultValue;
  (dataEstimateAverageRateMilestone[18] as any)['M/S_H'] = analisisAndDesignCalculation?.subSections?.responseTrainTheTrainer?.trainTheTrainer?.resultValueMS;
  (dataEstimateAverageRateMilestone[18] as any)['M/S/C_H'] = analisisAndDesignCalculation?.subSections?.responseTrainTheTrainer?.trainTheTrainer?.resultValueMSC;

  (data[15] as any)['M_H'] = analisisAndDesignCalculation?.subSections?.responseUATEnvironmentPreparation?.uatEnvironmentPreparation?.resultValue;
  (data[15] as any)['M/S_H'] = analisisAndDesignCalculation?.subSections?.responseUATEnvironmentPreparation?.uatEnvironmentPreparation?.resultValueMS;
  (data[15] as any)['M/S/C_H'] = analisisAndDesignCalculation?.subSections?.responseUATEnvironmentPreparation?.uatEnvironmentPreparation?.resultValueMSC;
  subTotalMAnalysisDesignSub += analisisAndDesignCalculation?.subSections?.responseUATEnvironmentPreparation?.uatEnvironmentPreparation?.resultValue;
  subTotalMSAnalysisDesignSub += analisisAndDesignCalculation?.subSections?.responseUATEnvironmentPreparation?.uatEnvironmentPreparation?.resultValueMS;
  subTotalMSCAnalysisDesignSub += analisisAndDesignCalculation?.subSections?.responseUATEnvironmentPreparation?.uatEnvironmentPreparation?.resultValueMSC;
  (dataEstimateAverageRateMilestone[19] as any)['M_H'] = analisisAndDesignCalculation?.subSections?.responseUATEnvironmentPreparation?.uatEnvironmentPreparation?.resultValue;
  (dataEstimateAverageRateMilestone[19] as any)['M/S_H'] = analisisAndDesignCalculation?.subSections?.responseUATEnvironmentPreparation?.uatEnvironmentPreparation?.resultValueMS;
  (dataEstimateAverageRateMilestone[19] as any)['M/S/C_H'] = analisisAndDesignCalculation?.subSections?.responseUATEnvironmentPreparation?.uatEnvironmentPreparation?.resultValueMSC;

  (data[16] as any)['M_H'] = analisisAndDesignCalculation?.subSections?.responseUATSupport?.uatSupport?.resultValue;
  (data[16] as any)['M/S_H'] = analisisAndDesignCalculation?.subSections?.responseUATSupport?.uatSupport?.resultValueMS;
  (data[16] as any)['M/S/C_H'] = analisisAndDesignCalculation?.subSections?.responseUATSupport?.uatSupport?.resultValueMSC;
  subTotalMAnalysisDesignSub += analisisAndDesignCalculation?.subSections?.responseUATSupport?.uatSupport?.resultValue;
  subTotalMSAnalysisDesignSub += analisisAndDesignCalculation?.subSections?.responseUATSupport?.uatSupport?.resultValueMS;
  subTotalMSCAnalysisDesignSub += analisisAndDesignCalculation?.subSections?.responseUATSupport?.uatSupport?.resultValueMSC;
  (dataEstimateAverageRateMilestone[20] as any)['M_H'] = analisisAndDesignCalculation?.subSections?.responseUATSupport?.uatSupport?.resultValue;
  (dataEstimateAverageRateMilestone[20] as any)['M/S_H'] = analisisAndDesignCalculation?.subSections?.responseUATSupport?.uatSupport?.resultValueMS;
  (dataEstimateAverageRateMilestone[20] as any)['M/S/C_H'] = analisisAndDesignCalculation?.subSections?.responseUATSupport?.uatSupport?.resultValueMSC;

  (data[17] as any)['M_H'] = analisisAndDesignCalculation?.subSections?.responseProdEnvironmentPreparation?.prodEnvironmentPreparation?.resultValue;
  (data[17] as any)['M/S_H'] = analisisAndDesignCalculation?.subSections?.responseProdEnvironmentPreparation?.prodEnvironmentPreparation?.resultValueMS;
  (data[17] as any)['M/S/C_H'] = analisisAndDesignCalculation?.subSections?.responseProdEnvironmentPreparation?.prodEnvironmentPreparation?.resultValueMSC;
  subTotalMAnalysisDesignSub += analisisAndDesignCalculation?.subSections?.responseProdEnvironmentPreparation?.prodEnvironmentPreparation?.resultValue;
  subTotalMSAnalysisDesignSub += analisisAndDesignCalculation?.subSections?.responseProdEnvironmentPreparation?.prodEnvironmentPreparation?.resultValueMS;
  subTotalMSCAnalysisDesignSub += analisisAndDesignCalculation?.subSections?.responseProdEnvironmentPreparation?.prodEnvironmentPreparation?.resultValueMSC;
  (dataEstimateAverageRateMilestone[21] as any)['M_H'] = analisisAndDesignCalculation?.subSections?.responseProdEnvironmentPreparation?.prodEnvironmentPreparation?.resultValue;
  (dataEstimateAverageRateMilestone[21] as any)['M/S_H'] = analisisAndDesignCalculation?.subSections?.responseProdEnvironmentPreparation?.prodEnvironmentPreparation?.resultValueMS;
  (dataEstimateAverageRateMilestone[21] as any)['M/S/C_H'] = analisisAndDesignCalculation?.subSections?.responseProdEnvironmentPreparation?.prodEnvironmentPreparation?.resultValueMSC;

  (data[18] as any)['M_H'] = analisisAndDesignCalculation?.subSections?.responseSupportHandover?.supportHandover?.resultValue;
  (data[18] as any)['M/S_H'] = analisisAndDesignCalculation?.subSections?.responseSupportHandover?.supportHandover?.resultValueMS;
  (data[18] as any)['M/S/C_H'] = analisisAndDesignCalculation?.subSections?.responseSupportHandover?.supportHandover?.resultValueMSC;
  subTotalMAnalysisDesignSub += analisisAndDesignCalculation?.subSections?.responseSupportHandover?.supportHandover?.resultValue;
  subTotalMSAnalysisDesignSub += analisisAndDesignCalculation?.subSections?.responseSupportHandover?.supportHandover?.resultValueMS;
  subTotalMSCAnalysisDesignSub += analisisAndDesignCalculation?.subSections?.responseSupportHandover?.supportHandover?.resultValueMSC;
  (dataEstimateAverageRateMilestone[22] as any)['M_H'] = analisisAndDesignCalculation?.subSections?.responseSupportHandover?.supportHandover?.resultValue;
  (dataEstimateAverageRateMilestone[22] as any)['M/S_H'] = analisisAndDesignCalculation?.subSections?.responseSupportHandover?.supportHandover?.resultValueMS;
  (dataEstimateAverageRateMilestone[22] as any)['M/S/C_H'] = analisisAndDesignCalculation?.subSections?.responseSupportHandover?.supportHandover?.resultValueMSC;
  const deployProjectManager = await calculateProjectManagerEstimateAvgRateMilestone(initialDataSet, analisisAndDesignCalculation?.subSections, 'DEPLOY');
  (dataEstimateAverageRateMilestone[23] as any)['M_H'] = deployProjectManager?.resultValue;
  (dataEstimateAverageRateMilestone[23] as any)['M/S_H'] = deployProjectManager?.resultValueMS;
  (dataEstimateAverageRateMilestone[23] as any)['M/S/C_H'] = deployProjectManager?.resultValueMSC;
  (dataEstimateAverageRateMilestone[24] as any)['M_H'] = deployProjectManager?.resultValueSub;
  (dataEstimateAverageRateMilestone[24] as any)['M/S_H'] = deployProjectManager?.resultValueMSSub;
  (dataEstimateAverageRateMilestone[24] as any)['M/S/C_H'] = deployProjectManager?.resultValueMSCSub;
  subTotalMEstimateDesignAvgRateMilestoneSub += deployProjectManager?.resultValueSub;
  subTotalMSEstimateDesignAvgRateMilestoneSub += deployProjectManager?.resultValueMSSub;
  subTotalMSCEstimateDesignAvgRateMilestoneSub += deployProjectManager?.resultValueMSCSub;

  (data[19] as any)['M_H'] = analisisAndDesignCalculation?.subSections?.responseDocumentLayout?.endUserTraining?.resultValue;
  (data[19] as any)['M/S_H'] = analisisAndDesignCalculation?.subSections?.responseDocumentLayout?.endUserTraining?.resultValueMS;
  (data[19] as any)['M/S/C_H'] = analisisAndDesignCalculation?.subSections?.responseDocumentLayout?.endUserTraining?.resultValueMSC;
  subTotalMAnalysisDesignSub += analisisAndDesignCalculation?.subSections?.responseDocumentLayout?.endUserTraining?.resultValue;
  subTotalMSAnalysisDesignSub += analisisAndDesignCalculation?.subSections?.responseDocumentLayout?.endUserTraining?.resultValueMS;
  subTotalMSCAnalysisDesignSub += analisisAndDesignCalculation?.subSections?.responseDocumentLayout?.endUserTraining?.resultValueMSC;
  (dataEstimateAverageRateMilestone[25] as any)['M_H'] = analisisAndDesignCalculation?.subSections?.responseDocumentLayout?.endUserTraining?.resultValue;
  (dataEstimateAverageRateMilestone[25] as any)['M/S_H'] = analisisAndDesignCalculation?.subSections?.responseDocumentLayout?.endUserTraining?.resultValueMS;
  (dataEstimateAverageRateMilestone[25] as any)['M/S/C_H'] = analisisAndDesignCalculation?.subSections?.responseDocumentLayout?.endUserTraining?.resultValueMSC;

  (data[20] as any)['M_H'] = analisisAndDesignCalculation?.subSections?.responsePostGoLive?.postGoLive?.resultValue;
  (data[20] as any)['M/S_H'] = analisisAndDesignCalculation?.subSections?.responsePostGoLive?.postGoLive?.resultValueMS;
  (data[20] as any)['M/S/C_H'] = analisisAndDesignCalculation?.subSections?.responsePostGoLive?.postGoLive?.resultValueMSC;
  subTotalMAnalysisDesignSub += analisisAndDesignCalculation?.subSections?.responsePostGoLive?.postGoLive?.resultValue;
  subTotalMSAnalysisDesignSub += analisisAndDesignCalculation?.subSections?.responsePostGoLive?.postGoLive?.resultValueMS;
  subTotalMSCAnalysisDesignSub += analisisAndDesignCalculation?.subSections?.responsePostGoLive?.postGoLive?.resultValueMSC;
  (dataEstimateAverageRateMilestone[26] as any)['M_H'] = analisisAndDesignCalculation?.subSections?.responsePostGoLive?.postGoLive?.resultValue;
  (dataEstimateAverageRateMilestone[26] as any)['M/S_H'] = analisisAndDesignCalculation?.subSections?.responsePostGoLive?.postGoLive?.resultValueMS;
  (dataEstimateAverageRateMilestone[26] as any)['M/S/C_H'] = analisisAndDesignCalculation?.subSections?.responsePostGoLive?.postGoLive?.resultValueMSC;
  const operationProjectManager = await calculateProjectManagerEstimateAvgRateMilestone(initialDataSet, analisisAndDesignCalculation?.subSections, 'OPERATION');
  (dataEstimateAverageRateMilestone[27] as any)['M_H'] = operationProjectManager?.resultValue;
  (dataEstimateAverageRateMilestone[27] as any)['M/S_H'] = operationProjectManager?.resultValueMS;
  (dataEstimateAverageRateMilestone[27] as any)['M/S/C_H'] = operationProjectManager?.resultValueMSC;
  (dataEstimateAverageRateMilestone[28] as any)['M_H'] = operationProjectManager?.resultValueSub;
  (dataEstimateAverageRateMilestone[28] as any)['M/S_H'] = operationProjectManager?.resultValueMSSub;
  (dataEstimateAverageRateMilestone[28] as any)['M/S/C_H'] = operationProjectManager?.resultValueMSCSub;
  subTotalMEstimateDesignAvgRateMilestoneSub += operationProjectManager?.resultValueSub;
  subTotalMSEstimateDesignAvgRateMilestoneSub += operationProjectManager?.resultValueMSSub;
  subTotalMSCEstimateDesignAvgRateMilestoneSub += operationProjectManager?.resultValueMSCSub;

  (data[21] as any)['M_H'] = subTotalMAnalysisDesignSub;
  (data[21] as any)['M/S_H'] = subTotalMSAnalysisDesignSub;
  (data[21] as any)['M/S/C_H'] = subTotalMSCAnalysisDesignSub;
  (dataEstimateAverageRateMilestone[29] as any)['M_H'] = subTotalMEstimateDesignAvgRateMilestoneSub;
  (dataEstimateAverageRateMilestone[29] as any)['M/S_H'] = subTotalMSEstimateDesignAvgRateMilestoneSub;
  (dataEstimateAverageRateMilestone[29] as any)['M/S/C_H'] = subTotalMSCEstimateDesignAvgRateMilestoneSub;

  // (data[23] as any)['M_H'] = subTotalMAnalysisDesignSub * (analisisAndDesignCalculation?.fColmnValueEstimateAveRate?.resultValue || 0);
  // (data[23] as any)['M/S_H'] = subTotalMSAnalysisDesignSub * (analisisAndDesignCalculation?.fColmnValueEstimateAveRate?.resultValue || 0);
  // (data[23] as any)['M/S/C_H'] = subTotalMSCAnalysisDesignSub * (analisisAndDesignCalculation?.fColmnValueEstimateAveRate?.resultValue || 0);

  const responsePojectManagement = await generateProjectManagerMValue(initialDataSet, {
    responseSubtotal: {
      subTotalMAnalysisDesign: subTotalMAnalysisDesignSub,
      subTotalMSAnalysisDesign: subTotalMSAnalysisDesignSub,
      subTotalMSCAnalysisDesign: subTotalMSCAnalysisDesignSub
    }
  }, condition, settingParameters, isSnapshotModeEnable);

  const resultValueProjectManagerEstimateResource = generateEstimateResourceValue(
    initialDataSet, {
      M: (responsePojectManagement?.projectManager?.resultValue || 0),
      'M/S': (responsePojectManagement?.projectManager?.resultValueMS || 0),
      "M/S/C": (responsePojectManagement?.projectManager?.resultValueMSC || 0),
    },
    responsePojectManagement?.projectManager,
    'Project Manager',
    'All',
    condition,
    settingParameters, isSnapshotModeEnable
  );  

  (data[22] as any)['M_H'] = responsePojectManagement?.projectManager?.resultValue;
  (data[22] as any)['M/S_H'] = responsePojectManagement?.projectManager?.resultValueMS;
  (data[22] as any)['M/S/C_H'] = responsePojectManagement?.projectManager?.resultValueMSC;

  (data[23] as any)['M_H'] = (subTotalMAnalysisDesignSub + responsePojectManagement?.projectManager?.resultValue) * (analisisAndDesignCalculation?.fColmnValueEstimateAveRate?.resultValue || 0);
  (data[23] as any)['M/S_H'] = (subTotalMSAnalysisDesignSub + responsePojectManagement?.projectManager?.resultValueMS) * (analisisAndDesignCalculation?.fColmnValueEstimateAveRate?.resultValue || 0);
  (data[23] as any)['M/S/C_H'] = (subTotalMSCAnalysisDesignSub + responsePojectManagement?.projectManager?.resultValueMSC) * (analisisAndDesignCalculation?.fColmnValueEstimateAveRate?.resultValue || 0);
  (dataEstimateAverageRateMilestone[30] as any)['M_H'] = subTotalMEstimateDesignAvgRateMilestoneSub * (analisisAndDesignCalculation?.fColmnValueEstimateAveRate?.resultValue || 0);
  (dataEstimateAverageRateMilestone[30] as any)['M/S_H'] = subTotalMSEstimateDesignAvgRateMilestoneSub * (analisisAndDesignCalculation?.fColmnValueEstimateAveRate?.resultValue || 0);
  (dataEstimateAverageRateMilestone[30] as any)['M/S/C_H'] = subTotalMSCEstimateDesignAvgRateMilestoneSub * (analisisAndDesignCalculation?.fColmnValueEstimateAveRate?.resultValue || 0);

  await Promise.all([data, dataEstimateAverageRateMilestone, resultValueProjectManagerEstimateResource])  
  return {resultValueProjectManagerEstimateResource, data, dataEstimateAverageRateMilestone};
}