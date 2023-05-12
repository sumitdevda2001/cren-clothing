import styled from "styled-components";

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(0.90) translateX(10px);
  }

  img {
  width: 30%;
  border-radius: 10px;
  border: #821fcf;
  border-style: dotted;
  border-width: 1px;
  border-radius: 5px;
  }
  img:hover {
  transform: scale(1.1);
}
`;

export const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
  font-weight: bold;
    color: #2f3030;
    font-family: 'Open Sans', sans-serif;
`;

export const Name = styled.span`
  font-size: 16px;
  transition: transform 0.3s ease-out-in;
  
  &:hover {
    transform: scale(1.2);
  }
`;

export const Price = styled.span`
  font-size: 16px;
  transition: transform 0.3s ease-out-in;
  
  &:hover {
    transform: scale(1.2);
  }
`;