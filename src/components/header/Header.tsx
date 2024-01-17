import Image from 'next/image'

import BlockWrapper from '../common/wrappers/BlockWrapper'
import Button from '../UI/Button'

export default function Header() {
    return (
        <BlockWrapper className="bg-layoutBlue">
            <header className="flex h-14 items-center justify-between sm:h-20 sm:justify-end">
                <Image
                    width={32}
                    height={32}
                    src="/images/logo/logoInWhiteCircle.png"
                    alt="logo"
                    className="sm:hidden"
                />
                <div className="hidden gap-2.5 sm:flex">
                    <Button className="border">Разместить объявление</Button>
                    <Button className="border">Личный кобинет</Button>
                </div>
            </header>
        </BlockWrapper>
    )
}
