/*!

=========================================================
* Now UI Kit PRO React - v1.4.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-pro-react
* Copyright 2020 Creative Tim (http://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.4.0";
import "assets/demo/demo.css?v=1.4.0";
import "assets/demo/react-demo.css?v=1.4.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.4.0";
// pages
import AboutUs from "views/pages/AboutUs.js";
import LandingPage from "views/pages/LandingPage.js";
// others

ReactDOM.render(
  <HashRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route path="/about-us" render={(props) => <AboutUs {...props} />} />
      <Route path="/" render={(props) => <LandingPage {...props} />} />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
