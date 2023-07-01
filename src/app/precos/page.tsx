'use client'

import { GameRoom } from '@/components/GameRoom'
import * as Styled from './styles'

import prices from './prices.json'
import { PageTitle } from '@/components/PageTitle'

export default function Prices() {
  return (
    <>
      <PageTitle title="Preços" />
      <Styled.Wrapper>
        <GameRoom name="Sala comum" data={prices.common} />
        <GameRoom name="Sala VIP" data={prices.vip} />
      </Styled.Wrapper>
      <Styled.Footer>
        <span>* Os pacotes corujão e corujinha não guardam tempo</span>
      </Styled.Footer>
    </>
  )
}
