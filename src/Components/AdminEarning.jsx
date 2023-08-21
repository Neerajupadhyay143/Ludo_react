import React, { useRef } from 'react';
// import "./AdminEarning.css";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Typography } from '@mui/material';
import { Height } from '@mui/icons-material';

import html2pdf from 'html2pdf.js';
import Button from '@mui/material/Button';



const columns = [
    { id: 'number', label: 'Number', minWidth: 100 },
    { id: 'id', label: 'ID', minWidth: 170 },
    {
        id: 'amount',
        label: 'Amount',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
];

const initialRows = [
    { number: 1, id: 'user001', amount: 1000 },
    { number: 2, id: 'user002', amount: 2000 },
    { number: 3, id: 'user003', amount: 3000 },
    { number: 4, id: 'user004', amount: 4000 },
    { number: 5, id: 'user005', amount: 5000 },
    { number: 6, id: 'user006', amount: 6000 },
    { number: 7, id: 'user007', amount: 7000 },
    { number: 8, id: 'user008', amount: 8000 },
    { number: 9, id: 'user009', amount: 9000 },
    { number: 10, id: 'user010', amount: 10000 },
    { number: 11, id: 'user011', amount: 11000 },
    { number: 12, id: 'user012', amount: 12000 },
    { number: 13, id: 'user013', amount: 13000 },
    { number: 14, id: 'user014', amount: 14000 },
    { number: 15, id: 'user015', amount: 15000 },
    { number: 16, id: 'user016', amount: 16000 },
    { number: 17, id: 'user017', amount: 17000 },
    { number: 18, id: 'user018', amount: 18000 },
    { number: 19, id: 'user019', amount: 19000 },
    { number: 20, id: 'user020', amount: 20000 },
];


export default function StickyHeadTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [rows, setRows] = React.useState(initialRows);
    const [totalEarning, setTotalEarning] = React.useState('5,00,000');
    

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
   

    return (
        <div className='Admin-earning'>


            <Typography sx={{ color: '#29aad0', fontSize: '30px', marginTop: '5%' }} variant="h4">
                Admin  Total Earning : {totalEarning}
                


            </Typography>

          

            <Paper sx={{ width: '100%', color: '#d0d05c', overflowY: 'hidden', marginTop: '2%', background: '#15236e', borderBottom: "none" }}>
                <TableContainer  sx={{ maxHeight: 440, background: '#15236e', color: '#d0d05c', Height: "10%" }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead sx={{ background: ' 22009b', color: '#d0d05c' }}>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                        sx={{ borderBottom: '1px solid #22009b', }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell sx={{ border: 'none' }} key={column.id} align={column.align}>
                                                        {column.format && typeof value === 'number'
                                                            ? column.format(value)
                                                            : value}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    sx={{ color: '#29aad0' }}
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>

        </div>
    );
}
