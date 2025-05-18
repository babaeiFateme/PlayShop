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
            <main className="!min-h-[calc(100vh_-_700px)] pb-[110px]">
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Provider