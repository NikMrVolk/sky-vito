'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import Button from '../UI/Button'
import SearchInput from '../UI/inputs/SearchInput'

import BlockWrapper from './wrappers/BlockWrapper'

import { MAIN_ROUTE } from '@/utils/constants/routes'

export default function SearchBar() {
    const pathname = usePathname()

    return (
        <BlockWrapper className="my-11 hidden grid-cols-mainPageSearch items-center gap-15 sm:grid">
            <Image
                src="/images/logo/logo.png"
                width={54}
                height={40}
                alt="logo"
                className="max-h-9.25"
            />
            {pathname === MAIN_ROUTE ? (
                <div className="flex w-full gap-2.5">
                    <SearchInput
                        placeholder="Поиск по объявлениям"
                        className="w-full rounded-md border p-3"
                    />
                    <Button>Найти</Button>
                </div>
            ) : (
                <Link href={MAIN_ROUTE}>
                    <Button className="py-3.25">Вернуться на главную</Button>
                </Link>
            )}
        </BlockWrapper>
    )
}
