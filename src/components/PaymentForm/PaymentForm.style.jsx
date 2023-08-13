import { styled } from "styled-components";
import Button from "../Button/Button";

export const PaymentFormContainer = styled.div`
    height: 140px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: unset;
    justify-content: space-between;
    height: 140px;
    min-width: 500px;
`

export const PaymentButton = styled(Button)`
    align-self: end;
`