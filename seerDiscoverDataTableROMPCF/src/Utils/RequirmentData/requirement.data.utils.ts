import { fitGapData, moscowsData, percentData } from "../../Constants/pickListData";

export const dataMapper = (data: any[]) => {
  try {
    const finalData = data && data.length && data.map((value: {seer_Moscow:  any, seer_FitGap: any}) => {
      let ob = {
        ...value, // Copy existing properties
        seer_Moscow: moscowsData[value['seer_Moscow']],
        seer_FitGap: fitGapData[value['seer_FitGap']],
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