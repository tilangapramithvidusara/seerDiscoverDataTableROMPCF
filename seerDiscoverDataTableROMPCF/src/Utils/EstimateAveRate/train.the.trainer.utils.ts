import { hoursPerWeek, romParameter } from "../../Constants/fteConstants";
import { fitGapData, moscowsData, percentData } from "../../Constants/pickListData";
const para_d4 = 10/100;
export const generateTrainTheTrainerMValue = async(inititlaData: any, analisisDesignPre: {responseAnalisisDesign: any}, condition: boolean, isFte?: boolean) => {
  // need to check with 'Estimate - Resource Milestone'!$C$1
  let fte = isFte ? true : false;
  let resultValue = 0;
  let resultValueMS = 0;
  let resultValueMSC = 0;
  let x = 0
  let y = 0

  let returnObject = {
    trainTheTrainer: {
      resultValue,
      resultValueMS,
      resultValueMSC
    },
    trainTheTrainerAveRateMilestone: {
      resultValue,
      resultValueMS,
      resultValueMSC
    }
  }
  // seerMoscow
  try {
    const {parameterModel, fteValue} = inititlaData
    if (inititlaData) { // condition && 
      // Must Custom Requirement
      const mustCal = analisisDesignPre?.responseAnalisisDesign.configuration?.resultValue 
      const mustShouldCal = analisisDesignPre?.responseAnalisisDesign.configuration?.resultValueMS
      const mustShouldCouldCal = analisisDesignPre?.responseAnalisisDesign.configuration?.resultValueMSC
      const F4Parameter = parameterModel[0]?.hoursPerday * 5;
      const O37 = 0// to find this we need to complete Estimate Avg Rate Milestone table
      const H6 = 29// if days === c2 => O37/5 else (O37/8)/5
      const h7 = fteValue?.totalFte // need to gets it from api
      const g7 = fteValue?.totalFteMS
      const f7 = fteValue?.totalFteMSC
      const h8 = h7 * hoursPerWeek
      const g8 = g7 * hoursPerWeek
      const f8 = f7 * hoursPerWeek

      if (fte) {
        if (percentData?.[parameterModel[0]?.trainTheTrainerType] === percentData?.[100000001]) {
          returnObject.trainTheTrainerAveRateMilestone.resultValue = mustCal * (parameterModel[0]?.trainTheTrainer/100);
          returnObject.trainTheTrainerAveRateMilestone.resultValueMS = mustShouldCal * (parameterModel[0]?.trainTheTrainer/100);
          returnObject.trainTheTrainerAveRateMilestone.resultValueMSC = mustShouldCouldCal * (parameterModel[0]?.trainTheTrainer/100);
        } else {
          returnObject.trainTheTrainerAveRateMilestone.resultValue = mustCal * (para_d4); // not trainTheTrainer it need to get from backend
          returnObject.trainTheTrainerAveRateMilestone.resultValueMS = mustShouldCal * (para_d4);
          returnObject.trainTheTrainerAveRateMilestone.resultValueMSC = mustShouldCouldCal * (para_d4);
        }
      } else {
        if (percentData?.[parameterModel[0]?.trainTheTrainerType] === percentData?.[100000001]) {

          returnObject.trainTheTrainer.resultValue = mustCal * (parameterModel[0]?.trainTheTrainer/100);
          returnObject.trainTheTrainer.resultValueMS = mustShouldCal * (parameterModel[0]?.trainTheTrainer/100);
          returnObject.trainTheTrainer.resultValueMSC = mustShouldCouldCal * (parameterModel[0]?.trainTheTrainer/100);
        } else if (percentData?.[parameterModel[0]?.trainTheTrainerType] === percentData?.[100000002]) { // hours
          
          returnObject.trainTheTrainer.resultValue = romParameter == "Hours" ? parameterModel[0]?.trainTheTrainer : parameterModel[0]?.trainTheTrainer/parameterModel[0]?.hoursPerday // if c2 === hours then get direct parameterModel[0]?.trainTheTrainer
          returnObject.trainTheTrainer.resultValueMS = romParameter == "Hours" ? parameterModel[0]?.trainTheTrainer : parameterModel[0]?.trainTheTrainer/parameterModel[0]?.hoursPerday // if c2 === hours then get direct parameterModel[0]?.trainTheTrainer
          returnObject.trainTheTrainer.resultValueMSC = romParameter == "Hours" ? parameterModel[0]?.trainTheTrainer : parameterModel[0]?.trainTheTrainer/parameterModel[0]?.hoursPerday // if c2 === hours then get direct parameterModel[0]?.trainTheTrainer
        } else if (percentData?.[parameterModel[0]?.trainTheTrainerType] === percentData?.[100000000]) { // FTE
          returnObject.trainTheTrainer.resultValue = romParameter == "Hours" ? (parameterModel[0]?.trainTheTrainer * h8) : (parameterModel[0]?.trainTheTrainer * h8)/parameterModel[0]?.hoursPerday // if c2 === hours then get direct (parameterModel[0]?.trainTheTrainer * h8)  // need to find H8
          returnObject.trainTheTrainer.resultValueMS = romParameter == "Hours" ? (parameterModel[0]?.trainTheTrainer * g8) : (parameterModel[0]?.trainTheTrainer * g8)/parameterModel[0]?.hoursPerday // if c2 === hours then get direct parameterModel[0]?.trainTheTrainer * g8  // need to find G8
          returnObject.trainTheTrainer.resultValueMSC = romParameter == "Hours" ? (parameterModel[0]?.trainTheTrainer * f8) : (parameterModel[0]?.trainTheTrainer * f8)/parameterModel[0]?.hoursPerday // if c2 === hours then get direct parameterModel[0]?.trainTheTrainer * f8  // need to find F8
        }
      }
      
      await Promise.all([returnObject])
      return returnObject;
    } else {
      return returnObject;
    }
  } catch (error) {
    console.log("generateAnalysisDesignMValue error ==> ", error);
    return returnObject;
  }
}
