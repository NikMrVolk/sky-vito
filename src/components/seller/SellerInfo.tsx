'use client'

import ProfileAvatar from '@/components/profile/ProfileAvatar'
import ButtonWithSellerPhone from '@/components/UI/buttons/ButtonWithSellerPhone'
import { UserType } from '@/services/user/user.types'

export default function SellerInfo({ curentSeller }: { slug: string; curentSeller?: UserType }) {
    return (
        <div className="flex flex-col gap-7.5 xs:flex-row-reverse xs:justify-center sm:justify-end">
            <div className="flex flex-col gap-1.5 text-layoutGray">
                <div className="text-xl font-semibold text-black">
                    {curentSeller?.name} {curentSeller?.surname}
                </div>
                <div>{curentSeller?.city}</div>
                <div>Продает товары с {curentSeller?.sells_from}</div>
                <ButtonWithSellerPhone
                    number={curentSeller?.phone}
                    classes={{ buttonWrapper: 'hidden xs:flex xs:mt-5' }}
                />
            </div>
            <ProfileAvatar
                isOther
                classes={{ wrapper: 'gap-7.5 mb-10', button: 'xs:hidden' }}
                imgSrc={curentSeller?.avatar}
                phoneNumber={curentSeller?.phone}
            />
        </div>
    )
}
