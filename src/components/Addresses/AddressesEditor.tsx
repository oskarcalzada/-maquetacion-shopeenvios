import React, { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const defaultValues = {
    name: "",
    company: "",
    phone: "",
    street: "",
    courier: "",
    postal: "",
    neighborhood: "",
    city: "",
    state: ""
};

export default function AddressesEditor({ open, handleClose, initialData }: { open: boolean; handleClose: () => void; initialData: any }) {
    const [formValues, setFormValues] = useState(defaultValues);

    useEffect(() => {
        if (initialData) {
            setFormValues(initialData);
        } else {
            setFormValues(defaultValues);
        }
    }, [initialData]);

    return (
        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
            <DialogContent>

                <h2 className="dialog_title">{initialData ? "Editar dirección" : "Nueva dirección"}</h2>
                <div className="input_group">
                    <div className="section-title">Datos personales</div>
                    <div className="input_row">
                        <TextField 
                            label="Nombre" 
                            fullWidth 
                            value={formValues.name}
                            onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
                        />
                        <TextField 
                            label="Compañía" 
                            fullWidth 
                            value={formValues.company}
                            onChange={(e) => setFormValues({ ...formValues, company: e.target.value })}
                        />
                    </div>
                    <div className="section-title">Dirección</div>
                    <div className="input_row">
                        <TextField 
                            label="Teléfono" 
                            fullWidth 
                            value={formValues.phone}
                            onChange={(e) => setFormValues({ ...formValues, phone: e.target.value })}
                        />
                        <TextField 
                            label="Calle" 
                            fullWidth 
                            value={formValues.street}
                            onChange={(e) => setFormValues({ ...formValues, street: e.target.value })}
                        />
                        <TextField 
                            label="Paquetería" 
                            fullWidth 
                            value={formValues.courier}
                            onChange={(e) => setFormValues({ ...formValues, courier: e.target.value })}
                        />
                        <TextField 
                            label="Código postal" 
                            fullWidth 
                            value={formValues.postal}
                            onChange={(e) => setFormValues({ ...formValues, postal: e.target.value })}
                        />
                    </div>
                    <div className="input_row">
                        <TextField 
                            label="Colonia" 
                            fullWidth 
                            value={formValues.neighborhood}
                            onChange={(e) => setFormValues({ ...formValues, neighborhood: e.target.value })}
                        />
                        <TextField 
                            label="Ciudad" 
                            fullWidth 
                            value={formValues.city}
                            onChange={(e) => setFormValues({ ...formValues, city: e.target.value })}
                        />
                        <TextField 
                            label="Estado" 
                            fullWidth 
                            value={formValues.state}
                            onChange={(e) => setFormValues({ ...formValues, state: e.target.value })}
                        />
                    </div>
                    <Button onClick={handleClose} variant="contained" color="primary" fullWidth>Guardar</Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
