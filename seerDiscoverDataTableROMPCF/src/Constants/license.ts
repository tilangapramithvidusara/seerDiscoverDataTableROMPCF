

export const licenseColumns = [
  {
    header: 'License',
    accessorKey: 'licenseName',
    enableGrouping: true,
    size: 350,
  },
  {
    header: 'Quantity',
    accessorKey: 'quantity',
    size: 200,
  },
  {
    header: 'Building Period',
    accessorKey: 'billingPeriod',
    size: 200,
  },
  {
    header: 'Cost Price (PUPM)',
    accessorKey: 'costPrice',
    size: 200,
    isCalcultionEnabled: true,
  },
  {
    header: 'Sell Price (PUPM)',
    accessorKey: 'sellPrice',
    size: 200,
    isCalcultionEnabled: true,
  },
  {
    header: 'Estimated Price',
    accessorKey: 'estimatedPrice',
    size: 200,
    isCalcultionEnabled: true,
  },
]


export const licenseObject = {
  licenseName: '',
  quantity: '',
  billingPeriod: '',
  // buildingPreiodKey: '',
  costPrice: '',
  sellPrice: '',
  estimatedPrice: '',
  currency: '',
  currencyKey: '',
}