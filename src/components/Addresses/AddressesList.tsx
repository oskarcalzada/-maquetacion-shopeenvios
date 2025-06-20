import React, { useState } from 'react';
import Box from "../../elements/Box";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Pagination from "@mui/material/Pagination";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import UploadIcon from "@mui/icons-material/Upload";
import AddressesEditor from './AddressesEditor';
import ImportModal from './ImportModal';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import SearchModal from './SearchModal';
import { RiMapPinAddLine } from "react-icons/ri";
import { SlCloudUpload } from "react-icons/sl";
import { IoSearchOutline } from "react-icons/io5";

const data = [
    {
        name: "John Doe",
        city: "México",
        colony: "Veracruz",
        state: "AGS",
        cp: "20100",
        courier: "ESTAFETA"
    },
    {
        name: "John Doe",
        city: "México",
        colony: "Veracruz",
        state: "AGS",
        cp: "20100",
        courier: "ESTAFETA"
    }
];

export default function AddressesList() {
    const [open, setOpen] = useState(false);
    const [importOpen, setImportOpen] = useState(false);
    const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);
    const [activeItemId, setActiveItemId] = useState<number | null>(null);
    const [editData, setEditData] = useState<any>(null);
    const [searchOpen, setSearchOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setEditData(null);
    };

    const handleImportOpen = () => {
        setImportOpen(true);
    };

    const handleImportClose = () => {
        setImportOpen(false);
    };

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, id: number) => {
        setMenuAnchor(event.currentTarget);
        setActiveItemId(id);
    };

    const handleMenuClose = () => {
        setMenuAnchor(null);
        setActiveItemId(null);
    };

    const handleEdit = () => {
        const itemToEdit = data[activeItemId!];
        setEditData(itemToEdit);
        setOpen(true);
        handleMenuClose();
    };

    const handleDelete = () => {
        console.log("Delete item:", activeItemId);
        handleMenuClose();
    };

    const handleSearchOpen = () => {
        setSearchOpen(true);
    };

    const handleSearchClose = () => {
        setSearchOpen(false);
    };

    return (
        <div className="component_container" id="addresses_list">
            <div className="component_header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="component_title">
                    <h1>Mis direcciones</h1>
                    <p className="subtitle">Lorem ipsum dolor sit amet, consectetur</p>
                </div>
                <div className="button_row">
                    <Button variant="contained" color="primary" startIcon={<IoSearchOutline />} style={{ marginRight: '10px' }} onClick={handleSearchOpen}>Buscar</Button>
                    <Button variant="contained" color="primary" startIcon={<RiMapPinAddLine />} style={{ marginRight: '10px' }} onClick={handleClickOpen}>Nueva Dirección</Button>
                    <Button variant="contained" color="secondary" startIcon={<SlCloudUpload />} onClick={handleImportOpen}>Importar</Button>
                </div>
            </div>
            <Box style={{ width: '100%' }}>
                <div className="results_section" style={{ marginTop: '20px' }}>
                        <Table className='table'>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Nombre</TableCell>
                                    <TableCell>Ciudad</TableCell>
                                    <TableCell>Colonia</TableCell>
                                    <TableCell>Estado</TableCell>
                                    <TableCell>CP</TableCell>
                                    <TableCell>Paquetería</TableCell>
                                    <TableCell>Acción</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{item.name}</TableCell>
                                        <TableCell>{item.city}</TableCell>
                                        <TableCell>{item.colony}</TableCell>
                                        <TableCell>{item.state}</TableCell>
                                        <TableCell>{item.cp}</TableCell>
                                        <TableCell>{item.courier}</TableCell>
                                        <TableCell>
                                            <IconButton onClick={(event) => handleMenuOpen(event, index)}>
                                                <MoreHorizIcon color='primary' />
                                            </IconButton>
                                            <Menu
                                                anchorEl={menuAnchor}
                                                open={Boolean(menuAnchor && activeItemId === index)}
                                                onClose={handleMenuClose}
                                            >
                                                <MenuItem onClick={handleEdit}>Editar</MenuItem>
                                                <MenuItem onClick={handleDelete}>Borrar</MenuItem>
                                            </Menu>
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
            <AddressesEditor 
                open={open} 
                handleClose={handleClose} 
                initialData={editData || null} 
            />
            <ImportModal open={importOpen} handleClose={handleImportClose} />
            <SearchModal open={searchOpen} handleClose={handleSearchClose} />
        </div>
    );
}