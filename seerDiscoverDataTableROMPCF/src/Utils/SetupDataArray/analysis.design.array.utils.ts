import { analysisAndDesign, dataIdentify, filterTypesPriority } from "../../Constants/identifiedData";
import { generateAnalysisDesignMValue, generateIColoumnValue } from "../EstimateAveRate/analysis.design.utils";
import { inititlaData } from "../../Constants/apiSample";
import { DataSet } from "../../Constants/SampleData";
import { data } from "../../Constants/estimateAverageRate";
import { dataEstimateResource } from "../../Constants/estimateResource";
import { generateProjectManagerMValue } from "../EstimateAveRate/project.manager.utils";

export const arrayGenerator = async (initialDataSet: any) => {
  let resultArray: any[] = [];
  let subTotalMAnalysisDesign = 0;
  let subTotalMSAnalysisDesign = 0;
  let subTotalMSCAnalysisDesign = 0;

  try {
    const analisisAndDesignCalculation = await generateIColoumnValue(initialDataSet, analysisAndDesign.row);
    (data[0] as any).M = analisisAndDesignCalculation?.analysisDesing?.resultValue;
    (data[0] as any)['M/S'] = analisisAndDesignCalculation?.analysisDesing?.resultValueMS;
    (data[0] as any)['M/S/C'] = analisisAndDesignCalculation?.analysisDesing?.resultValueMSC;
    subTotalMAnalysisDesign +=analisisAndDesignCalculation?.analysisDesing?.resultValue;
    subTotalMSAnalysisDesign += analisisAndDesignCalculation?.analysisDesing?.resultValueMS || 0;
    subTotalMSCAnalysisDesign += analisisAndDesignCalculation?.analysisDesing?.resultValueMSC || 0;

    (data[1] as any).M = analisisAndDesignCalculation?.customisationDesing?.resultValue;
    (data[1] as any)['M/S'] = analisisAndDesignCalculation?.customisationDesing?.resultValueMS;
    (data[1] as any)['M/S/C'] = analisisAndDesignCalculation?.customisationDesing?.resultValueMSC;
    subTotalMAnalysisDesign += analisisAndDesignCalculation?.customisationDesing?.resultValue;
    subTotalMSAnalysisDesign += analisisAndDesignCalculation?.customisationDesing?.resultValueMS || 0;
    subTotalMSCAnalysisDesign += analisisAndDesignCalculation?.customisationDesing?.resultValueMSC || 0;

    (data[2] as any).M = analisisAndDesignCalculation?.customRequirementDesing?.resultValue || 0;
    (data[2] as any)['M/S'] = analisisAndDesignCalculation?.customRequirementDesing?.resultValueMS;
    (data[2] as any)['M/S/C'] = analisisAndDesignCalculation?.customRequirementDesing?.resultValueMSC;
    subTotalMAnalysisDesign += analisisAndDesignCalculation?.customRequirementDesing?.resultValue || 0;
    subTotalMSAnalysisDesign += analisisAndDesignCalculation?.customRequirementDesing?.resultValueMS || 0;
    subTotalMSCAnalysisDesign += analisisAndDesignCalculation?.customRequirementDesing?.resultValueMSC || 0;

    (data[3] as any).M = analisisAndDesignCalculation?.documentation?.resultValue || 0;
    (data[3] as any)['M/S'] = analisisAndDesignCalculation?.documentation?.resultValueMS;
    (data[3] as any)['M/S/C'] = analisisAndDesignCalculation?.documentation?.resultValueMSC;
    subTotalMAnalysisDesign += analisisAndDesignCalculation?.documentation?.resultValue || 0;
    subTotalMSAnalysisDesign += analisisAndDesignCalculation?.documentation?.resultValueMS || 0;
    subTotalMSCAnalysisDesign += analisisAndDesignCalculation?.documentation?.resultValueMSC || 0;

    (data[4] as any).M = analisisAndDesignCalculation?.designReview?.resultValue;
    (data[4] as any)['M/S'] = analisisAndDesignCalculation?.designReview?.resultValueMS;
    (data[4] as any)['M/S/C'] = analisisAndDesignCalculation?.designReview?.resultValueMSC;
    subTotalMAnalysisDesign += analisisAndDesignCalculation?.designReview?.resultValue || 0;
    subTotalMSAnalysisDesign += analisisAndDesignCalculation?.designReview?.resultValueMS || 0;
    subTotalMSCAnalysisDesign += analisisAndDesignCalculation?.designReview?.resultValueMSC || 0;

    (data[5] as any).M = analisisAndDesignCalculation?.configuration?.resultValue;
    (data[5] as any)['M/S'] = analisisAndDesignCalculation?.configuration?.resultValueMS;
    (data[5] as any)['M/S/C'] = analisisAndDesignCalculation?.configuration?.resultValueMSC;
    subTotalMAnalysisDesign += analisisAndDesignCalculation?.configuration?.resultValue || 0;
    subTotalMSAnalysisDesign += analisisAndDesignCalculation?.configuration?.resultValueMS || 0;
    subTotalMSCAnalysisDesign += analisisAndDesignCalculation?.configuration?.resultValueMSC || 0;

    (data[6] as any).M = analisisAndDesignCalculation?.integration?.resultValue;
    (data[6] as any)['M/S'] = analisisAndDesignCalculation?.integration?.resultValueMS;
    (data[6] as any)['M/S/C'] = analisisAndDesignCalculation?.integration?.resultValueMSC;
    subTotalMAnalysisDesign += analisisAndDesignCalculation?.integration?.resultValue || 0;
    subTotalMSAnalysisDesign += analisisAndDesignCalculation?.integration?.resultValueMS || 0;
    subTotalMSCAnalysisDesign += analisisAndDesignCalculation?.integration?.resultValueMSC || 0;

    (data[7] as any).M = analisisAndDesignCalculation?.customisationBuild?.resultValue;
    (data[7] as any)['M/S'] = analisisAndDesignCalculation?.customisationBuild?.resultValueMS;
    (data[7] as any)['M/S/C'] = analisisAndDesignCalculation?.customisationBuild?.resultValueMSC;
    subTotalMAnalysisDesign += analisisAndDesignCalculation?.customisationBuild?.resultValue || 0;
    subTotalMSAnalysisDesign += analisisAndDesignCalculation?.customisationBuild?.resultValueMS || 0;
    subTotalMSCAnalysisDesign += analisisAndDesignCalculation?.customisationBuild?.resultValueMSC || 0;

    (data[8] as any).M = analisisAndDesignCalculation?.customRequirementBuild?.resultValue;
    (data[8] as any)['M/S'] = analisisAndDesignCalculation?.customRequirementBuild?.resultValueMS;
    (data[8] as any)['M/S/C'] = analisisAndDesignCalculation?.customRequirementBuild?.resultValueMSC;
    subTotalMAnalysisDesign += analisisAndDesignCalculation?.customRequirementBuild?.resultValue || 0;
    subTotalMSAnalysisDesign += analisisAndDesignCalculation?.customRequirementBuild?.resultValueMS || 0;
    subTotalMSCAnalysisDesign += analisisAndDesignCalculation?.customRequirementBuild?.resultValueMSC || 0;

    (data[9] as any).M = analisisAndDesignCalculation?.documentLayout?.resultValue;
    (data[9] as any)['M/S'] = analisisAndDesignCalculation?.documentLayout?.resultValueMS;
    (data[9] as any)['M/S/C'] = analisisAndDesignCalculation?.documentLayout?.resultValueMSC;
    subTotalMAnalysisDesign += analisisAndDesignCalculation?.documentLayout?.resultValue || 0;
    subTotalMSAnalysisDesign += analisisAndDesignCalculation?.documentLayout?.resultValueMS || 0;
    subTotalMSCAnalysisDesign += analisisAndDesignCalculation?.documentLayout?.resultValueMSC || 0;

    (data[10] as any).M = analisisAndDesignCalculation?.reporting?.resultValue;
    (data[10] as any)['M/S'] = analisisAndDesignCalculation?.reporting?.resultValueMS;
    (data[10] as any)['M/S/C'] = analisisAndDesignCalculation?.reporting?.resultValueMSC;
    subTotalMAnalysisDesign += analisisAndDesignCalculation?.reporting?.resultValue || 0;
    subTotalMSAnalysisDesign += analisisAndDesignCalculation?.reporting?.resultValueMS || 0;
    subTotalMSCAnalysisDesign += analisisAndDesignCalculation?.reporting?.resultValueMSC || 0;

    (data[11] as any).M = analisisAndDesignCalculation?.dataMigration?.resultValue;
    (data[11] as any)['M/S'] = analisisAndDesignCalculation?.dataMigration?.resultValueMS;
    (data[11] as any)['M/S/C'] = analisisAndDesignCalculation?.dataMigration?.resultValueMSC;
    subTotalMAnalysisDesign += analisisAndDesignCalculation?.dataMigration?.resultValue || 0;
    subTotalMSAnalysisDesign += analisisAndDesignCalculation?.dataMigration?.resultValueMS || 0;
    subTotalMSCAnalysisDesign += analisisAndDesignCalculation?.dataMigration?.resultValueMSC || 0;

    (data[12] as any).M = analisisAndDesignCalculation?.crp?.resultValue;
    (data[12] as any)['M/S'] = analisisAndDesignCalculation?.crp?.resultValueMS;
    (data[12] as any)['M/S/C'] = analisisAndDesignCalculation?.crp?.resultValueMSC;
    subTotalMAnalysisDesign += analisisAndDesignCalculation?.crp?.resultValue || 0;
    subTotalMSAnalysisDesign += analisisAndDesignCalculation?.crp?.resultValueMS || 0;
    subTotalMSCAnalysisDesign += analisisAndDesignCalculation?.crp?.resultValueMSC || 0;

    (data[13] as any).M = analisisAndDesignCalculation?.testing?.resultValue;
    (data[13] as any)['M/S'] = analisisAndDesignCalculation?.testing?.resultValueMS;
    (data[13] as any)['M/S/C'] = analisisAndDesignCalculation?.testing?.resultValueMSC;
    subTotalMAnalysisDesign += analisisAndDesignCalculation?.testing?.resultValue || 0;
    subTotalMSAnalysisDesign += analisisAndDesignCalculation?.testing?.resultValueMS || 0;
    subTotalMSCAnalysisDesign += analisisAndDesignCalculation?.testing?.resultValueMSC || 0;

    // INDEX TRAIN THE TRAINER 14 
    // trainTheTrainer
    (data[14] as any).M = analisisAndDesignCalculation?.trainTheTrainer?.resultValue;
    (data[14] as any)['M/S'] = analisisAndDesignCalculation?.trainTheTrainer?.resultValueMS;
    (data[14] as any)['M/S/C'] = analisisAndDesignCalculation?.trainTheTrainer?.resultValueMSC;
    subTotalMAnalysisDesign += analisisAndDesignCalculation?.trainTheTrainer?.resultValue || 0;
    subTotalMSAnalysisDesign += analisisAndDesignCalculation?.trainTheTrainer?.resultValueMS || 0;
    subTotalMSCAnalysisDesign += analisisAndDesignCalculation?.trainTheTrainer?.resultValueMSC || 0;

    (data[15] as any).M = analisisAndDesignCalculation?.uatEnvironmentPreparation?.resultValue;
    (data[15] as any)['M/S'] = analisisAndDesignCalculation?.uatEnvironmentPreparation?.resultValueMS;
    (data[15] as any)['M/S/C'] = analisisAndDesignCalculation?.uatEnvironmentPreparation?.resultValueMSC;
    subTotalMAnalysisDesign += analisisAndDesignCalculation?.uatEnvironmentPreparation?.resultValue || 0;
    subTotalMSAnalysisDesign += analisisAndDesignCalculation?.uatEnvironmentPreparation?.resultValueMS || 0;
    subTotalMSCAnalysisDesign += analisisAndDesignCalculation?.uatEnvironmentPreparation?.resultValueMSC || 0;

    (data[16] as any).M = analisisAndDesignCalculation?.uatSupport?.resultValue;
    (data[16] as any)['M/S'] = analisisAndDesignCalculation?.uatSupport?.resultValueMS;
    (data[16] as any)['M/S/C'] = analisisAndDesignCalculation?.uatSupport?.resultValueMSC;
    subTotalMAnalysisDesign += analisisAndDesignCalculation?.uatSupport?.resultValue || 0;
    subTotalMSAnalysisDesign += analisisAndDesignCalculation?.uatSupport?.resultValueMS || 0;
    subTotalMSCAnalysisDesign += analisisAndDesignCalculation?.uatSupport?.resultValueMSC || 0;

    (data[17] as any).M = analisisAndDesignCalculation?.prodEnvironmentPreparation?.resultValue;
    (data[17] as any)['M/S'] = analisisAndDesignCalculation?.prodEnvironmentPreparation?.resultValueMS;
    (data[17] as any)['M/S/C'] = analisisAndDesignCalculation?.prodEnvironmentPreparation?.resultValueMSC;
    subTotalMAnalysisDesign += analisisAndDesignCalculation?.prodEnvironmentPreparation?.resultValue || 0;
    subTotalMSAnalysisDesign += analisisAndDesignCalculation?.prodEnvironmentPreparation?.resultValueMS || 0;
    subTotalMSCAnalysisDesign += analisisAndDesignCalculation?.prodEnvironmentPreparation?.resultValueMSC || 0;

    (data[18] as any).M = analisisAndDesignCalculation?.supportHandover?.resultValue;
    (data[18] as any)['M/S'] = analisisAndDesignCalculation?.supportHandover?.resultValueMS;
    (data[18] as any)['M/S/C'] = analisisAndDesignCalculation?.supportHandover?.resultValueMSC;
    subTotalMAnalysisDesign += analisisAndDesignCalculation?.supportHandover?.resultValue || 0;
    subTotalMSAnalysisDesign += analisisAndDesignCalculation?.supportHandover?.resultValueMS || 0
    subTotalMSCAnalysisDesign += analisisAndDesignCalculation?.supportHandover?.resultValueMSC || 0;

    // endUserTraining
    (data[19] as any).M = analisisAndDesignCalculation?.endUserTraining?.resultValue;
    (data[19] as any)['M/S'] = analisisAndDesignCalculation?.endUserTraining?.resultValueMS;
    (data[19] as any)['M/S/C'] = analisisAndDesignCalculation?.endUserTraining?.resultValueMSC;
    subTotalMAnalysisDesign += analisisAndDesignCalculation?.endUserTraining?.resultValue || 0;
    subTotalMSAnalysisDesign += analisisAndDesignCalculation?.endUserTraining?.resultValueMS || 0;
    subTotalMSCAnalysisDesign += analisisAndDesignCalculation?.endUserTraining?.resultValueMSC || 0;

    (data[20] as any).M = analisisAndDesignCalculation?.postGoLive?.resultValue;
    (data[20] as any)['M/S'] = analisisAndDesignCalculation?.postGoLive?.resultValueMS;
    (data[20] as any)['M/S/C'] = analisisAndDesignCalculation?.postGoLive?.resultValueMSC;
    subTotalMAnalysisDesign += analisisAndDesignCalculation?.postGoLive?.resultValue || 0;
    subTotalMSAnalysisDesign += analisisAndDesignCalculation?.postGoLive?.resultValueMS || 0;
    subTotalMSCAnalysisDesign += analisisAndDesignCalculation?.postGoLive?.resultValueMSC ||0;

    (data[21] as any).M = subTotalMAnalysisDesign;
    (data[21] as any)['M/S'] = subTotalMSAnalysisDesign;
    (data[21] as any)['M/S/C'] = subTotalMSCAnalysisDesign;

    // fColmnValueEstimateAveRate
    (data[23] as any).M = subTotalMAnalysisDesign * (analisisAndDesignCalculation?.fColmnValueEstimateAveRate?.resultValue || 0);
    (data[23] as any)['M/S'] = subTotalMSAnalysisDesign * (analisisAndDesignCalculation?.fColmnValueEstimateAveRate?.resultValue || 0);
    (data[23] as any)['M/S/C'] = subTotalMSCAnalysisDesign * (analisisAndDesignCalculation?.fColmnValueEstimateAveRate?.resultValue || 0);

    const romParameter = "Days"
    const condition = romParameter === "Days";
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
    return {dataEstimateAverageRate, dataEstimateResource};
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