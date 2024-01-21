import { cn } from '@/lib/className'

interface ModalProps {
    active: boolean
    setActive: (v: boolean) => void
    children?: React.ReactNode
    classes?: { wrapper?: string; content?: string }
}

export default function Modal({
    children,
    active,
    setActive,
    classes = { wrapper: '', content: '' },
}: ModalProps) {
    return (
        <div
            className={cn(
                `pointer-events-none fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black/40 opacity-0 duration-500
                ${active ? 'pointer-events-auto opacity-100' : ''}`,
                classes.wrapper,
            )}
            onClick={() => {
                setActive(false)
            }}
        >
            <div
                className={cn(
                    `scale-50 rounded-xl bg-white px-10 duration-500 ${active ? 'scale-100' : ''}`,
                )}
                onClick={e => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    )
}
