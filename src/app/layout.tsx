import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import { cn } from '@/lig/className'

import './globals.css'

const roboto = Roboto({
    weight: ['400', '700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'Sky Vito',
    description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={cn('h-screen', roboto.className)}>{children}</body>
        </html>
    )
}
