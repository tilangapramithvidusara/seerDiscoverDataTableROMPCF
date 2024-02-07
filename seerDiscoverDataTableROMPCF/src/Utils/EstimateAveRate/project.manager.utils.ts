import { parameterKeyIndex } from "../../Constants/parametersSetting";
import { fitGapData, moscowsData, percentData } from "../../Constants/pickListData";
let para_d4 = 10/100;

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

    const {parameterModel, fteValue} = inititlaData;
    const mustCal = (analisisDesignPre?.responseSubtotal?.subTotalMAnalysisDesign || 0);
    const mustShouldCal = (analisisDesignPre?.responseSubtotal?.subTotalMSAnalysisDesign || 0)
    const mustShouldCouldCal = (analisisDesignPre?.responseSubtotal?.subTotalMSCAnalysisDesign || 0)
    
    let {hoursPerday, hourlyRate, projectManagementType, projectManagement} = parameterModel[0]
    let projectManagementValue = projectManagement;
    let projectManagementTypeValue = projectManagementType;
    
    if (hasParameters) {
      para_d4 = parseFloat(settingParameters?.formattedData[
        parameterKeyIndex.fteBase
      ]?.currentValue || '0')
      hoursPerday = parseFloat(settingParameters?.formattedData[
        parameterKeyIndex.hoursPerDay
      ]?.currentValue || '0');
      hourlyRate = {
        ...hourlyRate,
        value: parseFloat(settingParameters?.formattedData[
          parameterKeyIndex.hourlyRate
        ]?.currentValue || '0')
      }
      projectManagementValue = parseFloat(settingParameters?.formattedData[
        parameterKeyIndex.projectManagement
      ]?.currentValue || '0')
      projectManagementTypeValue = parseFloat(settingParameters?.formattedData[
        parameterKeyIndex.projectManagement
      ]?.typeValueCurrent)
    }

    const F4Parameter = hoursPerday * 5;
    const O37 = 0// to find this we need to complete Estimate Avg Rate Milestone table
    const H6 = 29// if days === c2 => O37/5 else (O37/8)/5
    const h7 = fteValue?.totalFte || 0;// need to gets it from api
    const g7 = fteValue?.totalFteMS|| 0;
    const f7 = fteValue?.totalFteMSC|| 0;
    const h8 = h7 * F4Parameter
    // hoursPerWeek
    const g8 = g7 * F4Parameter
    // hoursPerWeek
    const f8 = f7 * F4Parameter


    if (percentData?.[projectManagementTypeValue] == percentData?.[100000001]) {

      returnObject.projectManager.resultValue = mustCal * (projectManagementValue/100);
      returnObject.projectManager.resultValueMS = mustShouldCal * (projectManagementValue/100);
      returnObject.projectManager.resultValueMSC = mustShouldCouldCal * (projectManagementValue/100);
    } else if (percentData?.[projectManagementTypeValue] == percentData?.[100000002]) { // hours
      
      returnObject.projectManager.resultValue = romParameter == "Hours" ? projectManagementValue :  projectManagementValue/hoursPerday // if c2 === hours then get direct parameterModel[0]?.designReview
      returnObject.projectManager.resultValueMS = romParameter == "Hours" ? projectManagementValue :  projectManagementValue/hoursPerday // if c2 === hours then get direct parameterModel[0]?.designReview
      returnObject.projectManager.resultValueMSC = romParameter == "Hours" ? projectManagementValue :  projectManagementValue/hoursPerday
    } else if (percentData?.[projectManagementTypeValue] == percentData?.[100000000]) { // FTE
      returnObject.projectManager.resultValue = romParameter == "Hours" ? (projectManagementValue * h8) : (projectManagementValue * h8)/hoursPerday // if c2 === hours then get direct (parameterModel[0]?.designReview * h8)  // need to find H8
      returnObject.projectManager.resultValueMS = romParameter == "Hours" ? (projectManagementValue * g8) : (projectManagementValue * g8)/hoursPerday // if c2 === hours then get direct parameterModel[0]?.designReview * g8  // need to find G8
      returnObject.projectManager.resultValueMSC = romParameter == "Hours" ? (projectManagementValue * f8) : (projectManagementValue * f8)/hoursPerday // if c2 === hours then get direct parameterModel[0]?.designReview * f8  // need to find F8
    }
    return returnObject;
    // if (hasParameters) {
    //   hoursPerday = parseFloat(settingParameters?.formattedData[
    //     parameterKeyIndex.hoursPerDay
    //   ]?.currentValue || '0');
    //   hourlyRate = {
    //     ...hourlyRate,
    //     value: parseFloat(settingParameters?.formattedData[
    //       parameterKeyIndex.hourlyRate
    //     ]?.currentValue || '0')
    //   }
    //   const projectManagementValue = parseFloat(settingParameters?.formattedData[
    //     parameterKeyIndex.projectManagement
    //   ]?.currentValue || '0')
    //   const projectManagementTypeValue = parseFloat(settingParameters?.formattedData[
    //     parameterKeyIndex.projectManagement
    //   ]?.typeValueCurrent)

    //   if (percentData[projectManagementTypeValue] == percentData?.[100000001]) {

    //     // must
    //     returnObject.projectManager.resultValue = (projectManagementValue/100 || 0) * (analisisDesignPre?.responseSubtotal?.subTotalMAnalysisDesign || 0)
    //     //  must should
    //     returnObject.projectManager.resultValueMS = (projectManagementValue/100 || 0) * (analisisDesignPre?.responseSubtotal?.subTotalMSAnalysisDesign || 0)
    //     // must should could
    //     returnObject.projectManager.resultValueMSC = (projectManagementValue/100 || 0) * (analisisDesignPre?.responseSubtotal?.subTotalMSCAnalysisDesign || 0)
    //     await Promise.all([returnObject])
    //     return returnObject;
    //   } else {
    //     // parameterModel[0]?.solutionArchitecture   parameterModel[0]?.solutionArchitectureType ==
    //     // Must Custom Requirement
    //     // console.log(analisisDesignPre?.responseCustomRequirementDesign?.customRequirementBuild?.resultValue);
    //     // console.log(analisisDesignPre?.responseAnalisisDesign?.configuration?.resultValue);
    //     // console.log(analisisDesignPre?.responseCustomisationDesign.customisationBuild?.resultValue);
    //     // console.log(analisisDesignPre?.responseIntegration.integration?.resultValue);
        
    //     // console.log(
    //     //   (analisisDesignPre?.responseCustomRequirementDesign?.customRequirementBuild?.resultValue || 0) + 
    //     //   (analisisDesignPre?.responseAnalisisDesign?.configuration?.resultValue || 0) + 
    //     //   (analisisDesignPre?.responseCustomisationDesign.customisationBuild?.resultValue || 0 ) +
    //     //   (analisisDesignPre?.responseIntegration.integration?.resultValue || 0)
    //     //   );
        
        
        
    //     // const mustCal = 
    //     //   (analisisDesignPre?.responseCustomRequirementDesign?.customRequirementBuild?.resultValue || 0) + 
    //     //   (analisisDesignPre?.responseAnalisisDesign?.configuration?.resultValue || 0) + 
    //     //   (analisisDesignPre?.responseCustomisationDesign.customisationBuild?.resultValue || 0) + 
    //     //   (analisisDesignPre?.responseIntegration.integration?.resultValue || 0)
    //     // const mustShouldCal = 
    //     //   (analisisDesignPre?.responseCustomRequirementDesign?.customRequirementBuild?.resultValueMS || 0) + 
    //     //   (analisisDesignPre?.responseAnalisisDesign?.configuration?.resultValueMS || 0) + 
    //     //   (analisisDesignPre?.responseCustomisationDesign.customisationBuild?.resultValueMS || 0) + 
    //     //   (analisisDesignPre?.responseIntegration.integration?.resultValueMS || 0)
    //     // const mustShouldCouldCal = 
    //     //   (analisisDesignPre?.responseCustomRequirementDesign?.customRequirementBuild?.resultValueMSC || 0) +
    //     //   (analisisDesignPre?.responseAnalisisDesign?.configuration?.resultValueMSC || 0) + 
    //     //   (analisisDesignPre?.responseCustomisationDesign.customisationBuild?.resultValueMSC || 0) + 
    //     //   (analisisDesignPre?.responseIntegration.integration?.resultValueMSC || 0)
    //     // console.log('mmm ==> ', mustCal, mustShouldCal, mustShouldCal);
    //     const F4Parameter = hoursPerday * 5;
    //     const O37 = 0// to find this we need to complete Estimate Avg Rate Milestone table
    //     const H6 = 29// if days === c2 => O37/5 else (O37/8)/5
    //     const h8 = 1123.176 // need to gets it from api
    //     const g8 = 1217.546
    //     const f8 = 1406.438
        
    //     // not done yet
    //     if (percentData?.[parameterModel[0]?.solutionArchitectureType] === percentData?.[100000002]) { // hours
    //       const hoursResult = condition ? 
    //       (romParameter == "Hours" ? parameterModel[0]?.solutionArchitecture : parameterModel[0]?.solutionArchitecture/hoursPerday) * (hoursPerday * hourlyRate?.value) :
    //       (romParameter == "Hours" ? parameterModel[0]?.solutionArchitecture : parameterModel[0]?.solutionArchitecture/hoursPerday) * (hoursPerday) // if c2 === hours then get direct parameterModel[0]?.solutionArchitecture
    //       returnObject.projectManager.resultValue = hoursResult
    //       returnObject.projectManager.resultValueMS = hoursResult
    //       returnObject.projectManager.resultValueMSC = hoursResult
    //     } else if (percentData?.[parameterModel[0]?.solutionArchitectureType] === percentData?.[100000000]) { // FTE
    //       // dont need yet
    //       // returnObject.projectManager.resultValue = romParameter == "Hours" ?  (parameterModel[0]?.solutionArchitecture * h8) :(parameterModel[0]?.solutionArchitecture * h8)/parameterModel[0]?.hoursPerday // if c2 === hours then get direct (parameterModel[0]?.solutionArchitecture * h8)  // need to find H8
    //       // returnObject.projectManager.resultValueMS = romParameter == "Hours" ? parameterModel[0]?.solutionArchitecture * g8  :(parameterModel[0]?.solutionArchitecture * g8)/parameterModel[0]?.hoursPerday // if c2 === hours then get direct parameterModel[0]?.solutionArchitecture * g8  // need to find G8
    //       // returnObject.projectManager.resultValueMSC = romParameter == "Hours" ? parameterModel[0]?.solutionArchitecture * f8  :(parameterModel[0]?.solutionArchitecture * f8)/parameterModel[0]?.hoursPerday // if c2 === hours then get direct parameterModel[0]?.solutionArchitecture * f8  // need to find F8
    //     } else {
    //       returnObject.projectManager.resultValue = 0
    //       returnObject.projectManager.resultValueMS = 0
    //       returnObject.projectManager.resultValueMSC = 0
    //     }
        
    //     await Promise.all([returnObject])
    //     return returnObject;
    //   }

    // } else {
    //   if (percentData[parameterModel[0]?.projectManagementType] == percentData?.[100000001]) {

    //     // must
    //     returnObject.projectManager.resultValue = (parameterModel[0]?.projectManagement/100 || 0) * (analisisDesignPre?.responseSubtotal?.subTotalMAnalysisDesign || 0)
    //     //  must should
    //     returnObject.projectManager.resultValueMS = (parameterModel[0]?.projectManagement/100 || 0) * (analisisDesignPre?.responseSubtotal?.subTotalMSAnalysisDesign || 0)
    //     // must should could
    //     returnObject.projectManager.resultValueMSC = (parameterModel[0]?.projectManagement/100 || 0) * (analisisDesignPre?.responseSubtotal?.subTotalMSCAnalysisDesign || 0)
    //     await Promise.all([returnObject])
    //     return returnObject;
    //   } else {
    //     // parameterModel[0]?.solutionArchitecture   parameterModel[0]?.solutionArchitectureType ==
    //     // Must Custom Requirement
    //     // console.log(analisisDesignPre?.responseCustomRequirementDesign?.customRequirementBuild?.resultValue);
    //     // console.log(analisisDesignPre?.responseAnalisisDesign?.configuration?.resultValue);
    //     // console.log(analisisDesignPre?.responseCustomisationDesign.customisationBuild?.resultValue);
    //     // console.log(analisisDesignPre?.responseIntegration.integration?.resultValue);
        
    //     // console.log(
    //     //   (analisisDesignPre?.responseCustomRequirementDesign?.customRequirementBuild?.resultValue || 0) + 
    //     //   (analisisDesignPre?.responseAnalisisDesign?.configuration?.resultValue || 0) + 
    //     //   (analisisDesignPre?.responseCustomisationDesign.customisationBuild?.resultValue || 0 ) +
    //     //   (analisisDesignPre?.responseIntegration.integration?.resultValue || 0)
    //     //   );
        
        
        
    //     // const mustCal = 
    //     //   (analisisDesignPre?.responseCustomRequirementDesign?.customRequirementBuild?.resultValue || 0) + 
    //     //   (analisisDesignPre?.responseAnalisisDesign?.configuration?.resultValue || 0) + 
    //     //   (analisisDesignPre?.responseCustomisationDesign.customisationBuild?.resultValue || 0) + 
    //     //   (analisisDesignPre?.responseIntegration.integration?.resultValue || 0)
    //     // const mustShouldCal = 
    //     //   (analisisDesignPre?.responseCustomRequirementDesign?.customRequirementBuild?.resultValueMS || 0) + 
    //     //   (analisisDesignPre?.responseAnalisisDesign?.configuration?.resultValueMS || 0) + 
    //     //   (analisisDesignPre?.responseCustomisationDesign.customisationBuild?.resultValueMS || 0) + 
    //     //   (analisisDesignPre?.responseIntegration.integration?.resultValueMS || 0)
    //     // const mustShouldCouldCal = 
    //     //   (analisisDesignPre?.responseCustomRequirementDesign?.customRequirementBuild?.resultValueMSC || 0) +
    //     //   (analisisDesignPre?.responseAnalisisDesign?.configuration?.resultValueMSC || 0) + 
    //     //   (analisisDesignPre?.responseCustomisationDesign.customisationBuild?.resultValueMSC || 0) + 
    //     //   (analisisDesignPre?.responseIntegration.integration?.resultValueMSC || 0)
    //     // console.log('mmm ==> ', mustCal, mustShouldCal, mustShouldCal);
    //     const F4Parameter = hoursPerday * 5;
    //     const O37 = 0// to find this we need to complete Estimate Avg Rate Milestone table
    //     const H6 = 29// if days === c2 => O37/5 else (O37/8)/5
    //     const h8 = 1123.176 // need to gets it from api
    //     const g8 = 1217.546
    //     const f8 = 1406.438
        
    //     // not done yet
    //     if (percentData?.[parameterModel[0]?.solutionArchitectureType] === percentData?.[100000002]) { // hours
    //       const hoursResult = condition ? 
    //       (romParameter == "Hours" ? parameterModel[0]?.solutionArchitecture : parameterModel[0]?.solutionArchitecture/parameterModel[0]?.hoursPerday) * (parameterModel[0]?.hoursPerday * parameterModel[0]?.hourlyRate?.value) :
    //       (romParameter == "Hours" ? parameterModel[0]?.solutionArchitecture : parameterModel[0]?.solutionArchitecture/parameterModel[0]?.hoursPerday) * (parameterModel[0]?.hoursPerday) // if c2 === hours then get direct parameterModel[0]?.solutionArchitecture
    //       returnObject.projectManager.resultValue = hoursResult
    //       returnObject.projectManager.resultValueMS = hoursResult
    //       returnObject.projectManager.resultValueMSC = hoursResult
    //     } else if (percentData?.[parameterModel[0]?.solutionArchitectureType] === percentData?.[100000000]) { // FTE
    //       // dont need yet
    //       // returnObject.projectManager.resultValue = romParameter == "Hours" ?  (parameterModel[0]?.solutionArchitecture * h8) :(parameterModel[0]?.solutionArchitecture * h8)/parameterModel[0]?.hoursPerday // if c2 === hours then get direct (parameterModel[0]?.solutionArchitecture * h8)  // need to find H8
    //       // returnObject.projectManager.resultValueMS = romParameter == "Hours" ? parameterModel[0]?.solutionArchitecture * g8  :(parameterModel[0]?.solutionArchitecture * g8)/parameterModel[0]?.hoursPerday // if c2 === hours then get direct parameterModel[0]?.solutionArchitecture * g8  // need to find G8
    //       // returnObject.projectManager.resultValueMSC = romParameter == "Hours" ? parameterModel[0]?.solutionArchitecture * f8  :(parameterModel[0]?.solutionArchitecture * f8)/parameterModel[0]?.hoursPerday // if c2 === hours then get direct parameterModel[0]?.solutionArchitecture * f8  // need to find F8
    //     } else {
    //       returnObject.projectManager.resultValue = 0
    //       returnObject.projectManager.resultValueMS = 0
    //       returnObject.projectManager.resultValueMSC = 0
    //     }
        
    //     await Promise.all([returnObject])
    //     return returnObject;
    //   }
    // }
    

    
  } catch (error) {
    console.log("generateAnalysisDesignMValue error ==> ", error);
    return returnObject;
  }
}
