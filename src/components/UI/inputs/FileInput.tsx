'use client'

import { ChangeEvent } from 'react'

import { MinusCircle } from 'lucide-react'
import Image from 'next/image'

import { cn } from '@/lib/className'

interface FileInputProps {
    title: string
    description: string
    classes?: { wrapper?: string; title?: string; description?: string; label?: string }
    files: File[] | null
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const ss = ['1', '1', '1', '1', '1']

export default function FileInput({
    title,
    description,
    classes = { wrapper: '', title: '', description: '', label: '' },
    files,
    onChange,
}: FileInputProps) {
    return (
        <div className={cn('flex flex-col', classes.wrapper)}>
            <div className={cn('ml-4.25 flex gap-2 text-sm sm:text-base', classes.title)}>
                {title}
                <span className={cn('text-layoutLightGray', classes.description)}>
                    {description}
                </span>
            </div>
            <div className="flex gap-2.5 overflow-x-scroll pb-2 pt-2 sm:overflow-x-hidden">
                {ss.map((el, id) =>
                    files && files[id] ? (
                        <div
                            key={el + id}
                            className="relative flex h-22.5 w-22.5 items-center justify-center bg-gray-400"
                        >
                            <Image
                                src={URL.createObjectURL(files[id])}
                                alt="photo"
                                width={90}
                                height={90}
                                className="h-auto max-h-22.5 w-auto max-w-22.5"
                            />
                            <MinusCircle
                                className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-black text-white"
                                // onClick={() => handleDeletePhoto(id)}
                            />
                        </div>
                    ) : (
                        <label
                            key={el + id}
                            className="relative flex h-22.5 w-22.5 items-center justify-center bg-gray-400"
                        >
                            <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                multiple
                                onChange={e => onChange(e)}
                            />
                            <div className="px-11">+</div>
                        </label>
                    ),
                )}
            </div>
        </div>
    )
}
