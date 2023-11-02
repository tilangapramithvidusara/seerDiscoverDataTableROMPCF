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
import { dataEstimateResourceMilestone } from "../../Constants/estimateResourceMilestone";

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


    const responsePojectManagement = await generateProjectManagerMValue(initialDataSet, {
      responseSubtotal: {
        subTotalMAnalysisDesign,
        subTotalMSAnalysisDesign,
        subTotalMSCAnalysisDesign
      }
    }, condition);

    (data[22] as any).M = responsePojectManagement?.projectManager?.resultValue;
    (data[22] as any)['M/S'] = responsePojectManagement?.projectManager?.resultValueMS;
    (data[22] as any)['M/S/C'] = responsePojectManagement?.projectManager?.resultValueMSC;

    // projectManager

    const responseGenerateEstimateResource = await generateEstimateResource(dataEstimateResource, analisisAndDesignCalculation, {
      subTotalMAnalysisDesign,
      subTotalMSAnalysisDesign,
      subTotalMSCAnalysisDesign
    }, condition, initialDataSet);
    const responseGenerateEstimateResourceMilestone = await generateEstimateResourceMilestone(dataEstimateResourceMilestone, analisisAndDesignCalculation, condition, initialDataSet);
  

    await Promise.all([analisisAndDesignCalculation, responseGenerateEstimateResource, responseGenerateEstimateResourceMilestone]);
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

    const dataEstimateAverageRate: any[] = data;
    return {
      dataEstimateAverageRate, 
      dataEstimateResource: responseGenerateEstimateResource, 
      dataEstimateAverageRateMilestone, 
      dataEstimateResourceMilestone: responseGenerateEstimateResourceMilestone
    };
  } catch (error) {
    console.error('Error:', error);
    return resultArray;
  }
};


const generateEstimateResource = async(dataEstimateResource: any, analisisAndDesignCalculation: any, responseSubtotal: any, condition: boolean, initialDataSet: any) => {
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
  .reduce((acc: any, obj: any) => acc + obj['M_Resource1'], 0) || 0;
  dataEstimateResource[21]['M_Resource2'] = dataEstimateResource
  .slice(0, 20 + 1) // Extract the objects in the range
  .reduce((acc: any, obj: any) => acc + obj['M_Resource2'], 0) || 0;
  dataEstimateResource[21]['M/S_Resource1'] = dataEstimateResource
  .slice(0, 20 + 1) // Extract the objects in the range
  .reduce((acc: any, obj: any) => acc + obj['M/S_Resource1'], 0) || 0;
  dataEstimateResource[21]['M/S_Resource2'] = dataEstimateResource
  .slice(0, 20 + 1) // Extract the objects in the range
  .reduce((acc: any, obj: any) => acc + obj['M/S_Resource2'], 0) || 0;
  dataEstimateResource[21]['M/S/C_Resource1'] = dataEstimateResource
  .slice(0, 20 + 1) // Extract the objects in the range
  .reduce((acc: any, obj: any) => acc + obj['M/S/C_Resource1'], 0) || 0;
  dataEstimateResource[21]['M/S/C_Resource2'] = dataEstimateResource
  .slice(0, 20 + 1) // Extract the objects in the range
  .reduce((acc: any, obj: any) => acc + obj['M/S/C_Resource2'], 0) || 0;
  dataEstimateResource[21]['M_Resource_Total'] = dataEstimateResource
  .slice(0, 20 + 1) // Extract the objects in the range
  .reduce((acc: any, obj: any) => acc + obj['M_Resource_Total'], 0) || 0;
  dataEstimateResource[21]['M/S_Resource_Total'] = dataEstimateResource
  .slice(0, 20 + 1) // Extract the objects in the range
  .reduce((acc: any, obj: any) => acc + obj['M/S_Resource_Total'], 0) || 0;
  dataEstimateResource[21]['M/S/C_Resource_Total'] = dataEstimateResource
  .slice(0, 20 + 1) // Extract the objects in the range
  .reduce((acc: any, obj: any) => acc + obj['M/S/C_Resource_Total'], 0) || 0;

  // const {
  //   subTotalMAnalysisDesign,
  //   subTotalMSAnalysisDesign,
  //   subTotalMSCAnalysisDesign
  // }: {
  //   subTotalMAnalysisDesign: any,
  //   subTotalMSAnalysisDesign: any,
  //   subTotalMSCAnalysisDesign: any,
  // } = responseSubtotal;

  
  

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
  await Promise.all(dataEstimateResource);
  return dataEstimateResource;
    /////////////////// ESTIMATE RESOURCE - END ///////////////////
}

