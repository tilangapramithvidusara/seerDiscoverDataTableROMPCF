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
import { checkHasFte, checkHasFteParameter } from "../EstimateAverageRateMilestone/check.has.fte.utils";
import { generateIColoumnValueFte } from "../EstimateAverageRateMilestone/sub.value.utils";
import { romParameter } from "../../Constants/fteConstants";
import { parameterKeyIndex } from "../../Constants/parametersSetting";
import { setDataSetAveRate } from "./setaverage.rate.utils";
import { generateEstimateResource } from "./estimate.resource.utils";
import { generateEstimateResourceSub } from "./estimate.resource.sub.utils";
import { generateEstimateResourceMilestone } from "./estimate.resource.milestone.utils";
import { generateEstimateResourceMilestoneSub } from "./estimate.resource.milestone.sub.utils";
import { fitGapTabValue } from "../EstimateAveRate/fitgap.utils";

export const arrayGenerator = async (initialDataSet: any, dispatch: any, settingParameters?: any, isSnapshotModeEnable?: boolean) => {

  const hasParameters = settingParameters && isSnapshotModeEnable // check if it is live mode or snapshot mode (if hasParameter equal true then it is in snapshot mode)
  let resultArray: any[] = [];
  let subTotalMAnalysisDesign = 0; // varaiable for handle sub total of "Average rate" MUST value
  let subTotalMSAnalysisDesign = 0; // varaiable for handle sub total of "Average rate" MUST/SHOULD value
  let subTotalMSCAnalysisDesign = 0; // varaiable for handle sub total of "Average rate" MUST/SHOULD/COULD value

  let subTotalMEstimateDesignAvgRateMilestone = 0; // varaiable for handle sub total of "Average rate milstone" MUST value
  let subTotalMSEstimateDesignAvgRateMilestone = 0; // varaiable for handle sub total of "Average rate milstone" MUST/SHOULD value
  let subTotalMSCEstimateDesignAvgRateMilestone = 0; // varaiable for handle sub total of "Average rate milstone" MUST/SHOULD/COULD value

  const condition = romParameter === "Days"; // currently this is using as ahrd coded value
  const {parameterModel} = initialDataSet;
  let {hourlyRate, hoursPerday} = parameterModel[0];
  if (hasParameters) {
    // Set hourly rate if has snapshot
    hourlyRate = {
      ...hourlyRate,
      value: parseFloat(settingParameters?.formattedData[
        parameterKeyIndex.hourlyRate
      ]?.currentValue || '0')
    }
    // Set hours per data if has snapshot
    hoursPerday = parseFloat(settingParameters?.formattedData[
      parameterKeyIndex.hoursPerDay
    ]?.currentValue || '0');
  }

  let fteValue: any;
  let hasFteValue: boolean;

  try {
    // checkHasFteParameter
    
    if (hasParameters) {
      // check, snapshot parameter values has contain atleast one "FTE" value
      hasFteValue = await checkHasFteParameter(settingParameters);
      
      if (hasFteValue) {
        // if contains atleast one "fte" value then do the calculation for getting 
        fteValue = await generateIColoumnValueFte(initialDataSet, '', settingParameters, isSnapshotModeEnable);
      }
    } else {
      // check, live parameter values has contain atleast one "FTE" value
      hasFteValue = await checkHasFte(parameterModel);
      if (hasFteValue) {
        // if contains atleast one "fte" value then do the calculation for getting
        fteValue = await generateIColoumnValueFte(initialDataSet, '', settingParameters, isSnapshotModeEnable);
      }
    }
    
    // Get calculated value for "Average estimate rate" and "Average estimate rate milestone"
    const analisisAndDesignCalculation: any = await generateIColoumnValue({...initialDataSet, fteValue}, analysisAndDesign.row, dispatch, hasFteValue, settingParameters, isSnapshotModeEnable);
    const fitGapCalculation = await fitGapTabValue({...initialDataSet, fteValue}, condition, settingParameters, isSnapshotModeEnable);
    
    (data[0] as any).M = analisisAndDesignCalculation?.analysisDesing?.resultValue; // set cost's MUST value of "analysis design"
    (data[0] as any)['M/S'] = analisisAndDesignCalculation?.analysisDesing?.resultValueMS; // set cost's MUST/SHOULD value of "analysis design"
    (data[0] as any)['M/S/C'] = analisisAndDesignCalculation?.analysisDesing?.resultValueMSC; // set cost's MUST/SHOULD/COULD value of "analysis design"
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

    const estimateDesignProjectManager = await calculateProjectManagerEstimateAvgRateMilestone({...initialDataSet, fteValue}, analisisAndDesignCalculation?.subSections, 'Analysis and Design', settingParameters, isSnapshotModeEnable);
    // console.log('estimateDesignProjectManager ==> ', estimateDesignProjectManager);
    
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
    const buildProjectManager = await calculateProjectManagerEstimateAvgRateMilestone({...initialDataSet, fteValue}, analisisAndDesignCalculation?.subSections, 'BUILD', settingParameters, isSnapshotModeEnable);

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
    const deployProjectManager = await calculateProjectManagerEstimateAvgRateMilestone({...initialDataSet, fteValue}, analisisAndDesignCalculation?.subSections, 'DEPLOY', settingParameters, isSnapshotModeEnable);

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
    const operationProjectManager = await calculateProjectManagerEstimateAvgRateMilestone({...initialDataSet, fteValue}, analisisAndDesignCalculation?.subSections, 'OPERATION', settingParameters, isSnapshotModeEnable);

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

    const responsePojectManagement = await generateProjectManagerMValue({...initialDataSet, fteValue}, {
      responseSubtotal: {
        subTotalMAnalysisDesign,
        subTotalMSAnalysisDesign,
        subTotalMSCAnalysisDesign
      }
    }, condition, settingParameters, isSnapshotModeEnable, true);
    // condition, settingParameters, isSnapshotModeEnable    

    (data[22] as any).M = responsePojectManagement?.projectManager?.resultValue;
    (data[22] as any)['M/S'] = responsePojectManagement?.projectManager?.resultValueMS;
    (data[22] as any)['M/S/C'] = responsePojectManagement?.projectManager?.resultValueMSC;

    // fColmnValueEstimateAveRate
    (data[23] as any).M = (subTotalMAnalysisDesign + responsePojectManagement?.projectManager?.resultValue) * (analisisAndDesignCalculation?.fColmnValueEstimateAveRate?.resultValue || 0);
    (data[23] as any)['M/S'] = (subTotalMSAnalysisDesign + responsePojectManagement?.projectManager?.resultValueMS) * (analisisAndDesignCalculation?.fColmnValueEstimateAveRate?.resultValue || 0);
    (data[23] as any)['M/S/C'] = (subTotalMSCAnalysisDesign + responsePojectManagement?.projectManager?.resultValueMSC) * (analisisAndDesignCalculation?.fColmnValueEstimateAveRate?.resultValue || 0);
    (dataEstimateAverageRateMilestone[30] as any).M = subTotalMEstimateDesignAvgRateMilestone * (analisisAndDesignCalculation?.fColmnValueEstimateAveRate?.resultValue || 0);
    (dataEstimateAverageRateMilestone[30] as any)['M/S'] = subTotalMSEstimateDesignAvgRateMilestone * (analisisAndDesignCalculation?.fColmnValueEstimateAveRate?.resultValue || 0);
    (dataEstimateAverageRateMilestone[30] as any)['M/S/C'] = subTotalMSCEstimateDesignAvgRateMilestone * (analisisAndDesignCalculation?.fColmnValueEstimateAveRate?.resultValue || 0);


    // const resultValueProjectManagerEstimateResource = generateEstimateResourceValue(
    //   inititlaData, {
    //     M: (responseAnalisisDesign?.resultValue || 0),
    //     'M/S': (responseAnalisisDesign?.resultValueMS || 0),
    //     "M/S/C": (responseAnalisisDesign?.resultValueMSC || 0),
    //   },
    //   responseAnalisisDesign,
    //   'Analysis and Design',
    //   'All',
    //   condition
    // );

    // projectManager
    
    const responseGenerateEstimateResource = await generateEstimateResource(dataEstimateResource, analisisAndDesignCalculation, {
      subTotalMAnalysisDesign,
      subTotalMSAnalysisDesign,
      subTotalMSCAnalysisDesign
    }, condition, {...initialDataSet, fteValue}, settingParameters, isSnapshotModeEnable);
    const responseGenerateEstimateResourceMilestone = await generateEstimateResourceMilestone(dataEstimateResourceMilestone, analisisAndDesignCalculation, condition, {...initialDataSet, fteValue}, settingParameters, isSnapshotModeEnable);
// generateEstimateResourceMilestoneSub
    const responseGenerateEstimateResourceMilestoneSub = await generateEstimateResourceMilestoneSub(responseGenerateEstimateResourceMilestone, analisisAndDesignCalculation, condition, {...initialDataSet, fteValue}, settingParameters, isSnapshotModeEnable);

  

    await Promise.all([analisisAndDesignCalculation, responseGenerateEstimateResource, responseGenerateEstimateResourceMilestone, responseGenerateEstimateResourceMilestoneSub]);

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

    const dataEstimateAverageRate: any = await setDataSetAveRate(data, dataEstimateAverageRateMilestone, analisisAndDesignCalculation, {...initialDataSet, fteValue}, condition, settingParameters, isSnapshotModeEnable);
    // await Promise.all(dataEstimateAverageRate)
    const responseGenerateEstimateResourceWithSub = await generateEstimateResourceSub(
      responseGenerateEstimateResource, 
      analisisAndDesignCalculation, {
      subTotalMAnalysisDesign,
      subTotalMSAnalysisDesign,
      subTotalMSCAnalysisDesign,
      projectMangerSubValues: dataEstimateAverageRate?.resultValueProjectManagerEstimateResource
    }, condition, {...initialDataSet, fteValue}, settingParameters, isSnapshotModeEnable);

    await Promise.all([responseGenerateEstimateResourceWithSub])
    // resultValueProjectManagerEstimateResource
    
    // data;
    return {
      dataEstimateAverageRate: dataEstimateAverageRate?.data, 
      dataEstimateResource: responseGenerateEstimateResourceWithSub,
      // responseGenerateEstimateResource, 
      dataEstimateAverageRateMilestone: dataEstimateAverageRate?.dataEstimateAverageRateMilestone, 
      dataEstimateResourceMilestone: responseGenerateEstimateResourceMilestoneSub,
      // responseGenerateEstimateResourceMilestone
      reducerValues: analisisAndDesignCalculation?.reducerValues,
      // fitGapCalculation
      fitGapTab: fitGapCalculation?.fitGapTab,
      fitGapAllMoscowTab: fitGapCalculation?.fitGapAllMoscowTab,
      fitGapGapMoscowTab: fitGapCalculation?.fitGapGapMoscowTab,
      fitGapWithoutGapMoscow: fitGapCalculation?.fitGapWithoutGapMoscow,
      // fitGapTab: analisisAndDesignCalculation?.fitGapTab,
      // fitGapAllMoscowTab: analisisAndDesignCalculation?.fitGapAllMoscowTab,
      // fitGapGapMoscowTab: analisisAndDesignCalculation?.fitGapGapMoscowTab,
      // fitGapWithoutGapMoscow: analisisAndDesignCalculation?.fitGapWithoutGapMoscow,
    };
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