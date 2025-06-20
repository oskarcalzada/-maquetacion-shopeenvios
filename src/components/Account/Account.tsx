import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useSnackbar } from "notistack";
import Box from "../../elements/Box";
import { Chip } from "@mui/material";

const exampleData = {
    email: 'juan.perez@example.com',
    repeatEmail: 'juan.perez@example.com',
    firstName: 'Juan',
    lastName: 'Pérez García',
    phone: '+52 55 1234 5678',
    rfc: 'PEGJ850101ABC',
    monthlyShipments: '6-20',
    website: 'https://mitienda.com'
};

export default function Account() {
    const { enqueueSnackbar } = useSnackbar();
    
    /*===============================================
    STATE FOR FORM VALUES
    =================================================*/
    const [formValues, setFormValues] = useState(exampleData);

    /*===============================================
    HANDLE FORM SUBMIT
    =================================================*/
    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // Validate emails match
        if (formValues.email !== formValues.repeatEmail) {
            enqueueSnackbar('Los correos no coinciden', { variant: 'error' });
            return;
        }

        // Simulate an API call
        console.log("Account form submitted with values:", formValues);
        
        // Replace with actual API response
        enqueueSnackbar('Datos guardados exitosamente', { variant: 'success' });
    };

    return (
        <div className="component_container">
            <div className="component_title">
                <h1>Mi Cuenta</h1>
                <p className="subtitle">Configura tu cuenta y preferencias</p>
            </div>
            <Box>
                <form className="login-form" onSubmit={handleFormSubmit}>
                    <TextField
                        id="email"
                        name="email"
                        label="Correo"
                        type="email"
                        fullWidth
                        required
                        value={formValues.email}
                        onChange={e => setFormValues({ ...formValues, email: e.target.value })}
                    />
                    
                    <TextField
                        id="repeatEmail"
                        name="repeatEmail"
                        label="Repetir correo"
                        type="email"
                        fullWidth
                        required
                        value={formValues.repeatEmail}
                        onChange={e => setFormValues({ ...formValues, repeatEmail: e.target.value })}
                    />

                    <div style={{ marginTop: '20px', marginBottom: '10px', fontWeight: 'bold', color: '#666' }}>
                        Datos de contacto
                    </div>

                    <div className="input_row">
                        <TextField
                            id="firstName"
                            name="firstName"
                            label="Nombre"
                            fullWidth
                            required
                            value={formValues.firstName}
                            onChange={e => setFormValues({ ...formValues, firstName: e.target.value })}
                        />

                        <TextField
                            id="lastName"
                            name="lastName"
                            label="Apellidos"
                            fullWidth
                            required
                            value={formValues.lastName}
                            onChange={e => setFormValues({ ...formValues, lastName: e.target.value })}
                        />
                    </div>

                    <TextField
                        id="phone"
                        name="phone"
                        label="Teléfono"
                        type="tel"
                        fullWidth
                        required
                        value={formValues.phone}
                        onChange={e => setFormValues({ ...formValues, phone: e.target.value })}
                    />

                    <TextField
                        id="rfc"
                        name="rfc"
                        label="RFC"
                        fullWidth
                        required
                        value={formValues.rfc}
                        onChange={e => setFormValues({ ...formValues, rfc: e.target.value })}
                    />

                    <TextField
                        select
                        id="monthlyShipments"
                        name="monthlyShipments"
                        label="Cantidad de envíos mensuales"
                        fullWidth
                        required
                        value={formValues.monthlyShipments}
                        onChange={e => setFormValues({ ...formValues, monthlyShipments: e.target.value })}
                    >
                        <MenuItem value="1-5">1 a 5 envíos</MenuItem>
                        <MenuItem value="6-20">6 a 20 envíos</MenuItem>
                        <MenuItem value="21-50">21 a 50 envíos</MenuItem>
                        <MenuItem value="51-100">51 a 100 envíos</MenuItem>
                        <MenuItem value="100+">Más de 100</MenuItem>
                    </TextField>

                    <TextField
                        id="website"
                        name="website"
                        label="Sitio Web o Facebook"
                        fullWidth
                        required
                        value={formValues.website}
                        onChange={e => setFormValues({ ...formValues, website: e.target.value })}
                    />

                    <div className="Credit">
                        Credito: <Chip label="Activo" color="success" size="small" style={{ marginLeft: '5px' }} />
                    </div>
                    
                    <Button 
                        type="submit" 
                        variant="contained" 
                        color="primary" 
                        fullWidth
                    >
                        GUARDAR
                    </Button>
                </form>
            </Box>
        </div>
    )
}