import { analysisAndDesign, dataIdentify, filterTypesPriority } from "../../Constants/identifiedData";
import { checkConditionAndGenerateValue, generateAnalysisDesignMValue, generateIColoumnValue } from "../EstimateAveRate/analysis.design.utils";
import { inititlaData } from "../../Constants/apiSample";
import { DataSet } from "../../Constants/SampleData";
import { data } from "../../Constants/estimateAverageRate";
import { dataEstimateResource } from "../../Constants/estimateResource";
import { generateProjectManagerMValue } from "../EstimateAveRate/project.manager.utils";
import { columnDetailsEstimateAverageRateMilestone, dataEstimateAverageRateMilestone } from "../../Constants/estimateAverageRateMilestone";
import { calculateProjectManagerEstimateResource, generateEstimateResourceValue } from "../EstimateResource";
import { calculateProjectManagerEstimateAvgRateMilestone } from "../EstimateAverageRateMilestone/project.manager.utils";

export const arrayGenerator = async (initialDataSet: any) => {
  let resultArray: any[] = [];
  let subTotalMAnalysisDesign = 0;
  let subTotalMSAnalysisDesign = 0;
  let subTotalMSCAnalysisDesign = 0;

  let subTotalMEstimateDesignAvgRateMilestone = 0;
  let subTotalMSEstimateDesignAvgRateMilestone = 0;
  let subTotalMSCEstimateDesignAvgRateMilestone = 0;

  const romParameter = "Days"
  const condition = romParameter === "Days";
  const {parameterModel} = initialDataSet;
  const {hourlyRate, hoursPerday} = parameterModel[0];

  try {
    const analisisAndDesignCalculation: any = await generateIColoumnValue(initialDataSet, analysisAndDesign.row);
    (data[0] as any).M = analisisAndDesignCalculation?.analysisDesing?.resultValue;
    (data[0] as any)['M/S'] = analisisAndDesignCalculation?.analysisDesing?.resultValueMS;
    (data[0] as any)['M/S/C'] = analisisAndDesignCalculation?.analysisDesing?.resultValueMSC;
    subTotalMAnalysisDesign +=analisisAndDesignCalculation?.analysisDesing?.resultValue;
    subTotalMSAnalysisDesign += analisisAndDesignCalculation?.analysisDesing?.resultValueMS || 0;
    subTotalMSCAnalysisDesign += analisisAndDesignCalculation?.analysisDesing?.resultValueMSC || 0;
    (dataEstimateAverageRateMilestone[0] as any).M = analisisAndDesignCalculation?.analysisDesing?.resultValue;
    (dataEstimateAverageRateMilestone[0] as any)['M/S'] = analisisAndDesignCalculation?.analysisDesing?.resultValueMS;
    (dataEstimateAverageRateMilestone[0] as any)['M/S/C'] = analisisAndDesignCalculation?.analysisDesing?.resultValueMSC;

    (data[1] as any).M = analisisAndDesignCalculation?.customisationDesing?.resultValue;
    (data[1] as any)['M/S'] = analisisAndDesignCalculation?.customisationDesing?.resultValueMS;
    (data[1] as any)['M/S/C'] = analisisAndDesignCalculation?.customisationDesing?.resultValueMSC;
    subTotalMAnalysisDesign += analisisAndDesignCalculation?.customisationDesing?.resultValue;
    subTotalMSAnalysisDesign += analisisAndDesignCalculation?.customisationDesing?.resultValueMS || 0;
    subTotalMSCAnalysisDesign += analisisAndDesignCalculation?.customisationDesing?.resultValueMSC || 0;
    (dataEstimateAverageRateMilestone[1] as any).M = analisisAndDesignCalculation?.customisationDesing?.resultValue;
    (dataEstimateAverageRateMilestone[1] as any)['M/S'] = analisisAndDesignCalculation?.customisationDesing?.resultValueMS;
    (dataEstimateAverageRateMilestone[1] as any)['M/S/C'] = analisisAndDesignCalculation?.customisationDesing?.resultValueMSC;

    (data[2] as any).M = analisisAndDesignCalculation?.customRequirementDesing?.resultValue || 0;
    (data[2] as any)['M/S'] = analisisAndDesignCalculation?.customRequirementDesing?.resultValueMS;
    (data[2] as any)['M/S/C'] = analisisAndDesignCalculation?.customRequirementDesing?.resultValueMSC;
    subTotalMAnalysisDesign += analisisAndDesignCalculation?.customRequirementDesing?.resultValue || 0;
    subTotalMSAnalysisDesign += analisisAndDesignCalculation?.customRequirementDesing?.resultValueMS || 0;
    subTotalMSCAnalysisDesign += analisisAndDesignCalculation?.customRequirementDesing?.resultValueMSC || 0;
    (dataEstimateAverageRateMilestone[2] as any).M = analisisAndDesignCalculation?.customRequirementDesing?.resultValue || 0;
    (dataEstimateAverageRateMilestone[2] as any)['M/S'] = analisisAndDesignCalculation?.customRequirementDesing?.resultValueMS;
    (dataEstimateAverageRateMilestone[2] as any)['M/S/C'] = analisisAndDesignCalculation?.customRequirementDesing?.resultValueMSC;

    (data[3] as any).M = analisisAndDesignCalculation?.documentation?.resultValue || 0;
    (data[3] as any)['M/S'] = analisisAndDesignCalculation?.documentation?.resultValueMS;
    (data[3] as any)['M/S/C'] = analisisAndDesignCalculation?.documentation?.resultValueMSC;
    subTotalMAnalysisDesign += analisisAndDesignCalculation?.documentation?.resultValue || 0;
    subTotalMSAnalysisDesign += analisisAndDesignCalculation?.documentation?.resultValueMS || 0;
    subTotalMSCAnalysisDesign += analisisAndDesignCalculation?.documentation?.resultValueMSC || 0;
    (dataEstimateAverageRateMilestone[3] as any).M = analisisAndDesignCalculation?.documentation?.resultValue || 0;
    (dataEstimateAverageRateMilestone[3] as any)['M/S'] = analisisAndDesignCalculation?.documentation?.resultValueMS;
    (dataEstimateAverageRateMilestone[3] as any)['M/S/C'] = analisisAndDesignCalculation?.documentation?.resultValueMSC;

    (data[4] as any).M = analisisAndDesignCalculation?.designReview?.resultValue;
    (data[4] as any)['M/S'] = analisisAndDesignCalculation?.designReview?.resultValueMS;
    (data[4] as any)['M/S/C'] = analisisAndDesignCalculation?.designReview?.resultValueMSC;
    subTotalMAnalysisDesign += analisisAndDesignCalculation?.designReview?.resultValue || 0;
    subTotalMSAnalysisDesign += analisisAndDesignCalculation?.designReview?.resultValueMS || 0;
    subTotalMSCAnalysisDesign += analisisAndDesignCalculation?.designReview?.resultValueMSC || 0;
    (dataEstimateAverageRateMilestone[4] as any).M = analisisAndDesignCalculation?.designReview?.resultValue;
    (dataEstimateAverageRateMilestone[4] as any)['M/S'] = analisisAndDesignCalculation?.designReview?.resultValueMS;
    (dataEstimateAverageRateMilestone[4] as any)['M/S/C'] = analisisAndDesignCalculation?.designReview?.resultValueMSC;

    // need to be done project manager calculation
    // subSections

    const estimateDesignProjectManager = await calculateProjectManagerEstimateAvgRateMilestone(initialDataSet, analisisAndDesignCalculation?.subSections, 'Analysis and Design');
    console.log('estimateDesignProjectManager ==> ', estimateDesignProjectManager, hourlyRate?.value, hoursPerday, condition);
    
    (dataEstimateAverageRateMilestone[5] as any).M = checkConditionAndGenerateValue(estimateDesignProjectManager?.resultValue, hourlyRate?.value, hoursPerday, condition);
    (dataEstimateAverageRateMilestone[5] as any)['M/S'] = checkConditionAndGenerateValue(estimateDesignProjectManager?.resultValueMS, hourlyRate?.value, hoursPerday, condition);
    (dataEstimateAverageRateMilestone[5] as any)['M/S/C'] = checkConditionAndGenerateValue(estimateDesignProjectManager?.resultValueMSC, hourlyRate?.value, hoursPerday, condition);

    // need to be done total field calculation
    (dataEstimateAverageRateMilestone[6] as any).M = checkConditionAndGenerateValue(estimateDesignProjectManager?.resultValueSub, hourlyRate?.value, hoursPerday, condition);
    (dataEstimateAverageRateMilestone[6] as any)['M/S'] = checkConditionAndGenerateValue(estimateDesignProjectManager?.resultValueMSSub, hourlyRate?.value, hoursPerday, condition);
    (dataEstimateAverageRateMilestone[6] as any)['M/S/C'] = checkConditionAndGenerateValue(estimateDesignProjectManager?.resultValueMSCSub, hourlyRate?.value, hoursPerday, condition);
    subTotalMEstimateDesignAvgRateMilestone += checkConditionAndGenerateValue(estimateDesignProjectManager?.resultValueSub, hourlyRate?.value, hoursPerday, condition);
    subTotalMSEstimateDesignAvgRateMilestone += checkConditionAndGenerateValue(estimateDesignProjectManager?.resultValueMSSub, hourlyRate?.value, hoursPerday, condition);
    subTotalMSCEstimateDesignAvgRateMilestone += checkConditionAndGenerateValue(estimateDesignProjectManager?.resultValueMSCSub, hourlyRate?.value, hoursPerday, condition);

    (data[5] as any).M = analisisAndDesignCalculation?.configuration?.resultValue;
    (data[5] as any)['M/S'] = analisisAndDesignCalculation?.configuration?.resultValueMS;
    (data[5] as any)['M/S/C'] = analisisAndDesignCalculation?.configuration?.resultValueMSC;
    subTotalMAnalysisDesign += analisisAndDesignCalculation?.configuration?.resultValue || 0;
    subTotalMSAnalysisDesign += analisisAndDesignCalculation?.configuration?.resultValueMS || 0;
    subTotalMSCAnalysisDesign += analisisAndDesignCalculation?.configuration?.resultValueMSC || 0;
    (dataEstimateAverageRateMilestone[7] as any).M = analisisAndDesignCalculation?.configuration?.resultValue;
    (dataEstimateAverageRateMilestone[7] as any)['M/S'] = analisisAndDesignCalculation?.configuration?.resultValueMS;
    (dataEstimateAverageRateMilestone[7] as any)['M/S/C'] = analisisAndDesignCalculation?.configuration?.resultValueMSC;

    (data[6] as any).M = analisisAndDesignCalculation?.integration?.resultValue;
    (data[6] as any)['M/S'] = analisisAndDesignCalculation?.integration?.resultValueMS;
    (data[6] as any)['M/S/C'] = analisisAndDesignCalculation?.integration?.resultValueMSC;
    subTotalMAnalysisDesign += analisisAndDesignCalculation?.integration?.resultValue || 0;
    subTotalMSAnalysisDesign += analisisAndDesignCalculation?.integration?.resultValueMS || 0;
    subTotalMSCAnalysisDesign += analisisAndDesignCalculation?.integration?.resultValueMSC || 0;
    (dataEstimateAverageRateMilestone[8] as any).M = analisisAndDesignCalculation?.integration?.resultValue;
    (dataEstimateAverageRateMilestone[8] as any)['M/S'] = analisisAndDesignCalculation?.integration?.resultValueMS;
    (dataEstimateAverageRateMilestone[8] as any)['M/S/C'] = analisisAndDesignCalculation?.integration?.resultValueMSC;

    (data[7] as any).M = analisisAndDesignCalculation?.customisationBuild?.resultValue;
    (data[7] as any)['M/S'] = analisisAndDesignCalculation?.customisationBuild?.resultValueMS;
    (data[7] as any)['M/S/C'] = analisisAndDesignCalculation?.customisationBuild?.resultValueMSC;
    subTotalMAnalysisDesign += analisisAndDesignCalculation?.customisationBuild?.resultValue || 0;
    subTotalMSAnalysisDesign += analisisAndDesignCalculation?.customisationBuild?.resultValueMS || 0;
    subTotalMSCAnalysisDesign += analisisAndDesignCalculation?.customisationBuild?.resultValueMSC || 0;
    (dataEstimateAverageRateMilestone[9] as any).M = analisisAndDesignCalculation?.customisationBuild?.resultValue;
    (dataEstimateAverageRateMilestone[9] as any)['M/S'] = analisisAndDesignCalculation?.customisationBuild?.resultValueMS;
    (dataEstimateAverageRateMilestone[9] as any)['M/S/C'] = analisisAndDesignCalculation?.customisationBuild?.resultValueMSC;

    (data[8] as any).M = analisisAndDesignCalculation?.customRequirementBuild?.resultValue;
    (data[8] as any)['M/S'] = analisisAndDesignCalculation?.customRequirementBuild?.resultValueMS;
    (data[8] as any)['M/S/C'] = analisisAndDesignCalculation?.customRequirementBuild?.resultValueMSC;
    subTotalMAnalysisDesign += analisisAndDesignCalculation?.customRequirementBuild?.resultValue || 0;
    subTotalMSAnalysisDesign += analisisAndDesignCalculation?.customRequirementBuild?.resultValueMS || 0;
    subTotalMSCAnalysisDesign += analisisAndDesignCalculation?.customRequirementBuild?.resultValueMSC || 0;
    (dataEstimateAverageRateMilestone[10] as any).M = analisisAndDesignCalculation?.customRequirementBuild?.resultValue;
    (dataEstimateAverageRateMilestone[10] as any)['M/S'] = analisisAndDesignCalculation?.customRequirementBuild?.resultValueMS;
    (dataEstimateAverageRateMilestone[10] as any)['M/S/C'] = analisisAndDesignCalculation?.customRequirementBuild?.resultValueMSC;

    (data[9] as any).M = analisisAndDesignCalculation?.documentLayout?.resultValue;
    (data[9] as any)['M/S'] = analisisAndDesignCalculation?.documentLayout?.resultValueMS;
    (data[9] as any)['M/S/C'] = analisisAndDesignCalculation?.documentLayout?.resultValueMSC;
    subTotalMAnalysisDesign += analisisAndDesignCalculation?.documentLayout?.resultValue || 0;
    subTotalMSAnalysisDesign += analisisAndDesignCalculation?.documentLayout?.resultValueMS || 0;
    subTotalMSCAnalysisDesign += analisisAndDesignCalculation?.documentLayout?.resultValueMSC || 0;
    (dataEstimateAverageRateMilestone[11] as any).M = analisisAndDesignCalculation?.documentLayout?.resultValue;
    (dataEstimateAverageRateMilestone[11] as any)['M/S'] = analisisAndDesignCalculation?.documentLayout?.resultValueMS;
    (dataEstimateAverageRateMilestone[11] as any)['M/S/C'] = analisisAndDesignCalculation?.documentLayout?.resultValueMSC;

    (data[10] as any).M = analisisAndDesignCalculation?.reporting?.resultValue;
    (data[10] as any)['M/S'] = analisisAndDesignCalculation?.reporting?.resultValueMS;
    (data[10] as any)['M/S/C'] = analisisAndDesignCalculation?.reporting?.resultValueMSC;
    subTotalMAnalysisDesign += analisisAndDesignCalculation?.reporting?.resultValue || 0;
    subTotalMSAnalysisDesign += analisisAndDesignCalculation?.reporting?.resultValueMS || 0;
    subTotalMSCAnalysisDesign += analisisAndDesignCalculation?.reporting?.resultValueMSC || 0;
    (dataEstimateAverageRateMilestone[12] as any).M = analisisAndDesignCalculation?.reporting?.resultValue;
    (dataEstimateAverageRateMilestone[12] as any)['M/S'] = analisisAndDesignCalculation?.reporting?.resultValueMS;
    (dataEstimateAverageRateMilestone[12] as any)['M/S/C'] = analisisAndDesignCalculation?.reporting?.resultValueMSC;

    (data[11] as any).M = analisisAndDesignCalculation?.dataMigration?.resultValue;
    (data[11] as any)['M/S'] = analisisAndDesignCalculation?.dataMigration?.resultValueMS;
    (data[11] as any)['M/S/C'] = analisisAndDesignCalculation?.dataMigration?.resultValueMSC;
    subTotalMAnalysisDesign += analisisAndDesignCalculation?.dataMigration?.resultValue || 0;
    subTotalMSAnalysisDesign += analisisAndDesignCalculation?.dataMigration?.resultValueMS || 0;
    subTotalMSCAnalysisDesign += analisisAndDesignCalculation?.dataMigration?.resultValueMSC || 0;
    (dataEstimateAverageRateMilestone[13] as any).M = analisisAndDesignCalculation?.dataMigration?.resultValue;
    (dataEstimateAverageRateMilestone[13] as any)['M/S'] = analisisAndDesignCalculation?.dataMigration?.resultValueMS;
    (dataEstimateAverageRateMilestone[13] as any)['M/S/C'] = analisisAndDesignCalculation?.dataMigration?.resultValueMSC;

    (data[12] as any).M = analisisAndDesignCalculation?.crp?.resultValue;
    (data[12] as any)['M/S'] = analisisAndDesignCalculation?.crp?.resultValueMS;
    (data[12] as any)['M/S/C'] = analisisAndDesignCalculation?.crp?.resultValueMSC;
    subTotalMAnalysisDesign += analisisAndDesignCalculation?.crp?.resultValue || 0;
    subTotalMSAnalysisDesign += analisisAndDesignCalculation?.crp?.resultValueMS || 0;
    subTotalMSCAnalysisDesign += analisisAndDesignCalculation?.crp?.resultValueMSC || 0;
    (dataEstimateAverageRateMilestone[14] as any).M = analisisAndDesignCalculation?.crp?.resultValue;
    (dataEstimateAverageRateMilestone[14] as any)['M/S'] = analisisAndDesignCalculation?.crp?.resultValueMS;
    (dataEstimateAverageRateMilestone[14] as any)['M/S/C'] = analisisAndDesignCalculation?.crp?.resultValueMSC;

    (data[13] as any).M = analisisAndDesignCalculation?.testing?.resultValue;
    (data[13] as any)['M/S'] = analisisAndDesignCalculation?.testing?.resultValueMS;
    (data[13] as any)['M/S/C'] = analisisAndDesignCalculation?.testing?.resultValueMSC;
    subTotalMAnalysisDesign += analisisAndDesignCalculation?.testing?.resultValue || 0;
    subTotalMSAnalysisDesign += analisisAndDesignCalculation?.testing?.resultValueMS || 0;
    subTotalMSCAnalysisDesign += analisisAndDesignCalculation?.testing?.resultValueMSC || 0;
    (dataEstimateAverageRateMilestone[15] as any).M = analisisAndDesignCalculation?.testing?.resultValue;
    (dataEstimateAverageRateMilestone[15] as any)['M/S'] = analisisAndDesignCalculation?.testing?.resultValueMS;
    (dataEstimateAverageRateMilestone[15] as any)['M/S/C'] = analisisAndDesignCalculation?.testing?.resultValueMSC;

    // need to be done build project manager
    const buildProjectManager = await calculateProjectManagerEstimateAvgRateMilestone(initialDataSet, analisisAndDesignCalculation?.subSections, 'BUILD');

    (dataEstimateAverageRateMilestone[16] as any).M = checkConditionAndGenerateValue(buildProjectManager?.resultValue, hourlyRate?.value, hoursPerday, condition);
    (dataEstimateAverageRateMilestone[16] as any)['M/S'] = checkConditionAndGenerateValue(buildProjectManager?.resultValueMS, hourlyRate?.value, hoursPerday, condition);
    (dataEstimateAverageRateMilestone[16] as any)['M/S/C'] = checkConditionAndGenerateValue(buildProjectManager?.resultValueMSC, hourlyRate?.value, hoursPerday, condition);
    // need to be done build total
    (dataEstimateAverageRateMilestone[17] as any).M = checkConditionAndGenerateValue(buildProjectManager?.resultValueSub, hourlyRate?.value, hoursPerday, condition);
    (dataEstimateAverageRateMilestone[17] as any)['M/S'] = checkConditionAndGenerateValue(buildProjectManager?.resultValueMSSub, hourlyRate?.value, hoursPerday, condition);
    (dataEstimateAverageRateMilestone[17] as any)['M/S/C'] = checkConditionAndGenerateValue(buildProjectManager?.resultValueMSCSub, hourlyRate?.value, hoursPerday, condition);
    subTotalMEstimateDesignAvgRateMilestone += checkConditionAndGenerateValue(buildProjectManager?.resultValueSub, hourlyRate?.value, hoursPerday, condition);
    subTotalMSEstimateDesignAvgRateMilestone += checkConditionAndGenerateValue(buildProjectManager?.resultValueMSSub, hourlyRate?.value, hoursPerday, condition);
    subTotalMSCEstimateDesignAvgRateMilestone += checkConditionAndGenerateValue(buildProjectManager?.resultValueMSCSub, hourlyRate?.value, hoursPerday, condition);

    // INDEX TRAIN THE TRAINER 14 
    // trainTheTrainer
    (data[14] as any).M = analisisAndDesignCalculation?.trainTheTrainer?.resultValue;
    (data[14] as any)['M/S'] = analisisAndDesignCalculation?.trainTheTrainer?.resultValueMS;
    (data[14] as any)['M/S/C'] = analisisAndDesignCalculation?.trainTheTrainer?.resultValueMSC;
    subTotalMAnalysisDesign += analisisAndDesignCalculation?.trainTheTrainer?.resultValue || 0;
    subTotalMSAnalysisDesign += analisisAndDesignCalculation?.trainTheTrainer?.resultValueMS || 0;
    subTotalMSCAnalysisDesign += analisisAndDesignCalculation?.trainTheTrainer?.resultValueMSC || 0;
    (dataEstimateAverageRateMilestone[18] as any).M = analisisAndDesignCalculation?.trainTheTrainer?.resultValue;
    (dataEstimateAverageRateMilestone[18] as any)['M/S'] = analisisAndDesignCalculation?.trainTheTrainer?.resultValueMS;
    (dataEstimateAverageRateMilestone[18] as any)['M/S/C'] = analisisAndDesignCalculation?.trainTheTrainer?.resultValueMSC;

    (data[15] as any).M = analisisAndDesignCalculation?.uatEnvironmentPreparation?.resultValue;
    (data[15] as any)['M/S'] = analisisAndDesignCalculation?.uatEnvironmentPreparation?.resultValueMS;
    (data[15] as any)['M/S/C'] = analisisAndDesignCalculation?.uatEnvironmentPreparation?.resultValueMSC;
    subTotalMAnalysisDesign += analisisAndDesignCalculation?.uatEnvironmentPreparation?.resultValue || 0;
    subTotalMSAnalysisDesign += analisisAndDesignCalculation?.uatEnvironmentPreparation?.resultValueMS || 0;
    subTotalMSCAnalysisDesign += analisisAndDesignCalculation?.uatEnvironmentPreparation?.resultValueMSC || 0;
    (dataEstimateAverageRateMilestone[19] as any).M = analisisAndDesignCalculation?.uatEnvironmentPreparation?.resultValue;
    (dataEstimateAverageRateMilestone[19] as any)['M/S'] = analisisAndDesignCalculation?.uatEnvironmentPreparation?.resultValueMS;
    (dataEstimateAverageRateMilestone[19] as any)['M/S/C'] = analisisAndDesignCalculation?.uatEnvironmentPreparation?.resultValueMSC;

    (data[16] as any).M = analisisAndDesignCalculation?.uatSupport?.resultValue;
    (data[16] as any)['M/S'] = analisisAndDesignCalculation?.uatSupport?.resultValueMS;
    (data[16] as any)['M/S/C'] = analisisAndDesignCalculation?.uatSupport?.resultValueMSC;
    subTotalMAnalysisDesign += analisisAndDesignCalculation?.uatSupport?.resultValue || 0;
    subTotalMSAnalysisDesign += analisisAndDesignCalculation?.uatSupport?.resultValueMS || 0;
    subTotalMSCAnalysisDesign += analisisAndDesignCalculation?.uatSupport?.resultValueMSC || 0;
    (dataEstimateAverageRateMilestone[20] as any).M = analisisAndDesignCalculation?.uatSupport?.resultValue;
    (dataEstimateAverageRateMilestone[20] as any)['M/S'] = analisisAndDesignCalculation?.uatSupport?.resultValueMS;
    (dataEstimateAverageRateMilestone[20] as any)['M/S/C'] = analisisAndDesignCalculation?.uatSupport?.resultValueMSC;

    (data[17] as any).M = analisisAndDesignCalculation?.prodEnvironmentPreparation?.resultValue;
    (data[17] as any)['M/S'] = analisisAndDesignCalculation?.prodEnvironmentPreparation?.resultValueMS;
    (data[17] as any)['M/S/C'] = analisisAndDesignCalculation?.prodEnvironmentPreparation?.resultValueMSC;
    subTotalMAnalysisDesign += analisisAndDesignCalculation?.prodEnvironmentPreparation?.resultValue || 0;
    subTotalMSAnalysisDesign += analisisAndDesignCalculation?.prodEnvironmentPreparation?.resultValueMS || 0;
    subTotalMSCAnalysisDesign += analisisAndDesignCalculation?.prodEnvironmentPreparation?.resultValueMSC || 0;
    (dataEstimateAverageRateMilestone[21] as any).M = analisisAndDesignCalculation?.prodEnvironmentPreparation?.resultValue;
    (dataEstimateAverageRateMilestone[21] as any)['M/S'] = analisisAndDesignCalculation?.prodEnvironmentPreparation?.resultValueMS;
    (dataEstimateAverageRateMilestone[21] as any)['M/S/C'] = analisisAndDesignCalculation?.prodEnvironmentPreparation?.resultValueMSC;

    (data[18] as any).M = analisisAndDesignCalculation?.supportHandover?.resultValue;
    (data[18] as any)['M/S'] = analisisAndDesignCalculation?.supportHandover?.resultValueMS;
    (data[18] as any)['M/S/C'] = analisisAndDesignCalculation?.supportHandover?.resultValueMSC;
    subTotalMAnalysisDesign += analisisAndDesignCalculation?.supportHandover?.resultValue || 0;
    subTotalMSAnalysisDesign += analisisAndDesignCalculation?.supportHandover?.resultValueMS || 0
    subTotalMSCAnalysisDesign += analisisAndDesignCalculation?.supportHandover?.resultValueMSC || 0;
    (dataEstimateAverageRateMilestone[22] as any).M = analisisAndDesignCalculation?.supportHandover?.resultValue;
    (dataEstimateAverageRateMilestone[22] as any)['M/S'] = analisisAndDesignCalculation?.supportHandover?.resultValueMS;
    (dataEstimateAverageRateMilestone[22] as any)['M/S/C'] = analisisAndDesignCalculation?.supportHandover?.resultValueMSC;

    // need to be done deploy project manager
    const deployProjectManager = await calculateProjectManagerEstimateAvgRateMilestone(initialDataSet, analisisAndDesignCalculation?.subSections, 'DEPLOY');

    (dataEstimateAverageRateMilestone[23] as any).M = checkConditionAndGenerateValue(deployProjectManager?.resultValue, hourlyRate?.value, hoursPerday, condition);
    (dataEstimateAverageRateMilestone[23] as any)['M/S'] = checkConditionAndGenerateValue(deployProjectManager?.resultValueMS, hourlyRate?.value, hoursPerday, condition);
    (dataEstimateAverageRateMilestone[23] as any)['M/S/C'] = checkConditionAndGenerateValue(deployProjectManager?.resultValueMSC, hourlyRate?.value, hoursPerday, condition);
    // need to be done deploy total
    (dataEstimateAverageRateMilestone[24] as any).M = checkConditionAndGenerateValue(deployProjectManager?.resultValueSub, hourlyRate?.value, hoursPerday, condition);
    (dataEstimateAverageRateMilestone[24] as any)['M/S'] = checkConditionAndGenerateValue(deployProjectManager?.resultValueMSSub, hourlyRate?.value, hoursPerday, condition);
    (dataEstimateAverageRateMilestone[24] as any)['M/S/C'] = checkConditionAndGenerateValue(deployProjectManager?.resultValueMSCSub, hourlyRate?.value, hoursPerday, condition);
    subTotalMEstimateDesignAvgRateMilestone += checkConditionAndGenerateValue(deployProjectManager?.resultValueSub, hourlyRate?.value, hoursPerday, condition);
    subTotalMSEstimateDesignAvgRateMilestone += checkConditionAndGenerateValue(deployProjectManager?.resultValueMSSub, hourlyRate?.value, hoursPerday, condition);
    subTotalMSCEstimateDesignAvgRateMilestone += checkConditionAndGenerateValue(deployProjectManager?.resultValueMSCSub, hourlyRate?.value, hoursPerday, condition);

    // endUserTraining
    (data[19] as any).M = analisisAndDesignCalculation?.endUserTraining?.resultValue;
    (data[19] as any)['M/S'] = analisisAndDesignCalculation?.endUserTraining?.resultValueMS;
    (data[19] as any)['M/S/C'] = analisisAndDesignCalculation?.endUserTraining?.resultValueMSC;
    subTotalMAnalysisDesign += analisisAndDesignCalculation?.endUserTraining?.resultValue || 0;
    subTotalMSAnalysisDesign += analisisAndDesignCalculation?.endUserTraining?.resultValueMS || 0;
    subTotalMSCAnalysisDesign += analisisAndDesignCalculation?.endUserTraining?.resultValueMSC || 0;
    (dataEstimateAverageRateMilestone[25] as any).M = analisisAndDesignCalculation?.endUserTraining?.resultValue;
    (dataEstimateAverageRateMilestone[25] as any)['M/S'] = analisisAndDesignCalculation?.endUserTraining?.resultValueMS;
    (dataEstimateAverageRateMilestone[25] as any)['M/S/C'] = analisisAndDesignCalculation?.endUserTraining?.resultValueMSC;

    (data[20] as any).M = analisisAndDesignCalculation?.postGoLive?.resultValue;
    (data[20] as any)['M/S'] = analisisAndDesignCalculation?.postGoLive?.resultValueMS;
    (data[20] as any)['M/S/C'] = analisisAndDesignCalculation?.postGoLive?.resultValueMSC;
    subTotalMAnalysisDesign += analisisAndDesignCalculation?.postGoLive?.resultValue || 0;
    subTotalMSAnalysisDesign += analisisAndDesignCalculation?.postGoLive?.resultValueMS || 0;
    subTotalMSCAnalysisDesign += analisisAndDesignCalculation?.postGoLive?.resultValueMSC ||0;
    (dataEstimateAverageRateMilestone[26] as any).M = analisisAndDesignCalculation?.postGoLive?.resultValue;
    (dataEstimateAverageRateMilestone[26] as any)['M/S'] = analisisAndDesignCalculation?.postGoLive?.resultValueMS;
    (dataEstimateAverageRateMilestone[26] as any)['M/S/C'] = analisisAndDesignCalculation?.postGoLive?.resultValueMSC;

    // need to be done operation project manager
    const operationProjectManager = await calculateProjectManagerEstimateAvgRateMilestone(initialDataSet, analisisAndDesignCalculation?.subSections, 'OPERATION');

    (dataEstimateAverageRateMilestone[27] as any).M = checkConditionAndGenerateValue(operationProjectManager?.resultValue, hourlyRate?.value, hoursPerday, condition);
    (dataEstimateAverageRateMilestone[27] as any)['M/S'] = checkConditionAndGenerateValue(operationProjectManager?.resultValueMS, hourlyRate?.value, hoursPerday, condition);
    (dataEstimateAverageRateMilestone[27] as any)['M/S/C'] = checkConditionAndGenerateValue(operationProjectManager?.resultValueMSC, hourlyRate?.value, hoursPerday, condition);
    // need to be done operation total
    (dataEstimateAverageRateMilestone[28] as any).M = checkConditionAndGenerateValue(operationProjectManager?.resultValueSub, hourlyRate?.value, hoursPerday, condition);
    (dataEstimateAverageRateMilestone[28] as any)['M/S'] = checkConditionAndGenerateValue(operationProjectManager?.resultValueMSSub, hourlyRate?.value, hoursPerday, condition);
    (dataEstimateAverageRateMilestone[28] as any)['M/S/C'] = checkConditionAndGenerateValue(operationProjectManager?.resultValueMSCSub, hourlyRate?.value, hoursPerday, condition);
    subTotalMEstimateDesignAvgRateMilestone += checkConditionAndGenerateValue(operationProjectManager?.resultValueSub, hourlyRate?.value, hoursPerday, condition);
    subTotalMSEstimateDesignAvgRateMilestone += checkConditionAndGenerateValue(operationProjectManager?.resultValueMSSub, hourlyRate?.value, hoursPerday, condition);
    subTotalMSCEstimateDesignAvgRateMilestone += checkConditionAndGenerateValue(operationProjectManager?.resultValueMSCSub, hourlyRate?.value, hoursPerday, condition);

    (data[21] as any).M = subTotalMAnalysisDesign;
    (data[21] as any)['M/S'] = subTotalMSAnalysisDesign;
    (data[21] as any)['M/S/C'] = subTotalMSCAnalysisDesign;
    (dataEstimateAverageRateMilestone[29] as any).M = subTotalMEstimateDesignAvgRateMilestone;
    (dataEstimateAverageRateMilestone[29] as any)['M/S'] = subTotalMSEstimateDesignAvgRateMilestone;
    (dataEstimateAverageRateMilestone[29] as any)['M/S/C'] = subTotalMSCEstimateDesignAvgRateMilestone;

    // fColmnValueEstimateAveRate
    (data[23] as any).M = subTotalMAnalysisDesign * (analisisAndDesignCalculation?.fColmnValueEstimateAveRate?.resultValue || 0);
    (data[23] as any)['M/S'] = subTotalMSAnalysisDesign * (analisisAndDesignCalculation?.fColmnValueEstimateAveRate?.resultValue || 0);
    (data[23] as any)['M/S/C'] = subTotalMSCAnalysisDesign * (analisisAndDesignCalculation?.fColmnValueEstimateAveRate?.resultValue || 0);
    (dataEstimateAverageRateMilestone[30] as any).M = subTotalMEstimateDesignAvgRateMilestone * (analisisAndDesignCalculation?.fColmnValueEstimateAveRate?.resultValue || 0);
    (dataEstimateAverageRateMilestone[30] as any)['M/S'] = subTotalMSEstimateDesignAvgRateMilestone * (analisisAndDesignCalculation?.fColmnValueEstimateAveRate?.resultValue || 0);
    (dataEstimateAverageRateMilestone[30] as any)['M/S/C'] = subTotalMSCEstimateDesignAvgRateMilestone * (analisisAndDesignCalculation?.fColmnValueEstimateAveRate?.resultValue || 0);



    /////////////////// ESTIMATE RESOURCE - START ///////////////////
// analysisDesingEstimateResource
  dataEstimateResource[0]['M_Resource1'] = analisisAndDesignCalculation?.analysisDesingEstimateResource?.resultValue1 || 0;
  dataEstimateResource[0]['M_Resource2'] = analisisAndDesignCalculation?.analysisDesingEstimateResource?.resultValue2 || 0;
  dataEstimateResource[0]['M/S_Resource1'] = analisisAndDesignCalculation?.analysisDesingEstimateResource?.resultValueMS1 || 0;
  dataEstimateResource[0]['M/S_Resource2'] = analisisAndDesignCalculation?.analysisDesingEstimateResource?.resultValueMS2 || 0;
  dataEstimateResource[0]['M/S/C_Resource1'] = analisisAndDesignCalculation?.analysisDesingEstimateResource?.resultValueMSC1 || 0;
  dataEstimateResource[0]['M/S/C_Resource2'] = analisisAndDesignCalculation?.analysisDesingEstimateResource?.resultValueMSC2 || 0;
  dataEstimateResource[0]['M_Resource_Total'] = analisisAndDesignCalculation?.analysisDesingEstimateResource?.["M_Resource_Total"] || 0;
  dataEstimateResource[0]['M/S_Resource_Total'] = analisisAndDesignCalculation?.analysisDesingEstimateResource?.['M/S_Resource_Total'] || 0;
  dataEstimateResource[0]['M/S/C_Resource_Total'] = analisisAndDesignCalculation?.analysisDesingEstimateResource?.['M/S/C_Resource_Total'] || 0;

  dataEstimateResource[1]['M_Resource1'] = analisisAndDesignCalculation?.customisationDesignEstimateResource?.resultValue1 || 0;
  dataEstimateResource[1]['M_Resource2'] = analisisAndDesignCalculation?.customisationDesignEstimateResource?.resultValue2 || 0;
  dataEstimateResource[1]['M/S_Resource1'] = analisisAndDesignCalculation?.customisationDesignEstimateResource?.resultValueMS1 || 0;
  dataEstimateResource[1]['M/S_Resource2'] = analisisAndDesignCalculation?.customisationDesignEstimateResource?.resultValueMS2 || 0;
  dataEstimateResource[1]['M/S/C_Resource1'] = analisisAndDesignCalculation?.customisationDesignEstimateResource?.resultValueMSC1 || 0;
  dataEstimateResource[1]['M/S/C_Resource2'] = analisisAndDesignCalculation?.customisationDesignEstimateResource?.resultValueMSC2 || 0;
  dataEstimateResource[1]['M_Resource_Total'] = analisisAndDesignCalculation?.customisationDesignEstimateResource?.["M_Resource_Total"] || 0;
  dataEstimateResource[1]['M/S_Resource_Total'] = analisisAndDesignCalculation?.customisationDesignEstimateResource?.['M/S_Resource_Total'] || 0;
  dataEstimateResource[1]['M/S/C_Resource_Total'] = analisisAndDesignCalculation?.customisationDesignEstimateResource?.['M/S/C_Resource_Total'] || 0;

  dataEstimateResource[2]['M_Resource1'] = analisisAndDesignCalculation?.customRequirementDesignEstimateResource?.resultValue1 || 0;
  dataEstimateResource[2]['M_Resource2'] = analisisAndDesignCalculation?.customRequirementDesignEstimateResource?.resultValue2 || 0;
  dataEstimateResource[2]['M/S_Resource1'] = analisisAndDesignCalculation?.customRequirementDesignEstimateResource?.resultValueMS1 || 0;
  dataEstimateResource[2]['M/S_Resource2'] = analisisAndDesignCalculation?.customRequirementDesignEstimateResource?.resultValueMS2 || 0;
  dataEstimateResource[2]['M/S/C_Resource1'] = analisisAndDesignCalculation?.customRequirementDesignEstimateResource?.resultValueMSC1 || 0;
  dataEstimateResource[2]['M/S/C_Resource2'] = analisisAndDesignCalculation?.customRequirementDesignEstimateResource?.resultValueMSC2 || 0;
  dataEstimateResource[2]['M_Resource_Total'] = analisisAndDesignCalculation?.customRequirementDesignEstimateResource?.["M_Resource_Total"] || 0;
  dataEstimateResource[2]['M/S_Resource_Total'] = analisisAndDesignCalculation?.customRequirementDesignEstimateResource?.['M/S_Resource_Total'] || 0;
  dataEstimateResource[2]['M/S/C_Resource_Total'] = analisisAndDesignCalculation?.customRequirementDesignEstimateResource?.['M/S/C_Resource_Total'] || 0;

  dataEstimateResource[3]['M_Resource1'] = analisisAndDesignCalculation?.documentationEstimateResource?.resultValue1 || 0;
  dataEstimateResource[3]['M_Resource2'] = analisisAndDesignCalculation?.documentationEstimateResource?.resultValue2 || 0;
  dataEstimateResource[3]['M/S_Resource1'] = analisisAndDesignCalculation?.documentationEstimateResource?.resultValueMS1 || 0;
  dataEstimateResource[3]['M/S_Resource2'] = analisisAndDesignCalculation?.documentationEstimateResource?.resultValueMS2 || 0;
  dataEstimateResource[3]['M/S/C_Resource1'] = analisisAndDesignCalculation?.documentationEstimateResource?.resultValueMSC1 || 0;
  dataEstimateResource[3]['M/S/C_Resource2'] = analisisAndDesignCalculation?.documentationEstimateResource?.resultValueMSC2 || 0;
  dataEstimateResource[3]['M_Resource_Total'] = analisisAndDesignCalculation?.documentationEstimateResource?.["M_Resource_Total"] || 0;
  dataEstimateResource[3]['M/S_Resource_Total'] = analisisAndDesignCalculation?.documentationEstimateResource?.['M/S_Resource_Total'] || 0;
  dataEstimateResource[3]['M/S/C_Resource_Total'] = analisisAndDesignCalculation?.documentationEstimateResource?.['M/S/C_Resource_Total'] || 0;

  dataEstimateResource[4]['M_Resource1'] = analisisAndDesignCalculation?.designReviewEstimateResource?.resultValue1 || 0;
  dataEstimateResource[4]['M_Resource2'] = analisisAndDesignCalculation?.designReviewEstimateResource?.resultValue2 || 0;
  dataEstimateResource[4]['M/S_Resource1'] = analisisAndDesignCalculation?.designReviewEstimateResource?.resultValueMS1 || 0;
  dataEstimateResource[4]['M/S_Resource2'] = analisisAndDesignCalculation?.designReviewEstimateResource?.resultValueMS2 || 0;
  dataEstimateResource[4]['M/S/C_Resource1'] = analisisAndDesignCalculation?.designReviewEstimateResource?.resultValueMSC1 || 0;
  dataEstimateResource[4]['M/S/C_Resource2'] = analisisAndDesignCalculation?.designReviewEstimateResource?.resultValueMSC2 || 0;
  dataEstimateResource[4]['M_Resource_Total'] = analisisAndDesignCalculation?.designReviewEstimateResource?.["M_Resource_Total"] || 0;
  dataEstimateResource[4]['M/S_Resource_Total'] = analisisAndDesignCalculation?.designReviewEstimateResource?.['M/S_Resource_Total'] || 0;
  dataEstimateResource[4]['M/S/C_Resource_Total'] = analisisAndDesignCalculation?.designReviewEstimateResource?.['M/S/C_Resource_Total'] || 0;

  dataEstimateResource[5]['M_Resource1'] = analisisAndDesignCalculation?.configurationEstimateResource?.resultValue1 || 0;
  dataEstimateResource[5]['M_Resource2'] = analisisAndDesignCalculation?.configurationEstimateResource?.resultValue2 || 0;
  dataEstimateResource[5]['M/S_Resource1'] = analisisAndDesignCalculation?.configurationEstimateResource?.resultValueMS1 || 0;
  dataEstimateResource[5]['M/S_Resource2'] = analisisAndDesignCalculation?.configurationEstimateResource?.resultValueMS2 || 0;
  dataEstimateResource[5]['M/S/C_Resource1'] = analisisAndDesignCalculation?.configurationEstimateResource?.resultValueMSC1 || 0;
  dataEstimateResource[5]['M/S/C_Resource2'] = analisisAndDesignCalculation?.configurationEstimateResource?.resultValueMSC2 || 0;
  dataEstimateResource[5]['M_Resource_Total'] = analisisAndDesignCalculation?.configurationEstimateResource?.["M_Resource_Total"] || 0;
  dataEstimateResource[5]['M/S_Resource_Total'] = analisisAndDesignCalculation?.configurationEstimateResource?.['M/S_Resource_Total'] || 0;
  dataEstimateResource[5]['M/S/C_Resource_Total'] = analisisAndDesignCalculation?.configurationEstimateResource?.['M/S/C_Resource_Total'] || 0;

  dataEstimateResource[6]['M_Resource1'] = analisisAndDesignCalculation?.integrationEstimateResource?.resultValue1 || 0;
  dataEstimateResource[6]['M_Resource2'] = analisisAndDesignCalculation?.integrationEstimateResource?.resultValue2 || 0;
  dataEstimateResource[6]['M/S_Resource1'] = analisisAndDesignCalculation?.integrationEstimateResource?.resultValueMS1 || 0;
  dataEstimateResource[6]['M/S_Resource2'] = analisisAndDesignCalculation?.integrationEstimateResource?.resultValueMS2 || 0;
  dataEstimateResource[6]['M/S/C_Resource1'] = analisisAndDesignCalculation?.integrationEstimateResource?.resultValueMSC1 || 0;
  dataEstimateResource[6]['M/S/C_Resource2'] = analisisAndDesignCalculation?.integrationEstimateResource?.resultValueMSC2 || 0;
  dataEstimateResource[6]['M_Resource_Total'] = analisisAndDesignCalculation?.integrationEstimateResource?.["M_Resource_Total"] || 0;
  dataEstimateResource[6]['M/S_Resource_Total'] = analisisAndDesignCalculation?.integrationEstimateResource?.['M/S_Resource_Total'] || 0;
  dataEstimateResource[6]['M/S/C_Resource_Total'] = analisisAndDesignCalculation?.integrationEstimateResource?.['M/S/C_Resource_Total'] || 0;

  dataEstimateResource[7]['M_Resource1'] = analisisAndDesignCalculation?.customisationBuildEstimateResource?.resultValue1 || 0;
  dataEstimateResource[7]['M_Resource2'] = analisisAndDesignCalculation?.customisationBuildEstimateResource?.resultValue2 || 0;
  dataEstimateResource[7]['M/S_Resource1'] = analisisAndDesignCalculation?.customisationBuildEstimateResource?.resultValueMS1 || 0;
  dataEstimateResource[7]['M/S_Resource2'] = analisisAndDesignCalculation?.customisationBuildEstimateResource?.resultValueMS2 || 0;
  dataEstimateResource[7]['M/S/C_Resource1'] = analisisAndDesignCalculation?.customisationBuildEstimateResource?.resultValueMSC1 || 0;
  dataEstimateResource[7]['M/S/C_Resource2'] = analisisAndDesignCalculation?.customisationBuildEstimateResource?.resultValueMSC2 || 0;
  dataEstimateResource[7]['M_Resource_Total'] = analisisAndDesignCalculation?.customisationBuildEstimateResource?.["M_Resource_Total"] || 0;
  dataEstimateResource[7]['M/S_Resource_Total'] = analisisAndDesignCalculation?.customisationBuildEstimateResource?.['M/S_Resource_Total'] || 0;
  dataEstimateResource[7]['M/S/C_Resource_Total'] = analisisAndDesignCalculation?.customisationBuildEstimateResource?.['M/S/C_Resource_Total'] || 0;

  dataEstimateResource[8]['M_Resource1'] = analisisAndDesignCalculation?.customRequirementBuildEstimateResource?.resultValue1 || 0;
  dataEstimateResource[8]['M_Resource2'] = analisisAndDesignCalculation?.customRequirementBuildEstimateResource?.resultValue2 || 0;
  dataEstimateResource[8]['M/S_Resource1'] = analisisAndDesignCalculation?.customRequirementBuildEstimateResource?.resultValueMS1 || 0;
  dataEstimateResource[8]['M/S_Resource2'] = analisisAndDesignCalculation?.customRequirementBuildEstimateResource?.resultValueMS2 || 0;
  dataEstimateResource[8]['M/S/C_Resource1'] = analisisAndDesignCalculation?.customRequirementBuildEstimateResource?.resultValueMSC1 || 0;
  dataEstimateResource[8]['M/S/C_Resource2'] = analisisAndDesignCalculation?.customRequirementBuildEstimateResource?.resultValueMSC2 || 0;
  dataEstimateResource[8]['M_Resource_Total'] = analisisAndDesignCalculation?.customRequirementBuildEstimateResource?.["M_Resource_Total"] || 0;
  dataEstimateResource[8]['M/S_Resource_Total'] = analisisAndDesignCalculation?.customRequirementBuildEstimateResource?.['M/S_Resource_Total'] || 0;
  dataEstimateResource[8]['M/S/C_Resource_Total'] = analisisAndDesignCalculation?.customRequirementBuildEstimateResource?.['M/S/C_Resource_Total'] || 0;

  dataEstimateResource[9]['M_Resource1'] = analisisAndDesignCalculation?.documentLayoutEstimateResource?.resultValue1 || 0;
  dataEstimateResource[9]['M_Resource2'] = analisisAndDesignCalculation?.documentLayoutEstimateResource?.resultValue2 || 0;
  dataEstimateResource[9]['M/S_Resource1'] = analisisAndDesignCalculation?.documentLayoutEstimateResource?.resultValueMS1 || 0;
  dataEstimateResource[9]['M/S_Resource2'] = analisisAndDesignCalculation?.documentLayoutEstimateResource?.resultValueMS2 || 0;
  dataEstimateResource[9]['M/S/C_Resource1'] = analisisAndDesignCalculation?.documentLayoutEstimateResource?.resultValueMSC1 || 0;
  dataEstimateResource[9]['M/S/C_Resource2'] = analisisAndDesignCalculation?.documentLayoutEstimateResource?.resultValueMSC2 || 0;
  dataEstimateResource[9]['M_Resource_Total'] = analisisAndDesignCalculation?.documentLayoutEstimateResource?.["M_Resource_Total"] || 0;
  dataEstimateResource[9]['M/S_Resource_Total'] = analisisAndDesignCalculation?.documentLayoutEstimateResource?.['M/S_Resource_Total'] || 0;
  dataEstimateResource[9]['M/S/C_Resource_Total'] = analisisAndDesignCalculation?.documentLayoutEstimateResource?.['M/S/C_Resource_Total'] || 0;

  dataEstimateResource[10]['M_Resource1'] = analisisAndDesignCalculation?.reportingEstimateResource?.resultValue1 || 0;
  dataEstimateResource[10]['M_Resource2'] = analisisAndDesignCalculation?.reportingEstimateResource?.resultValue2 || 0;
  dataEstimateResource[10]['M/S_Resource1'] = analisisAndDesignCalculation?.reportingEstimateResource?.resultValueMS1 || 0;
  dataEstimateResource[10]['M/S_Resource2'] = analisisAndDesignCalculation?.reportingEstimateResource?.resultValueMS2 || 0;
  dataEstimateResource[10]['M/S/C_Resource1'] = analisisAndDesignCalculation?.reportingEstimateResource?.resultValueMSC1 || 0;
  dataEstimateResource[10]['M/S/C_Resource2'] = analisisAndDesignCalculation?.reportingEstimateResource?.resultValueMSC2 || 0;
  dataEstimateResource[10]['M_Resource_Total'] = analisisAndDesignCalculation?.reportingEstimateResource?.["M_Resource_Total"] || 0;
  dataEstimateResource[10]['M/S_Resource_Total'] = analisisAndDesignCalculation?.reportingEstimateResource?.['M/S_Resource_Total'] || 0;
  dataEstimateResource[10]['M/S/C_Resource_Total'] = analisisAndDesignCalculation?.reportingEstimateResource?.['M/S/C_Resource_Total'] || 0;

  dataEstimateResource[11]['M_Resource1'] = analisisAndDesignCalculation?.dataMigrationEstimateResource?.resultValue1 || 0;
  dataEstimateResource[11]['M_Resource2'] = analisisAndDesignCalculation?.dataMigrationEstimateResource?.resultValue2 || 0;
  dataEstimateResource[11]['M/S_Resource1'] = analisisAndDesignCalculation?.dataMigrationEstimateResource?.resultValueMS1 || 0;
  dataEstimateResource[11]['M/S_Resource2'] = analisisAndDesignCalculation?.dataMigrationEstimateResource?.resultValueMS2 || 0;
  dataEstimateResource[11]['M/S/C_Resource1'] = analisisAndDesignCalculation?.dataMigrationEstimateResource?.resultValueMSC1 || 0;
  dataEstimateResource[11]['M/S/C_Resource2'] = analisisAndDesignCalculation?.dataMigrationEstimateResource?.resultValueMSC2 || 0;
  dataEstimateResource[11]['M_Resource_Total'] = analisisAndDesignCalculation?.dataMigrationEstimateResource?.["M_Resource_Total"] || 0;
  dataEstimateResource[11]['M/S_Resource_Total'] = analisisAndDesignCalculation?.dataMigrationEstimateResource?.['M/S_Resource_Total'] || 0;
  dataEstimateResource[11]['M/S/C_Resource_Total'] = analisisAndDesignCalculation?.dataMigrationEstimateResource?.['M/S/C_Resource_Total'] || 0;

  dataEstimateResource[12]['M_Resource1'] = analisisAndDesignCalculation?.crpEstimateResource?.resultValue1 || 0;
  dataEstimateResource[12]['M_Resource2'] = analisisAndDesignCalculation?.crpEstimateResource?.resultValue2 || 0;
  dataEstimateResource[12]['M/S_Resource1'] = analisisAndDesignCalculation?.crpEstimateResource?.resultValueMS1 || 0;
  dataEstimateResource[12]['M/S_Resource2'] = analisisAndDesignCalculation?.crpEstimateResource?.resultValueMS2 || 0;
  dataEstimateResource[12]['M/S/C_Resource1'] = analisisAndDesignCalculation?.crpEstimateResource?.resultValueMSC1 || 0;
  dataEstimateResource[12]['M/S/C_Resource2'] = analisisAndDesignCalculation?.crpEstimateResource?.resultValueMSC2 || 0;
  dataEstimateResource[12]['M_Resource_Total'] = analisisAndDesignCalculation?.crpEstimateResource?.["M_Resource_Total"] || 0;
  dataEstimateResource[12]['M/S_Resource_Total'] = analisisAndDesignCalculation?.crpEstimateResource?.['M/S_Resource_Total'] || 0;
  dataEstimateResource[12]['M/S/C_Resource_Total'] = analisisAndDesignCalculation?.crpEstimateResource?.['M/S/C_Resource_Total'] || 0;

  dataEstimateResource[13]['M_Resource1'] = analisisAndDesignCalculation?.testingEstimateResource?.resultValue1 || 0;
  dataEstimateResource[13]['M_Resource2'] = analisisAndDesignCalculation?.testingEstimateResource?.resultValue2 || 0;
  dataEstimateResource[13]['M/S_Resource1'] = analisisAndDesignCalculation?.testingEstimateResource?.resultValueMS1 || 0;
  dataEstimateResource[13]['M/S_Resource2'] = analisisAndDesignCalculation?.testingEstimateResource?.resultValueMS2 || 0;
  dataEstimateResource[13]['M/S/C_Resource1'] = analisisAndDesignCalculation?.testingEstimateResource?.resultValueMSC1 || 0;
  dataEstimateResource[13]['M/S/C_Resource2'] = analisisAndDesignCalculation?.testingEstimateResource?.resultValueMSC2 || 0;
  dataEstimateResource[13]['M_Resource_Total'] = analisisAndDesignCalculation?.testingEstimateResource?.["M_Resource_Total"] || 0;
  dataEstimateResource[13]['M/S_Resource_Total'] = analisisAndDesignCalculation?.testingEstimateResource?.['M/S_Resource_Total'] || 0;
  dataEstimateResource[13]['M/S/C_Resource_Total'] = analisisAndDesignCalculation?.testingEstimateResource?.['M/S/C_Resource_Total'] || 0;

  dataEstimateResource[14]['M_Resource1'] = analisisAndDesignCalculation?.trainTheTrainerEstimateResource?.resultValue1 || 0;
  dataEstimateResource[14]['M_Resource2'] = analisisAndDesignCalculation?.trainTheTrainerEstimateResource?.resultValue2 || 0;
  dataEstimateResource[14]['M/S_Resource1'] = analisisAndDesignCalculation?.trainTheTrainerEstimateResource?.resultValueMS1 || 0;
  dataEstimateResource[14]['M/S_Resource2'] = analisisAndDesignCalculation?.trainTheTrainerEstimateResource?.resultValueMS2 || 0;
  dataEstimateResource[14]['M/S/C_Resource1'] = analisisAndDesignCalculation?.trainTheTrainerEstimateResource?.resultValueMSC1 || 0;
  dataEstimateResource[14]['M/S/C_Resource2'] = analisisAndDesignCalculation?.trainTheTrainerEstimateResource?.resultValueMSC2 || 0;
  dataEstimateResource[14]['M_Resource_Total'] = analisisAndDesignCalculation?.trainTheTrainerEstimateResource?.["M_Resource_Total"] || 0;
  dataEstimateResource[14]['M/S_Resource_Total'] = analisisAndDesignCalculation?.trainTheTrainerEstimateResource?.['M/S_Resource_Total'] || 0;
  dataEstimateResource[14]['M/S/C_Resource_Total'] = analisisAndDesignCalculation?.trainTheTrainerEstimateResource?.['M/S/C_Resource_Total'] || 0;

  dataEstimateResource[15]['M_Resource1'] = analisisAndDesignCalculation?.uatEnvironmentPreparationEstimateResource?.resultValue1 || 0;
  dataEstimateResource[15]['M_Resource2'] = analisisAndDesignCalculation?.uatEnvironmentPreparationEstimateResource?.resultValue2 || 0;
  dataEstimateResource[15]['M/S_Resource1'] = analisisAndDesignCalculation?.uatEnvironmentPreparationEstimateResource?.resultValueMS1 || 0;
  dataEstimateResource[15]['M/S_Resource2'] = analisisAndDesignCalculation?.uatEnvironmentPreparationEstimateResource?.resultValueMS2 || 0;
  dataEstimateResource[15]['M/S/C_Resource1'] = analisisAndDesignCalculation?.uatEnvironmentPreparationEstimateResource?.resultValueMSC1 || 0;
  dataEstimateResource[15]['M/S/C_Resource2'] = analisisAndDesignCalculation?.uatEnvironmentPreparationEstimateResource?.resultValueMSC2 || 0;
  dataEstimateResource[15]['M_Resource_Total'] = analisisAndDesignCalculation?.uatEnvironmentPreparationEstimateResource?.["M_Resource_Total"] || 0;
  dataEstimateResource[15]['M/S_Resource_Total'] = analisisAndDesignCalculation?.uatEnvironmentPreparationEstimateResource?.['M/S_Resource_Total'] || 0;
  dataEstimateResource[15]['M/S/C_Resource_Total'] = analisisAndDesignCalculation?.uatEnvironmentPreparationEstimateResource?.['M/S/C_Resource_Total'] || 0;

  dataEstimateResource[16]['M_Resource1'] = analisisAndDesignCalculation?.uatSupportEstimateResource?.resultValue1 || 0;
  dataEstimateResource[16]['M_Resource2'] = analisisAndDesignCalculation?.uatSupportEstimateResource?.resultValue2 || 0;
  dataEstimateResource[16]['M/S_Resource1'] = analisisAndDesignCalculation?.uatSupportEstimateResource?.resultValueMS1 || 0;
  dataEstimateResource[16]['M/S_Resource2'] = analisisAndDesignCalculation?.uatSupportEstimateResource?.resultValueMS2 || 0;
  dataEstimateResource[16]['M/S/C_Resource1'] = analisisAndDesignCalculation?.uatSupportEstimateResource?.resultValueMSC1 || 0;
  dataEstimateResource[16]['M/S/C_Resource2'] = analisisAndDesignCalculation?.uatSupportEstimateResource?.resultValueMSC2 || 0;
  dataEstimateResource[16]['M_Resource_Total'] = analisisAndDesignCalculation?.uatSupportEstimateResource?.["M_Resource_Total"] || 0;
  dataEstimateResource[16]['M/S_Resource_Total'] = analisisAndDesignCalculation?.uatSupportEstimateResource?.['M/S_Resource_Total'] || 0;
  dataEstimateResource[16]['M/S/C_Resource_Total'] = analisisAndDesignCalculation?.uatSupportEstimateResource?.['M/S/C_Resource_Total'] || 0;

  dataEstimateResource[17]['M_Resource1'] = analisisAndDesignCalculation?.prodEnvironmentPreparationEstimateResource?.resultValue1 || 0;
  dataEstimateResource[17]['M_Resource2'] = analisisAndDesignCalculation?.prodEnvironmentPreparationEstimateResource?.resultValue2 || 0;
  dataEstimateResource[17]['M/S_Resource1'] = analisisAndDesignCalculation?.prodEnvironmentPreparationEstimateResource?.resultValueMS1 || 0;
  dataEstimateResource[17]['M/S_Resource2'] = analisisAndDesignCalculation?.prodEnvironmentPreparationEstimateResource?.resultValueMS2 || 0;
  dataEstimateResource[17]['M/S/C_Resource1'] = analisisAndDesignCalculation?.prodEnvironmentPreparationEstimateResource?.resultValueMSC1 || 0;
  dataEstimateResource[17]['M/S/C_Resource2'] = analisisAndDesignCalculation?.prodEnvironmentPreparationEstimateResource?.resultValueMSC2 || 0;
  dataEstimateResource[17]['M_Resource_Total'] = analisisAndDesignCalculation?.prodEnvironmentPreparationEstimateResource?.["M_Resource_Total"] || 0;
  dataEstimateResource[17]['M/S_Resource_Total'] = analisisAndDesignCalculation?.prodEnvironmentPreparationEstimateResource?.['M/S_Resource_Total'] || 0;
  dataEstimateResource[17]['M/S/C_Resource_Total'] = analisisAndDesignCalculation?.prodEnvironmentPreparationEstimateResource?.['M/S/C_Resource_Total'] || 0;

  dataEstimateResource[18]['M_Resource1'] = analisisAndDesignCalculation?.supportHandoverEstimateResource?.resultValue1 || 0;
  dataEstimateResource[18]['M_Resource2'] = analisisAndDesignCalculation?.supportHandoverEstimateResource?.resultValue2 || 0;
  dataEstimateResource[18]['M/S_Resource1'] = analisisAndDesignCalculation?.supportHandoverEstimateResource?.resultValueMS1 || 0;
  dataEstimateResource[18]['M/S_Resource2'] = analisisAndDesignCalculation?.supportHandoverEstimateResource?.resultValueMS2 || 0;
  dataEstimateResource[18]['M/S/C_Resource1'] = analisisAndDesignCalculation?.supportHandoverEstimateResource?.resultValueMSC1 || 0;
  dataEstimateResource[18]['M/S/C_Resource2'] = analisisAndDesignCalculation?.supportHandoverEstimateResource?.resultValueMSC2 || 0;
  dataEstimateResource[18]['M_Resource_Total'] = analisisAndDesignCalculation?.supportHandoverEstimateResource?.["M_Resource_Total"] || 0;
  dataEstimateResource[18]['M/S_Resource_Total'] = analisisAndDesignCalculation?.supportHandoverEstimateResource?.['M/S_Resource_Total'] || 0;
  dataEstimateResource[18]['M/S/C_Resource_Total'] = analisisAndDesignCalculation?.supportHandoverEstimateResource?.['M/S/C_Resource_Total'] || 0;

  dataEstimateResource[19]['M_Resource1'] = analisisAndDesignCalculation?.endUserTrainingEstimateResource?.resultValue1 || 0;
  dataEstimateResource[19]['M_Resource2'] = analisisAndDesignCalculation?.endUserTrainingEstimateResource?.resultValue2 || 0;
  dataEstimateResource[19]['M/S_Resource1'] = analisisAndDesignCalculation?.endUserTrainingEstimateResource?.resultValueMS1 || 0;
  dataEstimateResource[19]['M/S_Resource2'] = analisisAndDesignCalculation?.endUserTrainingEstimateResource?.resultValueMS2 || 0;
  dataEstimateResource[19]['M/S/C_Resource1'] = analisisAndDesignCalculation?.endUserTrainingEstimateResource?.resultValueMSC1 || 0;
  dataEstimateResource[19]['M/S/C_Resource2'] = analisisAndDesignCalculation?.endUserTrainingEstimateResource?.resultValueMSC2 || 0;
  dataEstimateResource[19]['M_Resource_Total'] = analisisAndDesignCalculation?.endUserTrainingEstimateResource?.["M_Resource_Total"] || 0;
  dataEstimateResource[19]['M/S_Resource_Total'] = analisisAndDesignCalculation?.endUserTrainingEstimateResource?.['M/S_Resource_Total'] || 0;
  dataEstimateResource[19]['M/S/C_Resource_Total'] = analisisAndDesignCalculation?.endUserTrainingEstimateResource?.['M/S/C_Resource_Total'] || 0;

  dataEstimateResource[20]['M_Resource1'] = analisisAndDesignCalculation?.postGoLiveEstimateResource?.resultValue1 || 0;
  dataEstimateResource[20]['M_Resource2'] = analisisAndDesignCalculation?.postGoLiveEstimateResource?.resultValue2 || 0;
  dataEstimateResource[20]['M/S_Resource1'] = analisisAndDesignCalculation?.postGoLiveEstimateResource?.resultValueMS1 || 0;
  dataEstimateResource[20]['M/S_Resource2'] = analisisAndDesignCalculation?.postGoLiveEstimateResource?.resultValueMS2 || 0;
  dataEstimateResource[20]['M/S/C_Resource1'] = analisisAndDesignCalculation?.postGoLiveEstimateResource?.resultValueMSC1 || 0;
  dataEstimateResource[20]['M/S/C_Resource2'] = analisisAndDesignCalculation?.postGoLiveEstimateResource?.resultValueMSC2 || 0;
  dataEstimateResource[20]['M_Resource_Total'] = analisisAndDesignCalculation?.postGoLiveEstimateResource?.["M_Resource_Total"] || 0;
  dataEstimateResource[20]['M/S_Resource_Total'] = analisisAndDesignCalculation?.postGoLiveEstimateResource?.['M/S_Resource_Total'] || 0;
  dataEstimateResource[20]['M/S/C_Resource_Total'] = analisisAndDesignCalculation?.postGoLiveEstimateResource?.['M/S/C_Resource_Total'] || 0;

  dataEstimateResource[21]['M_Resource1'] =  dataEstimateResource
  .slice(0, 20 + 1) // Extract the objects in the range
  .reduce((acc, obj) => acc + obj['M_Resource1'], 0) || 0;
  dataEstimateResource[21]['M_Resource2'] = dataEstimateResource
  .slice(0, 20 + 1) // Extract the objects in the range
  .reduce((acc, obj) => acc + obj['M_Resource2'], 0) || 0;
  dataEstimateResource[21]['M/S_Resource1'] = dataEstimateResource
  .slice(0, 20 + 1) // Extract the objects in the range
  .reduce((acc, obj) => acc + obj['M/S_Resource1'], 0) || 0;
  dataEstimateResource[21]['M/S_Resource2'] = dataEstimateResource
  .slice(0, 20 + 1) // Extract the objects in the range
  .reduce((acc, obj) => acc + obj['M/S_Resource2'], 0) || 0;
  dataEstimateResource[21]['M/S/C_Resource1'] = dataEstimateResource
  .slice(0, 20 + 1) // Extract the objects in the range
  .reduce((acc, obj) => acc + obj['M/S/C_Resource1'], 0) || 0;
  dataEstimateResource[21]['M/S/C_Resource2'] = dataEstimateResource
  .slice(0, 20 + 1) // Extract the objects in the range
  .reduce((acc, obj) => acc + obj['M/S/C_Resource2'], 0) || 0;
  dataEstimateResource[21]['M_Resource_Total'] = dataEstimateResource
  .slice(0, 20 + 1) // Extract the objects in the range
  .reduce((acc, obj) => acc + obj['M_Resource_Total'], 0) || 0;
  dataEstimateResource[21]['M/S_Resource_Total'] = dataEstimateResource
  .slice(0, 20 + 1) // Extract the objects in the range
  .reduce((acc, obj) => acc + obj['M/S_Resource_Total'], 0) || 0;
  dataEstimateResource[21]['M/S/C_Resource_Total'] = dataEstimateResource
  .slice(0, 20 + 1) // Extract the objects in the range
  .reduce((acc, obj) => acc + obj['M/S/C_Resource_Total'], 0) || 0;

  // projectManager
  dataEstimateResource[22]['M_Resource1'] = analisisAndDesignCalculation?.projectManager?.resultValue1 || 0;
  dataEstimateResource[22]['M_Resource2'] = analisisAndDesignCalculation?.projectManager?.resultValue2 || 0;
  dataEstimateResource[22]['M/S_Resource1'] = analisisAndDesignCalculation?.projectManager?.resultValueMS1 || 0;
  dataEstimateResource[22]['M/S_Resource2'] = analisisAndDesignCalculation?.projectManager?.resultValueMS2 || 0;
  dataEstimateResource[22]['M/S/C_Resource1'] = analisisAndDesignCalculation?.projectManager?.resultValueMSC1 || 0;
  dataEstimateResource[22]['M/S/C_Resource2'] = analisisAndDesignCalculation?.projectManager?.resultValueMSC2 || 0;
  dataEstimateResource[22]['M_Resource_Total'] = analisisAndDesignCalculation?.projectManager?.["M_Resource_Total"] || 0;
  dataEstimateResource[22]['M/S_Resource_Total'] = analisisAndDesignCalculation?.projectManager?.['M/S_Resource_Total'] || 0;
  dataEstimateResource[22]['M/S/C_Resource_Total'] = analisisAndDesignCalculation?.projectManager?.['M/S/C_Resource_Total'] || 0;

  (dataEstimateResource[23] as any)['M_Resource1'] = dataEstimateResource[21]['M_Resource1'] * (analisisAndDesignCalculation?.fColmnValueEstimateAveRate?.resultValue || 0);
  (dataEstimateResource[23] as any)['M_Resource2'] = dataEstimateResource[21]['M_Resource2'] * (analisisAndDesignCalculation?.fColmnValueEstimateAveRate?.resultValue || 0);
  (dataEstimateResource[23] as any)['M/S_Resource1'] = dataEstimateResource[21]['M/S_Resource1'] * (analisisAndDesignCalculation?.fColmnValueEstimateAveRate?.resultValue || 0);
  (dataEstimateResource[23] as any)['M/S_Resource2'] = dataEstimateResource[21]['M/S_Resource2'] * (analisisAndDesignCalculation?.fColmnValueEstimateAveRate?.resultValue || 0);
  (dataEstimateResource[23] as any)['M/S/C_Resource1'] = dataEstimateResource[21]['M/S/C_Resource1'] * (analisisAndDesignCalculation?.fColmnValueEstimateAveRate?.resultValue || 0);
  (dataEstimateResource[23] as any)['M/S/C_Resource2'] = dataEstimateResource[21]['M/S/C_Resource2'] * (analisisAndDesignCalculation?.fColmnValueEstimateAveRate?.resultValue || 0);
  (dataEstimateResource[23] as any)['M_Resource_Total'] = dataEstimateResource[21]['M_Resource_Total'] * (analisisAndDesignCalculation?.fColmnValueEstimateAveRate?.resultValue || 0);
  (dataEstimateResource[23] as any)['M/S_Resource_Total'] = dataEstimateResource[21]['M/S_Resource_Total'] * (analisisAndDesignCalculation?.fColmnValueEstimateAveRate?.resultValue || 0);
  (dataEstimateResource[23] as any)['M/S/C_Resource_Total'] = dataEstimateResource[21]['M/S/C_Resource_Total'] * (analisisAndDesignCalculation?.fColmnValueEstimateAveRate?.resultValue || 0);

    /////////////////// ESTIMATE RESOURCE - END ///////////////////

    const responsePojectManagement = await generateProjectManagerMValue(initialDataSet, {
      responseSubtotal: {
        subTotalMAnalysisDesign,
        subTotalMSAnalysisDesign,
        subTotalMSCAnalysisDesign
      }
    }, condition);

    console.log('responsePojectManagement ==> ', responsePojectManagement);

    (data[22] as any).M = responsePojectManagement?.projectManager?.resultValue;
    (data[22] as any)['M/S'] = responsePojectManagement?.projectManager?.resultValueMS;
    (data[22] as any)['M/S/C'] = responsePojectManagement?.projectManager?.resultValueMSC;

    // projectManager

    await Promise.all([analisisAndDesignCalculation]);
    // const promises = dataIdentify.map(async (item: any) => {
    //   const { title, rows } = item;

    //   if (rows.includes('Analysis and Design')) {
    //     const response: any = await generateIColoumnValue(initialDataSet, analysisAndDesign.row);
    //       (data[0] as any).M = response?.resultValue;
    //       (data[0] as any)['M/S'] = response?.resultValueMS;
    //       (data[0] as any)['M/S/C'] = response?.resultValueMSC;
    //       console.log("Analysis and Design response => ", response);
    //     await Promise.all([response]);
    //     // Update resultArray with the response
    //     // resultArray.push(response);
    //   }
    // });

    // Wait for all asynchronous operations to complete
    // await Promise.all(promises);

    console.log('resultArray ', resultArray, data);
    const dataEstimateAverageRate: any[] = data;
    return {dataEstimateAverageRate, dataEstimateResource, dataEstimateAverageRateMilestone};
  } catch (error) {
    console.error('Error:', error);
    return resultArray;
  }
};


// export const arrayGenerator = (inititlaDataSet: any) => {
//   let resultArray: any[] = []
//   try {
//     console.log('try block', dataIdentify);
//     let count = 0;
//     let length  = 0
//     dataIdentify.forEach(async(item: any) => {
//       const {title, rows} = item;
//       length = rows.length
//       const rowsLoop = await rows.map(async(rowItem: any, rowIndex: number) => {
//         if (rowItem === 'Analysis and Design') {
//           const response: any = await generateIColoumnValue(inititlaDataSet);
//           if (data)
//             data[0].M = response;
//           resultArray = data;
//           // generateAnalysisDesignMValue(inititlaDataSet);
//           console.log("Analysis and Design response => ", response);
//           console.log('d ==> ', data)
//           count += 1
//         }
//       });
      
//       // count += 1
//       await Promise.all([rowsLoop])
//     });
//     console.log('count ==> ', count);
//     console.log('length ', dataIdentify.length, length);
    
//     if (length == count) {
//       console.log('resultArray ', resultArray);
//       console.log('data data ', data);
      
//       return resultArray
//     }
//   } catch (error) {
//     return resultArray;
//   }
// }