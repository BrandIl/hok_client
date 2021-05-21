import { FC } from "react"
import {ListProps, Show, SimpleShowLayout, TextField } from "react-admin"

export const OrganizationShow : FC<ListProps> = props => {
  const initProps = {
    basePath: `/programs/org`,
    hasCreate: false,
    hasEdit: false,
    hasList: true,
    hasShow: false,
    location: { pathname: '/', search: '', hash: '', state: undefined },
    match: { path: '/', url: '/', isExact: true, params: {} },
    options: {},
    permissions: null,
    perPage: 5
  };
  return(  
    <Show {...props}>
    <SimpleShowLayout>
    <TextField label="שם ארגון"  source="name" />
    </SimpleShowLayout>
</Show>
 
)
}
