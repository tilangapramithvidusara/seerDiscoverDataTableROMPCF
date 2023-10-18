import * as React from 'react';
import { useMemo } from 'react';
import { MaterialReactTable, type MRT_ColumnDef } from 'material-react-table';
// import { columnDetails, data, type Person } from '../../Constants/makeData';
import { columnDetails, type Person } from '../../Constants/makeData';

import { columnFixed } from '../../Utils/CustomColumnGenerator';
import { openSidePane } from '../../Utils/pane.open.utils';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInitialDataAsync } from '../../redux/report/reportAsycn';
import { initialFetchFailure, initialFetchSuccess } from '../../redux/report/reportSlice';
import Loader from '../Loader/Loader';
import { Button } from '@mui/material';

const AdvancedTable = ({data, isLoading}: {data?: any, isLoading: boolean}) => {
  console.log('final data ==> ', data);
  const dispatch = useDispatch();
  const loading = useSelector((state: any) => state.report.loading)
  const [isRefreshing, setIsRefreshing] = React.useState<boolean>(isLoading || false);
  const [isComLoading, setComIsloading] = React.useState<boolean>(isLoading || false);
  
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
    columnFixed(columnDetails, data),
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
      dispatch(initialFetchFailure(inititalData?.result));
    }
  }

  React.useEffect(() => {    
    setComIsloading(isLoading)
  }, [isLoading])
  console.log('llll ==> ', isLoading, isComLoading, isRefreshing, loading);
  

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
        <Button onClick={(e) => initialTriggerHandler(e)}>Refresh</Button>
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
            pagination: { pageIndex: 0, pageSize: 10 },
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
        />
    </>
  );
};

export default AdvancedTable
// React.memo(AdvancedTable);
