import * as React from 'react';
import { useMemo } from 'react';
import { MaterialReactTable, type MRT_ColumnDef } from 'material-react-table';
// import { columnDetails, data, type Person } from '../../Constants/makeData';
import { columnDetails, type Person } from '../../Constants/makeData';

import { columnFixed } from '../../Utils/CustomColumnGenerator';
import { openSidePane } from '../../Utils/pane.open.utils';

const AdvancedTable = ({data}: {data?: any}) => {
  console.log('final data ==> ', data);
  
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
  

  return (
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
  );
};

export default React.memo(AdvancedTable);
