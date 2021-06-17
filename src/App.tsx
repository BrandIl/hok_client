import simpleRestProvider from "ra-data-simple-rest";
import polyglotI18nProvider from 'ra-i18n-polyglot';
import {
  Admin,
  fetchUtils,
  Resource
} from "react-admin";
import authProvider from "./admin-props/authProvider";
import customers from "./customers";
import { Dashboard } from "./dashboard";
import hebrewMessages from './i18n/heb';
import { Layout, Login } from './layout';
import organizations from "./organizations";
import programs from "./programs";
import projects from "./projects";
import { customRoutes } from "./utils/routes";
import themeReducer from "./utils/themeReducer";
import users from "./users";
import dp from './admin-props/dataProvider'
import payments from "./payments";


const fetchJson = (url: URL, options: any = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  // add your own headers here
  const token = localStorage.getItem("auth_token");
  options.headers.set("Authorization", `${token}`);
  //options.headers.set("Authorization", `${token}`);
  return fetchUtils.fetchJson(url, options);
};
const dataProvider = simpleRestProvider("http://localhost:4000/api", fetchJson);
const i18nProvider = polyglotI18nProvider(locale => {
  if (locale === 'en') {
    return import('./i18n/en').then(messages => messages.default);
  }

  // Always fallback on hebrew
  return hebrewMessages;
}, 'heb');

const App = () => (
  <Admin
    title=""
    dataProvider={dataProvider}
    customReducers={{ theme: themeReducer }}
    customRoutes={customRoutes}
    authProvider={authProvider}
    dashboard={Dashboard}
    loginPage={Login}
    layout={Layout}
    i18nProvider={i18nProvider}
    disableTelemetry
  >
    <Resource name="organizations" {...organizations} />
    <Resource name="projects"  {...projects} />
    <Resource name="customers"  {...customers} />
    <Resource name="programs" {...programs} />
    <Resource name="users" {...users} />
    <Resource name="payments" {...payments} />
  </Admin>
);


export default App;