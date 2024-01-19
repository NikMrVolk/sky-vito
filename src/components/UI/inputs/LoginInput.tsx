'use client'

import { useState } from 'react'

import { FieldErrors, Path, RegisterOptions, UseFormRegister } from 'react-hook-form'

import { IAuthFormData } from '@/components/auth/AuthForm'
import EyeOnPasswordInput from '@/components/auth/EyeOnPasswordInput'
import { cn } from '@/lib/className'

interface LoginInputProps {
    type?: string
    placeholder: string
    classes?: { input?: string; error?: string }
    registerName: Path<IAuthFormData>
    register: UseFormRegister<IAuthFormData>
    registerOptions?: RegisterOptions<IAuthFormData>
    errors: FieldErrors<IAuthFormData>
}

export default function LoginInput({
    type = 'text',
    placeholder,
    classes = { input: '', error: '' },
    registerName,
    register,
    registerOptions = { required: false },
    errors,
}: LoginInputProps) {
    const [isShowPassword, setIsShowPassword] = useState<boolean>(false)

    return (
        <>
            <div className="relative">
                <input
                    type={isShowPassword ? 'text' : type}
                    placeholder={placeholder}
                    {...register(registerName, registerOptions)}
                    className={cn(
                        `w-full rounded-mobileInput border border-loginInput px-4 py-2.5 text-sm placeholder:text-loginInput focus:border-layoutBlue 
                    focus:outline-none xs:rounded-none xs:border-0 xs:border-b xs:px-0.5 xs:py-2 xs:text-lg 
                    ${errors[registerName] ? 'border-red-500 focus:border-red-500' : ''}`,
                        classes.input,
                    )}
                />
                <EyeOnPasswordInput
                    condition={type === 'password'}
                    isShowPassword={isShowPassword}
                    setIsShowPassword={setIsShowPassword}
                />
            </div>
            {errors[registerName] && (
                <p className={cn('-mt-2 pl-4 text-xs text-red-500 xs:pl-0.5', classes.error)}>
                    {errors[registerName]?.message}
                </p>
            )}
        </>
    )
}
