/* eslint-disable max-statements */
/* eslint-disable complexity */
//todo: edit component to remove eslintIgnore
'use client'

import { useEffect, useState } from 'react'

import { useParams } from 'next/navigation'

import BackLinkWithCross from '../common/BackTextWithCross'
import Button from '../UI/buttons/Button'
import FileInput from '../UI/inputs/FileInput'
import Input from '../UI/inputs/Input'
import InputWrapper from '../UI/inputs/InputWrapper'
import TextArea from '../UI/inputs/TextArea'

import { useAddItem } from '@/hooks/items/useAddItem'
import { useEditItem } from '@/hooks/items/useEditItem'
import { ImageType } from '@/services/items/items.types'
import { useDeleteItemAndImg } from '@/hooks/items/useDeleteItemAndImg'

interface AddAndEditItemProps {
    modalTitle: string
    setActive: (v: boolean) => void
    startValue?: {
        title: string
        description: string
        price: number
        photos?: ImageType[]
    }
}

export interface FormDataType {
    title: string
    description: string
    price: number
    formData?: FormData | File[]
}

export default function AddAndEditItem({ setActive, startValue, modalTitle }: AddAndEditItemProps) {
    const { slug } = useParams<{ slug: string }>()
    const [value, setValue] = useState<FormDataType>({ title: '', description: '', price: 0 })
    const [files, setFiles] = useState<(File | ImageType)[] | null>(null)

    const onAddItemSuccess = () => {
        setValue({ title: '', description: '', price: 0 })
        setFiles(null)
        setActive(false)
    }

    const { addItemWithImg, addItemWithoutImg, isPending } = useAddItem(onAddItemSuccess)
    const { changeItemText, addImgToItem } = useEditItem(() => setActive(false), slug)
    const { deleteImage } = useDeleteItemAndImg(slug)

    const handleAddItem = () => {
        if (startValue) {
            if (files) {
                files.forEach((el: File | ImageType) => {
                    if (!Object.prototype.hasOwnProperty.call(el, 'url')) {
                        const file = el as File
                        const formData = new FormData()
                        formData.append('file', file)
                        addImgToItem(formData)
                    }
                })
            }

            changeItemText(value)
        } else {
            const formData = new FormData()

            files?.forEach((el: File | ImageType) => {
                const file = el as File
                formData.append('files', file)
            })

            files ? addItemWithImg({ ...value, formData }) : addItemWithoutImg(value)
        }
    }

    const handleDeletePhoto = (file_url: string) => {
        deleteImage({ slug, file_url })
    }

    useEffect(() => {
        if (startValue) {
            setValue({
                title: startValue?.title ?? '',
                description: startValue?.description ?? '',
                price: startValue?.price ?? 0,
            })
            setFiles(startValue?.photos ? startValue.photos : null)
        }
    }, [startValue])

    return (
        <div className="flex flex-col gap-7.5">
            <BackLinkWithCross
                text={modalTitle}
                onClick={() => setActive(false)}
                classes={{ wrapper: 'sm:flex', arrow: 'sm:hidden' }}
            />
            <InputWrapper title="Название">
                <Input
                    placeholder="Я хочу продать..."
                    value={value.title}
                    onChange={e => setValue({ ...value, title: e.target.value })}
                />
            </InputWrapper>
            <InputWrapper title="Описание">
                <TextArea
                    placeholder="Самый..."
                    value={value.description}
                    onChange={e => setValue({ ...value, description: e.target.value })}
                />
            </InputWrapper>
            <InputWrapper title="Фотографии товара" description="не более 5 фотографий">
                <FileInput files={files} setFiles={setFiles} deletePhoto={handleDeletePhoto} />
            </InputWrapper>
            <InputWrapper>
                <div className="relative">
                    <Input
                        value={value.price}
                        onChange={e => setValue({ ...value, price: +e.target.value })}
                        className="w-full"
                    />
                    <span className="absolute bottom-1/3 right-4 text-base leading-4">₽</span>
                </div>
            </InputWrapper>
            <Button onClick={handleAddItem}>{isPending ? 'Загрузка...' : 'Опубликовать'}</Button>
        </div>
    )
}
