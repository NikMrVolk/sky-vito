import { cn } from '@/lib/className'

interface SearchInputProps {
    className?: string
    type?: string
    placeholder?: string
}

export default function SearchInput({
    className = '',
    type = 'text',
    placeholder = 'Поиск',
}: SearchInputProps) {
    return (
        <input
            className={cn(
                'rounded-md px-4 py-1 focus:border-layoutBlue focus:outline-none',
                className,
            )}
            type={type}
            placeholder={placeholder}
        />
    )
}
