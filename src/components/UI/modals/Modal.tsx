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
                `pointer-events-none fixed left-0 top-0 flex h-full min-h-screen w-full items-center justify-center opacity-0 
                duration-500 sm:bg-black/40 ${active ? 'pointer-events-auto opacity-100' : ''}`,
                classes.wrapper,
            )}
            onClick={() => setActive(false)}
        >
            <div
                className={cn(
                    `z-1 h-screen w-full scale-50 gap-5 bg-white px-8 py-8 duration-500 sm:mt-2 
                    sm:h-auto sm:w-auto sm:min-w-120 sm:rounded-xl ${active ? 'scale-100' : ''}`,
                )}
                onClick={e => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    )
}
