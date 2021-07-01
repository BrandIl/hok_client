import { Drawer, Theme, useMediaQuery } from '@material-ui/core';
import classnames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import React, { FC, Fragment, useCallback } from "react";
import { List, ListProps } from "react-admin";
import { Route, RouteChildrenProps, useHistory } from "react-router-dom";
import { UserEdit } from './UserEdit';
import UserListDesktop from './UserListDesktop';
import { UserExporter } from './UserExporter';




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


export const UserList: FC<ListProps> = props => {
    const classes = useStyles();
    const isXSmall = useMediaQuery<Theme>(theme =>
        theme.breakpoints.down('xs')
    );
    const history = useHistory();

    const handleClose = useCallback(() => {
        history.push('/users');
    }, [history]);


    return (
        <div className={classes.root}>
            <Route path="/users/:id">
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
                                exporter={UserExporter}
                                //filters={<ProgramFilter />}
                                sort={{ field: 'name', order: 'DESC' }}
                            //  filter={localStorage.permissions === 'admin' ? {} : { organizationId: { $in: JSON.parse(localStorage.organizations) } }}
                            >
                                {isXSmall ? (
                                    <UserListDesktop />
                                ) : (
                                    <UserListDesktop
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
                                    <UserEdit
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



