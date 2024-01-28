import { cn } from '@/lib/className'

interface ButtonProps {
    children?: React.ReactNode
    className?: string
    // todo change ? to required use
    onClick?: () => void
    disabled?: boolean
}

export default function Button({ children, className, onClick, disabled = false }: ButtonProps) {
    return (
        <button
            className={cn(
                `rounded-md bg-layoutBlue px-9 py-2 text-white hover:bg-layoutBlueHover 
                    ${disabled ? 'bg-gray-400 hover:bg-gray-400' : 'active:translate-y-px'}`,
                className,
            )}
            onClick={e => {
                e.preventDefault()
                if (onClick) {
                    onClick()
                }
            }}
            disabled={disabled}
        >
            {children}
        </button>
    )
}
