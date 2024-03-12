import * as React from "react";
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import AdvancedTable from "./Table/AdvancedTable";
//Use
// const AdvancedTable = React.lazy(() => import('./Table/AdvancedTable'));
import DropDownButtons from "./Buttons/DropDownButtons";
import ButtonGroups from "./Buttons/ButtonGroups";
import { Box, Button, DialogContent, DialogContentText, Grid, Stack, ToggleButton} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchInitialDataAsync } from "../redux/report/reportAsycn";
import { initialFetchFailure, initialFetchSuccess } from "../redux/report/reportSlice";
import Loader from "./Loader/Loader";
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import Settings from "@mui/icons-material/Settings";
import CheckIcon from '@mui/icons-material/Check';
import { parameterModelConvertToTableJson } from "../Utils/setting.values.convertor.utils";
import DialogComponent from "./Dialog";
import { setCurrentSavedParameters, setCurrentSavedProjectTasks, setCurrentSavedResources, setDoCalculation, setFinalizeSnapshot, setInitiallyCurrentChangingParameters, setInitiallyCurrentChangingProjectTasks, setInitiallyCurrentChangingResources, setIsLive, setIsSnapshotEnable, setIsSnapshotLoading, setLatestChanges, setLatestChangesTime, setLiveBase, setLiveParameters, setLiveProjectTasks, setLiveResources, setLoadedSnapshotDetailsWhenSave, setLoadedSnapshotId, setRecordId, setResourceModelDataParameters, setSettingParameters, setShowLoadedParameters, setShowSaveParameters, setSnapshotBase, setSnapshotLoading, setSnapshotSaveLoacalyOneTime, setStateSnapshot } from "../redux/snapshotReport/snapshotReportSlice";
import { loadSelectedSnapshotAsync, loadSnapshotsAsync, saveInitialSnapshotRecordAsync, saveSnapshotAsync } from "../redux/snapshotReport/snapshoAsync";
import FormDialog from "./Form";
import { convertJsonToBase64 } from "../Utils/commonFunc.utils";
import SnapShotPopup from "./SnapshotPopup/SnapshotPopup";
import { areYouSure, cancel, confirm, createNew, failedToSave, missingSnapshot, snapshotSaveConfirmMessage, successfullySaved, updateAddConfirmationDes, updateConfirmationDes, updateExisting, updatedSnapshotSuccessfully } from "../Constants/messages";
import CustomDialog from "./Dialog/CommonDialog";
import { checkDuplicates } from "../Utils/Validations/check.duplication.utils";
import OverlayComponent from "./Overley";
import { showAlertError, showAlertSuccess } from "../Utils/Alerts";
import { snapshotAPIConstants } from "../Constants/snapshotConstants";
import { seerBasejson, seerUpdatedsnapshotdata } from "../Constants/endPoints";
import { romReportType } from "../Constants/pickListData";

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
  const snapshotResourceModelDataParameters = useSelector((state: any) => state?.snapshot?.snapshotResourceModelDataParameters || []);  
  const [submitFormData, setSubmitFormData] = React.useState({name: "", description: "", seer_isfinalversion: false});

  const snapshotsList = useSelector((state: any) => state.snapshot.snapshotsList);
  const [openLoadSnapshotModal, setOpenLoadSnapshotModal] = React.useState(false); // Initialize the state for selected item
  const isLoadingSnapshot = useSelector((state: any) => state?.snapshot?.isLoadingSnapshot || []);
  const selectedSnapshotFromDB = useSelector((state: any) => state?.snapshot?.selectedSnapshotFromDB);

  // new states
  const [renderCount, setRenderCount] = React.useState(0);
  const [openCustomDialog, setOpenCustomDialog] = React.useState(false);
  const [showOverlaySubmit, setShowOverlaySubmit] = React.useState(false);
  const [showOverlaySave, setShowOverlaySave] = React.useState(false);
  const [showOverlayLoad, setShowOverlayLoad] = React.useState(false);
  const [showOverlayInitLoad, setShowOverlayInitLoad] = React.useState(false);
  const [showOverlayUpdateFlag, setShowOverlayUpdateFlag] = React.useState(false);
  const currentSavedParameters = useSelector((state: any) => state?.snapshot?.currentSavedParameters);
  const currentSavedResources = useSelector((state: any) => state?.snapshot?.currentSavedResources);
  const currentSavedProjectTasks = useSelector((state: any) => state?.snapshot?.currentSavedProjectTasks);
  const latestChanges = useSelector((state: any) => state?.snapshot?.latestChanges);
  const latestChangesTime = useSelector((state: any) => state?.snapshot?.latestChangesTime);
  const snapshotBase = useSelector((state: any) => state?.snapshot?.snapshotBase);
  const loadedSnapshotId = useSelector((state: any) => state?.snapshot?.loadedSnapshotId);
  const doCalculation = useSelector((state: any) => state?.snapshot?.doCalculation);
  const isLive = useSelector((state: any) => state?.snapshot?.isLive);
  const loadedSnapshotDetails = useSelector((state: any) => state?.snapshot?.loadedSnapshotDetails);
  const isSnapshotLoading = useSelector((state: any) => state?.snapshot?.isSnapshotLoading)
  const snapshotSaveLoacalyOneTime = useSelector((state: any) => state?.snapshot?.snapshotSaveLoacalyOneTime);
  const finalizeSnapshot = useSelector((state: any) => state?.snapshot?.finalizeSnapshot);
  const [selected, setSelected] = React.useState<boolean>(finalizeSnapshot ? true : false);
  const [disabled, setDisabled] = React.useState<boolean>((finalizeSnapshot && finalizeSnapshot?.seer_rominportalsnapshotid != loadedSnapshotDetails?.seer_rominportalsnapshotid) ? true : false)
  const [openCustomDialogConfirmUpdate, setOpenCustomDialogConfirmUpdate] = React.useState<boolean>(false)

  console.log('finalizeSnapshot ==> ', finalizeSnapshot)

  const onChange = (key: string) => {
    console.log(key);
  };

  const initialTriggerHandler = async(e: any, countNumber: number, isLive: boolean) => {
    // e.preventDefault()
    // if (countNumber > 1) {
    //   setShowOverlayInitLoad(false);
    //   return;
    // };
    // setShowOverlayInitLoad(true)
    dispatch(setShowSaveParameters(false))
    dispatch(setShowLoadedParameters(false));
    setComIsloading(true)
    const inititalData = await fetchInitialDataAsync();
    if (!inititalData.error) {
      dispatch(initialFetchSuccess(inititalData?.result));

      // NEW STATE
      dispatch(setLiveBase(inititalData?.result));
      dispatch(setSnapshotBase(inititalData?.result));
      if (isLive) {
        const formatedData = parameterModelConvertToTableJson(inititalData?.result?.parameterModel);
        arrayGeneratorHandler(true, {...formatedData, base: inititalData?.result, currentSavedResources: inititalData?.result?.resourceModelData}, 'liveRefresh');
      } else {
        const formatedData = parameterModelConvertToTableJson(inititalData?.result?.parameterModel);
        dispatch(setLatestChanges({
          resourceChanged: false,
          parameterChanged: false,
          projectTaskChanged: false,
        }));
        dispatch(setLiveParameters(formatedData));
        dispatch(setCurrentSavedParameters(formatedData));
        dispatch(setInitiallyCurrentChangingParameters(formatedData))
        dispatch(setLiveResources(inititalData?.result?.resourceModelData))
        dispatch(setCurrentSavedResources(inititalData?.result?.resourceModelData));
        dispatch(setInitiallyCurrentChangingResources(inititalData?.result?.resourceModelData));
        dispatch(setLiveProjectTasks(inititalData?.result?.ProjectTasktModel)); 
        dispatch(setCurrentSavedProjectTasks(inititalData?.result?.ProjectTasktModel))
        dispatch(setInitiallyCurrentChangingProjectTasks(inititalData?.result?.ProjectTasktModel))
        dispatch(setLoadedSnapshotDetailsWhenSave(null));
        dispatch(setLoadedSnapshotId(null));
        dispatch(setSnapshotSaveLoacalyOneTime(false));
        arrayGeneratorHandler(false, {...formatedData, base: inititalData?.result, currentSavedResources: inititalData?.result?.resourceModelData}, 'snapshot')
      }
      
    } else {
      setComIsloading(false)
      dispatch(initialFetchFailure(inititalData?.result));
    }
    // initialTriggerHandler({}, (countNumber + 1), isLive)
  }

  const [selectedButton, setSelectedButton] = React.useState(
    // (!isLiveModeEnable && showSaveParameters) 
    !isLive
    ? 'button2' : 'button1');
  
  React.useEffect(() => {    
    setComIsloading(isRefreshing)
  }, [isRefreshing]);

  React.useEffect(() => {
    finalizeSnapshot ? setSelected(true) : setSelected(false);
    setDisabled((finalizeSnapshot && finalizeSnapshot?.seer_rominportalsnapshotid != loadedSnapshotDetails?.seer_rominportalsnapshotid) ? true : false);
  }, [finalizeSnapshot, loadedSnapshotDetails])

  // React.useEffect(() => {
  //   if (!isSnapshotLoading) {
  //     setShowOverlaySubmit(false);
  //     setShowOverlaySave(false);
  //     setShowOverlayLoad(false)
  //   }
  // }, [isSnapshotLoading]);

  const functionCallHanler = async(functionOne: any, functionTwo: any, parameterOne: any, parameterTwo: any) => {
    await functionOne(parameterOne);
    await functionTwo(parameterTwo);
  }

  React.useEffect(() => {
    if (showOverlaySubmit) {
      submitRecord(submitFormData);
      // setShowOverlaySubmit(false)
      // functionCallHanler(
      //   submitRecord, 
      //   setShowOverlaySubmit, 
      //   submitFormData, 
      //   false
      // );
    }
  }, [showOverlaySubmit])

  React.useEffect(() => {
    if (showOverlaySave) {
      saveHandler(submitFormData);
      // setShowOverlaySave(false)
    }
  }, [showOverlaySave])

  React.useEffect(() => {
    // setShowOverlayLoad(true)
    if (showOverlayLoad) {
      loadSnapshotHanlder();
      setShowOverlayLoad(false)
    }
  }, [showOverlayLoad])

  const afterFinishRequestStateHandler = (state: boolean, message: string) => {
    dispatch(setIsSnapshotLoading(false))
    dispatch(setSnapshotLoading(false))
    setShowOverlaySubmit(false)
    setShowOverlaySave(false)
    setTimeout(() => {
      if (state)
        showAlertSuccess(message);
      else
        showAlertError(message);
    }, 10)
  }

  const saveInitialSnapshotRecordAsyncAPI : any = (info: any) => {
    console.log("init save info ==> ", info);
    
    const url = new URL(window.location.href);
    const queryParameters = url.searchParams;
    // console.log('accountId -=> ', queryParameters.get("accountId"));
    const accountId = localStorage.getItem("accountId") || queryParameters.get(snapshotAPIConstants.ACCOUNT_ID);
    const contactId = localStorage.getItem("userId") || queryParameters.get(snapshotAPIConstants.USER_ID);
  
    return async (dispatch: any) => {
      try {        
        dispatch(setSnapshotLoading(true));

        // NEW STATE
        dispatch(setIsSnapshotLoading(true));
        const record: any = {};
        record[snapshotAPIConstants?.SEER_CREATED_BY_ID] = `/contacts(${contactId})`;
        record[snapshotAPIConstants?.SEER_MODIFIED_BY_ID] = `/contacts(${contactId})`;
        record[snapshotAPIConstants.SEER_ACCOUNT_RECORD_ID] = `/accounts(${accountId})`; // Lookup
        record[snapshotAPIConstants.SEER_CONTACT_RECORD_ID] = `/contacts(${contactId})`; // Lookup
        record.seer_name = info?.seerName; // Text
        record.seer_description = info?.seerDescription;
        record.seer_settingsupdateddate = info?.latestChangesTime; // Text
        record.seer_isfinalversion = info?.seer_isfinalversion; // Boolean
        record.seer_reporttype = romReportType['SMB Rom'];
        // console.log('record ==> ', info?.seerDescription, info?.latestChangesTime, typeof info?.latestChangesTime)

        // console.log('JSON.stringify(record)', JSON.stringify(record));
        

        window.parent.webapi.safeAjax({
          type: "POST",
          contentType: "application/json",
          url: snapshotAPIConstants.INITIAL_SNAPSHOT_URL,
          data: JSON.stringify(record),
          success: function (data: any, textStatus: any, xhr: any) {            
              var newId = xhr.getResponseHeader("entityid");
              dispatch(setRecordId(newId))
              dispatch(saveSnapshotAsyncAPI({requestNumber: 1, recodeId: newId, ...info}))
          },
          error: function (xhr: any, textStatus: any, errorThrown: any) {
            afterFinishRequestStateHandler(false, failedToSave)
            
          }
        });
      } catch (error) {
        afterFinishRequestStateHandler(false, failedToSave)
      } 
    }
  }

  const saveInitialUpdateSnapshotRecordAsyncAPI : any = (info: any) => {
    console.log("update save info ==> ", info);
    const url = new URL(window.location.href);
    const queryParameters = url.searchParams;
    const accountId = localStorage.getItem("accountId") || queryParameters.get(snapshotAPIConstants.ACCOUNT_ID);
    const contactId = localStorage.getItem("userId") || queryParameters.get(snapshotAPIConstants.USER_ID);

    return async (dispatch: any) => {
      try {        
        dispatch(setSnapshotLoading(true));

        // NEW STATE
        dispatch(setIsSnapshotLoading(true));
        const record: any = {};
        record[snapshotAPIConstants?.SEER_MODIFIED_BY_ID] = `/contacts(${contactId})`;
        if (!info?.finalizeUpdate)
          record.seer_settingsupdateddate = info?.latestChangesTime;
        record.seer_isfinalversion = info?.seer_isfinalversion; // Boolean
        // record.seer_reporttype = romReportType['SMB Rom']; // Choice

        window.parent.webapi.safeAjax({
          type: "PATCH",
          contentType: "application/json",
          url: `${snapshotAPIConstants.INITIAL_SNAPSHOT_URL}(${info?.recodeId})`,
          data: JSON.stringify(record),
          success: function (data: any, textStatus: any, xhr: any) {
            console.log('===,,, ==> ', info?.finalizeUpdate);
            
            if (info?.finalizeUpdate) {
                dispatch(loadSnapshotsAsync());
                dispatch(loadSelectedSnapshotAsync({snapshotId: info?.recodeId, arrayGeneratorHandler: info?.arrayGeneratorHandler}))
                dispatch(setShowOverlayUpdateFlag(false))
                afterFinishRequestStateHandler(true, updatedSnapshotSuccessfully)

            } else {
              dispatch(saveSnapshotAsyncAPI({...info}))
            }
            
          },
          error: function (xhr: any, textStatus: any, errorThrown: any) {
            dispatch(setShowOverlayUpdateFlag(false))
            afterFinishRequestStateHandler(false, failedToSave)
            // showAlertError(failedToSave);
            
          }
        });
      } catch (error) {
        dispatch(setShowOverlayUpdateFlag(false))
        afterFinishRequestStateHandler(false, failedToSave)
        // showAlertError(failedToSave);        
      } 
    }
  }
  
  const saveSnapshotAsyncAPI: any = (info: any) => {
    return async (dispatch: any) => {
      try {
        const {requestNumber, recodeId, baseData, snapshotData} = info;
        const endPoint = requestNumber == 1 ? seerBasejson : seerUpdatedsnapshotdata;
        dispatch(setSnapshotLoading(true));
        var fileName = requestNumber == 1 ? encodeURIComponent(`baseJsonData${new Date()}`) : encodeURIComponent(`snapshotJsonData${new Date()}`); // The following characters are not allowed inside a file name: \ / : * ? " < > |
        const url = `${snapshotAPIConstants.INITIAL_SNAPSHOT_URL}(${recodeId})/${endPoint}?x-ms-file-name=`

        // NOTE: the following code converts a Base 64 encoded string to binary data
        var base64Content = requestNumber == 1 ? baseData : snapshotData;
        var byteCharacters = atob(base64Content);
        var byteNumbers = new Array(byteCharacters.length);
        for (var i = 0; i < byteCharacters.length; i++) { byteNumbers[i] = byteCharacters.charCodeAt(i); }
        var fileContent = new Uint8Array(byteNumbers);

        // NOTE: if you get the file using FileReader API "readAsArrayBuffer" the Base 64 conversion is not required
        // var fileContent = new Uint8Array(e.target.result);

        window.parent.webapi.safeAjax({
          type: "PUT", // NOTE: right now Portals requires PUT instead of PATCH for the upload
          url: url + fileName,
          contentType: "application/octet-stream",
          data: fileContent,
          processData: false,
          success: function (data: any, textStatus: any, xhr: any) {
              if(requestNumber === 1){ 
                dispatch(saveSnapshotAsyncAPI({...info, requestNumber: 2}))
                // dispatch(setSnapshotLoading(false));
              }
              else {
                dispatch(setSettingParameters(snapshotData))

                // NEW STATES
                dispatch(setLoadedSnapshotId(recodeId))
                dispatch(setSnapshotBase(baseData));
                dispatch(setLoadedSnapshotDetailsWhenSave({
                  seer_rominportalsnapshotid: recodeId,
                  seer_name: info?.seerName,
                }));
                dispatch(setLatestChanges({
                  latestChanges: {
                    parameterChanged: false,
                    resourceChanged: false,
                    projectTaskChanged: false,
                  }
                }))

                // NEW STATES
                // if (!info?.seer_isfinalversion)
                //   dispatch(setFinalizeSnapshot(null));
                dispatch(loadSnapshotsAsync());
                dispatch(loadSelectedSnapshotAsync({snapshotId: recodeId, arrayGeneratorHandler: info?.arrayGeneratorHandler}))
                afterFinishRequestStateHandler(true, successfullySaved)
              }
          },
          error: function (xhr: any, textStatus: any, errorThrown: any) {
            afterFinishRequestStateHandler(false, failedToSave)
            // showAlertError(failedToSave);
          }
        });
      } catch (error) {
        afterFinishRequestStateHandler(false, failedToSave)
        // showAlertError(failedToSave);      
      } 
    }
  }

  const formattedSettingHandler = (event: any, initFetchedData: any) => {    
    if (hasLoadedData) {
      // set retrived data as setSettingParameter
    } else {
      const formatedData = parameterModelConvertToTableJson(initFetchedData?.parameterModel);
      // NEW STATE
      if (!loadedSnapshotId) {
        const formatedData = parameterModelConvertToTableJson(initFetchedData?.parameterModel);
        dispatch(setLiveParameters(formatedData));
        if (!currentSavedParameters) {
          dispatch(setCurrentSavedParameters(formatedData));
          dispatch(setInitiallyCurrentChangingParameters(formatedData))
        }
        if (!currentSavedResources) {
          dispatch(setCurrentSavedResources(initFetchedData?.resourceModelData));
          dispatch(setInitiallyCurrentChangingResources(initFetchedData?.resourceModelData))
        }
        if (!currentSavedProjectTasks) {
          dispatch(setCurrentSavedProjectTasks(initFetchedData?.ProjectTasktModel))
          dispatch(setInitiallyCurrentChangingProjectTasks(initFetchedData?.ProjectTasktModel))
        }
      }
    }     
    setOpenSettingPopup(true)
  }

  const modeHanlder = (buttonValue: string) => {
    setSelectedButton(buttonValue);
    if(buttonValue == 'button2')  {
      // NEW STATES CHANGES
      dispatch(setIsLive(false))
      dispatch(setIsSnapshotEnable(true))
      // old
      setShowOverlayLoad(true)
      // dispatch(loadSnapshotsAsync())
    } else if (buttonValue == 'button1') {
      dispatch(setIsLive(true))
      dispatch(setIsSnapshotEnable(false))
    }
    setRenderCount(renderCount + 1);
  }

  const loadSnapshotHanlder = React.useCallback((info?: any) => {
    dispatch(loadSnapshotsAsync(info))
  }, [dispatch])

  const saveHandler = React.useCallback((info: {name: string, description: string, seer_isfinalversion: boolean}) => {
    setShowOverlaySave(true)
    let latestChangesTimeData = latestChangesTime;
    if (latestChanges?.parameterChanged) {
      latestChangesTimeData = {
        ...latestChangesTimeData,
        parameterChangedTime: new Date().toISOString(),
      }
    }
    if (latestChanges?.resourceChanged) {
      latestChangesTimeData = {
        ...latestChangesTimeData,
        resourceChangedTime: new Date().toISOString(),
      }
    }
    if (latestChanges?.projectTaskChanged) {
      latestChangesTimeData = {
        ...latestChangesTimeData,
        projectTaskChangedTime: new Date().toISOString(),
      }
    }

    // console.log('qaqa ==> ', latestChanges, latestChangesTimeData);
    
    
    dispatch(setLatestChangesTime(latestChangesTimeData))
    
    dispatch(
      // saveSnapshotAsyncAPI({
      saveInitialUpdateSnapshotRecordAsyncAPI({
        requestNumber: 2,
        // 1,
        recodeId: loadedSnapshotId,
        seerName: info?.name,
        baseData: convertJsonToBase64(snapshotBase), 
        snapshotData: convertJsonToBase64({
          ...currentSavedParameters, 
          currentSavedResources,
          currentSavedProjectTasks,
        }),
        seerDescription: info?.description,
        seer_isfinalversion: info?.seer_isfinalversion,
        arrayGeneratorHandler,
        latestChangesTime: JSON.stringify(latestChangesTimeData),
      })
    );
  }, [dispatch])

  const onClickYes = () => {
    dispatch(setIsSnapshotLoading(true))
    setOpenCustomDialog(false)
    // saveHandler(submitFormData)
    setShowOverlaySave(true)
  }

  const onClickNo = () => {
    setOpenSaveSnapshotPopup(true);
    setOpenCustomDialog(false)
  }

  const handleSaveSnapshot = () => {
    // NEW STATES
    if (snapshotSaveLoacalyOneTime ||
      (loadedSnapshotId && currentSavedParameters 
      && currentSavedResources && currentSavedProjectTasks)
      ) {
        if (loadedSnapshotId) {
          setOpenCustomDialog(true)
        } else {
          setOpenSaveSnapshotPopup(true);
        }
        
    } else {
      alert(missingSnapshot);
    }
  }

  const onSubmit = () => {
    if (submitFormData?.name) {
      // NEW STATES
      if (snapshotsList) {
        if (checkDuplicates(snapshotsList, submitFormData?.name, 'seer_name')) {
          alert('Duplicates names are not allowed!')
        } else {
          loadingHandler();
          setSubmitFormData(submitFormData);
          setShowOverlaySubmit(true);
          // submitRecord(submitFormData);
        }
      } else {
        loadingHandler();
        setSubmitFormData(submitFormData);
        setShowOverlaySubmit(true);
        // submitRecord(submitFormData);
      }
      setOpenSaveSnapshotPopup(false)
    } else {
      alert("Fill all mandatory fields!")
    }
  }

  const loadingHandler: any = React.useCallback(() => {
    dispatch(setSnapshotLoading(true));
  }, [dispatch])

  const submitRecord: any = React.useCallback((info: {name: string, description: string, seer_isfinalversion: boolean}) => {
    // setShowOverlaySubmit(true)
    console.log('info ===> ', info);
    
    let latestChangesTimeData = latestChangesTime;
    latestChangesTimeData = {
      ...latestChangesTimeData,
      parameterChangedTime: new Date().toISOString(),
      resourceChangedTime: new Date().toISOString(),
      projectTaskChangedTime: new Date().toISOString(),
    }
    // console.log('qaqa222 ==> ', latestChanges, latestChangesTimeData);
    dispatch(setLatestChangesTime(latestChangesTimeData))
    dispatch(saveInitialSnapshotRecordAsyncAPI({
      seerName: info?.name,
      baseData: convertJsonToBase64(snapshotBase), 
      snapshotData: convertJsonToBase64({
        ...currentSavedParameters, 
        currentSavedResources,
        currentSavedProjectTasks,
      }),
      seerDescription: info?.description,
      seer_isfinalversion: info?.seer_isfinalversion,
      arrayGeneratorHandler,
      latestChangesTime: JSON.stringify(latestChangesTimeData),
    }))
  }, [dispatch])

  const updateFinalizeStateHandler = React.useCallback((info) => {
    setShowOverlayUpdateFlag(true)
    setOpenCustomDialogConfirmUpdate(false);
    setSelected(!selected)
    setSubmitFormData((prev: any) => ({ ...prev, seer_isfinalversion: !selected }))
    dispatch(saveInitialUpdateSnapshotRecordAsyncAPI({
      seer_isfinalversion: !selected,
      finalizeUpdate: true,
      recodeId: loadedSnapshotId,
      arrayGeneratorHandler: arrayGeneratorHandler,
    }));
  }, [dispatch])

  React.useEffect(() => {
    if(!isLoadingSnapshot) setOpenSaveSnapshotPopup(false);
  }, [isLoadingSnapshot])

  const handleClosePopup = () => {
    setOpenLoadSnapshotModal(false);
  }

  // console.log('initialFetchData?.parameterModel[0]?.seer_Enablesnapshots', initialFetchData?.parameterModel[0]?.seer_Enablesnapshots);
  // console.log("initialFetchData?.parameterModel[0]", initialFetchData?.parameterModel[0]);
  // console.log('initialFetchData', initialFetchData);
  
  
  return (
    <>
      {(isRefreshing || isComLoading || loading) && (
        <>
        {<OverlayComponent showOverlay={true}/>}
          {/* <div className="blur-background"></div>
          <div className="loader-container">
            <Loader />
          </div> */}
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
              <>
                <span className="gray-text">{loadedSnapshotDetails?.seer_name}</span>
                {/* {((finalizeSnapshot?.seer_rominportalsnapshotid == loadedSnapshotDetails?.seer_rominportalsnapshotid) || !finalizeSnapshot) && ( */}
                  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    {/* <DialogContentText className='mt-10 d-inline' sx={{ mr: '10px' }}>
                      <label className="flex-wrpa-start">
                        Finalize Snapshot:
                      </label>
                    </DialogContentText>
                      <ToggleButton
                        size="small"
                        value="check"
                        selected={(!disabled && selected)}
                        disabled={finalizeSnapshot && disabled}
                        onChange={(e) => {
                          // need to add popup
                          setOpenCustomDialogConfirmUpdate(true);
                          // setSelected(!selected)
                          // setSubmitFormData((prev: any) => ({ ...prev, seer_isfinalversion: !selected }))
                        }}
                        sx={{
                          p: '4px',
                          '& .MuiToggleButton-root': {
                            padding: '4px',
                          },
                          '& .MuiSvgIcon-root': {
                            fontSize: '18px', // Adjust the size of the check icon
                          },
                        }}
                      >
                        <CheckIcon />
                      </ToggleButton> */}
                      <div>
                        {(finalizeSnapshot && disabled) && (
                          <span className="blue-text">Finalized Snapshot Name: <span className="gray-text">{finalizeSnapshot?.seer_name} </span></span>
                        )}
                      </div>
                  </div>
                  
                {/* )} */}
              </>
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

              {initialFetchData?.parameterModel[0]?.seer_Enablesnapshots && (
                <ButtonGroups setSelectedButton={modeHanlder} selectedButton={selectedButton} arrayGeneratorHandler={arrayGeneratorHandler}  />
              )}
              
            </Stack>
            {/* <DropDownButtons selectedButton={selectedButton} /> */}
          </Box>
          <div 
          className="flex-wrap-end"
          // className='text-right'
          // style={{margin: '2px', height: '10px !important', fontSize: '11px !important'}}
          >
            {/* {selectedButton == 'button1' && ( */}
              <Button title={selectedButton == 'button1' ? "Get Latest" : "Sync With Live Data"} className='btn-blue-outline btn-small mr-10' onClick={(e) => initialTriggerHandler(e, 0, selectedButton == 'button1' ? true : false)}><AutorenewOutlinedIcon className="btn-icon" /></Button>
            {/* )} */}
            
            {selectedButton == 'button2' && (
              <div className='text-right flex-wrap-end'>
                <DropDownButtons currentSavedParameters={currentSavedParameters} selectedButton={selectedButton} handleSaveSnapshot={handleSaveSnapshot} arrayGeneratorHandler={arrayGeneratorHandler} />
                <Button title="Setting" className='btn-blue-outline btn-small mr-10' onClick={(e) => {
                  formattedSettingHandler(e, initialFetchData);
                
                  // getSnapshotsListHandler(initialFetchData);
                }}><Settings className="btn-icon" /></Button>
                {loadedSnapshotDetails && (
                  <ToggleButton
                    className="btn-small btn-blue-outline"
                    size="small"
                    value="check"
                    selected={(!disabled && selected)}
                    disabled={finalizeSnapshot && disabled}
                    onChange={(e) => {
                      // need to add popup
                      setOpenCustomDialogConfirmUpdate(true);
                      // setSelected(!selected)
                      // setSubmitFormData((prev: any) => ({ ...prev, seer_isfinalversion: !selected }))
                    }}
                    sx={{
                      p: '4px',
                      '& .MuiToggleButton-root': {
                        padding: '4px',
                      },
                      '& .MuiSvgIcon-root': {
                        fontSize: '18px', // Adjust the size of the check icon
                      },
                    }}
                  >
                    <CheckIcon />
                  </ToggleButton>
                )}
              </div>
              // <Button title="Setting" className='btn-primary btn-small' onClick={(e) => {
              //   formattedSettingHandler(e, initialFetchData);
              //   getSnapshotsListHandler(initialFetchData);
              // }}><Settings className="btn-icon" /></Button>
            )}
            {
              openLoadSnapshotModal ? 
              <SnapShotPopup finalizeSnapshot={finalizeSnapshot}  snapshots = {snapshotsList} handleClose={handleClosePopup} open={openLoadSnapshotModal}/> : <></>
              
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
      {(showOverlayUpdateFlag || showOverlaySubmit || showOverlayInitLoad || showOverlaySave) && <OverlayComponent showOverlay={showOverlaySubmit || showOverlayInitLoad || showOverlaySave}/>}
      {/* {showOverlaySave && <OverlayComponent showOverlay={showOverlaySave}/>} */}
      {/* {showOverlayLoad && <OverlayComponent showOverlay={showOverlayLoad}/>} */}
      
      {
        openSaveSnapshotPopup ? 
          <FormDialog
            handleClickOpen={true}
            handleSubmit={onSubmit}
            setSubmitFormData={setSubmitFormData}
            handleClose={() => setOpenSaveSnapshotPopup(false)}
            finalizeSnapshot={finalizeSnapshot}
          /> : <> </>
      }
      {openCustomDialog && (
        <CustomDialog 
          title={snapshotSaveConfirmMessage}
          open={openCustomDialog}
          handleClose={() => setOpenCustomDialog(false)}
          buttons={(finalizeSnapshot && !disabled) ?
            [
              {
                text: createNew,
                action: onClickNo
              },
              {
                text: cancel,
                action: () => setOpenCustomDialog(false)
              }
            ] :
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
      {openCustomDialogConfirmUpdate && (
        <CustomDialog 
          title={areYouSure}
          description={selected ? updateConfirmationDes : updateAddConfirmationDes}
          open={openCustomDialogConfirmUpdate}
          handleClose={() => setOpenCustomDialogConfirmUpdate(false)}
          buttons={[
            {
              text: confirm,
              action: updateFinalizeStateHandler
              // onClickNo
            },
            {
              text: cancel,
              action: () => setOpenCustomDialogConfirmUpdate(false)
            }
          ]
          }
        />
      )}
      
    </>
  )
}

export default React.memo(App)