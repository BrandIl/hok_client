import VisitorIcon from '@material-ui/icons/People';
import { UserCreate } from './UserCreate';
import { UserEdit } from './UserEdit';
import { UserList } from './UserList';



//import {UserShow } from './UserShow';


const resource = {
    list: UserList,
    create: UserCreate,
    edit: UserEdit,
    icon: VisitorIcon,

};

export default resource;