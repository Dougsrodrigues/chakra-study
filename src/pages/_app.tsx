
import { SidebarDrawerProvider } from '@/context'
import { makeServer } from '@/services/mirage'
import { theme } from '@/styles/theme'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'


if (process.env.NODE_ENV === 'development') {
  makeServer()
}

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </ChakraProvider>

      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}
