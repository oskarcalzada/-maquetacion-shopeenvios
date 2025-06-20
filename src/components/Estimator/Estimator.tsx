import { useState, useEffect } from "react";
import Box from "../../elements/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { HiOutlineDocumentMagnifyingGlass } from "react-icons/hi2";
import { IoCubeOutline } from "react-icons/io5";
import { TbArrowBigRightLine } from "react-icons/tb";
import ISwitch from "../../elements/ISwitch";
import { LiaQuestionCircleSolid } from "react-icons/lia";
import { Divider, IconButton } from "@mui/material";
import EstimatorInfo from './EstimatorInfo';
import Estimate from './Estimate';

const defaultValues = {
    width: "",
    height: "",
    length: "",
    weight: "",
    origin_zip: "",
    destination_zip: "",
    insure: false,
    insure_price: 0,
    volumetric_weight: 0,
    shipping_type: "document", // Add shipping_type to default values
}

export default function Estimator() {
    const [formValues, setFormValues] = useState(defaultValues);
    const [infoDialogOpen, setInfoDialogOpen] = useState(false);
    const [showEstimate, setShowEstimate] = useState(false);
    const [errors, setErrors] = useState({
        width: false,
        height: false,
        length: false,
        weight: false,
        origin_zip: false,
        destination_zip: false,
        insure_price: false,
    });

    const handleInfoDialogOpen = () => {
        setInfoDialogOpen(true);
    };



    // Calculate volumetric weight when dimensions change
    useEffect(() => {
        const { width, height, length } = formValues;
        // Convert empty strings to 0 for calculation purposes
        const numWidth = width === "" ? 0 : Number(width);
        const numHeight = height === "" ? 0 : Number(height);
        const numLength = length === "" ? 0 : Number(length);
        
        const volumetric = Math.ceil((numWidth * numHeight * numLength) / 5000); 
        setFormValues(prevValues => ({
            ...prevValues,
            volumetric_weight: volumetric
        }));
    }, [formValues.width, formValues.height, formValues.length]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        
        // Special handling for numeric inputs to allow empty values
        if (type === 'number') {
            setFormValues({
                ...formValues,
                [name]: value === "" ? "" : Number(value),
            });
        } else {
            setFormValues({
                ...formValues,
                [name]: type === 'checkbox' ? checked : value,
            });
        }
    };

    // Update this function to handle toggle correctly
    const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            insure: event.target.checked,
        });
    };

    const handleTabChange = (type: string) => {
        setFormValues({
            ...formValues,
            shipping_type: type, // Update shipping_type in formValues
        });
    };

    const handleQuote = () => {
        const newErrors = {
            width: formValues.shipping_type === "box" && !formValues.width,
            height: formValues.shipping_type === "box" && !formValues.height,
            length: formValues.shipping_type === "box" && !formValues.length,
            weight: formValues.shipping_type === "box" && !formValues.weight,
            origin_zip: !formValues.origin_zip,
            destination_zip: !formValues.destination_zip,
            insure_price: formValues.insure && !formValues.insure_price,
        };

        setErrors(newErrors);

        // If any error exists, prevent submission
        if (Object.values(newErrors).some((error) => error)) {
            return;
        }

        setShowEstimate(true);
    };

    const handleBackToForm = () => {
        setShowEstimate(false);
    };

    return (
        <div className="component_container">
            <div className="component_title">
                <h1>Cotizar</h1>
                <p className="subtitle">¡Cotiza un servicio y empieza a realizar tus envíos!</p>
            </div>

            {showEstimate ? (
                <Estimate formValues={formValues} onBack={handleBackToForm} />
            ) : (
                <div className="tabsContainer">
                    <div className="tabs">
                        <Button
                            variant="contained"
                            sx={{ backgroundColor: formValues.shipping_type === "document" ? "#3C97D3" : "#C0BEBE" }}
                            onClick={() => handleTabChange("document")} // Update tab change logic
                            startIcon={<HiOutlineDocumentMagnifyingGlass />}
                        >
                            Documento
                        </Button>
                        <Button
                            variant="contained"
                            sx={{ backgroundColor: formValues.shipping_type === "box" ? "#3C97D3" : "#C0BEBE" }}
                            onClick={() => handleTabChange("box")} // Update tab change logic
                            startIcon={<IoCubeOutline />}
                        >
                            Paquete
                        </Button>
                    </div>
                    <Box>
                        
                        <div className="input_group">
                            
                            {formValues.shipping_type === "box" && (
                                <>
                                    <h2 className="h2_title">Dimensiones</h2>
                                    <div className="input_row">
                                    <TextField 
                                        variant="outlined" 
                                        type="number" 
                                        label="Alto" 
                                        name="height"
                                        value={formValues.height}
                                        onChange={handleInputChange}
                                        fullWidth
                                        inputProps={{ min: 0 }}
                                        error={errors.height}
                                        helperText={errors.height ? "Por favor ingrese el alto." : ""}
                                        InputProps={{
                                            endAdornment: <InputAdornment position="end">cm</InputAdornment>,
                                        }}
                                    />
                                    <TextField 
                                        variant="outlined" 
                                        type="number" 
                                        label="Largo" 
                                        name="length"
                                        value={formValues.length}
                                        onChange={handleInputChange}
                                        fullWidth
                                        inputProps={{ min: 0 }}
                                        error={errors.length}
                                        helperText={errors.length ? "Por favor ingrese el largo." : ""}
                                        InputProps={{
                                            endAdornment: <InputAdornment position="end">cm</InputAdornment>,
                                        }}
                                    />
                                    <TextField 
                                        variant="outlined" 
                                        type="number" 
                                        label="Ancho" 
                                        name="width"
                                        value={formValues.width}
                                        onChange={handleInputChange}
                                        fullWidth
                                        inputProps={{ min: 0 }}
                                        error={errors.width}
                                        helperText={errors.width ? "Por favor ingrese el ancho." : ""}
                                        InputProps={{
                                            endAdornment: <InputAdornment position="end">cm</InputAdornment>,
                                        }}
                                    />
                                    <TextField 
                                        variant="outlined" 
                                        type="number" 
                                        label="Peso" 
                                        name="weight"
                                        value={formValues.weight}
                                        onChange={handleInputChange}
                                        fullWidth
                                        inputProps={{ min: 0 }}
                                        error={errors.weight}
                                        helperText={errors.weight ? "Por favor ingrese el peso." : ""}
                                        InputProps={{
                                            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
                                        }}
                                    />
                                    <div className="volumetric_weight_wrapper">
                                        <div className="volumetric_weight_label">Peso Volumétrico:</div>
                                        <div className="volumetric_weight_value">{formValues.volumetric_weight} kg</div>
                                    </div>
                                </div>
                                
                                <div className="info_message">
                                    <p>Recuerda que declarar las medidas y peso de cada uno de tus paquetes te ayudara a no presentar cargos adicionales o retrasos en tus entregas.</p>
                                    <div>
                                        <IconButton
                                            color="error"
                                            aria-label="info"
                                            component="span"
                                            sx={{ marginLeft: "8px" }}
                                            onClick={handleInfoDialogOpen}
                                        >
                                            <LiaQuestionCircleSolid size={24} />
                                        </IconButton>
                                    </div>
                                </div>
                                <Divider />
                                </>

                                
                            )}

                            <h2 className="h2_title">Ruta</h2>
                            <div className="input_row">
                                <TextField 
                                    variant="outlined" 
                                    label="Código postal" 
                                    name="origin_zip" 
                                    value={formValues.origin_zip} 
                                    onChange={handleInputChange} 
                                    fullWidth
                                    error={errors.origin_zip}
                                    helperText={errors.origin_zip ? "Por favor ingrese el código postal de origen." : ""}
                                />
                                <TbArrowBigRightLine 
                                    size={24} 
                                    style={{ minWidth: "24px", margin: "0 8px" }}
                                    color="#8BD1FF"
                                />
                                <TextField 
                                    variant="outlined" 
                                    label="Código postal" 
                                    name="destination_zip" 
                                    value={formValues.destination_zip} 
                                    onChange={handleInputChange} 
                                    fullWidth
                                    error={errors.destination_zip}
                                    helperText={errors.destination_zip ? "Por favor ingrese el código postal de destino." : ""}
                                />
                            </div>
                            <div className="input_row">
                                <ISwitch 
                                    label="Asegurar paquete"
                                    checked={formValues.insure}
                                    onChange={handleSwitchChange}
                                    name="insure"
                                />
                                {formValues.insure && (
                                    <TextField 
                                        variant="outlined" 
                                        label="Valor asegurado"
                                        name="insure_price" 
                                        value={formValues.insure_price} 
                                        onChange={handleInputChange} 
                                        type="number"
                                        error={errors.insure_price}
                                        helperText={errors.insure_price ? "Por favor ingrese el valor asegurado." : ""}
                                    />
                                )}
                            </div>
                            
                            <Button variant="contained" color="primary" onClick={handleQuote}>Cotizar</Button>
                        </div>
                    </Box>
                </div>
            )}
            <EstimatorInfo open={infoDialogOpen} setOpen={setInfoDialogOpen} />
        </div>
    );
}