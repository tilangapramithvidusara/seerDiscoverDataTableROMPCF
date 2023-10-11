import * as React from "react";
import TableComponent from './components/Table/App';
import { DataSet } from "./Constants/SampleData";
import AdvancedTable from "./components/Table/AdvancedTable";

import TabComponent from "./components/index";
import { arrayGenerator } from "./Utils/SetupDataArray/analysis.design.array.utils";
import { useDispatch, useSelector } from "react-redux";
import { fetchInitialDataAsync } from "./redux/report/reportAsycn";
import { initialFetchFailure, initialFetchSuccess } from "./redux/report/reportSlice";


export default function Index({tableContent, context}: {tableContent: any, context: any}) {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.report?.initialFetchData)
  const [dataSet, setDataSet] = React.useState<any []>([])
  console.log('data set ===> ', data)
  React.useEffect(() => {
    initialTriggerHandler();
  }, []);

  const initialTriggerHandler = async() => {
    const inititalData = await fetchInitialDataAsync();
    if (!inititalData.error) {
      dispatch(initialFetchSuccess(inititalData?.result));
    }
  }

  const arrayGeneratorHandler = () => {
    arrayGenerator(data)
      .then(result => {
        // Handle the result here
        setDataSet(result);
        console.log('dataValue ==> ', result);
      })
      .catch(error => {
        // Handle any errors here
        setDataSet([]);
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

  return (
    <div>
      <TabComponent dataSet={dataSet} />
    </div>
  )
}
