import { Box, Stack } from '@mui/material';
import { MRT_ColumnDef } from 'material-react-table';
import * as React from 'react'

// export default function CustomColumnGenerator({columnArray}: {columnArray: any}) {



export const columnFixed = (columnArray: any, data: any) => {
  const totalColumn =
    (key?: string | number | undefined | any) => {
      return data.reduce((acc: any, curr: any) => {
        console.log('acc + curr', acc, curr[key], key);
        
        return acc + curr[key]
      }, 0)
    }
  const arrayValue = columnArray.length && columnArray.map((columnItem: any, index: number) => {
    let itemObjec = {
      header: columnItem?.header,
      accessorKey: columnItem?.accessorKey,
      enableGrouping: columnItem?.enableGrouping ? true : false,
      
      Cell: columnItem?.isCalcultionEnabled ? ({ cell }: { cell: any }) => {
        if (columnItem?.isCalcultionEnabled) {
        return(
          <>
            {cell.getValue()?.toLocaleString?.('en-US', {
              style: 'currency',
              currency: 'EUR',
              minimumFractionDigits: 2,
              maximumFractionDigits: 4,
            })}
          </>
        )}
      } : null,
      aggregationFn: columnItem?.aggregationFn ? columnItem?.aggregationFn : null,
      AggregatedCell: columnItem?.aggregationFn ? ({ cell, table }: { cell: any, table: any }) => {
        return(
          <>
            {/* {`${columnItem?.aggregationFn.charAt(0).toUpperCase() + columnItem?.aggregationFn.slice(1)} by `} */}
            {/* {table.getColumn(cell.row.groupingColumnId ?? '').columnDef.header}:{' '} */}
            <Box
              sx={{ color: 'info.main', display: 'inline', fontWeight: 'bold' }}
            >
              {cell.getValue()?.toLocaleString?.('en-US', {
              style: 'currency',
              currency: 'EUR',
              minimumFractionDigits: 2,
              maximumFractionDigits: 4,
            })}
            </Box>
          </>
      )} :  null,

      Footer: columnItem?.showBottomTotal ? () => {
        if (columnItem?.showBottomTotal) {
          return(
            <Stack>
              Total:
              {/* <Box color="warning.main">{Math.round(totalColumn)}</Box> */}
              <Box color="warning.main">
                {totalColumn(columnItem?.accessorKey)?.toLocaleString?.('en-US', {
                style: 'currency',
                  currency: 'EUR',
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 4,
                })}
              </Box>
            </Stack>
          )
        }
        
      } :  null,

    }
    return itemObjec;
  });
  return arrayValue;
}
