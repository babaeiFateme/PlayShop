import { ReactNode } from 'react'
import Header from '../partials/Header/Header'
import Footer from '../partials/Footer/Footer'
import { Toaster } from 'react-hot-toast'

interface ProviderProps {
    children: ReactNode
}

const Provider = ({ children }: ProviderProps) => {
    return (
        <>
            <Toaster position='top-left' />

            <Header />
            <main className='!min-h-[calc(100dvh-630px)] pb-[110px]'>{children}</main>
            <Footer />
        </>
    )
}

export default Provider

