import { parameterKeyIndex } from "../../Constants/parametersSetting";
import { fitGapData, moscowsData, percentData } from "../../Constants/pickListData";

export const generateProjectManagerMValue = async(inititlaData: any, analisisDesignPre: 
  {
    // responseCustomRequirementDesign: any, responseAnalisisDesign: any, responseCustomisationDesign: any, responseIntegration: any, 
    responseSubtotal: any}, condition: boolean, settingParameters?: any, isSnapshotModeEnable?: boolean) => {

  let romParameter = 'Days'
  // need to check with 'Estimate - Resource Milestone'!$C$1
  let hasParameters = settingParameters && isSnapshotModeEnable;

  let resultValue = 0;
  let resultValueMS = 0;
  let resultValueMSC = 0;
  let x = 0
  let y = 0

  let returnObject = {
    projectManager: {
      resultValue,
      resultValueMS,
      resultValueMSC
    },
  }
  // seerMoscow
  try {

    const {parameterModel} = inititlaData;
    let {hoursPerday, hourlyRate} = parameterModel[0]
    if (hasParameters) {
      hoursPerday = parseInt(settingParameters?.formattedData[
        parameterKeyIndex.hoursPerDay
      ]?.currentValue || '0');
      hourlyRate = {
        ...hourlyRate,
        value: parseInt(settingParameters?.formattedData[
          parameterKeyIndex.hourlyRate
        ]?.currentValue || '0')
      }
      const projectManagementValue = parseInt(settingParameters?.formattedData[
        parameterKeyIndex.projectManagement
      ]?.currentValue || '0')
      const projectManagementTypeValue = parseInt(settingParameters?.formattedData[
        parameterKeyIndex.projectManagement
      ]?.typeValueCurrent)

      if (percentData[projectManagementTypeValue] == percentData?.[100000001]) {

        // must
        returnObject.projectManager.resultValue = (projectManagementValue/100 || 0) * (analisisDesignPre?.responseSubtotal?.subTotalMAnalysisDesign || 0)
        //  must should
        returnObject.projectManager.resultValueMS = (projectManagementValue/100 || 0) * (analisisDesignPre?.responseSubtotal?.subTotalMSAnalysisDesign || 0)
        // must should could
        returnObject.projectManager.resultValueMSC = (projectManagementValue/100 || 0) * (analisisDesignPre?.responseSubtotal?.subTotalMSCAnalysisDesign || 0)
        await Promise.all([returnObject])
        return returnObject;
      } else {
        // parameterModel[0]?.solutionArchitecture   parameterModel[0]?.solutionArchitectureType ==
        // Must Custom Requirement
        // console.log(analisisDesignPre?.responseCustomRequirementDesign?.customRequirementBuild?.resultValue);
        // console.log(analisisDesignPre?.responseAnalisisDesign?.configuration?.resultValue);
        // console.log(analisisDesignPre?.responseCustomisationDesign.customisationBuild?.resultValue);
        // console.log(analisisDesignPre?.responseIntegration.integration?.resultValue);
        
        // console.log(
        //   (analisisDesignPre?.responseCustomRequirementDesign?.customRequirementBuild?.resultValue || 0) + 
        //   (analisisDesignPre?.responseAnalisisDesign?.configuration?.resultValue || 0) + 
        //   (analisisDesignPre?.responseCustomisationDesign.customisationBuild?.resultValue || 0 ) +
        //   (analisisDesignPre?.responseIntegration.integration?.resultValue || 0)
        //   );
        
        
        
        // const mustCal = 
        //   (analisisDesignPre?.responseCustomRequirementDesign?.customRequirementBuild?.resultValue || 0) + 
        //   (analisisDesignPre?.responseAnalisisDesign?.configuration?.resultValue || 0) + 
        //   (analisisDesignPre?.responseCustomisationDesign.customisationBuild?.resultValue || 0) + 
        //   (analisisDesignPre?.responseIntegration.integration?.resultValue || 0)
        // const mustShouldCal = 
        //   (analisisDesignPre?.responseCustomRequirementDesign?.customRequirementBuild?.resultValueMS || 0) + 
        //   (analisisDesignPre?.responseAnalisisDesign?.configuration?.resultValueMS || 0) + 
        //   (analisisDesignPre?.responseCustomisationDesign.customisationBuild?.resultValueMS || 0) + 
        //   (analisisDesignPre?.responseIntegration.integration?.resultValueMS || 0)
        // const mustShouldCouldCal = 
        //   (analisisDesignPre?.responseCustomRequirementDesign?.customRequirementBuild?.resultValueMSC || 0) +
        //   (analisisDesignPre?.responseAnalisisDesign?.configuration?.resultValueMSC || 0) + 
        //   (analisisDesignPre?.responseCustomisationDesign.customisationBuild?.resultValueMSC || 0) + 
        //   (analisisDesignPre?.responseIntegration.integration?.resultValueMSC || 0)
        // console.log('mmm ==> ', mustCal, mustShouldCal, mustShouldCal);
        const F4Parameter = hoursPerday * 5;
        const O37 = 0// to find this we need to complete Estimate Avg Rate Milestone table
        const H6 = 29// if days === c2 => O37/5 else (O37/8)/5
        const h8 = 1123.176 // need to gets it from api
        const g8 = 1217.546
        const f8 = 1406.438
        
        // not done yet
        if (percentData?.[parameterModel[0]?.solutionArchitectureType] === percentData?.[100000002]) { // hours
          const hoursResult = condition ? 
          (romParameter == "Hours" ? parameterModel[0]?.solutionArchitecture : parameterModel[0]?.solutionArchitecture/hoursPerday) * (hoursPerday * hourlyRate?.value) :
          (romParameter == "Hours" ? parameterModel[0]?.solutionArchitecture : parameterModel[0]?.solutionArchitecture/hoursPerday) * (hoursPerday) // if c2 === hours then get direct parameterModel[0]?.solutionArchitecture
          returnObject.projectManager.resultValue = hoursResult
          returnObject.projectManager.resultValueMS = hoursResult
          returnObject.projectManager.resultValueMSC = hoursResult
        } else if (percentData?.[parameterModel[0]?.solutionArchitectureType] === percentData?.[100000000]) { // FTE
          // dont need yet
          // returnObject.projectManager.resultValue = romParameter == "Hours" ?  (parameterModel[0]?.solutionArchitecture * h8) :(parameterModel[0]?.solutionArchitecture * h8)/parameterModel[0]?.hoursPerday // if c2 === hours then get direct (parameterModel[0]?.solutionArchitecture * h8)  // need to find H8
          // returnObject.projectManager.resultValueMS = romParameter == "Hours" ? parameterModel[0]?.solutionArchitecture * g8  :(parameterModel[0]?.solutionArchitecture * g8)/parameterModel[0]?.hoursPerday // if c2 === hours then get direct parameterModel[0]?.solutionArchitecture * g8  // need to find G8
          // returnObject.projectManager.resultValueMSC = romParameter == "Hours" ? parameterModel[0]?.solutionArchitecture * f8  :(parameterModel[0]?.solutionArchitecture * f8)/parameterModel[0]?.hoursPerday // if c2 === hours then get direct parameterModel[0]?.solutionArchitecture * f8  // need to find F8
        } else {
          returnObject.projectManager.resultValue = 0
          returnObject.projectManager.resultValueMS = 0
          returnObject.projectManager.resultValueMSC = 0
        }
        
        await Promise.all([returnObject])
        return returnObject;
      }

    } else {
      if (percentData[parameterModel[0]?.projectManagementType] == percentData?.[100000001]) {

        // must
        returnObject.projectManager.resultValue = (parameterModel[0]?.projectManagement/100 || 0) * (analisisDesignPre?.responseSubtotal?.subTotalMAnalysisDesign || 0)
        //  must should
        returnObject.projectManager.resultValueMS = (parameterModel[0]?.projectManagement/100 || 0) * (analisisDesignPre?.responseSubtotal?.subTotalMSAnalysisDesign || 0)
        // must should could
        returnObject.projectManager.resultValueMSC = (parameterModel[0]?.projectManagement/100 || 0) * (analisisDesignPre?.responseSubtotal?.subTotalMSCAnalysisDesign || 0)
        await Promise.all([returnObject])
        return returnObject;
      } else {
        // parameterModel[0]?.solutionArchitecture   parameterModel[0]?.solutionArchitectureType ==
        // Must Custom Requirement
        // console.log(analisisDesignPre?.responseCustomRequirementDesign?.customRequirementBuild?.resultValue);
        // console.log(analisisDesignPre?.responseAnalisisDesign?.configuration?.resultValue);
        // console.log(analisisDesignPre?.responseCustomisationDesign.customisationBuild?.resultValue);
        // console.log(analisisDesignPre?.responseIntegration.integration?.resultValue);
        
        // console.log(
        //   (analisisDesignPre?.responseCustomRequirementDesign?.customRequirementBuild?.resultValue || 0) + 
        //   (analisisDesignPre?.responseAnalisisDesign?.configuration?.resultValue || 0) + 
        //   (analisisDesignPre?.responseCustomisationDesign.customisationBuild?.resultValue || 0 ) +
        //   (analisisDesignPre?.responseIntegration.integration?.resultValue || 0)
        //   );
        
        
        
        // const mustCal = 
        //   (analisisDesignPre?.responseCustomRequirementDesign?.customRequirementBuild?.resultValue || 0) + 
        //   (analisisDesignPre?.responseAnalisisDesign?.configuration?.resultValue || 0) + 
        //   (analisisDesignPre?.responseCustomisationDesign.customisationBuild?.resultValue || 0) + 
        //   (analisisDesignPre?.responseIntegration.integration?.resultValue || 0)
        // const mustShouldCal = 
        //   (analisisDesignPre?.responseCustomRequirementDesign?.customRequirementBuild?.resultValueMS || 0) + 
        //   (analisisDesignPre?.responseAnalisisDesign?.configuration?.resultValueMS || 0) + 
        //   (analisisDesignPre?.responseCustomisationDesign.customisationBuild?.resultValueMS || 0) + 
        //   (analisisDesignPre?.responseIntegration.integration?.resultValueMS || 0)
        // const mustShouldCouldCal = 
        //   (analisisDesignPre?.responseCustomRequirementDesign?.customRequirementBuild?.resultValueMSC || 0) +
        //   (analisisDesignPre?.responseAnalisisDesign?.configuration?.resultValueMSC || 0) + 
        //   (analisisDesignPre?.responseCustomisationDesign.customisationBuild?.resultValueMSC || 0) + 
        //   (analisisDesignPre?.responseIntegration.integration?.resultValueMSC || 0)
        // console.log('mmm ==> ', mustCal, mustShouldCal, mustShouldCal);
        const F4Parameter = hoursPerday * 5;
        const O37 = 0// to find this we need to complete Estimate Avg Rate Milestone table
        const H6 = 29// if days === c2 => O37/5 else (O37/8)/5
        const h8 = 1123.176 // need to gets it from api
        const g8 = 1217.546
        const f8 = 1406.438
        
        // not done yet
        if (percentData?.[parameterModel[0]?.solutionArchitectureType] === percentData?.[100000002]) { // hours
          const hoursResult = condition ? 
          (romParameter == "Hours" ? parameterModel[0]?.solutionArchitecture : parameterModel[0]?.solutionArchitecture/parameterModel[0]?.hoursPerday) * (parameterModel[0]?.hoursPerday * parameterModel[0]?.hourlyRate?.value) :
          (romParameter == "Hours" ? parameterModel[0]?.solutionArchitecture : parameterModel[0]?.solutionArchitecture/parameterModel[0]?.hoursPerday) * (parameterModel[0]?.hoursPerday) // if c2 === hours then get direct parameterModel[0]?.solutionArchitecture
          returnObject.projectManager.resultValue = hoursResult
          returnObject.projectManager.resultValueMS = hoursResult
          returnObject.projectManager.resultValueMSC = hoursResult
        } else if (percentData?.[parameterModel[0]?.solutionArchitectureType] === percentData?.[100000000]) { // FTE
          // dont need yet
          // returnObject.projectManager.resultValue = romParameter == "Hours" ?  (parameterModel[0]?.solutionArchitecture * h8) :(parameterModel[0]?.solutionArchitecture * h8)/parameterModel[0]?.hoursPerday // if c2 === hours then get direct (parameterModel[0]?.solutionArchitecture * h8)  // need to find H8
          // returnObject.projectManager.resultValueMS = romParameter == "Hours" ? parameterModel[0]?.solutionArchitecture * g8  :(parameterModel[0]?.solutionArchitecture * g8)/parameterModel[0]?.hoursPerday // if c2 === hours then get direct parameterModel[0]?.solutionArchitecture * g8  // need to find G8
          // returnObject.projectManager.resultValueMSC = romParameter == "Hours" ? parameterModel[0]?.solutionArchitecture * f8  :(parameterModel[0]?.solutionArchitecture * f8)/parameterModel[0]?.hoursPerday // if c2 === hours then get direct parameterModel[0]?.solutionArchitecture * f8  // need to find F8
        } else {
          returnObject.projectManager.resultValue = 0
          returnObject.projectManager.resultValueMS = 0
          returnObject.projectManager.resultValueMSC = 0
        }
        
        await Promise.all([returnObject])
        return returnObject;
      }
    }
    

    
  } catch (error) {
    console.log("generateAnalysisDesignMValue error ==> ", error);
    return returnObject;
  }
}
