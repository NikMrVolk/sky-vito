import { useEffect, useState } from 'react'

import Button from '../UI/buttons/Button'
import Input from '../UI/inputs/Input'
import InputWrapper from '../UI/inputs/InputWrapper'

import { useChangeUserData } from '@/hooks/user/useChangeUserData'
import { ChangeUserDataRequest } from '@/services/user/user.types'

interface IProfileForm {
    name: string
    surname: string
    city: string
    phone: string
}

export default function ProfileForm() {
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
        <form
            className="flex max-w-153.5 flex-col gap-4.5 sm:w-full"
            onSubmit={e => e.preventDefault()}
        >
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
            <Button className="py-2.75 sm:max-w-40" onClick={handleSaveForm}>
                Сохранить
            </Button>
        </form>
    )
}
