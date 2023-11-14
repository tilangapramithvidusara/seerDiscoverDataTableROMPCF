import * as React from "react";
import TableComponent from './components/Table/App';
import { DataSet } from "./Constants/SampleData";
import AdvancedTable from "./components/Table/AdvancedTable";

import TabComponent from "./components/index";
import { arrayGenerator } from "./Utils/SetupDataArray/analysis.design.array.utils";
import { useDispatch, useSelector } from "react-redux";
import { deleteOutputSetAsync, fetchInitialDataAsync } from "./redux/report/reportAsycn";
import { initialFetchFailure, initialFetchSuccess, setImageUrl } from "./redux/report/reportSlice";
import Loader from "./components/Loader/Loader";


function Index({tableContent, context, imageUrl}: {tableContent: any, context: any, imageUrl?: any}) {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.report?.initialFetchData)
  const loading = useSelector((state: any) => state.report.loading)
  const [isLoading, setIsloading] = React.useState<boolean>(false);
  const [dataSet, setDataSet] = React.useState<any []>([])
  const [dataSetEstimateResource, setDataSetEstimateResource] = React.useState<any []>([])
  const [dataEstimateAverageRateMilestone, setDataEstimateAverageRateMilestone] = React.useState<any[]>([])
  const [dataEstimateResourceMilestone, setDataEstimateResourceMilestone] = React.useState<any []>([]);
  console.log('data set ===> ', data)
  React.useEffect(() => {
    initialTriggerHandler();
  }, []);
  console.log(imageUrl);
  
  React.useMemo(() => {
    console.log(imageUrl);
    
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

  const arrayGeneratorHandler = () => {
    setIsloading(true)
    arrayGenerator(data)
      .then(async(result: any) => {
        // Handle the result here
        setDataSet(result?.dataEstimateAverageRate ? result?.dataEstimateAverageRate : []);
        setDataSetEstimateResource(result?.dataEstimateResource ? result?.dataEstimateResource : [])
        setDataEstimateAverageRateMilestone(result?.dataEstimateAverageRateMilestone ? result?.dataEstimateAverageRateMilestone : [])
        setDataEstimateResourceMilestone(result?.dataEstimateResourceMilestone ? result?.dataEstimateResourceMilestone : []);
        // dispatch(deleteOutputSetAsync({ OutputSetId: data?.OutputSetId }))
        setIsloading(false)
        console.log('dataValue ==> ', result);
      })
      .catch(error => {
        // Handle any errors here
        setDataSet([]);
        setIsloading(false);
      });
    // dispatch(deleteOutputSetAsync({ OutputSetId: data?.OutputSetId }))

    // const dataValue: any = arrayGenerator(data);
    // setDataSet(dataValue);
    // console.log('dataValue ==> ', dataValue);
  }

  React.useMemo(() => {
    if (data) {
      arrayGeneratorHandler()
      // const dataValue = arrayGenerator(data);
      // setDataSet(dataValue);
      // console.log('dataValue ==> ', dataValue);
      
    }
  }, [data]);
  console.log("lopopo ==> ", loading, isLoading, dataSet);
  
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
        />}
      {/* <TabComponent dataSet={dataSet} isRefreshing={loading || isLoading}/> */}
    </div>
  )
}

export default React.memo(Index)
