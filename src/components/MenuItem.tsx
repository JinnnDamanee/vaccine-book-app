import Link from "next/link";

interface MenuItemProps {
    title: string;
    href: string;
}

const MenuItem = ({ title, href }: MenuItemProps) => {
    return (
        <Link className="w-[120px] text-center mt-auto mb-auto text-lg text-slate-600" href={href}>
            {title}
        </Link>
    )
}
export default MenuItem;