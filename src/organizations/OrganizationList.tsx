import { Drawer, Theme, useMediaQuery } from '@material-ui/core';
import classnames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import React, { FC, Fragment, useCallback } from "react";
import { BulkActionProps, BulkDeleteButton, List, ListProps } from "react-admin";
import { Route, RouteChildrenProps, useHistory } from "react-router-dom";
import { OrganizationEdit } from './OrganizationEdit';
import OrganizationListDesktop from "./OrganizationListDesktop";
import OrganizationFilter from './OrganizationFilter';
import { OrganizationExporter } from './OrganizationExporter';

const OrganizationsBulkActionButtons = (props: BulkActionProps) => (
    <Fragment>
        <BulkDeleteButton {...props} />
    </Fragment>
);

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    list: {
        flexGrow: 1,
        transition: theme.transitions.create(['all'], {
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
    },
    listWithDrawer: {
        marginLeft: 600,
    },
    drawerPaper: {
        zIndex: 100,
        width: 600
    },
}));


export const OrganizationsList: FC<ListProps> = props => {
    const classes = useStyles();
    const isXSmall = useMediaQuery<Theme>(theme =>
        theme.breakpoints.down('xs')
    );
    const history = useHistory();

    const handleClose = useCallback(() => {
        history.push('/organizations');
    }, [history]);


    return (
        <div className={classes.root}>
            <Route path="/organizations/:id">
                {({ match }: RouteChildrenProps<{ id: string }>) => {
                    const isMatch = !!(
                        match &&
                        match.params
                        && match.params.id !== 'create'
                    );

                    return (
                        <Fragment>
                            <List
                                {...props}
                                className={classnames(classes.list, {
                                    [classes.listWithDrawer]: isMatch,
                                })}
                                exporter={OrganizationExporter}
                                bulkActionButtons={<OrganizationsBulkActionButtons />}
                                filters={<OrganizationFilter />}
                                sort={{ field: 'name', order: 'DESC' }}
                            >
                                {isXSmall ? (
                                    <OrganizationListDesktop />
                                ) : (
                                    <OrganizationListDesktop
                                        selectedRow={
                                            isMatch
                                                ? parseInt(
                                                    (match as any).params.id,
                                                    10
                                                ) : undefined
                                        }
                                    />
                                )}
                            </List>
                            <Drawer
                                variant="persistent"
                                open={isMatch}
                                anchor="left"
                                onClose={handleClose}
                                classes={{
                                    paper: classes.drawerPaper,
                                }}
                            >
                                {/* To avoid any errors if the route does not match, we don't render at all the component in this case */}
                                {isMatch ? (
                                    <OrganizationEdit
                                        id={(match as any).params.id}
                                        onCancel={handleClose}
                                        {...props}
                                    />
                                ) : null}
                            </Drawer>
                        </Fragment>
                    );
                }}
            </Route>
        </div>

    );
};



