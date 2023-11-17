import { complexityData, fitGapData, moscowsData, percentData } from "../../Constants/pickListData";

export const dataMapper = (data: any[]) => {
  try {
    const finalData = data && data.length && data.map((value: {seer_Moscow:  any, seer_FitGap: any, seer_Complexity: any}) => {
      let ob = {
        ...value, // Copy existing properties
        seer_Moscow: moscowsData[value['seer_Moscow']],
        seer_FitGap: fitGapData[value['seer_FitGap']],
        seer_Complexity: complexityData[value['seer_Complexity']],
      };
      
      // ob['seer_Moscow'] = moscowsData[value['seer_Moscow']];
      // ob['seer_FitGap'] = fitGapData[value['seer_FitGap']];
      return ob;
    });    
    return finalData;
  } catch (error) {
    console.log('erroraaa', error);
    
    return data;
  }
  
}