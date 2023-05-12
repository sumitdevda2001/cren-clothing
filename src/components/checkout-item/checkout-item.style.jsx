import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  font-weight: bold;
  align-items: center;
  border-radius: 27px;
  background-color: #dddae3;
  transition: background-color 0.1s ease-out-in, transform 0.2s ease-in-out;

  &:hover {
    background-color: #ceedce;
    color: black;
    transform: scale(1.1) rotateY(1deg);
    transform-origin: center;
  }
`;

export const ImageContainer = styled.div`
  width: 23%; transition: transform 0.4s ease-in-out;

&:hover {
  transform: scale(1.22);
  transform-origin: right;
}
  

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`;

export const ItemLeble = styled.span`
  width: 23%;
  font-weight: bold;
  
`;

export const Quantity = styled(ItemLeble)`
  display: flex;
  font-weight: bold;
  
`;

export const Arrow = styled.div`
  cursor: pointer;
  font-weight: bold;
  &:hover {
  transform: scale(1.22);
  transform-origin: right;
 
}
`;

export const Value = styled.span`
  margin: 0 10px;
  font-weight: bold;
`;

export const RemoveButton = styled.div`
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background-color: red;
  }
`;