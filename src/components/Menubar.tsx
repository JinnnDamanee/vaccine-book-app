import Image from "next/image";
import MenuItem from "./MenuItem";
import Link from "next/link";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

interface AuthLinkProps {
    text: string
    path: string
}

const AuthLink = ({ text, path }: AuthLinkProps) => {
    return <Link href={path}>
        <div className="item-center h-full p-4 text-indigo-600 bg-slate-100"
        >{text}</div>
    </Link>
}

const Menubar = async () => {
    const session = await getServerSession(authOptions)

    return (
        <div className="h-16 w-screen bg-indigo-600 fixed top-0 right-0 z-30 border-t-2 border-b-2 border-indigo-900 flex justify-between">
            <div className="flex">
                {
                    session ? <AuthLink text={`Log-Out`} path="/api/auth/signout" /> : <AuthLink text="Log-In" path="/api/auth/signin" />
                }
                <MenuItem title="My Booking" href="/mybooking" />
            </div>
            <div className="flex">
                <MenuItem title="Booking" href="/booking" />
                <Link href='/'>
                    <Image src='/img/logo.png' className="h-full w-auto" alt='logo' width={0} height={0} sizes="100vh" />
                </Link>
            </div>
        </div>
    )
}
export default Menubar;