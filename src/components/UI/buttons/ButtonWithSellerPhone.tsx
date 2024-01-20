import Button from './Button'

import { cn } from '@/lib/className'

interface ButtonWithSellerPhoneProps {
    number: number
    text?: string
    classes?: { buttonWrapper?: string; text?: string; number?: string }
}

export default function ButtonWithSellerPhone({
    number,
    text = 'Показать телефон',
    classes = { buttonWrapper: '', text: '', number: '' },
}: ButtonWithSellerPhoneProps) {
    return (
        <Button className={cn('flex flex-col items-center', classes?.buttonWrapper)}>
            <div className={cn('text-sm font-semibold sm:text-base', classes?.text)}>{text}</div>
            <div className={cn('text-xs sm:text-sm', classes?.number)}>{number}</div>
        </Button>
    )
}
