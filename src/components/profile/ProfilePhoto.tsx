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
                'h-33 w-33 rounded-full bg-layoutGray/30 sm:h-42.5 sm:w-42.5',
                classes.wrapper,
            )}
        >
            {imgSrc && (
                <Image
                    src={imgSrc}
                    alt="photo"
                    width={100}
                    height={100}
                    className={cn(
                        `h-full w-full rounded-full ${imgSrc === API_URL + null ? 'hidden' : ''}`,
                        classes.img,
                    )}
                />
            )}
        </div>
    )
}
