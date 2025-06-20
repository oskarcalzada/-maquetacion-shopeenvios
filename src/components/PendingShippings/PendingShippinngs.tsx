import { Typography, Paper, Stack, Button, Chip, ButtonBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import minutos from "../../assets/img/shipment/99minutos.png";
import estafeta from "../../assets/img/shipment/estafeta.png";
import fedex from "../../assets/img/shipment/fedex.png";
import dhl from "../../assets/img/shipment/dhl.png";
import redpack from "../../assets/img/shipment/redpack.png";
import clsx from "clsx";
import { useState } from 'react';
import Box from '../../elements/Box';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import Pagination from "@mui/material/Pagination";
import { BsFiletypePdf } from "react-icons/bs";


const defaultValues = {
    courier: '',
};

export default function PendingShippings() {
    const [formValues, setFormValues] = useState(defaultValues);
    const [list, setList] = useState<any[]>([]);
    
    const handleCourierSelect = (courier: string) => {
        setFormValues({ ...formValues, courier });
        setList(data);
    };
    
    return (
        <div className="component_container">
            <div className="component_title">
                <h1>Envíos pendientes</h1>
                <p className="subtitle">Lorem ipsum dolor sit amet, consectetur</p>
            </div>
            <Box>
                <div className="courier_selection">
                    <ButtonBase
                        className={clsx("courier_button", { selected: formValues.courier === "99minutos" })}
                        onClick={() => handleCourierSelect("99minutos")}
                    >
                        <img src={minutos} alt="99minutos" className="courier_logo" />
                    </ButtonBase>
                    <ButtonBase
                        className={clsx("courier_button", { selected: formValues.courier === "estafeta" })}
                        onClick={() => handleCourierSelect("estafeta")}
                    >
                        <img src={estafeta} alt="Estafeta" className="courier_logo" />
                    </ButtonBase>
                    <ButtonBase
                        className={clsx("courier_button", { selected: formValues.courier === "fedex" })}
                        onClick={() => handleCourierSelect("fedex")}
                    >
                        <img src={fedex} alt="FedEx" className="courier_logo" />
                    </ButtonBase>
                    <ButtonBase
                        className={clsx("courier_button", { selected: formValues.courier === "dhl" })}
                        onClick={() => handleCourierSelect("dhl")}
                    >
                        <img src={dhl} alt="DHL" className="courier_logo" />
                    </ButtonBase>
                    <ButtonBase
                        className={clsx("courier_button", { selected: formValues.courier === "redpack" })}
                        onClick={() => handleCourierSelect("redpack")}
                    >
                        <img src={redpack} alt="Redpack" className="courier_logo" />
                    </ButtonBase>
                </div>
                
                {list.length > 0 && (
                    <div className="results_section">
                        <div className="search_results_title">
                            <span className="search_results_label">Resultados</span>
                            <span className="search_results_value">({list.length})</span>
                        </div>
                        <Table className="table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Tracking / Tipo de envío</TableCell>
                                    <TableCell>Remitente/ Destinatario</TableCell>
                                    <TableCell>Medidas / Peso</TableCell>
                                    <TableCell>Estatus / Usuario</TableCell>
                                    <TableCell>Fecha de creación</TableCell>
                                    <TableCell>Archivo</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {list.map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell>
                                            <div className="td_title">{item.tracking}</div>
                                            <div className="td_subtitle">{item.type}</div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="td_title">{item.sender}</div>
                                            <div className="td_subtitle">{item.recipient}</div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="td_title">{item.dimensions}</div>
                                            <div className="td_subtitle">{item.weight}</div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="td_title">{item.status}</div>
                                            <div className="td_subtitle">{item.user}</div>
                                        </TableCell>
                                        <TableCell>{item.creationDate}</TableCell>
                                        <TableCell align="center">
                                            <IconButton>
                                                <BsFiletypePdf size={20} />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>

                        
                        <div className="pagination">
                            <Pagination count={10} color="primary" />
                        </div>
                    </div>
                )}
            </Box>
        </div>
    );
};

const data = [
    {
        tracking: "183209812093809128310123",
        type: "MULTIPLE",
        sender: "Bodega San Martin",
        recipient: "German Zuluaga",
        dimensions: "10 x 10 x 10",
        weight: "5kg",
        status: "Guia generada",
        user: "PRINCIPAL",
        creationDate: "2025/01/14"
    },
    {
        tracking: "183209812093809128310123",
        type: "MULTIPLE",
        sender: "Bodega San Martin",
        recipient: "German Zuluaga",
        dimensions: "10 x 10 x 10",
        weight: "5kg",
        status: "Guia generada",
        user: "PRINCIPAL",
        creationDate: "2025/01/14"
    },
    {
        tracking: "183209812093809128310123",
        type: "MULTIPLE",
        sender: "Bodega San Martin",
        recipient: "German Zuluaga",
        dimensions: "10 x 10 x 10",
        weight: "5kg",
        status: "Guia generada",
        user: "PRINCIPAL",
        creationDate: "2025/01/14"
    },
    {
        tracking: "183209812093809128310123",
        type: "MULTIPLE",
        sender: "Bodega San Martin",
        recipient: "German Zuluaga",
        dimensions: "10 x 10 x 10",
        weight: "5kg",
        status: "Guia generada",
        user: "PRINCIPAL",
        creationDate: "2025/01/14"
    },
];