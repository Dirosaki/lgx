import styled, { css } from 'styled-components'

export const Container = styled.div(
  ({ theme }) => css`
    border-radius: 6px;
    height: 40px;
    width: 180px;
    display: flex;
    align-items: center;
    color: ${theme.colors.whiteSmoke};

    span {
      font-size: 0.875rem;
    }
  `,
)
