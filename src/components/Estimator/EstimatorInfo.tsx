import React from 'react';
import estimator_info from '../../assets/img/estimator_info.png';

import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Grid } from '@mui/material';

export default function EstimatorInfo(props: any) {
    const { open, setOpen } = props;

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog open={open} onClose={handleClose} className='estimator_info' sx={{ '& .MuiDialog-paper': { maxWidth: '550px', width: '100%' } }}>
            
            <DialogContent>
                <div className='flex_column'>
                    <h2 className='dialog_title'>Importante</h2>
                    <div className='estimator_info_text'>
                        <p>La tarifa se calcula con base en el peso real o el peso volumétrico, dependiendo de cuál sea mayor.</p>
                        <p>El peso volumétrico se determina mediante la fórmula:</p>
                    </div>
                    <div className='estimator_img_wrapper'>
                        <img src={estimator_info} alt="Estimator Info" style={{ width: '100%' }} />
                    </div>
                    <Button onClick={handleClose} variant="contained" color="primary" fullWidth>
                        Cerrar
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};
