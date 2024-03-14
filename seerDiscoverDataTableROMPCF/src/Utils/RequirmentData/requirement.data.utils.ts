import { complexityData, fitGapData, moscowsData, percentData } from "../../Constants/pickListData";

export const dataMapper = (data: any[], type = 'requirement') => {
  try {
    const finalData = data && data.length && data.map((value: {seer_Moscow:  any, seer_FitGap: any, seer_Complexity: any, seer_moscow:  any, seer_fitgap: any, seer_complexity: any, seerMoscow: any, seerFitgap: any, seerComplexity: any}) => {
      let ob = {...value};
      if(type == 'requirement') {
        ob = {
          ...ob, // Copy existing properties
          seer_Moscow: moscowsData[value['seer_Moscow']],
          seer_FitGap: fitGapData[value['seer_FitGap']],
          seer_Complexity: complexityData[value['seer_Complexity']],
        };
      } else if (type == 'customisation') {
        ob = {
          ...ob, // Copy existing properties
          seer_moscow: moscowsData[value['seer_moscow']],
          seer_fitgap: fitGapData[value['seer_fitgap']],
          seer_complexity: complexityData[value['seer_complexity']],
        };
      } else if (type == 'documentLayouts') {
        ob = {
          ...ob, // Copy existing properties
          seerMoscow: moscowsData[value['seerMoscow']],
          seerFitgap: fitGapData[value['seerFitgap']],
          seerComplexity: complexityData[value['seerComplexity']],
        };
      } else if (type == 'dataMigrations') {
        ob = {
          ...ob, // Copy existing properties
          seerMoscow: moscowsData[value['seerMoscow']],
          seerFitgap: fitGapData[value['seerFitgap']],
          seerComplexity: complexityData[value['seerComplexity']],
        };
      }
      
      // ob['seer_Moscow'] = moscowsData[value['seer_Moscow']];
      // ob['seer_FitGap'] = fitGapData[value['seer_FitGap']];
      return ob;
    });    
    return finalData;
  } catch (error) {
    
    return data;
  }
  
}