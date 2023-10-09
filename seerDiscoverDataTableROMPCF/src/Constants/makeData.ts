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

export const data: Person[] = [
  {
    "nameCategory": "ANALYSIS & DESIGN",
    name: 'Analysis and Design',
    titleCode: '1',
    M: 19560,
    'M/S': 21240,
    'M/S/C': 22020
  },
  {
    "nameCategory": "ANALYSIS & DESIGN",
    name: 'Customisations (Design)',
    titleCode: '1',
    M: 120,
    'M/S': 120,
    'M/S/C': 240	
  },
  {
    "nameCategory": "ANALYSIS & DESIGN",
    name: 'Custom Requirements (Design)',
    titleCode: '1',
    M: 0,
    'M/S': 0,
    'M/S/C': 0	
  },
  {
    "nameCategory": "ANALYSIS & DESIGN",
    titleCode: '1',
    name: 'Project Manager',
    M: 5510.4,
    'M/S': 5980.8,
    'M/S/C': 6232.8	
  },
  {
    "nameCategory": "DEVELOP",
    titleCode: '2',
    name: 'Configuration',
    M: 43260,
    'M/S': 48420,
    'M/S/C': 50280
  },
  {
    "nameCategory": "DEVELOP",
    titleCode: '2',
    name: 'Integrations',
    M: 3840,
    'M/S': 3840,
    'M/S/C': 3840		
  },
  {
    "nameCategory": "DEVELOP",
    titleCode: '2',
    name: 'Customisations (Build)',
    M: 120,
    'M/S': 120,
    'M/S/C': 240	
  },
  {
    "nameCategory": "DEVELOP",
    titleCode: '2',
    name: 'Custom Requirements (Build)',
    M: 0,
    'M/S': 0,
    'M/S/C': 0		
  },
  {
    "nameCategory": "DEVELOP",
    titleCode: '2',
    name: 'Document Layouts',
    M: 7680,
    'M/S': 7680,
    'M/S/C': 7680		
  },
  {
    "nameCategory": "DEVELOP",
    titleCode: '2',
    name: 'Reporting',
    M: 4722,
    'M/S': 5238,
    'M/S/C': 5436	
  },
  {
    "nameCategory": "DEVELOP",
    titleCode: '2',
    name: 'Data Migration',
    M: 4722,
    'M/S': 5238,
    'M/S/C': 5436		
  },
  {
    "nameCategory": "DEVELOP",
    titleCode: '2',
    name: 'CRP',
    M: 0,
    'M/S': 0,
    'M/S/C': 0	
  },
  {
    "nameCategory": "DEVELOP",
    titleCode: '2',
    name: 'Testing',
    M: 0,
    'M/S': 0,
    'M/S/C': 0	
  },
  {
    "nameCategory": "DEVELOP",
    titleCode: '2',
    name: 'Project Manager',
    M: 12868.8,
    'M/S': 14107.2,
    'M/S/C': 14582.4		
  },
  {
    "nameCategory": "DEPLOY",
    titleCode: '3',
    name: 'Train-the-trainer',
    M: 10815,
    'M/S': 12105,
    'M/S/C': 12570		
  },
  {
    "nameCategory": "DEPLOY",
    titleCode: '3',
    name: 'UAT Environment Preparation',
    M: 4722,
    'M/S': 5238,
    'M/S/C': 5436	
  },
  {
    "nameCategory": "DEPLOY",
    titleCode: '3',
    name: 'UAT Support',
    M: 11805,
    'M/S': 13095,
    'M/S/C': 13590		
  },
  {
    "nameCategory": "DEPLOY",
    titleCode: '3',
    name: 'PROD Environment Preparation',
    M: 2361,
    'M/S': 2619,
    'M/S/C': 2718		
  },
  {
    "nameCategory": "DEPLOY",
    titleCode: '3',
    name: 'Support Handover',
    M: 472.2,
    'M/S': 523.8,
    'M/S/C': 543.6		
  },
  {
    "nameCategory": "DEPLOY",
    titleCode: '3',
    name: 'Project Manager',
    M: 6035.04,
    'M/S': 6716.16,
    'M/S/C': 6971.52		
  },
  {
    "nameCategory": "OPERATION",
    titleCode: '4',
    name: 'End user training',
    M: 0,
    'M/S': 0,
    'M/S/C': 0	
  },
  {
    "nameCategory": "OPERATION",
    titleCode: '4',
    name: 'Post Go-Live Support',
    M: 9444,
    'M/S': 10476,
    'M/S/C': 10872		
  },
  {
    "nameCategory": "OPERATION",
    titleCode: '4',
    name: 'Project Manager',
    M: 1888.8,
    'M/S': 2095.2,
    'M/S/C': 2174.4		
  }
];
