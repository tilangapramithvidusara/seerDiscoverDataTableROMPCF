import * as React from 'react';
import { useMemo } from 'react';
import { MaterialReactTable, type MRT_ColumnDef } from 'material-react-table';
// import { columnDetails, data, type Person } from '../../Constants/makeData';
import { columnDetails, type Person } from '../../Constants/estimateAverageRate';

import { columnFixed } from '../../Utils/CustomColumnGenerator';
import { openSidePane } from '../../Utils/pane.open.utils';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInitialDataAsync } from '../../redux/report/reportAsycn';
import { initialFetchFailure, initialFetchSuccess } from '../../redux/report/reportSlice';
import Loader from '../Loader/Loader';
import { Button, ToggleButton, ToggleButtonGroup } from '@mui/material';
import ButtonGroups from '../Buttons/ButtonGroups';

import { 
  estimateResourceMustColumnDetails,
  estimateResourceMustShouldColumnDetails, 
  estimateResourceMustShouldCouldColumnDetails 
} from '../../Constants/estimateResource';

const AdvancedTable = ({data, isLoading, type}: {data?: any, isLoading: boolean, type: string}) => {
  console.log('final data ==> ', data);
  const dispatch = useDispatch();
  const loading = useSelector((state: any) => state.report.loading)
  const [isRefreshing, setIsRefreshing] = React.useState<boolean>(isLoading || false);
  const [isComLoading, setComIsloading] = React.useState<boolean>(isLoading || false);
  const [resourceType, setResourceType] = React.useState<string>('Must');

  const [columnsSet, setColumnSet] = React.useState(type === 'Estimate Average Rate' ? columnDetails : estimateResourceMustColumnDetails)
  
  const averageM = useMemo(
    () => data.reduce((acc: any, curr: any) => acc + curr?.M, 0) / data.length,
    [],
  );
  const averageMS = useMemo(
    () => data.reduce((acc: any, curr: any) => acc + curr?.['M/S'], 0) / data.length,
    [],
  );

  const averageMSC = useMemo(
    () => data.reduce((acc: any, curr: any) => acc + curr['M/S/C'], 0) / data.length,
    [],
  );

  // const maxAge = useMemo(
  //   () => data.reduce((acc, curr) => Math.max(acc, curr.age), 0),
  //   [],
  // );

  // const totalSalary = useMemo(
  //   () => data.reduce((acc, curr) => acc + curr.salary, 0),
  //   [],
  // );

  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => 
    columnFixed(columnsSet, data),
    [],
  );

  const onClickHandler = (event: any, rowData: any) => {
    
  }
  console.log('cocococococ ===> ', columns);



  const initialTriggerHandler = async(e: any) => {
    // e.preventDefault()
    setComIsloading(true)
    console.log('come')
    const inititalData = await fetchInitialDataAsync();
    if (!inititalData.error) {
      console.log('come1')
      dispatch(initialFetchSuccess(inititalData?.result));
    } else {
      console.log('come22')
      setComIsloading(false)
      dispatch(initialFetchFailure(inititalData?.result));
    }
  }

  React.useEffect(() => {    
    setComIsloading(isLoading)
  }, [isLoading])

  React.useEffect(() => {
    setColumnSet(type === 'Estimate Average Rate' ? columnDetails : 
    resourceType === 'Must' ? estimateResourceMustColumnDetails :
    resourceType === 'Must Should' ? estimateResourceMustShouldColumnDetails :
    resourceType === 'Must Should Colud' ? estimateResourceMustShouldCouldColumnDetails : columnDetails)
  }, [resourceType])
  console.log('llll ==> ', isLoading, isComLoading, isRefreshing, loading);
  console.log('ppp==> ', columnsSet);
  console.log('mp;; ==> ', resourceType);


  return (
    <>
      {(isRefreshing || isComLoading || isLoading || loading) && (
        <>
        <div className="blur-background"></div>
        <div className="loader-container">
          <Loader />
        </div>
        </>
      )}
        <div>
          {type === 'Estimate Resource' && (
            <ButtonGroups selectedButton={resourceType} setSelectedButton={
              setResourceType
            } numberOfButtons={3} buttonTitles={[
              {title: 'Must'}, {title: 'Must Should'}, {title: 'Must Should Could'}
            ]}/>
          )}
        </div>
        <div>
          <Button onClick={(e) => initialTriggerHandler(e)}>Refresh</Button>
        </div>
        <div>
          <MaterialReactTable
            
            columns={columns}
            data={data}
            enableColumnResizing
            enableGrouping
            enableStickyHeader
            enableStickyFooter
            initialState={{
              density: 'compact',
              expanded: true, //expand all groups by default   'M', "M/S", "M/S/C", 
              grouping: ['nameCategory'], //an array of columns to group by by default (can be multiple)
              pagination: { pageIndex: 0, pageSize: 100 },
              // sorting: [{ id: 'state', desc: false }, { id: 'state', desc: false }], //sort by state by default
            }}
            // pageSizeOptions={[5, 10]}
            muiToolbarAlertBannerChipProps={{ color: 'primary' }}
            muiTableContainerProps={{ sx: { maxHeight: 700 } }}
            muiTableBodyRowProps={({ row }) => ({
              onClick: (event) => {
                console.info("mmmmmmm", row, row?.original, row, row?.original?.name);
                openSidePane('', row.id, row?.original, false);
                
              },
              sx: {
                cursor: 'pointer', //you might want to change the cursor too when adding an onClick
              },
            })}
            // rowStyle={(rowData: any) => {
            //   // Add a condition to check if the row is grouped
            //   if (rowData.isGrouped) {
            //     return {
            //       backgroundColor: 'red', // Change to your grouped background color
            //     };
            //   }
            //   return {};
            // }}
          />
        </div>
    </>
  );
};

export default AdvancedTable
// React.memo(AdvancedTable);
