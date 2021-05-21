import Grid from '@material-ui/core/Grid';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    fontSize: '200pt',
  },
  table: {
    fontSize: '500pt',
    minWidth: 650
  },
  cell: {
    width: '12.5%',
    align: 'right'
    
  }
}));

export const OrganizationCard = ( record:any ) =>{
  const classes = useStyles();
  return  (
     <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className= {classes.cell}>קוד</TableCell>
            <TableCell className= {classes.cell}>שם מוסד </TableCell>
            <TableCell width="12.5%" align="right">איש קשר</TableCell>
            <TableCell width="12.5%" align="right">מייל</TableCell>
            <TableCell width="12.5%" align="right">טלפון</TableCell>
            <TableCell width="12.5%" align="right">עיר</TableCell>
            <TableCell width="12.5%" align="right">רחוב</TableCell>
            <TableCell width="12.5%" align="right">הערות</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow key={record.record.id}>
              <TableCell align="right">{record.record.masavData.credit.codeNosse}</TableCell>
              <TableCell align="right"> {record.record.name}</TableCell>
              <TableCell align="right">{record.record.communication.concat.name}</TableCell>
              <TableCell align="right">{record.record.communication.concat.email}</TableCell>
              <TableCell align="right">{record.record.communication.concat.celular}</TableCell>
              <TableCell align="right">{record.record.communication.address.city.name}</TableCell>
              <TableCell align="right">{record.record.communication.address.street.name}
            {` `}  {record.record.communication.address.street.number}</TableCell>
              <TableCell align="right">{record.record.communication.concat.remarks}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  
)};