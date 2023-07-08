import * as Styled from './styles'

type OfficeHourCardProps = {
  title: string
  hour: string
}

export const OfficeHourCard = ({ title, hour }: OfficeHourCardProps) => {
  return (
    <Styled.Container>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Card>{hour}</Styled.Card>
    </Styled.Container>
  )
}
