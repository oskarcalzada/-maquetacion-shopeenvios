import Box from "../../elements/Box";
import prestashop from '../../assets/img/prestashop.png';
import woocommerce from '../../assets/img/woocommerce.png';
import shopify from '../../assets/img/shopify.png';
import Button from "@mui/material/Button";
import { PiBookOpenTextLight } from "react-icons/pi";
import { LiaDownloadSolid } from "react-icons/lia";
import { useState } from "react";
import { IconButton, Menu, MenuItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { IoKeyOutline } from "react-icons/io5";
import { HiOutlineDocumentMagnifyingGlass } from "react-icons/hi2";


export default function Api() {
    const [activeTab, setActiveTab] = useState<string>("plugins");
    const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);
    const [activeItemId, setActiveItemId] = useState<string | null>(null);

    // Sample API key data
    const apiKeys = [
        {
            id: "1",
            date: "25 feb 2025 17:49:14",
            key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ...",
            status: "Activo"
        }
    ];

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, id: string) => {
        setMenuAnchor(event.currentTarget);
        setActiveItemId(id);
    };

    const handleMenuClose = () => {
        setMenuAnchor(null);
    };

    const handleDisable = () => {
        console.log("Disable API key: ", activeItemId);
        handleMenuClose();
    };

    const handleDelete = () => {
        console.log("Delete API key: ", activeItemId);
        handleMenuClose();
    };

    return (
        <div className="component_container">
            <div className="component_title">
                <h1>Api envíos</h1>
                <p className="subtitle">Genera una clave para autenticar las peticiones de API</p>
            </div>

            <div className="tabsContainer">
                <div className="tabs">
                    <Button 
                        variant="contained"
                        sx={{ backgroundColor: activeTab === "plugins" ? "#3C97D3" : "#C0BEBE" }}
                        onClick={() => setActiveTab("plugins")}
                        startIcon={<HiOutlineDocumentMagnifyingGlass />}
                    >
                        Plugins disponibles
                    </Button>
                    <Button 
                        variant="contained"
                        sx={{ backgroundColor: activeTab === "apikey" ? "#3C97D3" : "#C0BEBE" }}
                        onClick={() => setActiveTab("apikey")}
                        startIcon={<IoKeyOutline />}
                    >
                        Clave de API
                    </Button>
                </div>

                {activeTab === "plugins" && (
                    <Box>
                        <div className="box_title">
                            <h2 className="h2_title">Nuestros Plugins</h2>
                            <p className="subtitle">Plugins disponibles para tiendas e-commerce</p>
                        </div>

                        <div className="plugins">
                            <div className="plugin">
                                <img src={prestashop} alt="prestashop" />
                                <div className="plugin_buttons">
                                    <Button 
                                        variant="contained" 
                                        color="primary"
                                        className="button_2"
                                        startIcon={<PiBookOpenTextLight />}
                                    >
                                        Guía de uso
                                    </Button>
                                    <Button 
                                        variant="contained" 
                                        color="secondary"
                                        className="button_2"
                                        startIcon={<LiaDownloadSolid />}
                                    >
                                        Descargar
                                    </Button>
                                </div>
                            </div>

                            <div className="plugin">
                                <img src={woocommerce} alt="woocommerce" />
                                <div className="plugin_buttons">
                                    <Button 
                                        variant="contained" 
                                        color="primary"
                                        className="button_2"
                                        startIcon={<PiBookOpenTextLight />}
                                    >
                                        Guía de uso
                                    </Button>
                                    <Button 
                                        variant="contained" 
                                        color="secondary"
                                        className="button_2"
                                        startIcon={<LiaDownloadSolid />}
                                    >
                                        Descargar
                                    </Button>
                                </div>
                            </div>

                            <div className="plugin">
                                <img src={shopify} alt="shopify" />
                                <div className="plugin_buttons">
                                    <Button 
                                        variant="contained" 
                                        color="primary"
                                        className="button_2"
                                        startIcon={<PiBookOpenTextLight />}
                                    >
                                        Guía de uso
                                    </Button>
                                    <Button 
                                        variant="contained" 
                                        color="secondary"
                                        className="button_2"
                                        startIcon={<LiaDownloadSolid />}
                                    >
                                        Descargar
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Box>
                )}

                {activeTab === "apikey" && (
                    <Box>
                        <div className="box_title">
                            <h2 className="h2_title">Clave de API</h2>
                            <p className="subtitle">Esta clave te permitirá autenticar las peticiones de API.</p>
                        </div>

                        <TableContainer sx={{ width: "100%" }}>
                            <Table className="table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Fecha</TableCell>
                                        <TableCell>Clave de API</TableCell>
                                        <TableCell>Estado</TableCell>
                                        <TableCell></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {apiKeys.map((item) => (
                                        <TableRow key={item.id} hover>
                                            <TableCell>{item.date}</TableCell>
                                            <TableCell>{item.key}</TableCell>
                                            <TableCell>{item.status}</TableCell>
                                            <TableCell align="right">
                                                <IconButton 
                                                    aria-label="options" 
                                                    color="primary" 
                                                    onClick={(event) => handleMenuOpen(event, item.id)}
                                                >
                                                    <MoreHorizIcon />
                                                </IconButton>
                                                <Menu
                                                    anchorEl={menuAnchor}
                                                    open={Boolean(menuAnchor && activeItemId === item.id)}
                                                    onClose={handleMenuClose}
                                                >
                                                    <MenuItem onClick={handleDisable}>
                                                        Desactivar
                                                    </MenuItem>
                                                    <MenuItem onClick={handleDelete}>
                                                        Borrar
                                                    </MenuItem>
                                                </Menu>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                )}
            </div>
        </div>
    )
}