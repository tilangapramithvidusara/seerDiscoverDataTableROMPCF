import * as React from "react";
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import InputLabel from '@mui/material/InputLabel';

import AdvancedTable from "./Table/AdvancedTable";
import RatesAndResources from "./RatesAndResources";
import RiskFactors from "./RiskFactors";
import ProjectROM from "./ProjectROM";
import ProjectMargin from "./ProjectMargin";
import Governance from "./Governance";
import ROMByPhase from "./ROMByPhase";
import FitOrGap from "./FitOrGap";

import DropDownButtons from "./Buttons/DropDownButtons";
import ButtonGroups from "./Buttons/ButtonGroups";
import { Box, Chip, Grid, Stack, Typography } from "@mui/material";


const App = ({
  dataSet, onRefreshHandler, isRefreshing, dataSetEstimateResource, dataEstimateAverageRateMilestone, dataEstimateResourceMilestone
}: {dataSet: any, onRefreshHandler?: any, isRefreshing: boolean, dataSetEstimateResource: any, dataEstimateAverageRateMilestone: any, dataEstimateResourceMilestone: any}) => { 

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Estimate Average Rate',
      children: <AdvancedTable data={dataSet} type={'Estimate Average Rate'} isLoading={isRefreshing}/>,
    },
    {
      key: '2',
      label: 'Estimate Average Rate Milestone',
      children: <AdvancedTable data={dataEstimateAverageRateMilestone} type={'Estimate Average Rate Milestone'} isLoading={isRefreshing}/>,
    },
    {
      key: '3',
      label: 'Estimate Resource',
      children: <AdvancedTable data={dataSetEstimateResource} type={'Estimate Resource'} isLoading={isRefreshing}/>,
      // <RatesAndResources/>,
    },
    {
      key: '4',
      label: 'Estimate Resource Milestone',
      children: <AdvancedTable data={dataEstimateResourceMilestone} type={'Estimate Resource Milestone'} isLoading={isRefreshing}/>,
      // <RatesAndResources/>,
    },
    {
      key: '5',
      label: 'Project ROM',
      children: <ProjectROM/>,
    },
    {
      key: '6',
      label: 'Project Margin',
      children: <ProjectMargin/>,
    },
    {
      key: '7',
      label: 'Governance',
      children: <Governance/>,
    },
    {
      key: '8',
      label: 'ROM by Phase',
      children: <ROMByPhase/>,
    },
    {
      key: '9',
      label: 'Fit / Gap',
      children: <FitOrGap/>,
    },
  ];

  const onChange = (key: string) => {
    console.log(key);
  };

  const [selectedButton, setSelectedButton] = React.useState('button1');
  console.log('selectedButton ==> ',  selectedButton);
  

  return (
    <>
      <Grid>
        <Box sx={{ m: 2 }} className="flex-wrap-justify m-0">
          <Stack direction="row" className="custom-grid mr-15">
            <Grid className="flex-wrap">
              <InputLabel className="label mr-10">Mode</InputLabel>
            </Grid>
            <ButtonGroups setSelectedButton={setSelectedButton} selectedButton={selectedButton}/>
          </Stack>
          <DropDownButtons selectedButton={selectedButton}/>
        </Box>
      </Grid>      
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </>
  )
}

export default App