import { removeDuplicates } from "../../../commonFunc.utils";

export const CommonUtils = (selectorForSidePane: any, columnValue: any) => {
    const datatoShow = selectorForSidePane?.estimateAverageRateStoreData?.analysisAndDesign;
    console.log("datatoShowdatatoShow", datatoShow);
    // const columnValue = cellDataForSidePane?.columnId?.replace(/\//g, '');
    console.log("columnValue", columnValue)
    if (columnValue) {
        const baseValue = datatoShow[columnValue]?.baseValue;
        const moduleValue = datatoShow[columnValue]?.moduleValue;
        const resultBase = datatoShow[columnValue]?.resultBase;
        const resultOverideBase = datatoShow[columnValue]?.resultOverideBase;
        const getColumnObject = datatoShow[columnValue];
        console.log("baseValue", baseValue)
        console.log("datatoShow[columnValue]", datatoShow[columnValue])

        const uniqueData_resultOverideModule = removeDuplicates(getColumnObject?.resultOverideModule, 'moduleSeerModuleName');
        const uniqueData_resultModule = removeDuplicates(getColumnObject?.resultModule, 'moduleSeerModuleName');
        const uniqueData_resultBase = removeDuplicates(resultBase, 'moduleSeerModuleName');
        const uniqueData_resultOverideBase = removeDuplicates(resultOverideBase, 'moduleSeerModuleName');
        console.log("uniqueData_resultOverideModule", uniqueData_resultOverideModule)
        const resultOverideModule = uniqueData_resultOverideModule?.map((x: any) => {
        
            return {
                name: "",
                value: x?.moduleSeerModuleName,
                align: "left"
            }
        });
    }
}