import { useState } from 'react'

import { useSelector } from 'react-redux'
import { selectCartTotal } from '../../store/cart/cart.selector'
import { selectCurrentUser } from '../../store/user/user.selector'

import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'

import Button, { BUTTON_TYPE_CLASSES } from '../Button/Button'
import { PaymentFormContainer, FormContainer, PaymentButton, PaymentLabel, PaymentInput } from './PaymentForm.style'


const PaymentForm = () => {
    const stripe = useStripe()
    const elements = useElements()
    const amount = useSelector(selectCartTotal)
    const currentUser = useSelector(selectCurrentUser)
    const [isProcessingPayment, setIsProcessingPayment] = useState(false)

    const paymentHandler = async (e) => {
        e.preventDefault()

        if (!stripe || !elements) return

        setIsProcessingPayment(true)

        const response = await fetch('./.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount: amount * 100 })
        }).then(res => res.json())

        const { paymentIntent: { client_secret } } = response

        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: currentUser ? currentUser.email : 'Guest'
                }
            }
        })

        setIsProcessingPayment(false)

        if (paymentResult.error) {
            alert('Payment error')
        } else {
            if (paymentResult.paymentIntent.status === 'succeeded') {
                alert('Payment Successful')
            }
        }
    }

    return (
        <PaymentFormContainer>
            <FormContainer onSubmit={paymentHandler}>
                <h2>Credit Card Payment:</h2>
                <span>
                    <PaymentLabel htmlFor='name'>Name {'  '}</PaymentLabel>
                    <PaymentInput type='text' id='name' required></PaymentInput>
                </span>

                <span>
                    <PaymentLabel htmlFor='email'>Email {'  '}</PaymentLabel>
                    <PaymentInput type='email' id='email' required></PaymentInput>
                </span>


                <CardElement />
                <PaymentButton buttonType={BUTTON_TYPE_CLASSES.base} isLoading={isProcessingPayment}>Pay now</PaymentButton>
            </FormContainer>
        </PaymentFormContainer>
    )
}


export default PaymentForm