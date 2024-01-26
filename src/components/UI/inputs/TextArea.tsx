import { ChangeEvent } from 'react'

import { cn } from '@/lib/className'

interface TextAreaProps {
    placeholder: string
    className?: string
    value: string
    onChange: (v: ChangeEvent<HTMLTextAreaElement>) => void
}

export default function TextArea({ placeholder, className = '', value, onChange }: TextAreaProps) {
    return (
        <textarea
            className={cn(
                `min-h-27 resize-none rounded-5 border border-black/20 px-4.25 py-2.5 
                text-sm focus:border-layoutBlue focus:outline-none sm:rounded-md sm:text-base`,
                className,
            )}
            placeholder={placeholder}
            value={value}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => onChange(e)}
        />
    )
}
