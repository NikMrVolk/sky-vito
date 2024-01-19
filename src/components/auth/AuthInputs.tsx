import { FieldErrors, RegisterOptions, UseFormRegister, UseFormWatch } from 'react-hook-form'

import LoginInput from '../UI/inputs/LoginInput'

import { IAuthFormData } from './AuthForm'

interface AuthInputsProps {
    register: UseFormRegister<IAuthFormData>
    registerOptions?: RegisterOptions<IAuthFormData>
    errors: FieldErrors<IAuthFormData>
    isLogin: boolean
    watch: UseFormWatch<IAuthFormData>
}

export default function AuthInputs({ register, errors, isLogin, watch }: AuthInputsProps) {
    return (
        <div className="flex w-full flex-col gap-3.5">
            <LoginInput
                placeholder="Email"
                register={register}
                registerName="email"
                registerOptions={{
                    required: 'Обязательное поле',
                    pattern: {
                        value: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
                        message: 'Проверьте свою почту',
                    },
                }}
                errors={errors}
            />
            <LoginInput
                placeholder="Пароль"
                type="password"
                register={register}
                registerName="password"
                errors={errors}
                registerOptions={{
                    required: 'Обязательное поле',
                    pattern: {
                        value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/,
                        message:
                            'Пароль должен содержать по одной прописной и строчной букве и цифру',
                    },
                    minLength: { value: 8, message: 'Пароль должен быть не меньше 8 символов' },
                }}
            />
            {!isLogin && (
                <>
                    <LoginInput
                        placeholder="Повторите пароль"
                        type="password"
                        register={register}
                        registerName="confirmedPassword"
                        errors={errors}
                        registerOptions={{
                            required: 'Обязательное поле',
                            validate: val => watch('password') === val || 'Пароли должны совпадать',
                        }}
                    />
                    <LoginInput
                        placeholder="Имя (необязательно)"
                        register={register}
                        registerName="firstName"
                        errors={errors}
                    />
                    <LoginInput
                        placeholder="Фамилия (необязательно)"
                        register={register}
                        registerName="lastName"
                        errors={errors}
                    />
                    <LoginInput
                        placeholder="Город (необязательно)"
                        register={register}
                        registerName="city"
                        errors={errors}
                    />
                </>
            )}
        </div>
    )
}
