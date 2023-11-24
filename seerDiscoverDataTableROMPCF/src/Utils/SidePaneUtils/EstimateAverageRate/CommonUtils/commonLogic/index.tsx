import { removeDuplicates } from "../../../../commonFunc.utils";

export const commonSidePaneLogic = (selectorForSidePane: any, columnValue: any) => {
    const datatoShow = selectorForSidePane;
    console.log("datatoShowdatatoShow", datatoShow);
    console.log("columnValue", columnValue)
    if (columnValue) {
        const baseValue = datatoShow[columnValue]?.baseValue;
        const moduleValue = datatoShow[columnValue]?.moduleValue;
        const resultBase = datatoShow[columnValue]?.resultBase;
        const resultOverideBase = datatoShow[columnValue]?.resultOverideBase;
        const getColumnObject = datatoShow[columnValue];
        const uniqueData_resultOverideModule = removeDuplicates(getColumnObject?.resultOverideModule, 'moduleSeerModuleName') || [];
        const uniqueData_resultModule = removeDuplicates(getColumnObject?.resultModule, 'moduleSeerModuleName') || [];
        const uniqueData_resultBase = resultBase;
        const uniqueData_resultOverideBase = resultOverideBase;
        const resultOverideModule = uniqueData_resultOverideModule?.map((x: any) => {
            return {
                name: "         " + `${x?.moduleSeerModuleName}`,
                value: ""
            }
        });
        const rowsArray = []
        if (moduleValue) rowsArray.push({ name: "Module Estimate value", value: `£${moduleValue}`, rowColor: "#E0E0E0", align: "left" });
        if ((uniqueData_resultModule?.length + uniqueData_resultOverideModule?.length)) rowsArray.push({ name: "Number of Modules", value: uniqueData_resultModule?.length + uniqueData_resultOverideModule?.length, rowColor: "#E0E0E0", align: "left" });
        if (resultOverideModule?.length) rowsArray.push({ name: "Module Overrides", rowColor: "#E0E0E0" });
        if (resultOverideModule?.length) rowsArray.push(...resultOverideModule);
        if (baseValue) rowsArray.push({ name: "Requirements Estimate value", value: `£${baseValue}` , rowColor: "#E0E0E0", align: "left" });
        if ((uniqueData_resultBase?.length + uniqueData_resultOverideBase?.length)) rowsArray.push({ name: "Number of Requirements", value: uniqueData_resultBase?.length + uniqueData_resultOverideBase?.length, rowColor: "#E0E0E0", align: "left" });
        if (uniqueData_resultOverideBase?.length) rowsArray.push({ name: "Number of Requirement overrides", value: uniqueData_resultOverideBase?.length, rowColor: "#E0E0E0", align: "left" });

        return rowsArray
    }
}
