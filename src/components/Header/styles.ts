import { css, styled } from 'styled-components'

export const Header = styled.header`
  margin-bottom: 2.5rem;
  padding-bottom: 2.5rem;
  position: relative;
  width: 100%;
  max-width: 25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    height: 1px;
    width: 11.25rem;
    background: #777777;
  }

  svg {
    width: 100%;
  }
`

export const SocialMediaContainer = styled.div`
  display: flex;
  gap: 0.875rem;
`

export const SocialMediaCard = styled.a(
  ({ theme }) => css`
    height: 2.5rem;
    width: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.gray};
    border-radius: 6px;
    color: ${theme.colors.whiteSmoke};
    transition: 0.2s;

    &:focus-visible {
      box-shadow: 0 0 0 2px ${theme.colors.red};
    }

    svg {
      height: 1.5rem;
      width: 1.5rem;
    }
  `,
)
