import { cn } from '@/lig/className'

interface SearchInputProps {
    className?: string
    type: string
    placeholder: string
}

export default function SearchInput({ className = '', type, placeholder }: SearchInputProps) {
    return (
        <input
            className={cn('rounded-mobileSearchInput px-4 py-1', className)}
            type={type}
            placeholder={placeholder}
        />
    )
}
