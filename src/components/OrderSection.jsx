import React from 'react';
import Card from '@mui/material/Card';
import { CardHeader } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(orderid, description, schedule) {
  return { orderid, description, schedule };
}

const rows = [
  createData('12898', 'Type X, Mold Y', '2021-10-10 10:10:10'),
  createData('12984', 'Type L, Mold H', '2021-10-13 10:10:10'),
  createData('13984', 'Type P, Mold S', '2021-10-15 10:10:10'),
];

function OrderSection(props) {
  const [orders, setOrders] = React.useState([]);

  React.useEffect(() => {
    const orderRows = props.orders.slice(1).map((order) => {
      return createData(order.orderID, order.description, order.estimatedSchedule);
    });
    setOrders(orderRows);
  }, [props.orders]);

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardHeader
        title={props.title}
        style={{backgroundColor:props.color,color:props.fontColor}}
      />
      <CardContent>
        <Typography variant="h5" component="div">
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>OrderID</TableCell>
                            <TableCell align="right">Description</TableCell>
                            <TableCell align="right">Schedule time</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {orders.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.orderid}
                        </TableCell>
                        <TableCell align="right">{row.description}</TableCell>
                        <TableCell align="right">{row.schedule}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default OrderSection;
