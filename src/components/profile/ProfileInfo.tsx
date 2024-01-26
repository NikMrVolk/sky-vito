'use client'

import { useEffect, useState } from 'react'

import Button from '../UI/buttons/Button'
import Input from '../UI/inputs/Input'
import InputWrapper from '../UI/inputs/InputWrapper'

import ProfileAvatar from './ProfileAvatar'

import { useChangeUserData } from '@/hooks/user/useChangeUserData'
import { ChangeUserDataRequest } from '@/services/user/user.types'

interface IProfileForm {
    name: string
    surname: string
    city: string
    phone: string
}

export default function ProfileInfo() {
    const { userData, changeUserData } = useChangeUserData()
    const [value, setValue] = useState<IProfileForm>({
        name: '',
        surname: '',
        city: '',
        phone: '',
    })
    const [changeIndicators, setChangeIndicators] = useState<IProfileForm>(
        JSON.parse(JSON.stringify(value)),
    )

    const getTitleColor = (key: 'name' | 'surname' | 'city' | 'phone'): string =>
        changeIndicators[key] !== value[key] ? 'text-layoutBlue' : 'text-layoutLightGray'

    const handleSaveForm = () => {
        if (userData) {
            const dataToSend: ChangeUserDataRequest = {
                ...value,
                role: userData.role,
                email: userData.email,
            }
            changeUserData(dataToSend)
        }
    }

    useEffect(() => {
        if (userData) {
            const startData = {
                name: userData.name,
                surname: userData.surname,
                city: userData.city,
                phone: userData.phone === null ? '' : userData.phone,
            }
            setChangeIndicators(JSON.parse(JSON.stringify(startData)))
            setValue(startData)
        }
    }, [userData])

    if (!userData) return <></>

    return (
        <section className="mb-10 mt-7.5 flex flex-col gap-7.5">
            <div className="text-lg sm:text-3.5xl">Настройки профиля</div>
            <div className="flex flex-col gap-7.5 sm:flex-row md:gap-12.5">
                <ProfileAvatar />
                <div className="flex max-w-153.5 flex-col gap-4.5 sm:w-full">
                    <div className="flex flex-col gap-4.5 lg:flex-row">
                        <InputWrapper
                            title="Имя"
                            classes={{
                                title: `${getTitleColor('name')}`,
                                wrapper: 'w-full',
                            }}
                        >
                            <Input
                                placeholder="Антон"
                                value={value.name}
                                onChange={e => setValue({ ...value, name: e.target.value })}
                            />
                        </InputWrapper>
                        <InputWrapper
                            title="Фамилия"
                            classes={{ title: `${getTitleColor('surname')}`, wrapper: 'w-full' }}
                        >
                            <Input
                                placeholder="Городецкий"
                                value={value.surname}
                                onChange={e => setValue({ ...value, surname: e.target.value })}
                            />
                        </InputWrapper>
                    </div>
                    <InputWrapper
                        title="Город"
                        classes={{ title: `${getTitleColor('city')}`, wrapper: 'lg:max-w-75' }}
                    >
                        <Input
                            placeholder="Санкт-Петербург"
                            value={value.city}
                            onChange={e => setValue({ ...value, city: e.target.value })}
                        />
                    </InputWrapper>
                    <InputWrapper
                        title="Телефон"
                        classes={{ title: `${getTitleColor('phone')}`, wrapper: 'mb-3' }}
                    >
                        <Input
                            type="number"
                            placeholder="89161234567"
                            value={value.phone}
                            onChange={e => setValue({ ...value, phone: e.target.value })}
                        />
                    </InputWrapper>
                    <Button className="max-w-40 py-2.75" onClick={handleSaveForm}>
                        Сохранить
                    </Button>
                </div>
            </div>
        </section>
    )
}
