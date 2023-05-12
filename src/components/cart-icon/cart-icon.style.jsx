import styled from "styled-components";
import {ReactComponent as ShoppingSvg} from "../../assets/shopping-bag.svg"


export const ShoppingIcon = styled(ShoppingSvg)`
  width: 24px;
  height: 24px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    background-color:#e0dfda;
  }
`;

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    color: #ff0015;
    background-color: #2e2e2fcf;
    transform: perspective(10000px) rotateX(-1deg) translateZ(10px);
    border-radius: 19px;
  }
`;
export const ItemCount = styled.span`
  position: absolute;
  font-size: 11px;
  font-weight: bold;
  bottom: 12px;
  pointer-events: none;

`;