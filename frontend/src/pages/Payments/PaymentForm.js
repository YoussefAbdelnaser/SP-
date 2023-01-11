import React, { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
        base: {
            iconColor: "#c4f0ff",
            color: "#fff",
            fontWeight: 500,
            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
            fontSize: "16px",
            fontSmoothing: "antialiased",
            ":-webkit-autofill": { color: "#fce883" },
            "::placeholder": { color: "#87bbfd" }
        },
        invalid: {
            iconColor: "#ffc7ee",
            color: "#ffc7ee"
        }
    }
}

export default function PaymentForm() {
    const [success, setSuccess] = useState(false)
    const stripe = useStripe()
    const elements = useElements()
    const location = useLocation();
    const handleSubmit = async (e) => {
        e.preventDefualt()
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })
        const card = {
            number: paymentMethod.card.last4,
            expirationMonth: paymentMethod.card.exp_month,
            expirationYear: paymentMethod.card.exp_year,
            cvc: "300"
        }
        const payment = { ...location.state.ticket,"card": card}
        if (!error) {
            try {
                // const {id} = paymentMethod
                // const response = await axios.post("https://localhost:4000/payment" , {
                //     amount: 40000,
                //     id: id
                // })
                const response = await axios.post("https://localhost:3000/api/reservation", {
                    ...payment
                })

                if (response.data.success) {
                    console.log("Payment successful")
                    setSuccess(true)
                }

            } catch (error) {
                console.log("Error", error)
            }
        } else {
            console.log(error.message)
        }
    }

    return (
        <>
            {!success ?
                <form onSubmit={handleSubmit}>
                    <fieldset className="FormGroup">
                        <div className="FormRow">
                            <CardElement options={CARD_OPTIONS} />
                        </div>
                    </fieldset>
                    <button>Pay</button>
                </form>
                :
                <div>
                    <h2>See you in Qatar!</h2>
                </div>
            }
        </>
    )
}
