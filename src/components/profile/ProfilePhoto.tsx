import { User } from 'lucide-react'
import Image from 'next/image'

import { cn } from '@/lib/className'
import { API_URL } from '@/utils/constants/routes'

interface ProfilePhotoProps {
    imgSrc: string
    classes?: { wrapper?: string; img?: string }
}

export default function ProfilePhoto({
    imgSrc,
    classes = { wrapper: '', img: '' },
}: ProfilePhotoProps) {
    return (
        <div
            className={cn(
                `h-33 w-33 rounded-full sm:h-42.5 sm:w-42.5 ${imgSrc !== API_URL + null ? 'bg-layoutGray/30' : ''}`,
                classes.wrapper,
            )}
        >
            {imgSrc !== API_URL + null ? (
                <Image
                    src={imgSrc}
                    alt="photo"
                    width={100}
                    height={100}
                    className={cn('h-full w-full rounded-full', classes.img)}
                />
            ) : (
                <User className="h-full w-full rounded-full" />
            )}
        </div>
    )
}
