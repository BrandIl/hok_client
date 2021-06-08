import VisitorIcon from '@material-ui/icons/People';
import { CustomerCreate } from './CustomerCreate';
import { CustomersList } from './CustomerList';

const resource = {
    list: CustomersList,
    create: CustomerCreate,
    icon: VisitorIcon,
};

export default resource;
