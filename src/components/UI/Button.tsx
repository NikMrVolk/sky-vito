import { cn } from '@/lig/className'

interface ButtonProps {
    children?: React.ReactNode
    className?: string
}

export default function Button({ children, className }: ButtonProps) {
    return (
        <button
            className={cn(
                'rounded-md bg-layoutBlue px-9 py-2 text-white hover:bg-layoutBlueHover active:translate-y-px',
                className,
            )}
        >
            {children}
        </button>
    )
}
