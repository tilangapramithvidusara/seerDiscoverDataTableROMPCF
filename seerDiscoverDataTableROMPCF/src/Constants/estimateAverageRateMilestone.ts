export type Person = {
  nameCategory?: string;
  name: string;
  titleCode: string;
  M: number;
  "M/S": number;
  "M/S/C": number;
};

export const columnDetailsEstimateAverageRateMilestone = [
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

export const dataEstimateAverageRateMilestone: any[] = [
  {
    "nameCategory": "ANALYSIS & DESIGN",
    name: 'Analysis and Design',
    titleCode: '1',
    M: 0,
    'M/S': 0,
    'M/S/C': 0,
    type: 'Estimate Avg Rate Milestone',
  },
  {
    "nameCategory": "ANALYSIS & DESIGN",
    name: 'Customisations (Design)',
    titleCode: '1',
    M: 0,
    'M/S': 0,
    'M/S/C': 0,
    type: 'Estimate Avg Rate Milestone',	
  },
  {
    "nameCategory": "ANALYSIS & DESIGN",
    name: 'Custom Requirements (Design)',
    titleCode: '1',
    M: 0,
    'M/S': 0,
    'M/S/C': 0,
    type: 'Estimate Avg Rate Milestone',	
  },
  {
    "nameCategory": "ANALYSIS & DESIGN",
    titleCode: '1',
    name: 'Documentation',
    M: 0,
    'M/S': 0,
    'M/S/C': 0,
    type: 'Estimate Avg Rate Milestone',	
  },
  {
    "nameCategory": "ANALYSIS & DESIGN",
    titleCode: '1',
    name: 'Design Review',
    M: 0,
    'M/S': 0,
    'M/S/C': 0,
    type: 'Estimate Avg Rate Milestone',	
  },
  {
    "nameCategory": "ANALYSIS & DESIGN",
    titleCode: '1',
    name: 'Project Manager',
    M: 0,
    'M/S': 0,
    'M/S/C': 0,
    type: 'Estimate Avg Rate Milestone',	
  },
  {
    "nameCategory": "ANALYSIS & DESIGN",
    titleCode: '1',
    name: '',
    M: 0,
    'M/S': 0,
    'M/S/C': 0,
    type: 'Estimate Avg Rate Milestone',	
  },
  {
    "nameCategory": "BUILD",
    titleCode: '2',
    name: 'Configuration',
    M: 0,
    'M/S': 0,
    'M/S/C': 0,
    type: 'Estimate Avg Rate Milestone',
  },
  {
    "nameCategory": "BUILD",
    titleCode: '2',
    name: 'Integrations',
    M: 0,
    'M/S': 0,
    'M/S/C': 0,
    type: 'Estimate Avg Rate Milestone',		
  },
  {
    "nameCategory": "BUILD",
    titleCode: '2',
    name: 'Customisations (Build)',
    M: 0,
    'M/S': 0,
    'M/S/C': 0,
    type: 'Estimate Avg Rate Milestone',	
  },
  {
    "nameCategory": "BUILD",
    titleCode: '2',
    name: 'Custom Requirements (Build)',
    M: 0,
    'M/S': 0,
    'M/S/C': 0,
    type: 'Estimate Avg Rate Milestone',		
  },
  {
    "nameCategory": "BUILD",
    titleCode: '2',
    name: 'Document Layouts',
    M: 0,
    'M/S': 0,
    'M/S/C': 0,
    type: 'Estimate Avg Rate Milestone',		
  },
  {
    "nameCategory": "BUILD",
    titleCode: '2',
    name: 'Reporting',
    M: 0,
    'M/S': 0,
    'M/S/C': 0,
    type: 'Estimate Avg Rate Milestone',	
  },
  {
    "nameCategory": "BUILD",
    titleCode: '2',
    name: 'Data Migration',
    M: 0,
    'M/S': 0,
    'M/S/C': 0,
    type: 'Estimate Avg Rate Milestone',		
  },
  {
    "nameCategory": "BUILD",
    titleCode: '2',
    name: 'CRP',
    M: 0,
    'M/S': 0,
    'M/S/C': 0,
    type: 'Estimate Avg Rate Milestone',	
  },
  {
    "nameCategory": "BUILD",
    titleCode: '2',
    name: 'Testing',
    M: 0,
    'M/S': 0,
    'M/S/C': 0,
    type: 'Estimate Avg Rate Milestone',	
  },
  {
    "nameCategory": "BUILD",
    titleCode: '1',
    name: 'Project Manager',
    M: 0,
    'M/S': 0,
    'M/S/C': 0,
    type: 'Estimate Avg Rate Milestone',	
  },
  {
    "nameCategory": "BUILD",
    titleCode: '1',
    name: '',
    M: 0,
    'M/S': 0,
    'M/S/C': 0,
    type: 'Estimate Avg Rate Milestone',	
  },
  {
    "nameCategory": "DEPLOY",
    titleCode: '3',
    name: 'Train-the-trainer',
    M: 0,
    'M/S': 0,
    'M/S/C': 0,
    type: 'Estimate Avg Rate Milestone',		
  },
  {
    "nameCategory": "DEPLOY",
    titleCode: '3',
    name: 'UAT Environment Preparation',
    M: 0,
    'M/S': 0,
    'M/S/C': 0,
    type: 'Estimate Avg Rate Milestone',	
  },
  {
    "nameCategory": "DEPLOY",
    titleCode: '3',
    name: 'UAT Support',
    M: 0,
    'M/S': 0,
    'M/S/C': 0,
    type: 'Estimate Avg Rate Milestone',		
  },
  {
    "nameCategory": "DEPLOY",
    titleCode: '3',
    name: 'PROD Environment Preparation',
    M: 0,
    'M/S': 0,
    'M/S/C': 0,
    type: 'Estimate Avg Rate Milestone',		
  },
  {
    "nameCategory": "DEPLOY",
    titleCode: '3',
    name: 'Support Handover',
    M: 0,
    'M/S': 0,
    'M/S/C': 0,
    type: 'Estimate Avg Rate Milestone',	
  },
  {
    "nameCategory": "DEPLOY",
    titleCode: '1',
    name: 'Project Manager',
    M: 0,
    'M/S': 0,
    'M/S/C': 0,
    type: 'Estimate Avg Rate Milestone',	
  },
  {
    "nameCategory": "DEPLOY",
    titleCode: '1',
    name: '',
    M: 0,
    'M/S': 0,
    'M/S/C': 0,
    type: 'Estimate Avg Rate Milestone',	
  },
  {
    "nameCategory": "OPERATION",
    titleCode: '4',
    name: 'End user training',
    M: 0,
    'M/S': 0,
    'M/S/C': 0,
    type: 'Estimate Avg Rate Milestone',	
  },
  {
    "nameCategory": "OPERATION",
    titleCode: '4',
    name: 'Post Go-Live Support',
    M: 0,
    'M/S': 0,
    'M/S/C': 0,
    type: 'Estimate Avg Rate Milestone',		
  },
  {
    "nameCategory": "OPERATION",
    titleCode: '1',
    name: 'Project Manager',
    M: 0,
    'M/S': 0,
    'M/S/C': 0,
    type: 'Estimate Avg Rate Milestone',	
  },
  {
    "nameCategory": "OPERATION",
    titleCode: '1',
    name: '',
    M: 0,
    'M/S': 0,
    'M/S/C': 0,
    type: 'Estimate Avg Rate Milestone',	
  },
  {
    "nameCategory": undefined,
    titleCode: '5',
    name: 'Sub Total',
    M: 0,
    'M/S': 0,
    'M/S/C': 0,
    type: 'Estimate Avg Rate Milestone',	
  },
  // {
  //   "nameCategory": undefined,
  //   titleCode: '6',
  //   name: 'Project Manager',
  //   M: 0,
  //   'M/S': 0,
  //   'M/S/C': 0	
  // },
  {
    "nameCategory": undefined,
    titleCode: '7',
    name: 'Project Risk',
    M: 0,
    'M/S': 0,
    'M/S/C': 0,
    type: 'Estimate Avg Rate Milestone',
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



[
  {
    name: "Analysis and Design",
    resources: [
      {
        resouceNumber: 1,
        rate: 0,
        cost: 0,
        split: 20
      },
      {
        resouceNumber: 2,
        rate: 0,
        cost: 0,
        split: 80
      },
      {
        resouceNumber: 3,
        rate: 0,
        cost: 0,
        split: 80
      }
    ]
  }
]
