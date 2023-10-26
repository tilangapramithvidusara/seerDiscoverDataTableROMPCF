
export const integrationParameters = [
  {
    type: 'Direction',
    lookup: 'From existing system to new system',
    impact: 'Low',
    score: 0.00
  },
  {
    type: 'Direction',
    lookup: 'From new system to existing system',
    impact: 'Low',
    score: 0.00
  },
  {
    type: 'Direction',
    lookup: 'Bi-directional',
    impact: 'High',
    score: 2.00
  },
  {
    type: 'Type',
    lookup: 'Periodic (Asynchronous)',
    impact: 'Medium',
    score: 0.00
  },
  {
    type: 'Type',
    lookup: 'Real time (Synchronous)',
    impact: 'High',
    score: 2.00
  },
  {
    type: 'Type',
    lookup: 'Asynchronous',
    impact: 'Medium',
    score: 0.00
  },
  {
    type: 'Type',
    lookup: 'Synchronous',
    impact: 'Low',
    score: 1.00
  },
  {
    type: 'Volume',
    lookup: '<500',
    impact: 'Low',
    score: 0.00
  },
  {
    type: 'Volume',
    lookup: '>500',
    impact: 'Medium',
    score: 2.00
  },
  {
    type: 'Messages',
    lookup: 'N/A',
    impact: 'Multiplier',
    score: 1.00
  },
  {
    type: 'Complexity',
    lookup: 'Low',
    impact: 'Low',
    score: 0.00
  },
  {
    type: 'Complexity',
    lookup: 'Medium',
    impact: 'Medium',
    score: 1.00
  },
  {
    type: 'Complexity',
    lookup: 'High',
    impact: 'High',
    score: 2.00
  },
  {
    type: 'Size',
    lookup: '1',
    impact: '4',
    score: 0.00
  },
  {
    type: 'Size',
    lookup: '5',
    impact: '9',
    score: 1.00
  },
  {
    type: 'Size',
    lookup: '10',
    impact: '19',
    score: 2.00
  },
  {
    type: 'Size',
    lookup: '20',
    impact: '50',
    score: 3.00
  },
  {
    type: 'Days per msg',
    lookup: '',
    impact: 'Multiplier',
    score: 2.00
  },
  {
    type: 'Total',
    lookup: 'N/A',
    impact: 'Multiplier',
    score: 5.00
  },
]