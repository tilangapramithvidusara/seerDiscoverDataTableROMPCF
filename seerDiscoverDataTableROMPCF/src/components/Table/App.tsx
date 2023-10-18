import * as React from "react";
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import CustomTable from "./CustomTable";
import TableWithTotal from "./TableWithCalculation";
import AdvancedTable from "./AdvancedTable";


const App = () => { 

  // const items: TabsProps['items'] = [
  //   {
  //     key: '1',
  //     label: 'Report View',
  //     children: <AdvancedTable/>,
  //   },
  //   {
  //     key: '2',
  //     label: 'Rates & Resources',
  //     children: <AdvancedTable/>,
  //   },
  //   {
  //     key: '3',
  //     label: 'Risk Factors',
  //     children: <AdvancedTable/>,
  //   },
  //   {
  //     key: '4',
  //     label: 'Project ROM',
  //     children: <AdvancedTable/>,
  //   },
  //   {
  //     key: '5',
  //     label: 'Project Margin',
  //     children: <AdvancedTable/>,
  //   },
  //   {
  //     key: '6',
  //     label: 'Governance',
  //     children: <AdvancedTable/>,
  //   },
  //   {
  //     key: '7',
  //     label: 'ROM by Phase',
  //     children: <AdvancedTable/>,
  //   },
  //   {
  //     key: '8',
  //     label: 'Fit / Gap',
  //     children: <AdvancedTable/>,
  //   },
  // ];

  // const onChange = (key: string) => {
  //   console.log(key);
  // };

  return (
    <>
    {/* <Tabs defaultActiveKey="1" items={items} onChange={onChange} /> */}
    </>
  )
}

export default App