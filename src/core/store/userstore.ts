import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import ILoginFormType from '../types/login-form.types'

type UserStore = {
    user: ILoginFormType | null
    setUser: (user: ILoginFormType) => void
    logoutUser: () => void
}

const useUserStore = create<UserStore>()(
    persist(
        (set) => ({
            user: null,
            setUser: (userData) => set({ user: userData }),
            logoutUser: () => set({ user: null })
        }),
        {
            name: 'user-storage',
            skipHydration: false
        }
    )
)

export default useUserStore
