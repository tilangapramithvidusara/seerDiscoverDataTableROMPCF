export const checkHasFte = async(parameterModel: any) => {
  try {
    const hasValue = parameterModel.some((obj: any) => {
      if (obj?.collateRequirmentType == 100000000) return true;
      if (obj?.conferenceRoomPilotType == 100000000) return true;
      if (obj?.dataMigrationType == 100000000) return true;
      if (obj?.deployProdType == 100000000) return true;
      if (obj?.deployUatType == 100000000) return true;
      if (obj?.designReviewType == 100000000) return true;
      if (obj?.postGoLiveSupportType == 100000000) return true;
      if (obj?.projectManagementType == 100000000) return true;
      if (obj?.programmeManagerType == 100000000) return true;
      if (obj?.projectSupportType == 100000000) return true;
      if (obj?.reportingType == 100000000) return true;
      if (obj?.solutionArchitectureType == 100000000) return true;
      if (obj?.supportHandOverType == 100000000) return true;
      if (obj?.technicalArchitectType == 100000000) return true;
      if (obj?.testingType == 100000000) return true;
      if (obj?.supportHandOverType == 100000000) return true;
      if (obj?.technicalArchitectType == 100000000) return true;
      if (obj?.trainTheTrainerType == 100000000) return true;
      if (obj?.uatSupportType == 100000000) return true;
      if (obj?.documentlayoutstype == 100000000) return true;
    });
    return hasValue;
  } catch (error) {
    return false;
  }
}

export const checkHasFteParameter = async(settingParameters: any) => {
  try {
    const hasValue = settingParameters?.formattedData?.some((obj: any) => {
      if (obj?.typeValueCurrent == 100000000) return true;
    });
    return hasValue;
  } catch (error) {
    return false;
  }
}