// in src/customRoutes.js
import * as React from "react";
import { Route } from "react-router-dom";
import { OrganizationCreate } from "../organizations/OrganizationCreate";
import { ProgramCreate } from "../programs/ProgramCreate";

export const customRoutes = [
  <Route exact path="/foo/app" component={OrganizationCreate} />,
  <Route exact path="/bar" component={ProgramCreate} />,
];
