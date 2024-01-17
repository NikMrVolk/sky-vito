import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="flex items-center justify-center gap-14 py-1.5 shadow-mobileFooter sm:hidden">
            <Image src="/images/mobileFooter/home.png" alt="home" width={28} height={23} />
            <Image src="/images/mobileFooter/add.png" alt="add" width={42} height={42} />
            <Image src="/images/mobileFooter/profile.png" alt="profile" width={27} height={27} />
        </footer>
    )
}
