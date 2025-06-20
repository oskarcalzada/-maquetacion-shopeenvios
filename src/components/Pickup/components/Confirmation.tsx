import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';

interface ShippingGenerateProps {
    open: boolean;
    onClose: () => void;
    balance: number;
    submit: () => void;
}

export default function Confirmation({ open, onClose, balance, submit }: ShippingGenerateProps) {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogContent>
                <div className="confirmation_content">
                    <div className="confirmation_title">¿Continuar con la generación del envío?</div>
                        <div className="confirmation_row"><b>Saldo disponible:</b> ${balance}</div>

                        <div className="confirmation_buttons">
                    <Button 
                        onClick={submit} 
                        color="primary" 
                        fullWidth
                        variant="contained">
                            Confirmar
                    </Button>
                    <Button 
                        onClick={onClose} 
                        color="secondary" 
                        fullWidth
                        variant="contained">
                            Cancelar
                    </Button>
                </div>
                </div>

                
            </DialogContent>
        </Dialog>
    );
}