const generateEstimateResourceMilestone = async( dataEstimateResourceMilestone: any, analisisAndDesignCalculation: any, condition: boolean, initialDataSet: any) => {
  let subTotalMAnalysisDesign = 0
  let subTotalMSAnalysisDesign = 0
  let subTotalMSCAnalysisDesign = 0

  let subTotalMBuild = 0
  let subTotalMSBuild = 0
  let subTotalMSCBuild = 0

  let subTotalMDeoploy = 0
  let subTotalMSDeoploy = 0
  let subTotalMSCDeoploy = 0

  let subTotalMOperation = 0
  let subTotalMSOperation = 0
  let subTotalMSCOperation = 0

  let totalM1AnalysisDesign = 0
  let totalM2AnalysisDesign = 0
  let totalMS1AnalysisDesign = 0
  let totalMS2AnalysisDesign = 0
  let totalMSC1AnalysisDesign = 0
  let totalMSC2AnalysisDesign = 0

  let totalM1Build = 0
  let totalMS1Build = 0
  let totalMSC1Build = 0
  let totalM2Build = 0
  let totalMS2Build = 0
  let totalMSC2Build = 0

  let totalM1Deoploy = 0
  let totalMS1Deoploy = 0
  let totalMSC1Deoploy = 0
  let totalM2Deoploy = 0
  let totalMS2Deoploy = 0
  let totalMSC2Deoploy = 0

  let totalM1Operation = 0
  let totalMS1Operation = 0
  let totalMSC1Operation = 0
  let totalM2Operation = 0
  let totalMS2Operation = 0
  let totalMSC2Operation = 0
    dataEstimateResourceMilestone[0]['M_Resource1'] = analisisAndDesignCalculation?.analysisDesingEstimateResource?.resultValue1 || 0;
    dataEstimateResourceMilestone[0]['M_Resource2'] = analisisAndDesignCalculation?.analysisDesingEstimateResource?.resultValue2 || 0;
    dataEstimateResourceMilestone[0]['M/S_Resource1'] = analisisAndDesignCalculation?.analysisDesingEstimateResource?.resultValueMS1 || 0;
    dataEstimateResourceMilestone[0]['M/S_Resource2'] = analisisAndDesignCalculation?.analysisDesingEstimateResource?.resultValueMS2 || 0;
    dataEstimateResourceMilestone[0]['M/S/C_Resource1'] = analisisAndDesignCalculation?.analysisDesingEstimateResource?.resultValueMSC1 || 0;
    dataEstimateResourceMilestone[0]['M/S/C_Resource2'] = analisisAndDesignCalculation?.analysisDesingEstimateResource?.resultValueMSC2 || 0;
    dataEstimateResourceMilestone[0]['M_Resource_Total'] = analisisAndDesignCalculation?.analysisDesingEstimateResource?.["M_Resource_Total"] || 0;
    dataEstimateResourceMilestone[0]['M/S_Resource_Total'] = analisisAndDesignCalculation?.analysisDesingEstimateResource?.['M/S_Resource_Total'] || 0;
    dataEstimateResourceMilestone[0]['M/S/C_Resource_Total'] = analisisAndDesignCalculation?.analysisDesingEstimateResource?.['M/S/C_Resource_Total'] || 0;
    subTotalMAnalysisDesign += analisisAndDesignCalculation?.subSections?.responseAnalisisDesign?.resultValue || 0;
    subTotalMSAnalysisDesign += analisisAndDesignCalculation?.subSections?.responseAnalisisDesign?.resultValueMS || 0;
    subTotalMSCAnalysisDesign += analisisAndDesignCalculation?.subSections?.responseAnalisisDesign?.resultValueMSC || 0;

    totalM1AnalysisDesign += analisisAndDesignCalculation?.analysisDesingEstimateResource?.resultValue1;
    totalM2AnalysisDesign += analisisAndDesignCalculation?.analysisDesingEstimateResource?.resultValue2;
    totalMS1AnalysisDesign += analisisAndDesignCalculation?.analysisDesingEstimateResource?.resultValueMS1;
    totalMS2AnalysisDesign += analisisAndDesignCalculation?.analysisDesingEstimateResource?.resultValueMS2;
    totalMSC1AnalysisDesign += analisisAndDesignCalculation?.analysisDesingEstimateResource?.resultValueMSC1;
    totalMSC2AnalysisDesign += analisisAndDesignCalculation?.analysisDesingEstimateResource?.resultValueMSC2;
    // subTotalMAnalysisDesign += analisisAndDesignCalculation?.analysisDesingEstimateResource?.["M_Resource_Total"] || 0;
    // subTotalMSAnalysisDesign += analisisAndDesignCalculation?.analysisDesingEstimateResource?.["M/S_Resource_Total"] || 0;
    // subTotalMSCAnalysisDesign += analisisAndDesignCalculation?.analysisDesingEstimateResource?.["M/S/C_Resource_Total"] || 0;
  
    dataEstimateResourceMilestone[1]['M_Resource1'] = analisisAndDesignCalculation?.customisationDesignEstimateResource?.resultValue1 || 0;
    dataEstimateResourceMilestone[1]['M_Resource2'] = analisisAndDesignCalculation?.customisationDesignEstimateResource?.resultValue2 || 0;
    dataEstimateResourceMilestone[1]['M/S_Resource1'] = analisisAndDesignCalculation?.customisationDesignEstimateResource?.resultValueMS1 || 0;
    dataEstimateResourceMilestone[1]['M/S_Resource2'] = analisisAndDesignCalculation?.customisationDesignEstimateResource?.resultValueMS2 || 0;
    dataEstimateResourceMilestone[1]['M/S/C_Resource1'] = analisisAndDesignCalculation?.customisationDesignEstimateResource?.resultValueMSC1 || 0;
    dataEstimateResourceMilestone[1]['M/S/C_Resource2'] = analisisAndDesignCalculation?.customisationDesignEstimateResource?.resultValueMSC2 || 0;
    dataEstimateResourceMilestone[1]['M_Resource_Total'] = analisisAndDesignCalculation?.customisationDesignEstimateResource?.["M_Resource_Total"] || 0;
    dataEstimateResourceMilestone[1]['M/S_Resource_Total'] = analisisAndDesignCalculation?.customisationDesignEstimateResource?.['M/S_Resource_Total'] || 0;
    dataEstimateResourceMilestone[1]['M/S/C_Resource_Total'] = analisisAndDesignCalculation?.customisationDesignEstimateResource?.['M/S/C_Resource_Total'] || 0;
    subTotalMAnalysisDesign += analisisAndDesignCalculation?.subSections?.responseCustomisationDesign?.customisation?.resultValue || 0
    subTotalMSAnalysisDesign += analisisAndDesignCalculation?.subSections?.responseCustomisationDesign?.customisation?.resultValueMS || 0
    subTotalMSCAnalysisDesign += analisisAndDesignCalculation?.subSections?.responseCustomisationDesign?.customisation?.resultValueMSC || 0

    totalM1AnalysisDesign += analisisAndDesignCalculation?.customisationDesignEstimateResource?.resultValue1;
    totalM2AnalysisDesign += analisisAndDesignCalculation?.customisationDesignEstimateResource?.resultValue2;
    totalMS1AnalysisDesign += analisisAndDesignCalculation?.customisationDesignEstimateResource?.resultValueMS1;
    totalMS2AnalysisDesign += analisisAndDesignCalculation?.customisationDesignEstimateResource?.resultValueMS2;
    totalMSC1AnalysisDesign += analisisAndDesignCalculation?.customisationDesignEstimateResource?.resultValueMSC1;
    totalMSC2AnalysisDesign += analisisAndDesignCalculation?.customisationDesignEstimateResource?.resultValueMSC2;
    // subTotalMAnalysisDesign += analisisAndDesignCalculation?.customisationDesignEstimateResource?.["M_Resource_Total"] || 0;
    // subTotalMSAnalysisDesign += analisisAndDesignCalculation?.customisationDesignEstimateResource?.["M/S_Resource_Total"] || 0;
    // subTotalMSCAnalysisDesign += analisisAndDesignCalculation?.customisationDesignEstimateResource?.["M/S/C_Resource_Total"] || 0;

    dataEstimateResourceMilestone[2]['M_Resource1'] = analisisAndDesignCalculation?.customRequirementDesignEstimateResource?.resultValue1 || 0;
    dataEstimateResourceMilestone[2]['M_Resource2'] = analisisAndDesignCalculation?.customRequirementDesignEstimateResource?.resultValue2 || 0;
    dataEstimateResourceMilestone[2]['M/S_Resource1'] = analisisAndDesignCalculation?.customRequirementDesignEstimateResource?.resultValueMS1 || 0;
    dataEstimateResourceMilestone[2]['M/S_Resource2'] = analisisAndDesignCalculation?.customRequirementDesignEstimateResource?.resultValueMS2 || 0;
    dataEstimateResourceMilestone[2]['M/S/C_Resource1'] = analisisAndDesignCalculation?.customRequirementDesignEstimateResource?.resultValueMSC1 || 0;
    dataEstimateResourceMilestone[2]['M/S/C_Resource2'] = analisisAndDesignCalculation?.customRequirementDesignEstimateResource?.resultValueMSC2 || 0;
    dataEstimateResourceMilestone[2]['M_Resource_Total'] = analisisAndDesignCalculation?.customRequirementDesignEstimateResource?.["M_Resource_Total"] || 0;
    dataEstimateResourceMilestone[2]['M/S_Resource_Total'] = analisisAndDesignCalculation?.customRequirementDesignEstimateResource?.['M/S_Resource_Total'] || 0;
    dataEstimateResourceMilestone[2]['M/S/C_Resource_Total'] = analisisAndDesignCalculation?.customRequirementDesignEstimateResource?.['M/S/C_Resource_Total'] || 0;
    subTotalMAnalysisDesign += analisisAndDesignCalculation?.subSections?.responseCustomRequirementDesign?.customRequirement?.resultValue || 0;
    subTotalMSAnalysisDesign += analisisAndDesignCalculation?.subSections?.responseCustomRequirementDesign?.customRequirement?.resultValueMS || 0;
    subTotalMSCAnalysisDesign += analisisAndDesignCalculation?.subSections?.responseCustomRequirementDesign?.customRequirement?.resultValueMSC || 0;

    totalM1AnalysisDesign += analisisAndDesignCalculation?.customRequirementDesignEstimateResource?.resultValue1;
    totalM2AnalysisDesign += analisisAndDesignCalculation?.customRequirementDesignEstimateResource?.resultValue2;
    totalMS1AnalysisDesign += analisisAndDesignCalculation?.customRequirementDesignEstimateResource?.resultValueMS1;
    totalMS2AnalysisDesign += analisisAndDesignCalculation?.customRequirementDesignEstimateResource?.resultValueMS2;
    totalMSC1AnalysisDesign += analisisAndDesignCalculation?.customRequirementDesignEstimateResource?.resultValueMSC1;
    totalMSC2AnalysisDesign += analisisAndDesignCalculation?.customRequirementDesignEstimateResource?.resultValueMSC2;
    // subTotalMAnalysisDesign += analisisAndDesignCalculation?.customRequirementDesignEstimateResource?.["M_Resource_Total"] || 0;
    // subTotalMSAnalysisDesign += analisisAndDesignCalculation?.customRequirementDesignEstimateResource?.["M/S_Resource_Total"] || 0;
    // subTotalMSCAnalysisDesign += analisisAndDesignCalculation?.customRequirementDesignEstimateResource?.["M/S/C_Resource_Total"] || 0;

    dataEstimateResourceMilestone[3]['M_Resource1'] = analisisAndDesignCalculation?.documentationEstimateResource?.resultValue1 || 0;
    dataEstimateResourceMilestone[3]['M_Resource2'] = analisisAndDesignCalculation?.documentationEstimateResource?.resultValue2 || 0;
    dataEstimateResourceMilestone[3]['M/S_Resource1'] = analisisAndDesignCalculation?.documentationEstimateResource?.resultValueMS1 || 0;
    dataEstimateResourceMilestone[3]['M/S_Resource2'] = analisisAndDesignCalculation?.documentationEstimateResource?.resultValueMS2 || 0;
    dataEstimateResourceMilestone[3]['M/S/C_Resource1'] = analisisAndDesignCalculation?.documentationEstimateResource?.resultValueMSC1 || 0;
    dataEstimateResourceMilestone[3]['M/S/C_Resource2'] = analisisAndDesignCalculation?.documentationEstimateResource?.resultValueMSC2 || 0;
    dataEstimateResourceMilestone[3]['M_Resource_Total'] = analisisAndDesignCalculation?.documentationEstimateResource?.["M_Resource_Total"] || 0;
    dataEstimateResourceMilestone[3]['M/S_Resource_Total'] = analisisAndDesignCalculation?.documentationEstimateResource?.['M/S_Resource_Total'] || 0;
    dataEstimateResourceMilestone[3]['M/S/C_Resource_Total'] = analisisAndDesignCalculation?.documentationEstimateResource?.['M/S/C_Resource_Total'] || 0;
    subTotalMAnalysisDesign += analisisAndDesignCalculation?.subSections?.responseDocumentation?.documentation?.resultValue || 0
    subTotalMSAnalysisDesign += analisisAndDesignCalculation?.subSections?.responseDocumentation?.documentation?.resultValueMS || 0
    subTotalMSCAnalysisDesign += analisisAndDesignCalculation?.subSections?.responseDocumentation?.documentation?.resultValueMSC || 0

    totalM1AnalysisDesign += analisisAndDesignCalculation?.documentationEstimateResource?.resultValue1;
    totalM2AnalysisDesign += analisisAndDesignCalculation?.documentationEstimateResource?.resultValue2;
    totalMS1AnalysisDesign += analisisAndDesignCalculation?.documentationEstimateResource?.resultValueMS1;
    totalMS2AnalysisDesign += analisisAndDesignCalculation?.documentationEstimateResource?.resultValueMS2;
    totalMSC1AnalysisDesign += analisisAndDesignCalculation?.documentationEstimateResource?.resultValueMSC1;
    totalMSC2AnalysisDesign += analisisAndDesignCalculation?.documentationEstimateResource?.resultValueMSC2;

    // subTotalMAnalysisDesign += analisisAndDesignCalculation?.documentationEstimateResource?.["M_Resource_Total"] || 0;
    // subTotalMSAnalysisDesign += analisisAndDesignCalculation?.documentationEstimateResource?.["M/S_Resource_Total"] || 0;
    // subTotalMSCAnalysisDesign += analisisAndDesignCalculation?.documentationEstimateResource?.["M/S/C_Resource_Total"] || 0;

    dataEstimateResourceMilestone[4]['M_Resource1'] = analisisAndDesignCalculation?.designReviewEstimateResource?.resultValue1 || 0;
    dataEstimateResourceMilestone[4]['M_Resource2'] = analisisAndDesignCalculation?.designReviewEstimateResource?.resultValue2 || 0;
    dataEstimateResourceMilestone[4]['M/S_Resource1'] = analisisAndDesignCalculation?.designReviewEstimateResource?.resultValueMS1 || 0;
    dataEstimateResourceMilestone[4]['M/S_Resource2'] = analisisAndDesignCalculation?.designReviewEstimateResource?.resultValueMS2 || 0;
    dataEstimateResourceMilestone[4]['M/S/C_Resource1'] = analisisAndDesignCalculation?.designReviewEstimateResource?.resultValueMSC1 || 0;
    dataEstimateResourceMilestone[4]['M/S/C_Resource2'] = analisisAndDesignCalculation?.designReviewEstimateResource?.resultValueMSC2 || 0;
    dataEstimateResourceMilestone[4]['M_Resource_Total'] = analisisAndDesignCalculation?.designReviewEstimateResource?.["M_Resource_Total"] || 0;
    dataEstimateResourceMilestone[4]['M/S_Resource_Total'] = analisisAndDesignCalculation?.designReviewEstimateResource?.['M/S_Resource_Total'] || 0;
    dataEstimateResourceMilestone[4]['M/S/C_Resource_Total'] = analisisAndDesignCalculation?.designReviewEstimateResource?.['M/S/C_Resource_Total'] || 0;
    subTotalMAnalysisDesign += analisisAndDesignCalculation?.subSections?.responseDesignReview?.designReview?.resultValue || 0;
    subTotalMSAnalysisDesign += analisisAndDesignCalculation?.subSections?.responseDesignReview?.designReview?.resultValueMS || 0;
    subTotalMSCAnalysisDesign += analisisAndDesignCalculation?.subSections?.responseDesignReview?.designReview?.resultValueMSC || 0;

    totalM1AnalysisDesign += analisisAndDesignCalculation?.designReviewEstimateResource?.resultValue1;
    totalM2AnalysisDesign += analisisAndDesignCalculation?.designReviewEstimateResource?.resultValue2;
    totalMS1AnalysisDesign += analisisAndDesignCalculation?.designReviewEstimateResource?.resultValueMS1;
    totalMS2AnalysisDesign += analisisAndDesignCalculation?.designReviewEstimateResource?.resultValueMS2;
    totalMSC1AnalysisDesign += analisisAndDesignCalculation?.designReviewEstimateResource?.resultValueMSC1;
    totalMSC2AnalysisDesign += analisisAndDesignCalculation?.designReviewEstimateResource?.resultValueMSC2;
    
    // subTotalMAnalysisDesign += analisisAndDesignCalculation?.designReviewEstimateResource?.["M_Resource_Total"] || 0;
    // subTotalMSAnalysisDesign += analisisAndDesignCalculation?.designReviewEstimateResource?.["M/S_Resource_Total"] || 0;
    // subTotalMSCAnalysisDesign += analisisAndDesignCalculation?.designReviewEstimateResource?.["M/S/C_Resource_Total"] || 0;
    
    let subValueAnalysisDesign = await calculateProjectManagerEstimateAvgRateMilestone(initialDataSet, analisisAndDesignCalculation?.subSections, 'Analysis and Design')
    let resultValueSubProjectManagerAnalysisDesign = generateEstimateResourceValue(
      initialDataSet, {
        M: (subValueAnalysisDesign.resultValue || 0),
        'M/S': (subValueAnalysisDesign.resultValueMS || 0),
        "M/S/C": (subValueAnalysisDesign.resultValueMSC || 0),
      },
      {},
      'Project Manager',
      'Estimate Resource Milestone',
      condition
    ); 

    let resultValueProjectManagerAnalysisDesign = generateEstimateResourceValue(
      initialDataSet, {
        M: (resultValueSubProjectManagerAnalysisDesign?.['M_Resource_Total'] || 0),
        'M/S': (resultValueSubProjectManagerAnalysisDesign?.['M/S_Resource_Total'] || 0),
        "M/S/C": (resultValueSubProjectManagerAnalysisDesign?.['M/S/C_Resource_Total'] || 0),
      },
      {},
      'Project Manager',
      'All',
      condition
    ); 
  
    // dataEstimateResourceMilestone Project Manager Analysis Design
    dataEstimateResourceMilestone[5]['M_Resource1'] =  resultValueProjectManagerAnalysisDesign?.resultValue1;
    dataEstimateResourceMilestone[5]['M_Resource2'] =  resultValueProjectManagerAnalysisDesign?.resultValue2;
    dataEstimateResourceMilestone[5]['M/S_Resource1'] =  resultValueProjectManagerAnalysisDesign?.resultValueMS1;
    dataEstimateResourceMilestone[5]['M/S_Resource2'] =  resultValueProjectManagerAnalysisDesign?.resultValueMS2;
    dataEstimateResourceMilestone[5]['M/S/C_Resource1'] =  resultValueProjectManagerAnalysisDesign?.resultValueMSC1;
    dataEstimateResourceMilestone[5]['M/S/C_Resource2'] =  resultValueProjectManagerAnalysisDesign?.resultValueMSC2;
    dataEstimateResourceMilestone[5]['M_Resource_Total'] =  resultValueProjectManagerAnalysisDesign?.['M_Resource_Total'];
    dataEstimateResourceMilestone[5]['M/S_Resource_Total'] =  resultValueProjectManagerAnalysisDesign?.['M/S_Resource_Total'];
    dataEstimateResourceMilestone[5]['M/S/C_Resource_Total'] = resultValueProjectManagerAnalysisDesign?.['M/S/C_Resource_Total'];

    totalM1AnalysisDesign += resultValueProjectManagerAnalysisDesign?.resultValue1;
    totalM2AnalysisDesign += resultValueProjectManagerAnalysisDesign?.resultValue2;
    totalMS1AnalysisDesign += resultValueProjectManagerAnalysisDesign?.resultValueMS1;
    totalMS2AnalysisDesign += resultValueProjectManagerAnalysisDesign?.resultValueMS2;
    totalMSC1AnalysisDesign += resultValueProjectManagerAnalysisDesign?.resultValueMSC1;
    totalMSC2AnalysisDesign += resultValueProjectManagerAnalysisDesign?.resultValueMSC2;
  
    // dataEstimateResourceMilestone Total Analysis Design
    dataEstimateResourceMilestone[6]['M_Resource1'] =  totalM1AnalysisDesign;
    dataEstimateResourceMilestone[6]['M_Resource2'] =  totalM2AnalysisDesign;
    dataEstimateResourceMilestone[6]['M/S_Resource1'] =  totalMS1AnalysisDesign;
    dataEstimateResourceMilestone[6]['M/S_Resource2'] =  totalMS2AnalysisDesign;
    dataEstimateResourceMilestone[6]['M/S/C_Resource1'] =  totalMSC1AnalysisDesign;
    dataEstimateResourceMilestone[6]['M/S/C_Resource2'] =  totalMSC2AnalysisDesign;
    dataEstimateResourceMilestone[6]['M_Resource_Total'] =  totalM1AnalysisDesign + totalM2AnalysisDesign;
    dataEstimateResourceMilestone[6]['M/S_Resource_Total'] =  totalMS1AnalysisDesign + totalMS2AnalysisDesign;
    dataEstimateResourceMilestone[6]['M/S/C_Resource_Total'] =  totalMSC1AnalysisDesign + totalMSC2AnalysisDesign;
  
    dataEstimateResourceMilestone[7]['M_Resource1'] = analisisAndDesignCalculation?.configurationEstimateResource?.resultValue1 || 0;
    dataEstimateResourceMilestone[7]['M_Resource2'] = analisisAndDesignCalculation?.configurationEstimateResource?.resultValue2 || 0;
    dataEstimateResourceMilestone[7]['M/S_Resource1'] = analisisAndDesignCalculation?.configurationEstimateResource?.resultValueMS1 || 0;
    dataEstimateResourceMilestone[7]['M/S_Resource2'] = analisisAndDesignCalculation?.configurationEstimateResource?.resultValueMS2 || 0;
    dataEstimateResourceMilestone[7]['M/S/C_Resource1'] = analisisAndDesignCalculation?.configurationEstimateResource?.resultValueMSC1 || 0;
    dataEstimateResourceMilestone[7]['M/S/C_Resource2'] = analisisAndDesignCalculation?.configurationEstimateResource?.resultValueMSC2 || 0;
    dataEstimateResourceMilestone[7]['M_Resource_Total'] = analisisAndDesignCalculation?.configurationEstimateResource?.["M_Resource_Total"] || 0;
    dataEstimateResourceMilestone[7]['M/S_Resource_Total'] = analisisAndDesignCalculation?.configurationEstimateResource?.['M/S_Resource_Total'] || 0;
    dataEstimateResourceMilestone[7]['M/S/C_Resource_Total'] = analisisAndDesignCalculation?.configurationEstimateResource?.['M/S/C_Resource_Total'] || 0;
    subTotalMBuild += analisisAndDesignCalculation?.subSections?.responseAnalisisDesign?.configuration?.resultValue || 0
    subTotalMSBuild += analisisAndDesignCalculation?.subSections?.responseAnalisisDesign?.configuration?.resultValueMS || 0
    subTotalMSCBuild += analisisAndDesignCalculation?.subSections?.responseAnalisisDesign?.configuration?.resultValueMSC || 0

    totalM1Build += analisisAndDesignCalculation?.configurationEstimateResource?.resultValue1;
    totalM2Build += analisisAndDesignCalculation?.configurationEstimateResource?.resultValue2;
    totalMS1Build += analisisAndDesignCalculation?.configurationEstimateResource?.resultValueMS1;
    totalMS2Build += analisisAndDesignCalculation?.configurationEstimateResource?.resultValueMS2;
    totalMSC1Build += analisisAndDesignCalculation?.configurationEstimateResource?.resultValueMSC1;
    totalMSC2Build += analisisAndDesignCalculation?.configurationEstimateResource?.resultValueMSC2;

    // subTotalMBuild += analisisAndDesignCalculation?.configurationEstimateResource?.["M_Resource_Total"] || 0;
    // subTotalMSBuild += analisisAndDesignCalculation?.configurationEstimateResource?.["M/S_Resource_Total"] || 0;
    // subTotalMSCBuild += analisisAndDesignCalculation?.configurationEstimateResource?.["M/S/C_Resource_Total"] || 0;
  
    dataEstimateResourceMilestone[8]['M_Resource1'] = analisisAndDesignCalculation?.integrationEstimateResource?.resultValue1 || 0;
    dataEstimateResourceMilestone[8]['M_Resource2'] = analisisAndDesignCalculation?.integrationEstimateResource?.resultValue2 || 0;
    dataEstimateResourceMilestone[8]['M/S_Resource1'] = analisisAndDesignCalculation?.integrationEstimateResource?.resultValueMS1 || 0;
    dataEstimateResourceMilestone[8]['M/S_Resource2'] = analisisAndDesignCalculation?.integrationEstimateResource?.resultValueMS2 || 0;
    dataEstimateResourceMilestone[8]['M/S/C_Resource1'] = analisisAndDesignCalculation?.integrationEstimateResource?.resultValueMSC1 || 0;
    dataEstimateResourceMilestone[8]['M/S/C_Resource2'] = analisisAndDesignCalculation?.integrationEstimateResource?.resultValueMSC2 || 0;
    dataEstimateResourceMilestone[8]['M_Resource_Total'] = analisisAndDesignCalculation?.integrationEstimateResource?.["M_Resource_Total"] || 0;
    dataEstimateResourceMilestone[8]['M/S_Resource_Total'] = analisisAndDesignCalculation?.integrationEstimateResource?.['M/S_Resource_Total'] || 0;
    dataEstimateResourceMilestone[8]['M/S/C_Resource_Total'] = analisisAndDesignCalculation?.integrationEstimateResource?.['M/S/C_Resource_Total'] || 0;
    subTotalMBuild += analisisAndDesignCalculation?.subSections?.responseIntegration?.integration?.resultValue || 0
    subTotalMSBuild += analisisAndDesignCalculation?.subSections?.responseIntegration?.integration?.resultValueMS || 0
    subTotalMSCBuild += analisisAndDesignCalculation?.subSections?.responseIntegration?.integration?.resultValueMSC || 0

    totalM1Build += analisisAndDesignCalculation?.integrationEstimateResource?.resultValue1;
    totalM2Build += analisisAndDesignCalculation?.integrationEstimateResource?.resultValue2;
    totalMS1Build += analisisAndDesignCalculation?.integrationEstimateResource?.resultValueMS1;
    totalMS2Build += analisisAndDesignCalculation?.integrationEstimateResource?.resultValueMS2;
    totalMSC1Build += analisisAndDesignCalculation?.integrationEstimateResource?.resultValueMSC1;
    totalMSC2Build += analisisAndDesignCalculation?.integrationEstimateResource?.resultValueMSC2;
    
    // subTotalMBuild += analisisAndDesignCalculation?.integrationEstimateResource?.["M_Resource_Total"] || 0
    // subTotalMSBuild += analisisAndDesignCalculation?.integrationEstimateResource?.["M/S_Resource_Total"] || 0
    // subTotalMSCBuild += analisisAndDesignCalculation?.integrationEstimateResource?.["M/S/C_Resource_Total"] || 0

    dataEstimateResourceMilestone[9]['M_Resource1'] = analisisAndDesignCalculation?.customisationBuildEstimateResource?.resultValue1 || 0;
    dataEstimateResourceMilestone[9]['M_Resource2'] = analisisAndDesignCalculation?.customisationBuildEstimateResource?.resultValue2 || 0;
    dataEstimateResourceMilestone[9]['M/S_Resource1'] = analisisAndDesignCalculation?.customisationBuildEstimateResource?.resultValueMS1 || 0;
    dataEstimateResourceMilestone[9]['M/S_Resource2'] = analisisAndDesignCalculation?.customisationBuildEstimateResource?.resultValueMS2 || 0;
    dataEstimateResourceMilestone[9]['M/S/C_Resource1'] = analisisAndDesignCalculation?.customisationBuildEstimateResource?.resultValueMSC1 || 0;
    dataEstimateResourceMilestone[9]['M/S/C_Resource2'] = analisisAndDesignCalculation?.customisationBuildEstimateResource?.resultValueMSC2 || 0;
    dataEstimateResourceMilestone[9]['M_Resource_Total'] = analisisAndDesignCalculation?.customisationBuildEstimateResource?.["M_Resource_Total"] || 0;
    dataEstimateResourceMilestone[9]['M/S_Resource_Total'] = analisisAndDesignCalculation?.customisationBuildEstimateResource?.['M/S_Resource_Total'] || 0;
    dataEstimateResourceMilestone[9]['M/S/C_Resource_Total'] = analisisAndDesignCalculation?.customisationBuildEstimateResource?.['M/S/C_Resource_Total'] || 0;
    subTotalMBuild += analisisAndDesignCalculation?.subSections?.responseCustomisationDesign?.customisationBuild?.resultValue || 0
    subTotalMSBuild += analisisAndDesignCalculation?.subSections?.responseCustomisationDesign?.customisationBuild?.resultValueMS || 0
    subTotalMSCBuild += analisisAndDesignCalculation?.subSections?.responseCustomisationDesign?.customisationBuild?.resultValueMSC || 0

    totalM1Build += analisisAndDesignCalculation?.customisationBuildEstimateResource?.resultValue1;
    totalM2Build += analisisAndDesignCalculation?.customisationBuildEstimateResource?.resultValue2;
    totalMS1Build += analisisAndDesignCalculation?.customisationBuildEstimateResource?.resultValueMS1;
    totalMS2Build += analisisAndDesignCalculation?.customisationBuildEstimateResource?.resultValueMS2;
    totalMSC1Build += analisisAndDesignCalculation?.customisationBuildEstimateResource?.resultValueMSC1;
    totalMSC2Build += analisisAndDesignCalculation?.customisationBuildEstimateResource?.resultValueMSC2;
    
    // subTotalMBuild +=  analisisAndDesignCalculation?.customisationBuildEstimateResource?.["M_Resource_Total"] || 0
    // subTotalMSBuild +=  analisisAndDesignCalculation?.customisationBuildEstimateResource?.["M/S_Resource_Total"] || 0
    // subTotalMSCBuild +=  analisisAndDesignCalculation?.customisationBuildEstimateResource?.["M/S/C_Resource_Total"] || 0

    dataEstimateResourceMilestone[10]['M_Resource1'] = analisisAndDesignCalculation?.customRequirementBuildEstimateResource?.resultValue1 || 0;
    dataEstimateResourceMilestone[10]['M_Resource2'] = analisisAndDesignCalculation?.customRequirementBuildEstimateResource?.resultValue2 || 0;
    dataEstimateResourceMilestone[10]['M/S_Resource1'] = analisisAndDesignCalculation?.customRequirementBuildEstimateResource?.resultValueMS1 || 0;
    dataEstimateResourceMilestone[10]['M/S_Resource2'] = analisisAndDesignCalculation?.customRequirementBuildEstimateResource?.resultValueMS2 || 0;
    dataEstimateResourceMilestone[10]['M/S/C_Resource1'] = analisisAndDesignCalculation?.customRequirementBuildEstimateResource?.resultValueMSC1 || 0;
    dataEstimateResourceMilestone[10]['M/S/C_Resource2'] = analisisAndDesignCalculation?.customRequirementBuildEstimateResource?.resultValueMSC2 || 0;
    dataEstimateResourceMilestone[10]['M_Resource_Total'] = analisisAndDesignCalculation?.customRequirementBuildEstimateResource?.["M_Resource_Total"] || 0;
    dataEstimateResourceMilestone[10]['M/S_Resource_Total'] = analisisAndDesignCalculation?.customRequirementBuildEstimateResource?.['M/S_Resource_Total'] || 0;
    dataEstimateResourceMilestone[10]['M/S/C_Resource_Total'] = analisisAndDesignCalculation?.customRequirementBuildEstimateResource?.['M/S/C_Resource_Total'] || 0;
    subTotalMBuild += analisisAndDesignCalculation?.subSections?.responseCustomRequirementDesign?.customRequirementBuild?.resultValue || 0
    subTotalMSBuild += analisisAndDesignCalculation?.subSections?.responseCustomRequirementDesign?.customRequirementBuild?.resultValueMS || 0
    subTotalMSCBuild += analisisAndDesignCalculation?.subSections?.responseCustomRequirementDesign?.customRequirementBuild?.resultValueMSC || 0

    totalM1Build += analisisAndDesignCalculation?.customRequirementBuildEstimateResource?.resultValue1;
    totalM2Build += analisisAndDesignCalculation?.customRequirementBuildEstimateResource?.resultValue2;
    totalMS1Build += analisisAndDesignCalculation?.customRequirementBuildEstimateResource?.resultValueMS1;
    totalMS2Build += analisisAndDesignCalculation?.customRequirementBuildEstimateResource?.resultValueMS2;
    totalMSC1Build += analisisAndDesignCalculation?.customRequirementBuildEstimateResource?.resultValueMSC1;
    totalMSC2Build += analisisAndDesignCalculation?.customRequirementBuildEstimateResource?.resultValueMSC2;
    
    // subTotalMBuild += analisisAndDesignCalculation?.customRequirementBuildEstimateResource?.["M_Resource_Total"] || 0
    // subTotalMSBuild += analisisAndDesignCalculation?.customRequirementBuildEstimateResource?.["M/S_Resource_Total"] || 0
    // subTotalMSCBuild += analisisAndDesignCalculation?.customRequirementBuildEstimateResource?.["M/S/C_Resource_Total"] || 0
  
    dataEstimateResourceMilestone[11]['M_Resource1'] = analisisAndDesignCalculation?.documentLayoutEstimateResource?.resultValue1 || 0;
    dataEstimateResourceMilestone[11]['M_Resource2'] = analisisAndDesignCalculation?.documentLayoutEstimateResource?.resultValue2 || 0;
    dataEstimateResourceMilestone[11]['M/S_Resource1'] = analisisAndDesignCalculation?.documentLayoutEstimateResource?.resultValueMS1 || 0;
    dataEstimateResourceMilestone[11]['M/S_Resource2'] = analisisAndDesignCalculation?.documentLayoutEstimateResource?.resultValueMS2 || 0;
    dataEstimateResourceMilestone[11]['M/S/C_Resource1'] = analisisAndDesignCalculation?.documentLayoutEstimateResource?.resultValueMSC1 || 0;
    dataEstimateResourceMilestone[11]['M/S/C_Resource2'] = analisisAndDesignCalculation?.documentLayoutEstimateResource?.resultValueMSC2 || 0;
    dataEstimateResourceMilestone[11]['M_Resource_Total'] = analisisAndDesignCalculation?.documentLayoutEstimateResource?.["M_Resource_Total"] || 0;
    dataEstimateResourceMilestone[11]['M/S_Resource_Total'] = analisisAndDesignCalculation?.documentLayoutEstimateResource?.['M/S_Resource_Total'] || 0;
    dataEstimateResourceMilestone[11]['M/S/C_Resource_Total'] = analisisAndDesignCalculation?.documentLayoutEstimateResource?.['M/S/C_Resource_Total'] || 0;
    subTotalMBuild += analisisAndDesignCalculation?.subSections?.responseDocumentLayout?.documentLayout?.resultValue || 0
    subTotalMSBuild += analisisAndDesignCalculation?.subSections?.responseDocumentLayout?.documentLayout?.resultValueMS || 0
    subTotalMSCBuild += analisisAndDesignCalculation?.subSections?.responseDocumentLayout?.documentLayout?.resultValueMSC || 0

    totalM1Build += analisisAndDesignCalculation?.documentLayoutEstimateResource?.resultValue1;
    totalM2Build += analisisAndDesignCalculation?.documentLayoutEstimateResource?.resultValue2;
    totalMS1Build += analisisAndDesignCalculation?.documentLayoutEstimateResource?.resultValueMS1;
    totalMS2Build += analisisAndDesignCalculation?.documentLayoutEstimateResource?.resultValueMS2;
    totalMSC1Build += analisisAndDesignCalculation?.documentLayoutEstimateResource?.resultValueMSC1;
    totalMSC2Build += analisisAndDesignCalculation?.documentLayoutEstimateResource?.resultValueMSC2;
    
    // subTotalMBuild += analisisAndDesignCalculation?.documentLayoutEstimateResource?.["M_Resource_Total"] || 0
    // subTotalMSBuild += analisisAndDesignCalculation?.documentLayoutEstimateResource?.["M/S_Resource_Total"] || 0
    // subTotalMSCBuild += analisisAndDesignCalculation?.documentLayoutEstimateResource?.["M/S/C_Resource_Total"] || 0

    dataEstimateResourceMilestone[12]['M_Resource1'] = analisisAndDesignCalculation?.reportingEstimateResource?.resultValue1 || 0;
    dataEstimateResourceMilestone[12]['M_Resource2'] = analisisAndDesignCalculation?.reportingEstimateResource?.resultValue2 || 0;
    dataEstimateResourceMilestone[12]['M/S_Resource1'] = analisisAndDesignCalculation?.reportingEstimateResource?.resultValueMS1 || 0;
    dataEstimateResourceMilestone[12]['M/S_Resource2'] = analisisAndDesignCalculation?.reportingEstimateResource?.resultValueMS2 || 0;
    dataEstimateResourceMilestone[12]['M/S/C_Resource1'] = analisisAndDesignCalculation?.reportingEstimateResource?.resultValueMSC1 || 0;
    dataEstimateResourceMilestone[12]['M/S/C_Resource2'] = analisisAndDesignCalculation?.reportingEstimateResource?.resultValueMSC2 || 0;
    dataEstimateResourceMilestone[12]['M_Resource_Total'] = analisisAndDesignCalculation?.reportingEstimateResource?.["M_Resource_Total"] || 0;
    dataEstimateResourceMilestone[12]['M/S_Resource_Total'] = analisisAndDesignCalculation?.reportingEstimateResource?.['M/S_Resource_Total'] || 0;
    dataEstimateResourceMilestone[12]['M/S/C_Resource_Total'] = analisisAndDesignCalculation?.reportingEstimateResource?.['M/S/C_Resource_Total'] || 0;
    subTotalMBuild += analisisAndDesignCalculation?.subSections?.responseReporting?.reporting?.resultValue || 0
    subTotalMSBuild += analisisAndDesignCalculation?.subSections?.responseReporting?.reporting?.resultValueMS || 0
    subTotalMSCBuild += analisisAndDesignCalculation?.subSections?.responseReporting?.reporting?.resultValueMSC || 0

    totalM1Build += analisisAndDesignCalculation?.reportingEstimateResource?.resultValue1;
    totalM2Build += analisisAndDesignCalculation?.reportingEstimateResource?.resultValue2;
    totalMS1Build += analisisAndDesignCalculation?.reportingEstimateResource?.resultValueMS1;
    totalMS2Build += analisisAndDesignCalculation?.reportingEstimateResource?.resultValueMS2;
    totalMSC1Build += analisisAndDesignCalculation?.reportingEstimateResource?.resultValueMSC1;
    totalMSC2Build += analisisAndDesignCalculation?.reportingEstimateResource?.resultValueMSC2;
    
    // subTotalMBuild += analisisAndDesignCalculation?.reportingEstimateResource?.["M_Resource_Total"] || 0
    // subTotalMSBuild += analisisAndDesignCalculation?.reportingEstimateResource?.["M/S_Resource_Total"] || 0
    // subTotalMSCBuild += analisisAndDesignCalculation?.reportingEstimateResource?.["M/S/C_Resource_Total"] || 0

    dataEstimateResourceMilestone[13]['M_Resource1'] = analisisAndDesignCalculation?.dataMigrationEstimateResource?.resultValue1 || 0;
    dataEstimateResourceMilestone[13]['M_Resource2'] = analisisAndDesignCalculation?.dataMigrationEstimateResource?.resultValue2 || 0;
    dataEstimateResourceMilestone[13]['M/S_Resource1'] = analisisAndDesignCalculation?.dataMigrationEstimateResource?.resultValueMS1 || 0;
    dataEstimateResourceMilestone[13]['M/S_Resource2'] = analisisAndDesignCalculation?.dataMigrationEstimateResource?.resultValueMS2 || 0;
    dataEstimateResourceMilestone[13]['M/S/C_Resource1'] = analisisAndDesignCalculation?.dataMigrationEstimateResource?.resultValueMSC1 || 0;
    dataEstimateResourceMilestone[13]['M/S/C_Resource2'] = analisisAndDesignCalculation?.dataMigrationEstimateResource?.resultValueMSC2 || 0;
    dataEstimateResourceMilestone[13]['M_Resource_Total'] = analisisAndDesignCalculation?.dataMigrationEstimateResource?.["M_Resource_Total"] || 0;
    dataEstimateResourceMilestone[13]['M/S_Resource_Total'] = analisisAndDesignCalculation?.dataMigrationEstimateResource?.['M/S_Resource_Total'] || 0;
    dataEstimateResourceMilestone[13]['M/S/C_Resource_Total'] = analisisAndDesignCalculation?.dataMigrationEstimateResource?.['M/S/C_Resource_Total'] || 0;
    subTotalMBuild += analisisAndDesignCalculation?.subSections?.responseDataMigration?.dataMigration?.resultValue || 0
    subTotalMSBuild += analisisAndDesignCalculation?.subSections?.responseDataMigration?.dataMigration?.resultValueMS || 0
    subTotalMSCBuild += analisisAndDesignCalculation?.subSections?.responseDataMigration?.dataMigration?.resultValueMSC || 0

    totalM1Build += analisisAndDesignCalculation?.dataMigrationEstimateResource?.resultValue1;
    totalM2Build += analisisAndDesignCalculation?.dataMigrationEstimateResource?.resultValue2;
    totalMS1Build += analisisAndDesignCalculation?.dataMigrationEstimateResource?.resultValueMS1;
    totalMS2Build += analisisAndDesignCalculation?.dataMigrationEstimateResource?.resultValueMS2;
    totalMSC1Build += analisisAndDesignCalculation?.dataMigrationEstimateResource?.resultValueMSC1;
    totalMSC2Build += analisisAndDesignCalculation?.dataMigrationEstimateResource?.resultValueMSC2;
    
    // subTotalMBuild += analisisAndDesignCalculation?.dataMigrationEstimateResource?.["M_Resource_Total"] || 0
    // subTotalMSBuild += analisisAndDesignCalculation?.dataMigrationEstimateResource?.["M/S_Resource_Total"] || 0
    // subTotalMSCBuild += analisisAndDesignCalculation?.dataMigrationEstimateResource?.["M/S/C_Resource_Total"] || 0

    dataEstimateResourceMilestone[14]['M_Resource1'] = analisisAndDesignCalculation?.crpEstimateResource?.resultValue1 || 0;
    dataEstimateResourceMilestone[14]['M_Resource2'] = analisisAndDesignCalculation?.crpEstimateResource?.resultValue2 || 0;
    dataEstimateResourceMilestone[14]['M/S_Resource1'] = analisisAndDesignCalculation?.crpEstimateResource?.resultValueMS1 || 0;
    dataEstimateResourceMilestone[14]['M/S_Resource2'] = analisisAndDesignCalculation?.crpEstimateResource?.resultValueMS2 || 0;
    dataEstimateResourceMilestone[14]['M/S/C_Resource1'] = analisisAndDesignCalculation?.crpEstimateResource?.resultValueMSC1 || 0;
    dataEstimateResourceMilestone[14]['M/S/C_Resource2'] = analisisAndDesignCalculation?.crpEstimateResource?.resultValueMSC2 || 0;
    dataEstimateResourceMilestone[14]['M_Resource_Total'] = analisisAndDesignCalculation?.crpEstimateResource?.["M_Resource_Total"] || 0;
    dataEstimateResourceMilestone[14]['M/S_Resource_Total'] = analisisAndDesignCalculation?.crpEstimateResource?.['M/S_Resource_Total'] || 0;
    dataEstimateResourceMilestone[14]['M/S/C_Resource_Total'] = analisisAndDesignCalculation?.crpEstimateResource?.['M/S/C_Resource_Total'] || 0;
    subTotalMBuild += analisisAndDesignCalculation?.subSections?.responseCRP?.crp?.resultValue || 0
    subTotalMSBuild += analisisAndDesignCalculation?.subSections?.responseCRP?.crp?.resultValueMS || 0
    subTotalMSCBuild += analisisAndDesignCalculation?.subSections?.responseCRP?.crp?.resultValueMSC || 0

    totalM1Build += analisisAndDesignCalculation?.crpEstimateResource?.resultValue1;
    totalM2Build += analisisAndDesignCalculation?.crpEstimateResource?.resultValue2;
    totalMS1Build += analisisAndDesignCalculation?.crpEstimateResource?.resultValueMS1;
    totalMS2Build += analisisAndDesignCalculation?.crpEstimateResource?.resultValueMS2;
    totalMSC1Build += analisisAndDesignCalculation?.crpEstimateResource?.resultValueMSC1;
    totalMSC2Build += analisisAndDesignCalculation?.crpEstimateResource?.resultValueMSC2;
    
    // subTotalMBuild += analisisAndDesignCalculation?.crpEstimateResource?.["M_Resource_Total"] || 0
    // subTotalMSBuild += analisisAndDesignCalculation?.crpEstimateResource?.["M/S_Resource_Total"] || 0
    // subTotalMSCBuild += analisisAndDesignCalculation?.crpEstimateResource?.["M/S/C_Resource_Total"] || 0

    dataEstimateResourceMilestone[15]['M_Resource1'] = analisisAndDesignCalculation?.testingEstimateResource?.resultValue1 || 0;
    dataEstimateResourceMilestone[15]['M_Resource2'] = analisisAndDesignCalculation?.testingEstimateResource?.resultValue2 || 0;
    dataEstimateResourceMilestone[15]['M/S_Resource1'] = analisisAndDesignCalculation?.testingEstimateResource?.resultValueMS1 || 0;
    dataEstimateResourceMilestone[15]['M/S_Resource2'] = analisisAndDesignCalculation?.testingEstimateResource?.resultValueMS2 || 0;
    dataEstimateResourceMilestone[15]['M/S/C_Resource1'] = analisisAndDesignCalculation?.testingEstimateResource?.resultValueMSC1 || 0;
    dataEstimateResourceMilestone[15]['M/S/C_Resource2'] = analisisAndDesignCalculation?.testingEstimateResource?.resultValueMSC2 || 0;
    dataEstimateResourceMilestone[15]['M_Resource_Total'] = analisisAndDesignCalculation?.testingEstimateResource?.["M_Resource_Total"] || 0;
    dataEstimateResourceMilestone[15]['M/S_Resource_Total'] = analisisAndDesignCalculation?.testingEstimateResource?.['M/S_Resource_Total'] || 0;
    dataEstimateResourceMilestone[15]['M/S/C_Resource_Total'] = analisisAndDesignCalculation?.testingEstimateResource?.['M/S/C_Resource_Total'] || 0;
    subTotalMBuild += analisisAndDesignCalculation?.subSections?.responseTesting?.testing?.resultValue || 0
    subTotalMSBuild += analisisAndDesignCalculation?.subSections?.responseTesting?.testing?.resultValueMS || 0
    subTotalMSCBuild += analisisAndDesignCalculation?.subSections?.responseTesting?.testing?.resultValueMSC || 0
    totalM1Build += analisisAndDesignCalculation?.testingEstimateResource?.resultValue1;
    totalM2Build += analisisAndDesignCalculation?.testingEstimateResource?.resultValue2;
    totalMS1Build += analisisAndDesignCalculation?.testingEstimateResource?.resultValueMS1;
    totalMS2Build += analisisAndDesignCalculation?.testingEstimateResource?.resultValueMS2;
    totalMSC1Build += analisisAndDesignCalculation?.testingEstimateResource?.resultValueMSC1;
    totalMSC2Build += analisisAndDesignCalculation?.testingEstimateResource?.resultValueMSC2;
    
    // subTotalMBuild += analisisAndDesignCalculation?.testingEstimateResource?.["M_Resource_Total"] || 0
    // subTotalMSBuild += analisisAndDesignCalculation?.testingEstimateResource?.["M/S_Resource_Total"] || 0
    // subTotalMSCBuild += analisisAndDesignCalculation?.testingEstimateResource?.["M/S/C_Resource_Total"] || 0

    let subValueBuild = await calculateProjectManagerEstimateAvgRateMilestone(initialDataSet, analisisAndDesignCalculation?.subSections, 'BUILD')
    let resultValueSubProjectManagerBuild = generateEstimateResourceValue(
      initialDataSet, {
        M: (subValueBuild.resultValue || 0),
        'M/S': (subValueBuild.resultValueMS || 0),
        "M/S/C": (subValueBuild.resultValueMSC || 0),
      },
      {},
      'Project Manager',
      'Estimate Resource Milestone',
      condition
    ); 

    let resultValueProjectManagerBuild = generateEstimateResourceValue(
      initialDataSet, {
        M: (resultValueSubProjectManagerBuild?.['M_Resource_Total'] || 0),
        'M/S': (resultValueSubProjectManagerBuild?.['M/S_Resource_Total'] || 0),
        "M/S/C": (resultValueSubProjectManagerBuild?.['M/S/C_Resource_Total'] || 0),
      },
      {},
      'Project Manager',
      'All',
      condition
    ); 

    // dataEstimateResourceMilestone Project Manager Build
    dataEstimateResourceMilestone[16]['M_Resource1'] =  resultValueProjectManagerBuild?.resultValue1;
    dataEstimateResourceMilestone[16]['M_Resource2'] =  resultValueProjectManagerBuild?.resultValue2;
    dataEstimateResourceMilestone[16]['M/S_Resource1'] =  resultValueProjectManagerBuild?.resultValueMS1;
    dataEstimateResourceMilestone[16]['M/S_Resource2'] =  resultValueProjectManagerBuild?.resultValueMS2;
    dataEstimateResourceMilestone[16]['M/S/C_Resource1'] =  resultValueProjectManagerBuild?.resultValueMSC1;
    dataEstimateResourceMilestone[16]['M/S/C_Resource2'] =  resultValueProjectManagerBuild?.resultValueMSC2;
    dataEstimateResourceMilestone[16]['M_Resource_Total'] =  resultValueProjectManagerBuild?.['M_Resource_Total'];
    dataEstimateResourceMilestone[16]['M/S_Resource_Total'] =  resultValueProjectManagerBuild?.["M/S_Resource_Total"];
    dataEstimateResourceMilestone[16]['M/S/C_Resource_Total'] = resultValueProjectManagerBuild?.["M/S/C_Resource_Total"];

    totalM1Build += resultValueProjectManagerBuild?.resultValue1;
    totalM2Build += resultValueProjectManagerBuild?.resultValue2;
    totalMS1Build += resultValueProjectManagerBuild?.resultValueMS1;
    totalMS2Build += resultValueProjectManagerBuild?.resultValueMS2;
    totalMSC1Build += resultValueProjectManagerBuild?.resultValueMSC1;
    totalMSC2Build += resultValueProjectManagerBuild?.resultValueMSC2;
  
    // dataEstimateResourceMilestone Total Build
    dataEstimateResourceMilestone[17]['M_Resource1'] =  totalM1Build;
    dataEstimateResourceMilestone[17]['M_Resource2'] =  totalM2Build;
    dataEstimateResourceMilestone[17]['M/S_Resource1'] =  totalMS1Build;
    dataEstimateResourceMilestone[17]['M/S_Resource2'] = totalMS2Build;
    dataEstimateResourceMilestone[17]['M/S/C_Resource1'] =  totalMSC1Build;
    dataEstimateResourceMilestone[17]['M/S/C_Resource2'] =  totalMSC2Build;
    dataEstimateResourceMilestone[17]['M_Resource_Total'] =  totalM1Build + totalM2Build;
    dataEstimateResourceMilestone[17]['M/S_Resource_Total'] =  totalMS1Build + totalMS2Build;
    dataEstimateResourceMilestone[17]['M/S/C_Resource_Total'] = totalMSC1Build + totalMSC2Build;
  
    dataEstimateResourceMilestone[18]['M_Resource1'] = analisisAndDesignCalculation?.trainTheTrainerEstimateResource?.resultValue1 || 0;
    dataEstimateResourceMilestone[18]['M_Resource2'] = analisisAndDesignCalculation?.trainTheTrainerEstimateResource?.resultValue2 || 0;
    dataEstimateResourceMilestone[18]['M/S_Resource1'] = analisisAndDesignCalculation?.trainTheTrainerEstimateResource?.resultValueMS1 || 0;
    dataEstimateResourceMilestone[18]['M/S_Resource2'] = analisisAndDesignCalculation?.trainTheTrainerEstimateResource?.resultValueMS2 || 0;
    dataEstimateResourceMilestone[18]['M/S/C_Resource1'] = analisisAndDesignCalculation?.trainTheTrainerEstimateResource?.resultValueMSC1 || 0;
    dataEstimateResourceMilestone[18]['M/S/C_Resource2'] = analisisAndDesignCalculation?.trainTheTrainerEstimateResource?.resultValueMSC2 || 0;
    dataEstimateResourceMilestone[18]['M_Resource_Total'] = analisisAndDesignCalculation?.trainTheTrainerEstimateResource?.["M_Resource_Total"] || 0;
    dataEstimateResourceMilestone[18]['M/S_Resource_Total'] = analisisAndDesignCalculation?.trainTheTrainerEstimateResource?.['M/S_Resource_Total'] || 0;
    dataEstimateResourceMilestone[18]['M/S/C_Resource_Total'] = analisisAndDesignCalculation?.trainTheTrainerEstimateResource?.['M/S/C_Resource_Total'] || 0;
    subTotalMDeoploy += analisisAndDesignCalculation?.subSections?.responseTrainTheTrainer?.trainTheTrainer?.resultValue || 0
    subTotalMSDeoploy += analisisAndDesignCalculation?.subSections?.responseTrainTheTrainer?.trainTheTrainer?.resultValueMS || 0
    subTotalMSCDeoploy += analisisAndDesignCalculation?.subSections?.responseTrainTheTrainer?.trainTheTrainer?.resultValueMSC || 0

    totalM1Deoploy += analisisAndDesignCalculation?.trainTheTrainerEstimateResource?.resultValue1;
    totalM2Deoploy += analisisAndDesignCalculation?.trainTheTrainerEstimateResource?.resultValue2;
    totalMS1Deoploy += analisisAndDesignCalculation?.trainTheTrainerEstimateResource?.resultValueMS1;
    totalMS2Deoploy += analisisAndDesignCalculation?.trainTheTrainerEstimateResource?.resultValueMS2;
    totalMSC1Deoploy += analisisAndDesignCalculation?.trainTheTrainerEstimateResource?.resultValueMSC1;
    totalMSC2Deoploy += analisisAndDesignCalculation?.trainTheTrainerEstimateResource?.resultValueMSC2;
    
    // subTotalMDeoploy += analisisAndDesignCalculation?.trainTheTrainerEstimateResource?.["M_Resource_Total"] || 0;
    // subTotalMSDeoploy += analisisAndDesignCalculation?.trainTheTrainerEstimateResource?.["M/S_Resource_Total"] || 0;
    // subTotalMSCDeoploy += analisisAndDesignCalculation?.trainTheTrainerEstimateResource?.["M/S/C_Resource_Total"] || 0;

    dataEstimateResourceMilestone[19]['M_Resource1'] = analisisAndDesignCalculation?.uatEnvironmentPreparationEstimateResource?.resultValue1 || 0;
    dataEstimateResourceMilestone[19]['M_Resource2'] = analisisAndDesignCalculation?.uatEnvironmentPreparationEstimateResource?.resultValue2 || 0;
    dataEstimateResourceMilestone[19]['M/S_Resource1'] = analisisAndDesignCalculation?.uatEnvironmentPreparationEstimateResource?.resultValueMS1 || 0;
    dataEstimateResourceMilestone[19]['M/S_Resource2'] = analisisAndDesignCalculation?.uatEnvironmentPreparationEstimateResource?.resultValueMS2 || 0;
    dataEstimateResourceMilestone[19]['M/S/C_Resource1'] = analisisAndDesignCalculation?.uatEnvironmentPreparationEstimateResource?.resultValueMSC1 || 0;
    dataEstimateResourceMilestone[19]['M/S/C_Resource2'] = analisisAndDesignCalculation?.uatEnvironmentPreparationEstimateResource?.resultValueMSC2 || 0;
    dataEstimateResourceMilestone[19]['M_Resource_Total'] = analisisAndDesignCalculation?.uatEnvironmentPreparationEstimateResource?.["M_Resource_Total"] || 0;
    dataEstimateResourceMilestone[19]['M/S_Resource_Total'] = analisisAndDesignCalculation?.uatEnvironmentPreparationEstimateResource?.['M/S_Resource_Total'] || 0;
    dataEstimateResourceMilestone[19]['M/S/C_Resource_Total'] = analisisAndDesignCalculation?.uatEnvironmentPreparationEstimateResource?.['M/S/C_Resource_Total'] || 0;
    subTotalMDeoploy += analisisAndDesignCalculation?.subSections?.responseUATEnvironmentPreparation?.uatEnvironmentPreparation?.resultValue || 0
    subTotalMSDeoploy += analisisAndDesignCalculation?.subSections?.responseUATEnvironmentPreparation?.uatEnvironmentPreparation?.resultValueMS || 0
    subTotalMSCDeoploy += analisisAndDesignCalculation?.subSections?.responseUATEnvironmentPreparation?.uatEnvironmentPreparation?.resultValueMSC || 0

    totalM1Deoploy += analisisAndDesignCalculation?.uatEnvironmentPreparationEstimateResource?.resultValue1;
    totalM2Deoploy += analisisAndDesignCalculation?.uatEnvironmentPreparationEstimateResource?.resultValue2;
    totalMS1Deoploy += analisisAndDesignCalculation?.uatEnvironmentPreparationEstimateResource?.resultValueMS1;
    totalMS2Deoploy += analisisAndDesignCalculation?.uatEnvironmentPreparationEstimateResource?.resultValueMS2;
    totalMSC1Deoploy += analisisAndDesignCalculation?.uatEnvironmentPreparationEstimateResource?.resultValueMSC1;
    totalMSC2Deoploy += analisisAndDesignCalculation?.uatEnvironmentPreparationEstimateResource?.resultValueMSC2;
    
    // subTotalMDeoploy += analisisAndDesignCalculation?.uatEnvironmentPreparationEstimateResource?.["M_Resource_Total"] || 0;
    // subTotalMSDeoploy += analisisAndDesignCalculation?.uatEnvironmentPreparationEstimateResource?.["M/S_Resource_Total"] || 0;
    // subTotalMSCDeoploy += analisisAndDesignCalculation?.uatEnvironmentPreparationEstimateResource?.["M/S/C_Resource_Total"] || 0;

    dataEstimateResourceMilestone[20]['M_Resource1'] = analisisAndDesignCalculation?.uatSupportEstimateResource?.resultValue1 || 0;
    dataEstimateResourceMilestone[20]['M_Resource2'] = analisisAndDesignCalculation?.uatSupportEstimateResource?.resultValue2 || 0;
    dataEstimateResourceMilestone[20]['M/S_Resource1'] = analisisAndDesignCalculation?.uatSupportEstimateResource?.resultValueMS1 || 0;
    dataEstimateResourceMilestone[20]['M/S_Resource2'] = analisisAndDesignCalculation?.uatSupportEstimateResource?.resultValueMS2 || 0;
    dataEstimateResourceMilestone[20]['M/S/C_Resource1'] = analisisAndDesignCalculation?.uatSupportEstimateResource?.resultValueMSC1 || 0;
    dataEstimateResourceMilestone[20]['M/S/C_Resource2'] = analisisAndDesignCalculation?.uatSupportEstimateResource?.resultValueMSC2 || 0;
    dataEstimateResourceMilestone[20]['M_Resource_Total'] = analisisAndDesignCalculation?.uatSupportEstimateResource?.["M_Resource_Total"] || 0;
    dataEstimateResourceMilestone[20]['M/S_Resource_Total'] = analisisAndDesignCalculation?.uatSupportEstimateResource?.['M/S_Resource_Total'] || 0;
    dataEstimateResourceMilestone[20]['M/S/C_Resource_Total'] = analisisAndDesignCalculation?.uatSupportEstimateResource?.['M/S/C_Resource_Total'] || 0;
    subTotalMDeoploy += analisisAndDesignCalculation?.subSections?.responseUATSupport?.uatSupport?.resultValue || 0
    subTotalMSDeoploy += analisisAndDesignCalculation?.subSections?.responseUATSupport?.uatSupport?.resultValueMS || 0
    subTotalMSCDeoploy += analisisAndDesignCalculation?.subSections?.responseUATSupport?.uatSupport?.resultValueMSC || 0

    totalM1Deoploy += analisisAndDesignCalculation?.uatSupportEstimateResource?.resultValue1;
    totalM2Deoploy += analisisAndDesignCalculation?.uatSupportEstimateResource?.resultValue2;
    totalMS1Deoploy += analisisAndDesignCalculation?.uatSupportEstimateResource?.resultValueMS1;
    totalMS2Deoploy += analisisAndDesignCalculation?.uatSupportEstimateResource?.resultValueMS2;
    totalMSC1Deoploy += analisisAndDesignCalculation?.uatSupportEstimateResource?.resultValueMSC1;
    totalMSC2Deoploy += analisisAndDesignCalculation?.uatSupportEstimateResource?.resultValueMSC2;
    
    // subTotalMDeoploy += analisisAndDesignCalculation?.uatSupportEstimateResource?.["M_Resource_Total"] || 0;
    // subTotalMSDeoploy += analisisAndDesignCalculation?.uatSupportEstimateResource?.["M/S_Resource_Total"] || 0;
    // subTotalMSCDeoploy += analisisAndDesignCalculation?.uatSupportEstimateResource?.["M/S/C_Resource_Total"] || 0;

    dataEstimateResourceMilestone[21]['M_Resource1'] = analisisAndDesignCalculation?.prodEnvironmentPreparationEstimateResource?.resultValue1 || 0;
    dataEstimateResourceMilestone[21]['M_Resource2'] = analisisAndDesignCalculation?.prodEnvironmentPreparationEstimateResource?.resultValue2 || 0;
    dataEstimateResourceMilestone[21]['M/S_Resource1'] = analisisAndDesignCalculation?.prodEnvironmentPreparationEstimateResource?.resultValueMS1 || 0;
    dataEstimateResourceMilestone[21]['M/S_Resource2'] = analisisAndDesignCalculation?.prodEnvironmentPreparationEstimateResource?.resultValueMS2 || 0;
    dataEstimateResourceMilestone[21]['M/S/C_Resource1'] = analisisAndDesignCalculation?.prodEnvironmentPreparationEstimateResource?.resultValueMSC1 || 0;
    dataEstimateResourceMilestone[21]['M/S/C_Resource2'] = analisisAndDesignCalculation?.prodEnvironmentPreparationEstimateResource?.resultValueMSC2 || 0;
    dataEstimateResourceMilestone[21]['M_Resource_Total'] = analisisAndDesignCalculation?.prodEnvironmentPreparationEstimateResource?.["M_Resource_Total"] || 0;
    dataEstimateResourceMilestone[21]['M/S_Resource_Total'] = analisisAndDesignCalculation?.prodEnvironmentPreparationEstimateResource?.['M/S_Resource_Total'] || 0;
    dataEstimateResourceMilestone[21]['M/S/C_Resource_Total'] = analisisAndDesignCalculation?.prodEnvironmentPreparationEstimateResource?.['M/S/C_Resource_Total'] || 0;
    subTotalMDeoploy += analisisAndDesignCalculation?.subSections?.responseProdEnvironmentPreparation?.prodEnvironmentPreparation?.resultValue || 0
    subTotalMSDeoploy += analisisAndDesignCalculation?.subSections?.responseProdEnvironmentPreparation?.prodEnvironmentPreparation?.resultValueMS || 0
    subTotalMSCDeoploy += analisisAndDesignCalculation?.subSections?.responseProdEnvironmentPreparation?.prodEnvironmentPreparation?.resultValueMSC || 0

    totalM1Deoploy += analisisAndDesignCalculation?.prodEnvironmentPreparationEstimateResource?.resultValue1;
    totalM2Deoploy += analisisAndDesignCalculation?.prodEnvironmentPreparationEstimateResource?.resultValue2;
    totalMS1Deoploy += analisisAndDesignCalculation?.prodEnvironmentPreparationEstimateResource?.resultValueMS1;
    totalMS2Deoploy += analisisAndDesignCalculation?.prodEnvironmentPreparationEstimateResource?.resultValueMS2;
    totalMSC1Deoploy += analisisAndDesignCalculation?.prodEnvironmentPreparationEstimateResource?.resultValueMSC1;
    totalMSC2Deoploy += analisisAndDesignCalculation?.prodEnvironmentPreparationEstimateResource?.resultValueMSC2;
    
    // subTotalMDeoploy += analisisAndDesignCalculation?.prodEnvironmentPreparationEstimateResource?.["M_Resource_Total"] || 0;
    // subTotalMSDeoploy += analisisAndDesignCalculation?.prodEnvironmentPreparationEstimateResource?.["M/S_Resource_Total"] || 0;
    // subTotalMSCDeoploy += analisisAndDesignCalculation?.prodEnvironmentPreparationEstimateResource?.["M/S/C_Resource_Total"] || 0;

    dataEstimateResourceMilestone[22]['M_Resource1'] = analisisAndDesignCalculation?.supportHandoverEstimateResource?.resultValue1 || 0;
    dataEstimateResourceMilestone[22]['M_Resource2'] = analisisAndDesignCalculation?.supportHandoverEstimateResource?.resultValue2 || 0;
    dataEstimateResourceMilestone[22]['M/S_Resource1'] = analisisAndDesignCalculation?.supportHandoverEstimateResource?.resultValueMS1 || 0;
    dataEstimateResourceMilestone[22]['M/S_Resource2'] = analisisAndDesignCalculation?.supportHandoverEstimateResource?.resultValueMS2 || 0;
    dataEstimateResourceMilestone[22]['M/S/C_Resource1'] = analisisAndDesignCalculation?.supportHandoverEstimateResource?.resultValueMSC1 || 0;
    dataEstimateResourceMilestone[22]['M/S/C_Resource2'] = analisisAndDesignCalculation?.supportHandoverEstimateResource?.resultValueMSC2 || 0;
    dataEstimateResourceMilestone[22]['M_Resource_Total'] = analisisAndDesignCalculation?.supportHandoverEstimateResource?.["M_Resource_Total"] || 0;
    dataEstimateResourceMilestone[22]['M/S_Resource_Total'] = analisisAndDesignCalculation?.supportHandoverEstimateResource?.['M/S_Resource_Total'] || 0;
    dataEstimateResourceMilestone[22]['M/S/C_Resource_Total'] = analisisAndDesignCalculation?.supportHandoverEstimateResource?.['M/S/C_Resource_Total'] || 0;
    subTotalMDeoploy += analisisAndDesignCalculation?.subSections?.responseSupportHandover?.supportHandover?.resultValue || 0
    subTotalMSDeoploy += analisisAndDesignCalculation?.subSections?.responseSupportHandover?.supportHandover?.resultValueMS || 0
    subTotalMSCDeoploy += analisisAndDesignCalculation?.subSections?.responseSupportHandover?.supportHandover?.resultValueMSC || 0

    totalM1Deoploy += analisisAndDesignCalculation?.supportHandoverEstimateResource?.resultValue1;
    totalM2Deoploy += analisisAndDesignCalculation?.supportHandoverEstimateResource?.resultValue2;
    totalMS1Deoploy += analisisAndDesignCalculation?.supportHandoverEstimateResource?.resultValueMS1;
    totalMS2Deoploy += analisisAndDesignCalculation?.supportHandoverEstimateResource?.resultValueMS2;
    totalMSC1Deoploy += analisisAndDesignCalculation?.supportHandoverEstimateResource?.resultValueMSC1;
    totalMSC2Deoploy += analisisAndDesignCalculation?.supportHandoverEstimateResource?.resultValueMSC2;
    
    // subTotalMDeoploy += analisisAndDesignCalculation?.supportHandoverEstimateResource?.["M_Resource_Total"] || 0;
    // subTotalMSDeoploy += analisisAndDesignCalculation?.supportHandoverEstimateResource?.["M/S_Resource_Total"] || 0;
    // subTotalMSCDeoploy += analisisAndDesignCalculation?.supportHandoverEstimateResource?.["M/S/C_Resource_Total"] || 0;

    let subValueDeploy = await calculateProjectManagerEstimateAvgRateMilestone(initialDataSet, analisisAndDesignCalculation?.subSections, 'DEPLOY')
    let resultValueSubProjectManagerDesoploy = generateEstimateResourceValue(
      initialDataSet, {
        M: (subValueDeploy.resultValue || 0),
        'M/S': (subValueDeploy.resultValueMS || 0),
        "M/S/C": (subValueDeploy.resultValueMSC || 0),
      },
      {},
      'Project Manager',
      'Estimate Resource Milestone',
      condition
    ); 

    let resultValueProjectManagerDeploy = generateEstimateResourceValue(
      initialDataSet, {
        M: (resultValueSubProjectManagerDesoploy?.['M_Resource_Total'] || 0),
        'M/S': (resultValueSubProjectManagerDesoploy?.['M/S_Resource_Total'] || 0),
        "M/S/C": (resultValueSubProjectManagerDesoploy?.['M/S/C_Resource_Total'] || 0),
      },
      {},
      'Project Manager',
      'All',
      condition
    ); 
    // dataEstimateResourceMilestone Project Manager Deploy
    dataEstimateResourceMilestone[23]['M_Resource1'] =  resultValueProjectManagerDeploy?.resultValue1;
    dataEstimateResourceMilestone[23]['M_Resource2'] =  resultValueProjectManagerDeploy?.resultValue2;
    dataEstimateResourceMilestone[23]['M/S_Resource1'] =  resultValueProjectManagerDeploy?.resultValueMS1;
    dataEstimateResourceMilestone[23]['M/S_Resource2'] =  resultValueProjectManagerDeploy?.resultValueMS2;
    dataEstimateResourceMilestone[23]['M/S/C_Resource1'] =  resultValueProjectManagerDeploy?.resultValueMSC1;
    dataEstimateResourceMilestone[23]['M/S/C_Resource2'] =  resultValueProjectManagerDeploy?.resultValueMSC2;
    dataEstimateResourceMilestone[23]['M_Resource_Total'] =  resultValueProjectManagerDeploy?.M_Resource_Total;
    dataEstimateResourceMilestone[23]['M/S_Resource_Total'] =  resultValueProjectManagerDeploy?.["M/S_Resource_Total"];
    dataEstimateResourceMilestone[23]['M/S/C_Resource_Total'] = resultValueProjectManagerDeploy?.["M/S/C_Resource_Total"];

    totalM1Deoploy += resultValueProjectManagerDeploy?.resultValue1;
    totalM2Deoploy += resultValueProjectManagerDeploy?.resultValue2;
    totalMS1Deoploy += resultValueProjectManagerDeploy?.resultValueMS1;
    totalMS2Deoploy += resultValueProjectManagerDeploy?.resultValueMS2;
    totalMSC1Deoploy += resultValueProjectManagerDeploy?.resultValueMSC1;
    totalMSC2Deoploy += resultValueProjectManagerDeploy?.resultValueMSC2;

    // dataEstimateResourceMilestone Total Deploy
    dataEstimateResourceMilestone[24]['M_Resource1'] =  totalM1Deoploy;
    dataEstimateResourceMilestone[24]['M_Resource2'] =  totalM2Deoploy;
    dataEstimateResourceMilestone[24]['M/S_Resource1'] =  totalMS1Deoploy;
    dataEstimateResourceMilestone[24]['M/S_Resource2'] =  totalMS2Deoploy;
    dataEstimateResourceMilestone[24]['M/S/C_Resource1'] =  totalMSC1Deoploy;
    dataEstimateResourceMilestone[24]['M/S/C_Resource2'] =  totalMSC2Deoploy;
    dataEstimateResourceMilestone[24]['M_Resource_Total'] =  totalM1Deoploy + totalM2Deoploy;
    dataEstimateResourceMilestone[24]['M/S_Resource_Total'] =  totalMS1Deoploy + totalMS2Deoploy;
    dataEstimateResourceMilestone[24]['M/S/C_Resource_Total'] = totalMSC1Deoploy + totalMSC2Deoploy;
  
    dataEstimateResourceMilestone[25]['M_Resource1'] = analisisAndDesignCalculation?.endUserTrainingEstimateResource?.resultValue1 || 0;
    dataEstimateResourceMilestone[25]['M_Resource2'] = analisisAndDesignCalculation?.endUserTrainingEstimateResource?.resultValue2 || 0;
    dataEstimateResourceMilestone[25]['M/S_Resource1'] = analisisAndDesignCalculation?.endUserTrainingEstimateResource?.resultValueMS1 || 0;
    dataEstimateResourceMilestone[25]['M/S_Resource2'] = analisisAndDesignCalculation?.endUserTrainingEstimateResource?.resultValueMS2 || 0;
    dataEstimateResourceMilestone[25]['M/S/C_Resource1'] = analisisAndDesignCalculation?.endUserTrainingEstimateResource?.resultValueMSC1 || 0;
    dataEstimateResourceMilestone[25]['M/S/C_Resource2'] = analisisAndDesignCalculation?.endUserTrainingEstimateResource?.resultValueMSC2 || 0;
    dataEstimateResourceMilestone[25]['M_Resource_Total'] = analisisAndDesignCalculation?.endUserTrainingEstimateResource?.["M_Resource_Total"] || 0;
    dataEstimateResourceMilestone[25]['M/S_Resource_Total'] = analisisAndDesignCalculation?.endUserTrainingEstimateResource?.['M/S_Resource_Total'] || 0;
    dataEstimateResourceMilestone[25]['M/S/C_Resource_Total'] = analisisAndDesignCalculation?.endUserTrainingEstimateResource?.['M/S/C_Resource_Total'] || 0;
    subTotalMOperation += analisisAndDesignCalculation?.subSections?.responseDocumentLayout?.endUserTraining?.resultValue || 0
    subTotalMSOperation += analisisAndDesignCalculation?.subSections?.responseDocumentLayout?.endUserTraining?.resultValueMS || 0
    subTotalMSCOperation += analisisAndDesignCalculation?.subSections?.responseDocumentLayout?.endUserTraining?.resultValueMSC || 0

    totalM1Operation += analisisAndDesignCalculation?.endUserTrainingEstimateResource?.resultValue1;
    totalM2Operation += analisisAndDesignCalculation?.endUserTrainingEstimateResource?.resultValue2;
    totalMS1Operation += analisisAndDesignCalculation?.endUserTrainingEstimateResource?.resultValueMS1;
    totalMS2Operation += analisisAndDesignCalculation?.endUserTrainingEstimateResource?.resultValueMS2;
    totalMSC1Operation += analisisAndDesignCalculation?.endUserTrainingEstimateResource?.resultValueMSC1;
    totalMSC2Operation += analisisAndDesignCalculation?.endUserTrainingEstimateResource?.resultValueMSC2;
    
    // subTotalMOperation += analisisAndDesignCalculation?.endUserTrainingEstimateResource?.["M_Resource_Total"] || 0;
    // subTotalMSOperation += analisisAndDesignCalculation?.endUserTrainingEstimateResource?.["M/S_Resource_Total"] || 0;
    // subTotalMSCOperation += analisisAndDesignCalculation?.endUserTrainingEstimateResource?.["M/S/C_Resource_Total"] || 0;

    dataEstimateResourceMilestone[26]['M_Resource1'] = analisisAndDesignCalculation?.postGoLiveEstimateResource?.resultValue1 || 0;
    dataEstimateResourceMilestone[26]['M_Resource2'] = analisisAndDesignCalculation?.postGoLiveEstimateResource?.resultValue2 || 0;
    dataEstimateResourceMilestone[26]['M/S_Resource1'] = analisisAndDesignCalculation?.postGoLiveEstimateResource?.resultValueMS1 || 0;
    dataEstimateResourceMilestone[26]['M/S_Resource2'] = analisisAndDesignCalculation?.postGoLiveEstimateResource?.resultValueMS2 || 0;
    dataEstimateResourceMilestone[26]['M/S/C_Resource1'] = analisisAndDesignCalculation?.postGoLiveEstimateResource?.resultValueMSC1 || 0;
    dataEstimateResourceMilestone[26]['M/S/C_Resource2'] = analisisAndDesignCalculation?.postGoLiveEstimateResource?.resultValueMSC2 || 0;
    dataEstimateResourceMilestone[26]['M_Resource_Total'] = analisisAndDesignCalculation?.postGoLiveEstimateResource?.["M_Resource_Total"] || 0;
    dataEstimateResourceMilestone[26]['M/S_Resource_Total'] = analisisAndDesignCalculation?.postGoLiveEstimateResource?.['M/S_Resource_Total'] || 0;
    dataEstimateResourceMilestone[26]['M/S/C_Resource_Total'] = analisisAndDesignCalculation?.postGoLiveEstimateResource?.['M/S/C_Resource_Total'] || 0;
    subTotalMOperation += analisisAndDesignCalculation?.subSections?.responsePostGoLive?.postGoLive?.resultValue || 0
    subTotalMSOperation += analisisAndDesignCalculation?.subSections?.responsePostGoLive?.postGoLive?.resultValueMS || 0
    subTotalMSCOperation += analisisAndDesignCalculation?.subSections?.responsePostGoLive?.postGoLive?.resultValueMSC || 0

    totalM1Operation += analisisAndDesignCalculation?.postGoLiveEstimateResource?.resultValue1;
    totalM2Operation += analisisAndDesignCalculation?.postGoLiveEstimateResource?.resultValue2;
    totalMS1Operation += analisisAndDesignCalculation?.postGoLiveEstimateResource?.resultValueMS1;
    totalMS2Operation += analisisAndDesignCalculation?.postGoLiveEstimateResource?.resultValueMS2;
    totalMSC1Operation += analisisAndDesignCalculation?.postGoLiveEstimateResource?.resultValueMSC1;
    totalMSC2Operation += analisisAndDesignCalculation?.postGoLiveEstimateResource?.resultValueMSC2;
    
    // subTotalMOperation += analisisAndDesignCalculation?.postGoLiveEstimateResource?.["M_Resource_Total"] || 0;
    // subTotalMSOperation += analisisAndDesignCalculation?.postGoLiveEstimateResource?.["M/S_Resource_Total"] || 0;
    // subTotalMSCOperation += analisisAndDesignCalculation?.postGoLiveEstimateResource?.["M/S/C_Resource_Total"] || 0;

    let subValueOperation = await calculateProjectManagerEstimateAvgRateMilestone(initialDataSet, analisisAndDesignCalculation?.subSections, 'OPERATION')
    let resultValueSubProjectManagerOperation = generateEstimateResourceValue(
      initialDataSet, {
        M: (subValueOperation.resultValue || 0),
        'M/S': (subValueOperation.resultValueMS || 0),
        "M/S/C": (subValueOperation.resultValueMSC || 0),
      },
      {},
      'Project Manager',
      'Estimate Resource Milestone',
      condition
    ); 

    let resultValueProjectManagerOperation = generateEstimateResourceValue(
      initialDataSet, {
        M: (resultValueSubProjectManagerOperation?.['M_Resource_Total'] || 0),
        'M/S': (resultValueSubProjectManagerOperation?.['M/S_Resource_Total'] || 0),
        "M/S/C": (resultValueSubProjectManagerOperation?.['M/S/C_Resource_Total'] || 0),
      },
      {},
      'Project Manager',
      'All',
      condition
    ); 
    
    
    // para c28 == percent subT * para_projectManagement
    await Promise.all([resultValueProjectManagerOperation])

    // dataEstimateResourceMilestone Project Manager Deploy
    dataEstimateResourceMilestone[27]['M_Resource1'] =  resultValueProjectManagerOperation?.resultValue1;
    dataEstimateResourceMilestone[27]['M_Resource2'] =  resultValueProjectManagerOperation?.resultValue2;
    dataEstimateResourceMilestone[27]['M/S_Resource1'] =  resultValueProjectManagerOperation?.resultValueMS1;
    dataEstimateResourceMilestone[27]['M/S_Resource2'] =  resultValueProjectManagerOperation?.resultValueMS2;
    dataEstimateResourceMilestone[27]['M/S/C_Resource1'] =  resultValueProjectManagerOperation?.resultValueMSC1;
    dataEstimateResourceMilestone[27]['M/S/C_Resource2'] =  resultValueProjectManagerOperation?.resultValueMSC2;
    dataEstimateResourceMilestone[27]['M_Resource_Total'] =  resultValueProjectManagerOperation?.M_Resource_Total;
    dataEstimateResourceMilestone[27]['M/S_Resource_Total'] =  resultValueProjectManagerOperation?.["M/S_Resource_Total"];
    dataEstimateResourceMilestone[27]['M/S/C_Resource_Total'] = resultValueProjectManagerOperation?.["M/S/C_Resource_Total"];

    totalM1Operation += resultValueProjectManagerOperation?.resultValue1;
    totalM2Operation += resultValueProjectManagerOperation?.resultValue2;
    totalMS1Operation += resultValueProjectManagerOperation?.resultValueMS1;
    totalMS2Operation += resultValueProjectManagerOperation?.resultValueMS2;
    totalMSC1Operation += resultValueProjectManagerOperation?.resultValueMSC1;
    totalMSC2Operation += resultValueProjectManagerOperation?.resultValueMSC2;
  
    // dataEstimateResourceMilestone Total Deploy
    dataEstimateResourceMilestone[28]['M_Resource1'] = totalM1Operation;
    dataEstimateResourceMilestone[28]['M_Resource2'] =  totalM2Operation;
    dataEstimateResourceMilestone[28]['M/S_Resource1'] =  totalMS1Operation;
    dataEstimateResourceMilestone[28]['M/S_Resource2'] =  totalMS2Operation;
    dataEstimateResourceMilestone[28]['M/S/C_Resource1'] =  totalMSC1Operation;
    dataEstimateResourceMilestone[28]['M/S/C_Resource2'] =  totalMSC2Operation;
    dataEstimateResourceMilestone[28]['M_Resource_Total'] =  totalM1Operation + totalM2Operation;
    dataEstimateResourceMilestone[28]['M/S_Resource_Total'] =  totalMS1Operation + totalMS2Operation;
    dataEstimateResourceMilestone[28]['M/S/C_Resource_Total'] = totalMSC1Operation + totalMSC2Operation;
    await Promise.all(dataEstimateResourceMilestone)

    const subTotalRiskWithDataEstimateResourceMilestone = await getSubTotalAndRisk(dataEstimateResourceMilestone, (analisisAndDesignCalculation?.fColmnValueEstimateAveRate?.resultValue || 0))

  await Promise.all(subTotalRiskWithDataEstimateResourceMilestone)
  return subTotalRiskWithDataEstimateResourceMilestone;
    // projectManager
      /////////////////// ESTIMATE RESOURCE - END ///////////////////
}


