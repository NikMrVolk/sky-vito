import Image from 'next/image'

import BlockWrapper from '../common/wrappers/BlockWrapper'

export default function Header() {
    return (
        <header className="flex h-14 items-center bg-layoutBlue sm:h-20">
            <BlockWrapper>
                <Image
                    width={32}
                    height={32}
                    src="/images/logo/logoInWhiteCircle.png"
                    alt="logo"
                    className="sm:hidden"
                />
            </BlockWrapper>
        </header>
    )
}
