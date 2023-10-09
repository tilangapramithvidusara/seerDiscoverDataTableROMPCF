import * as React from "react";
import TableComponent from './components/Table/App';
import { DataSet } from "./Constants/SampleData";
import AdvancedTable from "./components/Table/AdvancedTable";

import TabComponent from "./components/index";



export default function App({tableContent}: {tableContent: any}) {
  return (
    <div>
      <TabComponent/>
    </div>
  )
}
