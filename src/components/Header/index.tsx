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
    delay: 500,
  })

  return (
    <Styled.Header>
      <Logo />

      <Styled.SocialMediaContainer ref={ref}>
        <Styled.SocialMediaCard
          href="https://wa.me/551156234874"
          target="_blank"
          rel="noreferrer"
        >
          <RiWhatsappFill />
        </Styled.SocialMediaCard>
        <Styled.SocialMediaCard
          href="https://www.instagram.com/lgxlan/"
          target="_blank"
          rel="noreferrer"
        >
          <RiInstagramFill />
        </Styled.SocialMediaCard>
        <Styled.SocialMediaCard
          href="https://www.facebook.com/lgxlan"
          target="_blank"
          rel="noreferrer"
        >
          <RiFacebookCircleFill />
        </Styled.SocialMediaCard>
        <Styled.SocialMediaCard
          href="tel=+551156234874"
          target="_blank"
          rel="noreferrer"
        >
          <RiPhoneFill />
        </Styled.SocialMediaCard>
      </Styled.SocialMediaContainer>

      <ScrollToTopButton visible={!inView} />
    </Styled.Header>
  )
}
