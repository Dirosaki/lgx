import { formatCurrency } from '@/utils/formatters'
import * as Styled from './styles'

type GameRoomProps = {
  name: string
  data: {
    package: string
    price: number
  }[]
}

export function GameRoom({ name, data }: GameRoomProps) {
  return (
    <div>
      <Styled.Header>
        <Styled.GameRoomName>{name}</Styled.GameRoomName>
        <div>
          <span>Pacotes</span>
          <span>Preços</span>
        </div>
      </Styled.Header>

      <Styled.PriceList>
        {data.map((item) => (
          <Styled.Price key={item.package}>
            <span>{item.package}</span>
            <div>
              <span>{formatCurrency(item.price)}</span>
            </div>
          </Styled.Price>
        ))}
      </Styled.PriceList>
    </div>
  )
}
