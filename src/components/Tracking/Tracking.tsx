import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import Box from "../../elements/Box";
import minutos from "../../assets/img/shipment/99minutos.png";
import estafeta from "../../assets/img/shipment/estafeta.png";
import fedex from "../../assets/img/shipment/fedex.png";
import dhl from "../../assets/img/shipment/dhl.png";
import redpack from "../../assets/img/shipment/redpack.png";
import ButtonBase from "@mui/material/ButtonBase";
import clsx from "clsx";

const defaultValues = {
    trackingNumber: "",
    courier: "",
};

export default function Tracking() {
    const [formValues, setFormValues] = useState(defaultValues);

    return (
        <div className='component_container' id="tracking">
            <div className="component_title">
                <h1>Rastreo</h1>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
            </div>
            <Box>
                <div className="input_group">
                    <div className="courier_selection">
                        <ButtonBase
                            className={clsx("courier_button", { selected: formValues.courier === "99minutos" })}
                            onClick={() => setFormValues({ ...formValues, courier: "99minutos" })}
                        >
                            <img src={minutos} alt="99minutos" className="courier_logo" />
                        </ButtonBase>
                        <ButtonBase
                            className={clsx("courier_button", { selected: formValues.courier === "estafeta" })}
                            onClick={() => setFormValues({ ...formValues, courier: "estafeta" })}
                        >
                            <img src={estafeta} alt="Estafeta" className="courier_logo" />
                        </ButtonBase>
                        <ButtonBase
                            className={clsx("courier_button", { selected: formValues.courier === "fedex" })}
                            onClick={() => setFormValues({ ...formValues, courier: "fedex" })}
                        >
                            <img src={fedex} alt="FedEx" className="courier_logo" />
                        </ButtonBase>
                        <ButtonBase
                            className={clsx("courier_button", { selected: formValues.courier === "dhl" })}
                            onClick={() => setFormValues({ ...formValues, courier: "dhl" })}
                        >
                            <img src={dhl} alt="DHL" className="courier_logo" />
                        </ButtonBase>
                        <ButtonBase
                            className={clsx("courier_button", { selected: formValues.courier === "redpack" })}
                            onClick={() => setFormValues({ ...formValues, courier: "redpack" })}
                        >
                            <img src={redpack} alt="Redpack" className="courier_logo" />
                        </ButtonBase>
                    </div>

                    <div className="tracking_input_wrapper">
                        <div className="tracking_input_label">Ingresar un número de rastreo</div>
                        <TextField
                            variant="standard"
                            className='underline_input'
                            value={formValues.trackingNumber}
                            onChange={(e) => setFormValues({ ...formValues, trackingNumber: e.target.value })}
                        />
                    </div>
                
                <Button variant="contained" color="primary" fullWidth>
                    Buscar
                </Button>
                </div>
            </Box>
        </div>
    );
}