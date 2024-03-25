import { licenseObject } from "../../Constants/license";
import { currencyNameData } from "../../Constants/pickListData";
import { LicenseItem } from "../../types/license.types";


export const licenseTabValue = async(inititlaData: any, condition: boolean, settingParameters?: any, isSnapshotModeEnable?: boolean) => {
  try {
    const licenseData = [];
    const {licensesModel} = inititlaData;
    let estimateTotal = 0;
    let currency = '';
    const licenseLoop = await licensesModel?.map((licenseItem: LicenseItem) => {
      const {licencePriceSell, licencePriceCost, licenceCount, microsoftLicenseBillingPeriod, seerCurrency} = licenseItem;
      let objectModel = licenseObject;
      currency = currencyNameData?.[seerCurrency?.value?.name];
      let estimatePriceValue = ((licencePriceSell?.value) + licencePriceCost?.value);
      estimateTotal += estimatePriceValue;
      objectModel = {
        ...objectModel,
        licenseName: '',
        quantity: `${licenceCount}`,
        buildingPeriod: `${microsoftLicenseBillingPeriod?.value?.value}`,
        costPrice: `${currency} ${licencePriceCost?.value}`,
        sellPrice: `${currency} ${licencePriceSell?.value}`,
        estimatedPrice: `${currency} ${estimatePriceValue}`,
        currency: currency,
        currencyKey: seerCurrency?.value?.name
      }
      licenseData.push(objectModel);
    });
    await Promise.all(licenseLoop);
    licenseData.push({
      ...licenseObject,
      estimatedPrice: `${currency} ${estimateTotal}`
    });

    return licenseData;
  } catch (error) {
    console.log("error License tab ===> ", error)
    return [];
  }
}