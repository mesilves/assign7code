//importing libraries
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import appRoutes from "./shared/appRoutes";
//importing components
import NavBar from "./containers/NavBar/NavBar";
import Footer from "./containers/Footer/Footer";
import HomePage from "./containers/HomePage/HomePage";
import Hikers from "./containers/Hikers/hikers";
import Timeline from "./containers/Timeline/timeline";
import MyMap from "./containers/Map/map";
import Investigation from "./containers/Investigation/investigation";
//importing style sheets
import "./App.css";

//create routing path for app
const app = () => {
  return (
    <div className="App">
    <NavBar />

      <div className="MainContent">
        <Switch>
          <Route exact path={appRoutes.home}>
            <HomePage />
          </Route>
          <Route exact path={appRoutes.hikers}>
            <Hikers />
          </Route>
          <Route exact path={appRoutes.timeline}>
            <Timeline />
          </Route>
          <Route exact path={appRoutes.investigation}>
            <Investigation />
          </Route>
          <Route exact path={appRoutes.map}>

          </Route>
          <Redirect to={appRoutes.home} />
        </Switch>
      </div>

      <Footer />
    </div>
  );
};

export default app;
