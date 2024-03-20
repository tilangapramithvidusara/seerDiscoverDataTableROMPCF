export type FitGapItem = {
  module: {
    id: string;
    name: string;
  },
  seerMoscow: string, fitGap: string
}

export type FitGapObjectType = {
  moduleName: string;
  moduleId: string;
  fit_M: number;
  isvfit_M: number;
  partial_M: number;
  gap_M: number;
  fit_MS: number;
  isvfit_MS: number;
  partial_MS: number;
  gap_MS: number;
  fit_MSC: number;
  isvfit_MSC: number;
  partial_MSC: number;
  gap_MSC: number;
}

export type FitGapMoscowType = {
  moduleName: string;
  moduleId: string;
  M: number;
  MS: number;
  MSC: number;
}