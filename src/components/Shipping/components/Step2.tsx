import React, { useState } from 'react';
import { Button, Chip, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { AccordionWrapper } from '../../../elements/CustomAccordion';

export default function Step2(props: any) {
    const { formValues, setFormValues, accordionExpanded, setAccordionExpanded } = props;
    const [expanded, setExpanded] = useState<boolean>(false);
    const [errors, setErrors] = useState<{[key: string]: boolean}>({});

    const handleChange = (event: React.SyntheticEvent, isExpanded: boolean) => {
        setAccordionExpanded(isExpanded ? "destination" : "");
    };

    const validateRequiredFields = () => {
        const newErrors: {[key: string]: boolean} = {};
        if (!formValues.destination_name) newErrors.destination_name = true;
        if (!formValues.destination_company) newErrors.destination_company = true;
        if (!formValues.destination_email) newErrors.destination_email = true;
        if (!formValues.destination_rfc) newErrors.destination_rfc = true;
        if (!formValues.destination_phone) newErrors.destination_phone = true;
        if (!formValues.destination_street) newErrors.destination_street = true;
        if (!formValues.destination_postalCode) newErrors.destination_postalCode = true;
        if (!formValues.destination_neighborhood) newErrors.destination_neighborhood = true;
        if (!formValues.destination_city) newErrors.destination_city = true;
        if (!formValues.destination_state) newErrors.destination_state = true;
        if (!formValues.destination_reference) newErrors.destination_reference = true;
        if (!formValues.destination_exteriorNumber) newErrors.destination_exteriorNumber = true;
        setErrors(newErrors);
        return newErrors;
    };

    return (
        <AccordionWrapper
            title="Datos de destino"
            stepNumber={2}
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
                        value={formValues.destination_name}
                        onChange={(e) => setFormValues({ ...formValues, destination_name: e.target.value })}
                        required
                        error={errors.destination_name === true}
                    />
                    <TextField
                        label="Compañía"
                        variant="outlined"
                        fullWidth
                        value={formValues.destination_company}
                        onChange={(e) => setFormValues({ ...formValues, destination_company: e.target.value })}
                        required
                        error={errors.destination_company === true}
                    />
                </div>
                <div className="input_row">
                    <TextField
                        label="Correo electrónico"
                        variant="outlined"
                        fullWidth
                        value={formValues.destination_email}
                        onChange={(e) => setFormValues({ ...formValues, destination_email: e.target.value })}
                        required
                        error={errors.destination_email === true}
                    />
                    <TextField
                        label="RFC"
                        variant="outlined"
                        fullWidth
                        value={formValues.destination_rfc}
                        onChange={(e) => setFormValues({ ...formValues, destination_rfc: e.target.value })}
                        required
                        error={errors.destination_rfc === true}
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
                        value={formValues.destination_phone}
                        onChange={(e) => setFormValues({ ...formValues, destination_phone: e.target.value })}
                        required
                        error={errors.destination_phone === true}
                    />
                    <TextField
                        label="Calle"
                        variant="outlined"
                        fullWidth
                        value={formValues.destination_street}
                        onChange={(e) => setFormValues({ ...formValues, destination_street: e.target.value })}
                        required
                        error={errors.destination_street === true}
                    />
                    <TextField
                        label="Código postal"
                        variant="outlined"
                        fullWidth
                        value={formValues.destination_postalCode}
                        onChange={(e) => setFormValues({ ...formValues, destination_postalCode: e.target.value })}
                        required
                        error={errors.destination_postalCode === true}
                    />
                </div>
                <div className="input_row">
                    <FormControl variant="outlined" fullWidth>
                        <InputLabel>Colonia</InputLabel>
                        <Select
                            value={formValues.destination_neighborhood}
                            onChange={(e) => setFormValues({ ...formValues, destination_neighborhood: e.target.value })}
                            required
                            error={errors.destination_neighborhood === true}
                        >
                            <MenuItem value="La Herradura">La Herradura</MenuItem>
                            {/* Add more options as needed */}
                        </Select>
                    </FormControl>
                    <TextField
                        label="Ciudad"
                        variant="outlined"
                        fullWidth
                        value={formValues.destination_city}
                        onChange={(e) => setFormValues({ ...formValues, destination_city: e.target.value })}
                        required
                        error={errors.destination_city === true}
                    />
                    <TextField
                        label="Estado"
                        variant="outlined"
                        fullWidth
                        value={formValues.destination_state}
                        onChange={(e) => setFormValues({ ...formValues, destination_state: e.target.value })}
                        required
                        error={errors.destination_state === true}
                    />
                </div>

                <div className="section-title">Complementos</div>
                <div className="input_row">
                    <TextField
                        label="Referencia"
                        variant="outlined"
                        fullWidth
                        value={formValues.destination_reference}
                        onChange={(e) => setFormValues({ ...formValues, destination_reference: e.target.value })}
                        required
                        error={errors.destination_reference === true}
                    />
                    <TextField
                        label="Número exterior"
                        variant="outlined"
                        fullWidth
                        value={formValues.destination_exteriorNumber}
                        onChange={(e) => setFormValues({ ...formValues, destination_exteriorNumber: e.target.value })}
                        required
                        error={errors.destination_exteriorNumber === true}
                    />
                </div>
                <div>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        fullWidth
                        onClick={() => setAccordionExpanded("origin")}
                        style={{ marginBottom: '10px' }}
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
            </div>
        </AccordionWrapper>
    );
}