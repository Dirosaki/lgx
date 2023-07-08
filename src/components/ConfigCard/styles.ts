import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`

export const Title = styled.strong`
  font-weight: 500;
`

export const ConfigList = styled.ul(
  ({ theme }) => css`
    padding: 0.875rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    background: ${theme.colors.gray};
    border-radius: 6px;
  `,
)

export const ConfigItem = styled.li`
  display: flex;
  font-size: 0.875rem;
  line-height: 1;

  strong {
    width: 100%;
    font-weight: 500;
  }

  span {
    width: 100%;
  }
`
