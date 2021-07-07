import { stringify } from "query-string";
import simpleRestProvider from "ra-data-simple-rest";
import polyglotI18nProvider from 'ra-i18n-polyglot';
import {
  Admin,
  fetchUtils,
  HttpError,
  Resource
} from "react-admin";
import authProvider from "./admin-props/authProvider";
import customers from "./customers";
import { Dashboard } from "./dashboard";
import hebrewMessages from './i18n/heb';
import { Layout, Login } from './layout';
import organizations from "./organizations";
import payments from "./payments";
import programs from "./programs";
import projects from "./projects";
import users from "./users";
import { customRoutes } from "./utils/routes";
import themeReducer from "./utils/themeReducer";


const fetchJson = async (url: any, options: any = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  // add your own headers here
  const token = localStorage.getItem("auth_token");
  options.headers.set("Authorization", `${token}`);
  options.headers.set("Content-Type", `application/json; charset=utf-8`);
  //options.headers.set("Authorization", `${token}`);

  const response = await fetch(url, options)
  const text = await response.text()
  const o = {
    status: response.status,
    statusText: response.statusText,
    headers: response.headers,
    body: text,
  };
  let status = o.status, statusText = o.statusText, headers = o.headers, body = o.body;
  let json;
  try {
    json = JSON.parse(body);
  } catch (e) {
    // not json, no big deal
  }
  if (status < 200 || status >= 300) {
    // eslint-disable-next-line no-mixed-operators
    return Promise.reject(new HttpError((json && json.errors && json.errors[0].message) || statusText, status, json));
  }
  return Promise.resolve({ status: status, headers: headers, body: body, json: json });


  // return fetchUtils.fetchJson(url, options);
};
export const dataProvider = simpleRestProvider("http://localhost:4000/api", fetchJson);
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
    // dashboard={Dashboard}
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