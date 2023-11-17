import * as React from 'react'

export const columnRequirementData = [
  {
    header: 'ID',
    accessorKey: 'seer_Requirement.id',
    // enableGrouping: true,
  },
  {
    header: 'Requirement',
    accessorKey: 'seer_Requirement.name',
  },
  {
    header: 'Module',
    accessorKey: 'seer_Module.name',
    // isCalcultionEnabled: true,
    // aggregationFn: 'sum',
    // showBottomTotal: true,
    // render: (rowData: any) => {
    //   console.log(rowData);
      
    //   if (rowData.aggregated) {
    //     // Apply background color for aggregated cells
    //     return <div style={{ backgroundColor: 'lightblue' }}>{rowData.value}</div>;
    //   }
    //   return rowData.value;
    // },
  },
  {
    header: 'MoSCoW',
    accessorKey: 'seer_Moscow',
    // isCalcultionEnabled: true,
    // aggregationFn: 'sum',
    // showBottomTotal: true,
  },
  {
    header: 'FitGap',
    accessorKey: 'seer_FitGap',
    // isCalcultionEnabled: true,
    // aggregationFn: 'sum',
    // showBottomTotal: true,
  },
  {
    header: 'Complexity',
    accessorKey: 'seer_Complexity',
    // isCalcultionEnabled: true,
    // aggregationFn: 'sum',
    // showBottomTotal: true,
  },
  {
    header: 'Design',
    accessorKey: 'seer_EstimateDesign',
    // isCalcultionEnabled: true,
    // aggregationFn: 'sum',
    // showBottomTotal: true,
  },
  {
    header: 'Build',
    accessorKey: 'seer_Estimatebuild',
    // isCalcultionEnabled: true,
    // aggregationFn: 'sum',
    // showBottomTotal: true,
  },
  {
    header: 'Quantity',
    accessorKey: 'seer_Quantity',
    // isCalcultionEnabled: true,
    // aggregationFn: 'sum',
    // showBottomTotal: true,
  },
]