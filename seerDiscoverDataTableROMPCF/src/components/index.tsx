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
import { setCurrentSavedParameters, setDoCalculation, setInitiallyCurrentChangingParameters, setIsLive, setIsSnapshotEnable, setIsSnapshotLoading, setLiveBase, setLiveParameters, setResourceModelDataParameters, setSettingParameters, setShowLoadedParameters, setShowSaveParameters, setSnapshotBase, setStateSnapshot } from "../redux/snapshotReport/snapshotReportSlice";
import { loadSnapshotsAsync, saveInitialSnapshotRecordAsync, saveSnapshotAsync } from "../redux/snapshotReport/snapshoAsync";
import FormDialog from "./Form";
import { convertJsonToBase64 } from "../Utils/commonFunc.utils";
import SnapShotPopup from "./SnapshotPopup/SnapshotPopup";
import { cancel, createNew, missingSnapshot, snapshotSaveConfirmMessage, updateExisting } from "../Constants/messages";
import CustomDialog from "./Dialog/CommonDialog";
import { checkDuplicates } from "../Utils/Validations/check.duplication.utils";

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
  const resourceModelDataParameters = useSelector((state: any) => state?.snapshot?.resourceModelDataParameters || []);
  const snapshotResourceModelDataParameters = useSelector((state: any) => state?.snapshot?.snapshotResourceModelDataParameters || []);  const [submitFormData, setSubmitFormData] = React.useState({name: "", description: ""});
  const snapshotsList = useSelector((state: any) => state.snapshot.snapshotsList);
  const [openLoadSnapshotModal, setOpenLoadSnapshotModal] = React.useState(false); // Initialize the state for selected item
  const isLoadingSnapshot = useSelector((state: any) => state?.snapshot?.isLoadingSnapshot || []);
  const selectedSnapshotFromDB = useSelector((state: any) => state?.snapshot?.selectedSnapshotFromDB);

  // new states
  const [renderCount, setRenderCount] = React.useState(0);
  const [openCustomDialog, setOpenCustomDialog] = React.useState(false);
  const currentSavedParameters = useSelector((state: any) => state?.snapshot?.currentSavedParameters);
  const currentSavedResources = useSelector((state: any) => state?.snapshot?.currentSavedResources);
  const currentSavedProjectTasks = useSelector((state: any) => state?.snapshot?.currentSavedProjectTasks);
  const snapshotBase = useSelector((state: any) => state?.snapshot?.snapshotBase);
  const loadedSnapshotId = useSelector((state: any) => state?.snapshot?.loadedSnapshotId);
  const doCalculation = useSelector((state: any) => state?.snapshot?.doCalculation);
  const isLive = useSelector((state: any) => state?.snapshot?.isLive);
  const loadedSnapshotDetails = useSelector((state: any) => state?.snapshot?.loadedSnapshotDetails);
  const isSnapshotLoading = useSelector((state: any) => state?.snapshot?.isSnapshotLoading)

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

      // NEW STATE
      dispatch(setLiveBase(inititalData?.result));
      dispatch(setSnapshotBase(inititalData?.result));
    } else {
      setComIsloading(false)
      dispatch(initialFetchFailure(inititalData?.result));
    }
  }

  const [selectedButton, setSelectedButton] = React.useState(
    // (!isLiveModeEnable && showSaveParameters) 
    !isLive
    ? 'button2' : 'button1');
  React.useEffect(() => {    
    setComIsloading(isRefreshing)
  }, [isRefreshing]);

  const formattedSettingHandler = (event: any, initFetchedData: any) => {
    console.log('call formattedSettingHandler');
    
    if (hasLoadedData) {
      // set retrived data as setSettingParameter
    } else {
      const formatedData = parameterModelConvertToTableJson(initFetchedData?.parameterModel);
      console.log('pppp222 ==> ', formatedData);
      
      // dispatch(setSettingParameters(formatedData))
      // dispatch(setResourceModelDataParameters(initFetchedData?.resourceModelData))
      // console.log('formatedData => ', formatedData);

      // NEW STATE
      if (!loadedSnapshotId) {
        console.log('dooom');
        const formatedData = parameterModelConvertToTableJson(initFetchedData?.parameterModel);
        dispatch(setLiveParameters(formatedData));
        if (!currentSavedParameters) {
          dispatch(setCurrentSavedParameters(formatedData));
          dispatch(setInitiallyCurrentChangingParameters(formatedData))
        }
        
        console.log('dooom2');
      }
    }
    console.log('p0012122');
     
    setOpenSettingPopup(true)
    console.log('p00121221q1q1q');
  }

  const getSnapshotsListHandler = React.useCallback((info) => {
    // dispatch(loadSnapshotsAsync())
  }, [dispatch])


  console.log('112322221==> ', doCalculation,
  snapshotBase,
  currentSavedParameters);
  
  // only for check
  // React.useEffect(() => {
  //   console.log('call meee', settingParameters && isSnapshotModeEnable);
  //   console.log('isSnapshotModeEnable', isSnapshotModeEnable, showSaveParameters, showLoadedParameters, selectedSnapshotFromDB);
  //   // if (isLiveModeEnable) {
  //   //   arrayGeneratorHandler(isLiveModeEnable);
  //   // }
  //   // if (settingParameters && isSnapshotModeEnable || showSaveParameters || showLoadedParameters) {

  //   // old 
  //   // if (isSnapshotModeEnable && (showSaveParameters || showLoadedParameters || selectedSnapshotFromDB)) {
  //   //   // initialTriggerHandler(settingParameters);
  //   //   arrayGeneratorHandler();
  //   //   dispatch(setStateSnapshot(false))
  //   //   // setTimeout(() => {
  //   //   //   // arrayGeneratorHandler()
  //   //   //   dispatch(setStateSnapshot(false))
  //   //   // }, 1000)
      
  //   // }
  //   // new
  //   if (doCalculation && currentSavedParameters && snapshotBase) {
  //     console.log('fkflflflflf', currentSavedParameters);
  //     dispatch(setDoCalculation(false))
  //     // arrayGeneratorHandler();
  //     // setTimeout(() => {
  //     //   arrayGeneratorHandler();
  //     // }, 1);
  //   }
  // }, [
  //   // settingParameters,
  //   // isSnapshotModeEnable,
  //   // showSaveParameters,
  //   // showLoadedParameters,
  //   // isLiveModeEnable,
  //   // selectedSnapshotFromDB,

  //   doCalculation |
  //   snapshotBase |
  //   currentSavedParameters 
  // ])
  // export const arrayGenerator = async (initialDataSet: any, dispatch: any, settingParameters?: any, isSnapshotModeEnable?: boolean)

  // React.useEffect(() => {
  //   if(selectedButton === 'button2')  {
  //     // NEW STATES CHANGES
  //     dispatch(setIsLive(false))
  //     dispatch(setIsSnapshotEnable(true))
  //     // if (currentSavedParameters || loadedSnapshotId) {
  //     //   // dispatch(setDoCalculation(true))
  //     //   console.log('lo=4');
        
  //     //   arrayGeneratorHandler(false, {...currentSavedParameters, base: snapshotBase})
  //     // }
        

  //     // old
  //     dispatch(loadSnapshotsAsync())
  //   } else if (selectedButton === 'button1') {
  //     dispatch(setIsLive(true))
  //     dispatch(setIsSnapshotEnable(false))
  //     if (renderCount > 0) {
  //       console.log('lo=5');
  //       arrayGeneratorHandler(true);
  //       // dispatch(setDoCalculation(true))
  //     }
        
  //   }
  //   setRenderCount(renderCount + 1);
  //   // else if (selectedButton === 'button1') arrayGeneratorHandler(true);
  // }, [selectedButton])

  const modeHanlder = (buttonValue: string) => {
    setSelectedButton(buttonValue);
    if(buttonValue == 'button2')  {
      // NEW STATES CHANGES
      dispatch(setIsLive(false))
      dispatch(setIsSnapshotEnable(true))
      // if (currentSavedParameters || loadedSnapshotId) {
      //   // dispatch(setDoCalculation(true))
      //   console.log('lo=4');
        
      //   arrayGeneratorHandler(false, {...currentSavedParameters, base: snapshotBase})
      // }
        

      // old
      dispatch(loadSnapshotsAsync())
    } else if (buttonValue == 'button1') {
      dispatch(setIsLive(true))
      dispatch(setIsSnapshotEnable(false))
      if (renderCount > 0) {
        console.log('lo=5');
        // arrayGeneratorHandler(true);
        // dispatch(setDoCalculation(true))
      }
        
    }
    setRenderCount(renderCount + 1);
  }

  const onClickYes = () => {
    dispatch(setIsSnapshotLoading(true))
    setOpenCustomDialog(false)
    dispatch(saveSnapshotAsync({
      requestNumber: 1,
      recodeId: loadedSnapshotId,
      seerName: submitFormData?.name,
      baseData: convertJsonToBase64(snapshotBase), 
      snapshotData: convertJsonToBase64({
        ...currentSavedParameters, 
        // currentSavedResources,
        // currentSavedProjectTasks,
      }),
      seerDescription: submitFormData?.description,
      arrayGeneratorHandler,
    }));
    // setOpenCustomDialog(false)
  }

  const onClickNo = () => {
    setOpenSaveSnapshotPopup(true);
    setOpenCustomDialog(false)
  }

  const handleSaveSnapshot = () => {
    console.log("handleSaveSnapshot");
    // if (snapshotSettingParameters && snapshotResourceModelDataParameters) {
    //   setOpenSaveSnapshotPopup(true);
    // } else {
    //   alert(missingSnapshot);
    // }

    // NEW STATES
    if (currentSavedParameters 
      // && currentSavedResources && currentSavedProjectTasks
      ) {
        if (loadedSnapshotId) {
          setOpenCustomDialog(true)
          // dispatch(setIsSnapshotLoading(true))
          // dispatch(saveSnapshotAsync({
          //   requestNumber: 1,
          //   recodeId: loadedSnapshotId,
          //   seerName: submitFormData?.name,
          //   baseData: convertJsonToBase64(snapshotBase), 
          //   snapshotData: convertJsonToBase64({
          //     ...currentSavedParameters, 
          //     // currentSavedResources,
          //     // currentSavedProjectTasks,
          //   }),
          //   seerDescription: submitFormData?.description,
          //   arrayGeneratorHandler,
          // }))
        } else {
          setOpenSaveSnapshotPopup(true);
        }
        
    } else {
      alert(missingSnapshot);
    }
  }

  const onSubmit = () => {
    console.log("Submitted", submitFormData, snapshotSettingParameters);
    if (submitFormData?.name && submitFormData?.description) {
      // dispatch(saveInitialSnapshotRecordAsync({
      //   seerName: submitFormData?.name,
      //   baseData: convertJsonToBase64(baseJson), 
      //   snapshotData: convertJsonToBase64({...snapshotSettingParameters, snapshotResourceModelDataParameters}),
      //   seerDescription: submitFormData?.description
      // }));

      // NEW STATES
      if (snapshotsList) {
        if (checkDuplicates(snapshotsList, submitFormData?.name, 'seer_name')) {
          alert('Duplicates names are not allowed!')
        } else {
          submitRecord();
        }
      } else {
        submitRecord();
      }
      
      
    }
  }

  const submitRecord = () => {
    dispatch(saveInitialSnapshotRecordAsync({
      seerName: submitFormData?.name,
      baseData: convertJsonToBase64(snapshotBase), 
      snapshotData: convertJsonToBase64({
        ...currentSavedParameters, 
        // currentSavedResources,
        // currentSavedProjectTasks,
      }),
      seerDescription: submitFormData?.description,
      arrayGeneratorHandler,
    }))
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
            {/* {selectedSnapshotFromDB ? (
              <span className="gray-text">{selectedSnapshotFromDB?.seer_name}{loadedSnapshotDetails?.seer_name}</span>
            )  */}
            {loadedSnapshotDetails ? (
              <span className="gray-text">{loadedSnapshotDetails?.seer_name}</span>
            ) : (
              <span className="gray-text">Unsaved</span>
            )}
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
              <ButtonGroups setSelectedButton={modeHanlder} selectedButton={selectedButton} arrayGeneratorHandler={arrayGeneratorHandler}  />
            </Stack>
            {/* <DropDownButtons selectedButton={selectedButton} /> */}
          </Box>
          <div 
          className="flex-wrap-end"
          // className='text-right'
          // style={{margin: '2px', height: '10px !important', fontSize: '11px !important'}}
          >
            {selectedButton == 'button1' && (
              <Button title="Refresh" className='btn-primary btn-small mr-10' onClick={(e) => initialTriggerHandler(e)}><AutorenewOutlinedIcon className="btn-icon" /></Button>
            )}
            
            {selectedButton == 'button2' && (
              <div className='text-right flex-wrap-end'>
                <DropDownButtons selectedButton={selectedButton} handleSaveSnapshot={handleSaveSnapshot} arrayGeneratorHandler={arrayGeneratorHandler} />
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
          <DialogComponent setOpenSettingPopup={setOpenSettingPopup} openSettingPopup={openSettingPopup} arrayGeneratorHandler={arrayGeneratorHandler}/>
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
      {openCustomDialog && (
        <CustomDialog 
          title={snapshotSaveConfirmMessage}
          open={openCustomDialog}
          handleClose={() => setOpenCustomDialog(false)}
          buttons={
            [
              {
                text: updateExisting,
                action: onClickYes
              },
              {
                text: createNew,
                action: onClickNo
              },
              {
                text: cancel,
                action: () => setOpenCustomDialog(false)
              }
            ]
          }
        />
      )}
      
    </>
  )
}

export default React.memo(App)