import React from 'react';
import {
    PaymentElement,
    useElements,
    useStripe
} from '@stripe/react-stripe-js';
import { useSearchParams } from 'react-router-dom';

export default function PaymentForm({
    onResult = (result: any) => {},
}: any) {

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event: any) => {
        event.preventDefault();
    
        if (!stripe || !elements) {
            return;
        }

        onResult(<PaymentWaitingResult />);
    
        const result = await stripe.confirmPayment({
            elements,
            confirmParams: {
            },
            redirect: 'if_required',
                // return_url: `${window.location.protocol}//${window.location.host}/stripe/payment-result`,
        });
    
        if (result.error) {
            onResult(<PaymentResult status={result.error.message} />);
        } else {
            onResult(<PaymentResult status={result.paymentIntent.status} />);
        }
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <PaymentElement />
            <button disabled={!stripe}>Submit</button>
        </form>
    );

};

export function PaymentResult({
    status = null,
}: any) {

    return (
        <div>
            Payment Result
            <br />
            <div>
                <span> Redirect Status </span>
                <span> { status } </span>
            </div>
        </div>
    );

}

export function PaymentWaitingResult() {

    return (
        <div>
            Waiting Payment Result
        </div>
    );
    
}