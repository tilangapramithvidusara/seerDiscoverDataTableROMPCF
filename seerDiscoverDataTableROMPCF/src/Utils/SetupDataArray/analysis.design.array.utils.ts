import { dataIdentify } from "../../Constants/identifiedData";
import { generateAnalysisDesignMValue, generateIColoumnValue } from "../EstimateAveRate/analysis.design.utils";
import { inititlaData } from "../../Constants/apiSample";
import { DataSet } from "../../Constants/SampleData";
import { data } from "../../Constants/makeData";

export const arrayGenerator = async (initialDataSet: any) => {
  let resultArray: any[] = [];

  try {
    const promises = dataIdentify.map(async (item: any) => {
      const { title, rows } = item;

      if (rows.includes('Analysis and Design')) {
        const response: any = await generateIColoumnValue(initialDataSet);
        
        // Update resultArray with the response
        // resultArray.push(response);
        data[0].M = response

        console.log("Analysis and Design response => ", response);
      }
    });

    // Wait for all asynchronous operations to complete
    await Promise.all(promises);

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