'use client'

import { memo } from 'react'

import Image from 'next/image'

interface EyeOnPasswordProps {
    condition: boolean
    isShowPassword: boolean
    setIsShowPassword: (v: boolean) => void
}

export default memo(function EyeOnPassword({
    condition,
    isShowPassword,
    setIsShowPassword,
}: EyeOnPasswordProps) {
    if (!condition) return null

    return (
        <span
            className="absolute inset-y-0 right-5 flex items-center pl-2"
            onClick={() => setIsShowPassword(!isShowPassword)}
        >
            {isShowPassword ? (
                <Image
                    src="/images/icons/eye-off.png"
                    alt="eye-off"
                    width={20}
                    height={20}
                    className="h-5 w-5 cursor-pointer "
                />
            ) : (
                <Image
                    src="/images/icons/eye.png"
                    alt="eye-off"
                    width={20}
                    height={20}
                    className="h-5 w-5 cursor-pointer"
                />
            )}
        </span>
    )
})
