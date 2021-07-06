import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PictureAsPdfOutlinedIcon from '@material-ui/icons/PictureAsPdfOutlined';
import { stringify } from 'query-string';
import * as React from 'react';
import { cloneElement } from 'react';
import {
    Button, CreateButton,
    ExportButton, sanitizeListRestProps, TopToolbar, useListContext
} from 'react-admin';
import { genarte } from './SendByMailPayments';

export const PaymentListActions = (props: any) => {
    const {
        className,
        exporter,
        filters,
        maxResults,
        ...rest
    } = props;
    const {
        currentSort,
        resource,
        displayedFilters,
        filterValues,
        basePath,
        showFilter,
        total,
    } = useListContext();
    return (
        <TopToolbar className={className} {...sanitizeListRestProps(rest)}>
            {filters && cloneElement(filters, {
                resource,
                showFilter,
                displayedFilters,
                filterValues,
                context: 'button',
            })}
            <CreateButton basePath={basePath} />
            <Button
                onClick={() => { genarte(filterValues) }}
                label="שלח במייל"
            >
                <MailOutlineIcon />
            </Button>

            <Button
                disabled={total === 0}
                resource={resource}

                // onClick={() => { genarte(filterValues) }}
                label="הורד PDF"
                href={`http://localhost:4000/api/reports?${stringify(filterValues)}`}
            >

                <PictureAsPdfOutlinedIcon />

            </Button>


            <ExportButton
                disabled={total === 0}
                resource={resource}
                sort={currentSort}
                filterValues={filterValues}
                maxResults={maxResults}
            />
            {/* Add your custom actions */}

        </TopToolbar>
    );
};
