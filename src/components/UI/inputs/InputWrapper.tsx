import { cn } from '@/lib/className'

interface InputWrapperProps {
    title?: string
    description?: string
    classes?: { wrapper?: string; title?: string; description?: string }
    children: React.ReactNode
}

export default function InputWrapper({
    title,
    description,
    classes = { wrapper: '', title: '', description: '' },
    children,
}: InputWrapperProps) {
    return (
        <div className={cn('flex flex-col', classes.wrapper)}>
            <div className={cn('ml-4.25 flex gap-2 text-sm sm:text-base', classes.title)}>
                {title}
                <span className={cn('text-layoutLightGray', classes.description)}>
                    {description}
                </span>
            </div>
            {children}
        </div>
    )
}
