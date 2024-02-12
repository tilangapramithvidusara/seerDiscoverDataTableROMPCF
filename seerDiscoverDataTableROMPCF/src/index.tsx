import * as React from "react";
import TabComponent from "./components/index";
// const TabComponent = React.lazy(() => import('./components/index'));

import { arrayGenerator } from "./Utils/SetupDataArray/analysis.design.array.utils";
import { useDispatch, useSelector } from "react-redux";
import { deleteOutputSetAsync, fetchInitialDataAsync } from "./redux/report/reportAsycn";
import { initialFetchFailure, initialFetchSuccess, setEstimateAveRateAnalysisDesign, setEstimateAveRateConfiguration, setEstimateAveRateCusomisationDesign, setEstimateAveRateCustomRequirementBuild, setEstimateAveRateCustomerRequirementDesign, setEstimateAveRateCustomisationBuild, setEstimateAveRateDesignReview, setEstimateAveRateDocumentLayout, setEstimateAveRateIntegration, setImageUrl } from "./redux/report/reportSlice";
import Loader from "./components/Loader/Loader";
import { dataMapper } from "./Utils/RequirmentData/requirement.data.utils";
import { saveSnapshotAsync } from "./redux/snapshotReport/snapshoAsync";
import { setBaseJson, setLiveBase, setSnapshotBase } from "./redux/snapshotReport/snapshotReportSlice";


function Index({tableContent, context, imageUrl}: {tableContent: any, context: any, imageUrl?: any}) {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.report?.initialFetchData)
  const loading = useSelector((state: any) => state.report.loading)
  const [isLoading, setIsloading] = React.useState<boolean>(false);
  const [dataSet, setDataSet] = React.useState<any []>([])
  const [dataSetEstimateResource, setDataSetEstimateResource] = React.useState<any []>([])
  const [dataEstimateAverageRateMilestone, setDataEstimateAverageRateMilestone] = React.useState<any[]>([])
  const [dataEstimateResourceMilestone, setDataEstimateResourceMilestone] = React.useState<any []>([]);
  const [documentLayouts, setDocumentLayouts] = React.useState<any []>([]);
  const [dataMigrations, setDataMigrations] = React.useState<any []>([]);
  const [requirementData, setRequirementData] = React.useState([])
  const [customisationData, setCustomisationData] = React.useState([]);
  const selectedSnapshot = useSelector((state: any) => state?.snapshot?.selectedSnapshot)
  const isSnapshotModeEnable = useSelector((state: any) => state?.snapshot?.isSnapshotModeEnable);
  const showSaveParameters = useSelector((state: any) => state?.snapshot?.showSaveParameters)
  const showLoadedParameters = useSelector((state: any) => state?.snapshot?.showLoadedParameters)
  const settingParameters = useSelector((state: any) => state?.snapshot?.settingParameters || []);
  const snapshotSettingParameters = useSelector((state: any) => state?.snapshot?.snapshotSettingParameters || []);
  const selectedSnapshotFromDB = useSelector((state: any) => state?.snapshot?.selectedSnapshotFromDB);
  const selectedBaseJson = useSelector((state: any) => state?.snapshot?.baseJson);

  // NEW STATE
  const liveParameters = useSelector((state: any) => state?.snapshot?.liveParameters);
  const currentSavedParameters = useSelector((state: any) => state?.snapshot?.currentSavedParameters);
  // const currentChangingParameters = useSelector((state: any) => state?.snapshot?.currentChangingParameters);
  const snapshotParameters = useSelector((state: any) => state?.snapshot?.snapshotParameters);
  const isLiveValue: boolean = useSelector((state: any) => state?.snapshot?.isLive);
  const snapshotBase = useSelector((state: any) => state?.snapshot?.snapshotBase);
  const liveBase = useSelector((state: any) => state?.snapshot?.liveBase)

  React.useEffect(() => {
    initialTriggerHandler();
    // saveSnapshotAsync(imageUrl)
  }, []);
  
  React.useMemo(() => {    
    dispatch(setImageUrl(imageUrl));
  }, [imageUrl]);

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

  const arrayGeneratorHandler = async(isLive?: boolean) => {
    setIsloading(true)
    
    const requirment: any = dataMapper(data?.OutputData);
    const customisation: any = dataMapper(data?.CustomisationModels, 'customisation');
    const documentLayouts: any = dataMapper(data?.DocumentlayoutModel, 'documentLayouts');
    const dataMigrations: any = dataMapper(data?.DataMigrationModel, 'dataMigrations')

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
    console.log('+++', isSnapshotModeEnable && settingParameters);
    const modeStatus = !isLiveValue
    console.log('j modeStatus ==> ', modeStatus, isLiveValue);
    
    const parameterSet = modeStatus ? currentSavedParameters : liveParameters;
    // showSaveParameters ? snapshotSettingParameters : settingParameters;
    // console.log('parameterSet => ', parameterSet, modeStatus);
    const dataBundle = modeStatus ? snapshotBase : (liveBase || data);
    // console.log('(selectedSnapshotFromDB && modeStatus) ==> ', (selectedSnapshotFromDB && modeStatus));
    // console.log('selectedBaseJson opo ==> ', selectedBaseJson);
    
    arrayGenerator(dataBundle, dispatch, parameterSet, modeStatus)
      .then(async(result: any) => {
        // Handle the result here
        console.log('llll', result?.reducerValues);
        console.log('ResultDTA', result);

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

    // const dataValue: any = arrayGenerator(data);
    // setDataSet(dataValue);
    // console.log('dataValue ==> ', dataValue);
  }
// useMemo
  React.useMemo(() => {
    if (data) {
      arrayGeneratorHandler();
      // const dataValue = arrayGenerator(data);
      // setDataSet(dataValue);
      // console.log('dataValue ==> ', dataValue);
      
    }
  }, 
  [data]);
  
  return (
    <div>
      {loading || isLoading ? (<>
          <div className="blur-background"></div>
          <div className="loader-container">
            <Loader />
          </div>
        </>)
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
        />}
      {/* <TabComponent dataSet={dataSet} isRefreshing={loading || isLoading}/> */}
    </div>
  )
}

export default React.memo(Index)
