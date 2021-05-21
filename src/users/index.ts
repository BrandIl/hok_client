import BusinessIcon from '@material-ui/icons/Business';

import { UserList } from './UserList';
import { UserCreate } from './UserCreate';
import { UserEdit } from './UserEdit';

//import {UserShow } from './UserShow';


const resource = {
    list: UserList,
    create: UserCreate,
    edit: UserEdit,
    icon: BusinessIcon,
    options: { label: "משתמשים" }

};

export default resource;