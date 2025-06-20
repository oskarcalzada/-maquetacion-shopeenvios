import Box from "../../elements/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { MdCreditCard, MdStore } from "react-icons/md";
import { BsCreditCard } from "react-icons/bs";
import { PiStorefrontLight } from "react-icons/pi";
import { GoArrowSwitch } from "react-icons/go";
import { Divider } from "@mui/material";

import sevenEleven from "../../assets/img/balance/7eleven.png";
import bodega from "../../assets/img/balance/bodega-aurrera.png";
import x24 from "../../assets/img/balance/x24.png";
import walmart from "../../assets/img/balance/walmart.png";
import walmartExpress from "../../assets/img/balance/walmart-express.png";
import sams from "../../assets/img/balance/sams.png";

export default function AccountBalance() {
    const [activeTab, setActiveTab] = useState<string>("card");

    return (
        <div className="component_container">
            <div className="component_title">
                <h1>Realizar una recarga de saldo</h1>
                <p className="subtitle">Lorem ipsum dolor sit amet, consectetur</p>
            </div>

            <div className="tabsContainer">
                <div className="tabs">
                    <Button 
                        variant="contained"
                        sx={{ backgroundColor: activeTab === "card" ? "#3C97D3" : "#C0BEBE" }}
                        onClick={() => setActiveTab("card")}
                        startIcon={<BsCreditCard />}
                    >
                        Pago con tarjeta
                    </Button>
                    <Button 
                        variant="contained"
                        sx={{ backgroundColor: activeTab === "store" ? "#3C97D3" : "#C0BEBE" }}
                        onClick={() => setActiveTab("store")}
                        startIcon={<PiStorefrontLight />}
                    >
                        Pago en tiendas
                    </Button>
                    <Button 
                        variant="contained"
                        sx={{ backgroundColor: activeTab === "transfer" ? "#3C97D3" : "#C0BEBE" }}
                        onClick={() => setActiveTab("transfer")}
                        startIcon={<GoArrowSwitch />}
                    >
                        Transferencia
                    </Button>
                </div>

                {activeTab === "card" && (
                    <Box>
                        <p className="payment_time">El pago se acredita al instante</p>
                        <Divider />

                        <form className="payment_form">
                        
                                <div className="input_group" >
                                    <div className="section-title">Datos de tarjeta</div>
                                    <div className="input_row">
                                        <TextField 
                                            label="Número de tarjeta" 
                                            variant="outlined" 
                                            fullWidth 
                                            defaultValue="123456789" 
                                        />
                                        <TextField 
                                            label="MM/AA" 
                                            variant="outlined" 
                                            fullWidth 
                                            defaultValue="10/2025" 
                                        />
                                    </div>
                                    
                                    <div className="input_row">
                                        <TextField 
                                            label="CVV" 
                                            variant="outlined" 
                                            fullWidth 
                                            defaultValue="6789" 
                                        />
                                        <TextField 
                                            label="Nombre de la tarjeta" 
                                            variant="outlined" 
                                            fullWidth 
                                            defaultValue="Mater card" 
                                        />
                                    </div>
   
                                <div className="section-title">Dirección</div>
                                <div className="input_row" >
                                    <TextField 
                                        label="Calle" 
                                        variant="outlined" 
                                        fullWidth 
                                        defaultValue="Codigo postal" 
                                    />
                                    <TextField 
                                        label="Código postal" 
                                        variant="outlined" 
                                        fullWidth 
                                        defaultValue="Codigo postal" 
                                    />
                                    <TextField 
                                        label="No. Exterior" 
                                        variant="outlined" 
                                        fullWidth 
                                        defaultValue="Codigo postal" 
                                    />
                                </div>
                                <div className="input_row" >
                                    <TextField 
                                        label="No. Exterior" 
                                        variant="outlined" 
                                        fullWidth 
                                        defaultValue="Codigo postal" 
                                    />
                                    <TextField 
                                        label="Monto" 
                                        variant="outlined" 
                                        fullWidth 
                                        defaultValue="$500" 
                                    />
                                </div>

                                <p className="commission">Comisión por pago 3.6% + IVA $20.88</p>
                            </div>

                            

                            <div className="form_buttons">
                                <Button variant="contained" color="primary" className="pay_button" fullWidth>
                                    Pagar con
                                </Button>
                                <Button variant="contained" color="secondary" className="cancel_button" fullWidth>
                                    Cancelar
                                </Button>
                            </div>
                        </form>
                    </Box>
                )}

                {activeTab === "store" && (
                    <Box>

                        <p className="payment_time">El pago se acredita entre 20 y 40 minutos</p>
                        <Divider />

                        <div className="input_group">
                            <div className="form_section">
                                <div className="input_group">
                                    <TextField 
                                        label="Monto" 
                                        variant="outlined" 
                                        fullWidth 
                                        defaultValue="$500" 
                                    />
                                </div>
                            </div>
                            
                            <div>
                            <p className="commission">Comisión por pago 3.6% + IVA $20.88</p>
                            <p className="amount">Monto a recargar: $500.00</p>
                            <p className="total">Total a pagar: <strong>$520.88</strong></p>
                            </div>

                            <div className="payment_methods">
                                <div className='payment_companies_label'>Puedes realizar el pago en:</div>
                                <div className="payment_logos">
                                    <img src={walmart} alt="Walmart" />
                                    <img src={walmartExpress} alt="Walmart Express" />
                                    <img src={sams} alt="Sams" />
                                    <img src={sevenEleven} alt="7 Eleven" />
                                    <img src={bodega} alt="Bodega Aurrera" />
                                    <img src={x24} alt="X24" />
                                </div>
                            </div>

                            <div className="form_buttons">
                                <Button variant="contained" color="primary" className="pay_button" fullWidth>
                                    Pagar con
                                </Button>
                                <Button variant="contained" color="secondary" className="cancel_button" fullWidth>
                                    Cancelar
                                </Button>
                            </div>
                        </div>
                    </Box>
                )}

                {activeTab === "transfer" && (
                    <Box>

                        <p className="payment_time">El pago se acredita de 30 minutos a 4 horas</p>
                        <Divider />

                        <div className="transfer_info">
                            <div>
                                <p>Banco: <strong>BBVA</strong></p>
                                <p>Número de cuenta: <strong>123456789</strong></p>
                                <p>Cuenta clabe: <strong>4515584877884944498848</strong></p>
                            </div>

                            <div>
                                <TextField 
                                    label="Monto" 
                                    variant="outlined" 
                                    fullWidth 
                                    defaultValue="$500" 
                                />

                                <h3>Comprobante de pago (opcional)</h3>
                                <div className="input_group">
                                    <div className="upload_area" style={{ border: "2px dashed #C0BEBE", padding: "16px", textAlign: "center", cursor: "pointer" }}>
                                        <input 
                                            type="file" 
                                            style={{ display: "none" }} 
                                            id="file-upload" 
                                        />
                                        <label htmlFor="file-upload" style={{ cursor: "pointer" }}>
                                            📎 Arrastra o haz click aquí para subir un archivo
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                            

                            <div className="form_buttons">
                                <Button variant="contained" color="primary" className="pay_button" fullWidth>
                                    Enviar solicitud
                                </Button>
                                <Button variant="contained" color="secondary" className="cancel_button" fullWidth>  
                                    Cancelar
                                </Button>
                            </div>
                        
                    </Box>
                )}
            </div>
        </div>
    )
}
