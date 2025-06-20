import React, { useState } from 'react';
import { Button, Chip, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { AccordionWrapper } from '../../../elements/CustomAccordion';

export default function Step2(props: any) {
    const { formValues, setFormValues, accordionExpanded, setAccordionExpanded } = props;
    const [expanded, setExpanded] = useState<boolean>(false);
    const [errors, setErrors] = useState<{[key: string]: boolean}>({});

    const handleChange = (event: React.SyntheticEvent, isExpanded: boolean) => {
        setAccordionExpanded(isExpanded ? "date" : "");
    };

    const validateRequiredFields = () => {
        const newErrors: {[key: string]: boolean} = {};
        if (!formValues.pickupDate) newErrors.pickupDate = true;
        if (!formValues.pickupTime) newErrors.pickupTime = true;
        if (!formValues.closingTime) newErrors.closingTime = true;
        setErrors(newErrors);
        return newErrors;
    };


    return (
        <AccordionWrapper
            title="Fecha de recolección"
            stepNumber={2}
            expanded={accordionExpanded}
            onChange={handleChange}
        >
            <div className='input_group'>

                <div className="input_row">
                    <TextField
                        label="Fecha de recolección"
                        type="date"
                        value={formValues.pickupDate}
                        onChange={(e) => setFormValues({ ...formValues, pickupDate: e.target.value })}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        fullWidth
                        error={errors.pickupDate === true}
                    />
                    <TextField
                        select
                        value={formValues.pickupTime}
                        onChange={(e) => setFormValues({ ...formValues, pickupTime: e.target.value })}
                        label="Hora de entrega"
                        fullWidth
                        error={errors.pickupTime === true}
                    >
                        <MenuItem value="14:00">14:00</MenuItem>
                        <MenuItem value="15:00">15:00</MenuItem>
                        {/* Add more options as needed */}
                    </TextField>

                    <TextField
                        select
                        value={formValues.closingTime}
                        onChange={(e) => setFormValues({ ...formValues, closingTime: e.target.value })}
                        label="Hora de cierre"
                        fullWidth
                        error={errors.closingTime === true}
                    >
                        <MenuItem value="15:00">15:00</MenuItem>
                        <MenuItem value="16:00">16:00</MenuItem>
                        {/* Add more options as needed */}
                    </TextField>

                    
                </div>
                
                <Button 
                    variant="contained" 
                    color="primary" 
                    fullWidth
                    onClick={() => setAccordionExpanded("courier")}
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
                        setAccordionExpanded("address");
                    }}
                >
                    Siguiente
                </Button>
                
            </div>
        </AccordionWrapper>
    );
}