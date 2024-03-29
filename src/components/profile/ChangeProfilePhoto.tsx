import React, { ChangeEvent, useEffect, useState } from 'react'

import File from '../UI/inputs/File'

import ProfilePhoto from './ProfilePhoto'

import { useChangeUserData } from '@/hooks/user/useChangeUserData'

export default function ChangeProfilePhoto() {
    const [file, setFile] = useState<File | null>(null)

    const { userData, changeUserImg, isAddImgLoading } = useChangeUserData()

    const handleChangeFile = (e: React.MouseEvent<HTMLLabelElement | MouseEvent>) => {
        if (file) {
            e.preventDefault()
            const formData = new FormData()
            formData.append('file', file)
            changeUserImg(formData)
            setTimeout(() => {}, 200)
        }
    }

    const handleChangeState = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0])
        }
    }

    console.log(process.env.NEXT_PUBLIC_API_URL)

    useEffect(() => {
        setFile(null)
    }, [userData?.avatar])

    return (
        <div className="flex flex-col items-center gap-2.5">
            <ProfilePhoto
                imgSrc={
                    file
                        ? URL.createObjectURL(file)
                        : (process.env.NEXT_PUBLIC_API_URL as string) + userData?.avatar
                }
            />
            {isAddImgLoading ? (
                <div>Загрузка...</div>
            ) : (
                <label
                    className="cursor-pointer text-layoutBlue"
                    onClick={e => handleChangeFile(e)}
                >
                    {file ? 'Сохранить' : 'Заменить'}
                    <File onChange={e => handleChangeState(e)} />
                </label>
            )}
        </div>
    )
}
