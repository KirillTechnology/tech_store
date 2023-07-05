import { styled } from "styled-components";
import { Link } from "react-router-dom";


export const NavigationBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    padding: 0 20px;
    box-shadow: 0 0 4px grey;
`

export const LogoContainer = styled(Link)`
    height: 100%;
    height: 40px;
    width: 40px;
`

export const Menu = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;
`

export const NavLink = styled(Link)`
    text-decoration: none;
    color: black;
    cursor: pointer;
`

export const MainContainer = styled.div`
    min-height: calc(100vh - 50px - 20px - 35px);
`