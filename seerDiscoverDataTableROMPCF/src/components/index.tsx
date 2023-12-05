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
import { Box, Button, Chip, Grid, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchInitialDataAsync } from "../redux/report/reportAsycn";
import { initialFetchFailure, initialFetchSuccess } from "../redux/report/reportSlice";
import Loader from "./Loader/Loader";
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import DyanamicTable from "./Table/DyanamicTable";
import { parameterModelConvertToTableJson } from "../Utils/setting.values.convertor.utils";


const App = ({
  dataSet, onRefreshHandler, isRefreshing, 
  dataSetEstimateResource, 
  dataEstimateAverageRateMilestone, 
  dataEstimateResourceMilestone, 
  requirementData,
  customisationData,
}: {
  dataSet: any, onRefreshHandler?: any, isRefreshing: boolean, 
  dataSetEstimateResource: any, 
  dataEstimateAverageRateMilestone: any, 
  dataEstimateResourceMilestone: any, 
  requirementData: any,
  customisationData: any,
}) => { 

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Estimate Average Rate',
      children: <AdvancedTable data={dataSet} type={'Estimate Average Rate'} 
      // isLoading={isRefreshing}
      />,
    },
    {
      key: '2',
      label: 'Estimate Average Rate Milestone',
      children: <AdvancedTable data={dataEstimateAverageRateMilestone} type={'Estimate Average Rate Milestone'} 
      // isLoading={isRefreshing}
      />,
    },
    {
      key: '3',
      label: 'Estimate Resource',
      children: <AdvancedTable data={dataSetEstimateResource} type={'Estimate Resource'} 
      // isLoading={isRefreshing}
      />,
      // <RatesAndResources/>,
    },
    {
      key: '4',
      label: 'Estimate Resource Milestone',
      children: <AdvancedTable data={dataEstimateResourceMilestone} type={'Estimate Resource Milestone'} isLoading={isRefreshing}/>,
      // <RatesAndResources/>,
    },
    { // requirementData
      key: '5',
      label: 'Requirement',
      children: <AdvancedTable data={requirementData} type={'RequirementData'} isLoading={isRefreshing}/>,
    },
    {
      key: '6',
      label: 'Customisation',
      children: <AdvancedTable data={customisationData} type={'CustomisationData'} isLoading={isRefreshing}/>,
    },
    // {
    //   key: '7',
    //   label: 'Governance',
    //   children: <Governance/>,
    // },
    // {
    //   key: '8',
    //   label: 'ROM by Phase',
    //   children: <ROMByPhase/>,
    // },
    // {
    //   key: '9',
    //   label: 'Fit / Gap',
    //   children: <FitOrGap/>,
    // },
  ];

  const dispatch = useDispatch();
  const loading = useSelector((state: any) => state.report.loading)
  const imageUrl = useSelector((state: any) => state.report.imageUrl)
  const initialFetchData = useSelector((state: any) => state.report.initialFetchData);
  const [isComLoading, setComIsloading] = React.useState<boolean>(isRefreshing || false);
  const [openSettingPopup, setOpenSettingPopup] = React.useState<boolean>(false);


  const onChange = (key: string) => {
    console.log(key);
  };

  const initialTriggerHandler = async(e: any) => {
    // e.preventDefault()
    setComIsloading(true)
    const inititalData = await fetchInitialDataAsync();
    if (!inititalData.error) {
      dispatch(initialFetchSuccess(inititalData?.result));
    } else {
      setComIsloading(false)
      dispatch(initialFetchFailure(inititalData?.result));
    }
  }

  const [selectedButton, setSelectedButton] = React.useState('button1');
  React.useEffect(() => {    
    setComIsloading(isRefreshing)
  }, [isRefreshing]);

  const formattedSettingHandler = (event: any, initFetchedData: any) => {
    const formatedData = parameterModelConvertToTableJson(initFetchedData?.parameterModel);
    console.log('formatedData => ', formatedData);
    
  }

  return (
    <>
      {(isRefreshing || isComLoading || loading) && (
        <>
          <div className="blur-background"></div>
          <div className="loader-container">
            <Loader />
          </div>
        </>
      )}
      <Grid className="flex-wrap">
      
        {/* <Box sx={{ m: 2 }} className="flex-wrap-justify m-0">
          <Stack direction="row" className="custom-grid mr-15">
            <Grid className="flex-wrap">
              <InputLabel className="label mr-10">Mode</InputLabel>
            </Grid>
            <ButtonGroups setSelectedButton={setSelectedButton} selectedButton={selectedButton}/>
          </Stack>
          <DropDownButtons selectedButton={selectedButton}/>
        </Box> */}
        <div className='text-right' 
        // style={{margin: '2px', height: '10px !important', fontSize: '11px !important'}}
        >
        <Button className='btn-primary' onClick={(e) => initialTriggerHandler(e)}><AutorenewOutlinedIcon className="btn-icon"/>Refresh</Button>
        {/* {selectedButton == 'button2' && (
          <Button className='btn-primary' onClick={(e) => formattedSettingHandler(e, initialFetchData)}><AutorenewOutlinedIcon className="btn-icon"/>Setting</Button>
        )} */}
      </div>  
      </Grid> 
      <Tabs size="small" defaultActiveKey="1" items={items} onChange={onChange} />
    </>
  )
}

export default React.memo(App)