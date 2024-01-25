'use client'

import { ChangeEvent, useState } from 'react'

import BackLinkWithCross from '../common/BackTextWithCross'
import Button from '../UI/buttons/Button'
import FileInput from '../UI/inputs/FileInput'
import Input from '../UI/inputs/Input'
import InputWrapper from '../UI/inputs/InputWrapper'
import TextArea from '../UI/inputs/TextArea'

import { useAddAndEditItems } from '@/hooks/useAddAndEditItems'

interface AddAndEditItemProps {
    setActive: (v: boolean) => void
}

export interface FormDataType {
    title: string
    description: string
    price: number
    formData?: FormData
}

export default function AddAndEditItem({ setActive }: AddAndEditItemProps) {
    const [value, setValue] = useState<FormDataType>({ title: '', description: '', price: 0 })
    const [files, setFiles] = useState<File[] | null>(null)

    const onSuccess = () => {
        setValue({ title: '', description: '', price: 0 })
        setFiles(null)
        setActive(false)
    }

    const { addItemWithImg, addItemWithoutImg, isPending } = useAddAndEditItems(onSuccess)

    const handleAddItem = () => {
        const formData = new FormData()

        files?.forEach((el: File) => {
            formData.append('files', el)
        })

        files ? addItemWithImg({ ...value, formData }) : addItemWithoutImg(value)
    }

    const handleChangeFiles = (e: ChangeEvent<HTMLInputElement>) => {
        const AddedFiles = e.target.files
        const arrFiles = []

        if (AddedFiles) {
            for (let i = 0; i < AddedFiles.length; i++) {
                arrFiles.push(AddedFiles[i])
            }
        }

        files ? setFiles([...files, ...arrFiles]) : setFiles([...arrFiles])
    }

    const handleDeleteFiles = (id: number) => {
        const filesAfterDelete = files?.filter((_, index) => index !== id)
        filesAfterDelete?.length ? setFiles(filesAfterDelete) : setFiles(null)
    }

    return (
        <div className="flex flex-col gap-7.5">
            <BackLinkWithCross
                text="Новое объявление"
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
                <TextArea placeholder="Самый..." value={value} setValue={setValue} />
            </InputWrapper>
            <InputWrapper title="Фотографии товара" description="не более 5 фотографий">
                <FileInput
                    files={files}
                    onChange={handleChangeFiles}
                    deleteFiles={handleDeleteFiles}
                />
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
