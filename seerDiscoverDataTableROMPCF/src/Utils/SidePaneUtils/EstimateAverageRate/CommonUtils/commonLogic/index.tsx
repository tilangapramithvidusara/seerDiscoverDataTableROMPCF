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
                name: "",
                value: x?.moduleSeerModuleName,
                align: "left"
            }
        });

        return {
            baseValue,
            uniqueData_resultOverideModule,
            uniqueData_resultModule,
            uniqueData_resultOverideBase,
            resultOverideModule,
            uniqueData_resultBase,
            moduleValue
        }
    }
}
