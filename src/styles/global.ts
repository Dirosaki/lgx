'use client'

import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyles = createGlobalStyle(
  ({ theme }) => css`
    *,
    *::before,
    *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      list-style: none;
      outline: transparent;
    }

    html {
      height: 100%;
    }

    body {
      padding: 3rem 2.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      min-height: 100%;
      background: ${theme.colors.black};
      color: ${theme.colors.whiteSmoke};

      @media (max-width: 350px) {
        padding: 3rem 1.5rem;
      }
    }

    main {
      flex: 1;
      width: 100%;
      max-width: 25rem;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    button {
      border: none;
      cursor: pointer;
    }

    a {
      text-decoration: none;
      color: currentColor;
    }
  `,
)
