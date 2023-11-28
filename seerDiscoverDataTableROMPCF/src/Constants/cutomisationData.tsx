import * as React from 'react'

export const columnCustomisationData = [
  {
    header: 'ID',
    accessorKey: 'fitgap_seer_requirementid',
    enableGrouping: false,
  },
  {
    header: 'Category',
    accessorKey: 'fitgap_seer_requirementcategory.name',
    enableGrouping: false,
  },
  {
    header: 'Requirement',
    accessorKey: 'fitgap_seer_function',
    enableGrouping: false,
  },
  {
    header: 'Module',
    accessorKey: 'seer_module.name',
    enableGrouping: false,

  },
  {
    header: 'MoSCoW',
    accessorKey: 'seer_moscow',
    enableGrouping: false,

  },
  {
    header: 'FitGap',
    accessorKey: 'seer_fitgap',
    enableGrouping: false,

  },
  {
    header: 'Complexity',
    accessorKey: 'seer_complexity',
    enableGrouping: false,

  },
  {
    header: 'Design',
    accessorKey: 'seer_estimatedesign',
    enableGrouping: false,

  },
  {
    header: 'Build',
    accessorKey: 'seer_estimatebuild',
    enableGrouping: false,

  },
  {
    header: 'Quantity',
    accessorKey: 'seer_quantity',
    enableGrouping: false,

  },
]