import { Theme, useMediaQuery } from '@material-ui/core';
import { FC } from "react";
import { ResourceComponentProps } from "react-admin";
import { TryEmail } from '../utils/TryEmail';
import GenerateCharges from "./GenerateCharges";
import GenerateCredits from "./GenerateCredits";
import OrganizationsListDashboard from "./OrganizationsListDashboard";
import Welcome from "./Welcome";


const styles = {
    flex: { display: 'flex' },
    flexColumn: { display: 'flex', flexDirection: 'column' },
    leftCol: { flex: 1, marginRight: '0.5em' },
    rightCol: { flex: 1, marginLeft: '0.5em' },
    singleCol: { marginTop: '1em', marginBottom: '1em' },
};

const Spacer = () => <span style={{ width: '1em' }} />;
const VerticalSpacer = () => <span style={{ height: '1em' }} />;

export const Dashboard: FC<ResourceComponentProps> = ({ permissions }) => {
    const isXSmall = useMediaQuery((theme: Theme) =>
        theme.breakpoints.down('xs')
    );
    const isSmall = useMediaQuery((theme: Theme) =>
        theme.breakpoints.down('md')
    );

    return isXSmall ? (
        <div>
            <div style={styles.flexColumn as React.CSSProperties}>
                <Welcome />
                {
                    permissions === 'admin' &&
                    <div>
                        <GenerateCharges />
                        <VerticalSpacer />
                        <GenerateCredits />
                        <VerticalSpacer />
                    </div>
                }
                <OrganizationsListDashboard />
            </div>
        </div>
    ) : isSmall ? (
        <div style={styles.flexColumn as React.CSSProperties}>
            <div style={styles.singleCol}>
                <Welcome />
            </div>
            {
                permissions === 'admin' &&
                <div style={styles.singleCol}>
                    <GenerateCharges />
                    <Spacer />
                    <GenerateCredits />
                </div>
            }
            <div style={styles.singleCol}>
                <OrganizationsListDashboard />
            </div>
        </div>
    ) : (
        <>
            <Welcome />
            <TryEmail />
            <div style={styles.flex}>
                <div style={styles.leftCol}>
                    {
                        permissions === 'admin' &&
                        <div style={styles.flex}>
                            <GenerateCharges />
                            <Spacer />
                            <GenerateCredits />
                        </div>
                    }
                    <div style={styles.singleCol}>
                        <OrganizationsListDashboard />
                    </div>

                </div>
            </div>
        </>
    );
};

export default Dashboard;