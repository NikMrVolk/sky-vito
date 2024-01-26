'use client'

import { useState } from 'react'

import Button from './Button'

import { cn } from '@/lib/className'

interface ButtonWithSellerPhoneProps {
    number?: string
    text?: string
    classes?: { buttonWrapper?: string; text?: string; number?: string }
}

const hideNumber = (number: string): string =>
    number
        .split('')
        .map(() => '*')
        .join('')

export default function ButtonWithSellerPhone({
    number,
    text = 'Показать телефон',
    classes = { buttonWrapper: '', text: '', number: '' },
}: ButtonWithSellerPhoneProps) {
    const [isShow, setIsShow] = useState<boolean>(false)

    if (!number) return <></>

    return (
        <Button
            className={cn('flex max-w-56 flex-col items-center', classes?.buttonWrapper)}
            onClick={() => setIsShow(true)}
        >
            <div className={cn('text-sm font-semibold sm:text-base', classes?.text)}>{text}</div>
            <div className={cn('text-xs sm:text-sm', classes?.number)}>
                {isShow ? number : hideNumber(number)}
            </div>
        </Button>
    )
}
