import { Button, Divider } from "@mui/material";
import { LiaTruckMovingSolid } from "react-icons/lia";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AccessTimeIcon from '@mui/icons-material/AccessTime'; 

export default function Summary(props: any) {

    const { formValues, handleOpenConfirmation } = props;
    
    return (
        <div className='shipping-summary'>  
            <div className='shipping-summary-content'>
                <h2 className='shipping-summary-title'>
                    <LiaTruckMovingSolid color="primary" /> Resumen de envío
                </h2>
                
                {/* Step 1: Remitente */}
                {(formValues.origin_name || formValues.origin_phone || formValues.origin_company || 
                  formValues.origin_email || formValues.origin_rfc || formValues.origin_street || 
                  formValues.origin_postalCode || formValues.origin_neighborhood || 
                  formValues.origin_city || formValues.origin_state || formValues.origin_reference || 
                  formValues.origin_exteriorNumber) && (
                    <div className='summary_section'>
                        <div className='summary_subtitle'>Remitente</div>
                        {formValues.origin_name && <div className="summary-item"><strong>Nombre:</strong> {formValues.origin_name}</div>}
                        {formValues.origin_phone && <div className="summary-item"><strong>Teléfono:</strong> {formValues.origin_phone}</div>}
                        {formValues.origin_company && <div className="summary-item"><strong>Compañía:</strong> {formValues.origin_company}</div>}
                        {formValues.origin_email && <div className="summary-item"><strong>Email:</strong> {formValues.origin_email}</div>}
                        {formValues.origin_rfc && <div className="summary-item"><strong>RFC:</strong> {formValues.origin_rfc}</div>}
                        {(formValues.origin_street || formValues.origin_neighborhood || formValues.origin_city || 
                          formValues.origin_state || formValues.origin_postalCode) && (
                            <div className="summary-item">
                                <strong>Dirección:</strong> {[
                                    formValues.origin_street,
                                    formValues.origin_exteriorNumber && `#${formValues.origin_exteriorNumber}`,
                                    formValues.origin_neighborhood,
                                    formValues.origin_city,
                                    formValues.origin_state,
                                    formValues.origin_postalCode
                                ].filter(Boolean).join(', ')}
                            </div>
                        )}
                        {formValues.origin_reference && <div className="summary-item"><strong>Referencias:</strong> {formValues.origin_reference}</div>}
                    </div>
                )}
                
                {/* Step 2: Destinatario */}
                {(formValues.destination_name || formValues.destination_phone || formValues.destination_company || 
                  formValues.destination_email || formValues.destination_rfc || formValues.destination_street || 
                  formValues.destination_postalCode || formValues.destination_neighborhood || 
                  formValues.destination_city || formValues.destination_state || formValues.destination_reference || 
                  formValues.destination_exteriorNumber) && (
                    <div className='summary_section'>
                        <div className='summary_subtitle'>Destinatario</div>
                        {formValues.destination_name && <div className="summary-item"><strong>Nombre:</strong> {formValues.destination_name}</div>}
                        {formValues.destination_phone && <div className="summary-item"><strong>Teléfono:</strong> {formValues.destination_phone}</div>}
                        {formValues.destination_company && <div className="summary-item"><strong>Compañía:</strong> {formValues.destination_company}</div>}
                        {formValues.destination_email && <div className="summary-item"><strong>Email:</strong> {formValues.destination_email}</div>}
                        {formValues.destination_rfc && <div className="summary-item"><strong>RFC:</strong> {formValues.destination_rfc}</div>}
                        {(formValues.destination_street || formValues.destination_neighborhood || formValues.destination_city || 
                          formValues.destination_state || formValues.destination_postalCode) && (
                            <div className="summary-item">
                                <strong>Dirección:</strong> {[
                                    formValues.destination_street,
                                    formValues.destination_exteriorNumber && `#${formValues.destination_exteriorNumber}`,
                                    formValues.destination_neighborhood,
                                    formValues.destination_city,
                                    formValues.destination_state,
                                    formValues.destination_postalCode
                                ].filter(Boolean).join(', ')}
                            </div>
                        )}
                        {formValues.destination_reference && <div className="summary-item"><strong>Referencias:</strong> {formValues.destination_reference}</div>}
                    </div>
                )}

                {/* Step 3: Paquete */}
                {formValues.packageInfo && (
                    formValues.packageInfo.height || formValues.packageInfo.length || formValues.packageInfo.width || 
                    formValues.packageInfo.weight || formValues.packageInfo.packageType || formValues.packageInfo.product || 
                    formValues.packageInfo.paperType || formValues.packageInfo.originPostalCode || 
                    formValues.packageInfo.destinationPostalCode || formValues.packageInfo.insurePackage
                ) && (
                    <div className='summary_section'>
                        <div className='summary_subtitle'>Paquete</div>
                        {formValues.packageInfo.packageType && <div className="summary-item"><strong>Tipo de paquete:</strong> {formValues.packageInfo.packageType}</div>}
                        {formValues.packageInfo.product && <div className="summary-item"><strong>Producto:</strong> {formValues.packageInfo.product}</div>}
                        {formValues.packageInfo.paperType && <div className="summary-item"><strong>Tipo de papel:</strong> {formValues.packageInfo.paperType}</div>}
                        {(formValues.packageInfo.height || formValues.packageInfo.length || formValues.packageInfo.width) && (
                            <div className="summary-item">
                                <strong>Dimensiones:</strong> {[
                                    formValues.packageInfo.length && `Largo: ${formValues.packageInfo.length}cm`,
                                    formValues.packageInfo.width && `Ancho: ${formValues.packageInfo.width}cm`,
                                    formValues.packageInfo.height && `Alto: ${formValues.packageInfo.height}cm`
                                ].filter(Boolean).join(', ')}
                            </div>
                        )}
                        {formValues.packageInfo.weight && <div className="summary-item"><strong>Peso:</strong> {formValues.packageInfo.weight}kg</div>}
                        {formValues.packageInfo.volumetricWeight > 0 && <div className="summary-item"><strong>Peso volumétrico:</strong> {formValues.packageInfo.volumetricWeight}kg</div>}
                        {formValues.packageInfo.insurePackage && <div className="summary-item"><strong>Paquete asegurado:</strong> Sí</div>}
                        {formValues.packageInfo.insurePackage && formValues.packageInfo.insuranceValue && (
                            <div className="summary-item"><strong>Valor asegurado:</strong> ${formValues.packageInfo.insuranceValue}</div>
                        )}
                    </div>
                )}

                {/* Step 4: Servicio */}
                {formValues.courier && (
                    <div className='summary_section'>
                        <div className='summary_subtitle'>Servicio</div>
                        <div className="summary-item"><strong>Paquetería:</strong> {formValues.courier.courier}</div>
                        {formValues.courier.type && <div className="summary-item"><strong>Tipo:</strong> {formValues.courier.type}</div>}
                        {formValues.courier.estimatedDelivery && <div className="summary-item"><strong>Entrega estimada:</strong> {formValues.courier.estimatedDelivery}</div>}
                        {formValues.courier.deliveryTime && <div className="summary-item"><strong>Tiempo de entrega:</strong> {formValues.courier.deliveryTime}</div>}
                        {formValues.courier.extendedZone && <div className="summary-item"><strong>Zona extendida:</strong> {formValues.courier.extendedZone}</div>}
                    </div>
                )}

                <Divider />

                <div className="total-title">Total envío</div>
                <div className="total-value">${formValues.courier ? formValues.courier.totalValue.toFixed(2) : "0.00"}</div>
                
                {formValues.courier && (
                    <Button 
                        variant="contained" 
                        color="secondary" 
                        fullWidth 
                        className="generate-shipment-button"
                        startIcon={<AccessTimeIcon />} 
                        onClick={handleOpenConfirmation}
                    >
                        Generar Envío
                    </Button>
                )}
            </div>
        </div>
    )
}