import * as React from 'react';

export type Person = {
  nameCategory?: string;
  name: string;
  titleCode: string;
  M: number;
  "M/S": number;
  "M/S/C": number;
};

export const columnDetails = [
  {
    header: 'Category',
    accessorKey: 'nameCategory',
    enableGrouping: true,
  },
  {
    header: 'Name',
    accessorKey: 'name',
  },
  {
    header: 'M',
    accessorKey: 'M',
    isCalcultionEnabled: true,
    aggregationFn: 'sum',
    showBottomTotal: true,
    render: (rowData: any) => {
      console.log(rowData);
      
      if (rowData.aggregated) {
        // Apply background color for aggregated cells
        return <div style={{ backgroundColor: 'lightblue' }}>{rowData.value}</div>;
      }
      return rowData.value;
    },
  },
  {
    header: 'M/S',
    accessorKey: 'M/S',
    isCalcultionEnabled: true,
    aggregationFn: 'sum',
    showBottomTotal: true,
  },
  {
    header: 'M/S/C',
    accessorKey: 'M/S/C',
    isCalcultionEnabled: true,
    aggregationFn: 'sum',
    showBottomTotal: true,
  },
]

export const columnDetailsHOURS = [
  {
    header: 'Category',
    accessorKey: 'nameCategory',
    enableGrouping: true,
  },
  {
    header: 'Name',
    accessorKey: 'name',
  },
  {
    header: 'M',
    accessorKey: 'M',
    isCalcultionEnabled: true,
    aggregationFn: 'sum',
    showBottomTotal: true,
    render: (rowData: any) => {
      console.log(rowData);
      
      if (rowData.aggregated) {
        // Apply background color for aggregated cells
        return <div style={{ backgroundColor: 'lightblue' }}>{rowData.value}</div>;
      }
      return rowData.value;
    },
  },
  {
    header: 'M_Hours',
    accessorKey: 'M_H',
    isCalcultionEnabled: true,
    aggregationFn: 'sum',
    showBottomTotal: true,
    render: (rowData: any) => {
      console.log(rowData);
      
      if (rowData.aggregated) {
        // Apply background color for aggregated cells
        return <div style={{ backgroundColor: 'lightblue' }}>{rowData.value}</div>;
      }
      return rowData.value;
    },
  },
  {
    header: 'M/S',
    accessorKey: 'M/S',
    isCalcultionEnabled: true,
    aggregationFn: 'sum',
    showBottomTotal: true,
  },
  {
    header: 'M/S_Hours',
    accessorKey: 'M/S_H',
    isCalcultionEnabled: true,
    aggregationFn: 'sum',
    showBottomTotal: true,
  },
  {
    header: 'M/S/C',
    accessorKey: 'M/S/C',
    isCalcultionEnabled: true,
    aggregationFn: 'sum',
    showBottomTotal: true,
  },
  {
    header: 'M/S/C_Hours',
    accessorKey: 'M/S/C_H',
    isCalcultionEnabled: true,
    aggregationFn: 'sum',
    showBottomTotal: true,
  },
]

