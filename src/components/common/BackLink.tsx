'use client'

import Image from 'next/image'

import { cn } from '@/lib/className'

interface BackLinkProps {
    text: string
    onClick?: () => void
    classes?: { wrapper?: string; arrow?: string; text?: string }
}

export default function BackLink({
    text,
    onClick = () => {},
    classes = { wrapper: '', arrow: '', text: '' },
}: BackLinkProps) {
    return (
        <div
            className={cn('flex items-center gap-7.5 sm:hidden', classes?.wrapper)}
            onClick={onClick}
        >
            <Image
                src="/images/icons/blackWector.png"
                alt="back"
                width={10}
                height={18}
                className={cn('h-4.5 w-2.5', classes?.arrow)}
            />
            <span className={cn('text-2xl font-medium', classes?.text)}>{text}</span>
        </div>
    )
}
