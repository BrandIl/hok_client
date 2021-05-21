import ViewQuiltIcon from '@material-ui/icons/ViewQuilt';

import { ProgramList } from './ProgramList';
import { ProgramCreate } from './ProgramCreate';
import { ProgramEdit } from './ProgramEdit';
//import { ProgramShow } from './ProgramShow';


const resource = {
    list: ProgramList,
    create: ProgramCreate,
    edit: ProgramEdit,
    icon: ViewQuiltIcon,
    options: { label: "תוכניות" }

};

export default resource;