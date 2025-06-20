import { Button, Table, TableBody, TableCell, TableHead, TableRow, Pagination, Chip } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AccountBill from '../AccountStatus/AccountBill';
import { GoGraph } from "react-icons/go";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { IoCashOutline } from "react-icons/io5";
import { IoDocumentsOutline } from "react-icons/io5";
import { CiCircleAlert } from "react-icons/ci";


import Box from '../../elements/Box';



export default function AccountStatus() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleRechargeClick = () => {
        navigate('/estado-cuenta/saldo'); // Use the full path for navigation
    };

    return (
        <div className='component_container' id="account-status">
            <h1>Estado de cuenta</h1>
            <p className="subtitle" >Lorem ipsum dolor sit amet, consectetur</p>

            <div className="section_row">
                <Box className='account_status_box_1'>
                    <h2 className="h2_title">
                        <LiaMoneyBillWaveSolid />
                        Saldo disponible de cuenta
                    </h2>
                
                    <div className="balance_amount">$2,000.00</div>

                    <div className="button_wrapper">
                        <Button
                            variant="contained"
                            color="primary"
                            size='small'
                            onClick={handleRechargeClick}
                        >
                            Realizar una recarga de saldo
                        </Button>
                    </div>
                
                    <div className='black_alert'>
                        Después de realizar el pago, envía tu comprobante en el apartado de movimientos
                        <CiCircleAlert color='white' size={20} />
                    </div>
                </Box>
            
                <Box className='account_status_box_2'>
                    <h2 className="h2_title">
                        <IoCashOutline />
                        Línea de crédito
                    </h2>
                
                    <Button variant="contained" color="primary" fullWidth>Solicitar línea de crédito</Button>
                </Box>
            </div>
            
            <Box className='account_status_box_3'>
                <h2 className="h2_title" >
                    <GoGraph />
                    Movimientos
                </h2>
                    <Table className='table'>
                        <TableHead>
                            <TableRow>
                                <TableCell>Fecha</TableCell>
                                <TableCell>Descripción</TableCell>
                                <TableCell>Método</TableCell>
                                <TableCell>Cantidad</TableCell>
                                <TableCell>Monto</TableCell>
                                <TableCell>Tipo</TableCell>
                                <TableCell>Estatus</TableCell>
                                <TableCell>Acción</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell>{item.date}</TableCell>
                                    <TableCell>{item.description}</TableCell>
                                    <TableCell>{item.method}</TableCell>
                                    <TableCell>{item.quantity}</TableCell>
                                    <TableCell>{item.amount}</TableCell>
                                    <TableCell>
                                        <Chip 
                                            label={item.type.label} 
                                            size='small'
                                            color="primary"
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <Chip 
                                            label={item.status} 
                                            variant="outlined" 
                                            size='small'
                                            color="secondary"
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <Button
                                            onClick={handleClickOpen}
                                            variant='contained'
                                            sx={{ width: 'fit-content', height: 'fit-content' }}
                                        >
                                            <IoDocumentsOutline />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <div className="pagination">
                        <Pagination count={10} color="primary" />
                    </div>
            </Box>
            <AccountBill open={open} handleClose={handleClose} />
        </div>
    );
};



const data = [
    {
        date: "04 Ene 2025 17:04:23",
        description: "Recarga de saldo",
        method: "Saldo",
        quantity: 1,
        amount: "$2000",
        type: { label: "Abono", color: "#2196f3" },
        status: "PENDIENTE"
    },
    {
        date: "04 Ene 2025 17:04:23",
        description: "Recarga de saldo",
        method: "Saldo",
        quantity: 1,
        amount: "$2000",
        type: { label: "Sin abono", color: "#f44336" },
        status: "PENDIENTE"
    },
    {
        date: "04 Ene 2025 17:04:23",
        description: "Recarga de saldo",
        method: "Saldo",
        quantity: 1,
        amount: "$2000",
        type: { label: "Sin abono", color: "#f44336" },
        status: "PENDIENTE"
    },
    {
        date: "04 Ene 2025 17:04:23",
        description: "Recarga de saldo",
        method: "Saldo",
        quantity: 1,
        amount: "$2000",
        type: { label: "Sin abono", color: "#f44336" },
        status: "PENDIENTE"
    },
    // ...additional rows...
];