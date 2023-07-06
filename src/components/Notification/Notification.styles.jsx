import { styled } from "styled-components";


export const NotificationContainer = styled.div`
    position: fixed;
    top: 70px;
    right: 20px;
    width: 200px;
    min-height: 20px;
    border: 1px solid black;
    // border-radius: 10px;
    box-shadow: 0 0 10px black;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
    padding: 5px 10px;
    color: white;
    display: flex;
    justify-content: center;
    // align-items: center;
    z-index: 11;

    transform: translateX(300px); 
    transition: all 0.4s;

    &.ON {
        transform: translateX(0); 
    }
`

export const Cross = styled.span`
    cursor: pointer;
`