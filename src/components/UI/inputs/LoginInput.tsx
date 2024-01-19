import { cn } from '@/lib/className'

interface LoginInputProps {
    type?: string
    placeholder: string
    className?: string
}

export default function LoginInput({
    type = 'text',
    placeholder,
    className = '',
}: LoginInputProps) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className={cn(
                `w-full rounded-mobileInput border border-loginInput px-4 py-2.5 text-sm placeholder:text-loginInput 
                focus:border-layoutBlue focus:outline-none sm:rounded-none sm:border-0 sm:border-b sm:px-0.5 sm:py-2 sm:text-lg`,
                className,
            )}
        />
    )
}
