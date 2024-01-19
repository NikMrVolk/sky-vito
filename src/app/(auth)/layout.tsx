import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import { cn } from '@/lib/className'

import '../globals.css'

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
            <body className={cn('h-screen', roboto.className)}>
                <main className="flex h-full items-center justify-center">{children}</main>
            </body>
        </html>
    )
}
