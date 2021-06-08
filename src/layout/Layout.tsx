import * as React from 'react';
import { Layout, LayoutProps, Sidebar } from 'react-admin';
import { useSelector } from 'react-redux';
import { AppState } from '../utils/types';
import AppBar from './AppBar';
import Menu from './Menu';
import { darkTheme, lightTheme } from './themes';

const CustomSidebar = (props: any) => <Sidebar {...props} size={200} />;

// eslint-disable-next-line import/no-anonymous-default-export
export default (props: LayoutProps) => {
    const theme = useSelector((state: AppState) =>
        state.theme === 'dark' ? darkTheme : lightTheme
    );
    return (
        <Layout
            {...props}
            appBar={AppBar}
            sidebar={CustomSidebar}
            menu={Menu}
            theme={theme}
        />
    );
};
