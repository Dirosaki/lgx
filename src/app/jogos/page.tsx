'use client'
import { ChangeEvent, useState } from 'react'
import { RiCloseFill, RiSearchLine } from 'react-icons/ri'

import { PageTitle } from '@/components/PageTitle'

import games from './games.json'

import * as Styled from './styles'
import { useDebounce } from '@/hooks/useDebounce'

export default function Games() {
  const [search, setSearch] = useState('')

  const debouncedSearch = useDebounce(search)

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  const handleClearSearchField = () => {
    setSearch('')
  }

  const filteredGames = games.filter((game) => {
    const searchFormatted = debouncedSearch.toLowerCase()

    const name = game.name.toLowerCase()
    const acronym = game.acronym?.toLowerCase()

    const filteredByName = name.includes(searchFormatted)
    const filteredByAcronym = acronym?.includes(searchFormatted)

    return filteredByName || filteredByAcronym
  })

  return (
    <>
      <PageTitle title="Jogos" />
      <Styled.Wrapper>
        <Styled.SearchFieldWrapper>
          <RiSearchLine size={18} />
          <Styled.SearchField
            type="text"
            placeholder="Pesquisar jogos..."
            value={search}
            onChange={handleChangeSearch}
          />
          {search && (
            <Styled.ClearSearchField
              type="button"
              aria-label="Limpar pesquisa"
              onClick={handleClearSearchField}
            >
              <RiCloseFill size={22} />
            </Styled.ClearSearchField>
          )}
        </Styled.SearchFieldWrapper>

        {filteredGames.length ? (
          <Styled.GameList>
            {filteredGames.map((game) => (
              <Styled.Game key={game.name}>{game.name}</Styled.Game>
            ))}
          </Styled.GameList>
        ) : (
          <Styled.EmptyMessage>
            Nenhum jogo encontrado <br /> com essa descrição!
          </Styled.EmptyMessage>
        )}
      </Styled.Wrapper>
    </>
  )
}
