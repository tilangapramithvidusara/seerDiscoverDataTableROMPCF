import * as React from "react";
import TableComponent from './components/Table/App';
import { DataSet } from "./Constants/SampleData";
import AdvancedTable from "./components/Table/AdvancedTable";

import TabComponent from "./components/index";
import { arrayGenerator } from "./Utils/SetupDataArray/analysis.design.array.utils";
import { useDispatch, useSelector } from "react-redux";
import { fetchInitialDataAsync } from "./redux/report/reportAsycn";
import { initialFetchFailure, initialFetchSuccess } from "./redux/report/reportSlice";
import Loader from "./components/Loader/Loader";


export default function Index({tableContent, context}: {tableContent: any, context: any}) {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.report?.initialFetchData)
  const loading = useSelector((state: any) => state.report.loading)
  const [isLoading, setIsloading] = React.useState<boolean>(false);
  const [dataSet, setDataSet] = React.useState<any []>([])
  console.log('data set ===> ', data)
  React.useEffect(() => {
    initialTriggerHandler();
  }, []);

  const initialTriggerHandler = async() => {
    setIsloading(true)
    const inititalData = await fetchInitialDataAsync();
    if (!inititalData.error) {
      dispatch(initialFetchSuccess(inititalData?.result));
    } else {
      dispatch(initialFetchFailure(inititalData?.result));
    }
  }

  const arrayGeneratorHandler = () => {
    setIsloading(true)
    arrayGenerator(data)
      .then(result => {
        // Handle the result here
        setDataSet(result);
        setIsloading(false)
        console.log('dataValue ==> ', result);
      })
      .catch(error => {
        // Handle any errors here
        setDataSet([]);
        setIsloading(false);
      });

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
      : <TabComponent dataSet={dataSet} isRefreshing={loading || isLoading} />}
      {/* <TabComponent dataSet={dataSet} isRefreshing={loading || isLoading}/> */}
    </div>
  )
}
