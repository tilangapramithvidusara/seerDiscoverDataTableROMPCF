import { calculateProjectManagerEstimateAvgRateMilestone } from "../EstimateAverageRateMilestone/project.manager.utils"
import { generateEstimateResourceValue } from "../EstimateResource"

export const generateEstimateResourceMilestoneSub = async( dataEstimateResourceMilestone: any, analisisAndDesignCalculation: any, condition: boolean, initialDataSet: any, settingParameters?: any, isSnapshotModeEnable?: boolean) => {
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
    dataEstimateResourceMilestone[0]['M_Resource1_H'] = analisisAndDesignCalculation?.analysisDesingEstimateResource?.resultValue1Sub || 0;
    dataEstimateResourceMilestone[0]['M_Resource2_H'] = analisisAndDesignCalculation?.analysisDesingEstimateResource?.resultValue2Sub || 0;
    dataEstimateResourceMilestone[0]['M/S_Resource1_H'] = analisisAndDesignCalculation?.analysisDesingEstimateResource?.resultValueMS1Sub || 0;
    dataEstimateResourceMilestone[0]['M/S_Resource2_H'] = analisisAndDesignCalculation?.analysisDesingEstimateResource?.resultValueMS2Sub || 0;
    dataEstimateResourceMilestone[0]['M/S/C_Resource1_H'] = analisisAndDesignCalculation?.analysisDesingEstimateResource?.resultValueMSC1Sub || 0;
    dataEstimateResourceMilestone[0]['M/S/C_Resource2_H'] = analisisAndDesignCalculation?.analysisDesingEstimateResource?.resultValueMSC2Sub || 0;
    dataEstimateResourceMilestone[0]['M_Resource_Total_H'] = analisisAndDesignCalculation?.analysisDesingEstimateResource?.["M_Resource_Total_Sub"] || 0;
    dataEstimateResourceMilestone[0]['M/S_Resource_Total_H'] = analisisAndDesignCalculation?.analysisDesingEstimateResource?.['M/S_Resource_Total_Sub'] || 0;
    dataEstimateResourceMilestone[0]['M/S/C_Resource_Total_H'] = analisisAndDesignCalculation?.analysisDesingEstimateResource?.['M/S/C_Resource_Total_Sub'] || 0;
    subTotalMAnalysisDesign += analisisAndDesignCalculation?.subSections?.responseAnalisisDesign?.resultValue || 0;
    subTotalMSAnalysisDesign += analisisAndDesignCalculation?.subSections?.responseAnalisisDesign?.resultValueMS || 0;
    subTotalMSCAnalysisDesign += analisisAndDesignCalculation?.subSections?.responseAnalisisDesign?.resultValueMSC || 0;

    totalM1AnalysisDesign += analisisAndDesignCalculation?.analysisDesingEstimateResource?.resultValue1Sub;
    totalM2AnalysisDesign += analisisAndDesignCalculation?.analysisDesingEstimateResource?.resultValue2Sub;
    totalMS1AnalysisDesign += analisisAndDesignCalculation?.analysisDesingEstimateResource?.resultValueMS1Sub;
    totalMS2AnalysisDesign += analisisAndDesignCalculation?.analysisDesingEstimateResource?.resultValueMS2Sub;
    totalMSC1AnalysisDesign += analisisAndDesignCalculation?.analysisDesingEstimateResource?.resultValueMSC1Sub;
    totalMSC2AnalysisDesign += analisisAndDesignCalculation?.analysisDesingEstimateResource?.resultValueMSC2Sub;
    // subTotalMAnalysisDesign += analisisAndDesignCalculation?.analysisDesingEstimateResource?.["M_Resource_Total"] || 0;
    // subTotalMSAnalysisDesign += analisisAndDesignCalculation?.analysisDesingEstimateResource?.["M/S_Resource_Total"] || 0;
    // subTotalMSCAnalysisDesign += analisisAndDesignCalculation?.analysisDesingEstimateResource?.["M/S/C_Resource_Total"] || 0;
  
    dataEstimateResourceMilestone[1]['M_Resource1_H'] = analisisAndDesignCalculation?.customisationDesignEstimateResource?.resultValue1Sub || 0;
    dataEstimateResourceMilestone[1]['M_Resource2_H'] = analisisAndDesignCalculation?.customisationDesignEstimateResource?.resultValue2Sub || 0;
    dataEstimateResourceMilestone[1]['M/S_Resource1_H'] = analisisAndDesignCalculation?.customisationDesignEstimateResource?.resultValueMS1Sub || 0;
    dataEstimateResourceMilestone[1]['M/S_Resource2_H'] = analisisAndDesignCalculation?.customisationDesignEstimateResource?.resultValueMS2Sub || 0;
    dataEstimateResourceMilestone[1]['M/S/C_Resource1_H'] = analisisAndDesignCalculation?.customisationDesignEstimateResource?.resultValueMSC1Sub || 0;
    dataEstimateResourceMilestone[1]['M/S/C_Resource2_H'] = analisisAndDesignCalculation?.customisationDesignEstimateResource?.resultValueMSC2Sub || 0;
    dataEstimateResourceMilestone[1]['M_Resource_Total_H'] = analisisAndDesignCalculation?.customisationDesignEstimateResource?.["M_Resource_Total_Sub"] || 0;
    dataEstimateResourceMilestone[1]['M/S_Resource_Total_H'] = analisisAndDesignCalculation?.customisationDesignEstimateResource?.['M/S_Resource_Total_Sub'] || 0;
    dataEstimateResourceMilestone[1]['M/S/C_Resource_Total_H'] = analisisAndDesignCalculation?.customisationDesignEstimateResource?.['M/S/C_Resource_Total_Sub'] || 0;
    subTotalMAnalysisDesign += analisisAndDesignCalculation?.subSections?.responseCustomisationDesign?.customisation?.resultValue || 0
    subTotalMSAnalysisDesign += analisisAndDesignCalculation?.subSections?.responseCustomisationDesign?.customisation?.resultValueMS || 0
    subTotalMSCAnalysisDesign += analisisAndDesignCalculation?.subSections?.responseCustomisationDesign?.customisation?.resultValueMSC || 0

    totalM1AnalysisDesign += analisisAndDesignCalculation?.customisationDesignEstimateResource?.resultValue1Sub;
    totalM2AnalysisDesign += analisisAndDesignCalculation?.customisationDesignEstimateResource?.resultValue2Sub;
    totalMS1AnalysisDesign += analisisAndDesignCalculation?.customisationDesignEstimateResource?.resultValueMS1Sub;
    totalMS2AnalysisDesign += analisisAndDesignCalculation?.customisationDesignEstimateResource?.resultValueMS2Sub;
    totalMSC1AnalysisDesign += analisisAndDesignCalculation?.customisationDesignEstimateResource?.resultValueMSC1Sub;
    totalMSC2AnalysisDesign += analisisAndDesignCalculation?.customisationDesignEstimateResource?.resultValueMSC2Sub;
    // subTotalMAnalysisDesign += analisisAndDesignCalculation?.customisationDesignEstimateResource?.["M_Resource_Total"] || 0;
    // subTotalMSAnalysisDesign += analisisAndDesignCalculation?.customisationDesignEstimateResource?.["M/S_Resource_Total"] || 0;
    // subTotalMSCAnalysisDesign += analisisAndDesignCalculation?.customisationDesignEstimateResource?.["M/S/C_Resource_Total"] || 0;

    dataEstimateResourceMilestone[2]['M_Resource1_H'] = analisisAndDesignCalculation?.customRequirementDesignEstimateResource?.resultValue1Sub || 0;
    dataEstimateResourceMilestone[2]['M_Resource2_H'] = analisisAndDesignCalculation?.customRequirementDesignEstimateResource?.resultValue2Sub || 0;
    dataEstimateResourceMilestone[2]['M/S_Resource1_H'] = analisisAndDesignCalculation?.customRequirementDesignEstimateResource?.resultValueMS1Sub || 0;
    dataEstimateResourceMilestone[2]['M/S_Resource2_H'] = analisisAndDesignCalculation?.customRequirementDesignEstimateResource?.resultValueMS2Sub || 0;
    dataEstimateResourceMilestone[2]['M/S/C_Resource1_H'] = analisisAndDesignCalculation?.customRequirementDesignEstimateResource?.resultValueMSC1Sub || 0;
    dataEstimateResourceMilestone[2]['M/S/C_Resource2_H'] = analisisAndDesignCalculation?.customRequirementDesignEstimateResource?.resultValueMSC2Sub || 0;
    dataEstimateResourceMilestone[2]['M_Resource_Total_H'] = analisisAndDesignCalculation?.customRequirementDesignEstimateResource?.["M_Resource_Total_Sub"] || 0;
    dataEstimateResourceMilestone[2]['M/S_Resource_Total_H'] = analisisAndDesignCalculation?.customRequirementDesignEstimateResource?.['M/S_Resource_Total_Sub'] || 0;
    dataEstimateResourceMilestone[2]['M/S/C_Resource_Total_H'] = analisisAndDesignCalculation?.customRequirementDesignEstimateResource?.['M/S/C_Resource_Total_Sub'] || 0;
    subTotalMAnalysisDesign += analisisAndDesignCalculation?.subSections?.responseCustomRequirementDesign?.customRequirement?.resultValue || 0;
    subTotalMSAnalysisDesign += analisisAndDesignCalculation?.subSections?.responseCustomRequirementDesign?.customRequirement?.resultValueMS || 0;
    subTotalMSCAnalysisDesign += analisisAndDesignCalculation?.subSections?.responseCustomRequirementDesign?.customRequirement?.resultValueMSC || 0;

    totalM1AnalysisDesign += analisisAndDesignCalculation?.customRequirementDesignEstimateResource?.resultValue1Sub
    totalM2AnalysisDesign += analisisAndDesignCalculation?.customRequirementDesignEstimateResource?.resultValue2Sub
    totalMS1AnalysisDesign += analisisAndDesignCalculation?.customRequirementDesignEstimateResource?.resultValueMS1Sub
    totalMS2AnalysisDesign += analisisAndDesignCalculation?.customRequirementDesignEstimateResource?.resultValueMS2Sub
    totalMSC1AnalysisDesign += analisisAndDesignCalculation?.customRequirementDesignEstimateResource?.resultValueMSC1Sub
    totalMSC2AnalysisDesign += analisisAndDesignCalculation?.customRequirementDesignEstimateResource?.resultValueMSC2Sub
    // subTotalMAnalysisDesign += analisisAndDesignCalculation?.customRequirementDesignEstimateResource?.["M_Resource_Total"] || 0;
    // subTotalMSAnalysisDesign += analisisAndDesignCalculation?.customRequirementDesignEstimateResource?.["M/S_Resource_Total"] || 0;
    // subTotalMSCAnalysisDesign += analisisAndDesignCalculation?.customRequirementDesignEstimateResource?.["M/S/C_Resource_Total"] || 0;

    dataEstimateResourceMilestone[3]['M_Resource1_H'] = analisisAndDesignCalculation?.documentationEstimateResource?.resultValue1Sub || 0;
    dataEstimateResourceMilestone[3]['M_Resource2_H'] = analisisAndDesignCalculation?.documentationEstimateResource?.resultValue2Sub || 0;
    dataEstimateResourceMilestone[3]['M/S_Resource1_H'] = analisisAndDesignCalculation?.documentationEstimateResource?.resultValueMS1Sub || 0;
    dataEstimateResourceMilestone[3]['M/S_Resource2_H'] = analisisAndDesignCalculation?.documentationEstimateResource?.resultValueMS2Sub || 0;
    dataEstimateResourceMilestone[3]['M/S/C_Resource1_H'] = analisisAndDesignCalculation?.documentationEstimateResource?.resultValueMSC1Sub || 0;
    dataEstimateResourceMilestone[3]['M/S/C_Resource2_H'] = analisisAndDesignCalculation?.documentationEstimateResource?.resultValueMSC2Sub || 0;
    dataEstimateResourceMilestone[3]['M_Resource_Total_H'] = analisisAndDesignCalculation?.documentationEstimateResource?.["M_Resource_Total_Sub"] || 0;
    dataEstimateResourceMilestone[3]['M/S_Resource_Total_H'] = analisisAndDesignCalculation?.documentationEstimateResource?.['M/S_Resource_Total_Sub'] || 0;
    dataEstimateResourceMilestone[3]['M/S/C_Resource_Total_H'] = analisisAndDesignCalculation?.documentationEstimateResource?.['M/S/C_Resource_Total_Sub'] || 0;
    subTotalMAnalysisDesign += analisisAndDesignCalculation?.subSections?.responseDocumentation?.documentation?.resultValue || 0
    subTotalMSAnalysisDesign += analisisAndDesignCalculation?.subSections?.responseDocumentation?.documentation?.resultValueMS || 0
    subTotalMSCAnalysisDesign += analisisAndDesignCalculation?.subSections?.responseDocumentation?.documentation?.resultValueMSC || 0

    totalM1AnalysisDesign += analisisAndDesignCalculation?.documentationEstimateResource?.resultValue1Sub
    totalM2AnalysisDesign += analisisAndDesignCalculation?.documentationEstimateResource?.resultValue2Sub
    totalMS1AnalysisDesign += analisisAndDesignCalculation?.documentationEstimateResource?.resultValueMS1Sub
    totalMS2AnalysisDesign += analisisAndDesignCalculation?.documentationEstimateResource?.resultValueMS2Sub
    totalMSC1AnalysisDesign += analisisAndDesignCalculation?.documentationEstimateResource?.resultValueMSC1Sub
    totalMSC2AnalysisDesign += analisisAndDesignCalculation?.documentationEstimateResource?.resultValueMSC2Sub

    // subTotalMAnalysisDesign += analisisAndDesignCalculation?.documentationEstimateResource?.["M_Resource_Total"] || 0;
    // subTotalMSAnalysisDesign += analisisAndDesignCalculation?.documentationEstimateResource?.["M/S_Resource_Total"] || 0;
    // subTotalMSCAnalysisDesign += analisisAndDesignCalculation?.documentationEstimateResource?.["M/S/C_Resource_Total"] || 0;

    dataEstimateResourceMilestone[4]['M_Resource1_H'] = analisisAndDesignCalculation?.designReviewEstimateResource?.resultValue1Sub || 0;
    dataEstimateResourceMilestone[4]['M_Resource2_H'] = analisisAndDesignCalculation?.designReviewEstimateResource?.resultValue2Sub || 0;
    dataEstimateResourceMilestone[4]['M/S_Resource1_H'] = analisisAndDesignCalculation?.designReviewEstimateResource?.resultValueMS1Sub || 0;
    dataEstimateResourceMilestone[4]['M/S_Resource2_H'] = analisisAndDesignCalculation?.designReviewEstimateResource?.resultValueMS2Sub || 0;
    dataEstimateResourceMilestone[4]['M/S/C_Resource1_H'] = analisisAndDesignCalculation?.designReviewEstimateResource?.resultValueMSC1Sub || 0;
    dataEstimateResourceMilestone[4]['M/S/C_Resource2_H'] = analisisAndDesignCalculation?.designReviewEstimateResource?.resultValueMSC2Sub || 0;
    dataEstimateResourceMilestone[4]['M_Resource_Total_H'] = analisisAndDesignCalculation?.designReviewEstimateResource?.["M_Resource_Total_Sub"] || 0;
    dataEstimateResourceMilestone[4]['M/S_Resource_Total_H'] = analisisAndDesignCalculation?.designReviewEstimateResource?.['M/S_Resource_Total_Sub'] || 0;
    dataEstimateResourceMilestone[4]['M/S/C_Resource_Total_H'] = analisisAndDesignCalculation?.designReviewEstimateResource?.['M/S/C_Resource_Total_Sub'] || 0;
    subTotalMAnalysisDesign += analisisAndDesignCalculation?.subSections?.responseDesignReview?.designReview?.resultValue || 0;
    subTotalMSAnalysisDesign += analisisAndDesignCalculation?.subSections?.responseDesignReview?.designReview?.resultValueMS || 0;
    subTotalMSCAnalysisDesign += analisisAndDesignCalculation?.subSections?.responseDesignReview?.designReview?.resultValueMSC || 0;

    totalM1AnalysisDesign += analisisAndDesignCalculation?.designReviewEstimateResource?.resultValue1Sub
    totalM2AnalysisDesign += analisisAndDesignCalculation?.designReviewEstimateResource?.resultValue2Sub
    totalMS1AnalysisDesign += analisisAndDesignCalculation?.designReviewEstimateResource?.resultValueMS1Sub
    totalMS2AnalysisDesign += analisisAndDesignCalculation?.designReviewEstimateResource?.resultValueMS2Sub
    totalMSC1AnalysisDesign += analisisAndDesignCalculation?.designReviewEstimateResource?.resultValueMSC1Sub
    totalMSC2AnalysisDesign += analisisAndDesignCalculation?.designReviewEstimateResource?.resultValueMSC2Sub
    
    // subTotalMAnalysisDesign += analisisAndDesignCalculation?.designReviewEstimateResource?.["M_Resource_Total"] || 0;
    // subTotalMSAnalysisDesign += analisisAndDesignCalculation?.designReviewEstimateResource?.["M/S_Resource_Total"] || 0;
    // subTotalMSCAnalysisDesign += analisisAndDesignCalculation?.designReviewEstimateResource?.["M/S/C_Resource_Total"] || 0;
    
    let subValueAnalysisDesign = await calculateProjectManagerEstimateAvgRateMilestone({...initialDataSet}, analisisAndDesignCalculation?.subSections, 'Analysis and Design', settingParameters, isSnapshotModeEnable)
    // console.log(' ==> ', subValueAnalysisDesign);
    
    let resultValueSubProjectManagerAnalysisDesign = generateEstimateResourceValue(
      initialDataSet, 
      {
        M: (subValueAnalysisDesign.resultValue || 0),
        'M/S': (subValueAnalysisDesign.resultValueMS || 0),
        "M/S/C": (subValueAnalysisDesign.resultValueMSC || 0),
      },
      {}
      ,
      'Project Manager',
      'Estimate Resource Milestone',
      condition,
      settingParameters, isSnapshotModeEnable
    ); 

    // console.log("resultValueSubProjectManagerAnalysisDesign ==> ", resultValueSubProjectManagerAnalysisDesign);
    
  
    // dataEstimateResourceMilestone Project Manager Analysis Design
    dataEstimateResourceMilestone[5]['M_Resource1_H'] =  resultValueSubProjectManagerAnalysisDesign?.resultValue1;
    dataEstimateResourceMilestone[5]['M_Resource2_H'] =  resultValueSubProjectManagerAnalysisDesign?.resultValue2;
    dataEstimateResourceMilestone[5]['M/S_Resource1_H'] =  resultValueSubProjectManagerAnalysisDesign?.resultValueMS1;
    dataEstimateResourceMilestone[5]['M/S_Resource2_H'] =  resultValueSubProjectManagerAnalysisDesign?.resultValueMS2;
    dataEstimateResourceMilestone[5]['M/S/C_Resource1_H'] =  resultValueSubProjectManagerAnalysisDesign?.resultValueMSC1;
    dataEstimateResourceMilestone[5]['M/S/C_Resource2_H'] =  resultValueSubProjectManagerAnalysisDesign?.resultValueMSC2;
    dataEstimateResourceMilestone[5]['M_Resource_Total_H'] =  resultValueSubProjectManagerAnalysisDesign?.['M_Resource_Total'];
    dataEstimateResourceMilestone[5]['M/S_Resource_Total_H'] =  resultValueSubProjectManagerAnalysisDesign?.['M/S_Resource_Total'];
    dataEstimateResourceMilestone[5]['M/S/C_Resource_Total_H'] = resultValueSubProjectManagerAnalysisDesign?.['M/S/C_Resource_Total'];

    totalM1AnalysisDesign += resultValueSubProjectManagerAnalysisDesign?.resultValue1 || 0;
    totalM2AnalysisDesign += resultValueSubProjectManagerAnalysisDesign?.resultValue2 || 0;
    totalMS1AnalysisDesign += resultValueSubProjectManagerAnalysisDesign?.resultValueMS1 || 0;
    totalMS2AnalysisDesign += resultValueSubProjectManagerAnalysisDesign?.resultValueMS2 || 0;
    totalMSC1AnalysisDesign += resultValueSubProjectManagerAnalysisDesign?.resultValueMSC1 || 0;
    totalMSC2AnalysisDesign += resultValueSubProjectManagerAnalysisDesign?.resultValueMSC2 || 0;
  
    // dataEstimateResourceMilestone Total Analysis Design
    dataEstimateResourceMilestone[6]['M_Resource1_H'] =  totalM1AnalysisDesign;
    dataEstimateResourceMilestone[6]['M_Resource2_H'] =  totalM2AnalysisDesign;
    dataEstimateResourceMilestone[6]['M/S_Resource1_H'] =  totalMS1AnalysisDesign;
    dataEstimateResourceMilestone[6]['M/S_Resource2_H'] =  totalMS2AnalysisDesign;
    dataEstimateResourceMilestone[6]['M/S/C_Resource1_H'] =  totalMSC1AnalysisDesign;
    dataEstimateResourceMilestone[6]['M/S/C_Resource2_H'] =  totalMSC2AnalysisDesign;
    dataEstimateResourceMilestone[6]['M_Resource_Total_H'] =  totalM1AnalysisDesign + totalM2AnalysisDesign;
    dataEstimateResourceMilestone[6]['M/S_Resource_Total_H'] =  totalMS1AnalysisDesign + totalMS2AnalysisDesign;
    dataEstimateResourceMilestone[6]['M/S/C_Resource_Total_H'] =  totalMSC1AnalysisDesign + totalMSC2AnalysisDesign;
  
    dataEstimateResourceMilestone[7]['M_Resource1_H'] = analisisAndDesignCalculation?.configurationEstimateResource?.resultValue1Sub || 0;
    dataEstimateResourceMilestone[7]['M_Resource2_H'] = analisisAndDesignCalculation?.configurationEstimateResource?.resultValue2Sub || 0;
    dataEstimateResourceMilestone[7]['M/S_Resource1_H'] = analisisAndDesignCalculation?.configurationEstimateResource?.resultValueMS1Sub || 0;
    dataEstimateResourceMilestone[7]['M/S_Resource2_H'] = analisisAndDesignCalculation?.configurationEstimateResource?.resultValueMS2Sub || 0;
    dataEstimateResourceMilestone[7]['M/S/C_Resource1_H'] = analisisAndDesignCalculation?.configurationEstimateResource?.resultValueMSC1Sub || 0;
    dataEstimateResourceMilestone[7]['M/S/C_Resource2_H'] = analisisAndDesignCalculation?.configurationEstimateResource?.resultValueMSC2Sub || 0;
    dataEstimateResourceMilestone[7]['M_Resource_Total_H'] = analisisAndDesignCalculation?.configurationEstimateResource?.["M_Resource_Total_Sub"] || 0;
    dataEstimateResourceMilestone[7]['M/S_Resource_Total_H'] = analisisAndDesignCalculation?.configurationEstimateResource?.['M/S_Resource_Total_Sub'] || 0;
    dataEstimateResourceMilestone[7]['M/S/C_Resource_Total_H'] = analisisAndDesignCalculation?.configurationEstimateResource?.['M/S/C_Resource_Total_Sub'] || 0;
    subTotalMBuild += analisisAndDesignCalculation?.subSections?.responseAnalisisDesign?.configuration?.resultValue || 0
    subTotalMSBuild += analisisAndDesignCalculation?.subSections?.responseAnalisisDesign?.configuration?.resultValueMS || 0
    subTotalMSCBuild += analisisAndDesignCalculation?.subSections?.responseAnalisisDesign?.configuration?.resultValueMSC || 0

    totalM1Build += analisisAndDesignCalculation?.configurationEstimateResource?.resultValue1Sub
    totalM2Build += analisisAndDesignCalculation?.configurationEstimateResource?.resultValue2Sub
    totalMS1Build += analisisAndDesignCalculation?.configurationEstimateResource?.resultValueMS1Sub
    totalMS2Build += analisisAndDesignCalculation?.configurationEstimateResource?.resultValueMS2Sub
    totalMSC1Build += analisisAndDesignCalculation?.configurationEstimateResource?.resultValueMSC1Sub
    totalMSC2Build += analisisAndDesignCalculation?.configurationEstimateResource?.resultValueMSC2Sub
    // subTotalMBuild += analisisAndDesignCalculation?.configurationEstimateResource?.["M_Resource_Total"] || 0;
    // subTotalMSBuild += analisisAndDesignCalculation?.configurationEstimateResource?.["M/S_Resource_Total"] || 0;
    // subTotalMSCBuild += analisisAndDesignCalculation?.configurationEstimateResource?.["M/S/C_Resource_Total"] || 0;
  
    dataEstimateResourceMilestone[8]['M_Resource1_H'] = analisisAndDesignCalculation?.integrationEstimateResource?.resultValue1Sub || 0;
    dataEstimateResourceMilestone[8]['M_Resource2_H'] = analisisAndDesignCalculation?.integrationEstimateResource?.resultValue2Sub || 0;
    dataEstimateResourceMilestone[8]['M/S_Resource1_H'] = analisisAndDesignCalculation?.integrationEstimateResource?.resultValueMS1Sub || 0;
    dataEstimateResourceMilestone[8]['M/S_Resource2_H'] = analisisAndDesignCalculation?.integrationEstimateResource?.resultValueMS2Sub || 0;
    dataEstimateResourceMilestone[8]['M/S/C_Resource1_H'] = analisisAndDesignCalculation?.integrationEstimateResource?.resultValueMSC1Sub || 0;
    dataEstimateResourceMilestone[8]['M/S/C_Resource2_H'] = analisisAndDesignCalculation?.integrationEstimateResource?.resultValueMSC2Sub || 0;
    dataEstimateResourceMilestone[8]['M_Resource_Total_H'] = analisisAndDesignCalculation?.integrationEstimateResource?.["M_Resource_Total_Sub"] || 0;
    dataEstimateResourceMilestone[8]['M/S_Resource_Total_H'] = analisisAndDesignCalculation?.integrationEstimateResource?.['M/S_Resource_Total_Sub'] || 0;
    dataEstimateResourceMilestone[8]['M/S/C_Resource_Total_H'] = analisisAndDesignCalculation?.integrationEstimateResource?.['M/S/C_Resource_Total_Sub'] || 0;
    subTotalMBuild += analisisAndDesignCalculation?.subSections?.responseIntegration?.integration?.resultValue || 0
    subTotalMSBuild += analisisAndDesignCalculation?.subSections?.responseIntegration?.integration?.resultValueMS || 0
    subTotalMSCBuild += analisisAndDesignCalculation?.subSections?.responseIntegration?.integration?.resultValueMSC || 0

    totalM1Build += analisisAndDesignCalculation?.integrationEstimateResource?.resultValue1Sub
    totalM2Build += analisisAndDesignCalculation?.integrationEstimateResource?.resultValue2Sub
    totalMS1Build += analisisAndDesignCalculation?.integrationEstimateResource?.resultValueMS1Sub
    totalMS2Build += analisisAndDesignCalculation?.integrationEstimateResource?.resultValueMS2Sub
    totalMSC1Build += analisisAndDesignCalculation?.integrationEstimateResource?.resultValueMSC1Sub
    totalMSC2Build += analisisAndDesignCalculation?.integrationEstimateResource?.resultValueMSC2Sub
    
    // subTotalMBuild += analisisAndDesignCalculation?.integrationEstimateResource?.["M_Resource_Total"] || 0
    // subTotalMSBuild += analisisAndDesignCalculation?.integrationEstimateResource?.["M/S_Resource_Total"] || 0
    // subTotalMSCBuild += analisisAndDesignCalculation?.integrationEstimateResource?.["M/S/C_Resource_Total"] || 0

    dataEstimateResourceMilestone[9]['M_Resource1_H'] = analisisAndDesignCalculation?.customisationBuildEstimateResource?.resultValue1Sub || 0;
    dataEstimateResourceMilestone[9]['M_Resource2_H'] = analisisAndDesignCalculation?.customisationBuildEstimateResource?.resultValue2Sub || 0;
    dataEstimateResourceMilestone[9]['M/S_Resource1_H'] = analisisAndDesignCalculation?.customisationBuildEstimateResource?.resultValueMS1Sub || 0;
    dataEstimateResourceMilestone[9]['M/S_Resource2_H'] = analisisAndDesignCalculation?.customisationBuildEstimateResource?.resultValueMS2Sub || 0;
    dataEstimateResourceMilestone[9]['M/S/C_Resource1_H'] = analisisAndDesignCalculation?.customisationBuildEstimateResource?.resultValueMSC1Sub || 0;
    dataEstimateResourceMilestone[9]['M/S/C_Resource2_H'] = analisisAndDesignCalculation?.customisationBuildEstimateResource?.resultValueMSC2Sub || 0;
    dataEstimateResourceMilestone[9]['M_Resource_Total_H'] = analisisAndDesignCalculation?.customisationBuildEstimateResource?.["M_Resource_Total_Sub"] || 0;
    dataEstimateResourceMilestone[9]['M/S_Resource_Total_H'] = analisisAndDesignCalculation?.customisationBuildEstimateResource?.['M/S_Resource_Total_Sub'] || 0;
    dataEstimateResourceMilestone[9]['M/S/C_Resource_Total_H'] = analisisAndDesignCalculation?.customisationBuildEstimateResource?.['M/S/C_Resource_Total_Sub'] || 0;
    subTotalMBuild += analisisAndDesignCalculation?.subSections?.responseCustomisationDesign?.customisationBuild?.resultValue || 0
    subTotalMSBuild += analisisAndDesignCalculation?.subSections?.responseCustomisationDesign?.customisationBuild?.resultValueMS || 0
    subTotalMSCBuild += analisisAndDesignCalculation?.subSections?.responseCustomisationDesign?.customisationBuild?.resultValueMSC || 0

    totalM1Build += analisisAndDesignCalculation?.customisationBuildEstimateResource?.resultValue1Sub
    totalM2Build += analisisAndDesignCalculation?.customisationBuildEstimateResource?.resultValue2Sub
    totalMS1Build += analisisAndDesignCalculation?.customisationBuildEstimateResource?.resultValueMS1Sub
    totalMS2Build += analisisAndDesignCalculation?.customisationBuildEstimateResource?.resultValueMS2Sub
    totalMSC1Build += analisisAndDesignCalculation?.customisationBuildEstimateResource?.resultValueMSC1Sub
    totalMSC2Build += analisisAndDesignCalculation?.customisationBuildEstimateResource?.resultValueMSC2Sub
    
    // subTotalMBuild +=  analisisAndDesignCalculation?.customisationBuildEstimateResource?.["M_Resource_Total"] || 0
    // subTotalMSBuild +=  analisisAndDesignCalculation?.customisationBuildEstimateResource?.["M/S_Resource_Total"] || 0
    // subTotalMSCBuild +=  analisisAndDesignCalculation?.customisationBuildEstimateResource?.["M/S/C_Resource_Total"] || 0

    dataEstimateResourceMilestone[10]['M_Resource1_H'] = analisisAndDesignCalculation?.customRequirementBuildEstimateResource?.resultValue1Sub || 0;
    dataEstimateResourceMilestone[10]['M_Resource2_H'] = analisisAndDesignCalculation?.customRequirementBuildEstimateResource?.resultValue2Sub || 0;
    dataEstimateResourceMilestone[10]['M/S_Resource1_H'] = analisisAndDesignCalculation?.customRequirementBuildEstimateResource?.resultValueMS1Sub || 0;
    dataEstimateResourceMilestone[10]['M/S_Resource2_H'] = analisisAndDesignCalculation?.customRequirementBuildEstimateResource?.resultValueMS2Sub || 0;
    dataEstimateResourceMilestone[10]['M/S/C_Resource1_H'] = analisisAndDesignCalculation?.customRequirementBuildEstimateResource?.resultValueMSC1Sub || 0;
    dataEstimateResourceMilestone[10]['M/S/C_Resource2_H'] = analisisAndDesignCalculation?.customRequirementBuildEstimateResource?.resultValueMSC2Sub || 0;
    dataEstimateResourceMilestone[10]['M_Resource_Total_H'] = analisisAndDesignCalculation?.customRequirementBuildEstimateResource?.["M_Resource_Total_Sub"] || 0;
    dataEstimateResourceMilestone[10]['M/S_Resource_Total_H'] = analisisAndDesignCalculation?.customRequirementBuildEstimateResource?.['M/S_Resource_Total_Sub'] || 0;
    dataEstimateResourceMilestone[10]['M/S/C_Resource_Total_H'] = analisisAndDesignCalculation?.customRequirementBuildEstimateResource?.['M/S/C_Resource_Total_Sub'] || 0;
    subTotalMBuild += analisisAndDesignCalculation?.subSections?.responseCustomRequirementDesign?.customRequirementBuild?.resultValue || 0
    subTotalMSBuild += analisisAndDesignCalculation?.subSections?.responseCustomRequirementDesign?.customRequirementBuild?.resultValueMS || 0
    subTotalMSCBuild += analisisAndDesignCalculation?.subSections?.responseCustomRequirementDesign?.customRequirementBuild?.resultValueMSC || 0

    totalM1Build += analisisAndDesignCalculation?.customRequirementBuildEstimateResource?.resultValue1Sub
    totalM2Build += analisisAndDesignCalculation?.customRequirementBuildEstimateResource?.resultValue2Sub
    totalMS1Build += analisisAndDesignCalculation?.customRequirementBuildEstimateResource?.resultValueMS1Sub
    totalMS2Build += analisisAndDesignCalculation?.customRequirementBuildEstimateResource?.resultValueMS2Sub
    totalMSC1Build += analisisAndDesignCalculation?.customRequirementBuildEstimateResource?.resultValueMSC1Sub
    totalMSC2Build += analisisAndDesignCalculation?.customRequirementBuildEstimateResource?.resultValueMSC2Sub
    
    // subTotalMBuild += analisisAndDesignCalculation?.customRequirementBuildEstimateResource?.["M_Resource_Total"] || 0
    // subTotalMSBuild += analisisAndDesignCalculation?.customRequirementBuildEstimateResource?.["M/S_Resource_Total"] || 0
    // subTotalMSCBuild += analisisAndDesignCalculation?.customRequirementBuildEstimateResource?.["M/S/C_Resource_Total"] || 0
  
    dataEstimateResourceMilestone[11]['M_Resource1_H'] = analisisAndDesignCalculation?.documentLayoutEstimateResource?.resultValue1Sub || 0;
    dataEstimateResourceMilestone[11]['M_Resource2_H'] = analisisAndDesignCalculation?.documentLayoutEstimateResource?.resultValue2Sub || 0;
    dataEstimateResourceMilestone[11]['M/S_Resource1_H'] = analisisAndDesignCalculation?.documentLayoutEstimateResource?.resultValueMS1Sub || 0;
    dataEstimateResourceMilestone[11]['M/S_Resource2_H'] = analisisAndDesignCalculation?.documentLayoutEstimateResource?.resultValueMS2Sub || 0;
    dataEstimateResourceMilestone[11]['M/S/C_Resource1_H'] = analisisAndDesignCalculation?.documentLayoutEstimateResource?.resultValueMSC1Sub || 0;
    dataEstimateResourceMilestone[11]['M/S/C_Resource2_H'] = analisisAndDesignCalculation?.documentLayoutEstimateResource?.resultValueMSC2Sub || 0;
    dataEstimateResourceMilestone[11]['M_Resource_Total_H'] = analisisAndDesignCalculation?.documentLayoutEstimateResource?.["M_Resource_Total_Sub"] || 0;
    dataEstimateResourceMilestone[11]['M/S_Resource_Total_H'] = analisisAndDesignCalculation?.documentLayoutEstimateResource?.['M/S_Resource_Total_Sub'] || 0;
    dataEstimateResourceMilestone[11]['M/S/C_Resource_Total_H'] = analisisAndDesignCalculation?.documentLayoutEstimateResource?.['M/S/C_Resource_Total_Sub'] || 0;
    subTotalMBuild += analisisAndDesignCalculation?.subSections?.responseDocumentLayout?.documentLayout?.resultValue || 0
    subTotalMSBuild += analisisAndDesignCalculation?.subSections?.responseDocumentLayout?.documentLayout?.resultValueMS || 0
    subTotalMSCBuild += analisisAndDesignCalculation?.subSections?.responseDocumentLayout?.documentLayout?.resultValueMSC || 0

    totalM1Build += analisisAndDesignCalculation?.documentLayoutEstimateResource?.resultValue1Sub
    totalM2Build += analisisAndDesignCalculation?.documentLayoutEstimateResource?.resultValue2Sub
    totalMS1Build += analisisAndDesignCalculation?.documentLayoutEstimateResource?.resultValueMS1Sub
    totalMS2Build += analisisAndDesignCalculation?.documentLayoutEstimateResource?.resultValueMS2Sub
    totalMSC1Build += analisisAndDesignCalculation?.documentLayoutEstimateResource?.resultValueMSC1Sub
    totalMSC2Build += analisisAndDesignCalculation?.documentLayoutEstimateResource?.resultValueMSC2Sub
    
    // subTotalMBuild += analisisAndDesignCalculation?.documentLayoutEstimateResource?.["M_Resource_Total"] || 0
    // subTotalMSBuild += analisisAndDesignCalculation?.documentLayoutEstimateResource?.["M/S_Resource_Total"] || 0
    // subTotalMSCBuild += analisisAndDesignCalculation?.documentLayoutEstimateResource?.["M/S/C_Resource_Total"] || 0

    dataEstimateResourceMilestone[12]['M_Resource1_H'] = analisisAndDesignCalculation?.reportingEstimateResource?.resultValue1Sub || 0;
    dataEstimateResourceMilestone[12]['M_Resource2_H'] = analisisAndDesignCalculation?.reportingEstimateResource?.resultValue2Sub || 0;
    dataEstimateResourceMilestone[12]['M/S_Resource1_H'] = analisisAndDesignCalculation?.reportingEstimateResource?.resultValueMS1Sub || 0;
    dataEstimateResourceMilestone[12]['M/S_Resource2_H'] = analisisAndDesignCalculation?.reportingEstimateResource?.resultValueMS2Sub || 0;
    dataEstimateResourceMilestone[12]['M/S/C_Resource1_H'] = analisisAndDesignCalculation?.reportingEstimateResource?.resultValueMSC1Sub || 0;
    dataEstimateResourceMilestone[12]['M/S/C_Resource2_H'] = analisisAndDesignCalculation?.reportingEstimateResource?.resultValueMSC2Sub || 0;
    dataEstimateResourceMilestone[12]['M_Resource_Total_H'] = analisisAndDesignCalculation?.reportingEstimateResource?.["M_Resource_Total_Sub"] || 0;
    dataEstimateResourceMilestone[12]['M/S_Resource_Total_H'] = analisisAndDesignCalculation?.reportingEstimateResource?.['M/S_Resource_Total_Sub'] || 0;
    dataEstimateResourceMilestone[12]['M/S/C_Resource_Total_H'] = analisisAndDesignCalculation?.reportingEstimateResource?.['M/S/C_Resource_Total_Sub'] || 0;
    subTotalMBuild += analisisAndDesignCalculation?.subSections?.responseReporting?.reporting?.resultValue || 0
    subTotalMSBuild += analisisAndDesignCalculation?.subSections?.responseReporting?.reporting?.resultValueMS || 0
    subTotalMSCBuild += analisisAndDesignCalculation?.subSections?.responseReporting?.reporting?.resultValueMSC || 0

    totalM1Build += analisisAndDesignCalculation?.reportingEstimateResource?.resultValue1Sub
    totalM2Build += analisisAndDesignCalculation?.reportingEstimateResource?.resultValue2Sub
    totalMS1Build += analisisAndDesignCalculation?.reportingEstimateResource?.resultValueMS1Sub
    totalMS2Build += analisisAndDesignCalculation?.reportingEstimateResource?.resultValueMS2Sub
    totalMSC1Build += analisisAndDesignCalculation?.reportingEstimateResource?.resultValueMSC1Sub
    totalMSC2Build += analisisAndDesignCalculation?.reportingEstimateResource?.resultValueMSC2Sub
    
    // subTotalMBuild += analisisAndDesignCalculation?.reportingEstimateResource?.["M_Resource_Total"] || 0
    // subTotalMSBuild += analisisAndDesignCalculation?.reportingEstimateResource?.["M/S_Resource_Total"] || 0
    // subTotalMSCBuild += analisisAndDesignCalculation?.reportingEstimateResource?.["M/S/C_Resource_Total"] || 0

    dataEstimateResourceMilestone[13]['M_Resource1_H'] = analisisAndDesignCalculation?.dataMigrationEstimateResource?.resultValue1Sub || 0;
    dataEstimateResourceMilestone[13]['M_Resource2_H'] = analisisAndDesignCalculation?.dataMigrationEstimateResource?.resultValue2Sub || 0;
    dataEstimateResourceMilestone[13]['M/S_Resource1_H'] = analisisAndDesignCalculation?.dataMigrationEstimateResource?.resultValueMS1Sub || 0;
    dataEstimateResourceMilestone[13]['M/S_Resource2_H'] = analisisAndDesignCalculation?.dataMigrationEstimateResource?.resultValueMS2Sub || 0;
    dataEstimateResourceMilestone[13]['M/S/C_Resource1_H'] = analisisAndDesignCalculation?.dataMigrationEstimateResource?.resultValueMSC1Sub || 0;
    dataEstimateResourceMilestone[13]['M/S/C_Resource2_H'] = analisisAndDesignCalculation?.dataMigrationEstimateResource?.resultValueMSC2Sub || 0;
    dataEstimateResourceMilestone[13]['M_Resource_Total_H'] = analisisAndDesignCalculation?.dataMigrationEstimateResource?.["M_Resource_Total_Sub"] || 0;
    dataEstimateResourceMilestone[13]['M/S_Resource_Total_H'] = analisisAndDesignCalculation?.dataMigrationEstimateResource?.['M/S_Resource_Total_Sub'] || 0;
    dataEstimateResourceMilestone[13]['M/S/C_Resource_Total_H'] = analisisAndDesignCalculation?.dataMigrationEstimateResource?.['M/S/C_Resource_Total_Sub'] || 0;
    subTotalMBuild += analisisAndDesignCalculation?.subSections?.responseDataMigration?.dataMigration?.resultValue || 0
    subTotalMSBuild += analisisAndDesignCalculation?.subSections?.responseDataMigration?.dataMigration?.resultValueMS || 0
    subTotalMSCBuild += analisisAndDesignCalculation?.subSections?.responseDataMigration?.dataMigration?.resultValueMSC || 0

    totalM1Build += analisisAndDesignCalculation?.dataMigrationEstimateResource?.resultValue1Sub
    totalM2Build += analisisAndDesignCalculation?.dataMigrationEstimateResource?.resultValue2Sub
    totalMS1Build += analisisAndDesignCalculation?.dataMigrationEstimateResource?.resultValueMS1Sub
    totalMS2Build += analisisAndDesignCalculation?.dataMigrationEstimateResource?.resultValueMS2Sub
    totalMSC1Build += analisisAndDesignCalculation?.dataMigrationEstimateResource?.resultValueMSC1Sub
    totalMSC2Build += analisisAndDesignCalculation?.dataMigrationEstimateResource?.resultValueMSC2Sub
    
    // subTotalMBuild += analisisAndDesignCalculation?.dataMigrationEstimateResource?.["M_Resource_Total"] || 0
    // subTotalMSBuild += analisisAndDesignCalculation?.dataMigrationEstimateResource?.["M/S_Resource_Total"] || 0
    // subTotalMSCBuild += analisisAndDesignCalculation?.dataMigrationEstimateResource?.["M/S/C_Resource_Total"] || 0

    dataEstimateResourceMilestone[14]['M_Resource1_H'] = analisisAndDesignCalculation?.crpEstimateResource?.resultValue1Sub || 0;
    dataEstimateResourceMilestone[14]['M_Resource2_H'] = analisisAndDesignCalculation?.crpEstimateResource?.resultValue2Sub || 0;
    dataEstimateResourceMilestone[14]['M/S_Resource1_H'] = analisisAndDesignCalculation?.crpEstimateResource?.resultValueMS1Sub || 0;
    dataEstimateResourceMilestone[14]['M/S_Resource2_H'] = analisisAndDesignCalculation?.crpEstimateResource?.resultValueMS2Sub || 0;
    dataEstimateResourceMilestone[14]['M/S/C_Resource1_H'] = analisisAndDesignCalculation?.crpEstimateResource?.resultValueMSC1Sub || 0;
    dataEstimateResourceMilestone[14]['M/S/C_Resource2_H'] = analisisAndDesignCalculation?.crpEstimateResource?.resultValueMSC2Sub || 0;
    dataEstimateResourceMilestone[14]['M_Resource_Total_H'] = analisisAndDesignCalculation?.crpEstimateResource?.["M_Resource_Total_Sub"] || 0;
    dataEstimateResourceMilestone[14]['M/S_Resource_Total_H'] = analisisAndDesignCalculation?.crpEstimateResource?.['M/S_Resource_Total_Sub'] || 0;
    dataEstimateResourceMilestone[14]['M/S/C_Resource_Total_H'] = analisisAndDesignCalculation?.crpEstimateResource?.['M/S/C_Resource_Total_Sub'] || 0;
    subTotalMBuild += analisisAndDesignCalculation?.subSections?.responseCRP?.crp?.resultValue || 0
    subTotalMSBuild += analisisAndDesignCalculation?.subSections?.responseCRP?.crp?.resultValueMS || 0
    subTotalMSCBuild += analisisAndDesignCalculation?.subSections?.responseCRP?.crp?.resultValueMSC || 0

    totalM1Build += analisisAndDesignCalculation?.crpEstimateResource?.resultValue1Sub || 0
    totalM2Build += analisisAndDesignCalculation?.crpEstimateResource?.resultValue2Sub || 0
    totalMS1Build += analisisAndDesignCalculation?.crpEstimateResource?.resultValueMS1Sub || 0
    totalMS2Build += analisisAndDesignCalculation?.crpEstimateResource?.resultValueMS2Sub || 0
    totalMSC1Build += analisisAndDesignCalculation?.crpEstimateResource?.resultValueMSC1Sub || 0
    totalMSC2Build += analisisAndDesignCalculation?.crpEstimateResource?.resultValueMSC2Sub || 0
    
    // subTotalMBuild += analisisAndDesignCalculation?.crpEstimateResource?.["M_Resource_Total"] || 0
    // subTotalMSBuild += analisisAndDesignCalculation?.crpEstimateResource?.["M/S_Resource_Total"] || 0
    // subTotalMSCBuild += analisisAndDesignCalculation?.crpEstimateResource?.["M/S/C_Resource_Total"] || 0

    dataEstimateResourceMilestone[15]['M_Resource1_H'] = analisisAndDesignCalculation?.testingEstimateResource?.resultValue1Sub || 0;
    dataEstimateResourceMilestone[15]['M_Resource2_H'] = analisisAndDesignCalculation?.testingEstimateResource?.resultValue2Sub || 0;
    dataEstimateResourceMilestone[15]['M/S_Resource1_H'] = analisisAndDesignCalculation?.testingEstimateResource?.resultValueMS1Sub || 0;
    dataEstimateResourceMilestone[15]['M/S_Resource2_H'] = analisisAndDesignCalculation?.testingEstimateResource?.resultValueMS2Sub || 0;
    dataEstimateResourceMilestone[15]['M/S/C_Resource1_H'] = analisisAndDesignCalculation?.testingEstimateResource?.resultValueMSC1Sub || 0;
    dataEstimateResourceMilestone[15]['M/S/C_Resource2_H'] = analisisAndDesignCalculation?.testingEstimateResource?.resultValueMSC2Sub || 0;
    dataEstimateResourceMilestone[15]['M_Resource_Total_H'] = analisisAndDesignCalculation?.testingEstimateResource?.["M_Resource_Total_Sub"] || 0;
    dataEstimateResourceMilestone[15]['M/S_Resource_Total_H'] = analisisAndDesignCalculation?.testingEstimateResource?.['M/S_Resource_Total_Sub'] || 0;
    dataEstimateResourceMilestone[15]['M/S/C_Resource_Total_H'] = analisisAndDesignCalculation?.testingEstimateResource?.['M/S/C_Resource_Total_Sub'] || 0;
    subTotalMBuild += analisisAndDesignCalculation?.subSections?.responseTesting?.testing?.resultValue || 0
    subTotalMSBuild += analisisAndDesignCalculation?.subSections?.responseTesting?.testing?.resultValueMS || 0
    subTotalMSCBuild += analisisAndDesignCalculation?.subSections?.responseTesting?.testing?.resultValueMSC || 0

    totalM1Build += analisisAndDesignCalculation?.testingEstimateResource?.resultValue1Sub
    totalM2Build += analisisAndDesignCalculation?.testingEstimateResource?.resultValue2Sub
    totalMS1Build += analisisAndDesignCalculation?.testingEstimateResource?.resultValueMS1Sub
    totalMS2Build += analisisAndDesignCalculation?.testingEstimateResource?.resultValueMS2Sub
    totalMSC1Build += analisisAndDesignCalculation?.testingEstimateResource?.resultValueMSC1Sub
    totalMSC2Build += analisisAndDesignCalculation?.testingEstimateResource?.resultValueMSC2Sub
    
    // subTotalMBuild += analisisAndDesignCalculation?.testingEstimateResource?.["M_Resource_Total"] || 0
    // subTotalMSBuild += analisisAndDesignCalculation?.testingEstimateResource?.["M/S_Resource_Total"] || 0
    // subTotalMSCBuild += analisisAndDesignCalculation?.testingEstimateResource?.["M/S/C_Resource_Total"] || 0

    let subValueBuild = await calculateProjectManagerEstimateAvgRateMilestone(initialDataSet, analisisAndDesignCalculation?.subSections, 'BUILD', settingParameters, isSnapshotModeEnable)
    let resultValueSubProjectManagerBuild = generateEstimateResourceValue(
      initialDataSet, {
        M: (subValueBuild.resultValue || 0),
        'M/S': (subValueBuild.resultValueMS || 0),
        "M/S/C": (subValueBuild.resultValueMSC || 0),
      },
      {},
      'Project Manager',
      'Estimate Resource Milestone',
      condition,
      settingParameters, isSnapshotModeEnable
    ); 

    // dataEstimateResourceMilestone Project Manager Build
    dataEstimateResourceMilestone[16]['M_Resource1_H'] =  resultValueSubProjectManagerBuild?.resultValue1 || 0;
    dataEstimateResourceMilestone[16]['M_Resource2_H'] =  resultValueSubProjectManagerBuild?.resultValue2 || 0;
    dataEstimateResourceMilestone[16]['M/S_Resource1_H'] =  resultValueSubProjectManagerBuild?.resultValueMS1 || 0;
    dataEstimateResourceMilestone[16]['M/S_Resource2_H'] =  resultValueSubProjectManagerBuild?.resultValueMS2 || 0;
    dataEstimateResourceMilestone[16]['M/S/C_Resource1_H'] =  resultValueSubProjectManagerBuild?.resultValueMSC1 || 0;
    dataEstimateResourceMilestone[16]['M/S/C_Resource2_H'] =  resultValueSubProjectManagerBuild?.resultValueMSC2 || 0;
    dataEstimateResourceMilestone[16]['M_Resource_Total_H'] =  resultValueSubProjectManagerBuild?.['M_Resource_Total'] || 0;
    dataEstimateResourceMilestone[16]['M/S_Resource_Total_H'] =  resultValueSubProjectManagerBuild?.["M/S_Resource_Total"] || 0;
    dataEstimateResourceMilestone[16]['M/S/C_Resource_Total_H'] = resultValueSubProjectManagerBuild?.["M/S/C_Resource_Total"] || 0;

    totalM1Build += resultValueSubProjectManagerBuild?.resultValue1 || 0;
    totalM2Build += resultValueSubProjectManagerBuild?.resultValue2 || 0;
    totalMS1Build += resultValueSubProjectManagerBuild?.resultValueMS1 || 0;
    totalMS2Build += resultValueSubProjectManagerBuild?.resultValueMS2 || 0;
    totalMSC1Build += resultValueSubProjectManagerBuild?.resultValueMSC1 || 0;
    totalMSC2Build += resultValueSubProjectManagerBuild?.resultValueMSC2 || 0;
  
    // dataEstimateResourceMilestone Total Build
    dataEstimateResourceMilestone[17]['M_Resource1_H'] =  totalM1Build;
    dataEstimateResourceMilestone[17]['M_Resource2_H'] =  totalM2Build;
    dataEstimateResourceMilestone[17]['M/S_Resource1_H'] =  totalMS1Build;
    dataEstimateResourceMilestone[17]['M/S_Resource2_H'] = totalMS2Build;
    dataEstimateResourceMilestone[17]['M/S/C_Resource1_H'] =  totalMSC1Build;
    dataEstimateResourceMilestone[17]['M/S/C_Resource2_H'] =  totalMSC2Build;
    dataEstimateResourceMilestone[17]['M_Resource_Total_H'] =  totalM1Build + totalM2Build;
    dataEstimateResourceMilestone[17]['M/S_Resource_Total_H'] =  totalMS1Build + totalMS2Build;
    dataEstimateResourceMilestone[17]['M/S/C_Resource_Total_H'] = totalMSC1Build + totalMSC2Build;
  
    dataEstimateResourceMilestone[18]['M_Resource1_H'] = analisisAndDesignCalculation?.trainTheTrainerEstimateResource?.resultValue1Sub || 0;
    dataEstimateResourceMilestone[18]['M_Resource2_H'] = analisisAndDesignCalculation?.trainTheTrainerEstimateResource?.resultValue2Sub || 0;
    dataEstimateResourceMilestone[18]['M/S_Resource1_H'] = analisisAndDesignCalculation?.trainTheTrainerEstimateResource?.resultValueMS1Sub || 0;
    dataEstimateResourceMilestone[18]['M/S_Resource2_H'] = analisisAndDesignCalculation?.trainTheTrainerEstimateResource?.resultValueMS2Sub || 0;
    dataEstimateResourceMilestone[18]['M/S/C_Resource1_H'] = analisisAndDesignCalculation?.trainTheTrainerEstimateResource?.resultValueMSC1Sub || 0;
    dataEstimateResourceMilestone[18]['M/S/C_Resource2_H'] = analisisAndDesignCalculation?.trainTheTrainerEstimateResource?.resultValueMSC2Sub || 0;
    dataEstimateResourceMilestone[18]['M_Resource_Total_H'] = analisisAndDesignCalculation?.trainTheTrainerEstimateResource?.["M_Resource_Total_Sub"] || 0;
    dataEstimateResourceMilestone[18]['M/S_Resource_Total_H'] = analisisAndDesignCalculation?.trainTheTrainerEstimateResource?.['M/S_Resource_Total_Sub'] || 0;
    dataEstimateResourceMilestone[18]['M/S/C_Resource_Total_H'] = analisisAndDesignCalculation?.trainTheTrainerEstimateResource?.['M/S/C_Resource_Total_Sub'] || 0;
    subTotalMDeoploy += analisisAndDesignCalculation?.subSections?.responseTrainTheTrainer?.trainTheTrainer?.resultValue || 0
    subTotalMSDeoploy += analisisAndDesignCalculation?.subSections?.responseTrainTheTrainer?.trainTheTrainer?.resultValueMS || 0
    subTotalMSCDeoploy += analisisAndDesignCalculation?.subSections?.responseTrainTheTrainer?.trainTheTrainer?.resultValueMSC || 0

    totalM1Deoploy += analisisAndDesignCalculation?.trainTheTrainerEstimateResource?.resultValue1Sub
    totalM2Deoploy += analisisAndDesignCalculation?.trainTheTrainerEstimateResource?.resultValue2Sub
    totalMS1Deoploy += analisisAndDesignCalculation?.trainTheTrainerEstimateResource?.resultValueMS1Sub
    totalMS2Deoploy += analisisAndDesignCalculation?.trainTheTrainerEstimateResource?.resultValueMS2Sub
    totalMSC1Deoploy += analisisAndDesignCalculation?.trainTheTrainerEstimateResource?.resultValueMSC1Sub
    totalMSC2Deoploy += analisisAndDesignCalculation?.trainTheTrainerEstimateResource?.resultValueMSC2Sub
    
    // subTotalMDeoploy += analisisAndDesignCalculation?.trainTheTrainerEstimateResource?.["M_Resource_Total"] || 0;
    // subTotalMSDeoploy += analisisAndDesignCalculation?.trainTheTrainerEstimateResource?.["M/S_Resource_Total"] || 0;
    // subTotalMSCDeoploy += analisisAndDesignCalculation?.trainTheTrainerEstimateResource?.["M/S/C_Resource_Total"] || 0;

    dataEstimateResourceMilestone[19]['M_Resource1_H'] = analisisAndDesignCalculation?.uatEnvironmentPreparationEstimateResource?.resultValue1Sub || 0;
    dataEstimateResourceMilestone[19]['M_Resource2_H'] = analisisAndDesignCalculation?.uatEnvironmentPreparationEstimateResource?.resultValue2Sub || 0;
    dataEstimateResourceMilestone[19]['M/S_Resource1_H'] = analisisAndDesignCalculation?.uatEnvironmentPreparationEstimateResource?.resultValueMS1Sub || 0;
    dataEstimateResourceMilestone[19]['M/S_Resource2_H'] = analisisAndDesignCalculation?.uatEnvironmentPreparationEstimateResource?.resultValueMS2Sub || 0;
    dataEstimateResourceMilestone[19]['M/S/C_Resource1_H'] = analisisAndDesignCalculation?.uatEnvironmentPreparationEstimateResource?.resultValueMSC1Sub || 0;
    dataEstimateResourceMilestone[19]['M/S/C_Resource2_H'] = analisisAndDesignCalculation?.uatEnvironmentPreparationEstimateResource?.resultValueMSC2Sub || 0;
    dataEstimateResourceMilestone[19]['M_Resource_Total_H'] = analisisAndDesignCalculation?.uatEnvironmentPreparationEstimateResource?.["M_Resource_Total_Sub"] || 0;
    dataEstimateResourceMilestone[19]['M/S_Resource_Total_H'] = analisisAndDesignCalculation?.uatEnvironmentPreparationEstimateResource?.['M/S_Resource_Total_Sub'] || 0;
    dataEstimateResourceMilestone[19]['M/S/C_Resource_Total_H'] = analisisAndDesignCalculation?.uatEnvironmentPreparationEstimateResource?.['M/S/C_Resource_Total_Sub'] || 0;
    subTotalMDeoploy += analisisAndDesignCalculation?.subSections?.responseUATEnvironmentPreparation?.uatEnvironmentPreparation?.resultValue || 0
    subTotalMSDeoploy += analisisAndDesignCalculation?.subSections?.responseUATEnvironmentPreparation?.uatEnvironmentPreparation?.resultValueMS || 0
    subTotalMSCDeoploy += analisisAndDesignCalculation?.subSections?.responseUATEnvironmentPreparation?.uatEnvironmentPreparation?.resultValueMSC || 0

    totalM1Deoploy += analisisAndDesignCalculation?.uatEnvironmentPreparationEstimateResource?.resultValue1Sub
    totalM2Deoploy += analisisAndDesignCalculation?.uatEnvironmentPreparationEstimateResource?.resultValue2Sub
    totalMS1Deoploy += analisisAndDesignCalculation?.uatEnvironmentPreparationEstimateResource?.resultValueMS1Sub
    totalMS2Deoploy += analisisAndDesignCalculation?.uatEnvironmentPreparationEstimateResource?.resultValueMS2Sub
    totalMSC1Deoploy += analisisAndDesignCalculation?.uatEnvironmentPreparationEstimateResource?.resultValueMSC1Sub
    totalMSC2Deoploy += analisisAndDesignCalculation?.uatEnvironmentPreparationEstimateResource?.resultValueMSC2Sub
    
    // subTotalMDeoploy += analisisAndDesignCalculation?.uatEnvironmentPreparationEstimateResource?.["M_Resource_Total"] || 0;
    // subTotalMSDeoploy += analisisAndDesignCalculation?.uatEnvironmentPreparationEstimateResource?.["M/S_Resource_Total"] || 0;
    // subTotalMSCDeoploy += analisisAndDesignCalculation?.uatEnvironmentPreparationEstimateResource?.["M/S/C_Resource_Total"] || 0;

    dataEstimateResourceMilestone[20]['M_Resource1_H'] = analisisAndDesignCalculation?.uatSupportEstimateResource?.resultValue1Sub || 0;
    dataEstimateResourceMilestone[20]['M_Resource2_H'] = analisisAndDesignCalculation?.uatSupportEstimateResource?.resultValue2Sub || 0;
    dataEstimateResourceMilestone[20]['M/S_Resource1_H'] = analisisAndDesignCalculation?.uatSupportEstimateResource?.resultValueMS1Sub || 0;
    dataEstimateResourceMilestone[20]['M/S_Resource2_H'] = analisisAndDesignCalculation?.uatSupportEstimateResource?.resultValueMS2Sub || 0;
    dataEstimateResourceMilestone[20]['M/S/C_Resource1_H'] = analisisAndDesignCalculation?.uatSupportEstimateResource?.resultValueMSC1Sub || 0;
    dataEstimateResourceMilestone[20]['M/S/C_Resource2_H'] = analisisAndDesignCalculation?.uatSupportEstimateResource?.resultValueMSC2Sub || 0;
    dataEstimateResourceMilestone[20]['M_Resource_Total_H'] = analisisAndDesignCalculation?.uatSupportEstimateResource?.["M_Resource_Total_Sub"] || 0;
    dataEstimateResourceMilestone[20]['M/S_Resource_Total_H'] = analisisAndDesignCalculation?.uatSupportEstimateResource?.['M/S_Resource_Total_Sub'] || 0;
    dataEstimateResourceMilestone[20]['M/S/C_Resource_Total_H'] = analisisAndDesignCalculation?.uatSupportEstimateResource?.['M/S/C_Resource_Total_Sub'] || 0;
    subTotalMDeoploy += analisisAndDesignCalculation?.subSections?.responseUATSupport?.uatSupport?.resultValue || 0
    subTotalMSDeoploy += analisisAndDesignCalculation?.subSections?.responseUATSupport?.uatSupport?.resultValueMS || 0
    subTotalMSCDeoploy += analisisAndDesignCalculation?.subSections?.responseUATSupport?.uatSupport?.resultValueMSC || 0

    totalM1Deoploy += analisisAndDesignCalculation?.uatSupportEstimateResource?.resultValue1Sub
    totalM2Deoploy += analisisAndDesignCalculation?.uatSupportEstimateResource?.resultValue2Sub
    totalMS1Deoploy += analisisAndDesignCalculation?.uatSupportEstimateResource?.resultValueMS1Sub
    totalMS2Deoploy += analisisAndDesignCalculation?.uatSupportEstimateResource?.resultValueMS2Sub
    totalMSC1Deoploy += analisisAndDesignCalculation?.uatSupportEstimateResource?.resultValueMSC1Sub
    totalMSC2Deoploy += analisisAndDesignCalculation?.uatSupportEstimateResource?.resultValueMSC2Sub
    
    // subTotalMDeoploy += analisisAndDesignCalculation?.uatSupportEstimateResource?.["M_Resource_Total"] || 0;
    // subTotalMSDeoploy += analisisAndDesignCalculation?.uatSupportEstimateResource?.["M/S_Resource_Total"] || 0;
    // subTotalMSCDeoploy += analisisAndDesignCalculation?.uatSupportEstimateResource?.["M/S/C_Resource_Total"] || 0;

    dataEstimateResourceMilestone[21]['M_Resource1_H'] = analisisAndDesignCalculation?.prodEnvironmentPreparationEstimateResource?.resultValue1Sub || 0;
    dataEstimateResourceMilestone[21]['M_Resource2_H'] = analisisAndDesignCalculation?.prodEnvironmentPreparationEstimateResource?.resultValue2Sub || 0;
    dataEstimateResourceMilestone[21]['M/S_Resource1_H'] = analisisAndDesignCalculation?.prodEnvironmentPreparationEstimateResource?.resultValueMS1Sub || 0;
    dataEstimateResourceMilestone[21]['M/S_Resource2_H'] = analisisAndDesignCalculation?.prodEnvironmentPreparationEstimateResource?.resultValueMS2Sub || 0;
    dataEstimateResourceMilestone[21]['M/S/C_Resource1_H'] = analisisAndDesignCalculation?.prodEnvironmentPreparationEstimateResource?.resultValueMSC1Sub || 0;
    dataEstimateResourceMilestone[21]['M/S/C_Resource2_H'] = analisisAndDesignCalculation?.prodEnvironmentPreparationEstimateResource?.resultValueMSC2Sub || 0;
    dataEstimateResourceMilestone[21]['M_Resource_Total_H'] = analisisAndDesignCalculation?.prodEnvironmentPreparationEstimateResource?.["M_Resource_Total_Sub"] || 0;
    dataEstimateResourceMilestone[21]['M/S_Resource_Total_H'] = analisisAndDesignCalculation?.prodEnvironmentPreparationEstimateResource?.['M/S_Resource_Total_Sub'] || 0;
    dataEstimateResourceMilestone[21]['M/S/C_Resource_Total_H'] = analisisAndDesignCalculation?.prodEnvironmentPreparationEstimateResource?.['M/S/C_Resource_Total_Sub'] || 0;
    subTotalMDeoploy += analisisAndDesignCalculation?.subSections?.responseProdEnvironmentPreparation?.prodEnvironmentPreparation?.resultValue || 0
    subTotalMSDeoploy += analisisAndDesignCalculation?.subSections?.responseProdEnvironmentPreparation?.prodEnvironmentPreparation?.resultValueMS || 0
    subTotalMSCDeoploy += analisisAndDesignCalculation?.subSections?.responseProdEnvironmentPreparation?.prodEnvironmentPreparation?.resultValueMSC || 0

    totalM1Deoploy += analisisAndDesignCalculation?.prodEnvironmentPreparationEstimateResource?.resultValue1Sub
    totalM2Deoploy += analisisAndDesignCalculation?.prodEnvironmentPreparationEstimateResource?.resultValue2Sub
    totalMS1Deoploy += analisisAndDesignCalculation?.prodEnvironmentPreparationEstimateResource?.resultValueMS1Sub
    totalMS2Deoploy += analisisAndDesignCalculation?.prodEnvironmentPreparationEstimateResource?.resultValueMS2Sub
    totalMSC1Deoploy += analisisAndDesignCalculation?.prodEnvironmentPreparationEstimateResource?.resultValueMSC1Sub
    totalMSC2Deoploy += analisisAndDesignCalculation?.prodEnvironmentPreparationEstimateResource?.resultValueMSC2Sub
    
    // subTotalMDeoploy += analisisAndDesignCalculation?.prodEnvironmentPreparationEstimateResource?.["M_Resource_Total"] || 0;
    // subTotalMSDeoploy += analisisAndDesignCalculation?.prodEnvironmentPreparationEstimateResource?.["M/S_Resource_Total"] || 0;
    // subTotalMSCDeoploy += analisisAndDesignCalculation?.prodEnvironmentPreparationEstimateResource?.["M/S/C_Resource_Total"] || 0;

    dataEstimateResourceMilestone[22]['M_Resource1_H'] = analisisAndDesignCalculation?.supportHandoverEstimateResource?.resultValue1Sub || 0;
    dataEstimateResourceMilestone[22]['M_Resource2_H'] = analisisAndDesignCalculation?.supportHandoverEstimateResource?.resultValue2Sub || 0;
    dataEstimateResourceMilestone[22]['M/S_Resource1_H'] = analisisAndDesignCalculation?.supportHandoverEstimateResource?.resultValueMS1Sub || 0;
    dataEstimateResourceMilestone[22]['M/S_Resource2_H'] = analisisAndDesignCalculation?.supportHandoverEstimateResource?.resultValueMS2Sub || 0;
    dataEstimateResourceMilestone[22]['M/S/C_Resource1_H'] = analisisAndDesignCalculation?.supportHandoverEstimateResource?.resultValueMSC1Sub || 0;
    dataEstimateResourceMilestone[22]['M/S/C_Resource2_H'] = analisisAndDesignCalculation?.supportHandoverEstimateResource?.resultValueMSC2Sub || 0;
    dataEstimateResourceMilestone[22]['M_Resource_Total_H'] = analisisAndDesignCalculation?.supportHandoverEstimateResource?.["M_Resource_Total_Sub"] || 0;
    dataEstimateResourceMilestone[22]['M/S_Resource_Total_H'] = analisisAndDesignCalculation?.supportHandoverEstimateResource?.['M/S_Resource_Total_Sub'] || 0;
    dataEstimateResourceMilestone[22]['M/S/C_Resource_Total_H'] = analisisAndDesignCalculation?.supportHandoverEstimateResource?.['M/S/C_Resource_Total_Sub'] || 0;
    subTotalMDeoploy += analisisAndDesignCalculation?.subSections?.responseSupportHandover?.supportHandover?.resultValue || 0
    subTotalMSDeoploy += analisisAndDesignCalculation?.subSections?.responseSupportHandover?.supportHandover?.resultValueMS || 0
    subTotalMSCDeoploy += analisisAndDesignCalculation?.subSections?.responseSupportHandover?.supportHandover?.resultValueMSC || 0

    totalM1Deoploy += analisisAndDesignCalculation?.supportHandoverEstimateResource?.resultValue1Sub
    totalM2Deoploy += analisisAndDesignCalculation?.supportHandoverEstimateResource?.resultValue2Sub
    totalMS1Deoploy += analisisAndDesignCalculation?.supportHandoverEstimateResource?.resultValueMS1Sub
    totalMS2Deoploy += analisisAndDesignCalculation?.supportHandoverEstimateResource?.resultValueMS2Sub
    totalMSC1Deoploy += analisisAndDesignCalculation?.supportHandoverEstimateResource?.resultValueMSC1Sub
    totalMSC2Deoploy += analisisAndDesignCalculation?.supportHandoverEstimateResource?.resultValueMSC2Sub
    
    // subTotalMDeoploy += analisisAndDesignCalculation?.supportHandoverEstimateResource?.["M_Resource_Total"] || 0;
    // subTotalMSDeoploy += analisisAndDesignCalculation?.supportHandoverEstimateResource?.["M/S_Resource_Total"] || 0;
    // subTotalMSCDeoploy += analisisAndDesignCalculation?.supportHandoverEstimateResource?.["M/S/C_Resource_Total"] || 0;

    let subValueDeploy = await calculateProjectManagerEstimateAvgRateMilestone(initialDataSet, analisisAndDesignCalculation?.subSections, 'DEPLOY', settingParameters, isSnapshotModeEnable)
    let resultValueSubProjectManagerDesoploy = generateEstimateResourceValue(
      initialDataSet, {
        M: (subValueDeploy.resultValue || 0),
        'M/S': (subValueDeploy.resultValueMS || 0),
        "M/S/C": (subValueDeploy.resultValueMSC || 0),
      },
      {},
      'Project Manager',
      'Estimate Resource Milestone',
      condition,
      settingParameters, isSnapshotModeEnable
    ); 

    // dataEstimateResourceMilestone Project Manager Deploy
    dataEstimateResourceMilestone[23]['M_Resource1_H'] =  resultValueSubProjectManagerDesoploy?.resultValue1;
    dataEstimateResourceMilestone[23]['M_Resource2_H'] =  resultValueSubProjectManagerDesoploy?.resultValue2;
    dataEstimateResourceMilestone[23]['M/S_Resource1_H'] =  resultValueSubProjectManagerDesoploy?.resultValueMS1;
    dataEstimateResourceMilestone[23]['M/S_Resource2_H'] =  resultValueSubProjectManagerDesoploy?.resultValueMS2;
    dataEstimateResourceMilestone[23]['M/S/C_Resource1_H'] =  resultValueSubProjectManagerDesoploy?.resultValueMSC1;
    dataEstimateResourceMilestone[23]['M/S/C_Resource2_H'] =  resultValueSubProjectManagerDesoploy?.resultValueMSC2;
    dataEstimateResourceMilestone[23]['M_Resource_Total_H'] =  resultValueSubProjectManagerDesoploy?.M_Resource_Total;
    dataEstimateResourceMilestone[23]['M/S_Resource_Total_H'] =  resultValueSubProjectManagerDesoploy?.["M/S_Resource_Total"];
    dataEstimateResourceMilestone[23]['M/S/C_Resource_Total_H'] = resultValueSubProjectManagerDesoploy?.["M/S/C_Resource_Total"];

    totalM1Deoploy += resultValueSubProjectManagerDesoploy?.resultValue1 || 0;
    totalM2Deoploy += resultValueSubProjectManagerDesoploy?.resultValue2 || 0;
    totalMS1Deoploy += resultValueSubProjectManagerDesoploy?.resultValueMS1 || 0;
    totalMS2Deoploy += resultValueSubProjectManagerDesoploy?.resultValueMS2 || 0;
    totalMSC1Deoploy += resultValueSubProjectManagerDesoploy?.resultValueMSC1 || 0;
    totalMSC2Deoploy += resultValueSubProjectManagerDesoploy?.resultValueMSC2 || 0;

    // dataEstimateResourceMilestone Total Deploy
    dataEstimateResourceMilestone[24]['M_Resource1_H'] =  totalM1Deoploy;
    dataEstimateResourceMilestone[24]['M_Resource2_H'] =  totalM2Deoploy;
    dataEstimateResourceMilestone[24]['M/S_Resource1_H'] =  totalMS1Deoploy;
    dataEstimateResourceMilestone[24]['M/S_Resource2_H'] =  totalMS2Deoploy;
    dataEstimateResourceMilestone[24]['M/S/C_Resource1_H'] =  totalMSC1Deoploy;
    dataEstimateResourceMilestone[24]['M/S/C_Resource2_H'] =  totalMSC2Deoploy;
    dataEstimateResourceMilestone[24]['M_Resource_Total_H'] =  totalM1Deoploy + totalM2Deoploy;
    dataEstimateResourceMilestone[24]['M/S_Resource_Total_H'] =  totalMS1Deoploy + totalMS2Deoploy;
    dataEstimateResourceMilestone[24]['M/S/C_Resource_Total_H'] = totalMSC1Deoploy + totalMSC2Deoploy;
  
    dataEstimateResourceMilestone[25]['M_Resource1_H'] = analisisAndDesignCalculation?.endUserTrainingEstimateResource?.resultValue1Sub || 0;
    dataEstimateResourceMilestone[25]['M_Resource2_H'] = analisisAndDesignCalculation?.endUserTrainingEstimateResource?.resultValue2Sub || 0;
    dataEstimateResourceMilestone[25]['M/S_Resource1_H'] = analisisAndDesignCalculation?.endUserTrainingEstimateResource?.resultValueMS1Sub || 0;
    dataEstimateResourceMilestone[25]['M/S_Resource2_H'] = analisisAndDesignCalculation?.endUserTrainingEstimateResource?.resultValueMS2Sub || 0;
    dataEstimateResourceMilestone[25]['M/S/C_Resource1_H'] = analisisAndDesignCalculation?.endUserTrainingEstimateResource?.resultValueMSC1Sub || 0;
    dataEstimateResourceMilestone[25]['M/S/C_Resource2_H'] = analisisAndDesignCalculation?.endUserTrainingEstimateResource?.resultValueMSC2Sub || 0;
    dataEstimateResourceMilestone[25]['M_Resource_Total_H'] = analisisAndDesignCalculation?.endUserTrainingEstimateResource?.["M_Resource_Total_Sub"] || 0;
    dataEstimateResourceMilestone[25]['M/S_Resource_Total_H'] = analisisAndDesignCalculation?.endUserTrainingEstimateResource?.['M/S_Resource_Total_Sub'] || 0;
    dataEstimateResourceMilestone[25]['M/S/C_Resource_Total_H'] = analisisAndDesignCalculation?.endUserTrainingEstimateResource?.['M/S/C_Resource_Total_Sub'] || 0;
    subTotalMOperation += analisisAndDesignCalculation?.subSections?.responseDocumentLayout?.endUserTraining?.resultValue || 0
    subTotalMSOperation += analisisAndDesignCalculation?.subSections?.responseDocumentLayout?.endUserTraining?.resultValueMS || 0
    subTotalMSCOperation += analisisAndDesignCalculation?.subSections?.responseDocumentLayout?.endUserTraining?.resultValueMSC || 0

    totalM1Operation += analisisAndDesignCalculation?.endUserTrainingEstimateResource?.resultValue1Sub
    totalM2Operation += analisisAndDesignCalculation?.endUserTrainingEstimateResource?.resultValue2Sub
    totalMS1Operation += analisisAndDesignCalculation?.endUserTrainingEstimateResource?.resultValueMS1Sub
    totalMS2Operation += analisisAndDesignCalculation?.endUserTrainingEstimateResource?.resultValueMS2Sub
    totalMSC1Operation += analisisAndDesignCalculation?.endUserTrainingEstimateResource?.resultValueMSC1Sub
    totalMSC2Operation += analisisAndDesignCalculation?.endUserTrainingEstimateResource?.resultValueMSC2Sub
    
    // subTotalMOperation += analisisAndDesignCalculation?.endUserTrainingEstimateResource?.["M_Resource_Total"] || 0;
    // subTotalMSOperation += analisisAndDesignCalculation?.endUserTrainingEstimateResource?.["M/S_Resource_Total"] || 0;
    // subTotalMSCOperation += analisisAndDesignCalculation?.endUserTrainingEstimateResource?.["M/S/C_Resource_Total"] || 0;

    dataEstimateResourceMilestone[26]['M_Resource1_H'] = analisisAndDesignCalculation?.postGoLiveEstimateResource?.resultValue1Sub || 0;
    dataEstimateResourceMilestone[26]['M_Resource2_H'] = analisisAndDesignCalculation?.postGoLiveEstimateResource?.resultValue2Sub || 0;
    dataEstimateResourceMilestone[26]['M/S_Resource1_H'] = analisisAndDesignCalculation?.postGoLiveEstimateResource?.resultValueMS1Sub || 0;
    dataEstimateResourceMilestone[26]['M/S_Resource2_H'] = analisisAndDesignCalculation?.postGoLiveEstimateResource?.resultValueMS2Sub || 0;
    dataEstimateResourceMilestone[26]['M/S/C_Resource1_H'] = analisisAndDesignCalculation?.postGoLiveEstimateResource?.resultValueMSC1Sub || 0;
    dataEstimateResourceMilestone[26]['M/S/C_Resource2_H'] = analisisAndDesignCalculation?.postGoLiveEstimateResource?.resultValueMSC2Sub || 0;
    dataEstimateResourceMilestone[26]['M_Resource_Total_H'] = analisisAndDesignCalculation?.postGoLiveEstimateResource?.["M_Resource_Total_Sub"] || 0;
    dataEstimateResourceMilestone[26]['M/S_Resource_Total_H'] = analisisAndDesignCalculation?.postGoLiveEstimateResource?.['M/S_Resource_Total_Sub'] || 0;
    dataEstimateResourceMilestone[26]['M/S/C_Resource_Total_H'] = analisisAndDesignCalculation?.postGoLiveEstimateResource?.['M/S/C_Resource_Total_Sub'] || 0;
    subTotalMOperation += analisisAndDesignCalculation?.subSections?.responsePostGoLive?.postGoLive?.resultValue || 0
    subTotalMSOperation += analisisAndDesignCalculation?.subSections?.responsePostGoLive?.postGoLive?.resultValueMS || 0
    subTotalMSCOperation += analisisAndDesignCalculation?.subSections?.responsePostGoLive?.postGoLive?.resultValueMSC || 0

    totalM1Operation += analisisAndDesignCalculation?.postGoLiveEstimateResource?.resultValue1Sub
    totalM2Operation += analisisAndDesignCalculation?.postGoLiveEstimateResource?.resultValue2Sub
    totalMS1Operation += analisisAndDesignCalculation?.postGoLiveEstimateResource?.resultValueMS1Sub
    totalMS2Operation += analisisAndDesignCalculation?.postGoLiveEstimateResource?.resultValueMS2Sub
    totalMSC1Operation += analisisAndDesignCalculation?.postGoLiveEstimateResource?.resultValueMSC1Sub
    totalMSC2Operation += analisisAndDesignCalculation?.postGoLiveEstimateResource?.resultValueMSC2Sub
    
    // subTotalMOperation += analisisAndDesignCalculation?.postGoLiveEstimateResource?.["M_Resource_Total"] || 0;
    // subTotalMSOperation += analisisAndDesignCalculation?.postGoLiveEstimateResource?.["M/S_Resource_Total"] || 0;
    // subTotalMSCOperation += analisisAndDesignCalculation?.postGoLiveEstimateResource?.["M/S/C_Resource_Total"] || 0;

    let subValueOperation = await calculateProjectManagerEstimateAvgRateMilestone(initialDataSet, analisisAndDesignCalculation?.subSections, 'OPERATION', settingParameters, isSnapshotModeEnable)
    let resultValueSubProjectManagerOperation = generateEstimateResourceValue(
      initialDataSet, {
        M: (subValueOperation.resultValue || 0),
        'M/S': (subValueOperation.resultValueMS || 0),
        "M/S/C": (subValueOperation.resultValueMSC || 0),
      },
      {},
      'Project Manager',
      'Estimate Resource Milestone',
      condition,
      settingParameters, isSnapshotModeEnable
    ); 
    
    // para c28 == percent subT * para_projectManagement
    await Promise.all([resultValueSubProjectManagerOperation])

    // dataEstimateResourceMilestone Project Manager Deploy
    dataEstimateResourceMilestone[27]['M_Resource1_H'] =  resultValueSubProjectManagerOperation?.resultValue1;
    dataEstimateResourceMilestone[27]['M_Resource2_H'] =  resultValueSubProjectManagerOperation?.resultValue2;
    dataEstimateResourceMilestone[27]['M/S_Resource1_H'] =  resultValueSubProjectManagerOperation?.resultValueMS1;
    dataEstimateResourceMilestone[27]['M/S_Resource2_H'] =  resultValueSubProjectManagerOperation?.resultValueMS2;
    dataEstimateResourceMilestone[27]['M/S/C_Resource1_H'] =  resultValueSubProjectManagerOperation?.resultValueMSC1;
    dataEstimateResourceMilestone[27]['M/S/C_Resource2_H'] =  resultValueSubProjectManagerOperation?.resultValueMSC2;
    dataEstimateResourceMilestone[27]['M_Resource_Total_H'] =  resultValueSubProjectManagerOperation?.M_Resource_Total;
    dataEstimateResourceMilestone[27]['M/S_Resource_Total_H'] =  resultValueSubProjectManagerOperation?.["M/S_Resource_Total"];
    dataEstimateResourceMilestone[27]['M/S/C_Resource_Total_H'] = resultValueSubProjectManagerOperation?.["M/S/C_Resource_Total"];

    totalM1Operation += resultValueSubProjectManagerOperation?.resultValue1 || 0;
    totalM2Operation += resultValueSubProjectManagerOperation?.resultValue2 || 0;
    totalMS1Operation += resultValueSubProjectManagerOperation?.resultValueMS1 || 0;
    totalMS2Operation += resultValueSubProjectManagerOperation?.resultValueMS2 || 0;
    totalMSC1Operation += resultValueSubProjectManagerOperation?.resultValueMSC1 || 0;
    totalMSC2Operation += resultValueSubProjectManagerOperation?.resultValueMSC2 || 0;
  
    // dataEstimateResourceMilestone Total Deploy
    dataEstimateResourceMilestone[28]['M_Resource1_H'] = totalM1Operation;
    dataEstimateResourceMilestone[28]['M_Resource2_H'] =  totalM2Operation;
    dataEstimateResourceMilestone[28]['M/S_Resource1_H'] =  totalMS1Operation;
    dataEstimateResourceMilestone[28]['M/S_Resource2_H'] =  totalMS2Operation;
    dataEstimateResourceMilestone[28]['M/S/C_Resource1_H'] =  totalMSC1Operation;
    dataEstimateResourceMilestone[28]['M/S/C_Resource2_H'] =  totalMSC2Operation;
    dataEstimateResourceMilestone[28]['M_Resource_Total_H'] =  totalM1Operation + totalM2Operation;
    dataEstimateResourceMilestone[28]['M/S_Resource_Total_H'] =  totalMS1Operation + totalMS2Operation;
    dataEstimateResourceMilestone[28]['M/S/C_Resource_Total_H'] = totalMSC1Operation + totalMSC2Operation;
    await Promise.all(dataEstimateResourceMilestone)

    const subTotalRiskWithDataEstimateResourceMilestone = await getSubTotalAndRiskSub(dataEstimateResourceMilestone, (analisisAndDesignCalculation?.fColmnValueEstimateAveRate?.resultValue || 0))

  await Promise.all(subTotalRiskWithDataEstimateResourceMilestone)
  return subTotalRiskWithDataEstimateResourceMilestone;
    // projectManager
      /////////////////// ESTIMATE RESOURCE - END ///////////////////
}

