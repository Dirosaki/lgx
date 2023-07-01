import { useAnimatedUnmounted } from '@/hooks/useAnimatedUnmounted'

import * as Styled from './styles'
import { RiArrowUpLine } from 'react-icons/ri'

type ScrollToTopButtonProps = {
  visible: boolean
}

export function ScrollToTopButton({ visible }: ScrollToTopButtonProps) {
  const { shouldRender, animatedElementRef } = useAnimatedUnmounted(visible)

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!shouldRender) {
    return null
  }

  return (
    <Styled.ScrollToTopButton
      type="button"
      onClick={handleScrollToTop}
      aria-label="Voltar para o topo"
      ref={animatedElementRef}
      isLeaving={!visible}
    >
      <RiArrowUpLine size={24} />
    </Styled.ScrollToTopButton>
  )
}
