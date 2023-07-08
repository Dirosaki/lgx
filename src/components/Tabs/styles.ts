import * as TabsPrimitive from '@radix-ui/react-tabs'

import styled, { css } from 'styled-components'

export const Root = styled(TabsPrimitive.Root)`
  width: 100%;
`

export const List = styled(TabsPrimitive.List)`
  display: flex;
  gap: 0.5rem;
  width: 100%;
`

export const Tab = styled(TabsPrimitive.TabsTrigger)(
  ({ theme }) => css`
    height: 2.5rem;
    width: 100%;
    background: ${theme.colors.gray};
    border-radius: 6px;
    font-size: 0.875rem;
    font-family: inherit;
    color: #aaaaaa;
    transition: 0.2s;

    &[data-state='active'] {
      color: ${theme.colors.whiteSmoke};
    }
  `,
)

export const Content = styled(TabsPrimitive.Content)``
