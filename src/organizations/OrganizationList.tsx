import { List, EditButton, ListProps,  Button, TopToolbar, useNotify, useRedirect, useRefresh, fetchUtils, CreateButton } from "react-admin"
import { makeStyles} from '@material-ui/core/styles';
import { FC, Fragment, useCallback } from "react";
import { Route, RouteChildrenProps, useHistory } from "react-router-dom";
import { Drawer, useMediaQuery, Theme } from '@material-ui/core';
import classnames from 'classnames';
import OrganizationListDesktop from "./OrganizationListDesktop";
import { OrganizationEdit } from "./OrganizationEdit";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    list: {
        flexGrow: 1,
        transition: theme.transitions.create(['all'], {
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 10,
    },
    listWithDrawer: {
        marginRight: 400,
    },
    drawerPaper: {
        zIndex: 100,
    },
}));


export const OrganizationList:FC<ListProps> = ({...props}) =>  {
    const classes = useStyles();
    const isXSmall = useMediaQuery<Theme>(theme =>
        theme.breakpoints.down('xs')
    );
    const history = useHistory();

    const handleClose = useCallback(() => {
        console.log("Cancel");
        history.push('/organizations');
    }, [history]);

    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();
 
    const genarte = () => {
        try {
            const date_agreement=15
            const httpClient = fetchUtils.fetchJson;
            const apiUrl = `http://127.0.0.1:4000/api/agreement/generate/${date_agreement}`;
    
           const res= httpClient(`${apiUrl}`,{method: "POST"}).then(({ json }) => (
                {
                data: json,
              })
           
              );
              console.log(res);
              notify(`הדוח נוצר בהצלחה!`);
              redirect('/organizations');
              refresh();
        } catch (error) {
            notify(`ארעה שגיאה!`) 
        }
      
    };

    

    const OrganizationShowActions = (basePath:any, data:any, resource:any) => (
        <TopToolbar>
            <CreateButton basePath="organizations" label="חדש"/>
            <EditButton label="עדכן"  basePath="organizations" />
          <input type="date" width="20px" name="date_agreement" ></input>
            {/* Add your custom actions */}
            <Button color="primary"  onClick={genarte} label="דוח מסב" ></Button>
        </TopToolbar>
    );

    const programsRowClick = (id:any, basePath:any, record:any) =>  {
       return `/programs?filter={"organizationId":"${id}"}`;
      }
      

    return(
        <div className={classes.root}>
        <Route path="/organizations/:id">
            {({ match }: RouteChildrenProps<{ id: string }>) => {
                const isMatch = !!(
                    match &&
                    match.params 
                    //&&  match.params.id !== 'create'
                );

                return (
                    <Fragment>
                        <List
                            {...props}
                            className={classnames(classes.list, {
                                [classes.listWithDrawer]: isMatch,
                            })}
                           // bulkActionButtons={<ReviewsBulkActionButtons />}
                           /// filters={<ReviewFilter />}
                            perPage={25}
                            sort={{ field: 'date', order: 'DESC' }}
                        >
                            {isXSmall ? (
                                 <OrganizationListDesktop/>
                            ) : (
                                <OrganizationListDesktop 
                                    selectedRow={
                                        isMatch
                                            ? parseInt(
                                                  (match as any).params.id,
                                                  10
                                              )
                                            : undefined
                                    }
                                />
                            )}
                        </List>
                        <Drawer
                            variant="persistent"
                            open={isMatch}
                            anchor="right"
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




