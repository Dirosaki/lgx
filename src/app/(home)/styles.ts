import Link from 'next/link'
import styled, { css } from 'styled-components'

export const Navigation = styled.nav`
  width: 100%;

  ul {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
`

export const CustomLink = styled(Link)(
  ({ theme }) => css`
    padding: 0 0.875rem;
    height: 2.625rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.gray};
    border-radius: 6px;
    font-size: 0.875rem;
    text-align: center;
    color: ${theme.colors.whiteSmoke};
    transition: 0.2s;

    &:focus-visible {
      box-shadow: 0 0 0 1px ${theme.colors.red};
    }
  `,
)
