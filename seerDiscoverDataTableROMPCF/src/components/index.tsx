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


const App = () => { 

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Report View',
      children: <AdvancedTable/>,
    },
    {
      key: '2',
      label: 'Rates & Resources',
      children: <RatesAndResources/>,
    },
    {
      key: '3',
      label: 'Risk Factors',
      children: <RiskFactors/>,
    },
    {
      key: '4',
      label: 'Project ROM',
      children: <ProjectROM/>,
    },
    {
      key: '5',
      label: 'Project Margin',
      children: <ProjectMargin/>,
    },
    {
      key: '6',
      label: 'Governance',
      children: <Governance/>,
    },
    {
      key: '7',
      label: 'ROM by Phase',
      children: <ROMByPhase/>,
    },
    {
      key: '8',
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
        <Box sx={{ m: 2 }}>
          <Stack direction="row" spacing={1}>
            <Grid>
              <InputLabel>Mode</InputLabel>
            </Grid>
            <ButtonGroups setSelectedButton={setSelectedButton} selectedButton={selectedButton}/>
          </Stack>
        </Box>
      </Grid>
      <br/>
      
      <DropDownButtons selectedButton={selectedButton}/>
      <br/>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </>
  )
}

export default App