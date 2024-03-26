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
  microsoftlicenseName: string;
}

export type LicenseTabItem = {
  licenseName: string;
  quantity: string;
  billingPeriod: string;
  costPrice: string;
  sellPrice: string;
  estimatedPrice: string;
  currency: string;
  currencyKey: string;
}