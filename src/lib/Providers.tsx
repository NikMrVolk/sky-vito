'use client'

import { PropsWithChildren, useState } from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export function Providers({ children }: PropsWithChildren) {
    const [client] = useState(new QueryClient())

    return (
        <QueryClientProvider client={client}>
            {children}
            {/* <ReactQueryDevtools initialIsOpen={true} /> */}
        </QueryClientProvider>
    )
}
