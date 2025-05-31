import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import ILoginFormType from '../types/login-form.types'


type UserStore = {
    user: ILoginFormType | null,  // حالا نوع user همون ILoginFormType میشه
    setUser: (user: ILoginFormType) => void,
    clearUser: () => void,
}

const useUserStore = create<UserStore>()(
    persist(
        (set) => ({
            user: null,
            setUser: (userData) => set({ user: userData }),
            clearUser: () => set({ user: null }),
        }),
        {
            name: 'user-storage',
            skipHydration: false,
        }
    )
)

export default useUserStore
