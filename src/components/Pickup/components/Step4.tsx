import React, { useEffect, useState } from 'react';
import { Button, Divider, IconButton, InputAdornment, TextField } from "@mui/material";
import { LiaQuestionCircleSolid } from "react-icons/lia";
import EstimatorInfo from '../../Estimator/EstimatorInfo';
import { AccordionWrapper } from '../../../elements/CustomAccordion';
import { LiaTruckMovingSolid } from "react-icons/lia";

export default function Step3(props: any) {
    const { formValues, setFormValues, accordionExpanded, setAccordionExpanded } = props;
    const [infoDialogOpen, setInfoDialogOpen] = useState(false);
    const [errors, setErrors] = useState<{[key: string]: boolean}>({});

    const handleChange = (event: React.SyntheticEvent, isExpanded: boolean) => {
        setAccordionExpanded(isExpanded ? "package" : "");
    };

    const validateRequiredFields = () => {
        const newErrors: {[key: string]: boolean} = {};
        if (!formValues.packageInfo.height) newErrors.height = true;
        if (!formValues.packageInfo.length) newErrors.length = true;
        if (!formValues.packageInfo.width) newErrors.width = true;
        if (!formValues.packageInfo.weight) newErrors.weight = true;
        if (!formValues.packageInfo.packageType) newErrors.packageType = true;
        if (!formValues.packageInfo.product) newErrors.product = true;
        if (!formValues.packageInfo.paperType) newErrors.paperType = true;
        if (formValues.packageInfo.insurePackage && !formValues.packageInfo.insuranceValue) newErrors.insuranceValue = true;
        
        setErrors(newErrors);
        return newErrors;
    };

    const updatePackageInfo = (field: string, value: any) => {
        setFormValues((prevValues: any) => ({
            ...prevValues,
            packageInfo: {
                ...prevValues.packageInfo,
                [field]: value
            }
        }));
    };

    useEffect(() => {
        const { width, height, length } = formValues.packageInfo;
        // Convert empty strings to 0 for calculation purposes
        const numWidth = width === "" ? 0 : Number(width);
        const numHeight = height === "" ? 0 : Number(height);
        const numLength = length === "" ? 0 : Number(length);
        
        const volumetric = Math.ceil((numWidth * numHeight * numLength) / 5000); 
        setFormValues((prevValues: any) => ({
            ...prevValues,
            packageInfo: {
                ...prevValues.packageInfo,
                volumetricWeight: volumetric
            }
        }));
    }, [formValues.packageInfo.width, formValues.packageInfo.height, formValues.packageInfo.length]);
    
    return (
        <AccordionWrapper
            title="Paquetes"
            stepNumber={4}
            expanded={accordionExpanded}
            onChange={handleChange}
        >
            <div className='input_group'>
                <div className="section-title">Dimensiones</div>
                <div className='input_group'>
                    <div className="input_row">
                        <TextField
                            label="Alto"
                            variant="outlined"
                            type="number"
                            name="height"
                            fullWidth
                            value={formValues.packageInfo.height}
                            onChange={(e) => updatePackageInfo("height", e.target.value)}
                            inputProps={{ min: 0 }}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">cm</InputAdornment>,
                            }}
                            required
                            error={errors.height === true}
                        />
                        <TextField
                            label="Largo"
                            variant="outlined"
                            type="number"
                            name="length"
                            fullWidth
                            value={formValues.packageInfo.length}
                            onChange={(e) => updatePackageInfo("length", e.target.value)}
                            inputProps={{ min: 0 }}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">cm</InputAdornment>,
                            }}
                            required
                            error={errors.length === true}
                        />
                        <TextField
                            label="Ancho"
                            variant="outlined"
                            type="number"
                            name="width"
                            fullWidth
                            value={formValues.packageInfo.width}
                            onChange={(e) => updatePackageInfo("width", e.target.value)}
                            inputProps={{ min: 0 }}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">cm</InputAdornment>,
                            }}
                            required
                            error={errors.width === true}
                        />
                        <TextField
                            label="Peso"
                            variant="outlined"
                            type="number"
                            name="weight"
                            fullWidth
                            value={formValues.packageInfo.weight}
                            onChange={(e) => updatePackageInfo("weight", e.target.value)}
                            inputProps={{ min: 0 }}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">kg</InputAdornment>,
                            }}
                            required
                            error={errors.weight === true}
                        />
                        <div className="volumetric_weight_wrapper">
                            <div className="volumetric_weight_label">Peso Volumétrico:</div>
                            <div className="volumetric_weight_value">{formValues.packageInfo.volumetricWeight} kg</div>
                        </div>
                    </div>
                    
                    <div className="info_message">
                        <p>Recuerda que declarar las medidas y peso de cada uno de tus paquetes te ayudará a no presentar cargos adicionales o retrasos en tus entregas.</p>
                        <div>
                            <IconButton
                                color="error"
                                aria-label="info"
                                component="span"
                                sx={{ marginLeft: "8px" }}
                                onClick={() => setInfoDialogOpen(true)}
                            >
                                <LiaQuestionCircleSolid size={24} />
                            </IconButton>
                        </div>
                    </div>
                    <Divider />
                    
                    <div className="input_row">
                        <TextField
                            label="Tipo de embalaje"
                            variant="outlined"
                            name="packageType"
                            fullWidth
                            value={formValues.packageInfo.packageType}
                            onChange={(e) => updatePackageInfo("packageType", e.target.value)}
                            required
                            error={errors.packageType === true}
                        />
                        <TextField
                            label="Producto"
                            variant="outlined"
                            name="product"
                            fullWidth
                            value={formValues.packageInfo.product}
                            onChange={(e) => updatePackageInfo("product", e.target.value)}
                            required
                            error={errors.product === true}
                        />
                        <TextField
                            label="Tipo de papel"
                            variant="outlined"
                            name="paperType"
                            fullWidth
                            value={formValues.packageInfo.paperType}
                            onChange={(e) => updatePackageInfo("paperType", e.target.value)}
                            required
                            error={errors.paperType === true}
                        />
                    </div>
                
                    <div>
                        <Button 
                            variant="contained" 
                            color="primary" 
                            fullWidth
                            onClick={() => setAccordionExpanded("destination")}
                            style={{ marginBottom: '10px' }}
                        >
                            Regresar
                        </Button>
                        <Button 
                            variant="contained" 
                            color="secondary" 
                            fullWidth
                            onClick={() => {
                                const validationErrors = validateRequiredFields();
                                if (Object.keys(validationErrors).length > 0) {
                                    console.error("Missing required fields:", validationErrors);
                                    return;
                                }
                                setAccordionExpanded("service");
                            }}
                            startIcon={<LiaTruckMovingSolid size={20} />}
                        >
                            Generar recoleccion
                        </Button>
                    </div>
                </div>
                <EstimatorInfo open={infoDialogOpen} setOpen={setInfoDialogOpen} />
            </div>
        </AccordionWrapper>
    );
}