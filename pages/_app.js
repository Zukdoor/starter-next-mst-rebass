import React from 'react'
import App, {Container} from 'next/app'
import Router, {withRouter} from 'next/router'
import NProgress from 'nprogress'
import {ThemeProvider} from 'styled-components'
import {Provider} from 'mobx-react'
import {getSnapshot} from 'mobx-state-tree'
import {initializeStore} from '../stores/store'
import {RouterContext} from '../future'
import theme from '../theme'
import Header from '../components/Header'
import Footer from '../components/Footer'

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
    const isServer = typeof window === 'undefined'
    const store = initializeStore(isServer)

    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {
      initialState: getSnapshot(store),
      isServer,
      pageProps,
    }
  }

  constructor(props) {
    super(props)
    this.store = initializeStore(props.isServer, props.initialState)
  }

  render() {
    const {Component, pageProps} = this.props

    return (
      <Container>
        <InjectRouterContext>
          <ThemeProvider theme={theme}>
            <Provider store={this.store}>
              <div>
                <Header />
                <Component {...pageProps} />
                <Footer />
              </div>
            </Provider>
          </ThemeProvider>
        </InjectRouterContext>
      </Container>
    )
  }
}
