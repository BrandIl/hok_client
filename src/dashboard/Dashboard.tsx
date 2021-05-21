import * as React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { ListProps, Title, useDataProvider, useVersion } from "react-admin";
import { OrganizationList } from "../organizations/OrganizationList";
import { FC, useCallback, useEffect } from "react";
import GenerateCharges from "./GenerateCharges";
import GenerateCredits from "./GenerateCredits";
import dataProvider from "../admin-props/dataProvider";
import { Review, Customer, Organization } from "../types";
import { useMediaQuery, Theme } from '@material-ui/core';

import { useState } from "react";
import Welcome from "./Welcome";
import OrganizationsListDashboard from "./OrganizationsListDashboard";
import { PDFViewer } from "@react-pdf/renderer";
import { MyDocument } from "../admin-props/PDF";

let fakeProps = {
    basePath: "/organizations",
    hasCreate: false,
    hasEdit: false,
    hasList: true,
    hasShow: false,
    location: { pathname: "/", search: "", hash: "", state: undefined },
    match: { path: "/", url: "/", isExact: true, params: {} },
    options: {},
    permissions: null,
    resource: "organizations"
}


interface State {
    organizations?: Organization[];
}

const styles = {
    flex: { display: 'flex' },
    flexColumn: { display: 'flex', flexDirection: 'column' },
    leftCol: { flex: 1, marginRight: '0.5em' },
    rightCol: { flex: 1, marginLeft: '0.5em' },
    singleCol: { marginTop: '1em', marginBottom: '1em' },
};

const Spacer = () => <span style={{ width: '1em' }} />;
const VerticalSpacer = () => <span style={{ height: '1em' }} />;

export const Dashboard: FC= () => {
    const [state, setState] = useState<State>({});
    const version = useVersion();
    const dataProvider = useDataProvider();

    const isXSmall = useMediaQuery((theme: Theme) =>
        theme.breakpoints.down('xs')
    );
    const isSmall = useMediaQuery((theme: Theme) =>
        theme.breakpoints.down('md')
    );



    const {
       organizations,
    } = state;
  return isXSmall ? (
        <div>
            <div style={styles.flexColumn as React.CSSProperties}>
                <Welcome />
                <GenerateCharges />
                <VerticalSpacer />
                <GenerateCredits />
                <VerticalSpacer />
                {/* <OrganizationsListDashboard /> */}
            </div>
        </div>
    ) : isSmall ? (
        <div style={styles.flexColumn as React.CSSProperties}>
            <div style={styles.singleCol}>
                <Welcome />
            </div>
            <div style={styles.flex}>
                   <GenerateCharges />
                <Spacer />
                  <GenerateCredits />
            </div>
            <div style={styles.singleCol}>
            </div>
            <div style={styles.singleCol}>
            {/* <OrganizationsListDashboard /> */}
            </div>
        </div>
    ) : (
        <>
            <Welcome />
            <div style={styles.flex}>
                <div style={styles.leftCol}>
                    <div style={styles.flex}>
                           <GenerateCharges />
                        <Spacer />
                          <GenerateCredits />
                    </div>
                    <div style={styles.singleCol}>
                        <Spacer/>
                      {/* <OrganizationsListDashboard /> */}
                      <VerticalSpacer/>
                      <Spacer/>
                      <VerticalSpacer/>
                      <VerticalSpacer/>

                    </div>
                    
                </div>
            </div>
        </>
    );
};

export default Dashboard;