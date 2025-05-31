import QueryClientProviders from '@/components/Providers/QueryClientProviders'
import Login from '@/template/Login'
import React from 'react'

const page = () =>
    <QueryClientProviders>
        <Login />
    </QueryClientProviders>

export default page