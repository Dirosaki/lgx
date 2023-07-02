import { useAnimatedUnmounted } from '@/hooks/useAnimatedUnmounted'

import * as Styled from './styles'
import { RiCloseFill } from 'react-icons/ri'

type ToastProps = {
  visible: boolean
  message: string
}

export function Toast({ visible, message }: ToastProps) {
  const { shouldRender, animatedElementRef } =
    useAnimatedUnmounted<HTMLDivElement>(visible)

  if (!shouldRender) {
    return null
  }

  return (
    <Styled.Container ref={animatedElementRef}>
      <span>{message}</span>
      <button type="button" aria-label="Remover aviso">
        <RiCloseFill size={24} />
      </button>
    </Styled.Container>
  )
}
