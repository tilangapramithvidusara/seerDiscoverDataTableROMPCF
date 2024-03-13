import * as React from 'react';

export type fitGapType = {
  moduleName: string;
}


export const fitGapColumnsM = [
  {
    header: 'Name',
    accessorKey: 'moduleName',
    enableGrouping: true,
    size: 150,
  },
  {
    header: 'Fit',
    accessorKey: 'fit_M',
    size: 220,
  },
  {
    header: 'ISV Fit',
    accessorKey: 'isvfit_M',
    size: 220,
  },
  {
    header: 'Partial',
    accessorKey: 'partial_M',
    size: 220,
  },
  {
    header: 'Gap',
    accessorKey: 'gap_M',
    size: 220,
  },
]

export const fitGapColumnsMS = [
  {
    header: 'Name',
    accessorKey: 'moduleName',
    enableGrouping: true,
    size: 150,
  },
  {
    header: 'Fit',
    accessorKey: 'fit_MS',
    size: 220,
  },
  {
    header: 'ISV Fit',
    accessorKey: 'isvfit_MS',
    size: 220,
  },
  {
    header: 'Partial',
    accessorKey: 'partial_MS',
    size: 220,
  },
  {
    header: 'Gap',
    accessorKey: 'gap_MS',
    size: 220,
  },
]

export const fitGapColumnsMSC = [
  {
    header: 'Name',
    accessorKey: 'moduleName',
    enableGrouping: true,
    size: 150,
  },
  {
    header: 'Fit',
    accessorKey: 'fit_MSC',
    size: 220,
  },
  {
    header: 'ISV Fit',
    accessorKey: 'isvfit_MSC',
    size: 220,
  },
  {
    header: 'Partial',
    accessorKey: 'partial_MSC',
    size: 220,
  },
  {
    header: 'Gap',
    accessorKey: 'gap_MSC',
    size: 220,
  },
]

export let fitGapObject = {
  moduleName: '',
  moduleId: '',
  fit_M: 0,
  isvfit_M: 0,
  partial_M: 0,
  gap_M: 0,
  fit_MS: 0,
  isvfit_MS: 0,
  partial_MS: 0,
  gap_MS: 0,
  fit_MSC: 0,
  isvfit_MSC: 0,
  partial_MSC: 0,
  gap_MSC: 0,
}