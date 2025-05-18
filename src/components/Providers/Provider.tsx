import { ReactNode } from "react"
import Header from "../partials/Header/Header"
import Footer from "../partials/Footer/Footer"

interface ProviderProps {
    children: ReactNode
}

const Provider = ({ children }: ProviderProps) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Provider