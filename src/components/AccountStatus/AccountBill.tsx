import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, FormControl, FormControlLabel, Select, MenuItem, InputLabel, Switch } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { IoAlertCircleOutline } from "react-icons/io5";
import { LiaCheckCircle } from "react-icons/lia";
const RedSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
        color: theme.palette.error.main,
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
        backgroundColor: theme.palette.error.main,
    },
}));

const defaultValues = {
    razonSocial: "",
    rfc: "",
    codigoPostal: "",
    regimenFiscal: "",
    usoCFDI: "",
};

export default function AccountBill(props: any) {

    const { open, handleClose } = props;

    const [formValues, setFormValues] = useState(defaultValues);
    const [alertOpen, setAlertOpen] = useState(false);
    const [confirmationOpen, setConfirmationOpen] = useState(false);
    const [isPersonaFisica, setIsPersonaFisica] = useState(true);

    const handleSave = () => {
        setAlertOpen(true);
    };

    const handleAlertClose = () => {
        setAlertOpen(false);
    };

    const handleConfirmationOpen = () => {
        setAlertOpen(false);
        setConfirmationOpen(true);
    };

    const handleConfirmationClose = () => {
        setConfirmationOpen(false);
        handleClose();
    };

    return (
        <>
            <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
                
                <DialogContent>

                    <div className='dialog_title'>Solicitud de factura</div>

                    <div className="input_group">

                        <div className='payment_details'>
                            <div className="detalle-pago-titulo">Detalle de pago</div>
                            <div className="detalle-pago-referencia">Referencia: RECARGA DE SALDO</div>
                            <div className="detalle-pago-monto">Monto: $2,000.00</div>
                            <div className="detalle-pago-fecha">Fecha: 4 ene 2025</div>
                        </div>
                        
                        <div>
                            <FormControlLabel
                                control={
                                    <RedSwitch
                                        checked={isPersonaFisica}
                                        onChange={() => setIsPersonaFisica(true)}
                                    />
                                }
                                label="Persona Física"
                            />
                            <FormControlLabel
                                control={
                                    <RedSwitch
                                        checked={!isPersonaFisica}
                                        onChange={() => setIsPersonaFisica(false)}
                                    />
                                }
                                label="Persona Moral"
                            />
                        </div>

                    
                    <div className="section-title">Datos personales</div>

                        <div className='input_row'>
                            <TextField
                                label="Razón Social"
                                fullWidth
                                value={formValues.razonSocial}
                                onChange={(e) => setFormValues({ ...formValues, razonSocial: e.target.value })}
                            />
                            <TextField
                                label="RFC"
                                fullWidth
                                value={formValues.rfc}
                                onChange={(e) => setFormValues({ ...formValues, rfc: e.target.value })}
                            />
                            <TextField
                                label="Código Postal"
                                fullWidth
                                value={formValues.codigoPostal}
                                onChange={(e) => setFormValues({ ...formValues, codigoPostal: e.target.value })}
                            />
                        </div>

                        <TextField
                            label="Régimen fiscal"
                            select
                            value={formValues.regimenFiscal}
                            fullWidth
                            onChange={(e) => setFormValues({ ...formValues, regimenFiscal: e.target.value })}
                        >
                            <MenuItem value="601">601 - GENERAL DE LEY PERSONAS MORALES</MenuItem>
                        </TextField>

                        <TextField
                            select
                            label="Uso de CFDI"
                            fullWidth
                            value={formValues.usoCFDI}
                            onChange={(e) => setFormValues({ ...formValues, usoCFDI: e.target.value })}
                        >
                            <MenuItem value="G01">G01 - ADQUISICIÓN DE MERCANCIAS</MenuItem>
                        </TextField>

                        <Button onClick={handleSave} color="primary" variant="contained" fullWidth>Guardar</Button>
                    </div>
                        
                    
                </DialogContent>
            </Dialog>




            <Dialog open={alertOpen} onClose={handleAlertClose} disableEscapeKeyDown>
                <DialogContent>
                    <div className="confirmation_content">
                        <div>
                            <IoAlertCircleOutline color='#ddd' size={70} />
                            <div className="confirmation_title">La solicitud de factura se enviará</div>
                            <div className="confirmation_detail">Favor verificar que los datos sean correctos antes de enviar la solicitud</div>
                        </div>

                        <div className="confirmation_buttons">
                            <Button onClick={handleConfirmationOpen} color="primary" variant="contained" fullWidth>Enviar</Button>
                            <Button onClick={handleAlertClose} color="secondary" variant="contained" fullWidth>Cancelar</Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>




            <Dialog open={confirmationOpen} onClose={handleConfirmationClose} disableEscapeKeyDown>
                <DialogContent>
                    <div className="confirmation_content">
                        <div>
                            <LiaCheckCircle color='#348560' size={70} />
                            <div className="confirmation_title">Solicitud enviada</div>
                            <div className="confirmation_detail">La solicitud de factura se ha enviado correctamente</div>
                        </div>
                        
                        <div className="confirmation_buttons">
                            <Button onClick={handleConfirmationClose} color="primary" variant="contained" fullWidth>OK</Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
};