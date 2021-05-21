import React, { FC } from "react"
import { CreateProps, DateField, ReferenceField, RichTextField, Show, SimpleShowLayout, TextField } from "react-admin"

export const CustomerShow : FC<CreateProps> = props => {
  return( <Show {...props}>
    <SimpleShowLayout>
    <TextField label="שם פרטי"  source="firstName" />
            <TextField label="שם משפחה"  source="lastName" />
            <TextField label="תעודת זהות"  source="identity" />
            <ReferenceField label="מוסד" source="organizationId" reference="organizations">
                <TextField  source="name" />
              </ReferenceField>
    </SimpleShowLayout>
</Show>
)
}
