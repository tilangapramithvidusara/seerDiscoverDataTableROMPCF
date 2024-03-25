

export const licenseColumns = [
  {
    header: 'License',
    accessorKey: 'licenseName',
    enableGrouping: true,
    size: 150,
  },
  {
    header: 'Quantity',
    accessorKey: 'quantity',
    size: 220,
  },
  {
    header: 'Building Period',
    accessorKey: 'buildingPeriod',
    size: 220,
  },
  {
    header: 'Cost Price (PUPM)',
    accessorKey: 'costrPrice',
    size: 220,
  },
  {
    header: 'Sell Price (PUPM)',
    accessorKey: 'sellPrice',
    size: 220,
  },
  {
    header: 'Estimated Price',
    accessorKey: 'estimatedPrice',
    size: 220,
  },
]


export const licenseObject = {
  licenseName: '',
  quantity: '',
  buildingPeriod: '',
  // buildingPreiodKey: '',
  costPrice: '',
  sellPrice: '',
  estimatedPrice: '',
  currency: '',
  currencyKey: '',
}