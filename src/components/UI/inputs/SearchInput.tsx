import { cn } from '@/lib/className'

interface SearchInputProps {
    className?: string
    type?: string
    placeholder?: string
    value: string
    onChange: (v: string) => void
}

export default function SearchInput({
    className = '',
    type = 'text',
    placeholder = 'Поиск',
    value,
    onChange,
}: SearchInputProps) {
    return (
        <input
            className={cn(
                'rounded-md px-4 py-1 focus:border-layoutBlue focus:outline-none',
                className,
            )}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={e => onChange(e.target.value)}
        />
    )
}
