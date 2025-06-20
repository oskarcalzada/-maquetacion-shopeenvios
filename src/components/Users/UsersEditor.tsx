import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Dialog, DialogContent, Button, TextField, ButtonBase } from '@mui/material';
import minutos from "../../assets/img/shipment/99minutos.png";
import estafeta from "../../assets/img/shipment/estafeta.png";
import fedex from "../../assets/img/shipment/fedex.png";
import dhl from "../../assets/img/shipment/dhl.png";
import redpack from "../../assets/img/shipment/redpack.png";
import clsx from "clsx";

const defaultValues = {
    name: '',
    username: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
    courier: '',
};

export default function UsersEditor(props: any) {

    const { open, onClose, initialData = null } = props;
    const [formValues, setFormValues] = useState(defaultValues);

    useEffect(() => {
        if (initialData) {
            setFormValues(initialData);
        } else {
            setFormValues(defaultValues);
        }
    }, [initialData, open]);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = () => {
        if (formValues.email !== formValues.confirmEmail) {
            alert('Los correos electrónicos no coinciden.');
            return;
        }
        if (formValues.password !== formValues.confirmPassword) {
            alert('Las contraseñas no coinciden.');
            return;
        }
        // Handle form submission
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
            <DialogContent>
                <h2 className="dialog_title">{initialData ? "Editar usuario" : "Nuevo usuario"}</h2>
                <div className="input_group">
                    <div className="section-title">Datos personales</div>
                    <div className="input_row">
                        <TextField
                            label="Nombre"
                            name="name"
                            value={formValues.name}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                        <TextField
                            label="Nombre de usuario"
                            name="username"
                            value={formValues.username}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                    </div>
                    <div className="section-title">Datos de acceso</div>
                    <div className="input_row">
                        <TextField
                            label="Correo electrónico"
                            name="email"
                            value={formValues.email}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                        <TextField
                            label="Repetir correo electrónico"
                            name="confirmEmail"
                            value={formValues.confirmEmail}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                    </div>
                    <div className="input_row">
                        <TextField
                            label="Contraseña"
                            name="password"
                            type="password"
                            value={formValues.password}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                        <TextField
                            label="Repetir contraseña"
                            name="confirmPassword"
                            type="password"
                            value={formValues.confirmPassword}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                    </div>
                    
                    <div className="section-title">Servicio activo</div>
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
                    
                    <Button onClick={handleSubmit} variant="contained" color="primary" fullWidth>
                        {initialData ? "Actualizar" : "Registrar"}
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}

UsersEditor.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    initialData: PropTypes.object
};
