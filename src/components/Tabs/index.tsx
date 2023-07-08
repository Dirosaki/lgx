import { ReactNode } from 'react'
import * as Styled from './styles'

type TabsProps = {
  children: [SPContent: ReactNode, ABCContent: ReactNode]
}

export const Tabs = ({ children }: TabsProps) => {
  return (
    <Styled.Root defaultValue="sp">
      <Styled.List>
        <Styled.Tab value="sp">Unidade SP</Styled.Tab>
        <Styled.Tab value="abc">Unidade ABC</Styled.Tab>
      </Styled.List>
      <Styled.Content value="sp">{children[0]}</Styled.Content>
      <Styled.Content value="abc">{children[1]}</Styled.Content>
    </Styled.Root>
  )
}
