'use client'

import { useRef, useEffect } from 'react'

import { useRouter, useSearchParams } from 'next/navigation'

interface ModalProps {
    onClose: () => void
    children: React.ReactNode
}

export default function Modal({ children, onClose }: ModalProps) {
    const router = useRouter()
    const searchParams = useSearchParams()
    const dialogRef = useRef<null | HTMLDialogElement>(null)
    const showDialog = searchParams.get('showModal')

    useEffect(() => {
        if (showDialog === 'y') {
            dialogRef.current?.showModal()
        } else {
            dialogRef.current?.close()
        }
    }, [showDialog])

    const closeDialog = () => {
        dialogRef.current?.close()
        onClose()
        router.back()
    }

    const dialog: JSX.Element | null =
        showDialog === 'y' ? (
            <dialog
                ref={dialogRef}
                className="top-50 left-50 -translate-x-50 -translate-y-50 fixed z-10 rounded-xl backdrop:bg-gray-800/50"
            >
                <div className="flex max-w-[800px] flex-col bg-gray-200">
                    <div onClick={closeDialog}>Head</div>
                    <div className="px-5 pb-6">{children}</div>
                </div>
            </dialog>
        ) : null

    return dialog
}
