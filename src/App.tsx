import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import { GlobalStyles, ThemeProvider } from '@mui/material'
import { darkTheme } from './styles/theme'
import { globalStyles } from './styles/global'
import { Layout } from './components/layouts'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles styles={globalStyles} />
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  )
}

export default App
