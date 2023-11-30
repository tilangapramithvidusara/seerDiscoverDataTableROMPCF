import * as React from 'react'

export const columnCustomisationData = [
  {
    header: 'ID',
    accessorKey: 'fitgap_seer_requirementid',
    enableGrouping: false,
    size: 80,
  },
  {
    header: 'Category',
    accessorKey: 'fitgap_seer_requirementcategory.name',
    enableGrouping: false,
    size: 100,
  },
  {
    header: 'Requirement',
    accessorKey: 'fitgap_seer_function',
    enableGrouping: false,
    size: 290,
  },
  {
    header: 'Module',
    accessorKey: 'seer_module.name',
    enableGrouping: false,
    size: 120,
  },
  {
    header: 'MoSCoW',
    accessorKey: 'seer_moscow',
    enableGrouping: false,
    size: 50,
  },
  {
    header: 'FitGap',
    accessorKey: 'seer_fitgap',
    enableGrouping: false,
    size: 50,
  },
  {
    header: 'Complexity',
    accessorKey: 'seer_complexity',
    enableGrouping: false,
    size: 70,
  },
  {
    header: 'Design',
    accessorKey: 'seer_estimatedesign',
    enableGrouping: false,
    size: 50,
  },
  {
    header: 'Build',
    accessorKey: 'seer_estimatebuild',
    enableGrouping: false,
    size: 50,
  },
  {
    header: 'Quantity',
    accessorKey: 'seer_quantity',
    enableGrouping: false,
    size: 50,
  },
]