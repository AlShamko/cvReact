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
    }

    ul {
        list-style: none;
    }

    button {
        background-color: unset;
        border: none;
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
`;
