'use client'

import { useState } from 'react'

import BackLinkWithCross from '../common/BackTextWithCross'
import Button from '../UI/buttons/Button'
import Input from '../UI/inputs/Input'
import InputWrapper from '../UI/inputs/InputWrapper'
import { useMutation } from '@tanstack/react-query'
import { QueryKeys } from '@/utils/constants/reactQuery'
import { userService } from '@/services/user/user.service'

interface ChangePasswordProps {
    modalTitle: string
    setActive: (v: boolean) => void
}

interface ChangePasswordValue {
    password_1: string
    password_2: string
    confirmPassword_2: string
}

export default function ChangePassword({ modalTitle, setActive }: ChangePasswordProps) {
    const [value, setValue] = useState<ChangePasswordValue>({
        password_1: '',
        password_2: '',
        confirmPassword_2: '',
    })

    const isButtonDisabled =
        !value.password_1 || !value.password_2 || value.password_2 !== value.confirmPassword_2

    const { mutate } = useMutation({
        mutationKey: [QueryKeys.CHANGE_PASSWORD],
        mutationFn: userService.changPassword,
        onSuccess: () => {
            setValue({ password_1: '', password_2: '', confirmPassword_2: '' })
            setActive(false)
        },
    })

    const handleChangePassword = () => {
        if (!value.password_1 || !value.password_2) {
            return
        }
        if (value.password_2 !== value.confirmPassword_2) {
            return
        }
        mutate({ password_1: value.password_1, password_2: value.password_2 })
    }

    return (
        <form className="flex flex-col gap-7.5">
            <BackLinkWithCross
                text={modalTitle}
                onClick={() => setActive(false)}
                classes={{ wrapper: 'sm:flex sm:gap-10', arrow: 'sm:hidden' }}
            />
            <InputWrapper title="Старый пароль">
                <Input
                    type="password"
                    value={value.password_1}
                    onChange={e => setValue({ ...value, password_1: e.target.value })}
                />
            </InputWrapper>
            <InputWrapper title="Новый пароль">
                <Input
                    type="password"
                    value={value.password_2}
                    onChange={e => setValue({ ...value, password_2: e.target.value })}
                />
            </InputWrapper>
            <InputWrapper title="Повторите новый пароль">
                <Input
                    type="password"
                    value={value.confirmPassword_2}
                    onChange={e => setValue({ ...value, confirmPassword_2: e.target.value })}
                />
            </InputWrapper>
            <Button onClick={handleChangePassword} disabled={isButtonDisabled}>
                Поменять пароль
            </Button>
        </form>
    )
}
