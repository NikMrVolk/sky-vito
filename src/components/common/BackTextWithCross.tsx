'use client'

import Image from 'next/image'

import useScreenSize from '@/hooks/common/useScreenSize'
import { cn } from '@/lib/className'

interface BackLinkWithCrossProps {
    text: string
    // todo change ? => to use always
    onClick?: () => void
    classes?: { wrapper?: string; arrow?: string; text?: string; cross?: string }
}

const keySizeValue: number = 640

export default function BackLinkWithCross({
    text,
    onClick = () => {},
    classes = { wrapper: '', arrow: '', text: '', cross: '' },
}: BackLinkWithCrossProps) {
    const { width } = useScreenSize()

    return (
        <div className={cn('flex items-center justify-between sm:hidden', classes?.wrapper)}>
            <div
                className="flex items-center gap-7.5"
                onClick={() => {
                    if (width < keySizeValue) onClick()
                }}
            >
                <Image
                    src="/images/icons/blackWector.png"
                    alt="back"
                    width={10}
                    height={18}
                    className={cn('h-4.5 w-2.5', classes?.arrow)}
                />
                <span className={cn('text-2xl font-medium', classes?.text)}>{text}</span>
            </div>
            <Image
                src="/images/icons/cross.png"
                alt="cross"
                width={30}
                height={30}
                className={cn('hidden sm:block', classes.cross)}
                onClick={() => {
                    if (width >= keySizeValue) onClick()
                }}
            />
        </div>
    )
}
