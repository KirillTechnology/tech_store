import { styled } from "styled-components";

export const DirectoryItemImg = styled.div`
    width: 100%;
    // height: 200px;
    aspect-ratio: 2;
    background-size: cover;
    background-position: center;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    // background-image: url(${(props) => props.imageUrl});
    background-image: ${({imageUrl}) => `url(${imageUrl})`};
`

export const DirectoryItemText = styled.div`
    border-top: 1px solid black;
    text-align: center;
    width: 100%;

    p {
        margin: 2px;
        // color: white;
    }
`

export const DirectoryItemContainer = styled.div`
    cursor: pointer;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    // flex: 1;
    justify-content: center;
    align-items: center;
    width: 30%;
    box-shadow: 0 0 10px grey;
    flex: 1 1 auto;
    // background: black;

    &:hover {
        opacity: 0.9;
    }
`