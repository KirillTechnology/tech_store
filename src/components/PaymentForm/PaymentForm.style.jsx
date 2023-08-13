import { styled } from "styled-components";
import Button from "../Button/Button";

export const PaymentFormContainer = styled.div`
    // height: 140px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    padding: 20px;
    border-radius: 20px;
`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: unset;
    gap: 20px;
    justify-content: space-between;
    // height: 140px;
    min-width: 400px;
`

export const PaymentButton = styled(Button)`
    align-self: end;
`

export const PaymentLabel = styled.label`
    color: #757575;
    font-size: 14px;
`

export const PaymentInput = styled.input`
    border: none;
    border-bottom: 1px solid grey;
    font-size: 1em;
    &:focus {
        outline: none;
    }
`