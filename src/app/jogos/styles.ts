import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
`

export const SearchFieldWrapper = styled.div(
  ({ theme }) => css`
    padding: 0 0.75rem;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 6px;
    background: ${theme.colors.black};
    border: 1px solid #dddddd;
    border-radius: 6px;
    transition: 0.2s;

    > svg {
      color: #aaaaaa;
      transition: 0.2s;
    }

    &:focus-within {
      border-color: ${theme.colors.whiteSmoke};

      > svg {
        color: ${theme.colors.whiteSmoke};
      }
    }
  `,
)

export const SearchField = styled.input(
  ({ theme }) => css`
    height: 2.5rem;
    flex: 1;
    background: transparent;
    border: none;
    font-size: 0.875rem;
    color: ${theme.colors.whiteSmoke};

    &::placeholder {
      color: #aaaaaa;
    }
  `,
)

export const ClearSearchField = styled.button(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;

    svg {
      color: ${theme.colors.whiteSmoke};
      transition: 0.2s;
    }

    &:hover svg {
      color: ${theme.colors.red};
    }
  `,
)

export const GameList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

export const Game = styled.li(
  ({ theme }) => css`
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.gray};
    border-radius: 6px;
    color: ${theme.colors.whiteSmoke};
  `,
)

export const EmptyMessage = styled.span`
  width: 100%;
  font-size: 14px;
  text-align: center;
  color: #aaaaaa;
`
