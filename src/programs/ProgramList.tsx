import { Drawer, Theme, useMediaQuery } from '@material-ui/core';
import classnames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import React, { FC, Fragment, useCallback } from "react";
import { BulkActionProps, BulkDeleteButton, List, ListProps } from "react-admin";
import { Route, RouteChildrenProps, useHistory } from "react-router-dom";
import { ProgramEdit } from './ProgramEdit';
import ProgramLListDesktop from './ProgramListDesktop';
import ProgramFilter from './ProgramFilter';
import { exporter } from './ProgramExporter';
import BulkActiveButton from './BulkActiveButton';
import BulkCancelButton from './BulkCancelButton';

const ProgramsBulkActionButtons = (props: BulkActionProps) => (
    <Fragment>

        <BulkDeleteButton {...props} />
        <BulkActiveButton {...props} />
        <BulkCancelButton {...props} />


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


export const ProgramList: FC<ListProps> = props => {
    const classes = useStyles();
    const isXSmall = useMediaQuery<Theme>(theme =>
        theme.breakpoints.down('xs')
    );
    const history = useHistory();

    const handleClose = useCallback(() => {
        history.push('/programs');
    }, [history]);


    return (
        <div className={classes.root}>
            <Route path="/programs/:id">
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
                                exporter={exporter}
                                bulkActionButtons={<ProgramsBulkActionButtons />}
                                filters={<ProgramFilter />}
                                sort={{ field: 'name', order: 'DESC' }}
                                filter={localStorage.permissions === 'admin' ? {} : { organizationId: { $in: JSON.parse(localStorage.organizations) } }}
                            >
                                {isXSmall ? (
                                    <ProgramLListDesktop />
                                ) : (
                                    <ProgramLListDesktop
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
                                    <ProgramEdit
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



