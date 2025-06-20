import React, { useEffect, useState } from "react";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import { ProjectConfig } from "../../../Global";
import PaymentForm from "./PaymentForm";
import axios from "axios";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";


const stripePromise = loadStripe(ProjectConfig.STRIPE_PUBLIC_KEY); // public key

export function StripeComponent( props: any ) {

    const {
        clientSecret = null,
    } = props;

    const [options, setOptions] = useState<any>(null);
    const [paymentResult, setPaymentResult] = useState<any>(null);

    useEffect(() => {
        if (clientSecret) {
            setOptions({
                clientSecret,
            });
        }
    }, [clientSecret]);
    
    return (
        <>
            {options ?
                <>
                    <Elements stripe={stripePromise} options={options}>
                        <PaymentForm onResult={setPaymentResult} />
                    </Elements>
                    { paymentResult }
                </>
            :
                <div>Cargando formulario...</div>
            }
        </>
    );

};

export default function PaymentDialog( props: any ) {

    const {
        typePayment = "card",
        open = false,
        handleOpen = () => {},
        amount = 0,
        currency = "USD",
        metadata = {},
    } = props;
    
    const getStripeClientSecret = async (
        typePayment: string,
        amount: number,
        currency: string,
        metadata: any
    ) => {
        axios.post(
            ProjectConfig.api_url + '/payment_gateway/stripe/init_payment',
            {
                type_payment: typePayment,
                amount,
                currency,
                metadata,
            },
            { }
        )
            .then((response) => {
                console.log(response.data);
                if(response.data.status === "success"){
                    setStripeClientSecret(response.data.data.client_secret);
                }
                else
                {
                    console.log(response.data.message);
                }
            })
            .catch((err) => {
                console.log(err.data);
            });
    }

    const [stripeClientSecret, setStripeClientSecret] = useState<string | null>(null);

    useEffect(() => {
        if (open) {
            getStripeClientSecret(typePayment, amount, currency, metadata);
        }
    }, [open])

    return (
        <>
            <Dialog
                open={open}
                onClose={handleOpen}
            >
                <DialogTitle> Payment Dialog </DialogTitle>
                <DialogContent>
                    <StripeComponent clientSecret={stripeClientSecret} />
                </DialogContent>
            </Dialog>
        </>
    );
};