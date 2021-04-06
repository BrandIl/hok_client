import * as React from "react";
import { Admin, EditGuesser,ListGuesser, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

import { UserList,UserEdit,UserCreate,UserShow  } from './users';
import UserIcon from '@material-ui/icons/People';
//import authProvider from './authProvider';
import { createMuiTheme } from '@material-ui/core/styles';
 
const theme = createMuiTheme({
  direction: 'rtl',
});

const App = () => (
    <Admin theme ={theme}  dataProvider={simpleRestProvider('http://localhost:4000/api') }>
    <Resource name="users"
              options={{ label: '1111משתמשים' }}
              list={UserList}
              edit ={UserEdit}
              create={UserCreate}
              show={UserShow}
              icon={UserIcon}/>

    <Resource name="organizations" 
              options={{ label: 'ארגונים' }}
              list={ListGuesser}
              edit ={EditGuesser}
              show={UserShow}
              icon={UserIcon}/>
   
   <Resource name="projects" 
              options={{ label: 'פרויקטים' }}
              list={ListGuesser}
              edit ={EditGuesser}
              show={UserShow}
              icon={UserIcon}/>

    <Resource name="programs" 
              options={{ label: 'תוכניות' }}
              list={ListGuesser}
              edit ={EditGuesser}
              show={UserShow}
              icon={UserIcon}>
    </Resource>

    <Resource name="customers" 
              options={{ label: 'לקוחות' }}
              list={ListGuesser}
              edit ={EditGuesser}
              show={UserShow}
              icon={UserIcon}>
    </Resource>

  </Admin>
);

export default App;
