import React from 'react'
import App, {Container} from 'next/app'
import {withRouter} from 'next/router'
import {ThemeProvider} from 'styled-components'
import {RouterContext} from '../future'
import theme from '../static/theme'

// Temporary wrapper to use React 16.3 Context
const InjectRouterContext = withRouter(({router, children}) => {
  return (
    <RouterContext.Provider value={router}>{children}</RouterContext.Provider>
  )
})

export default class MyApp extends App {
  render() {
    const {Component, pageProps} = this.props

    return (
      <Container>
        <InjectRouterContext>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </InjectRouterContext>
      </Container>
    )
  }
}
