import { styled, css } from "styled-components";


const mainColor = 'black'
const subColor = 'grey'

const shrinkLabelStyles = css`
    font-size: 12px;
    top: 5px;
`


export const InputLabel = styled.label`
    color: ${subColor};
    font-size: 14px;
    position: absolute;
    left: 0;
    top: 15px;
    pointer-events: none;
    transition: 0.1s;
    ${(props) => props.$shrink && shrinkLabelStyles}
`

export const Input = styled.input`
    border: none;
    border-bottom: 1px solid black;
    font-size: 14px;
    padding: 20px 5px 5px 5px;
    width: 240px;

    &:focus {
        outline: none;
    }

    &:focus ~ ${InputLabel} {
        ${shrinkLabelStyles}
    }
`

export const Group = styled.div`
    position: relative;
`