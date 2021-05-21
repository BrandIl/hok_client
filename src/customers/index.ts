import VisitorIcon from '@material-ui/icons/People';

import { CustomerList } from './CustomerList';
import { CustomerCreate } from './CustomerCreate';
import { CustomerEdit } from './CustomerEdit';
//import { CustomerShow } from './CusromerShow';


const resource = {
    list: CustomerList,
    create: CustomerCreate,
    edit: CustomerEdit,
    icon: VisitorIcon,
    options: { label: "לקוחות" }
};

export default resource;
