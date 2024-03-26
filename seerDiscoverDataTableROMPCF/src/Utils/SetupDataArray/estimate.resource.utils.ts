export const generateEstimateResource = async(dataEstimateResource: any, analisisAndDesignCalculation: any, responseSubtotal: any, condition: boolean, initialDataSet: any, settingParameters?: any, isSnapshotModeEnable?: boolean) => {
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

(dataEstimateResource[23] as any)['M_Resource1'] = (dataEstimateResource[21]['M_Resource1'] + dataEstimateResource[22]['M_Resource1']) * (analisisAndDesignCalculation?.fColmnValueEstimateAveRate?.resultValue || 0);
(dataEstimateResource[23] as any)['M_Resource2'] = (dataEstimateResource[21]['M_Resource2'] + dataEstimateResource[22]['M_Resource2']) * (analisisAndDesignCalculation?.fColmnValueEstimateAveRate?.resultValue || 0);
(dataEstimateResource[23] as any)['M/S_Resource1'] = (dataEstimateResource[21]['M/S_Resource1'] + dataEstimateResource[22]['M/S_Resource1']) * (analisisAndDesignCalculation?.fColmnValueEstimateAveRate?.resultValue || 0);
(dataEstimateResource[23] as any)['M/S_Resource2'] = (dataEstimateResource[21]['M/S_Resource2'] + dataEstimateResource[22]['M/S_Resource2']) * (analisisAndDesignCalculation?.fColmnValueEstimateAveRate?.resultValue || 0);
(dataEstimateResource[23] as any)['M/S/C_Resource1'] = (dataEstimateResource[21]['M/S/C_Resource1'] + dataEstimateResource[22]['M/S/C_Resource1']) * (analisisAndDesignCalculation?.fColmnValueEstimateAveRate?.resultValue || 0);
(dataEstimateResource[23] as any)['M/S/C_Resource2'] = (dataEstimateResource[21]['M/S/C_Resource2'] + dataEstimateResource[22]['M/S/C_Resource2']) * (analisisAndDesignCalculation?.fColmnValueEstimateAveRate?.resultValue || 0);
(dataEstimateResource[23] as any)['M_Resource_Total'] = (dataEstimateResource[21]['M_Resource_Total'] + dataEstimateResource[22]['M_Resource_Total']) * (analisisAndDesignCalculation?.fColmnValueEstimateAveRate?.resultValue || 0);
(dataEstimateResource[23] as any)['M/S_Resource_Total'] = (dataEstimateResource[21]['M/S_Resource_Total'] + dataEstimateResource[22]['M/S_Resource_Total']) * (analisisAndDesignCalculation?.fColmnValueEstimateAveRate?.resultValue || 0);
(dataEstimateResource[23] as any)['M/S/C_Resource_Total'] = (dataEstimateResource[21]['M/S/C_Resource_Total'] + dataEstimateResource[22]['M/S/C_Resource_Total']) * (analisisAndDesignCalculation?.fColmnValueEstimateAveRate?.resultValue || 0);
await Promise.all(dataEstimateResource);
return dataEstimateResource;
  /////////////////// ESTIMATE RESOURCE - END ///////////////////
}