const getSubTotalAndRiskSub = async(dataEstimateResourceMilestone: any, fColmnValueEstimateAveRate: number) => {
  const mr1 = (dataEstimateResourceMilestone[28]?.['M_Resource1_H'] || 0) +
    (dataEstimateResourceMilestone[24]?.['M_Resource1_H'] || 0) + 
    (dataEstimateResourceMilestone[17]?.['M_Resource1_H'] || 0) +
    (dataEstimateResourceMilestone[6]?.['M_Resource1_H'] || 0)

  const mr2 = (dataEstimateResourceMilestone[28]?.['M_Resource2_H'] || 0) +
  (dataEstimateResourceMilestone[24]?.['M_Resource2_H'] || 0) + 
  (dataEstimateResourceMilestone[17]?.['M_Resource2_H'] || 0) +
  (dataEstimateResourceMilestone[6]?.['M_Resource2_H'] || 0);

  const msr1 = (dataEstimateResourceMilestone[28]?.['M/S_Resource1_H'] || 0) +
  (dataEstimateResourceMilestone[24]?.['M/S_Resource1_H'] || 0) + 
  (dataEstimateResourceMilestone[17]?.['M/S_Resource1_H'] || 0) +
  (dataEstimateResourceMilestone[6]?.['M/S_Resource1_H'] || 0);

  const msr2 = (dataEstimateResourceMilestone[28]?.['M/S_Resource2_H'] || 0) +
  (dataEstimateResourceMilestone[24]?.['M/S_Resource2_H'] || 0) + 
  (dataEstimateResourceMilestone[17]?.['M/S_Resource2_H'] || 0) +
  (dataEstimateResourceMilestone[6]?.['M/S_Resource2_H'] || 0);

  const mscr1 = (dataEstimateResourceMilestone[28]?.['M/S/C_Resource1_H'] || 0) +
  (dataEstimateResourceMilestone[24]?.['M/S/C_Resource1_H'] || 0) + 
  (dataEstimateResourceMilestone[17]?.['M/S/C_Resource1_H'] || 0) +
  (dataEstimateResourceMilestone[6]?.['M/S/C_Resource1_H'] || 0);

  const mscr2 = (dataEstimateResourceMilestone[28]?.['M/S/C_Resource2_H'] || 0) +
  (dataEstimateResourceMilestone[24]?.['M/S/C_Resource2_H'] || 0) + 
  (dataEstimateResourceMilestone[17]?.['M/S/C_Resource2_H'] || 0) +
  (dataEstimateResourceMilestone[6]?.['M/S/C_Resource2_H'] || 0);

  const mt = (dataEstimateResourceMilestone[28]?.['M_Resource_Total_H'] || 0) +
  (dataEstimateResourceMilestone[24]?.['M_Resource_Total_H'] || 0) + 
  (dataEstimateResourceMilestone[17]?.['M_Resource_Total_H'] || 0) +
  (dataEstimateResourceMilestone[6]?.['M_Resource_Total_H'] || 0);


  const mst = (dataEstimateResourceMilestone[28]?.['M/S_Resource_Total_H'] || 0) +
  (dataEstimateResourceMilestone[24]?.['M/S_Resource_Total_H'] || 0) + 
  (dataEstimateResourceMilestone[17]?.['M/S_Resource_Total_H'] || 0) +
  (dataEstimateResourceMilestone[6]?.['M/S_Resource_Total_H'] || 0);

  const msct = (dataEstimateResourceMilestone[28]?.['M/S/C_Resource_Total_H'] || 0) +
  (dataEstimateResourceMilestone[24]?.['M/S/C_Resource_Total_H'] || 0) + 
  (dataEstimateResourceMilestone[17]?.['M/S/C_Resource_Total_H'] || 0) +
  (dataEstimateResourceMilestone[6]?.['M/S/C_Resource_Total_H'] || 0);

  dataEstimateResourceMilestone[29]['M_Resource1_H'] =  mr1;
  dataEstimateResourceMilestone[29]['M_Resource2_H'] =  mr2
  dataEstimateResourceMilestone[29]['M/S_Resource1_H'] =  msr1
  dataEstimateResourceMilestone[29]['M/S_Resource2_H'] =  msr2
  dataEstimateResourceMilestone[29]['M/S/C_Resource1_H'] =  mscr1
  dataEstimateResourceMilestone[29]['M/S/C_Resource2_H'] =  mscr2
  dataEstimateResourceMilestone[29]['M_Resource_Total_H'] =  mt
  dataEstimateResourceMilestone[29]['M/S_Resource_Total_H'] =  mst
  dataEstimateResourceMilestone[29]['M/S/C_Resource_Total_H'] = msct

  dataEstimateResourceMilestone[30]['M_Resource1_H'] = ((mr1 * fColmnValueEstimateAveRate) || 0);
  dataEstimateResourceMilestone[30]['M_Resource2_H'] =  ((mr2 * fColmnValueEstimateAveRate) || 0);
  dataEstimateResourceMilestone[30]['M/S_Resource1_H'] =  ((msr1 * fColmnValueEstimateAveRate) || 0);
  dataEstimateResourceMilestone[30]['M/S_Resource2_H'] =  ((msr2 * fColmnValueEstimateAveRate) || 0);
  dataEstimateResourceMilestone[30]['M/S/C_Resource1_H'] =  ((mscr1 * fColmnValueEstimateAveRate) || 0);
  dataEstimateResourceMilestone[30]['M/S/C_Resource2_H'] =  ((mscr2 * fColmnValueEstimateAveRate) || 0);
  dataEstimateResourceMilestone[30]['M_Resource_Total_H'] =  ((mt * fColmnValueEstimateAveRate) || 0);
  dataEstimateResourceMilestone[30]['M/S_Resource_Total_H'] =  ((mst * fColmnValueEstimateAveRate) || 0);
  dataEstimateResourceMilestone[30]['M/S/C_Resource_Total_H'] = ((msct * fColmnValueEstimateAveRate) || 0);
  
  await Promise.all(dataEstimateResourceMilestone);
  return dataEstimateResourceMilestone;
}