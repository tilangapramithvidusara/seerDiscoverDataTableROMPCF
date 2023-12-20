import { fitGapData, moscowsData } from "../../Constants/pickListData";
import { integrationParameters } from "../../Constants/integrationParameters";
import { parameterKeyIndex } from "../../Constants/parametersSetting";

export const generateIntegrationMValue = async(inititlaData: any, condition: boolean, settingParameters?: any, isSnapshotModeEnable?: boolean) => {
  // need to check with 'Estimate - Resource Milestone'!$C$1
  let hasParameters = settingParameters && isSnapshotModeEnable;
  let resultValue = 0;
  let resultValueMS = 0;
  let resultValueMSC = 0;
  let x = 0
  let y = 0

  let returnObject = {
    integration: {
      resultValue,
      resultValueMS,
      resultValueMSC
    },
  }

  let integrationValue = 0;

  // seerMoscow
  // ad_QuestionNumber
  // wholeNumber
  try {
    const {BaseData, resourceModelData, ModuleData, parameterModel, CustomisationModels, FactorsModel, IntegrationModel} = inititlaData
    let {hoursPerday} = parameterModel[0]
      if (hasParameters) {
        hoursPerday = parseInt(settingParameters?.formattedData[
          parameterKeyIndex.hoursPerDay
        ]?.currentValue || '0');
      }
    if (inititlaData) {
      
      // interfaces_Crf96_json
      const {interfaces_Crf96_json} = IntegrationModel[0];
      const IntegrationDataSet = JSON.parse(interfaces_Crf96_json?.value)
      
      const integrationLoop = IntegrationDataSet && IntegrationDataSet.length && IntegrationDataSet.map((integrationItem: any, itegrationIndex: number) => {
        let k2 = integrationItem?.['305110'];
        console.log(k2);
        
        
        let m2 = 0
        let n2 = 0
        let o2 = 0
        let p2 = 0
        let q2 = 0;
        let r2 = 0;
        let s2 = 0
        let t2 = 0;
        console.log("integrationItem?.['304600']", integrationItem?.['304600']);
        console.log("integrationItem?.['304700']", integrationItem?.['304700']);
        console.log("integrationItem?.['305100']", integrationItem?.['305100']);
        console.log("integrationItem?.['305110']", integrationItem?.['305110']);
        console.log("integrationItem?.['305120']", integrationItem?.['305120']);
        
        if (integrationItem?.['305110'] !== '') {          
          if (integrationItem?.['304600'] !== '') {
            const value: any = integrationParameters.find((item, index) => item.lookup == integrationItem?.['304600']);
            console.log('value m2 ==> ', value);
            
            m2 = value?.score || 0
          }
          if (integrationItem?.['304700'] !== '') {
            const value: any = integrationParameters.find((item, index) => item.lookup == integrationItem?.['304700']);
            console.log('value n2 ==> ', value);
            n2 = value?.score || 0
          }
          // 305100
          if (integrationItem?.['305100'] !== '') {
            const value: any = integrationParameters.find((item, index) => item.lookup == integrationItem?.['305100']);
            console.log('value o2 ==> ', value);
            o2 = value?.score || 0
          }
          if (integrationItem?.['305110'] !== '') {
            const value: any =  integrationParameters.find((item, index) => item.type == 'Messages');
            console.log('value op ==> ', value, integrationItem?.['305110'], (value?.score || 0) * integrationItem?.['305110']);
            p2 = (value?.score || 0) * integrationItem?.['305110']
          }
          if (integrationItem?.['305120'] !== '') {
            const value: any = integrationParameters.find((item, index) => item.lookup == integrationItem?.['305120']);
            console.log('value q2 ==> ', value);
            q2 = value?.score || 0
          }
          r2 = m2 + n2 + o2 + p2 + q2;
          console.log('r2 => ', r2);

          // find s2
          let maxObject: any = null;

          // Iterate over the array
          integrationParameters.forEach((param) => {
            // Check if the type is "Size" and the lookup is less than or equal to 9
            console.log('1q1q1q1==> ', param.type === 'Size' && param.lookup <= r2.toString(), param.type, param.lookup);
            if (param.type === 'Size') {
              console.log('1q1q1q==> ', parseInt(param?.lookup) <= r2, param.type, param.lookup, parseInt(param?.lookup), r2);
              if (parseInt(param?.lookup) <= r2) {
                // Update maxObject if the current lookup is greater
                if (!maxObject || parseInt(param.lookup) > parseInt(maxObject.lookup)) {
                  maxObject = param;
                }
              }
            }
          });
          
          const valueS2: any = maxObject
          // integrationParameters.find((item, index) => {
          //   console.log('item.lookup ', item.lookup, r2);
          //   console.log('item.type ', item.lookup, 'Size');
            
          //   return(item.lookup == r2.toString() && item.type == 'Size')
          // });
          console.log('s2 => ', valueS2?.score || 0, valueS2);
          
          s2 = valueS2?.score || 0
          console.log('s2=> ', valueS2);
          
          // Days per msg
          const valuePT21: any = integrationParameters.find((item, index) => item.type == 'Days per msg');
          const para_t21 = valuePT21?.score || 0
          t2 = (k2 == 1) ? s2 : (s2 + (k2 * para_t21));
          
        }
        integrationValue += t2;
      })
      console.log(integrationValue);
      
      await Promise.all(integrationLoop);
      
      if (parameterModel?.length) {
        returnObject.integration.resultValue = generateReturnValue(
          integrationValue,
          hoursPerday,
          condition
        )
        
        returnObject.integration.resultValueMS = generateReturnValue(
          integrationValue,
          hoursPerday,
          condition
        )

        returnObject.integration.resultValueMSC =  generateReturnValue(
          integrationValue,
          hoursPerday,
          condition
        )
        
      }
      await Promise.all([integrationLoop])
      console.log('hjhjhj ==.', returnObject);
      
      return returnObject;
    } else {
      console.log("generateAnalysisDesignMValue false ==> ");
      return returnObject;
    }
  } catch (error) {
    console.log("generateAnalysisDesignMValue error ==> ", error);
    return returnObject;
  }
}

const generateReturnValue = (val1: number, hoursPerDay: number, condtion: boolean) => {
  if (!condtion) {
    return (val1)*hoursPerDay
  }
  return (val1)
}

