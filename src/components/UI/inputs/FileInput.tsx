'use client'

import { ChangeEvent } from 'react'

import { MinusCircle } from 'lucide-react'
import Image from 'next/image'

interface FileInputProps {
    classes?: { wrapper?: string; title?: string; description?: string; label?: string }
    files: File[] | null
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    deleteFiles: (id: number) => void
}

const ss = ['1', '1', '1', '1', '1']

export default function FileInput({ files, onChange, deleteFiles }: FileInputProps) {
    return (
        <>
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
                                onClick={() => deleteFiles(id)}
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
        </>
    )
}
