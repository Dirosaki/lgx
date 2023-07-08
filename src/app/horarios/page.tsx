'use client'

import { OfficeHourCard } from '@/components/OfficeHourCard'
import { PageTitle } from '@/components/PageTitle'
import { Tabs } from '@/components/Tabs'

import officeHourData from './officeHour.json'

import * as Styled from './styles'

const OfficeHour = () => {
  return (
    <>
      <PageTitle title="Horário de funcionamento" />
      <Tabs>
        <Styled.Container>
          {officeHourData.sp.map(({ title, hour }) => (
            <OfficeHourCard key={title} title={title} hour={hour} />
          ))}
          <span>* Verificar disponibilidade</span>
        </Styled.Container>

        <Styled.Container>
          {officeHourData.abc.map(({ title, hour }) => (
            <OfficeHourCard key={title} title={title} hour={hour} />
          ))}
        </Styled.Container>
      </Tabs>
    </>
  )
}

export default OfficeHour
