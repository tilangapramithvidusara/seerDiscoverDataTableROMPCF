import { commonSidePaneLogic } from "./commonLogic";
import {
    sidePaneConstants
} from "../../../../Constants/sidePaneConstants";

const {
    ESTIMATE_AVERAGE_TABLE,
    ESTIMATE_AVERAGE_TABLE_ANALYSIS_AND_DESIGN,
    ESTIMATE_AVERAGE_TABLE_ANALYSIS_AND_DESIGN_SECTION,
    BUILD,
    CONFIGURATION
} = sidePaneConstants

export const CommonUtils : any = {
    [ESTIMATE_AVERAGE_TABLE]: {
        [ESTIMATE_AVERAGE_TABLE_ANALYSIS_AND_DESIGN]: {
            [ESTIMATE_AVERAGE_TABLE_ANALYSIS_AND_DESIGN_SECTION]: (selectorForSidePane: any, columnValue: any) => {
                const _selectorForSidePane = selectorForSidePane?.estimateAverageRateStoreData?.analysisAndDesign;
                return commonSidePaneLogic(_selectorForSidePane, columnValue)
            }
        },
        [BUILD]: {
            [CONFIGURATION]: (selectorForSidePane: any, columnValue: any) => {
                const _selectorForSidePane = selectorForSidePane?.estimateAverageRateStoreData?.configuration;
                return commonSidePaneLogic(_selectorForSidePane, columnValue)
            }
        }
    }
}