import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import MenuItem from "@mui/material/MenuItem";
import { useSnackbar } from "notistack";
import Terms from "./utils/Terms";
import Privacy from "./utils/Privacy";


function Signup(props: any) {
    const { 
        onSigninClick                        
    } = props;
    const { enqueueSnackbar } = useSnackbar();
    
    /*===============================================
    STATE FOR FORM VALUES
    =================================================*/
    const [formValues, setFormValues] = useState({
        email: '',
        repeatEmail: '',
        firstName: '',
        lastName: '',
        phone: '',
        rfc: '',
        monthlyShipments: '',
        website: '',
        acceptTerms: false
    });

    /*===============================================
    STATE FOR DIALOGS
    =================================================*/
    const [termsOpen, setTermsOpen] = useState(false);
    const [privacyOpen, setPrivacyOpen] = useState(false);

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

        // Validate terms acceptance
        if (!formValues.acceptTerms) {
            enqueueSnackbar('Debes aceptar los términos y condiciones', { variant: 'error' });
            return;
        }

        // Simulate an API call
        console.log("Signup form submitted with values:", formValues);
        
        // Replace with actual API response
        enqueueSnackbar('Cuenta creada exitosamente. Por favor, inicia sesión.', { variant: 'success' });
        onSigninClick();
    };

    return (
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

            <div style={{ marginTop: '10px', marginBottom: '10px', display: 'flex', alignItems: 'flex-start' }}>
                <Checkbox
                    checked={formValues.acceptTerms}
                    onChange={e => setFormValues({ ...formValues, acceptTerms: e.target.checked })}
                    color="primary"
                    style={{ marginTop: '-9px', marginRight: '8px' }}
                />
                <span style={{ fontSize: '14px', lineHeight: '20px' }}>
                    Acepto los{' '}
                    <span 
                        onClick={() => setTermsOpen(true)}
                        style={{ 
                            color: '#1976d2', 
                            cursor: 'pointer', 
                            textDecoration: 'underline' 
                        }}
                    >
                        Términos y Condiciones
                    </span>
                    {' '}y las{' '}
                    <span 
                        onClick={() => setPrivacyOpen(true)}
                        style={{ 
                            color: '#1976d2', 
                            cursor: 'pointer', 
                            textDecoration: 'underline' 
                        }}
                    >
                        Políticas de Privacidad
                    </span>
                </span>
            </div>
            
            <Button 
                type="submit" 
                variant="contained" 
                color="primary" 
                fullWidth
                disabled={!formValues.acceptTerms}
            >
                CREAR CUENTA
            </Button>
            
            <Button 
                type="button" 
                variant="outlined" 
                color="secondary" 
                fullWidth
                onClick={onSigninClick}
            >
                YA TENGO CUENTA
            </Button>

            {/* Terms and Privacy Dialogs */}
            <Terms 
                open={termsOpen} 
                onClose={() => setTermsOpen(false)} 
            />
            <Privacy 
                open={privacyOpen} 
                onClose={() => setPrivacyOpen(false)} 
            />
        </form>
    );
}

export default Signup;