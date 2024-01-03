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


function Index({tableContent, context, imageUrl}: {tableContent: any, context: any, imageUrl?: any}) {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.report?.initialFetchData)
  const loading = useSelector((state: any) => state.report.loading)
  const [isLoading, setIsloading] = React.useState<boolean>(false);
  const [dataSet, setDataSet] = React.useState<any []>([])
  const [dataSetEstimateResource, setDataSetEstimateResource] = React.useState<any []>([])
  const [dataEstimateAverageRateMilestone, setDataEstimateAverageRateMilestone] = React.useState<any[]>([])
  const [dataEstimateResourceMilestone, setDataEstimateResourceMilestone] = React.useState<any []>([]);
  const [requirementData, setRequirementData] = React.useState([])
  const [customisationData, setCustomisationData] = React.useState([]);
  const selectedSnapshot = useSelector((state: any) => state?.snapshot?.selectedSnapshot)
  const isSnapshotModeEnable = useSelector((state: any) => state?.snapshot?.isSnapshotModeEnable);
  const settingParameters = useSelector((state: any) => state?.snapshot?.settingParameters || []);

  React.useEffect(() => {
    initialTriggerHandler();
    saveSnapshotAsync(imageUrl)
  }, []);
  
  React.useMemo(() => {    
    dispatch(setImageUrl(imageUrl));
  }, [imageUrl]);

  const initialTriggerHandler = async() => {
    setIsloading(true)
    const inititalData = await fetchInitialDataAsync();
    if (!inititalData.error) {
      dispatch(initialFetchSuccess(inititalData?.result));
    } else {
      setIsloading(false)
      dispatch(initialFetchFailure(inititalData?.result));
    }
  }

  const arrayGeneratorHandler = async() => {
    setIsloading(true)
    
    const requirment: any = dataMapper(data?.OutputData);
    const customisation: any = dataMapper(data?.CustomisationModels, 'customisation');
    if (requirment?.length)
      setRequirementData(requirment);
    if (customisation?.length) {
      setCustomisationData(customisation)
    }
    console.log('+++', isSnapshotModeEnable && settingParameters);
    
    arrayGenerator(data, dispatch, settingParameters, isSnapshotModeEnable)
      .then(async(result: any) => {
        // Handle the result here
        console.log('llll', result?.reducerValues);
        
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
        />}
      {/* <TabComponent dataSet={dataSet} isRefreshing={loading || isLoading}/> */}
    </div>
  )
}

export default React.memo(Index)
