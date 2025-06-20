import { useState, useRef } from 'react';
import Confirmation from './components/Confirmation';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import Summary from './components/Summary';

const defaultValues = {
    name: "",
    company: "",
    email: "",
    rfc: "",
    phone: "",
    street: "",
    postalCode: "",
    neighborhood: "",
    city: "",
    state: "",
    reference: "",
    exteriorNumber: "",

    pickupDate: "2025-01-10",
    pickupTime: "14:00",
    closingTime: "15:00",
    
    courier: "",

    packageInfo: {
        height: "",
        length: "",
        width: "",
        weight: "",
        volumetricWeight: 0,
        packageType: "",
        product: "",
        paperType: "",
    }
};


export default function ShippingEditor() {
    const [formValues, setFormValues] = useState(defaultValues);
    const [openConfirmation, setOpenConfirmation] = useState(false);
    const [accordionExpanded, setAccordionExpanded] = useState("date");
    
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
                    accordionExpanded={accordionExpanded === "courier"}
                    setAccordionExpanded={setAccordionExpanded}
                />
                <Step2
                    formValues={formValues}
                    setFormValues={setFormValues}
                    accordionExpanded={accordionExpanded === "date"}
                    setAccordionExpanded={setAccordionExpanded}
                />
                <Step3
                    formValues={formValues}
                    setFormValues={setFormValues}
                    accordionExpanded={accordionExpanded === "address"}
                    setAccordionExpanded={setAccordionExpanded}
                />
                <Step4
                    formValues={formValues}
                    setFormValues={setFormValues}
                    accordionExpanded={accordionExpanded === "package"}
                    setAccordionExpanded={setAccordionExpanded}
                    handleOpenConfirmation={handleOpenConfirmation}
                />
            </div>
            

            <Confirmation 
                open={openConfirmation} 
                onClose={() => setOpenConfirmation(false)}
                balance={1000}
                submit={submit}
            />
        </div>
    );
}