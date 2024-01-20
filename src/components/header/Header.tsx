import Image from 'next/image'

import BlockWrapper from '../common/wrappers/BlockWrapper'
import SearchInput from '../UI/inputs/SearchInput'
import Modal from '../UI/modals/Modal'

import HeaderButtons from './HeaderButtons'

export default function Header() {
    async function onClose() {
        'use server'
        console.log('Modal has closed')
    }

    return (
        <BlockWrapper className="bg-layoutBlue sm:mb-0">
            <header className="flex h-14 items-center justify-between sm:h-20 sm:justify-end">
                <div className="flex w-full items-center gap-2.5 sm:hidden">
                    <Image
                        width={32}
                        height={32}
                        src="/images/logo/logoInWhiteCircle.png"
                        alt="logo"
                        className="h-8 w-8"
                    />
                    <SearchInput placeholder="Поиск" className="w-full rounded-mobileInput" />
                </div>
                <HeaderButtons />
            </header>
            <Modal onClose={onClose}>
                <p className="max-w-[400px]">123</p>
            </Modal>
        </BlockWrapper>
    )
}
