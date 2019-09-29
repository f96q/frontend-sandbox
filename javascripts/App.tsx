/*
import React from 'react'
import { DeepReadonly } from 'utility-types'


type Foo = DeepReadonly<{
  first: {
    second: {
      name: string
    }
  }
}>

const foo: Foo = {
  first: {
    second: {
      name: 'name'
    }
  }
}

foo.first = { second: 'name2' }
//foo.first.second.name = 'name2'

export const App: React.FC = () => (<div>app</div>)
*/


import React from 'react'
import { rgba } from 'polished'
import styled, { ThemeProvider } from 'styled-components'

type Theme = {
  colors: {
    [key: string]: string
  }
}

const theme: Theme = {
  colors: {
    black: '#000',
    white: '#fff'
  }
}

type Color =
  | 'black'
  | 'white'

const color = (color: Color): ((props: { theme: Theme }) => string) => props => props.theme.colors[color]

export const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Main />
  </ThemeProvider>
)

const Main = styled.div`
  color: ${props => rgba(color('black')(props), 0.3)};
`
