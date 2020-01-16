import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./Styles/theme";
import Assessment from "./Assessment/Assessment";
import { LoginWrapper, StyledInput, StyleButton } from "./Styles/styles";
import "./Styles/App.css";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Assessment} />
            <Route path="/assessment" component={Assessment} />
            <Route component={Assessment} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
