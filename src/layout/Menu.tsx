import * as React from 'react';
import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import SettingsIcon from '@material-ui/icons/Settings';
import { useMediaQuery, Theme, Box } from '@material-ui/core';
import {
    useTranslate,
    MenuItemLink,
    MenuProps,
} from 'react-admin';

import organizations from '../organizations';
import projects from '../projects';
import programs from '../programs';
import customers from '../customers';


import { AppState } from '../types';

type MenuName = 'menuCatalog' | 'menuSales' | 'menuCustomers';

const Menu: FC<MenuProps> = ({ onMenuClick, logout, dense = false }) => {
    const [state, setState] = useState({
        menuCatalog: true,
        menuSales: true,
        menuCustomers: true,
    });
    const translate = useTranslate();
    const isXSmall = useMediaQuery((theme: Theme) =>
        theme.breakpoints.down('xs')
    );
    const open = useSelector((state: AppState) => state.admin.ui.sidebarOpen);
    useSelector((state: AppState) => state.theme); // force rerender on theme change

    const handleToggle = (menu: MenuName) => {
        setState(state => ({ ...state, [menu]: !state[menu] }));
    };

    return (
        <Box mt={1}>
            {' '}
            <MenuItemLink
                to={`/`}
                primaryText={translate(`Home`, {
                    smart_count: 2,
                })}
                leftIcon={<programs.icon />}
                onClick={onMenuClick}
                sidebarIsOpen={open}
                dense={dense}
            />
            <MenuItemLink
                to={`/users`}
                primaryText={translate(`משתמשים`, {
                    smart_count: 2,
                })}
                leftIcon={<programs.icon />}
                onClick={onMenuClick}
                sidebarIsOpen={open}
                dense={dense}
            />
            <MenuItemLink
                to={`/agreement`}
                primaryText={translate(`דוחות`, {
                    smart_count: 2,
                })}
                leftIcon={<programs.icon />}
                onClick={onMenuClick}
                sidebarIsOpen={open}
                dense={dense}
            />
 
            {isXSmall && (
                <MenuItemLink
                    to="/configuration"
                    primaryText={translate('הגדרות')}
                    leftIcon={<SettingsIcon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
            )}
            {isXSmall && logout}
        </Box>
    );
};

export default Menu;
