'use client'

import { ChangeEvent } from 'react'

import { MinusCircle } from 'lucide-react'
import Image from 'next/image'

import { API_URL } from '@/utils/constants/routes'
import { toast } from 'react-toastify'
import { ImageType } from '@/services/items/items.types'

interface FileInputProps {
    files: (File | ImageType)[] | null
    setFiles: (e: (File | ImageType)[] | null) => void
}

const ss = ['1', '1', '1', '1', '1']

export default function FileInput({ files, setFiles }: FileInputProps) {
    const checkingMaxNumberImages = (
        files: (File | ImageType)[] | null,
        arrFiles: (File | ImageType)[],
    ) => {
        let newArr = []

        if (files?.length) {
            newArr = [...files, ...arrFiles]
        } else {
            newArr = [...arrFiles]
        }

        if (newArr.length > 5) {
            toast('Больше 5 нельзя')

            newArr.length = 5
        }

        return newArr
    }

    const handleChangeFiles = (e: ChangeEvent<HTMLInputElement>) => {
        const addedFiles = e.target.files
        const arrFiles: (File | ImageType)[] = []

        if (addedFiles) {
            for (let i = 0; i < addedFiles.length; i++) {
                arrFiles.push(addedFiles[i])
            }
        }

        setFiles(checkingMaxNumberImages(files, arrFiles))
    }

    const handleDeleteFiles = (id: number) => {
        const filesAfterDelete = files?.filter((_, index) => index !== id)
        filesAfterDelete?.length ? setFiles(filesAfterDelete) : setFiles(null)
    }

    const getImgUrl = (files: (File | ImageType)[], id: number) => {
        if (Object.prototype.hasOwnProperty.call(files[id], 'url')) {
            const element = files[id] as ImageType
            return API_URL + element.url
        }
        const element = files[id] as File
        return URL.createObjectURL(element)
    }

    return (
        <>
            <div className="flex gap-2.5 overflow-x-scroll pb-2 pt-2 sm:overflow-x-hidden">
                {ss.map((el, id) =>
                    files && files[id] ? (
                        <div
                            key={el + id}
                            className="relative flex h-22.5 w-22.5 items-center justify-center bg-gray-400"
                        >
                            <Image
                                src={getImgUrl(files, id)}
                                alt="photo"
                                width={90}
                                height={90}
                                className="h-auto max-h-22.5 w-auto max-w-22.5"
                            />
                            <MinusCircle
                                className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-black text-white"
                                onClick={() => handleDeleteFiles(id)}
                            />
                        </div>
                    ) : (
                        <label
                            key={el + id}
                            className="relative flex h-22.5 w-22.5 items-center justify-center bg-gray-400"
                        >
                            <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                multiple
                                onChange={e => handleChangeFiles(e)}
                            />
                            <div className="px-11">+</div>
                        </label>
                    ),
                )}
            </div>
        </>
    )
}
