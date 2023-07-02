import { useInView } from 'react-intersection-observer'
import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiPhoneFill,
  RiWhatsappFill,
} from 'react-icons/ri'

import { ScrollToTopButton } from '@/components/ScrollToTopButton'

import { Logo } from '@/assets/brand'

import * as Styled from './styles'

export function Header() {
  const { ref, inView } = useInView({
    threshold: 0,
    initialInView: true,
    delay: 500,
    rootMargin: '-12px',
  })

  return (
    <Styled.Header>
      <Logo />

      <Styled.SocialMediaContainer ref={ref}>
        <Styled.SocialMediaCard
          href="https://wa.me/551156234874"
          target="_blank"
          rel="noreferrer"
          aria-label="Ir para o whatsapp da lgx"
        >
          <RiWhatsappFill />
        </Styled.SocialMediaCard>
        <Styled.SocialMediaCard
          href="https://www.instagram.com/lgxlan/"
          target="_blank"
          rel="noreferrer"
          aria-label="Ir para o instagram da lgx"
        >
          <RiInstagramFill />
        </Styled.SocialMediaCard>
        <Styled.SocialMediaCard
          href="https://www.facebook.com/lgxlan"
          target="_blank"
          rel="noreferrer"
          aria-label="Ir para o facebook da lgx"
        >
          <RiFacebookCircleFill />
        </Styled.SocialMediaCard>
        <Styled.SocialMediaCard
          href="tel:+551156234874"
          target="_blank"
          rel="noreferrer"
          aria-label="Fazer ligação para a lgx"
        >
          <RiPhoneFill />
        </Styled.SocialMediaCard>
      </Styled.SocialMediaContainer>

      <ScrollToTopButton visible={!inView} />
    </Styled.Header>
  )
}
