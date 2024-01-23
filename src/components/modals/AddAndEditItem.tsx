'use client'

import { ChangeEvent, useState } from 'react'

import { useMutation, useQuery } from '@tanstack/react-query'

import BackLinkWithCross from '../common/BackTextWithCross'
import Button from '../UI/buttons/Button'
import InputWithTitle from '../UI/inputs/InputWithTitle'
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
    files?: File[]
}

const ss = ['1', '1', '1', '1', '1']

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

    const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
        const values = e.currentTarget.files
        if (values) {
            // setFiles(values)
        }
    }

    const handleAddItem = () => {
        files ? addWithImg({ ...value, files }) : addWithoutImg(value)
    }

    return (
        <div className="flex flex-col gap-7.5">
            <BackLinkWithCross
                text="Новое объявление"
                onClick={() => setActive(false)}
                classes={{ wrapper: 'sm:flex', arrow: 'sm:hidden' }}
            />
            <InputWithTitle
                title="Название"
                placeholder="Я хочу продать..."
                classes={{ title: 'text-black' }}
            >
                <input
                    type="text"
                    className="w-full rounded-5 border border-black/20 py-2.5 pl-4.25 pr-10 
                    text-sm focus:border-layoutBlue focus:outline-none sm:rounded-md sm:text-base"
                    placeholder="Я хочу продать..."
                    value={value.title}
                    onChange={e => setValue({ ...value, title: e.target.value })}
                />
            </InputWithTitle>
            <InputWithTitle
                title="Описание"
                placeholder="Описание..."
                classes={{ title: 'text-black' }}
            >
                <TextArea placeholder="Самый..." value={value} setValue={setValue} />
            </InputWithTitle>
            <InputWithTitle
                title="Описание товара"
                description="не более 5 фотографий"
                placeholder=""
                classes={{
                    title: 'text-black flex gap-0 flex-col',
                    description: 'text-layoutLightGray',
                }}
            >
                <div className="flex gap-2.5 overflow-x-scroll pb-2 sm:overflow-x-hidden">
                    {ss.map(el => (
                        <label
                            key={el}
                            className="flex h-22.5 w-22.5 items-center justify-center bg-gray-400"
                        >
                            <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                multiple
                                onChange={handleChangeFile}
                            />
                            <div className="px-11">+</div>
                        </label>
                    ))}
                </div>
            </InputWithTitle>
            <InputWithTitle title="Цена" placeholder="" classes={{ wrapper: '-mt-2' }}>
                <div className="relative">
                    <input
                        type="number"
                        className="w-full rounded-5 border border-black/20 py-2.5 pl-4.25 pr-10 
                    text-sm focus:border-layoutBlue focus:outline-none sm:rounded-md sm:text-base"
                        value={value.price}
                        onChange={e => setValue({ ...value, price: +e.target.value })}
                    />
                    <span className="absolute bottom-1/3 right-4 text-base leading-4">₽</span>
                </div>
            </InputWithTitle>
            <Button onClick={handleAddItem}>
                {isAddWithPending && isAddWithoutPending ? 'Загрузка...' : 'Опубликовать'}
            </Button>
        </div>
    )
}
