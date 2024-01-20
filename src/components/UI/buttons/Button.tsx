import { cn } from '@/lib/className'

interface ButtonProps {
    children?: React.ReactNode
    className?: string
    // todo change ? to required use
    onClick?: () => void
}

export default function Button({ children, className, onClick }: ButtonProps) {
    return (
        <button
            className={cn(
                'rounded-md bg-layoutBlue px-9 py-2 text-white hover:bg-layoutBlueHover active:translate-y-px',
                className,
            )}
            onClick={onClick}
        >
            {children}
        </button>
    )
}
