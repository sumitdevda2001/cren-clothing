import { Link } from "react-router-dom";
import styled from "styled-components";

// import { IconButton } from "@material-ui/core";

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  .title-text {height: 100%;
    width: 550px;
    padding: 25px;
    font-weight: bold;
    font-size: 53px;
    text-align: left;
    font-family: "Luckiest Guy", cursive;
    color: #2e2e2fcf;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const NavLinkContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;