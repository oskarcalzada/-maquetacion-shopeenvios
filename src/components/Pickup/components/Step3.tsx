import React, { useState } from 'react';
import { Button, Chip, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { AccordionWrapper } from '../../../elements/CustomAccordion';

export default function Step3(props: any) {
    const { formValues, setFormValues, accordionExpanded, setAccordionExpanded } = props;
    const [errors, setErrors] = useState<{[key: string]: boolean}>({});
    
    const handleChange = (event: React.SyntheticEvent, isExpanded: boolean) => {
        setAccordionExpanded(isExpanded ? "address" : "");
    };

    /*=============================================  
    
    ==============================================*/
    const validateRequiredFields = () => {
        const newErrors: {[key: string]: boolean} = {};
        if (!formValues.name) newErrors.name = true;
        if (!formValues.company) newErrors.company = true;
        if (!formValues.email) newErrors.email = true;
        if (!formValues.rfc) newErrors.rfc = true;
        if (!formValues.phone) newErrors.phone = true;
        if (!formValues.street) newErrors.street = true;
        if (!formValues.postalCode) newErrors.postalCode = true;
        if (!formValues.neighborhood) newErrors.neighborhood = true;
        if (!formValues.city) newErrors.city = true;
        if (!formValues.state) newErrors.state = true;
        if (!formValues.reference) newErrors.reference = true;
        if (!formValues.exteriorNumber) newErrors.exteriorNumber = true;
        setErrors(newErrors);
        return newErrors;
    };

    return (
        <AccordionWrapper
            title="Dirección"
            stepNumber={3}
            expanded={accordionExpanded}
            onChange={handleChange}
        >
            <div className='input_group'>
                <div className="section-title">Datos personales</div>
                <div className="input_row">
                    <TextField
                        label="Nombre"
                        variant="outlined"
                        fullWidth   
                        value={formValues.name}
                        onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
                        required
                        error={errors.name === true}
                    />
                    <TextField
                        label="Compañía"
                        variant="outlined"
                        fullWidth
                        value={formValues.company}
                        onChange={(e) => setFormValues({ ...formValues, company: e.target.value })}
                        required
                        error={errors.company === true}
                    />
                </div>
                <div className="input_row">
                    <TextField
                        label="Correo electrónico"
                        variant="outlined"
                        fullWidth
                        value={formValues.email}
                        onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
                        required
                        error={errors.email === true}
                    />
                    <TextField
                        label="RFC"
                        variant="outlined"
                        fullWidth
                        value={formValues.rfc}
                        onChange={(e) => setFormValues({ ...formValues, rfc: e.target.value })}
                        required
                        error={errors.rfc === true}
                    />
                </div>
            
                <div className='label_row'>
                    <div className="section-title" style={{ marginRight: 8 }}>Dirección</div>
                    <Chip
                        label="Buscar dirección"
                        color="primary"
                        size="small"
                        icon={<SearchIcon />}
                        style={{ cursor: 'pointer' }}
                    />
                </div>
            
                <div className="input_row">
                    <TextField
                        label="Teléfono"
                        variant="outlined"
                        fullWidth
                        value={formValues.phone}
                        onChange={(e) => setFormValues({ ...formValues, phone: e.target.value })}
                        required
                        error={errors.phone === true}
                    />
                    <TextField
                        label="Calle"
                        variant="outlined"
                        fullWidth
                        value={formValues.street}
                        onChange={(e) => setFormValues({ ...formValues, street: e.target.value })}
                        required
                        error={errors.street === true}
                    />
                    <TextField
                        label="Código postal"
                        variant="outlined"
                        fullWidth
                        value={formValues.postalCode}
                        onChange={(e) => setFormValues({ ...formValues, postalCode: e.target.value })}
                        required
                        error={errors.postalCode === true}
                    />
                </div>
                <div className="input_row">
                    <FormControl variant="outlined" fullWidth>
                        <InputLabel>Colonia</InputLabel>
                        <Select
                            value={formValues.neighborhood}
                            onChange={(e) => setFormValues({ ...formValues, neighborhood: e.target.value })}
                            required
                            error={errors.neighborhood === true}
                        >
                            <MenuItem value="La Herradura">La Herradura</MenuItem>
                            {/* Add more options as needed */}
                        </Select>
                    </FormControl>
                    <TextField
                        label="Ciudad"
                        variant="outlined"
                        fullWidth
                        value={formValues.city}
                        onChange={(e) => setFormValues({ ...formValues, city: e.target.value })}
                        required
                        error={errors.city === true}
                    />
                    <TextField
                        label="Estado"
                        variant="outlined"
                        fullWidth
                        value={formValues.state}
                        onChange={(e) => setFormValues({ ...formValues, state: e.target.value })}
                        required
                        error={errors.state === true}
                    />
                </div>
            
                <div className="section-title">Complementos</div>
                <div className="input_row" >
                    <TextField
                        label="Referencia"
                        variant="outlined"
                        fullWidth
                        value={formValues.reference}
                        onChange={(e) => setFormValues({ ...formValues, reference: e.target.value })}
                        required
                        error={errors.reference === true}
                    />
                    <TextField
                        label="Número exterior"
                        variant="outlined"
                        fullWidth
                        value={formValues.exteriorNumber}
                        onChange={(e) => setFormValues({ ...formValues, exteriorNumber: e.target.value })}
                        required
                        error={errors.exteriorNumber === true}
                    />
                </div>
                <Button 
                    variant="contained" 
                    color="primary" 
                    fullWidth
                    onClick={() => setAccordionExpanded("date")}
                >
                    Regresar
                </Button>
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
                        setAccordionExpanded("package");
                    }}
                >
                    Siguiente
                </Button>
            </div>
        </AccordionWrapper>
    );
}