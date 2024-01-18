import { cn } from '@/lib/className'

interface BlockWrapperProps {
    children: React.ReactNode
    className?: string
}

export default function BlockWrapper({ children, className = '' }: BlockWrapperProps) {
    return <div className={cn('px-4.5 xl:px-mainLayoutCalc', className)}>{children}</div>
}
