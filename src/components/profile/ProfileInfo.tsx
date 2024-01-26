'use client'

import { useState } from 'react'

import { useQuery } from '@tanstack/react-query'

import Button from '../UI/buttons/Button'
import Input from '../UI/inputs/Input'
import InputWrapper from '../UI/inputs/InputWrapper'

import ProfileAvatar from './ProfileAvatar'

import { userService } from '@/services/user/user.service'
import { QueryKeys } from '@/utils/constants/reactQuery'

interface IProfileForm {
    name: string
    surname: string
    city: string
    phone: string
}

export default function ProfileInfo() {
    const [value, setValue] = useState<IProfileForm>({ name: '', surname: '', city: '', phone: '' })

    const { data } = useQuery({
        queryKey: [QueryKeys.GET_CURRENT_USER],
        queryFn: () => userService.getCurrent(),
    })

    return (
        <section className="mb-10 mt-7.5 flex flex-col gap-7.5">
            <div className="text-lg sm:text-3.5xl">Настройки профиля</div>
            <div className="flex flex-col gap-7.5 sm:flex-row md:gap-12.5">
                <ProfileAvatar phoneNumber={data?.phone} />
                <div className="flex max-w-153.5 flex-col gap-4.5 sm:w-full">
                    <div className="flex flex-col gap-4.5 lg:flex-row">
                        <InputWrapper
                            title="Имя"
                            classes={{ title: 'text-layoutLightGray', wrapper: 'w-full' }}
                        >
                            <Input
                                placeholder="Антон"
                                value={value.name}
                                onChange={e => setValue({ ...value, name: e.target.value })}
                            />
                        </InputWrapper>
                        <InputWrapper
                            title="Фамилия"
                            classes={{ title: 'text-layoutLightGray', wrapper: 'w-full' }}
                        >
                            <Input
                                placeholder="Городецкий"
                                value={value.surname}
                                onChange={e => setValue({ ...value, surname: e.target.value })}
                            />
                        </InputWrapper>
                    </div>
                    <InputWrapper title="Город" classes={{ wrapper: 'lg:max-w-75' }}>
                        <Input
                            placeholder="Санкт-Петербург"
                            value={value.surname}
                            onChange={e => setValue({ ...value, surname: e.target.value })}
                        />
                    </InputWrapper>
                    <InputWrapper title="Телефон" classes={{ wrapper: 'mb-3' }}>
                        <Input
                            type="number"
                            placeholder="89161234567"
                            value={value.surname}
                            onChange={e => setValue({ ...value, surname: e.target.value })}
                        />
                    </InputWrapper>
                    <Button className="py-2.75">Сохранить</Button>
                </div>
            </div>
        </section>
    )
}
