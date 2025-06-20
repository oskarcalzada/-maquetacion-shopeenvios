import { useState, useRef } from 'react';
import Confirmation from './components/Confirmation';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import Summary from './components/Summary';

const defaultValues = {
    origin_name: "",
    origin_company: "",
    origin_email: "",
    origin_rfc: "",
    origin_phone: "",
    origin_street: "",
    origin_postalCode: "",
    origin_neighborhood: "",
    origin_city: "",
    origin_state: "",
    origin_reference: "",
    origin_exteriorNumber: "",
    destination_name: "",
    destination_company: "",
    destination_email: "",
    destination_rfc: "",
    destination_phone: "",
    destination_street: "",
    destination_postalCode: "",
    destination_neighborhood: "",
    destination_city: "",
    destination_state: "",
    destination_reference: "",
    destination_exteriorNumber: "",
    courier: null as any,
    packageInfo: {
        height: "",
        length: "",
        width: "",
        weight: "",
        volumetricWeight: 0,
        packageType: "",
        product: "",
        paperType: "",
        originPostalCode: "",
        destinationPostalCode: "",
        insurePackage: false,
        insuranceValue: "",
    }
};


export default function ShippingEditor() {
    const [formValues, setFormValues] = useState(defaultValues);
    const [openConfirmation, setOpenConfirmation] = useState(false);
    const [accordionExpanded, setAccordionExpanded] = useState("origin");
    
    /*=============================================
    SUBMIT FORM
    =============================================*/
    const submit = () => {
        console.log("Form submitted with values:", formValues);
        setOpenConfirmation(false);
    }

    const handleOpenConfirmation = () => {
        setOpenConfirmation(true);
        
    };

    return (
        <div className="shipping_editor_wrapper">
            <div className="shipping_editor">
                
                <div className="component_title">
                    <h1>Nuevo envío</h1>
                    <p className="subtitle">Lorem ipsum dolor sit amet, consectetur</p>
                </div>
                <Step1
                    formValues={formValues}
                    setFormValues={setFormValues}
                    accordionExpanded={accordionExpanded === "origin"}
                    setAccordionExpanded={setAccordionExpanded}
                />
                <Step2
                    formValues={formValues}
                    setFormValues={setFormValues}
                    accordionExpanded={accordionExpanded === "destination"}
                    setAccordionExpanded={setAccordionExpanded}
                />
                <Step3
                    formValues={formValues}
                    setFormValues={setFormValues}
                    accordionExpanded={accordionExpanded === "package"}
                    setAccordionExpanded={setAccordionExpanded}
                />
                <Step4
                    formValues={formValues}
                    setFormValues={setFormValues}
                    accordionExpanded={accordionExpanded === "service"}
                    setAccordionExpanded={setAccordionExpanded}
                    handleOpenConfirmation={handleOpenConfirmation}
                />
            </div>
            
            <Summary 
                formValues={formValues}
                handleOpenConfirmation={handleOpenConfirmation}
            />

            <Confirmation 
                open={openConfirmation} 
                onClose={() => setOpenConfirmation(false)}
                balance={1000}
                price={formValues.courier ? formValues.courier.totalValue : 0} 
                submit={submit}
            />
        </div>
    );
}