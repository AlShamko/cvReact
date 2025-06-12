import { createGlobalStyle } from "styled-components";
import { Theme } from "./Theme";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Poppins', sans-serif;
        color: ${Theme.colors.font};
        line-height: 1.2;

    }

    a {
        text-decoration: none;
        color: ${Theme.colors.font};
        cursor: pointer;
    }

    ul {
        list-style: none;
    }

    button {
        background-color: unset;
        border: none;
        cursor: pointer;
        color: ${Theme.colors.font}
    }

    section {
        padding: 100px 0;
    }    
    
    section: nth-of-type(odd) {
        background-color: ${Theme.colors.primaryBg};
    }

    section: nth-of-type(even) {
        background-color: ${Theme.colors.secondaryBg};
    }

    h3 {
        font-family: "Josefin Sans", sans-serif;
        font-weight: 700;
        font-size: 16px;
        letter-spacing: 1px;
    }

    p {
        font-weight: 400;
        font-size: 14px;
        line-height: 1.4;
    }
`;
