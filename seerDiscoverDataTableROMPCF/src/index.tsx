import * as React from "react";
import TabComponent from "./components/index";

import { arrayGenerator } from "./Utils/SetupDataArray/analysis.design.array.utils";
import { useDispatch, useSelector } from "react-redux";
import { deleteOutputSetAsync, fetchInitialDataAsync } from "./redux/report/reportAsycn";
import { initialFetchFailure, initialFetchSuccess, setEstimateAveRateAnalysisDesign, setEstimateAveRateConfiguration, setEstimateAveRateCusomisationDesign, setEstimateAveRateCustomRequirementBuild, setEstimateAveRateCustomerRequirementDesign, setEstimateAveRateCustomisationBuild, setEstimateAveRateDesignReview, setEstimateAveRateDocumentLayout, setEstimateAveRateIntegration, setImageUrl } from "./redux/report/reportSlice";
import { dataMapper } from "./Utils/RequirmentData/requirement.data.utils";
import { setBaseJson, setLiveBase, setLiveResources, setSnapshotBase } from "./redux/snapshotReport/snapshotReportSlice";
import OverlayComponent from "./components/Overley";
import { loadFinalizeSnapshotsAsync } from "./redux/snapshotReport/snapshoAsync";
import { generateFitGapTotalAndPrecentage } from "./Utils/commonFunc.utils";


