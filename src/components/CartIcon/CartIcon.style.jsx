import { styled } from "styled-components";
import { ReactComponent as ShoppingIconSvg } from '../../assets/shopping-bag.svg'

export const ShoppingIcon = styled(ShoppingIconSvg)`
    width: 24px;
    height: 24px;
`

export const CartIconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
`

export const CartIconCount = styled.span`
    position: absolute;
    top: 8px;
    font-size: 12px;
`