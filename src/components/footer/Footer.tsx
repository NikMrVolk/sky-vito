import Image from 'next/image'
import Link from 'next/link'

import { MAIN_ROUTE, PROFILE_ROUTE } from '@/utils/constants/routes'

export default function Footer() {
    return (
        <footer className="flex items-center justify-center gap-14 py-1.5 shadow-mobileFooter sm:hidden">
            <Link href={MAIN_ROUTE}>
                <Image src="/images/mobileFooter/home.png" alt="home" width={28} height={23} />
            </Link>
            <Image src="/images/mobileFooter/add.png" alt="add" width={42} height={42} />
            <Link href={PROFILE_ROUTE}>
                <Image
                    src="/images/mobileFooter/profile.png"
                    alt="profile"
                    width={27}
                    height={27}
                />
            </Link>
        </footer>
    )
}
