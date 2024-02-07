import * as React from "react";
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import AdvancedTable from "./Table/AdvancedTable";
//Use
// const AdvancedTable = React.lazy(() => import('./Table/AdvancedTable'));
import DropDownButtons from "./Buttons/DropDownButtons";
import ButtonGroups from "./Buttons/ButtonGroups";
import { Box, Button, Grid, Stack} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import RatesAndResources from "./RatesAndResources";
import RiskFactors from "./RiskFactors";
import ProjectROM from "./ProjectROM";
import ProjectMargin from "./ProjectMargin";
import Governance from "./Governance";
import ROMByPhase from "./ROMByPhase";
import FitOrGap from "./FitOrGap";
import { fetchInitialDataAsync } from "../redux/report/reportAsycn";
import { initialFetchFailure, initialFetchSuccess } from "../redux/report/reportSlice";
import Loader from "./Loader/Loader";
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import Settings from "@mui/icons-material/Settings";
import { parameterModelConvertToTableJson } from "../Utils/setting.values.convertor.utils";
import DialogComponent from "./Dialog";
import { setResourceModelDataParameters, setSettingParameters, setShowLoadedParameters, setShowSaveParameters, setStateSnapshot } from "../redux/snapshotReport/snapshotReportSlice";
import { loadSnapshotsAsync, saveInitialSnapshotRecordAsync } from "../redux/snapshotReport/snapshoAsync";
import FormDialog from "./Form";
import { convertJsonToBase64 } from "../Utils/commonFunc.utils";
import SnapShotPopup from "./SnapshotPopup/SnapshotPopup";
import { missingSnapshot } from "../Constants/messages";

