export interface ReportState {
  initialFetchData: object | null,
  error: string | null,
  loading: boolean,
  analysisAndDesign: object | null,
  imageUrl: any,
  currency: string,
  estimateAverageRateStoreData: {
    analysisAndDesign: {
      M: {
        value: number;
        hourlyRate: number;
        hoursPerday: number;
        subValue: number;
        logic: string;
        shown: string;
      };
      MS: {
        value: number;
        hourlyRate: number;
        hoursPerday: number;
        subValue: number;
        logic: string;
        shown: string;
      };
      MSC: {
        value: number;
        hourlyRate: number;
        hoursPerday: number;
        subValue: number;
        logic: string;
        shown: string;
      };
    }
    
    customisationDesign: null | object;
    customRequirementDesign: null | object;
    documentation: null | object;
    designReview: null | object;
    configuration: null | object;
    integration: null | object;
    customisationBuild: null | object;
    customRequirementBuild: null | object;
    documentLayout: null | object;
    reporting: null | object;
    dataMigration: null | object;
    crp: null | object;
    testing: null | object;
    trainTheTrainer: null | object;
    uatEnvPrep: null | object;
    uatSupport: null | object;
    prodEnvPrep: null | object;
    supportHandoever: null | object;
    endUserTraining: null | object;
    postGoLiveSupport: null | object;
    subTotal: null | object;
    projectManager: null | object;
  },
  estimateAverageRateMilestoneStoreData: object | null,
  estimateResourceStoreData: object | null,
  estimateResourceMilestoneStoreData: object | null,
  accountId: null | string,
  contactId: string | null,
}

declare global {
  interface Window {
    webapi: any;
    createDevopsWorkItemURL: any;
    userId: any;
  }
}