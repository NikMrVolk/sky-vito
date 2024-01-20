import ButtonWithSellerPhone from '../UI/buttons/ButtonWithSellerPhone'

import { cn } from '@/lib/className'

interface ProfileAvatarProps {
    isOther?: boolean
    classes?: { wrapper?: string; photo?: string; button?: string; link?: string }
}

export default function ProfileAvatar({ isOther, classes }: ProfileAvatarProps) {
    return (
        <div className={cn('flex flex-col items-center gap-2.5', classes?.wrapper)}>
            <div
                className={cn(
                    'h-33 w-33 rounded-full bg-layoutGray/30 sm:h-42.5 sm:w-42.5',
                    classes?.photo,
                )}
            />
            {isOther ? (
                <ButtonWithSellerPhone
                    number={89051023445}
                    classes={{ buttonWrapper: classes?.button }}
                />
            ) : (
                <div className={cn('cursor-pointer text-layoutBlue', classes?.link)}>Заменить</div>
            )}
        </div>
    )
}
