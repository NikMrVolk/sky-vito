import { cn } from '@/lib/className'

interface InputWithTitleProps {
    type?: string
    title: string
    classes?: { wrapper?: string; title?: string; input?: string }
}

export default function InputWithTitle({
    type = 'text',
    title,
    classes = { wrapper: '', title: '', input: '' },
}: InputWithTitleProps) {
    return (
        <label className={cn('flex flex-col gap-1.5 sm:gap-1', classes.wrapper)}>
            <div className={cn('ml-4.25 text-layoutLightGray', classes.title)}>{title}</div>
            <input
                type={type}
                className={cn(
                    'rounded-mobileInput border border-black/20 py-2.5 pl-4.25 focus:border-layoutBlue focus:outline-none sm:rounded-md',
                    classes.input,
                )}
            />
        </label>
    )
}