export const data: any[] = [
  {
    "nameCategory": "ANALYSIS & DESIGN",
    name: 'Analysis and Design',
    titleCode: '1',
    M: 0,
    M_H: 0,
    'M/S': 0,
    'M/S_H': 0,
    'M/S/C': 0,
    'M/S/C_H': 0,
    type: 'Estimate Avg Rate',
  },
  {
    "nameCategory": "ANALYSIS & DESIGN",
    name: 'Customisations (Design)',
    titleCode: '1',
    M: 0,
    M_H: 0,
    'M/S': 0,
    'M/S_H': 0,
    'M/S/C': 0,
    'M/S/C_H': 0,
    type: 'Estimate Avg Rate',
  },
  {
    "nameCategory": "ANALYSIS & DESIGN",
    name: 'Custom Requirements (Design)',
    titleCode: '1',
    M: 0,
    M_H: 0,
    'M/S': 0,
    'M/S_H': 0,
    'M/S/C': 0,
    'M/S/C_H': 0,
    type: 'Estimate Avg Rate',
  },
  {
    "nameCategory": "ANALYSIS & DESIGN",
    titleCode: '1',
    name: 'Documentation',
    M: 0,
    M_H: 0,
    'M/S': 0,
    'M/S_H': 0,
    'M/S/C': 0,
    'M/S/C_H': 0,
    type: 'Estimate Avg Rate',
  },
  {
    "nameCategory": "ANALYSIS & DESIGN",
    titleCode: '1',
    name: 'Design Review',
    M: 0,
    M_H: 0,
    'M/S': 0,
    'M/S_H': 0,
    'M/S/C': 0,
    'M/S/C_H': 0,
    type: 'Estimate Avg Rate',
  },
  {
    "nameCategory": "BUILD",
    titleCode: '2',
    name: 'Configuration',
    M: 0,
    M_H: 0,
    'M/S': 0,
    'M/S_H': 0,
    'M/S/C': 0,
    'M/S/C_H': 0,
    type: 'Estimate Avg Rate',
  },
  {
    "nameCategory": "BUILD",
    titleCode: '2',
    name: 'Integrations',
    M: 0,
    M_H: 0,
    'M/S': 0,
    'M/S_H': 0,
    'M/S/C': 0,
    'M/S/C_H': 0,
    type: 'Estimate Avg Rate',	
  },
  {
    "nameCategory": "BUILD",
    titleCode: '2',
    name: 'Customisations (Build)',
    M: 0,
    M_H: 0,
    'M/S': 0,
    'M/S_H': 0,
    'M/S/C': 0,
    'M/S/C_H': 0,
    type: 'Estimate Avg Rate',	
  },
  {
    "nameCategory": "BUILD",
    titleCode: '2',
    name: 'Custom Requirements (Build)',
    M: 0,
    M_H: 0,
    'M/S': 0,
    'M/S_H': 0,
    'M/S/C': 0,
    'M/S/C_H': 0,
    type: 'Estimate Avg Rate',		
  },
  {
    "nameCategory": "BUILD",
    titleCode: '2',
    name: 'Document Layouts',
    M: 0,
    M_H: 0,
    'M/S': 0,
    'M/S_H': 0,
    'M/S/C': 0,
    'M/S/C_H': 0,
    type: 'Estimate Avg Rate',		
  },
  {
    "nameCategory": "BUILD",
    titleCode: '2',
    name: 'Reporting',
    M: 0,
    M_H: 0,
    'M/S': 0,
    'M/S_H': 0,
    'M/S/C': 0,
    'M/S/C_H': 0,
    type: 'Estimate Avg Rate',	
  },
  {
    "nameCategory": "BUILD",
    titleCode: '2',
    name: 'Data Migration',
    M: 0,
    M_H: 0,
    'M/S': 0,
    'M/S_H': 0,
    'M/S/C': 0,
    'M/S/C_H': 0,
    type: 'Estimate Avg Rate',		
  },
  {
    "nameCategory": "BUILD",
    titleCode: '2',
    name: 'CRP',
    M: 0,
    M_H: 0,
    'M/S': 0,
    'M/S_H': 0,
    'M/S/C': 0,
    'M/S/C_H': 0,
    type: 'Estimate Avg Rate',	
  },
  {
    "nameCategory": "BUILD",
    titleCode: '2',
    name: 'Testing',
    M: 0,
    M_H: 0,
    'M/S': 0,
    'M/S_H': 0,
    'M/S/C': 0,
    'M/S/C_H': 0,
    type: 'Estimate Avg Rate',	
  },
  {
    "nameCategory": "DEPLOY",
    titleCode: '3',
    name: 'Train-the-trainer',
    M: 0,
    M_H: 0,
    'M/S': 0,
    'M/S_H': 0,
    'M/S/C': 0,
    'M/S/C_H': 0,
    type: 'Estimate Avg Rate',		
  },
  {
    "nameCategory": "DEPLOY",
    titleCode: '3',
    name: 'UAT Environment Preparation',
    M: 0,
    M_H: 0,
    'M/S': 0,
    'M/S_H': 0,
    'M/S/C': 0,
    'M/S/C_H': 0,
    type: 'Estimate Avg Rate',	
  },
  {
    "nameCategory": "DEPLOY",
    titleCode: '3',
    name: 'UAT Support',
    M: 0,
    M_H: 0,
    'M/S': 0,
    'M/S_H': 0,
    'M/S/C': 0,
    'M/S/C_H': 0,
    type: 'Estimate Avg Rate',		
  },
  {
    "nameCategory": "DEPLOY",
    titleCode: '3',
    name: 'PROD Environment Preparation',
    M: 0,
    M_H: 0,
    'M/S': 0,
    'M/S_H': 0,
    'M/S/C': 0,
    'M/S/C_H': 0,
    type: 'Estimate Avg Rate',		
  },
  {
    "nameCategory": "DEPLOY",
    titleCode: '3',
    name: 'Support Handover',
    M: 0,
    M_H: 0,
    'M/S': 0,
    'M/S_H': 0,
    'M/S/C': 0,
    'M/S/C_H': 0,
    type: 'Estimate Avg Rate',		
  },
  {
    "nameCategory": "OPERATION",
    titleCode: '4',
    name: 'End user training',
    M: 0,
    M_H: 0,
    'M/S': 0,
    'M/S_H': 0,
    'M/S/C': 0,
    'M/S/C_H': 0,
    type: 'Estimate Avg Rate',	
  },
  {
    "nameCategory": "OPERATION",
    titleCode: '4',
    name: 'Post Go-Live Support',
    M: 0,
    M_H: 0,
    'M/S': 0,
    'M/S_H': 0,
    'M/S/C': 0,
    'M/S/C_H': 0,
    type: 'Estimate Avg Rate',		
  },
  // {
  //   "nameCategory": undefined,
  //   titleCode: '5',
  //   name: 'Sub Total',
  //   M: 0,
  //   'M/S': 0,
  //   'M/S/C': 0	
  // },
  // {
  //   "nameCategory": undefined,
  //   titleCode: '6',
  //   name: 'Project Manager',
  //   M: 0,
  //   'M/S': 0,
  //   'M/S/C': 0	
  // },
  // {
  //   "nameCategory": undefined,
  //   titleCode: '7',
  //   name: 'Project Risk',
  //   M: 0,
  //   'M/S': 0,
  //   'M/S/C': 0	
  // },
  {
    "nameCategory": 'Sub Total',
    titleCode: '5',
    name: '',
    M: 0,
    M_H: 0,
    'M/S': 0,
    'M/S_H': 0,
    'M/S/C': 0,
    'M/S/C_H': 0,
    type: 'Estimate Avg Rate',	
  },
  {
    "nameCategory": 'Project Manager',
    titleCode: '6',
    name: '',
    M: 0,
    M_H: 0,
    'M/S': 0,
    'M/S_H': 0,
    'M/S/C': 0,
    'M/S/C_H': 0,
    type: 'Estimate Avg Rate',	
  },
  {
    "nameCategory": 'Project Risk',
    titleCode: '7',
    name: '',
    M: 0,
    M_H: 0,
    'M/S': 0,
    'M/S_H': 0,
    'M/S/C': 0,
    'M/S/C_H': 0,
    type: 'Estimate Avg Rate',	
  },
  // {
  //   "nameCategory": ' ',
  //   titleCode: '8',
  //   name: 'Total',
  //   M: 0,
  //   'M/S': 0,
  //   'M/S/C': 0	
  // },
];