const getSubTotalAndRisk = async(dataEstimateResourceMilestone: any, fColmnValueEstimateAveRate: number) => {
  const mr1 = (dataEstimateResourceMilestone[28]?.['M_Resource1'] || 0) +
    (dataEstimateResourceMilestone[24]?.['M_Resource1'] || 0) + 
    (dataEstimateResourceMilestone[17]?.['M_Resource1'] || 0) +
    (dataEstimateResourceMilestone[6]?.['M_Resource1'] || 0)

  const mr2 = (dataEstimateResourceMilestone[28]?.['M_Resource2'] || 0) +
  (dataEstimateResourceMilestone[24]?.['M_Resource2'] || 0) + 
  (dataEstimateResourceMilestone[17]?.['M_Resource2'] || 0) +
  (dataEstimateResourceMilestone[6]?.['M_Resource2'] || 0);

  const msr1 = (dataEstimateResourceMilestone[28]?.['M/S_Resource1'] || 0) +
  (dataEstimateResourceMilestone[24]?.['M/S_Resource1'] || 0) + 
  (dataEstimateResourceMilestone[17]?.['M/S_Resource1'] || 0) +
  (dataEstimateResourceMilestone[6]?.['M/S_Resource1'] || 0);

  const msr2 = (dataEstimateResourceMilestone[28]?.['M/S_Resource2'] || 0) +
  (dataEstimateResourceMilestone[24]?.['M/S_Resource2'] || 0) + 
  (dataEstimateResourceMilestone[17]?.['M/S_Resource2'] || 0) +
  (dataEstimateResourceMilestone[6]?.['M/S_Resource2'] || 0);

  const mscr1 = (dataEstimateResourceMilestone[28]?.['M/S/C_Resource2'] || 0) +
  (dataEstimateResourceMilestone[24]?.['M/S/C_Resource1'] || 0) + 
  (dataEstimateResourceMilestone[17]?.['M/S/C_Resource1'] || 0) +
  (dataEstimateResourceMilestone[6]?.['M/S/C_Resource1'] || 0);

  const mscr2 = (dataEstimateResourceMilestone[28]?.['M/S/C_Resource2'] || 0) +
  (dataEstimateResourceMilestone[24]?.['M/S/C_Resource2'] || 0) + 
  (dataEstimateResourceMilestone[17]?.['M/S/C_Resource2'] || 0) +
  (dataEstimateResourceMilestone[6]?.['M/S/C_Resource2'] || 0);

  const mt = (dataEstimateResourceMilestone[28]?.['M_Resource_Total'] || 0) +
  (dataEstimateResourceMilestone[24]?.['M_Resource_Total'] || 0) + 
  (dataEstimateResourceMilestone[17]?.['M_Resource_Total'] || 0) +
  (dataEstimateResourceMilestone[6]?.['M_Resource_Total'] || 0);


  const mst = (dataEstimateResourceMilestone[28]?.['M/S_Resource_Total'] || 0) +
  (dataEstimateResourceMilestone[24]?.['M/S_Resource_Total'] || 0) + 
  (dataEstimateResourceMilestone[17]?.['M/S_Resource_Total'] || 0) +
  (dataEstimateResourceMilestone[6]?.['M/S_Resource_Total'] || 0);

  const msct = (dataEstimateResourceMilestone[28]?.['M/S/C_Resource_Total'] || 0) +
  (dataEstimateResourceMilestone[24]?.['M/S/C_Resource_Total'] || 0) + 
  (dataEstimateResourceMilestone[17]?.['M/S/C_Resource_Total'] || 0) +
  (dataEstimateResourceMilestone[6]?.['M/S/C_Resource_Total'] || 0);

  dataEstimateResourceMilestone[29]['M_Resource1'] =  mr1;
  dataEstimateResourceMilestone[29]['M_Resource2'] =  mr2
  dataEstimateResourceMilestone[29]['M/S_Resource1'] =  msr1
  dataEstimateResourceMilestone[29]['M/S_Resource2'] =  msr2
  dataEstimateResourceMilestone[29]['M/S/C_Resource1'] =  mscr1
  dataEstimateResourceMilestone[29]['M/S/C_Resource2'] =  mscr2
  dataEstimateResourceMilestone[29]['M_Resource_Total'] =  mt
  dataEstimateResourceMilestone[29]['M/S_Resource_Total'] =  mst
  dataEstimateResourceMilestone[29]['M/S/C_Resource_Total'] = msct

  dataEstimateResourceMilestone[30]['M_Resource1'] = ((mr1 * fColmnValueEstimateAveRate) || 0);
  dataEstimateResourceMilestone[30]['M_Resource2'] =  ((mr2 * fColmnValueEstimateAveRate) || 0);
  dataEstimateResourceMilestone[30]['M/S_Resource1'] =  ((msr1 * fColmnValueEstimateAveRate) || 0);
  dataEstimateResourceMilestone[30]['M/S_Resource2'] =  ((msr2 * fColmnValueEstimateAveRate) || 0);
  dataEstimateResourceMilestone[30]['M/S/C_Resource1'] =  ((mscr1 * fColmnValueEstimateAveRate) || 0);
  dataEstimateResourceMilestone[30]['M/S/C_Resource2'] =  ((mscr2 * fColmnValueEstimateAveRate) || 0);
  dataEstimateResourceMilestone[30]['M_Resource_Total'] =  ((mt * fColmnValueEstimateAveRate) || 0);
  dataEstimateResourceMilestone[30]['M/S_Resource_Total'] =  ((mst * fColmnValueEstimateAveRate) || 0);
  dataEstimateResourceMilestone[30]['M/S/C_Resource_Total'] = ((msct * fColmnValueEstimateAveRate) || 0);
  
  await Promise.all(dataEstimateResourceMilestone);
  return dataEstimateResourceMilestone;
}


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