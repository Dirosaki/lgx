import styled, { css } from 'styled-components'

export const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;

  > div {
    padding: 0 0.75rem;
    height: 2rem;
    width: 100%;
    display: flex;
    align-items: center;

    span {
      width: 100%;
      font-size: 0.875rem;
      color: #dddddd;

      &:last-of-type {
        text-align: center;
      }
    }
  }
`

export const GameRoomName = styled.strong`
  font-size: 1rem;
  font-weight: 500;
`

export const PriceList = styled.ul`
  margin-top: 0.375rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
`

export const Price = styled.li(
  ({ theme }) => css`
    padding: 0 0.75rem;
    height: 2.25rem;
    display: flex;
    align-items: center;
    background: ${theme.colors.gray};
    border-radius: 6px;

    span {
      width: 100%;
      font-size: 0.875rem;
      color: ${theme.colors.whiteSmoke};
    }

    div {
      display: flex;
      justify-content: center;
      width: 100%;

      span {
        width: 3.75rem;
      }
    }
  `,
)
