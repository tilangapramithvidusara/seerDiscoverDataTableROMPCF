import * as React from 'react';
import { useMemo } from 'react';
import { MaterialReactTable, type MRT_ColumnDef } from 'material-react-table';
// import { columnDetails, data, type Person } from '../../Constants/makeData';
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

const buttonTitles= [
    {title: 'Must', value: 'M'}, {title: 'Must Should', value: "M/S"}, {title: 'Must Should Could', value: 'M/S/C'}
  ]

const AdvancedTable = ({data, type, dataMigrationData, documentLayoutsData}: {data?: any, isLoading?: boolean, type: string, dataMigrationData?: any, documentLayoutsData?: any}) => {  
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
  const currency = useSelector((state: any) => state?.report?.currency)
  const [typeLoader, setTypeLoader] = React.useState(false);
  const [columnsSet, setColumnSet] = React.useState(type == 'RequirementData' ? columnRequirementData : type !== 'Estimate Resource' ? columnDetails : 
  estimateResourceMustColumnDetails
  // estimateResourceMustShouldColumnDetails
  )
  const reportReducerValues = useSelector((state: any) => state?.report?.estimateAverageRateStoreData);
  const [cellDataForSidePane, setCellDataForSidePane] = React.useState<any>();
  const [sidePaneEnable, setSidePaneEnable] = React.useState(false);

  console.log(reportReducerValues);
  
  // const averageM = useMemo(
  //   () => data.reduce((acc: any, curr: any) => acc + curr?.M, 0) / data.length,
  //   [],
  // );
  // const averageMS = useMemo(
  //   () => data.reduce((acc: any, curr: any) => acc + curr?.['M/S'], 0) / data.length,
  //   [],
  // );

  // const averageMSC = useMemo(
  //   () => data.reduce((acc: any, curr: any) => acc + curr['M/S/C'], 0) / data.length,
  //   [],
  // );

  // const maxAge = useMemo(
  //   () => data.reduce((acc, curr) => Math.max(acc, curr.age), 0),
  //   [],
  // );

  // const totalSalary = useMemo(
  //   () => data.reduce((acc, curr) => acc + curr.salary, 0),
  //   [],
  // );

  // const initialTriggerHandler = async(e: any) => {
  //   // e.preventDefault()
  //   setComIsloading(true)
  //   const inititalData = await fetchInitialDataAsync();
  //   if (!inititalData.error) {
  //     dispatch(initialFetchSuccess(inititalData?.result));
  //   } else {
  //     setComIsloading(false)
  //     dispatch(initialFetchFailure(inititalData?.result));
  //   }
  // }

  // React.useEffect(() => {    
  //   setComIsloading(isLoading)
  // }, [isLoading])

  const columnCreator = () => {
    
    const columnCreator = (type == 'CustomisationData') ? columnCustomisationData : 
      (type == 'RequirementData') ? columnRequirementData : 
      (type === 'Estimate Average Rate' && tableMode == defaultText) ? columnDetails : 
      (type === 'DocumentLayoutsData') ? columnDataLayoutData :
      (type === 'DataMigrationData') ? columnDataLayoutData :
      (type === 'Estimate Average Rate' && tableMode == dayHoursText) ? columnDetailsHOURS : 
      (type === 'Estimate Average Rate Milestone' && tableMode == defaultText) ? columnDetails :
      (type === 'Estimate Average Rate Milestone' && tableMode == dayHoursText) ? columnDetailsHOURS :
      (resourceType === 'Must' && tableMode == defaultText) ? estimateResourceMustColumnDetails :
      (resourceType === 'Must' && tableMode == dayHoursText) ? estimateResourceMustColumnDetailsHours :
      (resourceType === 'Must Should' && tableMode == defaultText) ? estimateResourceMustShouldColumnDetails :
      (resourceType === 'Must Should' && tableMode == dayHoursText) ? estimateResourceMustShouldColumnDetailsHours :
      (resourceType === 'Must Should Could' && tableMode == defaultText) ? estimateResourceMustShouldCouldColumnDetails :
      (resourceType === 'Must Should Could' && tableMode == dayHoursText) ? estimateResourceMustShouldCouldColumnDetailsHours : 
      columnDetails;
    
    setColumnSet(columnCreator);
  }

  React.useEffect(() => {      
    columnCreator();
  }, [resourceType, type, tableMode]) // resourceType
  
  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => columnFixed(columnsSet, tabData, currency),
    [columnsSet],
  );//columnsSet
  console.log('llop', columns);
  
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
        {type != 'RequirementData' && type != 'CustomisationData' && (
          <div>
            <div className='flex-wrap ptb-10 custom-toggle-button'>
              <div className='text-left'>
                {(type === 'Estimate Resource' || type === 'Estimate Resource Milestone') && (
                  <ButtonGroups selectedButton={resourceType} setSelectedButton={
                    setResourceType
                  } numberOfButtons={3} buttonTitles={[
                    {title: 'Must', value: 'M'}, {title: 'Must Should', value: "M/S"}, {title: 'Must Should Could', value: 'M/S/C'}
                  ]}/>
                )}
              </div>
              <div className='text-right'>
                <ButtonGroups
                selectedButton={tableMode} 
                setSelectedButton={setTableMode} 
                numberOfButtons={2} 
                buttonTitles={[
                  {title: defaultText, value: 'Cost'}, 
                  {title: dayHoursText, value: 'Effort'}
                ]}/>
              </div>
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
                />
              )}
              
            </div>
          </div>
        )}
        <div style={{ flexGrow: 0 }}>
          {columns?.length ? (
            <>
            <div> {type === "RequirementData" && 
              <div style={{ display: 'flex', marginLeft: '12px' }}>
                <Button style={{ marginRight: '10px', fontSize: '10px', textTransform: 'none'  }} onClick={() => handleSubTab("RQ")} variant="contained">Requirements</Button>
                <Button style={{ marginRight: '10px', fontSize: '10px', textTransform: 'none'  }} onClick={() => handleSubTab("DM")} variant="contained">Data Migrations</Button>
                <Button style={{ fontSize: '10px', textTransform: 'none' }} onClick={() => handleSubTab("DL")} variant="contained">Data Layouts</Button>
              </div>
            } 
            </div>
            <MaterialReactTable
            // header-mrt_row_expand-size
            columns={
              columns
            }
            data={tabData}
            // defaultColumn ={{
            //   // maxSize: 400,
            //   // minSize: 10,
            //   // size: 345, //default size is usually 180
            // }}
            columnResizeMode={'onEnd'}
            enableColumnResizing={true}
            // layoutMode= 'grid-no-grow'
            enableGrouping={(type != 'RequirementData' && type != 'CustomisationData' && type != 'DocumentLayoutsData' && type != 'DataMigrationData') ? true : false}
            enableStickyHeader
            enableStickyFooter
            initialState={{
              density: 'compact',
              expanded: true, //expand all groups by default   'M', "M/S", "M/S/C", 
              grouping: (type != 'RequirementData' && type != 'CustomisationData'  && type != 'DocumentLayoutsData' && type != 'DataMigrationData') ? ['nameCategory'] : [], //an array of columns to group by by default (can be multiple)
              pagination: { pageIndex: 0, pageSize: 100 },
              // sorting: [{ id: 'state', desc: false }, { id: 'state', desc: false }], //sort by state by default
            }}
            // groupedColumnMode={"reorder"}
            // positionExpandColumn={undefined}
            // muiTableHeadCellProps={{
            //   width: '10px'
            // }}
            // pageSizeOptions={[5, 10]}
            muiTableFooterRowProps={{ sx: { backgroundColor: ' #015BA1' } }}
            muiToolbarAlertBannerChipProps={{ color: 'primary' }}
            muiTableContainerProps={{ sx: { maxHeight: 700 } }}
            muiTableFooterProps={{
              title: 'Total',
              color: 'white',
            }}
            // muiTableFooterRowProps={{
            //   // title: 'Total',
            //   footerGroup: 'Total'
            // }}
            muiTableBodyRowProps={({ row }: {row: any}) => {
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
                  
              },
              
              })
            }}
          
            muiTableBodyCellProps= {({ cell }) => ({
              onClick: () => {
                console.log("CCCCCCCC", cell, cell?.row?.original?.nameCategory, cell?.row?.original?.nameCategory);
                if ((cell?.row?.original?.nameCategory == 'ANALYSIS & DESIGN' || cell?.row?.original?.nameCategory == 'BUILD') && tableMode === defaultText && type === 'Estimate Average Rate') {
                  setSidePaneEnable(true)
                } else {
                  setSidePaneEnable(false)
                }
                console.log(cell.getValue(), cell.id);
                setCellDataForSidePane({
                  cellValue: cell.getValue(),
                  cellId: cell.id,
                  columnId: cell?.column?.id,
                  table: cell?.row?.original?.type,
                  nameCategory: cell?.row?.original?.nameCategory,
                  name: cell?.row?.original?.name,
                });
              },
            })}
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
  );
};

export default React.memo(AdvancedTable);
