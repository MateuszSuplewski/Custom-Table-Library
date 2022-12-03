import React from 'react'

const paginationContext = React.createContext('')
const globalFilterContext = React.createContext('')
const columnFilterContext = React.createContext('')
const sortContext = React.createContext('')

paginationContext.displayName = 'paginationContext'
globalFilterContext.displayName = 'globalFilterContext'
columnFilterContext.displayName = 'columnFilterContext'
sortContext.displayName = 'sortContext'

export { paginationContext, globalFilterContext, columnFilterContext, sortContext }
