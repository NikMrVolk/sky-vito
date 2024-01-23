'use client'

import { useQuery } from '@tanstack/react-query'

import Button from '../UI/buttons/Button'
import InputWithTitle from '../UI/inputs/InputWithTitle'

import ProfileAvatar from './ProfileAvatar'

import { userService } from '@/services/user/user.service'
import { QueryKeys } from '@/utils/constants/reactQuery'

export default function ProfileInfo() {
    const { data } = useQuery({
        queryKey: [QueryKeys.GET_CURRENT_USER],
        queryFn: () => userService.getCurrent(),
    })

    console.log('user: ', data)

    return (
        <section className="mb-10 mt-7.5 flex flex-col gap-7.5">
            <div className="text-lg sm:text-3.5xl">Настройки профиля</div>
            <div className="flex flex-col gap-7.5 sm:flex-row md:gap-12.5">
                <ProfileAvatar />
                <div className="flex max-w-153.5 flex-col gap-4.5 sm:w-full">
                    <div className="flex flex-col gap-4.5 lg:flex-row">
                        <InputWithTitle
                            title="Имя"
                            placeholder="Антон"
                            classes={{ wrapper: 'w-full' }}
                        />
                        <InputWithTitle
                            title="Фамилия"
                            placeholder="Городецкий"
                            classes={{ wrapper: 'w-full' }}
                        />
                    </div>
                    <InputWithTitle
                        title="Город"
                        placeholder="Санкт-Петербург"
                        classes={{ wrapper: 'lg:max-w-75' }}
                    />
                    <InputWithTitle
                        title="Телефон"
                        placeholder="89161234567"
                        type="number"
                        classes={{ wrapper: 'mb-3' }}
                    />
                    <Button className="py-2.75">Сохранить</Button>
                </div>
            </div>
        </section>
    )
}
