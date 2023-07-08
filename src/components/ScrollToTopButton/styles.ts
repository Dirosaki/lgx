import styled, { css, keyframes } from 'styled-components'

const animateIn = keyframes({
  from: {
    transform: 'translateY(52px)',
  },
  to: {
    transform: 'translateY(0)',
  },
})

const animateOut = keyframes({
  from: {
    transform: 'translateY(0)',
  },
  to: {
    transform: 'translateY(52px)',
  },
})

type ScrollToTopButtonProps = {
  $isLeaving: boolean
}

export const ScrollToTopButton = styled.button<ScrollToTopButtonProps>(
  ({ theme, $isLeaving }) => css`
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    height: 2.25rem;
    width: 2.25rem;
    background: ${theme.colors.red};
    border-radius: 999px;
    color: ${theme.colors.whiteSmoke};
    animation: ${animateIn} 0.2s;
    transition: 0.2s;

    &:focus-visible {
      box-shadow: 0 0 0 2px ${theme.colors.whiteSmoke};
    }

    ${$isLeaving &&
    css`
      animation: ${animateOut} 0.2s forwards;
    `}
  `,
)
