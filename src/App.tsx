import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import store from "./store";
import {Routes} from "./routes";
import {GlobalStyles, ThemeProvider} from "@mui/material";
import {darkTheme} from "./styles/theme";
import {globalStyles} from "./styles/global";

function App() {
  return (
    <Provider store={store}>
        <ThemeProvider theme={darkTheme} >
            <Routes />
            <GlobalStyles styles={globalStyles} />
        </ThemeProvider>
    </Provider>
  );
}

export default App;
