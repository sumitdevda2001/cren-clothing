import styled from "styled-components";

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const Title = styled.span`
 
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
  color: #3d3233;
  transition: color 0.2s ease-in-out;
  
  &:hover {
    padding-left: 25px;
    background-color: #f5f5df;
    color: #ff7f50;
    animation: textBounce 0.5s ease-in-out;
    padding-right: 30px;
    border: solid 1px;
  }
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  position: relative;



  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: #d6d6d4;
    z-index: -1;
    transition: width 0.3s ease-in-out;
  }

  &:hover::before {
    height: 370px;
    width: 1290px;
  }
  button:active {
    background-color: green;
  }
  
`;
