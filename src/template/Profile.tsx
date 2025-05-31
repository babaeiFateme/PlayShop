'use client'
import useUserStore from '@/core/store/userstore'
import React from 'react'

const Profile = () => {
    const user = useUserStore((state) => state.user)

    if (!user) {
        return <div>Loading or not logged in...</div>
    }

    return (
        <div>
            {user.email} {user.password}
        </div>
    )
}

export default Profile
