import Box from "../../elements/Box";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { TbArrowBigRightLine } from "react-icons/tb";

import minutos from "../../assets/img/shipment/99minutos.png";
import estafeta from "../../assets/img/shipment/estafeta.png";
import fedex from "../../assets/img/shipment/fedex.png";
import dhl from "../../assets/img/shipment/dhl.png";
import redpack from "../../assets/img/shipment/redpack.png";
import { Chip } from "@mui/material";

const exampleData = [
    {
        courier: "Estafeta",
        courierLogo: estafeta,
        type: "Día Sig",
        estimatedDelivery: "2025/01/14",
        extendedZone: "NO",
        totalValue: "$585.00",
        guide: "585.00",
        insurance: "585.00",
        extendedZoneValue: "585.00",
        deliveryTime: "1 día",
    },
    {
        courier: "DHL",
        courierLogo: dhl,
        type: "Día Sig",
        estimatedDelivery: "2025/01/14",
        extendedZone: "NO",
        totalValue: "$585.00",
        guide: "$585.00",
        insurance: "$585.00",
        extendedZoneValue: "$585.00",
        deliveryTime: "1 día",
    },
    {
        courier: "Fedex",
        courierLogo: fedex,
        type: "Día Sig",
        estimatedDelivery: "2025/01/14",
        extendedZone: "NO",
        totalValue: "$585.00",
        guide: "$585.00",
        insurance: "$585.00",
        extendedZoneValue: "$585.00",
        deliveryTime: "1 día",
    },
    {
        courier: "Redpack",
        courierLogo: redpack,
        type: "Día Sig",
        estimatedDelivery: "2025/01/14",
        extendedZone: "NO",
        totalValue: "$585.00",
        guide: "$585.00",
        insurance: "$585.00",
        extendedZoneValue: "$585.00",
        deliveryTime: "1 día",
    },
    {
        courier: "99 Minutos",
        courierLogo: minutos,
        type: "Día Sig",
        estimatedDelivery: "2025/01/14",
        extendedZone: "NO",
        totalValue: "$585.00",
        guide: "$585.00",
        insurance: "$585.00",
        extendedZoneValue: "$585.00",
        deliveryTime: "1 día",
    },
];

export default function Estimate({ formValues, onBack }: any) {
    return (
        <div className="flex_column">
            <Box style={{width: "100%"}}>
                <Table className="table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Paquetería</TableCell>
                            <TableCell align="center">Tipo</TableCell>
                            <TableCell align="center">Valor total</TableCell>
                            <TableCell align="center">Detalle</TableCell>
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
                                    <div className="estimate_extended_zone_label">Zona Extendida: {item.extendedZone} </div>
                                </TableCell>
                                <TableCell align="center">
                                    <div className="estimate_details_label">{item.totalValue}</div>
                                </TableCell>
                                <TableCell>
                                    {/* Guía: {item.guide}<br />
                                    Seguro: {item.insurance} */}
                                    <div className="estimate_details_flex">

                                        <Chip
                                            variant="outlined"
                                            label={`Guía: ${item.guide}`}
                                            color="primary"
                                            size="small"
                                        />

                                        <Chip
                                            variant="outlined"
                                            label={`Seguro: ${item.insurance}`}
                                            sx={{borderColor: "#747474", color: "#747474"}}
                                            size="small"
                                        />

                                        {item.extendedZoneValue && (
                                            <Chip
                                                variant="outlined"
                                                label={`Z. Extendida: ${item.extendedZoneValue}`}
                                                sx={{borderColor: "#DA385B", color: "#DA385B"}}
                                                size="small"
                                            />
                                        )}
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
            <Box style={{width: "100%"}}>
                <div className="estimate_details">

                    <div className="estimate_header">
                        <h3>{formValues.shipping_type === "document" ? "Documento" : "Paquete"}</h3>
                        
                        <div className="estimate_destination">
                            <div className="estimate_destination_zip">
                                <div className="estimate_details_label">Origen:</div> 
                                <div className="estimate_details_value">{formValues.origin_zip}</div>
                            </div>
                            <TbArrowBigRightLine
                                style={{ minWidth: "24px", margin: "0 8px" }}
                                color="#8BD1FF"
                                size={24}
                            />
                            <div className="estimate_destination_zip">
                                <div className="estimate_details_label">Destino:</div>
                                <div className="estimate_details_value">{formValues.destination_zip}</div>
                            </div>
                        </div>
                    </div>


                    {(formValues.shipping_type === "box" || formValues.insure) && (
                        <div className="estimate_details_content">
                            {formValues.shipping_type === "box" && (
                                <>
                                    <div className="estimate_details_content_item">
                                        <div className="estimate_details_content_label">Dimensiones (cm): </div>
                                        <div className="estimate_details_content_value">
                                            {formValues.length} x {formValues.width} x {formValues.height}
                                        </div>
                                    </div>
                                    <div className="estimate_details_content_item">
                                        <div className="estimate_details_content_label">Peso: </div>
                                        <div className="estimate_details_content_value">
                                            {formValues.weight} Kg
                                        </div>
                                    </div>
                                    <div className="estimate_details_content_item">
                                        <div className="estimate_details_content_label">Peso Volumétrico: </div>
                                        <div className="estimate_details_content_value">
                                            {formValues.volumetric_weight} Kg
                                        </div>
                                    </div>
                                </>
                            )}
                            {formValues.insure && (
                            <div className="estimate_details_content_item">
                                <div className="estimate_details_content_label">Seguro: </div>
                                <div className="estimate_details_content_value">
                                    ${formValues.insure_price}
                                </div>
                            </div>
                            )}
                        </div>
                    )}
                </div>
                <Button variant="contained" color="primary" onClick={onBack}>Cotizar de nuevo</Button>
            </Box>
        </div>
    );
}