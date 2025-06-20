import React, { useState } from 'react';
import { Button, Chip, IconButton, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import ISwitch from "../../../elements/ISwitch";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import minutos from "../../../assets/img/shipment/99minutos.png";
import estafeta from "../../../assets/img/shipment/estafeta.png";
import fedex from "../../../assets/img/shipment/fedex.png";
import dhl from "../../../assets/img/shipment/dhl.png";
import redpack from "../../../assets/img/shipment/redpack.png";
import { AccordionWrapper } from '../../../elements/CustomAccordion';

export default function Step4(props: any) {
    const { formValues, setFormValues, accordionExpanded, setAccordionExpanded, handleOpenConfirmation } = props;

    const handleChange = (event: React.SyntheticEvent, isExpanded: boolean) => {
        setAccordionExpanded(isExpanded ? "service" : "");
    };

    const validateRequiredFields = () => {
        if (formValues.courier === undefined || formValues.courier === null) {
            alert("Por favor selecciona un servicio");
            return;
        }
        handleOpenConfirmation();
    }

    
    return (
        <AccordionWrapper
            title="Seleccionar Servicio"
            stepNumber={4}
            expanded={accordionExpanded}
            onChange={handleChange}
        >
            <div className='input_group'>
                <Table className="table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Paquetería</TableCell>
                            <TableCell align="center">Tipo</TableCell>
                            <TableCell align="center">Valor total</TableCell>
                            <TableCell align="center">Detalle</TableCell>
                            <TableCell align="center">Seleccionar</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {exampleData.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell align="center">
                                    <img src={item.courierLogo} alt={item.courier} className="courier_logo" />
                                    <div className="estimated_time_label">Entrega estimada</div>
                                    <div className="estimated_time_value">{item.estimatedDelivery}</div>
                                    <Chip
                                        label={item.deliveryTime}
                                        color="primary"
                                        size="small"
                                        style={{ marginTop: "8px" }}
                                    />
                                </TableCell>
                                <TableCell align="center">
                                    <div className="estimate_details_label_2">{item.type}</div>
                                    <div className="estimate_extended_zone_label">
                                        Zona Extendida: {item.extendedZone}
                                        <IconButton size="small">
                                            <HelpOutlineIcon fontSize="small" />
                                        </IconButton>
                                    </div>
                                </TableCell>
                                <TableCell align="center">
                                    <div className="estimate_details_label">{item.totalValue}</div>
                                </TableCell>
                                <TableCell>
                                    <div className="estimate_details_flex">
                                        <Chip
                                            variant="outlined"
                                            label={`Guía: $${item.guide}`}
                                            color="primary"
                                            size="small"
                                        />

                                        <Chip
                                            variant="outlined"
                                            label={`Seguro: $${item.insurance}`}
                                            sx={{borderColor: "#747474", color: "#747474"}}
                                            size="small"
                                        />

                                        {item.extendedZoneValue && (
                                            <Chip
                                                variant="outlined"
                                                label={`Z. Extendida: $${item.extendedZoneValue}`}
                                                sx={{borderColor: "#DA385B", color: "#DA385B"}}
                                                size="small"
                                            />
                                        )}
                                    </div>
                                </TableCell>
                                <TableCell align="center">
                                    <ISwitch
                                        checked={formValues.courier?.courier_id === item.courier_id}
                                        onChange={() => setFormValues({ ...formValues, courier: item })}
                                        color="primary"
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                
                <div>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        fullWidth
                        onClick={() => setAccordionExpanded("package")}
                        style={{ marginBottom: '10px' }}
                    >
                        Regresar
                    </Button>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        fullWidth
                        onClick={validateRequiredFields}
                    >
                        Generar Envío
                    </Button>
                </div>
            </div>
        </AccordionWrapper>
    );
}



const exampleData = [
    {
        courier_id: 1,
        courier: "Estafeta",
        courierLogo: estafeta,
        type: "Día Sig",
        estimatedDelivery: "2025/01/14",
        extendedZone: "NO",
        totalValue: 100.00,
        guide: 100.00,
        insurance: 100.00,
        extendedZoneValue: 100.00,
        deliveryTime: "1 día",
    },
    {
        courier_id: 2,
        courier: "DHL",
        courierLogo: dhl,
        type: "Día Sig",
        estimatedDelivery: "2025/01/14",
        extendedZone: "NO",
        totalValue: 200.00,
        guide: 200.00,
        insurance: 200.00,
        extendedZoneValue: 200.00,
        deliveryTime: "1 día",
    },
    {
        courier_id: 3,
        courier: "Fedex",
        courierLogo: fedex,
        type: "Día Sig",
        estimatedDelivery: "2025/01/14",
        extendedZone: "NO",
        totalValue: 300.00,
        guide: 300.00,
        insurance: 300.00,
        extendedZoneValue: 300.00,
        deliveryTime: "1 día",
    },
    {
        courier_id: 4,
        courier: "Redpack",
        courierLogo: redpack,
        type: "Día Sig",
        estimatedDelivery: "2025/01/14",
        extendedZone: "NO",
        totalValue: 400.00,
        guide: 400.00,
        insurance: 400.00,
        extendedZoneValue: 400.00,
        deliveryTime: "1 día",
    },
    {
        courier_id: 5,
        courier: "99 Minutos",
        courierLogo: minutos,
        type: "Día Sig",
        estimatedDelivery: "2025/01/14",
        extendedZone: "NO",
        totalValue: 500.00,
        guide: 500.00,
        insurance: 500.00,
        extendedZoneValue: 500.00,
        deliveryTime: "1 día",
    },
];