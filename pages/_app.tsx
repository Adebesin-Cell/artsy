import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from 'components/Layout/Layout/Layout'

type ArtsyAppProp = Omit<AppProps, 'Component'> & {
  Component: AppProps['Component'] & { noFooter?: boolean }
}

const App = (props: ArtsyAppProp) => {
  const { Component, pageProps } = props

  return (
    <ChakraProvider resetCSS>
      <Layout noFooter={Component.noFooter}>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default App
