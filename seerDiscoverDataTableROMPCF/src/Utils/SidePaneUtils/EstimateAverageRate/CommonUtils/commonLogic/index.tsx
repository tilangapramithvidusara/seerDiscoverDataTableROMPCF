/* eslint-disable no-unsafe-optional-chaining */
import { removeDuplicates } from "../../../../commonFunc.utils";

export const commonSidePaneLogic = (selectorForSidePane: any, columnValue: any) => {
    const datatoShow = selectorForSidePane;
    console.log("datatoShowdatatoShow, columnValue", datatoShow, columnValue);
    
    // let totalResultModuleFor_M_MS_MSC: any = [];
    // let totalResultOverideModuleFor_M_MS_MSC: any = [];

    // let totalResultBaseFor_M_MS_MSC: any = [];
    // let totalResultOverrideBaseFor_M_MS_MSC: any = [];

    // for (const type in datatoShow) {
    //     console.log(datatoShow[type])
    //     const uniqueResultModule = removeDuplicates(datatoShow[type]?.resultModule, 'moduleSeerModuleName');
    //     const uniqueresultOverideModule = removeDuplicates(datatoShow[type]?.resultOverideModule, 'moduleSeerModuleName')

    //     if (uniqueResultModule?.length)
    //         totalResultModuleFor_M_MS_MSC = [...totalResultModuleFor_M_MS_MSC, ...uniqueResultModule];
        
    //     if (uniqueresultOverideModule?.length)
    //         totalResultOverideModuleFor_M_MS_MSC = [...totalResultOverideModuleFor_M_MS_MSC, ...uniqueresultOverideModule]
        
    //     if (datatoShow[type]?.resultBase?.length)
    //         totalResultBaseFor_M_MS_MSC = [...totalResultBaseFor_M_MS_MSC, ...datatoShow[type]?.resultBase]

    //     if (datatoShow[type]?.resultOverideBase?.length)
    //         totalResultOverrideBaseFor_M_MS_MSC = [...totalResultOverrideBaseFor_M_MS_MSC, ...datatoShow[type]?.resultOverideBase];
    // }

    // console.log("totalResultModuleFor_M_MS_MSC", totalResultModuleFor_M_MS_MSC)
    // console.log("totalResultOverideModuleFor_M_MS_MSC", totalResultOverideModuleFor_M_MS_MSC)
    // let refacTotalResultOverideModuleFor_M_MS_MSC = totalResultOverideModuleFor_M_MS_MSC?.map((x: any) => {
    //     return {
    //         name: "         " + `${x?.moduleSeerModuleName}`,
    //         value: ""
    //     }
    // });

    // if (columnValue) {
    //     const getColumnObject = datatoShow[columnValue];
    //     const baseValue = getColumnObject?.baseValue;
    //     const moduleValue = getColumnObject?.moduleValue;
    //     const rowsArray = [];

    //     if (moduleValue) rowsArray.push({ name: "Module Estimate value", value: `£${moduleValue}`, rowColor: "#E0E0E0", align: "left" });
    //     if (totalResultModuleFor_M_MS_MSC?.length + totalResultOverideModuleFor_M_MS_MSC?.length) rowsArray.push({ name: "Number of Modules", value: totalResultModuleFor_M_MS_MSC?.length + totalResultOverideModuleFor_M_MS_MSC?.length, rowColor: "#E0E0E0", align: "left" });
    //     if (refacTotalResultOverideModuleFor_M_MS_MSC?.length) rowsArray.push({ name: "Module Overrides", rowColor: "#E0E0E0" });
    //     if (refacTotalResultOverideModuleFor_M_MS_MSC?.length) rowsArray.push(...refacTotalResultOverideModuleFor_M_MS_MSC);
    //     if (baseValue) rowsArray.push({ name: "Requirements Estimate value", value: `£${baseValue}` , rowColor: "#E0E0E0", align: "left" });
    //     if ((totalResultBaseFor_M_MS_MSC?.length + totalResultOverrideBaseFor_M_MS_MSC?.length)) rowsArray.push({ name: "Number of Requirements", value: totalResultBaseFor_M_MS_MSC?.length + totalResultOverrideBaseFor_M_MS_MSC?.length, rowColor: "#E0E0E0", align: "left" });
    //     if (totalResultOverrideBaseFor_M_MS_MSC?.length) rowsArray.push({ name: "Number of Requirement overrides", value: totalResultOverrideBaseFor_M_MS_MSC?.length, rowColor: "#E0E0E0", align: "left" });
    //     return rowsArray
    // }
      
    
    if (columnValue) {
        const getColumnObject = datatoShow[columnValue];
        const baseValue = getColumnObject?.baseValue;
        const moduleValue = getColumnObject?.moduleValue;
        const rowsArray = [];
        const resultBase = datatoShow[columnValue]?.resultBase;
        const resultOverideBase = datatoShow[columnValue]?.resultOverideBase;
        const uniqueData_resultOverideModule = removeDuplicates(getColumnObject?.resultOverideModule, 'moduleSeerModuleName') || [];
        const uniqueData_resultModule = removeDuplicates(getColumnObject?.resultModule, 'moduleSeerModuleName') || [];
        const uniqueData_resultBase = resultBase;
        const uniqueData_resultOverideBase = resultOverideBase;
        const resultOverideModule = uniqueData_resultOverideModule?.map((x: any) => {
            return {
                name: "         " + `${x?.moduleSeerModuleName}`,
                value: "",
                collapse: false,
                id: "Module Overrides"
            }
        });

        if (moduleValue) rowsArray.push({ name: "Module Estimate value", value: `£${moduleValue}`, rowColor: "#E0E0E0", align: "left", collapse: false, header: false, id: "Module Estimate value" });
        if ((uniqueData_resultModule?.length + uniqueData_resultOverideModule?.length)) rowsArray.push({ name: "Number of Modules", value: uniqueData_resultModule?.length + uniqueData_resultOverideModule?.length, rowColor: "#E0E0E0", align: "left" , collapse: false, header: false, id: "Number of Modules"  });
        if (resultOverideModule?.length) rowsArray.push({ name: "Module Overrides", rowColor: "#E0E0E0", collapse: false, id: "Module Overrides" , header: true });
        if (resultOverideModule?.length) rowsArray.push(...resultOverideModule);
        if (baseValue) rowsArray.push({ name: "Requirements Estimate value", value: `£${baseValue}` , rowColor: "#E0E0E0", align: "left" , collapse: false,  header: false });
        if ((uniqueData_resultBase?.length + uniqueData_resultOverideBase?.length)) rowsArray.push({ name: "Number of Requirements", value: uniqueData_resultBase?.length + uniqueData_resultOverideBase?.length, rowColor: "#E0E0E0", align: "left" , collapse: false , header: false , id: "Number of Requirements" });
        if (uniqueData_resultOverideBase?.length) rowsArray.push({ name: "Number of Requirement overrides", value: uniqueData_resultOverideBase?.length, rowColor: "#E0E0E0", align: "left", collapse: false, header: false , id:  "Number of Requirement overrides" });

        return rowsArray
    }
}
