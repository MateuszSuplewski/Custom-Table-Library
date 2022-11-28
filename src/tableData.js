const tableHeaders = [
  {
    title: 'Country Name',
    field: 'name'
  },
  {
    title: 'ISO Code',
    field: 'code'
  },
  {
    title: 'Population',
    field: 'population',
    type: 'numeric'
  },
  {
    title: 'Size',
    field: 'size',
    type: 'numeric'
  }
]

const tableContent = [
  {
    name: 'India',
    code: 'IN',
    population: '1324171354',
    size: '3287263'
  },
  {
    name: 'China',
    code: 'CN',
    population: '1403500365',
    size: '9596961'
  },
  {
    name: 'Italy',
    code: 'IT',
    population: '60483973',
    size: '301340'
  },
  {
    name: 'Canada',
    code: 'CA',
    population: '37602103',
    size: '9984670'
  },
  {
    name: 'Australia',
    code: 'AU',
    population: '25475400',
    size: '7692024'
  }
]

export { tableHeaders, tableContent }
