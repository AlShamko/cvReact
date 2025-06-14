import styled from "styled-components";
import { Theme } from "../styles/Theme";

export const Button = styled.button`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  width: 170px;
  height: 32px;

  position: relative;
  z-index: 0;

  &:hover {
    &::before {
      width: 100%;
      height: 100%;
      border-radius: 5px;
    }
  }

  &::before {
    content: "";
    display: inline-block;
    width: 50%;
    height: 10px;
    background-color: ${Theme.colors.accent};

    position: absolute;
    bottom: 0;
    left: 50%;
    z-index: -1;
    transform: translateX(-50%);
  }
`;
