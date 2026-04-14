"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const MyLink = ({ children, href, className }) => {
    const currentPath = usePathname();
    return (
        <Link href={href} className={`${className} ${currentPath === href ? "bg-[#244D3F] text-white": ""} transition-all duration-200`}>
            {children}
        </Link>
    );
};

export default MyLink;