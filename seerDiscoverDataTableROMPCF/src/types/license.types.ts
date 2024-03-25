export type SubValueItem = {
  id: string;
  logicalName: string;
  name: string;
  keyAttributes: any[];
  rowVersion: any;
}

export type SubLicensePeriodItem = {
  attributeLogicalName: string;
  entityLogicalName: string;
  value: {
      value: string;
  }
}

export type SubLicensePriceItem = {
  attributeLogicalName: string;
  entityLogicalName: string;
  value: number
}

export type SubLicenseCurrencyItem = {
  attributeLogicalName: string;
  entityLogicalName: string;
  value: SubValueItem;
}

export type LicenseItem = {
  licenceCount: number;
  microsoftLicenseBillingPeriod: SubLicensePeriodItem;
  licencePriceCost: SubLicensePriceItem;
  licencePriceSell: SubLicensePriceItem;
  seerCurrency: SubLicenseCurrencyItem;
}