import { commonSidePaneLogic } from "./commonLogic";

export const CommonUtils : any = {
    "Estimate Avg Rate": {
        "ANALYSIS & DESIGN": {
            "Analysis and Design": (selectorForSidePane: any, columnValue: any) => {
                const _selectorForSidePane = selectorForSidePane?.estimateAverageRateStoreData?.analysisAndDesign;
                return commonSidePaneLogic(_selectorForSidePane, columnValue)
            }
        },
        "BUILD": {
            "Configuration": (selectorForSidePane: any, columnValue: any) => {
                const _selectorForSidePane = selectorForSidePane?.estimateAverageRateStoreData?.configuration;
                return commonSidePaneLogic(_selectorForSidePane, columnValue)
            }
        }
    }
}