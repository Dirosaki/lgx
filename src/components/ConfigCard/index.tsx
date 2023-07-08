import * as Styled from './styles'

export type ConfigProps = {
  title: string
  description: string
}

type ConfigCardProps = {
  title: string
  configs: ConfigProps[]
}

export const ConfigCard = ({ title, configs }: ConfigCardProps) => {
  return (
    <Styled.Container>
      <Styled.Title>{title}</Styled.Title>
      <Styled.ConfigList>
        {configs.map((config) => (
          <Styled.ConfigItem key={config.title}>
            <strong>{config.title}:</strong>
            <span>{config.description}</span>
          </Styled.ConfigItem>
        ))}
      </Styled.ConfigList>
    </Styled.Container>
  )
}
