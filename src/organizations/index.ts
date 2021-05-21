import BusinessIcon from '@material-ui/icons/Business';

import { OrganizationList } from './OrganizationList';
import { OrganizationCreate } from './OrganizationCreate';
import { OrganizationEdit } from './OrganizationEdit';
import { OrganizationShow } from './OrganizationShow';



const resource = {
    list: OrganizationList,
    create: OrganizationCreate,
    edit: OrganizationEdit,
    show: OrganizationShow,
    icon: BusinessIcon,
    options: { label: "מוסדות" }

};

export default resource;