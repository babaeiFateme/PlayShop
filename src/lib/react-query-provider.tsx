'use client'

import { QueryClient, QueryClientProvider, HydrationBoundary, DehydratedState } from '@tanstack/react-query'
import { ReactNode, useState } from 'react'

export default function ReactQueryProvider({ children, state }: { children: ReactNode; state?: DehydratedState }) {
    const [queryClient] = useState(() => new QueryClient())

    return (
        <QueryClientProvider client={queryClient}>
            <HydrationBoundary state={state}>{children}</HydrationBoundary>
        </QueryClientProvider>
    )
}
