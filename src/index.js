/*!

=========================================================
* Argon Dashboard React - v1.2.4
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import ClientLayout from "layouts/espaceClient.js";
import AuthLayout from "layouts/Auth.js";
import GuideLayout from "layouts/Guide";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/client/*" element={<ClientLayout />} />
      <Route path="/auth/*" element={<AuthLayout />} />
      <Route path="/guide/" element={<GuideLayout />} />
      <Route path="*" element={<Navigate to="/visiteur/accueil" replace />} />
    </Routes>
  </BrowserRouter>
);
