import React, { useState } from 'react';
import { Button, Chip, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { AccordionWrapper } from '../../../elements/CustomAccordion';

export default function Step1(props: any) {
    const { formValues, setFormValues, accordionExpanded, setAccordionExpanded } = props;
    const [errors, setErrors] = useState<{[key: string]: boolean}>({});
    
    const handleChange = (event: React.SyntheticEvent, isExpanded: boolean) => {
        setAccordionExpanded(isExpanded ? "origin" : "");
    };

    /*=============================================  
    
    ==============================================*/
    const validateRequiredFields = () => {
        const newErrors: {[key: string]: boolean} = {};
        if (!formValues.origin_name) newErrors.origin_name = true;
        if (!formValues.origin_company) newErrors.origin_company = true;
        if (!formValues.origin_email) newErrors.origin_email = true;
        if (!formValues.origin_rfc) newErrors.origin_rfc = true;
        if (!formValues.origin_phone) newErrors.origin_phone = true;
        if (!formValues.origin_street) newErrors.origin_street = true;
        if (!formValues.origin_postalCode) newErrors.origin_postalCode = true;
        if (!formValues.origin_neighborhood) newErrors.origin_neighborhood = true;
        if (!formValues.origin_city) newErrors.origin_city = true;
        if (!formValues.origin_state) newErrors.origin_state = true;
        if (!formValues.origin_reference) newErrors.origin_reference = true;
        if (!formValues.origin_exteriorNumber) newErrors.origin_exteriorNumber = true;
        setErrors(newErrors);
        return newErrors;
    };

    return (
        <AccordionWrapper
            title="Datos de origen"
            stepNumber={1}
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
                        value={formValues.origin_name}
                        onChange={(e) => setFormValues({ ...formValues, origin_name: e.target.value })}
                        required
                        error={errors.origin_name === true}
                    />
                    <TextField
                        label="Compañía"
                        variant="outlined"
                        fullWidth
                        value={formValues.origin_company}
                        onChange={(e) => setFormValues({ ...formValues, origin_company: e.target.value })}
                        required
                        error={errors.origin_company === true}
                    />
                </div>
                <div className="input_row">
                    <TextField
                        label="Correo electrónico"
                        variant="outlined"
                        fullWidth
                        value={formValues.origin_email}
                        onChange={(e) => setFormValues({ ...formValues, origin_email: e.target.value })}
                        required
                        error={errors.origin_email === true}
                    />
                    <TextField
                        label="RFC"
                        variant="outlined"
                        fullWidth
                        value={formValues.origin_rfc}
                        onChange={(e) => setFormValues({ ...formValues, origin_rfc: e.target.value })}
                        required
                        error={errors.origin_rfc === true}
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
                        value={formValues.origin_phone}
                        onChange={(e) => setFormValues({ ...formValues, origin_phone: e.target.value })}
                        required
                        error={errors.origin_phone === true}
                    />
                    <TextField
                        label="Calle"
                        variant="outlined"
                        fullWidth
                        value={formValues.origin_street}
                        onChange={(e) => setFormValues({ ...formValues, origin_street: e.target.value })}
                        required
                        error={errors.origin_street === true}
                    />
                    <TextField
                        label="Código postal"
                        variant="outlined"
                        fullWidth
                        value={formValues.origin_postalCode}
                        onChange={(e) => setFormValues({ ...formValues, origin_postalCode: e.target.value })}
                        required
                        error={errors.origin_postalCode === true}
                    />
                </div>
                <div className="input_row">
                    <FormControl variant="outlined" fullWidth>
                        <InputLabel>Colonia</InputLabel>
                        <Select
                            value={formValues.origin_neighborhood}
                            onChange={(e) => setFormValues({ ...formValues, origin_neighborhood: e.target.value })}
                            required
                            error={errors.origin_neighborhood === true}
                        >
                            <MenuItem value="La Herradura">La Herradura</MenuItem>
                            {/* Add more options as needed */}
                        </Select>
                    </FormControl>
                    <TextField
                        label="Ciudad"
                        variant="outlined"
                        fullWidth
                        value={formValues.origin_city}
                        onChange={(e) => setFormValues({ ...formValues, origin_city: e.target.value })}
                        required
                        error={errors.origin_city === true}
                    />
                    <TextField
                        label="Estado"
                        variant="outlined"
                        fullWidth
                        value={formValues.origin_state}
                        onChange={(e) => setFormValues({ ...formValues, origin_state: e.target.value })}
                        required
                        error={errors.origin_state === true}
                    />
                </div>
            
                <div className="section-title">Complementos</div>
                <div className="input_row" >
                    <TextField
                        label="Referencia"
                        variant="outlined"
                        fullWidth
                        value={formValues.origin_reference}
                        onChange={(e) => setFormValues({ ...formValues, origin_reference: e.target.value })}
                        required
                        error={errors.origin_reference === true}
                    />
                    <TextField
                        label="Número exterior"
                        variant="outlined"
                        fullWidth
                        value={formValues.origin_exteriorNumber}
                        onChange={(e) => setFormValues({ ...formValues, origin_exteriorNumber: e.target.value })}
                        required
                        error={errors.origin_exteriorNumber === true}
                    />
                </div>
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
                        setAccordionExpanded("destination");
                    }}
                >
                    Siguiente
                </Button>
            </div>
        </AccordionWrapper>
    );
}