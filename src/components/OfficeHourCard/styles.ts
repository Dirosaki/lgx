import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Title = styled.strong`
  font-weight: 500;
  text-align: center;
`

export const Card = styled.span(
  ({ theme }) => css`
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.gray};
    border-radius: 6px;
  `,
)
