import { Layout } from "react-admin";
// import MyAppBar from "./MyAppBar";
import { Menu } from "./menu";
// import MyNotification from "./MyNotification";

export const CustomLayout = (props) => (
  <Layout
    {...props}
    // appBar={MyAppBar}
    menu={Menu}
    // notification={MyNotification}
  />
);
