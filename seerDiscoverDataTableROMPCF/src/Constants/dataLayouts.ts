export const columnDataLayoutData = [
    {
      header: 'ID',
      accessorKey: 'seerRequirementId',
      // enableGrouping: true,
      size: 80,
    },
    {
      header: 'Requirement',
      accessorKey: 'seerRequirement.name',
      size: 270,
    },
    {
      header: 'Module',
      accessorKey: 'seerModule.name',
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
      accessorKey: 'seerMoscow',
      size: 60,
      // isCalcultionEnabled: true,
      // aggregationFn: 'sum',
      // showBottomTotal: true,
    },
    {
      header: 'FitGap',
      accessorKey: 'seerFitgap',
      size: 60,
      // isCalcultionEnabled: true,
      // aggregationFn: 'sum',
      // showBottomTotal: true,
    },
    {
      header: 'Complexity',
      accessorKey: 'seerComplexity',
      size: 60,
      // isCalcultionEnabled: true,
      // aggregationFn: 'sum',
      // showBottomTotal: true,
    },
    {
      header: 'Design',
      accessorKey: 'seerEstimateDesign',
      size: 60,
      // isCalcultionEnabled: true,
      // aggregationFn: 'sum',
      // showBottomTotal: true,
    },
    {
      header: 'Build',
      accessorKey: 'seerEstimateBuild',
      size: 60,
      // isCalcultionEnabled: true,
      // aggregationFn: 'sum',
      // showBottomTotal: true,
    },
    {
      header: 'Quantity',
      accessorKey: 'seerQuantity',
      size: 60,
      // isCalcultionEnabled: true,
      // aggregationFn: 'sum',
      // showBottomTotal: true,
    },
  ]