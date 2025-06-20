import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

interface AddressesSearchProps {
    open: boolean;
    handleClose: () => void;
}

const defaultValues = {
    searchQuery: "",
};

export default function SearchModal(props: any) {

    const { open, handleClose } = props;
    const [formValues, setFormValues] = useState(defaultValues);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({ ...formValues, [e.target.id]: e.target.value });
    };

    return (
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
            <DialogTitle>Buscar</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="searchQuery"
                    label="Nombre, Ciudad, Colonia, Estado, CP, Paquetería"
                    type="text"
                    fullWidth
                    variant="outlined"
                    value={formValues.searchQuery}
                    onChange={handleInputChange}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />
            </DialogContent>
            <DialogActions>
                <Button 
                    onClick={handleClose} 
                    color="secondary" 
                    variant="contained"
                >
                    Cancelar
                </Button>
                <Button 
                    onClick={handleClose} 
                    color="primary" 
                    startIcon={<SearchIcon />}
                    variant="contained"
                >
                    Buscar
                </Button>
            </DialogActions>
        </Dialog>
    );
};
