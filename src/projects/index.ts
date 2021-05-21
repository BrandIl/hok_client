import TurnedInIcon from '@material-ui/icons/TurnedIn';

import { ProjectList } from './ProjectList';
import { ProjectCreate } from './ProjectCreate';
import { ProjectEdit } from './ProjectEdit';
//import { ProjectShow } from './ProjectShow';


const resource = {
    list: ProjectList,
    create: ProjectCreate,
    edit: ProjectEdit,
    icon: TurnedInIcon,
    options: { label: "פרויקטים" }

};

export default resource;