const App = ({
  dataSet, onRefreshHandler, isRefreshing, 
  dataSetEstimateResource, 
  dataEstimateAverageRateMilestone, 
  dataEstimateResourceMilestone, 
  requirementData,
  customisationData,
  arrayGeneratorHandler,
  documentLayoutsData,
  dataMigrationData
}: {
  dataSet: any, onRefreshHandler?: any, isRefreshing: boolean, 
  dataSetEstimateResource: any, 
  dataEstimateAverageRateMilestone: any, 
  dataEstimateResourceMilestone: any, 
  requirementData: any,
  customisationData: any,
  arrayGeneratorHandler: any,
  documentLayoutsData: any,
  dataMigrationData: any
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
      label: 'Requirements',
      children: <AdvancedTable data={requirementData} type={'RequirementData'} isLoading={isRefreshing} dataMigrationData={dataMigrationData} documentLayoutsData={documentLayoutsData} />,
    },
    {
      key: '6',
      label: 'Customisations',
      children: <AdvancedTable data={customisationData} type={'CustomisationData'} isLoading={isRefreshing}/>,
    }
    // {
    //   key: '7',
    //   label: 'Document Layouts',
    //   children: <AdvancedTable data={documentLayoutsData} type={'DocumentLayoutsData'} isLoading={isRefreshing}/>,
    // },
    // {
    //   key: '8',
    //   label: 'Data Migrations',
    //   children: <AdvancedTable data={dataMigrationData} type={'DataMigrationData'} isLoading={isRefreshing}/>,
    // }
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
  const hasLoadedData = useSelector((state: any) => state?.report?.hasLoadedData)
  const [isComLoading, setComIsloading] = React.useState<boolean>(isRefreshing || false);
  const [openSettingPopup, setOpenSettingPopup] = React.useState<boolean>(false);
  const selectedSnapshot = useSelector((state: any) => state?.snapshot?.selectedSnapshot)
  // selectedSnapshot
  const isSnapshotModeEnable = useSelector((state: any) => state?.snapshot?.isSnapshotModeEnable);
  const showSaveParameters = useSelector((state: any) => state?.snapshot?.showSaveParameters)
  const showLoadedParameters = useSelector((state: any) => state?.snapshot?.showLoadedParameters)
  const isLiveModeEnable = useSelector((state: any) => state?.snapshot?.isLiveModeEnable)
  const [openSaveSnapshotPopup, setOpenSaveSnapshotPopup] = React.useState(false);
  const baseJson = useSelector((state: any) => state?.snapshot?.baseJson)
  const settingParameters = useSelector((state: any) => state?.snapshot?.settingParameters || []);
  const snapshotSettingParameters = useSelector((state: any) => state?.snapshot?.snapshotSettingParameters || []);
  const [submitFormData, setSubmitFormData] = React.useState({name: "", description: ""});
  const snapshotsList = useSelector((state: any) => state.snapshot.snapshotsList);
  const [openLoadSnapshotModal, setOpenLoadSnapshotModal] = React.useState(false); // Initialize the state for selected item
  const isLoadingSnapshot = useSelector((state: any) => state?.snapshot?.isLoadingSnapshot || []);

  const onChange = (key: string) => {
    console.log(key);
  };

  const initialTriggerHandler = async(e: any) => {
    // e.preventDefault()
    dispatch(setShowSaveParameters(false))
    dispatch(setShowLoadedParameters(false));
    setComIsloading(true)
    const inititalData = await fetchInitialDataAsync();
    if (!inititalData.error) {
      dispatch(initialFetchSuccess(inititalData?.result));
    } else {
      setComIsloading(false)
      dispatch(initialFetchFailure(inititalData?.result));
    }
  }

  const [selectedButton, setSelectedButton] = React.useState((!isLiveModeEnable && showSaveParameters) ? 'button2' : 'button1');
  React.useEffect(() => {    
    setComIsloading(isRefreshing)
  }, [isRefreshing]);

  const formattedSettingHandler = (event: any, initFetchedData: any) => {
    console.log('call formattedSettingHandler');
    
    if (hasLoadedData) {
      // set retrived data as setSettingParameter
    } else {
      const formatedData = parameterModelConvertToTableJson(initFetchedData?.parameterModel);
      dispatch(setSettingParameters(formatedData))
      dispatch(setResourceModelDataParameters(initFetchedData?.resourceModelData))
      console.log('formatedData => ', formatedData);
    } 
    setOpenSettingPopup(true)
  }

  const getSnapshotsListHandler = React.useCallback((info) => {
    // dispatch(loadSnapshotsAsync())
  }, [dispatch])


  // only for check
  React.useMemo(() => {
    console.log('call meee', settingParameters && isSnapshotModeEnable);
    console.log('isSnapshotModeEnable', isSnapshotModeEnable, showSaveParameters, showLoadedParameters);
    // if (isLiveModeEnable) {
    //   arrayGeneratorHandler(isLiveModeEnable);
    // }
    // if (settingParameters && isSnapshotModeEnable || showSaveParameters || showLoadedParameters) {
    if (isSnapshotModeEnable && (showSaveParameters || showLoadedParameters)) {
      // initialTriggerHandler(settingParameters);
      arrayGeneratorHandler();
      dispatch(setStateSnapshot(false))
      // setTimeout(() => {
      //   // arrayGeneratorHandler()
      //   dispatch(setStateSnapshot(false))
      // }, 1000)
      
    }
  }, [
    // settingParameters,
    isSnapshotModeEnable,
    showSaveParameters,
    showLoadedParameters,
    isLiveModeEnable,
  ])
  // export const arrayGenerator = async (initialDataSet: any, dispatch: any, settingParameters?: any, isSnapshotModeEnable?: boolean)

  React.useEffect(() => {
    if(selectedButton === 'button2')  dispatch(loadSnapshotsAsync())
    // else if (selectedButton === 'button1') arrayGeneratorHandler(true);
  }, [selectedButton])

  const handleSaveSnapshot = () => {
    console.log("handleSaveSnapshot");
    if (snapshotSettingParameters.length) {
      setOpenSaveSnapshotPopup(true);
    } else {
      alert(missingSnapshot);
    }
  }

  const onSubmit = () => {
    console.log("Submitted", submitFormData, snapshotSettingParameters);
    if (submitFormData?.name && submitFormData?.description) {
      dispatch(saveInitialSnapshotRecordAsync({
        seerName: submitFormData?.name,
        baseData: convertJsonToBase64(baseJson), 
        snapshotData: convertJsonToBase64(snapshotSettingParameters),
        seerDescription: submitFormData?.description
      }))
    }
  }

  React.useEffect(() => {
    console.log("isLoadingSnapshot BTN", isLoadingSnapshot);
    if(!isLoadingSnapshot) setOpenSaveSnapshotPopup(false);
  }, [isLoadingSnapshot])

  const handleClosePopup = () => {
    setOpenLoadSnapshotModal(false);
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
        <div className="flex-wrpa-start">
        {selectedButton == 'button2' && (
          <div >
            <span className="blue-text">Snapshot Name: </span>
            <span className="gray-text">Unsaved</span>
          </div>
        )}
        </div>
        
        <div className="flex-wrap-end">
          <Box sx={{ m: 2 }} className="flex-wrap-justify m-0">
            <Stack direction="row" className="custom-grid mr-15">
              <Grid className="flex-wrap">
                {/* <InputLabel className="label mr-10">Mode</InputLabel> */}
              </Grid>
              {/* buttonTitles */}
              <ButtonGroups setSelectedButton={setSelectedButton} selectedButton={selectedButton} arrayGeneratorHandler={arrayGeneratorHandler} />
            </Stack>
            {/* <DropDownButtons selectedButton={selectedButton} /> */}
          </Box>
          <div 
          className="flex-wrap-end"
          // className='text-right'
          // style={{margin: '2px', height: '10px !important', fontSize: '11px !important'}}
          >
            <Button title="Refresh" className='btn-primary btn-small mr-10' onClick={(e) => initialTriggerHandler(e)}><AutorenewOutlinedIcon className="btn-icon" /></Button>
            {selectedButton == 'button2' && (
              <div className='text-right'>
                <DropDownButtons selectedButton={selectedButton} handleSaveSnapshot={handleSaveSnapshot} />
                <Button title="Setting" className='btn-primary btn-small' onClick={(e) => {
                formattedSettingHandler(e, initialFetchData);
              
                // getSnapshotsListHandler(initialFetchData);
              }}><Settings className="btn-icon" /></Button>
              </div>
              // <Button title="Setting" className='btn-primary btn-small' onClick={(e) => {
              //   formattedSettingHandler(e, initialFetchData);
              //   getSnapshotsListHandler(initialFetchData);
              // }}><Settings className="btn-icon" /></Button>
            )}
            {
              openLoadSnapshotModal ? 
              <SnapShotPopup snapshots = {snapshotsList} handleClose={handleClosePopup} open={openLoadSnapshotModal}/> : <></>
              
              }
          </div>
        </div> 
      </Grid> 
      <div>
        {openSettingPopup && (
          <DialogComponent setOpenSettingPopup={setOpenSettingPopup} openSettingPopup={openSettingPopup}/>
        )}
      </div>
      <Tabs size="small" defaultActiveKey="1" items={items} onChange={onChange} />
      {
         openSaveSnapshotPopup ? 
         <FormDialog
         handleClickOpen={true}
         handleSubmit={onSubmit}
         setSubmitFormData={setSubmitFormData}
         handleClose={() => setOpenSaveSnapshotPopup(false)}
       /> : <> </>
      }
    </>
  )
}

export default React.memo(App)