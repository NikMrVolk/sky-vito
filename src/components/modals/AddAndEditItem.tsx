'use client'

import { ChangeEvent, useState } from 'react'

import { useMutation, useQuery } from '@tanstack/react-query'

import BackLinkWithCross from '../common/BackTextWithCross'
import Button from '../UI/buttons/Button'
import FileInput from '../UI/inputs/FileInput'
import Input from '../UI/inputs/Input'
import InputWrapper from '../UI/inputs/InputWrapper'
import TextArea from '../UI/inputs/TextArea'

import { itemsService } from '@/services/items/items.service'
import { QueryKeys } from '@/utils/constants/reactQuery'

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

    const { refetch } = useQuery({
        queryKey: [QueryKeys.GET_ADS],
        queryFn: itemsService.getAll,
        enabled: false,
    })

    const { mutate: addWithoutImg, isPending: isAddWithoutPending } = useMutation({
        mutationKey: [QueryKeys.ADD_ITEM_WITHOUT_IMGS],
        mutationFn: (data: FormDataType) => itemsService.addItemWithoutImage(data),
        onSuccess: () => {
            setValue({ title: '', description: '', price: 0 })
            setActive(false)
            refetch()
        },
    })

    const { mutate: addWithImg, isPending: isAddWithPending } = useMutation({
        mutationKey: [QueryKeys.ADD_ITEM_WITH_IMGS],
        mutationFn: (data: FormDataType) => itemsService.addItemWithImage(data),
        onSuccess: () => {
            setValue({ title: '', description: '', price: 0 })
            setFiles(null)
            setActive(false)
            refetch()
        },
    })

    const handleAddItem = () => {
        const formData = new FormData()

        files?.forEach((el: File) => {
            formData.append('files', el)
        })

        files ? addWithImg({ ...value, formData }) : addWithoutImg(value)
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
            <FileInput
                title="Фотографии товара"
                description="не более 5 фотографий"
                files={files}
                onChange={handleChangeFiles}
            />
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
            <Button onClick={handleAddItem}>
                {isAddWithPending && isAddWithoutPending ? 'Загрузка...' : 'Опубликовать'}
            </Button>
        </div>
    )
}
