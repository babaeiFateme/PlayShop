import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import TUserStore from './user-store.types'

const useUserStore = create<TUserStore>()(
    persist(
        (set) => ({
            user: null,
            setUserReducer: (userData) => set({ user: userData }),
            logoutUser: () => set({ user: null })
        }),
        
        {
            name: 'user-storage',
            skipHydration: false
        }
    )
)

export default useUserStore
