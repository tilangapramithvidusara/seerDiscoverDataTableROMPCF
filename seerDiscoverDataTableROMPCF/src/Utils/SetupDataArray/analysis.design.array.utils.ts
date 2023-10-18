import { analysisAndDesign, dataIdentify, filterTypesPriority } from "../../Constants/identifiedData";
import { generateAnalysisDesignMValue, generateIColoumnValue } from "../EstimateAveRate/analysis.design.utils";
import { inititlaData } from "../../Constants/apiSample";
import { DataSet } from "../../Constants/SampleData";
import { data } from "../../Constants/makeData";

export const arrayGenerator = async (initialDataSet: any) => {
  let resultArray: any[] = [];

  try {
    const analisisAndDesignCalculation = await generateIColoumnValue(initialDataSet, analysisAndDesign.row);
    (data[0] as any).M = analisisAndDesignCalculation?.analysisDesing?.resultValue;
    (data[0] as any)['M/S'] = analisisAndDesignCalculation?.analysisDesing?.resultValueMS;
    (data[0] as any)['M/S/C'] = analisisAndDesignCalculation?.analysisDesing?.resultValueMSC;

    (data[1] as any).M = analisisAndDesignCalculation?.customisationDesing?.resultValue;
    (data[1] as any)['M/S'] = analisisAndDesignCalculation?.customisationDesing?.resultValueMS;
    (data[1] as any)['M/S/C'] = analisisAndDesignCalculation?.customisationDesing?.resultValueMSC;

    (data[2] as any).M = analisisAndDesignCalculation?.customRequirementDesing?.resultValue;
    (data[2] as any)['M/S'] = analisisAndDesignCalculation?.customRequirementDesing?.resultValueMS;
    (data[2] as any)['M/S/C'] = analisisAndDesignCalculation?.customRequirementDesing?.resultValueMSC;

    (data[3] as any).M = analisisAndDesignCalculation?.documentation?.resultValue;
    (data[3] as any)['M/S'] = analisisAndDesignCalculation?.documentation?.resultValueMS;
    (data[3] as any)['M/S/C'] = analisisAndDesignCalculation?.documentation?.resultValueMSC;

    (data[4] as any).M = analisisAndDesignCalculation?.designReview?.resultValue;
    (data[4] as any)['M/S'] = analisisAndDesignCalculation?.designReview?.resultValueMS;
    (data[4] as any)['M/S/C'] = analisisAndDesignCalculation?.designReview?.resultValueMSC;

    (data[5] as any).M = analisisAndDesignCalculation?.configuration?.resultValue;
    (data[5] as any)['M/S'] = analisisAndDesignCalculation?.configuration?.resultValueMS;
    (data[5] as any)['M/S/C'] = analisisAndDesignCalculation?.configuration?.resultValueMSC;
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
    return data;
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