import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Icon from './Icon';
import './App.css';


const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
}));



export default function CryptoTable(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <StyledTableCell>Rank</StyledTableCell>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Market Cap</StyledTableCell>
            <StyledTableCell>Price</StyledTableCell>
            <StyledTableCell>Volume</StyledTableCell>
            <StyledTableCell>Supply</StyledTableCell>
            <StyledTableCell>Change(24h)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.d.map(row => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
             {row.rank}
              </StyledTableCell>
              <StyledTableCell > <Icon id={row.symbol.toLowerCase()}/></StyledTableCell>
              <StyledTableCell > {row.name}</StyledTableCell>
              <StyledTableCell >${parseFloat(row.marketCapUsd).toFixed(2)}</StyledTableCell>
              <StyledTableCell >${parseFloat(row.priceUsd).toFixed(2)}</StyledTableCell>
              <StyledTableCell >${parseFloat(row.volumeUsd24Hr).toFixed(3)}</StyledTableCell>
              <StyledTableCell >${parseFloat(row.supply).toFixed(3)} {row.symbol}</StyledTableCell>
              <StyledTableCell className={parseFloat(row.changePercent24Hr) > 0 ? 'green' : 'red'} >{parseFloat(row.changePercent24Hr).toFixed(2)} %</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}