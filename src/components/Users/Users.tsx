import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Switch, Button, IconButton, Pagination } from '@mui/material';
import { Add as AddIcon, Search as SearchIcon, MoreVert as MoreVertIcon } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import Box from "../../elements/Box";
import UsersEditor from './UsersEditor';

const RedSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
        color: theme.palette.error.main,
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
        backgroundColor: theme.palette.error.main,
    },
}));

const data = [
    {
        id: 1,
        name: "Jane Doe",
        joinDate: "Lunes, 13/01/2025",
        email: "jane@greenars.com.co",
        username: "janedoe@Greenars",
        services: "Estafeta, FedEx",
    },
    {
        id: 2,
        name: "John Smith",
        joinDate: "Martes, 14/01/2025",
        email: "john@greenars.com.co",
        username: "johnsmith@Greenars",
        services: "DHL, UPS",
    },
    {
        id: 2,
        name: "John Smith",
        joinDate: "Martes, 14/01/2025",
        email: "john@greenars.com.co",
        username: "johnsmith@Greenars",
        services: "DHL, UPS",
    },
    {
        id: 2,
        name: "John Smith",
        joinDate: "Martes, 14/01/2025",
        email: "john@greenars.com.co",
        username: "johnsmith@Greenars",
        services: "DHL, UPS",
    },
    {
        id: 2,
        name: "John Smith",
        joinDate: "Martes, 14/01/2025",
        email: "john@greenars.com.co",
        username: "johnsmith@Greenars",
        services: "DHL, UPS",
    },
    // ...more data
];

export default function Users() {
    const [userData, setUserData] = useState(data);
    const [editorOpen, setEditorOpen] = useState(false);

    const handleOpenEditor = () => {
        setEditorOpen(true);
    };

    const handleCloseEditor = () => {
        setEditorOpen(false);
    };

    return (
        <div className="component_container" id="users_list">
            <div className="component_header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="component_title">
                    <h1>Usuarios adicionales</h1>
                    <p className="subtitle">Lorem ipsum dolor sit amet, consectetur</p>
                </div>
                <div className="button_row">
                    <Button variant="contained" color="primary" startIcon={<SearchIcon />} style={{ marginRight: '10px' }}>Buscar</Button>
                    <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={handleOpenEditor}>Nuevo</Button>
                </div>
            </div>
            <Box style={{ width: '100%' }}>
                <div className="results_section" style={{ marginTop: '20px' }}>
                    <Table className='table'>
                        <TableHead>
                            <TableRow>
                                <TableCell>Nombre / Ingreso</TableCell>
                                <TableCell>Correo / Usuario</TableCell>
                                <TableCell>Servicios activos</TableCell>
                                <TableCell>Estatus</TableCell>
                                <TableCell>Acción</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {userData.map((user) => (
                                <TableRow key={user.id}>
                                    <TableCell>
                                        {user.name}<br />
                                        {user.joinDate}
                                    </TableCell>
                                    <TableCell>
                                        {user.email}<br />
                                        {user.username}
                                    </TableCell>
                                    <TableCell>{user.services}</TableCell>
                                    <TableCell>
                                        <RedSwitch />
                                    </TableCell>
                                    <TableCell>
                                        <IconButton>
                                            <MoreVertIcon color='primary' />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <div className='pagination'>
                        <Pagination count={10} color="primary" style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }} />
                    </div>
                </div>
            </Box>
            <UsersEditor open={editorOpen} onClose={handleCloseEditor} />
        </div>
    );
}