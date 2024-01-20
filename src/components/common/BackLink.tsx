import Image from 'next/image'
import Link from 'next/link'

interface BackLinkProps {
    href: string
    text: string
}

export default function BackLink({ href, text }: BackLinkProps) {
    return (
        <Link href={href} className="flex items-center gap-7.5 sm:hidden">
            <Image
                src="/images/icons/blackWector.png"
                alt="back"
                width={10}
                height={18}
                className="h-4.5 w-2.5"
            />
            <span className="text-2xl font-medium">{text}</span>
        </Link>
    )
}
