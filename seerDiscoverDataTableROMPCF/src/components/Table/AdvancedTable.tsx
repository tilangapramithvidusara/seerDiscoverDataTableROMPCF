import * as React from 'react';
import { useMemo } from 'react';
import { MaterialReactTable, type MRT_ColumnDef } from 'material-react-table';
import { columnDetails, columnDetailsHOURS, type Person } from '../../Constants/estimateAverageRate';

import { columnFixed } from '../../Utils/CustomColumnGenerator';
import { openSidePane } from '../../Utils/pane.open.utils';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInitialDataAsync } from '../../redux/report/reportAsycn';
import { initialFetchFailure, initialFetchSuccess } from '../../redux/report/reportSlice';
import Loader from '../Loader/Loader';
import { Button, ToggleButton, ToggleButtonGroup } from '@mui/material';
import ButtonGroups from '../Buttons/ButtonGroups';
// import refreshIcon from '../../../images/refresh.png';

import { 
  estimateResourceMustColumnDetails,
  estimateResourceMustColumnDetailsHours,
  estimateResourceMustShouldColumnDetails, 
  estimateResourceMustShouldColumnDetailsHours, 
  estimateResourceMustShouldCouldColumnDetails, 
  estimateResourceMustShouldCouldColumnDetailsHours
} from '../../Constants/estimateResource';
import SwipeableTemporaryDrawer from '../SwipeableDrawer';
// const SwipeableTemporaryDrawer = React.lazy(() => import('../SwipeableDrawer'));
import { dayHoursText, defaultText } from '../../Constants';
import { columnRequirementData } from '../../Constants/requirementsData';
import { columnCustomisationData } from '../../Constants/cutomisationData';
import { columnDataLayoutData } from '../../Constants/dataLayouts';
import { parameterKeyIndex } from '../../Constants/parametersSetting';
import { fitGapColumnsM, fitGapColumnsMS, fitGapColumnsMSC, fitGapMocow } from '../../Constants/fitGap';

const buttonTitles= [
  {title: 'Must', value: 'M'}, {title: 'Must Should', value: "M/S"}, {title: 'Must Should Could', value: 'M/S/C'}
]

