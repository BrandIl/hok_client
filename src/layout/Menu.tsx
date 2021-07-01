import { Box, Theme, useMediaQuery } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import * as React from 'react';
import { FC } from 'react';
import {
    DashboardMenuItem, MenuItemLink,
    MenuProps, useTranslate
} from 'react-admin';
import { useSelector } from 'react-redux';
import programs from '../programs';
import { AppState } from '../utils/types';
import users from '../users';
import organizations from '../organizations';
import projects from '../projects';
import customers from '../customers';
import payments from '../payments';
import authProvider from '../admin-props/authProvider';

const Menu: FC<MenuProps> = ({ onMenuClick, logout, dense = false }) => {

    const translate = useTranslate();
    const isXSmall = useMediaQuery((theme: Theme) =>
        theme.breakpoints.down('xs')
    );
    const open = useSelector((state: AppState) => state.admin.ui.sidebarOpen);
    useSelector((state: AppState) => state.theme); // force rerender on theme change

    return (
        <Box mt={1}>
            {' '}
            {/* <DashboardMenuItem onClick={onMenuClick} sidebarIsOpen={open} /> */}
            <MenuItemLink
                to={`/organizations`}
                primaryText={translate('pos.menu.organizations')}
                leftIcon={<organizations.icon />}
                onClick={onMenuClick}
                sidebarIsOpen={open}
                dense={dense}
            />
            <MenuItemLink
                to={`/projects`}
                primaryText={translate('pos.menu.projects')}
                leftIcon={<projects.icon />}
                onClick={onMenuClick}
                sidebarIsOpen={open}
                dense={dense}
            />
            <MenuItemLink
                to={`/customers`}
                primaryText={translate('pos.menu.customers')}
                leftIcon={<customers.icon />}
                onClick={onMenuClick}
                sidebarIsOpen={open}
                dense={dense}
            />
            <MenuItemLink
                to={`/programs`}
                primaryText={translate('pos.menu.programs')}
                leftIcon={<programs.icon />}
                onClick={onMenuClick}
                sidebarIsOpen={open}
                dense={dense}
            />
            <MenuItemLink
                to={`/payments`}
                primaryText={translate('pos.menu.payments')}
                leftIcon={<payments.icon />}
                onClick={onMenuClick}
                sidebarIsOpen={open}
                dense={dense}
            />
            {/* <MenuItemLink
                to={`/agreement`}
                primaryText={translate('pos.menu.reports')}
                leftIcon={<programs.icon />}
                onClick={onMenuClick}
                sidebarIsOpen={open}
                dense={dense}
            /> */}
            {localStorage.getItem("permissions") === 'admin' &&
                <MenuItemLink
                    to={`/users`}
                    primaryText={translate('pos.menu.users')}
                    leftIcon={<users.icon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
            }
            {isXSmall && (
                <MenuItemLink
                    to="/configuration"
                    primaryText={translate('pos.menu.configurations')}
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
