export const generateEstimateResourceSub = async(dataEstimateResource: any, analisisAndDesignCalculation: any, responseSubtotal: any, condition: boolean, initialDataSet: any, settingParameters?: any, isSnapshotModeEnable?: boolean) => {
  /////////////////// ESTIMATE RESOURCE - START ///////////////////
// analysisDesingEstimateResource
dataEstimateResource[0]['M_Resource1_H'] = analisisAndDesignCalculation?.analysisDesingEstimateResource?.resultValue1Sub || 0;
dataEstimateResource[0]['M_Resource2_H'] = analisisAndDesignCalculation?.analysisDesingEstimateResource?.resultValue2Sub || 0;
dataEstimateResource[0]['M/S_Resource1_H'] = analisisAndDesignCalculation?.analysisDesingEstimateResource?.resultValueMS1Sub || 0;
dataEstimateResource[0]['M/S_Resource2_H'] = analisisAndDesignCalculation?.analysisDesingEstimateResource?.resultValueMS2Sub || 0;
dataEstimateResource[0]['M/S/C_Resource1_H'] = analisisAndDesignCalculation?.analysisDesingEstimateResource?.resultValueMSC1Sub || 0;
dataEstimateResource[0]['M/S/C_Resource2_H'] = analisisAndDesignCalculation?.analysisDesingEstimateResource?.resultValueMSC2Sub || 0;
dataEstimateResource[0]['M_Resource_Total_H'] = analisisAndDesignCalculation?.analysisDesingEstimateResource?.["M_Resource_Total_Sub"] || 0;
dataEstimateResource[0]['M/S_Resource_Total_H'] = analisisAndDesignCalculation?.analysisDesingEstimateResource?.['M/S_Resource_Total_Sub'] || 0;
dataEstimateResource[0]['M/S/C_Resource_Total_H'] = analisisAndDesignCalculation?.analysisDesingEstimateResource?.['M/S/C_Resource_Total_Sub'] || 0;


dataEstimateResource[1]['M_Resource1_H'] = analisisAndDesignCalculation?.customisationDesignEstimateResource?.resultValue1Sub || 0;
dataEstimateResource[1]['M_Resource2_H'] = analisisAndDesignCalculation?.customisationDesignEstimateResource?.resultValue2Sub || 0;
dataEstimateResource[1]['M/S_Resource1_H'] = analisisAndDesignCalculation?.customisationDesignEstimateResource?.resultValueMS1Sub || 0;
dataEstimateResource[1]['M/S_Resource2_H'] = analisisAndDesignCalculation?.customisationDesignEstimateResource?.resultValueMS2Sub || 0;
dataEstimateResource[1]['M/S/C_Resource1_H'] = analisisAndDesignCalculation?.customisationDesignEstimateResource?.resultValueMSC1Sub || 0;
dataEstimateResource[1]['M/S/C_Resource2_H'] = analisisAndDesignCalculation?.customisationDesignEstimateResource?.resultValueMSC2Sub || 0;
dataEstimateResource[1]['M_Resource_Total_H'] = analisisAndDesignCalculation?.customisationDesignEstimateResource?.["M_Resource_Total_Sub"] || 0;
dataEstimateResource[1]['M/S_Resource_Total_H'] = analisisAndDesignCalculation?.customisationDesignEstimateResource?.['M/S_Resource_Total_Sub'] || 0;
dataEstimateResource[1]['M/S/C_Resource_Total_H'] = analisisAndDesignCalculation?.customisationDesignEstimateResource?.['M/S/C_Resource_Total_Sub'] || 0;

dataEstimateResource[2]['M_Resource1_H'] = analisisAndDesignCalculation?.customRequirementDesignEstimateResource?.resultValue1Sub || 0;
dataEstimateResource[2]['M_Resource2_H'] = analisisAndDesignCalculation?.customRequirementDesignEstimateResource?.resultValue2Sub || 0;
dataEstimateResource[2]['M/S_Resource1_H'] = analisisAndDesignCalculation?.customRequirementDesignEstimateResource?.resultValueMS1Sub || 0;
dataEstimateResource[2]['M/S_Resource2_H'] = analisisAndDesignCalculation?.customRequirementDesignEstimateResource?.resultValueMS2Sub || 0;
dataEstimateResource[2]['M/S/C_Resource1_H'] = analisisAndDesignCalculation?.customRequirementDesignEstimateResource?.resultValueMSC1Sub || 0;
dataEstimateResource[2]['M/S/C_Resource2_H'] = analisisAndDesignCalculation?.customRequirementDesignEstimateResource?.resultValueMSC2Sub || 0;
dataEstimateResource[2]['M_Resource_Total_H'] = analisisAndDesignCalculation?.customRequirementDesignEstimateResource?.["M_Resource_Total_Sub"] || 0;
dataEstimateResource[2]['M/S_Resource_Total_H'] = analisisAndDesignCalculation?.customRequirementDesignEstimateResource?.['M/S_Resource_Total_Sub'] || 0;
dataEstimateResource[2]['M/S/C_Resource_Total_H'] = analisisAndDesignCalculation?.customRequirementDesignEstimateResource?.['M/S/C_Resource_Total_Sub'] || 0;

dataEstimateResource[3]['M_Resource1_H'] = analisisAndDesignCalculation?.documentationEstimateResource?.resultValue1Sub || 0;
dataEstimateResource[3]['M_Resource2_H'] = analisisAndDesignCalculation?.documentationEstimateResource?.resultValue2Sub || 0;
dataEstimateResource[3]['M/S_Resource1_H'] = analisisAndDesignCalculation?.documentationEstimateResource?.resultValueMS1Sub || 0;
dataEstimateResource[3]['M/S_Resource2_H'] = analisisAndDesignCalculation?.documentationEstimateResource?.resultValueMS2Sub || 0;
dataEstimateResource[3]['M/S/C_Resource1_H'] = analisisAndDesignCalculation?.documentationEstimateResource?.resultValueMSC1Sub || 0;
dataEstimateResource[3]['M/S/C_Resource2_H'] = analisisAndDesignCalculation?.documentationEstimateResource?.resultValueMSC2Sub || 0;
dataEstimateResource[3]['M_Resource_Total_H'] = analisisAndDesignCalculation?.documentationEstimateResource?.["M_Resource_Total_Sub"] || 0;
dataEstimateResource[3]['M/S_Resource_Total_H'] = analisisAndDesignCalculation?.documentationEstimateResource?.['M/S_Resource_Total_Sub'] || 0;
dataEstimateResource[3]['M/S/C_Resource_Total_H'] = analisisAndDesignCalculation?.documentationEstimateResource?.['M/S/C_Resource_Total_Sub'] || 0;

dataEstimateResource[4]['M_Resource1_H'] = analisisAndDesignCalculation?.designReviewEstimateResource?.resultValue1Sub || 0;
dataEstimateResource[4]['M_Resource2_H'] = analisisAndDesignCalculation?.designReviewEstimateResource?.resultValue2Sub || 0;
dataEstimateResource[4]['M/S_Resource1_H'] = analisisAndDesignCalculation?.designReviewEstimateResource?.resultValueMS1Sub || 0;
dataEstimateResource[4]['M/S_Resource2_H'] = analisisAndDesignCalculation?.designReviewEstimateResource?.resultValueMS2Sub || 0;
dataEstimateResource[4]['M/S/C_Resource1_H'] = analisisAndDesignCalculation?.designReviewEstimateResource?.resultValueMSC1Sub || 0;
dataEstimateResource[4]['M/S/C_Resource2_H'] = analisisAndDesignCalculation?.designReviewEstimateResource?.resultValueMSC2Sub || 0;
dataEstimateResource[4]['M_Resource_Total_H'] = analisisAndDesignCalculation?.designReviewEstimateResource?.["M_Resource_Total_Sub"] || 0;
dataEstimateResource[4]['M/S_Resource_Total_H'] = analisisAndDesignCalculation?.designReviewEstimateResource?.['M/S_Resource_Total_Sub'] || 0;
dataEstimateResource[4]['M/S/C_Resource_Total_H'] = analisisAndDesignCalculation?.designReviewEstimateResource?.['M/S/C_Resource_Total_Sub'] || 0;

dataEstimateResource[5]['M_Resource1_H'] = analisisAndDesignCalculation?.configurationEstimateResource?.resultValue1Sub || 0;
dataEstimateResource[5]['M_Resource2_H'] = analisisAndDesignCalculation?.configurationEstimateResource?.resultValue2Sub || 0;
dataEstimateResource[5]['M/S_Resource1_H'] = analisisAndDesignCalculation?.configurationEstimateResource?.resultValueMS1Sub || 0;
dataEstimateResource[5]['M/S_Resource2_H'] = analisisAndDesignCalculation?.configurationEstimateResource?.resultValueMS2Sub || 0;
dataEstimateResource[5]['M/S/C_Resource1_H'] = analisisAndDesignCalculation?.configurationEstimateResource?.resultValueMSC1Sub || 0;
dataEstimateResource[5]['M/S/C_Resource2_H'] = analisisAndDesignCalculation?.configurationEstimateResource?.resultValueMSC2Sub || 0;
dataEstimateResource[5]['M_Resource_Total_H'] = analisisAndDesignCalculation?.configurationEstimateResource?.["M_Resource_Total_Sub"] || 0;
dataEstimateResource[5]['M/S_Resource_Total_H'] = analisisAndDesignCalculation?.configurationEstimateResource?.['M/S_Resource_Total_Sub'] || 0;
dataEstimateResource[5]['M/S/C_Resource_Total_H'] = analisisAndDesignCalculation?.configurationEstimateResource?.['M/S/C_Resource_Total_Sub'] || 0;

dataEstimateResource[6]['M_Resource1_H'] = analisisAndDesignCalculation?.integrationEstimateResource?.resultValue1Sub || 0;
dataEstimateResource[6]['M_Resource2_H'] = analisisAndDesignCalculation?.integrationEstimateResource?.resultValue2Sub || 0;
dataEstimateResource[6]['M/S_Resource1_H'] = analisisAndDesignCalculation?.integrationEstimateResource?.resultValueMS1Sub || 0;
dataEstimateResource[6]['M/S_Resource2_H'] = analisisAndDesignCalculation?.integrationEstimateResource?.resultValueMS2Sub || 0;
dataEstimateResource[6]['M/S/C_Resource1_H'] = analisisAndDesignCalculation?.integrationEstimateResource?.resultValueMSC1Sub || 0;
dataEstimateResource[6]['M/S/C_Resource2_H'] = analisisAndDesignCalculation?.integrationEstimateResource?.resultValueMSC2Sub || 0;
dataEstimateResource[6]['M_Resource_Total_H'] = analisisAndDesignCalculation?.integrationEstimateResource?.["M_Resource_Total_Sub"] || 0;
dataEstimateResource[6]['M/S_Resource_Total_H'] = analisisAndDesignCalculation?.integrationEstimateResource?.['M/S_Resource_Total_Sub'] || 0;
dataEstimateResource[6]['M/S/C_Resource_Total_H'] = analisisAndDesignCalculation?.integrationEstimateResource?.['M/S/C_Resource_Total_Sub'] || 0;

dataEstimateResource[7]['M_Resource1_H'] = analisisAndDesignCalculation?.customisationBuildEstimateResource?.resultValue1Sub || 0;
dataEstimateResource[7]['M_Resource2_H'] = analisisAndDesignCalculation?.customisationBuildEstimateResource?.resultValue2Sub || 0;
dataEstimateResource[7]['M/S_Resource1_H'] = analisisAndDesignCalculation?.customisationBuildEstimateResource?.resultValueMS1Sub || 0;
dataEstimateResource[7]['M/S_Resource2_H'] = analisisAndDesignCalculation?.customisationBuildEstimateResource?.resultValueMS2Sub || 0;
dataEstimateResource[7]['M/S/C_Resource1_H'] = analisisAndDesignCalculation?.customisationBuildEstimateResource?.resultValueMSC1Sub || 0;
dataEstimateResource[7]['M/S/C_Resource2_H'] = analisisAndDesignCalculation?.customisationBuildEstimateResource?.resultValueMSC2Sub || 0;
dataEstimateResource[7]['M_Resource_Total_H'] = analisisAndDesignCalculation?.customisationBuildEstimateResource?.["M_Resource_Total_Sub"] || 0;
dataEstimateResource[7]['M/S_Resource_Total_H'] = analisisAndDesignCalculation?.customisationBuildEstimateResource?.['M/S_Resource_Total_Sub'] || 0;
dataEstimateResource[7]['M/S/C_Resource_Total_H'] = analisisAndDesignCalculation?.customisationBuildEstimateResource?.['M/S/C_Resource_Total_Sub'] || 0;

dataEstimateResource[8]['M_Resource1_H'] = analisisAndDesignCalculation?.customRequirementBuildEstimateResource?.resultValue1Sub || 0;
dataEstimateResource[8]['M_Resource2_H'] = analisisAndDesignCalculation?.customRequirementBuildEstimateResource?.resultValue2Sub || 0;
dataEstimateResource[8]['M/S_Resource1_H'] = analisisAndDesignCalculation?.customRequirementBuildEstimateResource?.resultValueMS1Sub || 0;
dataEstimateResource[8]['M/S_Resource2_H'] = analisisAndDesignCalculation?.customRequirementBuildEstimateResource?.resultValueMS2Sub || 0;
dataEstimateResource[8]['M/S/C_Resource1_H'] = analisisAndDesignCalculation?.customRequirementBuildEstimateResource?.resultValueMSC1Sub || 0;
dataEstimateResource[8]['M/S/C_Resource2_H'] = analisisAndDesignCalculation?.customRequirementBuildEstimateResource?.resultValueMSC2Sub || 0;
dataEstimateResource[8]['M_Resource_Total_H'] = analisisAndDesignCalculation?.customRequirementBuildEstimateResource?.["M_Resource_Total_Sub"] || 0;
dataEstimateResource[8]['M/S_Resource_Total_H'] = analisisAndDesignCalculation?.customRequirementBuildEstimateResource?.['M/S_Resource_Total_Sub'] || 0;
dataEstimateResource[8]['M/S/C_Resource_Total_H'] = analisisAndDesignCalculation?.customRequirementBuildEstimateResource?.['M/S/C_Resource_Total_Sub'] || 0;

dataEstimateResource[9]['M_Resource1_H'] = analisisAndDesignCalculation?.documentLayoutEstimateResource?.resultValue1Sub || 0;
dataEstimateResource[9]['M_Resource2_H'] = analisisAndDesignCalculation?.documentLayoutEstimateResource?.resultValue2Sub || 0;
dataEstimateResource[9]['M/S_Resource1_H'] = analisisAndDesignCalculation?.documentLayoutEstimateResource?.resultValueMS1Sub || 0;
dataEstimateResource[9]['M/S_Resource2_H'] = analisisAndDesignCalculation?.documentLayoutEstimateResource?.resultValueMS2Sub || 0;
dataEstimateResource[9]['M/S/C_Resource1_H'] = analisisAndDesignCalculation?.documentLayoutEstimateResource?.resultValueMSC1Sub || 0;
dataEstimateResource[9]['M/S/C_Resource2_H'] = analisisAndDesignCalculation?.documentLayoutEstimateResource?.resultValueMSC2Sub || 0;
dataEstimateResource[9]['M_Resource_Total_H'] = analisisAndDesignCalculation?.documentLayoutEstimateResource?.["M_Resource_Total_Sub"] || 0;
dataEstimateResource[9]['M/S_Resource_Total_H'] = analisisAndDesignCalculation?.documentLayoutEstimateResource?.['M/S_Resource_Total_Sub'] || 0;
dataEstimateResource[9]['M/S/C_Resource_Total_H'] = analisisAndDesignCalculation?.documentLayoutEstimateResource?.['M/S/C_Resource_Total_Sub'] || 0;

dataEstimateResource[10]['M_Resource1_H'] = analisisAndDesignCalculation?.reportingEstimateResource?.resultValue1Sub || 0;
dataEstimateResource[10]['M_Resource2_H'] = analisisAndDesignCalculation?.reportingEstimateResource?.resultValue2Sub || 0;
dataEstimateResource[10]['M/S_Resource1_H'] = analisisAndDesignCalculation?.reportingEstimateResource?.resultValueMS1Sub || 0;
dataEstimateResource[10]['M/S_Resource2_H'] = analisisAndDesignCalculation?.reportingEstimateResource?.resultValueMS2Sub || 0;
dataEstimateResource[10]['M/S/C_Resource1_H'] = analisisAndDesignCalculation?.reportingEstimateResource?.resultValueMSC1Sub || 0;
dataEstimateResource[10]['M/S/C_Resource2_H'] = analisisAndDesignCalculation?.reportingEstimateResource?.resultValueMSC2Sub || 0;
dataEstimateResource[10]['M_Resource_Total_H'] = analisisAndDesignCalculation?.reportingEstimateResource?.["M_Resource_Total_Sub"] || 0;
dataEstimateResource[10]['M/S_Resource_Total_H'] = analisisAndDesignCalculation?.reportingEstimateResource?.['M/S_Resource_Total_Sub'] || 0;
dataEstimateResource[10]['M/S/C_Resource_Total_H'] = analisisAndDesignCalculation?.reportingEstimateResource?.['M/S/C_Resource_Total_Sub'] || 0;

dataEstimateResource[11]['M_Resource1_H'] = analisisAndDesignCalculation?.dataMigrationEstimateResource?.resultValue1Sub || 0;
dataEstimateResource[11]['M_Resource2_H'] = analisisAndDesignCalculation?.dataMigrationEstimateResource?.resultValue2Sub || 0;
dataEstimateResource[11]['M/S_Resource1_H'] = analisisAndDesignCalculation?.dataMigrationEstimateResource?.resultValueMS1Sub || 0;
dataEstimateResource[11]['M/S_Resource2_H'] = analisisAndDesignCalculation?.dataMigrationEstimateResource?.resultValueMS2Sub || 0;
dataEstimateResource[11]['M/S/C_Resource1_H'] = analisisAndDesignCalculation?.dataMigrationEstimateResource?.resultValueMSC1Sub || 0;
dataEstimateResource[11]['M/S/C_Resource2_H'] = analisisAndDesignCalculation?.dataMigrationEstimateResource?.resultValueMSC2Sub || 0;
dataEstimateResource[11]['M_Resource_Total_H'] = analisisAndDesignCalculation?.dataMigrationEstimateResource?.["M_Resource_Total_Sub"] || 0;
dataEstimateResource[11]['M/S_Resource_Total_H'] = analisisAndDesignCalculation?.dataMigrationEstimateResource?.['M/S_Resource_Total_Sub'] || 0;
dataEstimateResource[11]['M/S/C_Resource_Total_H'] = analisisAndDesignCalculation?.dataMigrationEstimateResource?.['M/S/C_Resource_Total_Sub'] || 0;

dataEstimateResource[12]['M_Resource1_H'] = analisisAndDesignCalculation?.crpEstimateResource?.resultValue1Sub || 0;
dataEstimateResource[12]['M_Resource2_H'] = analisisAndDesignCalculation?.crpEstimateResource?.resultValue2Sub || 0;
dataEstimateResource[12]['M/S_Resource1_H'] = analisisAndDesignCalculation?.crpEstimateResource?.resultValueMS1Sub || 0;
dataEstimateResource[12]['M/S_Resource2_H'] = analisisAndDesignCalculation?.crpEstimateResource?.resultValueMS2Sub || 0;
dataEstimateResource[12]['M/S/C_Resource1_H'] = analisisAndDesignCalculation?.crpEstimateResource?.resultValueMSC1Sub || 0;
dataEstimateResource[12]['M/S/C_Resource2_H'] = analisisAndDesignCalculation?.crpEstimateResource?.resultValueMSC2Sub || 0;
dataEstimateResource[12]['M_Resource_Total_H'] = analisisAndDesignCalculation?.crpEstimateResource?.["M_Resource_Total_Sub"] || 0;
dataEstimateResource[12]['M/S_Resource_Total_H'] = analisisAndDesignCalculation?.crpEstimateResource?.['M/S_Resource_Total_Sub'] || 0;
dataEstimateResource[12]['M/S/C_Resource_Total_H'] = analisisAndDesignCalculation?.crpEstimateResource?.['M/S/C_Resource_Total_Sub'] || 0;

dataEstimateResource[13]['M_Resource1_H'] = analisisAndDesignCalculation?.testingEstimateResource?.resultValue1Sub || 0;
dataEstimateResource[13]['M_Resource2_H'] = analisisAndDesignCalculation?.testingEstimateResource?.resultValue2Sub || 0;
dataEstimateResource[13]['M/S_Resource1_H'] = analisisAndDesignCalculation?.testingEstimateResource?.resultValueMS1Sub || 0;
dataEstimateResource[13]['M/S_Resource2_H'] = analisisAndDesignCalculation?.testingEstimateResource?.resultValueMS2Sub || 0;
dataEstimateResource[13]['M/S/C_Resource1_H'] = analisisAndDesignCalculation?.testingEstimateResource?.resultValueMSC1Sub || 0;
dataEstimateResource[13]['M/S/C_Resource2_H'] = analisisAndDesignCalculation?.testingEstimateResource?.resultValueMSC2Sub || 0;
dataEstimateResource[13]['M_Resource_Total_H'] = analisisAndDesignCalculation?.testingEstimateResource?.["M_Resource_Total_Sub"] || 0;
dataEstimateResource[13]['M/S_Resource_Total_H'] = analisisAndDesignCalculation?.testingEstimateResource?.['M/S_Resource_Total_Sub'] || 0;
dataEstimateResource[13]['M/S/C_Resource_Total_H'] = analisisAndDesignCalculation?.testingEstimateResource?.['M/S/C_Resource_Total_Sub'] || 0;

dataEstimateResource[14]['M_Resource1_H'] = analisisAndDesignCalculation?.trainTheTrainerEstimateResource?.resultValue1Sub || 0;
dataEstimateResource[14]['M_Resource2_H'] = analisisAndDesignCalculation?.trainTheTrainerEstimateResource?.resultValue2Sub || 0;
dataEstimateResource[14]['M/S_Resource1_H'] = analisisAndDesignCalculation?.trainTheTrainerEstimateResource?.resultValueMS1Sub || 0;
dataEstimateResource[14]['M/S_Resource2_H'] = analisisAndDesignCalculation?.trainTheTrainerEstimateResource?.resultValueMS2Sub || 0;
dataEstimateResource[14]['M/S/C_Resource1_H'] = analisisAndDesignCalculation?.trainTheTrainerEstimateResource?.resultValueMSC1Sub || 0;
dataEstimateResource[14]['M/S/C_Resource2_H'] = analisisAndDesignCalculation?.trainTheTrainerEstimateResource?.resultValueMSC2Sub || 0;
dataEstimateResource[14]['M_Resource_Total_H'] = analisisAndDesignCalculation?.trainTheTrainerEstimateResource?.["M_Resource_Total_Sub"] || 0;
dataEstimateResource[14]['M/S_Resource_Total_H'] = analisisAndDesignCalculation?.trainTheTrainerEstimateResource?.['M/S_Resource_Total_Sub'] || 0;
dataEstimateResource[14]['M/S/C_Resource_Total_H'] = analisisAndDesignCalculation?.trainTheTrainerEstimateResource?.['M/S/C_Resource_Total_Sub'] || 0;

dataEstimateResource[15]['M_Resource1_H'] = analisisAndDesignCalculation?.uatEnvironmentPreparationEstimateResource?.resultValue1Sub || 0;
dataEstimateResource[15]['M_Resource2_H'] = analisisAndDesignCalculation?.uatEnvironmentPreparationEstimateResource?.resultValue2Sub || 0;
dataEstimateResource[15]['M/S_Resource1_H'] = analisisAndDesignCalculation?.uatEnvironmentPreparationEstimateResource?.resultValueMS1Sub || 0;
dataEstimateResource[15]['M/S_Resource2_H'] = analisisAndDesignCalculation?.uatEnvironmentPreparationEstimateResource?.resultValueMS2Sub || 0;
dataEstimateResource[15]['M/S/C_Resource1_H'] = analisisAndDesignCalculation?.uatEnvironmentPreparationEstimateResource?.resultValueMSC1Sub || 0;
dataEstimateResource[15]['M/S/C_Resource2_H'] = analisisAndDesignCalculation?.uatEnvironmentPreparationEstimateResource?.resultValueMSC2Sub || 0;
dataEstimateResource[15]['M_Resource_Total_H'] = analisisAndDesignCalculation?.uatEnvironmentPreparationEstimateResource?.["M_Resource_Total_Sub"] || 0;
dataEstimateResource[15]['M/S_Resource_Total_H'] = analisisAndDesignCalculation?.uatEnvironmentPreparationEstimateResource?.['M/S_Resource_Total_Sub'] || 0;
dataEstimateResource[15]['M/S/C_Resource_Total_H'] = analisisAndDesignCalculation?.uatEnvironmentPreparationEstimateResource?.['M/S/C_Resource_Total_Sub'] || 0;

dataEstimateResource[16]['M_Resource1_H'] = analisisAndDesignCalculation?.uatSupportEstimateResource?.resultValue1Sub || 0;
dataEstimateResource[16]['M_Resource2_H'] = analisisAndDesignCalculation?.uatSupportEstimateResource?.resultValue2Sub || 0;
dataEstimateResource[16]['M/S_Resource1_H'] = analisisAndDesignCalculation?.uatSupportEstimateResource?.resultValueMS1Sub || 0;
dataEstimateResource[16]['M/S_Resource2_H'] = analisisAndDesignCalculation?.uatSupportEstimateResource?.resultValueMS2Sub || 0;
dataEstimateResource[16]['M/S/C_Resource1_H'] = analisisAndDesignCalculation?.uatSupportEstimateResource?.resultValueMSC1Sub || 0;
dataEstimateResource[16]['M/S/C_Resource2_H'] = analisisAndDesignCalculation?.uatSupportEstimateResource?.resultValueMSC2Sub || 0;
dataEstimateResource[16]['M_Resource_Total_H'] = analisisAndDesignCalculation?.uatSupportEstimateResource?.["M_Resource_Total_Sub"] || 0;
dataEstimateResource[16]['M/S_Resource_Total_H'] = analisisAndDesignCalculation?.uatSupportEstimateResource?.['M/S_Resource_Total_Sub'] || 0;
dataEstimateResource[16]['M/S/C_Resource_Total_H'] = analisisAndDesignCalculation?.uatSupportEstimateResource?.['M/S/C_Resource_Total_Sub'] || 0;

dataEstimateResource[17]['M_Resource1_H'] = analisisAndDesignCalculation?.prodEnvironmentPreparationEstimateResource?.resultValue1Sub || 0;
dataEstimateResource[17]['M_Resource2_H'] = analisisAndDesignCalculation?.prodEnvironmentPreparationEstimateResource?.resultValue2Sub || 0;
dataEstimateResource[17]['M/S_Resource1_H'] = analisisAndDesignCalculation?.prodEnvironmentPreparationEstimateResource?.resultValueMS1Sub || 0;
dataEstimateResource[17]['M/S_Resource2_H'] = analisisAndDesignCalculation?.prodEnvironmentPreparationEstimateResource?.resultValueMS2Sub || 0;
dataEstimateResource[17]['M/S/C_Resource1_H'] = analisisAndDesignCalculation?.prodEnvironmentPreparationEstimateResource?.resultValueMSC1Sub || 0;
dataEstimateResource[17]['M/S/C_Resource2_H'] = analisisAndDesignCalculation?.prodEnvironmentPreparationEstimateResource?.resultValueMSC2Sub || 0;
dataEstimateResource[17]['M_Resource_Total_H'] = analisisAndDesignCalculation?.prodEnvironmentPreparationEstimateResource?.["M_Resource_Total_Sub"] || 0;
dataEstimateResource[17]['M/S_Resource_Total_H'] = analisisAndDesignCalculation?.prodEnvironmentPreparationEstimateResource?.['M/S_Resource_Total_Sub'] || 0;
dataEstimateResource[17]['M/S/C_Resource_Total_H'] = analisisAndDesignCalculation?.prodEnvironmentPreparationEstimateResource?.['M/S/C_Resource_Total_Sub'] || 0;

dataEstimateResource[18]['M_Resource1_H'] = analisisAndDesignCalculation?.supportHandoverEstimateResource?.resultValue1Sub || 0;
dataEstimateResource[18]['M_Resource2_H'] = analisisAndDesignCalculation?.supportHandoverEstimateResource?.resultValue2Sub || 0;
dataEstimateResource[18]['M/S_Resource1_H'] = analisisAndDesignCalculation?.supportHandoverEstimateResource?.resultValueMS1Sub || 0;
dataEstimateResource[18]['M/S_Resource2_H'] = analisisAndDesignCalculation?.supportHandoverEstimateResource?.resultValueMS2Sub || 0;
dataEstimateResource[18]['M/S/C_Resource1_H'] = analisisAndDesignCalculation?.supportHandoverEstimateResource?.resultValueMSC1Sub || 0;
dataEstimateResource[18]['M/S/C_Resource2_H'] = analisisAndDesignCalculation?.supportHandoverEstimateResource?.resultValueMSC2Sub || 0;
dataEstimateResource[18]['M_Resource_Total_H'] = analisisAndDesignCalculation?.supportHandoverEstimateResource?.["M_Resource_Total_Sub"] || 0;
dataEstimateResource[18]['M/S_Resource_Total_H'] = analisisAndDesignCalculation?.supportHandoverEstimateResource?.['M/S_Resource_Total_Sub'] || 0;
dataEstimateResource[18]['M/S/C_Resource_Total_H'] = analisisAndDesignCalculation?.supportHandoverEstimateResource?.['M/S/C_Resource_Total_Sub'] || 0;

dataEstimateResource[19]['M_Resource1_H'] = analisisAndDesignCalculation?.endUserTrainingEstimateResource?.resultValue1Sub || 0;
dataEstimateResource[19]['M_Resource2_H'] = analisisAndDesignCalculation?.endUserTrainingEstimateResource?.resultValue2Sub || 0;
dataEstimateResource[19]['M/S_Resource1_H'] = analisisAndDesignCalculation?.endUserTrainingEstimateResource?.resultValueMS1Sub || 0;
dataEstimateResource[19]['M/S_Resource2_H'] = analisisAndDesignCalculation?.endUserTrainingEstimateResource?.resultValueMS2Sub || 0;
dataEstimateResource[19]['M/S/C_Resource1_H'] = analisisAndDesignCalculation?.endUserTrainingEstimateResource?.resultValueMSC1Sub || 0;
dataEstimateResource[19]['M/S/C_Resource2_H'] = analisisAndDesignCalculation?.endUserTrainingEstimateResource?.resultValueMSC2Sub || 0;
dataEstimateResource[19]['M_Resource_Total_H'] = analisisAndDesignCalculation?.endUserTrainingEstimateResource?.["M_Resource_Total_Sub"] || 0;
dataEstimateResource[19]['M/S_Resource_Total_H'] = analisisAndDesignCalculation?.endUserTrainingEstimateResource?.['M/S_Resource_Total_Sub'] || 0;
dataEstimateResource[19]['M/S/C_Resource_Total_H'] = analisisAndDesignCalculation?.endUserTrainingEstimateResource?.['M/S/C_Resource_Total_Sub'] || 0;

dataEstimateResource[20]['M_Resource1_H'] = analisisAndDesignCalculation?.postGoLiveEstimateResource?.resultValue1Sub || 0;
dataEstimateResource[20]['M_Resource2_H'] = analisisAndDesignCalculation?.postGoLiveEstimateResource?.resultValue2Sub || 0;
dataEstimateResource[20]['M/S_Resource1_H'] = analisisAndDesignCalculation?.postGoLiveEstimateResource?.resultValueMS1Sub || 0;
dataEstimateResource[20]['M/S_Resource2_H'] = analisisAndDesignCalculation?.postGoLiveEstimateResource?.resultValueMS2Sub || 0;
dataEstimateResource[20]['M/S/C_Resource1_H'] = analisisAndDesignCalculation?.postGoLiveEstimateResource?.resultValueMSC1Sub || 0;
dataEstimateResource[20]['M/S/C_Resource2_H'] = analisisAndDesignCalculation?.postGoLiveEstimateResource?.resultValueMSC2Sub || 0;
dataEstimateResource[20]['M_Resource_Total_H'] = analisisAndDesignCalculation?.postGoLiveEstimateResource?.["M_Resource_Total_Sub"] || 0;
dataEstimateResource[20]['M/S_Resource_Total_H'] = analisisAndDesignCalculation?.postGoLiveEstimateResource?.['M/S_Resource_Total_Sub'] || 0;
dataEstimateResource[20]['M/S/C_Resource_Total_H'] = analisisAndDesignCalculation?.postGoLiveEstimateResource?.['M/S/C_Resource_Total_Sub'] || 0;

dataEstimateResource[21]['M_Resource1_H'] =  dataEstimateResource
.slice(0, 20 + 1) // Extract the objects in the range
.reduce((acc: any, obj: any) => acc + obj['M_Resource1_H'], 0) || 0;
dataEstimateResource[21]['M_Resource2_H'] = dataEstimateResource
.slice(0, 20 + 1) // Extract the objects in the range
.reduce((acc: any, obj: any) => acc + obj['M_Resource2_H'], 0) || 0;
dataEstimateResource[21]['M/S_Resource1_H'] = dataEstimateResource
.slice(0, 20 + 1) // Extract the objects in the range
.reduce((acc: any, obj: any) => acc + obj['M/S_Resource1_H'], 0) || 0;
dataEstimateResource[21]['M/S_Resource2_H'] = dataEstimateResource
.slice(0, 20 + 1) // Extract the objects in the range
.reduce((acc: any, obj: any) => acc + obj['M/S_Resource2_H'], 0) || 0;
dataEstimateResource[21]['M/S/C_Resource1_H'] = dataEstimateResource
.slice(0, 20 + 1) // Extract the objects in the range
.reduce((acc: any, obj: any) => acc + obj['M/S/C_Resource1_H'], 0) || 0;
dataEstimateResource[21]['M/S/C_Resource2_H'] = dataEstimateResource
.slice(0, 20 + 1) // Extract the objects in the range
.reduce((acc: any, obj: any) => acc + obj['M/S/C_Resource2_H'], 0) || 0;
dataEstimateResource[21]['M_Resource_Total_H'] = dataEstimateResource
.slice(0, 20 + 1) // Extract the objects in the range
.reduce((acc: any, obj: any) => acc + obj['M_Resource_Total_H'], 0) || 0;
dataEstimateResource[21]['M/S_Resource_Total_H'] = dataEstimateResource
.slice(0, 20 + 1) // Extract the objects in the range
.reduce((acc: any, obj: any) => acc + obj['M/S_Resource_Total_H'], 0) || 0;
dataEstimateResource[21]['M/S/C_Resource_Total_H'] = dataEstimateResource
.slice(0, 20 + 1) // Extract the objects in the range
.reduce((acc: any, obj: any) => acc + obj['M/S/C_Resource_Total_H'], 0) || 0;

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

dataEstimateResource[22]['M_Resource1_H'] = responseSubtotal?.projectMangerSubValues?.resultValue1Sub || 0;
dataEstimateResource[22]['M_Resource2_H'] = responseSubtotal?.projectMangerSubValues?.resultValue2Sub || 0;
dataEstimateResource[22]['M/S_Resource1_H'] = responseSubtotal?.projectMangerSubValues?.resultValueMS1Sub || 0;
dataEstimateResource[22]['M/S_Resource2_H'] = responseSubtotal?.projectMangerSubValues?.resultValueMS2Sub || 0;
dataEstimateResource[22]['M/S/C_Resource1_H'] = responseSubtotal?.projectMangerSubValues?.resultValueMSC1Sub || 0;
dataEstimateResource[22]['M/S/C_Resource2_H'] = responseSubtotal?.projectMangerSubValues?.resultValueMSC2Sub || 0;
dataEstimateResource[22]['M_Resource_Total_H'] = responseSubtotal?.projectMangerSubValues?.["M_Resource_Total_Sub"] || 0;
dataEstimateResource[22]['M/S_Resource_Total_H'] = responseSubtotal?.projectMangerSubValues?.['M/S_Resource_Total_Sub'] || 0;
dataEstimateResource[22]['M/S/C_Resource_Total_H'] = responseSubtotal?.projectMangerSubValues?.['M/S/C_Resource_Total_Sub'] || 0;

(dataEstimateResource[23] as any)['M_Resource1_H'] = (dataEstimateResource[21]['M_Resource1_H'] + dataEstimateResource[22]['M_Resource1_H']) * (analisisAndDesignCalculation?.fColmnValueEstimateAveRate?.resultValue || 0);
(dataEstimateResource[23] as any)['M_Resource2_H'] = (dataEstimateResource[21]['M_Resource2_H'] + dataEstimateResource[22]['M_Resource2_H']) * (analisisAndDesignCalculation?.fColmnValueEstimateAveRate?.resultValue || 0);
(dataEstimateResource[23] as any)['M/S_Resource1_H'] = (dataEstimateResource[21]['M/S_Resource1_H'] + dataEstimateResource[22]['M/S_Resource1_H']) * (analisisAndDesignCalculation?.fColmnValueEstimateAveRate?.resultValue || 0);
(dataEstimateResource[23] as any)['M/S_Resource2_H'] = (dataEstimateResource[21]['M/S_Resource2_H'] + dataEstimateResource[22]['M/S_Resource2_H']) * (analisisAndDesignCalculation?.fColmnValueEstimateAveRate?.resultValue || 0);
(dataEstimateResource[23] as any)['M/S/C_Resource1_H'] = (dataEstimateResource[21]['M/S/C_Resource1_H'] + dataEstimateResource[22]['M/S/C_Resource1_H']) * (analisisAndDesignCalculation?.fColmnValueEstimateAveRate?.resultValue || 0);
(dataEstimateResource[23] as any)['M/S/C_Resource2_H'] = (dataEstimateResource[21]['M/S/C_Resource2_H'] + dataEstimateResource[22]['M/S/C_Resource2_H']) * (analisisAndDesignCalculation?.fColmnValueEstimateAveRate?.resultValue || 0);
(dataEstimateResource[23] as any)['M_Resource_Total_H'] = (dataEstimateResource[21]['M_Resource_Total_H'] + dataEstimateResource[22]['M_Resource_Total_H']) * (analisisAndDesignCalculation?.fColmnValueEstimateAveRate?.resultValue || 0);
(dataEstimateResource[23] as any)['M/S_Resource_Total_H'] = (dataEstimateResource[21]['M/S_Resource_Total_H'] + dataEstimateResource[22]['M/S_Resource_Total_H']) * (analisisAndDesignCalculation?.fColmnValueEstimateAveRate?.resultValue || 0);
(dataEstimateResource[23] as any)['M/S/C_Resource_Total_H'] = (dataEstimateResource[21]['M/S/C_Resource_Total_H'] + dataEstimateResource[22]['M/S/C_Resource_Total_H']) * (analisisAndDesignCalculation?.fColmnValueEstimateAveRate?.resultValue || 0);
await Promise.all(dataEstimateResource);
return dataEstimateResource;
}