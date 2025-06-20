import React, { useState } from 'react';
import { Button, ButtonBase, TextField} from "@mui/material";
import { AccordionWrapper } from '../../../elements/CustomAccordion';
import clsx from "clsx";

import minutos from "../../../assets/img/shipment/99minutos.png";
import estafeta from "../../../assets/img/shipment/estafeta.png";
import fedex from "../../../assets/img/shipment/fedex.png";
import dhl from "../../../assets/img/shipment/dhl.png";
import redpack from "../../../assets/img/shipment/redpack.png";
import ISwitch from '../../../elements/ISwitch';

export default function Step1(props: any) {
    const { formValues, setFormValues, accordionExpanded, setAccordionExpanded } = props;
    const [expanded, setExpanded] = useState<boolean>(false);
    const [errors, setErrors] = useState<{[key: string]: boolean}>({});

    const handleChange = (event: React.SyntheticEvent, isExpanded: boolean) => {
        setAccordionExpanded(isExpanded ? "courier" : "");
    };

    const validateRequiredFields = () => {
        const newErrors: {[key: string]: boolean} = {};
        if (!formValues.trackingNumber) newErrors.trackingNumber = true;
        if (!formValues.courier) newErrors.courier = true;
        setErrors(newErrors);
        return newErrors;
    };


    return (
        <AccordionWrapper
            title="Selecciona la paqueteria"
            stepNumber={1}
            expanded={accordionExpanded}
            onChange={handleChange}
        >
            <div className='input_group'>

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

                <TextField
                    label="Ingresa un número de rastreo"
                    variant="outlined"
                    fullWidth
                    value={formValues.trackingNumber}
                    onChange={(e) => setFormValues({ ...formValues, trackingNumber: e.target.value })}
                />
                <ISwitch
                    label="Utilizar dirección del remitente"
                    checked={formValues.useSenderAddress}
                    onChange={(e:any) => setFormValues({ ...formValues, useSenderAddress: e.target.checked })}
                />

                <Button 
                    variant="contained" 
                    color="primary" 
                    fullWidth
                    onClick={() => {
                        const validationErrors = validateRequiredFields();
                        if (Object.keys(validationErrors).length > 0) {
                            console.error("Missing required fields:", validationErrors);
                            return;
                        }
                        setAccordionExpanded("date");
                    }}
                >
                    Siguiente
                </Button>
            </div>
        </AccordionWrapper>
    );
}