import {
  Admin,
  fetchUtils,
  Resource,
  ShowGuesser,
} from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";


import organizations from "./organizations";
import projects from "./projects";
import programs from "./programs";
import  customers from "./customers";


import UserIcon from "@material-ui/icons/People";

import { GenerateMasavFile } from "./reports/genarateMasavFile";

import { notFound } from "./admin-props/notFound";
import { theme } from "./admin-props/theme";
//import { Login } from "./admin-props/LoginPage";

import {Layout } from './layout';
import routes from './routes'
import { Dashboard } from "./dashboard";
import users from "./users";
import authProvider from "./admin-props/authProvider";

const fetchJson = (url:URL, options:any ={}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  // add your own headers here
  const token = localStorage.getItem("token");
  console.log("add header");
  console.log(localStorage.getItem("token"));
  options.headers.set("Authorization", `${token}`);
  return fetchUtils.fetchJson(url, options);
};

const dataProvider = simpleRestProvider("http://localhost:4000/api", fetchJson);

const App = () => (
  <Admin
    //customReducers={{ a: ListGuesser }}
    disableTelemetry
    catchAll={notFound}
    title="Hello"
     dashboard={Dashboard}
    layout= {Layout}
    theme={theme}
    dataProvider={dataProvider}
    authProvider={authProvider}
     customRoutes={routes}
    //loginPage={Login}
    // LoginPage={LoginPage}
  >
    <Resource name="organizations" {...organizations} />
    <Resource name="projects" {...projects} />
    <Resource  name="customers" {...customers}   />
    <Resource  name="programs" {...programs}/>
    <Resource  name="users" {...users}/>



    <Resource
      name="agreement"
      options={{ label: "a" }}
      list={GenerateMasavFile}
      //edit={CustomerEdit}
      //create={CustomerCreate}
      // show={CustomerShow}
      icon={UserIcon}
    />
  </Admin>
);

export default App;
