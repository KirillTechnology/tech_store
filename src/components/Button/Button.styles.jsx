import { styled } from "styled-components";
import { SpinnerContainer } from '../Spinner/Spinner.styles'

export const BaseButton = styled.button`
    border: 2px solid green;
    border-radius: 20px;
    height: 30px;
    min-width: 100px;
    background: white;
    color: green;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        box-shadow: 0 0 5px green;
    }

    &:disabled {
        color: grey;
        border: 2px solid grey;
        cursor: not-allowed;

        &:hover {
            box-shadow: none;
        }
`

export const GoogleSignInButton = styled(BaseButton)`
    border: 2px solid grey;
    color: grey;
    width: 160px;

    &:hover {
        box-shadow: 0 0 5px grey;
    }
`

export const ButtonSpinner = styled(SpinnerContainer)`
    width: 20px;
    height: 20px;
`