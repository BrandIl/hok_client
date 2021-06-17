import * as React from 'react';
import { Route } from 'react-router-dom';
import Configuration from '../configaration/Configuration';
import { GenerateMasavFile } from '../reports/genarateMasavFile';




export const customRoutes = [
    <Route exact path="/configuration" render={() => <Configuration />} />,
    <Route exact path="/agreement" render={() => <GenerateMasavFile />} />,
];


