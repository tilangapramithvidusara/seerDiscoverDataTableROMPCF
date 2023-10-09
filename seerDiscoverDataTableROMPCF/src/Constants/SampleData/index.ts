export type DataSetType = {
  title?: string;
  averageRow?: Rows;
  rows?: Rows[],
};

type Rows = {
  name: string,
  M: string | number,
  titleCode: string,
  'M/S': string | number,
  'M/S/C': string | number
}

export const DataSet: DataSetType[] = [
  {
    title: 'ANALYSIS & DESIGN',
    averageRow: {
      name: '',
      titleCode: '',
      M: 100,
      'M/S': 95,
      'M/S/C': 110,
    },
    rows: [
      {
        name: 'Analysis and Design',
        titleCode: '1',
        M: '19560',
        'M/S': '21240',
        'M/S/C': '22020'
      },
      {
        name: 'Customisations (Design)',
        titleCode: '1',
        M: '120',
        'M/S': '120',
        'M/S/C': '240'	
      },
      {
        name: 'Custom Requirements (Design)',
        titleCode: '1',
        M: '0',
        'M/S': '0',
        'M/S/C': '0'		
      },
      {
        // title: 'ANALYSIS & DESIGN',
        titleCode: '1',
        name: 'Project Manager',
        M: '5510.4',
        'M/S': '5980.8',
        'M/S/C': '6232.8'		
      },
    ],		
  },
  {
    title: 'DEVELOP',
    averageRow: {
      name: '',
      titleCode: '',
      M: 100,
      'M/S': 95,
      'M/S/C': 110,
    },
    rows: [
      {
        titleCode: '2',
        name: 'Configuration',
        M: '43260',
        'M/S': '48420',
        'M/S/C': '50280'
      },
      {
        titleCode: '2',
        name: 'Integrations',
        M: '3840',
        'M/S': '3840',
        'M/S/C': '3840'		
      },
      {
        titleCode: '2',
        name: 'Customisations (Build)',
        M: '120',
        'M/S': '120',
        'M/S/C': '240'		
      },
      {
        titleCode: '2',
        name: 'Custom Requirements (Build)',
        M: '0',
        'M/S': '0',
        'M/S/C': '0'		
      },
      {
        titleCode: '2',
        name: 'Document Layouts',
        M: '7680',
        'M/S': '7680',
        'M/S/C': '7680'		
      },
      {
        titleCode: '2',
        name: 'Reporting',
        M: '4722',
        'M/S': '5238',
        'M/S/C': '5436'		
      },
      {
        titleCode: '2',
        name: 'Data Migration',
        M: '4722',
        'M/S': '5238',
        'M/S/C': '5436'		
      },
      {
        titleCode: '2',
        name: 'CRP',
        M: '0',
        'M/S': '0',
        'M/S/C': '0'		
      },
      {
        titleCode: '2',
        name: 'Testing',
        M: '0',
        'M/S': '0',
        'M/S/C': '0'		
      },
      {
        titleCode: '2',
        name: 'Project Manager',
        M: '12868.8',
        'M/S': '14107.2',
        'M/S/C': '14582.4'		
      },
      {
        titleCode: '3',
        name: 'Train-the-trainer',
        M: '10815',
        'M/S': '12105',
        'M/S/C': '12570'		
      },
      {
        titleCode: '3',
        name: 'UAT Environment Preparation',
        M: '4722',
        'M/S': '5238',
        'M/S/C': '5436'		
      },
      {
        titleCode: '3',
        name: 'UAT Support',
        M: '11805',
        'M/S': '13095',
        'M/S/C': '13590'		
      },
      {
        titleCode: '3',
        name: 'PROD Environment Preparation',
        M: '2361',
        'M/S': '2619',
        'M/S/C': '2718'		
      },
      {
        titleCode: '3',
        name: 'Support Handover',
        M: '472.2',
        'M/S': '523.8',
        'M/S/C': '543.6'		
      },
      {
        titleCode: '3',
        name: 'Project Manager',
        M: '6035.04',
        'M/S': '6716.16',
        'M/S/C': '6971.52'		
      },
    ]
  },
  {
    title: "OPERATION",
    averageRow: {
      name: '',
      titleCode: '',
      M: 100,
      'M/S': 95,
      'M/S/C': 110,
    },
    rows: [
      {
        titleCode: '4',
        name: 'End user training',
        M: '0',
        'M/S': '0',
        'M/S/C': '0'		
      },
      {
        titleCode: '4',
        name: 'Post Go-Live Support',
        M: '9444',
        'M/S': '10476',
        'M/S/C': '10872'		
      },
      {
        titleCode: '4',
        name: 'Project Manager',
        M: '1888.8',
        'M/S': '2095.2',
        'M/S/C': '2174.4'		
      }	
    ]
  }
];