import React from 'react'
// import { useTable, usePagination } from 'react-table'
import styled, {ThemeContext} from 'styled-components'
import DataTable, { createTheme } from 'react-data-table-component'


createTheme('solarized', {
    text: {
      primary: '#FFFFF',
      secondary: '#8E98A5',
    },
    background: {
      default: '#1C304A',
    },
    context: {
      background: '#cb4b16',
      text: '#8E98A5',
    },
    divider: {
      default: '#073642',
    },
    action: {
      button: 'rgba(0,0,0,.54)',
      hover: 'rgba(0,0,0,.08)',
      disabled: 'rgba(0,0,0,.12)',
    },
  });

const customStyles = {

  header: {
    style: {
       display: 'none',
    },
  },
  headRow: {
    style: {
      borderBottom: `3px solid #006BF8`,
    },
  },
  headCells: {
    style: {
      border: 'none',
    },
  },
  cells: {
    style: {
      borderBottom: `3px solid #006BF8`,
    },
  },
}

export default function Table({ columns, data }) {
  const theme = React.useContext(ThemeContext)
  const [dark, setDark ] = React.useState('defaultTheme')

  React.useEffect(() => {
    if (theme.isDark) setDark('solarized') 
    else setDark('default')
  }, [theme.isDark])

  React.useEffect(() => {
    console.log(data)
  }, [data])
  return (
    <div style={{padding: '20px', backgroundColor: theme.colors.modal}}>
    <DataTable columns={columns} data={data} theme={dark} customStyles={customStyles}  pagination  pointerOnHover />
    </div>
  ) 
}
