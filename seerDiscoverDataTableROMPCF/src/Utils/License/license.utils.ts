import { licenseObject } from "../../Constants/license";
import { currencyNameData, msTimePeriodData } from "../../Constants/pickListData";
import { LicenseItem } from "../../types/license.types";


export const licenseTabValue = async(initialData: any, condition: boolean, settingParameters?: any, isSnapshotModeEnable?: boolean) => {
  try {
    const licenseData = [];
    const {licensesModel} = initialData;
    let estimateTotal = 0;
    let currency = '';
    const licenseLoop = await licensesModel?.map((licenseItem: LicenseItem) => {
      const {licencePriceSell, licencePriceCost, licenceCount, microsoftLicenseBillingPeriod, seerCurrency, microsoftlicenseName} = licenseItem;
      let objectModel = licenseObject;
      currency = currencyNameData?.[seerCurrency?.value?.name];
      let estimatePriceValue = ((licencePriceSell?.value) + licencePriceCost?.value);
      estimateTotal += estimatePriceValue;
      
      // ${microsoftLicenseBillingPeriod?.value?.value}
      objectModel = {
        ...objectModel,
        licenseName: microsoftlicenseName,
        quantity: `${licenceCount}`,
        billingPeriod: `${msTimePeriodData?.[microsoftLicenseBillingPeriod?.value?.value]}`,
        costPrice: `${currency} ${(licencePriceCost?.value || 0).toFixed(2)}`,
        sellPrice: `${currency} ${(licencePriceSell?.value || 0).toFixed(2)}`,
        estimatedPrice: `${currency} ${(estimatePriceValue || 0).toFixed(2)}`,
        currency: currency,
        currencyKey: seerCurrency?.value?.name
      }
      licenseData.push(objectModel);
    });
    await Promise.all(licenseLoop);
    licenseData.push({
      ...licenseObject,
      estimatedPrice: `${currency} ${(estimateTotal || 0).toFixed(2)}`
    });    
    return licenseData;
  } catch (error) {
    console.log("error License tab ===> ", error)
    return [];
  }
}