function Index({tableContent, context, imageUrl}: {tableContent: any, context: any, imageUrl?: any}) {
  const dispatch = useDispatch();

  const data = useSelector((state: any) => state.report?.initialFetchData); // Base data came from azure function
  const loading = useSelector((state: any) => state.report.loading)
  const [isLoading, setIsloading] = React.useState<boolean>(false);
  const [dataSet, setDataSet] = React.useState<any []>([]) // // Average estimate rate data
  const [dataSetEstimateResource, setDataSetEstimateResource] = React.useState<any []>([]) // Estimate resource data
  const [dataEstimateAverageRateMilestone, setDataEstimateAverageRateMilestone] = React.useState<any[]>([]) // Estimate average rate milestone data
  const [dataEstimateResourceMilestone, setDataEstimateResourceMilestone] = React.useState<any []>([]); // Estimate resource milestone data
  const [documentLayouts, setDocumentLayouts] = React.useState<any []>([]); // document layout data
  const [dataMigrations, setDataMigrations] = React.useState<any []>([]); // data migration data
  const [requirementData, setRequirementData] = React.useState([]); // requirment data
  const [customisationData, setCustomisationData] = React.useState([]); // customisation data
  const [fitGapData, setFitGapData] = React.useState<any []>([]); // fit gap data
  const [fitGapAllMoscowData, setFitGapAllMoscowData] = React.useState<any []>([]); // fit gap data
  const [fitGapGapMoscowData, setFitGapGapMoscowData] = React.useState<any []>([]); // fit gap data
  const [fitGapWithoutGapMoscowData, setFitGapWithoutGapMoscowData] = React.useState<any []>([]); // fit gap data
  const [licenseData, setLicenseData] = React.useState<any []>([])
  // const selectedSnapshot = useSelector((state: any) => state?.snapshot?.selectedSnapshot)
  // const isSnapshotModeEnable = useSelector((state: any) => state?.snapshot?.isSnapshotModeEnable);
  // const showSaveParameters = useSelector((state: any) => state?.snapshot?.showSaveParameters)
  // const showLoadedParameters = useSelector((state: any) => state?.snapshot?.showLoadedParameters)
  // const settingParameters = useSelector((state: any) => state?.snapshot?.settingParameters || []);
  // const snapshotSettingParameters = useSelector((state: any) => state?.snapshot?.snapshotSettingParameters || []);
  // const selectedSnapshotFromDB = useSelector((state: any) => state?.snapshot?.selectedSnapshotFromDB);
  // const selectedBaseJson = useSelector((state: any) => state?.snapshot?.baseJson);

  // NEW STATE
  const liveParameters = useSelector((state: any) => state?.snapshot?.liveParameters); // Live parameter data
  const currentSavedParameters = useSelector((state: any) => state?.snapshot?.currentSavedParameters); // When change snapshot latest saved snapshot parameters data
  const liveResources = useSelector((state: any) => state?.snapshot?.liveResources); // Live resource data
  const currentSavedResources = useSelector((state: any) => state?.snapshot?.currentSavedResources); // When change snapshot latest saved snapshot resource data
  const liveProjectTasks = useSelector((state: any) => state?.snapshot?.liveProjectTasks); // Live project task data
  const currentSavedProjectTasks = useSelector((state: any) => state?.snapshot?.currentSavedProjectTasks); // When change snapshot latest saved snapshot project task data
  // const currentChangingParameters = useSelector((state: any) => state?.snapshot?.currentChangingParameters);
  const snapshotParameters = useSelector((state: any) => state?.snapshot?.snapshotParameters);
  const isLiveValue: boolean = useSelector((state: any) => state?.snapshot?.isLive); // State that maintain current state is live or snapshot
  const snapshotBase = useSelector((state: any) => state?.snapshot?.snapshotBase); // Current snapshot baseline data
  const liveBase = useSelector((state: any) => state?.snapshot?.liveBase) // Live mode baseline data
  const isLoadingSnapshot = useSelector((state: any) => state?.snapshot?.isLoadingSnapshot);

  React.useEffect(() => {
    // When application load fetch initial base data through the azure function
    initialTriggerHandler();
    // saveSnapshotAsync(imageUrl)
  }, []);
  
  React.useMemo(() => {    
    dispatch(setImageUrl(imageUrl));
  }, [imageUrl]);

  // fetch initial base data through the azure function
  const initialTriggerHandler = async() => {
    setIsloading(true)
    const inititalData = await fetchInitialDataAsync();
    if (!inititalData.error) {
      dispatch(initialFetchSuccess(inititalData?.result));
      dispatch(setBaseJson(inititalData?.result))

      // NEW STATE
      dispatch(setLiveBase(inititalData?.result));
      dispatch(setSnapshotBase(inititalData?.result));
    } else {
      setIsloading(false)
      dispatch(initialFetchFailure(inititalData?.result));
    }
  }


  // This is the function contains all the calculation regarding generating all the sheets
  const arrayGeneratorHandler = async(isLive?: boolean, requestObj?: any, mode?: string) => {
    setIsloading(true)

    const modeStatus =  (mode && (mode == 'snapshot' || mode == 'liveRefresh')) ? true : isLive ? !isLive : !isLiveValue;

    // console.log('modeStatus ==> ', modeStatus, requestObj);
    
    
    const requirment: any = dataMapper(modeStatus ? snapshotBase?.OutputData : data?.OutputData);
    const customisation: any = dataMapper(modeStatus ? snapshotBase?.CustomisationModels : data?.CustomisationModels, 'customisation');
    const documentLayouts: any = dataMapper(modeStatus ? snapshotBase?.DocumentlayoutModel : data?.DocumentlayoutModel, 'documentLayouts');
    const dataMigrations: any = dataMapper(modeStatus ? snapshotBase?.DataMigrationModel : data?.DataMigrationModel, 'dataMigrations')

    if (requirment?.length) {
      setRequirementData(requirment?.filter((req: {seer_FitGap: string}) => req?.seer_FitGap !== 'Gap'));
    }
    if (dataMigrations?.length) {
      setDataMigrations(dataMigrations);
    }
    if (documentLayouts?.length) {
      setDocumentLayouts(documentLayouts);
    }
    if (customisation?.length) {
      setCustomisationData(customisation)
    }
    const parameterSet = modeStatus ? (
      (
        requestObj?.formattedData ? {
          formattedData: requestObj?.formattedData,
          currentSavedResources: requestObj?.currentSavedResources,
          currentSavedProjectTasks: requestObj?.currentSavedProjectTasks,
        } : null
      ) || {...currentSavedParameters, currentSavedResources, currentSavedProjectTasks}) : {...liveParameters, currentSavedResources: liveResources, currentSavedProjectTasks: liveProjectTasks};
    // showSaveParameters ? snapshotSettingParameters : settingParameters;
    // console.log('parameterSet => ', parameterSet, modeStatus);
    const dataBundle = modeStatus ? (requestObj?.base || snapshotBase) : (liveBase || data);
    // console.log('(selectedSnapshotFromDB && modeStatus) ==> ', (selectedSnapshotFromDB && modeStatus));
    // console.log('selectedBaseJson opo ==> ', selectedBaseJson);

    // Callback function which handle all the calculations
    arrayGenerator(dataBundle, dispatch, parameterSet, modeStatus)
      .then(async(result: any) => {        
        // Handle the result here        
        const fitGapData = await generateFitGapTotalAndPrecentage(result?.fitGapTab || [])
        setFitGapData(fitGapData || [])
        setFitGapAllMoscowData(result?.fitGapAllMoscowTab || [])
        setFitGapGapMoscowData(result?.fitGapGapMoscowTab || []);
        setFitGapWithoutGapMoscowData(result?.fitGapWithoutGapMoscow || []);

        setLicenseData(result?.licenseTab || [])

        setDataSet(result?.dataEstimateAverageRate ? result?.dataEstimateAverageRate : []);
        setDataSetEstimateResource(result?.dataEstimateResource ? result?.dataEstimateResource : [])
        setDataEstimateAverageRateMilestone(result?.dataEstimateAverageRateMilestone ? result?.dataEstimateAverageRateMilestone : [])
        setDataEstimateResourceMilestone(result?.dataEstimateResourceMilestone ? result?.dataEstimateResourceMilestone : []);
        
        dispatch(setEstimateAveRateAnalysisDesign(result?.reducerValues?.estimageAveRateAnalysisDesignSidePane))
        dispatch(setEstimateAveRateCusomisationDesign(result?.reducerValues?.estimageAveRateCustomisationDesignSidePane));
        dispatch(setEstimateAveRateCustomerRequirementDesign(result?.reducerValues?.estimageAveRateCustomerRequirementDesignSidePane));
        dispatch(setEstimateAveRateCustomerRequirementDesign(result?.reducerValues?.estimageAveRateCustomerDocumentationSidePane));
        dispatch(setEstimateAveRateDesignReview(result?.reducerValues?.estimageAveRateCustomerDesignReviewSidePane));
        dispatch(setEstimateAveRateConfiguration(result?.reducerValues?.estimageAveRateCustomerConfigurationSidePane));
        dispatch(setEstimateAveRateIntegration(result?.reducerValues?.estimageAveRateCustomerIntegrationSidePane));
        dispatch(setEstimateAveRateCustomisationBuild(result?.reducerValues?.estimageAveRateCustomerCustomisationBuildSidePane));
        dispatch(setEstimateAveRateCustomRequirementBuild(result?.reducerValues?.estimageAveRateCustomerCustomRequirementBuildSidePane));
        dispatch(setEstimateAveRateDocumentLayout(result?.reducerValues?.estimageAveRateDocumentLayoutSidePane))

        // Request for get is their any specific finalize snapshot available for specific account (Organization)
        dispatch(loadFinalizeSnapshotsAsync());
        // estimageAveRateDocumentLayoutSidePane
        deleteOutputSetAsync({ OutputSetId: data?.OutputSetId })
        setIsloading(false)
      })
      .catch(error => {
        // Handle any errors here
        setDataSet([]);
        setIsloading(false);
      });
    deleteOutputSetAsync({ OutputSetId: data?.OutputSetId })

  }
// useMemo
  React.useMemo(() => {
    if (data) {
      arrayGeneratorHandler();
    }
  }, 
  [data]);
  // data

  // console.log('dataSet => ', dataSet);
  // console.log('dataSetEstimateResource ==> ', dataSetEstimateResource);
  // console.log('dataEstimateAverageRateMilestone => ', dataEstimateAverageRateMilestone);
  // console.log("dataEstimateResourceMilestone ==> ", dataEstimateResourceMilestone);
  // console.log("requirementData ==> ", requirementData);
  // console.log('customisationData ==> ', customisationData);
  // console.log('documentLayoutsData ==> ', documentLayouts);
  // console.log('dataMigrationData ==> ', dataMigrations);
  
  return (
    <div>
      {loading || isLoading ? (<>
        {<OverlayComponent showOverlay={true}/>}
        </>
        )
      : <TabComponent
          dataSet={dataSet}
          isRefreshing={loading || isLoading}
          dataSetEstimateResource={dataSetEstimateResource}
          dataEstimateAverageRateMilestone={dataEstimateAverageRateMilestone}
          dataEstimateResourceMilestone={dataEstimateResourceMilestone}
          requirementData={requirementData}
          customisationData={customisationData}
          arrayGeneratorHandler={arrayGeneratorHandler}
          documentLayoutsData={documentLayouts}
          dataMigrationData={dataMigrations}
          fitGapData={fitGapData}
          fitGapAllMoscowData={fitGapAllMoscowData}
          fitGapGapMoscowData={fitGapGapMoscowData}
          fitGapWithoutGapMoscowData={fitGapWithoutGapMoscowData}
          licenseData={licenseData}
        />}
    </div>
  )
}

export default React.memo(Index)
