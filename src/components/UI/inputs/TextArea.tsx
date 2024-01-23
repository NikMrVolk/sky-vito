import { cn } from '@/lib/className'

interface TextAreaProps {
    placeholder: string
    className?: string
}

export default function TextArea({ placeholder, className = '' }: TextAreaProps) {
    return (
        <textarea
            className={cn(
                `min-h-27 resize-none rounded-5 border border-black/20 px-4.25 py-2.5 
                text-sm focus:border-layoutBlue focus:outline-none sm:rounded-md sm:text-base`,
                className,
            )}
            placeholder={placeholder}
        />
    )
}