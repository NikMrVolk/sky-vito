'use client'

import { ChangeEvent } from 'react'

import { cn } from '@/lib/className'

interface InputProps {
    type?: string
    placeholder?: string
    className?: string
    value: string | number
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function Input({
    type = 'text',
    placeholder = '',
    className = '',
    value,
    onChange,
}: InputProps) {
    return (
        <input
            type={type}
            className={cn(
                `rounded-mobileInput border border-black/20 py-2.5 pl-4.25 text-sm focus:border-layoutBlue 
                focus:outline-none sm:rounded-md sm:text-base`,
                className,
            )}
            placeholder={placeholder}
            value={value}
            onChange={e => onChange(e)}
        />
    )
}
