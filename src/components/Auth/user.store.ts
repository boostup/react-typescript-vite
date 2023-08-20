import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface User {
    displayName: string | null
    email: string | null
    photoURL: string | null
    accessToken: string
}

interface UserState {
    user: User | null
    setUser: (user: User | null) => void;
}

const persistKey = () => `${process.env.INVITELY_LOCAL_STORAGE_PREFIX}User`;

const useStore = create<UserState>()(
    persist(
        (set) => ({
            user: null,
            setUser: (user) => {
                return set({ user });
            },
        }),
        { name: persistKey() }
    )
)

export const useSignedUser = () => ({
    signedUser: useStore(state => state.user),
    setSignedUser: useStore(state => state.setUser)
});