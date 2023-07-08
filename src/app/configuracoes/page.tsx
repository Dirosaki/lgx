'use client'

import { ConfigCard } from '@/components/ConfigCard'
import { PageTitle } from '@/components/PageTitle'

import configs from './configs.json'

import * as Styled from './styles'
import { Tabs } from '@/components/Tabs'

const PCConfig = () => {
  return (
    <>
      <PageTitle title="Configs/Setups" />
      <Tabs>
        <Styled.Container>
          {configs.sp.map(({ title, configs }) => (
            <ConfigCard key={title} title={title} configs={configs} />
          ))}
        </Styled.Container>

        <Styled.Container>
          {configs.abc.map(({ title, configs }) => (
            <ConfigCard key={title} title={title} configs={configs} />
          ))}
        </Styled.Container>
      </Tabs>
    </>
  )
}

export default PCConfig
