import Image from 'next/image'
import Link from 'next/link'

import BlockWrapper from '../common/wrappers/BlockWrapper'
import Button from '../UI/Button'
import SearchInput from '../UI/inputs/SearchInput'

import { PROFILE_ROUTE } from '@/utils/constants/routes'

export default function Header() {
    return (
        <BlockWrapper className="bg-layoutBlue">
            <header className="flex h-14 items-center justify-between sm:h-20 sm:justify-end">
                <div className="flex w-full items-center gap-2.5 sm:hidden">
                    <Image
                        width={32}
                        height={32}
                        src="/images/logo/logoInWhiteCircle.png"
                        alt="logo"
                        className="h-8 w-8"
                    />
                    <SearchInput placeholder="Поиск" className="w-full rounded-mobileSearchInput" />
                </div>
                <div className="hidden gap-2.5 sm:flex">
                    <Button className="border">Разместить объявление</Button>
                    <Link href={PROFILE_ROUTE}>
                        <Button className="border">Личный кобинет</Button>
                    </Link>
                </div>
            </header>
        </BlockWrapper>
    )
}
