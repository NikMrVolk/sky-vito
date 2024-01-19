import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import SearchBar from '@/components/common/SearchBar'
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
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
            <body className={cn('flex h-screen flex-col justify-between', roboto.className)}>
                <div>
                    <Header />
                    <SearchBar />
                </div>

                <main className="h-full">{children}</main>
                <Footer />
            </body>
        </html>
    )
}