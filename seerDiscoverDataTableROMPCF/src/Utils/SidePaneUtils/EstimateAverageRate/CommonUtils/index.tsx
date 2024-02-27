import { commonSidePaneLogic } from "./commonLogic";
import {
    sidePaneConstants
} from "../../../../Constants/sidePaneConstants";

const {
    ESTIMATE_AVERAGE_TABLE,
    ESTIMATE_AVERAGE_TABLE_ANALYSIS_AND_DESIGN,
    ESTIMATE_AVERAGE_TABLE_ANALYSIS_AND_DESIGN_SECTION,
    BUILD,
    CONFIGURATION,
    CUSTOMIZATION_DESIGN,
    CUSTOMIZATION_BUILD
} = sidePaneConstants

export const CommonUtils : any = {
    [ESTIMATE_AVERAGE_TABLE]: {
        [ESTIMATE_AVERAGE_TABLE_ANALYSIS_AND_DESIGN]: {
            [ESTIMATE_AVERAGE_TABLE_ANALYSIS_AND_DESIGN_SECTION]: (selectorForSidePane: any, columnValue: any, currency: string, isEffort?: boolean) => {
                const _selectorForSidePane = selectorForSidePane?.estimateAverageRateStoreData?.analysisAndDesign;
                return commonSidePaneLogic(_selectorForSidePane, columnValue, currency, isEffort)
            },
            [CUSTOMIZATION_DESIGN]: (selectorForSidePane: any, columnValue: any, currency: string, isEffort?: boolean) => {
                const _selectorForSidePane = selectorForSidePane?.estimateAverageRateStoreData?.customisationDesign;
                return commonSidePaneLogic(_selectorForSidePane, columnValue, currency, isEffort)
            },
        },
        [BUILD]: {
            [CONFIGURATION]: (selectorForSidePane: any, columnValue: any, currency: string, isEffort?: boolean) => {
                const _selectorForSidePane = selectorForSidePane?.estimateAverageRateStoreData?.configuration;
                return commonSidePaneLogic(_selectorForSidePane, columnValue, currency, isEffort)
            },
            [CUSTOMIZATION_BUILD]: (selectorForSidePane: any, columnValue: any, currency: string, isEffort?: boolean) => {
                const _selectorForSidePane = selectorForSidePane?.estimateAverageRateStoreData?.customisationBuild;
                return commonSidePaneLogic(_selectorForSidePane, columnValue, currency, isEffort)
            }
        }
    }
}