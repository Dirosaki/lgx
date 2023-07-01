'use client'
import { ReactNode } from 'react'
import { Poppins } from 'next/font/google'

import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from '@/styles/global'
import { theme } from '@/styles/theme'
import { Header } from '@/components/Header'
import StyledComponentsRegistry from '@/lib/styledComponentsRegistry'
import Head from './head'

const poppins = Poppins({
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <Head />
      <body className={poppins.className}>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Header />
            <main>{children}</main>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
