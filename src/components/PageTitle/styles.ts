import styled, { css } from 'styled-components'

export const Header = styled.header(
  ({ theme }) => css`
    width: 100%;
    margin-bottom: 2rem;
    display: grid;
    grid-template-columns: 1.5rem 1fr 1.5rem;
    align-items: center;

    button {
      height: 2rem;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      background: transparent;
      color: ${theme.colors.whiteSmoke};
      transition: 0.2s;

      &:focus-visible {
        color: ${theme.colors.red};
      }

      @media (hover: hover) {
        &:hover {
          color: ${theme.colors.red};
        }
      }
    }

    h1 {
      justify-self: center;
      font-size: 1.5rem;
      font-weight: 500;
      text-align: center;
      line-height: 1.3;
    }
  `,
)
