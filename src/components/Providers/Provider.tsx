'use client'
import { PropsWithChildren, useState } from 'react'
import Header from '../partials/Header/Header'
import Footer from '../partials/Footer/Footer'
import { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const Provider = ({ children }: PropsWithChildren) => {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        retry: false,
                        refetchOnWindowFocus: false,
                        refetchOnReconnect: false,
                        staleTime: 5 * 60 * 60 * 1000
                    }
                }
            })
    )
    return (
        <QueryClientProvider client={queryClient}>
            <Toaster position='top-left' />

            <Header />

            <main className='min-h-[calc(100dvh-630px)]! pb-[110px]'>{children}</main>
            
            <Footer />
        </QueryClientProvider>
    )
}

export default Provider


