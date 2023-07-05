import { styled } from "styled-components";
import { BaseButton, GoogleSignInButton } from "../Button/Button.styles.jsx"


export const CartDropdown = styled.div`
    border: 0px solid black;
    background: white;
    width: 300px;
    position: absolute;
    right: 10px;
    top: 40px;
    padding-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    box-shadow: 0 0 10px grey;
    border-radius: 10px;
    z-index: 10;

    ${BaseButton}, ${GoogleSignInButton} {
        // background: blue;
        
    }
`

export const CartDropdownItem = styled.div`
    width:100%;
    box-sizing: border-box;
    min-height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 20px;
    // overflow-y: scroll;
    border-bottom: 1px solid grey;
`