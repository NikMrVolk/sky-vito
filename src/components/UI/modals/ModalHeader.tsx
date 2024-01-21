'use client'

import Image from 'next/image'

import BackLink from '@/components/common/BackLink'
import useScreenSize from '@/hooks/common/useScreenSize'
import { cn } from '@/lib/className'

interface ModalHeaderProps {
    classes?: { wrapper?: string; cross?: string }
    linkText: string
    onClick: () => void
}

export default function ModalHeader({
    classes = { wrapper: '', cross: '' },
    linkText,
    onClick,
}: ModalHeaderProps) {
    const { width } = useScreenSize()

    return (
        <div className={cn('flex justify-between', classes.wrapper)}>
            <BackLink
                text={linkText}
                classes={{ arrow: 'sm:hidden', wrapper: 'sm:block' }}
                onClick={() => {
                    if (width < 640) onClick()
                }}
            />
            <Image
                src="/images/icons/cross.png"
                alt="cross"
                width={30}
                height={30}
                onClick={onClick}
                className="hidden sm:block"
            />
        </div>
    )
}
