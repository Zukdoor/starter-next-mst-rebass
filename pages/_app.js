import React from 'react'
import App, {Container} from 'next/app'
import Link from 'next/link'
import Router, {withRouter} from 'next/router'
import NProgress from 'nprogress'
import {ThemeProvider} from 'styled-components'
import {Flex, Text} from 'rebass'
import {RouterContext} from '../future'
import theme from '../static/theme'

Router.events.on('routeChangeStart', url => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

// Temporary wrapper to use React 16.3 Context
const InjectRouterContext = withRouter(({router, children}) => {
  return (
    <RouterContext.Provider value={router}>{children}</RouterContext.Provider>
  )
})

export default class MyApp extends App {
  static async getInitialProps({Component, router, ctx}) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps}
  }

  render() {
    const {Component, pageProps} = this.props

    return (
      <Container>
        <InjectRouterContext>
          <ThemeProvider theme={theme}>
            <div>
              <div style={{marginBottom: 20}}>
                <Flex>
                  <Link href="/">
                    <a>
                      <Text p={1}>Home</Text>
                    </a>
                  </Link>
                  <Link href="/about">
                    <a>
                      <Text p={1}>About</Text>
                    </a>
                  </Link>
                  <Link href="/forever">
                    <a>
                      <Text p={1}>Forever</Text>
                    </a>
                  </Link>
                  <Link href="/non-existing">
                    <a>
                      <Text p={1}>Non Existing Page</Text>
                    </a>
                  </Link>
                </Flex>
              </div>
              <Component {...pageProps} />
            </div>
          </ThemeProvider>
        </InjectRouterContext>
      </Container>
    )
  }
}
