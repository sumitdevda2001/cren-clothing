import styled from "styled-components";
import  { keyframes } from 'styled-components';


import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "../button/button.style";

export const CartDropDownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: #ccccc6;
  top: 90px;
  right: 40px;
  z-index: 5;
  border-radius: 15px;
  ${BaseButton},${GoogleSignInButton},${InvertedButton} {
    margin-top: auto;
    border-radius: 27px;
    
  }
`;
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
  animation: ${fadeIn} 1s ease-in-out;
  
  
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  //make scrollbar hidden
  &::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
    
  }
  
`;