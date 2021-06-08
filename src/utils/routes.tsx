import { CreateProps } from 'ra-ui-materialui';
import * as React from 'react';
import { EditProps, ShowProps } from 'react-admin';
import { Route } from 'react-router-dom';
import Configuration from '../configaration/Configuration';

import { ProjectCreate } from '../projects/ProjectCreate';
import { GenerateMasavFile } from '../reports/genarateMasavFile';



export const customRoutes = [
    <Route exact path="/configuration" render={() => <Configuration />} />,
    <Route exact path="/agreement" render={() => <GenerateMasavFile />} />,
    <Route exact path="/projects/create" render={(props: CreateProps) => < ProjectCreate {...props} />} />,
];


