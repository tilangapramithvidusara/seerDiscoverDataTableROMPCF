import * as React from 'react'

export const columnRequirementData = [
  {
    header: 'ID',
    accessorKey: 'seer_requirementid.value',
    // enableGrouping: true,
    size: 80,
  },
  {
    header: 'Requirement',
    accessorKey: 'seer_Requirement.name',
    size: 270,
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
    size: 250,
  },
  {
    header: 'MoSCoW',
    accessorKey: 'seer_Moscow',
    size: 60,
    // isCalcultionEnabled: true,
    // aggregationFn: 'sum',
    // showBottomTotal: true,
  },
  {
    header: 'FitGap',
    accessorKey: 'seer_FitGap',
    size: 60,
    // isCalcultionEnabled: true,
    // aggregationFn: 'sum',
    // showBottomTotal: true,
  },
  {
    header: 'Complexity',
    accessorKey: 'seer_Complexity',
    size: 60,
    // isCalcultionEnabled: true,
    // aggregationFn: 'sum',
    // showBottomTotal: true,
  },
  {
    header: 'Design',
    accessorKey: 'seer_EstimateDesign',
    size: 60,
    // isCalcultionEnabled: true,
    // aggregationFn: 'sum',
    // showBottomTotal: true,
  },
  {
    header: 'Build',
    accessorKey: 'seer_Estimatebuild',
    size: 60,
    // isCalcultionEnabled: true,
    // aggregationFn: 'sum',
    // showBottomTotal: true,
  },
  {
    header: 'Quantity',
    accessorKey: 'seer_Quantity',
    size: 60,
    // isCalcultionEnabled: true,
    // aggregationFn: 'sum',
    // showBottomTotal: true,
  },
]