const AdvancedTable = ({data, type, dataMigrationData, documentLayoutsData, subData}: {data?: any, isLoading?: boolean, type: string, dataMigrationData?: any, documentLayoutsData?: any, subData?: any}) => {  
  const dispatch = useDispatch();    
  const [isOpenSideDrawer, setIsOpenSideDrawer] = React.useState<boolean>(false);
  const [selectedRow, setSelectedRow] = React.useState();
  const [tabData, setTabData] = React.useState(data);

  const [tableMode, setTableMode] = React.useState(defaultText);
  // const loading = useSelector((state: any) => state.report.loading)
  // const imageUrl = useSelector((state: any) => state.report.imageUrl)
  // const [isRefreshing, setIsRefreshing] = React.useState<boolean>(isLoading || false);
  // const [isComLoading, setComIsloading] = React.useState<boolean>(isLoading || false);
  const [resourceType, setResourceType] = React.useState<string>('Must');  
  const isSnapshotModeEnable = useSelector((state: any) => state?.snapshot?.isSnapshotModeEnable);
  const isLiveModeEnable = useSelector((state: any) => state?.snapshot?.isLiveModeEnable)
  const settingParameters = useSelector((state: any) => state?.snapshot?.settingParameters || []);
  const snapshotSettingParameters = useSelector((state: any) => state?.snapshot?.snapshotSettingParameters || []);
  const showSaveParameters = useSelector((state: any) => state?.snapshot?.showSaveParameters)
  const showLoadedParameters = useSelector((state: any) => state?.snapshot?.showLoadedParameters)
  let currency = useSelector((state: any) => state?.report?.currency)
  const [typeLoader, setTypeLoader] = React.useState(false);  
  const [columnsSet, setColumnSet] = React.useState(
    type == 'RequirementData' ? columnRequirementData : type == 'FitGap' ? fitGapColumnsM : type !== 'Estimate Resource' ? columnDetails : 
  estimateResourceMustColumnDetails
  // estimateResourceMustShouldColumnDetails
  )  
  const reportReducerValues = useSelector((state: any) => state?.report?.estimateAverageRateStoreData);
  const [cellDataForSidePane, setCellDataForSidePane] = React.useState<any>();
  const [sidePaneEnable, setSidePaneEnable] = React.useState(false);

  const [selectedTab, setSelectedTab] = React.useState<string>('RQ')


  // NEW STATES
  const [reloadTable, setReloadTable] = React.useState(false);
  const isLive = useSelector((state: any) => state?.snapshot?.isLive)
  const currentSavedParameters = useSelector((state: any) => state?.snapshot?.currentSavedParameters)
  const isSnapshotLoading = useSelector((state: any) => state?.snapshot?.isSnapshotLoading)

  const columnCreator = () => {
    // setTabData([]);
    const columnCreator = (type == 'CustomisationData') ? columnCustomisationData : 
      (type == 'RequirementData') ? columnRequirementData : 
      (type === 'Estimate Average Rate' && tableMode == defaultText) ? columnDetails : 
      (type === 'DocumentLayoutsData') ? columnDataLayoutData :
      (type === 'DataMigrationData') ? columnDataLayoutData :
      (type === 'Estimate Average Rate' && tableMode == dayHoursText) ? columnDetailsHOURS : 
      (type === 'Estimate Average Rate Milestone' && tableMode == defaultText) ? columnDetails :
      (type === 'Estimate Average Rate Milestone' && tableMode == dayHoursText) ? columnDetailsHOURS :
      (resourceType === 'Must' && type === 'FitGap') ? fitGapColumnsM :
      (resourceType === 'Must' && tableMode == defaultText) ? estimateResourceMustColumnDetails :
      (resourceType === 'Must' && tableMode == dayHoursText) ? estimateResourceMustColumnDetailsHours :
      (resourceType === 'Must Should' && type === 'FitGap') ? fitGapColumnsMS :
      (resourceType === 'Must Should' && tableMode == defaultText) ? estimateResourceMustShouldColumnDetails :
      (resourceType === 'Must Should' && tableMode == dayHoursText) ? estimateResourceMustShouldColumnDetailsHours :
      (resourceType === 'Must Should Could' && type === 'FitGap') ? fitGapColumnsMSC :
      (resourceType === 'Must Should Could' && tableMode == defaultText) ? estimateResourceMustShouldCouldColumnDetails :
      (resourceType === 'Must Should Could' && tableMode == dayHoursText) ? estimateResourceMustShouldCouldColumnDetailsHours : 
      columnDetails;    
    setColumnSet([...columnCreator]);
    // setTimeout(() => {
    //   const newData = [...tabData];
    //   setTabData(newData);
    // }, 100)
    // const newData = [...tabData];
    // setTabData(newData);
  }

  React.useEffect(() => {          
    columnCreator();
    if (type === 'FitGap')
      handleSubTab('FitGap')
  }, [resourceType, type, tableMode, data]) // resourceType

  React.useEffect(() => {
    setReloadTable(false); // Reset reloadTable state after reload
  }, [reloadTable]);
  
  // (!isLiveModeEnable && showSaveParameters) 
  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => {
      const newColumns = columnFixed(columnsSet, tabData, (!isLive) ? (currentSavedParameters?.formattedData[
        parameterKeyIndex.currency
      ]?.currentValue || currency) : currency);
      setReloadTable(true)
      return newColumns
    },
    [columnsSet, currency, isLive, currentSavedParameters, tabData],
  );//columnsSet showSaveParameters, isLiveModeEnable

  const memoizedColumns = useMemo(() => columns, [columns]);  
  
  const handleSubTab = (type: string) => {
    if(type === 'RQ') {
      setColumnSet(columnRequirementData);
      setTabData(data);
    }
    if(type === 'DM') {
      setColumnSet(columnDataLayoutData);
      setTabData(dataMigrationData);
    }
    if(type === 'DL') {
      setColumnSet(columnDataLayoutData);
      setTabData(documentLayoutsData);
    }
    if (type === 'FitGap') {
      if (resourceType === 'Must')
        setColumnSet(fitGapColumnsM)
      if (resourceType === 'Must Should')
        setColumnSet(fitGapColumnsMS)
      if (resourceType === 'Must Should Could')
        setColumnSet(fitGapColumnsMSC)
      setTabData(subData?.fitGapData);
    }
    if (type === 'FitGapAllMoscow') {
      setColumnSet(fitGapMocow)
      setTabData(subData?.fitGapAllMoscowData);
    }
    if (type === 'FitGapGapMoscow') {
      setColumnSet(fitGapMocow)
      setTabData(subData?.fitGapGapMoscowData);
    }
    if (type === 'FitGapWithoutGapMoscow') {
      setColumnSet(fitGapMocow)
      setTabData(subData?.fitGapWithoutGapMoscowData);
    }
    setSelectedTab(type);
  }
  return (
    <>
      {/* {
      // (isRefreshing || isComLoading || isLoading || loading) 
      typeLoader
      && (
        <>
          <div className="blur-background"></div>
          <div className="loader-container">
            <Loader />
          </div>
        </>
      )} */}
      {/* {isSnapshotLoading ? (<>Loading...</>) : ( */}
      <>
        {type != 'RequirementData' && type != 'CustomisationData' && (
          <div>
            <div className='flex-wrap ptb-10 custom-toggle-button'>
            {((type === 'Estimate Resource' || type === 'Estimate Resource Milestone' )) && (
              <div className='text-left'>
                {/* || (type == 'FitGap' && selectedTab === 'FitGap') */}
               
                  <ButtonGroups selectedButton={resourceType} setSelectedButton={
                    setResourceType
                  } numberOfButtons={3} buttonTitles={
                    [
                      {title: 'Must', value: 'M'}, {title: 'Must Should', value: "M/S"}, {title: 'Must Should Could', value: 'M/S/C'}
                    ]
                  //   (type == 'FitGap') ? [
                  //   {title: 'Must', value: 'M'}, {title: 'Must Should', value: "MS"}, {title: 'Must Should Could', value: 'MSC'}
                  // ] : [
                  //   {title: 'Must', value: 'M'}, {title: 'Must Should', value: "M/S"}, {title: 'Must Should Could', value: 'M/S/C'}
                  // ]
                }/>
                
              </div>
              )}
              {type !== 'FitGap' && (
                <div className='text-right'>
                  <ButtonGroups
                    selectedButton={tableMode} 
                    setSelectedButton={setTableMode} 
                    numberOfButtons={2} 
                    buttonTitles={[
                      {title: defaultText, value: 'Cost'}, 
                      {title: dayHoursText, value: 'Effort'}
                    ]}
                  />
                </div>
              )}
              {/* <div className='text-right'>
                <ButtonGroups
                selectedButton={tableMode} 
                setSelectedButton={setTableMode} 
                numberOfButtons={2} 
                buttonTitles={[
                  {title: defaultText, value: 'Cost'}, 
                  {title: dayHoursText, value: 'Effort'}
                ]}/>
              </div> */}
              {/* <div className='text-right'>
                <Button className='btn-default' onClick={(e) => initialTriggerHandler(e)}><img src={imageUrl} className='refresh-icon' alt="icon"/>Refresh</Button>
              </div> */}
            </div>
            <div>
              {isOpenSideDrawer && sidePaneEnable && (
                <SwipeableTemporaryDrawer 
                  anchor='right' 
                  isOpenSideDrawer={isOpenSideDrawer} 
                  setIsOpenSideDrawer={setIsOpenSideDrawer} 
                  data={selectedRow}
                  cellDataForSidePane={cellDataForSidePane}
                  currency={(!isLive) ? (currentSavedParameters?.formattedData[parameterKeyIndex.currency]?.currentValue || currency) : currency}
                />
              )}
              
            </div>
          </div>
        )}
        <div style={{ flexGrow: 0 }}>
          {columns?.length ? (
            <>
            <div> {type === "RequirementData" && 
              <div style={{ display: 'flex', padding: '10px 0' }}>
                <Button style={{ 
                  marginRight: '10px', 
                  fontSize: '10px', 
                  textTransform: 'none' ,
                  backgroundColor: selectedTab === 'RQ' ? '#015BA1' : '#676767', // Change 'green' to the color you want
                  }} onClick={() => handleSubTab("RQ")} variant="contained">Requirements</Button>
                <Button style={{ 
                  marginRight: '10px', 
                  fontSize: '10px', 
                  textTransform: 'none',
                  backgroundColor: selectedTab === 'DM' ? '#015BA1' : '#676767', // Change 'blue' to the color you want
                  }} onClick={() => handleSubTab("DM")} variant="contained">Data Migrations</Button>
                <Button style={{
                  fontSize: '10px',
                  textTransform: 'none',
                  backgroundColor: selectedTab === 'DL' ? '#015BA1' : '#676767', // Change 'red' to the color you want
                  }} onClick={() => handleSubTab("DL")} variant="contained">Document Layouts</Button>
              </div>
            } 
            {
              type === 'FitGap' && (
                <div style={{ display: 'flex', padding: '10px 0' }}>
                <Button style={{ 
                  marginRight: '10px', 
                  fontSize: '10px', 
                  textTransform: 'none' ,
                  backgroundColor: selectedTab === 'FitGap' ? '#015BA1' : '#676767', // Change 'green' to the color you want
                  }} onClick={() => handleSubTab("FitGap")} variant="contained">Fit Gap</Button>
                <Button style={{ 
                  marginRight: '10px', 
                  fontSize: '10px', 
                  textTransform: 'none',
                  backgroundColor: selectedTab === 'FitGapAllMoscow' ? '#015BA1' : '#676767', // Change 'blue' to the color you want
                  }} onClick={() => handleSubTab("FitGapAllMoscow")} variant="contained">All Fit Gap</Button>
                <Button style={{ 
                  marginRight: '10px', 
                  fontSize: '10px', 
                  textTransform: 'none',
                  backgroundColor: selectedTab === 'FitGapGapMoscow' ? '#015BA1' : '#676767', // Change 'blue' to the color you want
                  }} onClick={() => handleSubTab("FitGapGapMoscow")} variant="contained">Gap</Button>
                <Button style={{
                  fontSize: '10px',
                  textTransform: 'none',
                  backgroundColor: selectedTab === 'FitGapWithoutGapMoscow' ? '#015BA1' : '#676767', // Change 'red' to the color you want
                  }} onClick={() => handleSubTab("FitGapWithoutGapMoscow")} variant="contained">Fit/Patial/ISV</Button>
              </div>
              )
            }
              <div className='text-left'>
                {(type == 'FitGap' && selectedTab === 'FitGap') && (
                  <ButtonGroups selectedButton={resourceType} setSelectedButton={
                    setResourceType
                  } numberOfButtons={3} buttonTitles={
                  //   (type == 'FitGap') ? [
                  //   {title: 'Must', value: 'M'}, {title: 'Must Should', value: "MS"}, {title: 'Must Should Could', value: 'MSC'}
                  // ] : [
                  //   {title: 'Must', value: 'M'}, {title: 'Must Should', value: "M/S"}, {title: 'Must Should Could', value: 'M/S/C'}
                  // ]
                  [{title: 'Must', value: 'M'}, {title: 'Must Should', value: "MS"}, {title: 'Must Should Could', value: 'MSC'}]
                  }/>
                )}
              </div>
            </div>
          <MaterialReactTable
            // key={reloadTable ? 'reload' : 'no-reload'} // Key to force re-mounting
            // header-mrt_row_expand-size
            key={reloadTable ? Date.now() : 'no-reload'}
            columns={
              // columns
              memoizedColumns
            }
            data={tabData}
            enableGlobalFilterRankedResults= {true}
            // defaultColumn ={{
            //   // maxSize: 400,
            //   // minSize: 10,
            //   // size: 345, //default size is usually 180
            // }}
            enableColumnVirtualization={false}
            columnResizeMode={'onEnd'}
            enableColumnResizing={true}
            // layoutMode= 'grid-no-grow'
            enableGrouping={(type != 'FitGap' && type != 'RequirementData' && type != 'CustomisationData' && type != 'DocumentLayoutsData' && type != 'DataMigrationData') ? true : false}
            enableStickyHeader
            enableStickyFooter
            enableHiding={true}
            initialState={{
              density: 'compact',
              expanded: true, //expand all groups by default   'M', "M/S", "M/S/C", 
              grouping: (type != 'FitGap' && type != 'RequirementData' && type != 'CustomisationData'  && type != 'DocumentLayoutsData' && type != 'DataMigrationData') ? ['nameCategory'] : [], //an array of columns to group by by default (can be multiple)
              pagination: { pageIndex: 0, pageSize: 100 },
              // sorting: [{ id: 'state', desc: false }, { id: 'state', desc: false }], //sort by state by default
            }}
            // groupedColumnMode={"reorder"}
            // positionExpandColumn={undefined}
            // muiTableHeadCellProps={{
            //   width: '10px'
            // }}
            // pageSizeOptions={[5, 10]}
            // muiTableFooterRowProps={{ sx: { backgroundColor: ' #015BA1' } }}
            muiToolbarAlertBannerChipProps={{ color: 'primary' }}
            muiTableContainerProps={{ sx: { maxHeight: 700 } }}
            muiTableFooterProps={{
              title: 'Total',
              color: 'white',
            }}

            muiTableBodyRowProps={({ row }: {row: any}) => {
              // type === 'Estimate Resource Milestone'
              // Estimate Resource Milestone
              return({
              onClick: (event) => {
                // openSidePane('', row.id, row?.original, false);
                setSelectedRow(row)
                setIsOpenSideDrawer(true)
                
              },
              
              // nameCategory: "Project Risk"
              sx: {
                // hide: row.original.nameCategory == 'Project Manager' || row.original.nameCategory == 'Project Manager' ? true : false,
                // height: row.original.nameCategory == 'Project Manager' ? 0 : 10,
                // lineHeight: row.original.nameCategory == 'Project Manager' ? 0 : 'normal',
                visibility: 
                  // (type === 'Estimate Resource Milestone' || 
                  //   type === "Estimate Average Rate Milestone") && (
                  //     row?.id.includes('nameCategory:')
                  //   ) ? 'hidden' :
                  ((row?.original?.nameCategory == 'Project Manager' && !row.getIsGrouped()) || 
                  (row?.original?.nameCategory == 'Sub Total' && !row.getIsGrouped()) ||
                  (row?.original?.nameCategory == 'Project Risk' && !row.getIsGrouped()))
                  ? 'collapse' : 'visible', // hidden
                // emptyCells: row.original.nameCategory == 'Project Manager' ? 'hide' : 'show',
                // visibility: row.original.nameCategory == 'Project Manager' ? false : true,
                cursor: 'pointer', //you might want to change the cursor too when adding an onClick
                backgroundColor: 
                  (
                    row?.original?.nameCategory == 'Project Risk' && row.getIsGrouped() 
                  // || 
                  // row.original.nameCategory == 'OPERATION' || 
                  // row.original.nameCategory == 'Project Risk' || 
                  // row.original.nameCategory == 'Project Manager' ||
                  // row.original.nameCategory == 'Sub Total'
                  )
                  ? "#FFD042" : row?.original?.nameCategory == 'Sub Total' && row.getIsGrouped() ? '#0E94FD' : (!row.getIsGrouped() && row.original.name == '') ? '#E6E2E1' : row.getIsGrouped() ? '#C1BDBD' : 'white',

                color:
                  ((type === 'Estimate Resource Milestone' || 
                    type === "Estimate Average Rate Milestone") && (
                      row?.id.includes('nameCategory:')
                    )) ?
                    'red' : 'red', // Set text color to transparent to hide it
                },              
              })
            }}

            muiTableFooterRowProps={{ sx: { backgroundColor: ' #015BA1', }, title: 'Total', prefix: 'Total' }}

            muiTableBodyCellProps= {({ cell }) => {              
              return({
                sx: {
                  color:
                  ((type === 'Estimate Resource Milestone' || 
                    type === "Estimate Average Rate Milestone") && (
                      cell?.id.includes('nameCategory:') && 
                      cell?.id.includes('_M') && 
                      !cell?.id.includes('Sub Total') && 
                      !cell?.id.includes('Project Risk')
                    )) ?
                    'transparent' : 'black',
                },
              onClick: () => {
                if ((cell?.row?.original?.nameCategory == 'ANALYSIS & DESIGN' || cell?.row?.original?.nameCategory == 'BUILD') && tableMode === defaultText && type === 'Estimate Average Rate') {
                  setSidePaneEnable(true)
                } else {
                  setSidePaneEnable(false)
                }
                setCellDataForSidePane({
                  cellValue: cell.getValue(),
                  cellId: cell.id,
                  columnId: cell?.column?.id,
                  table: cell?.row?.original?.type,
                  nameCategory: cell?.row?.original?.nameCategory,
                  name: cell?.row?.original?.name,
                });
              },
            })}}
          />
          </>
          ) : (
            <>
          <div className="blur-background"></div>
          <div className="loader-container">
            <Loader />
          </div>
        </>
          )}
          
        </div>
        </>
        {/* ) */}
        {/* } */}
    </>
  );
};

export default React.memo(AdvancedTable);
