'use client'
import * as Styled from './styles'

export default function Home() {
  return (
    <Styled.Navigation>
      <ul>
        <li>
          <Styled.CustomLink href="horarios">
            Horário de funcionamento
          </Styled.CustomLink>
        </li>
        <li>
          <Styled.CustomLink href="precos">Preços</Styled.CustomLink>
        </li>
        <li>
          <Styled.CustomLink href="configuracoes">
            Configurações/Setups
          </Styled.CustomLink>
        </li>
        <li>
          <Styled.CustomLink href="jogos">Jogos</Styled.CustomLink>
        </li>
      </ul>
    </Styled.Navigation>
  )
}
