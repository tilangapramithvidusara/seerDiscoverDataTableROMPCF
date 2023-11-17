import { Box, Stack } from '@mui/material';
import { MRT_ColumnDef, MRT_AggregationOption } from 'material-react-table';
import * as React from 'react'
import { useSelector } from 'react-redux';

// export default function CustomColumnGenerator({columnArray}: {columnArray: any}) {



export const columnFixed = (columnArray: any, data: any, currency: string) => {
    
  // const AggregatedGroupRow = ({ row }) => {
  //   const customRowStyle = {
  //     backgroundColor: 'your-group-background-color', // Change to your desired background color for grouped rows
  //   };
  
  //   return (
  //     <MRT_HeaderGroup {...row} sx={customRowStyle} />
  //   );
  // };
  const totalColumn =
    (key?: string | number | undefined | any) => {      
      // return data.reduce((acc: any, curr: any) => {
      //   console.log('acc + curr', acc, curr[key], key);
        
      //   return acc + curr[key]
      // }, 0)
      let sumEstimateResource = 0;
      let indicesToSum = []
      // type: 'Estimate Resource'
      if (data?.length && data[0].type == "Estimate Resource") {
        if (key.includes('_H')) {

          sumEstimateResource = data.reduceRight((sum: number, item: any, idx: number, a: any) => (a.length - idx) > 3  ? sum : sum + item[key] , 0)
        } else {
          sumEstimateResource = data.reduceRight((sum: number, item: any, idx: number, a: any) => (a.length - idx) > 3  ? sum : sum + item[key] , 0)
          // indicesToSum = [(data.length - 1), (data.length - 3)]
          // sumEstimateResource = indicesToSum.reduceRight((sum, index) => sum + data[index][key], 0);
        }
        // indicesToSum = [(data.length - 1), (data.length - 3)]
        // sumEstimateResource = indicesToSum.reduceRight((sum, index) => sum + data[index][key], 0);
      }
      const N = (data && data?.length && data[0].type == "Estimate Avg Rate Milestone" || data && data?.length && data[0].type == "Estimate Resource Milestone") ? 2 : 3;
      let total = (data && data?.length && data[0].type == "Estimate Resource") ? sumEstimateResource
        // data.slice(startIdx, endIdx - 1).reduceRight((accumulator: any, item: any) => {
        //   return accumulator + item[key];
        // }, 0)
       : data.reduceRight((sum: number, item: any, idx: number, a: any) => (a.length - idx) > N  ? sum : sum + item[key] , 0)
      // (data && data?.length && data[0].type == "Estimate Resource") ? total - data : total
      return total;
    }
  const arrayValue = columnArray.length && columnArray.map((columnItem: any, index: number) => {
    let itemObjec = {
      header: columnItem?.header,
      accessorKey: columnItem?.accessorKey,
      enableGrouping: columnItem?.enableGrouping ? true : false,
      
      Cell: columnItem?.isCalcultionEnabled ? ({ cell }: { cell: any }) => {
        
        if (cell?.row?._valuesCache?.nameCategory == "Project Risk" ||
        cell?.row?._valuesCache?.nameCategory == "Project Manager" || 
        cell?.row?._valuesCache?.nameCategory == "Sub Total") {
          null
        } else {
          if (columnItem?.isCalcultionEnabled) {
            if (cell?.column?.id?.includes('_H')) {
              return(
                <>
                  {cell.getValue()?.toLocaleString?.('en-US', {
                    // style: 'currency',
                    // currency: cell?.column?.id?.includes('_H') ? '' : (currency || 'GBP'),
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </>
              )
            } else {
              return(
                <>
                  {cell.getValue()?.toLocaleString?.('en-US', {
                    style: 'currency',
                    currency: cell?.column?.id?.includes('_H') ? '' : (currency || 'GBP'),
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </>
              )
            }
          }
        }
      } : null,
      aggregationFn: columnItem?.aggregationFn ? columnItem?.aggregationFn : null,
      AggregatedCell: columnItem?.aggregationFn ? ({ cell, table }: { cell: any, table: any }) => {

        // if (columnItem?.isCalcultionEnabled) {
          if (cell?.column?.id?.includes('_H')) {
            return(
              <>
                {cell.getValue()?.toLocaleString?.('en-US', {
                  // style: 'currency',
                  // currency: cell?.column?.id?.includes('_H') ? '' : (currency || 'GBP'),
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </>
            )
          } else {
            return(
              <>
                {cell.getValue()?.toLocaleString?.('en-US', {
                  style: 'currency',
                  currency: cell?.column?.id?.includes('_H') ? '' : (currency || 'GBP'),
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </>
            )
          }
        
      //   return(
      //     <div id='aggregated-cell' style={{
      //       // backgroundColor: 'yellow'
      //     }}>
      //       {/* {`${columnItem?.aggregationFn.charAt(0).toUpperCase() + columnItem?.aggregationFn.slice(1)} by `} */}
      //       {/* {table.getColumn(cell.row.groupingColumnId ?? '').columnDef.header}:{' '} */}
      //       <Box
      //       // color for the cell info.main
      //         sx={{ color: 'black', display: 'inline', fontWeight: 'bold', 
      //         // backgroundColor: 'red' 
      //       }}
      //       >
      //         {cell.getValue()?.toLocaleString?.('en-US', {
      //         style: 'currency',
      //         currency: cell?.column?.id?.includes('_H') ? '' : (currency || 'GBP'),
      //         minimumFractionDigits: 2,
      //         maximumFractionDigits: 4,
      //       })}
      //       </Box>
      //     </div>
      // )
    } :  null,

      Footer: columnItem?.showBottomTotal ? () => {
        if (columnItem?.showBottomTotal) {
          // if (columnItem?.isCalcultionEnabled) {
            if (columnItem?.accessorKey?.includes('_H')) {
              return(
                <Box color="white">
                {totalColumn(columnItem?.accessorKey)?.toLocaleString?.('en-US', {
                // style: 'currency',
                //   currency: (currency || 'GBP'),
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </Box>
              )
            } else {
              return(
                <Box color="white">
                {totalColumn(columnItem?.accessorKey)?.toLocaleString?.('en-US', {
                style: 'currency',
                  currency: (currency || 'GBP'),
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </Box>
              )
            }
          
          // return(
          //   // <Stack>
          //   //   Total:
          //     // {/* <Box color="warning.main">{Math.round(totalColumn)}</Box> */}
          //     <Box color="white">
          //       {totalColumn(columnItem?.accessorKey)?.toLocaleString?.('en-US', {
          //       style: 'currency',
          //         currency: columnItem?.header?.includes('_H') ? '' : (currency || 'GBP'),
          //         minimumFractionDigits: 2,
          //         maximumFractionDigits: 4,
          //       })}
          //     </Box>
          //   // {/* </Stack> */}
          // )
        }
        
      } :  null,

    }
    return itemObjec;
  });
  return arrayValue;
}
