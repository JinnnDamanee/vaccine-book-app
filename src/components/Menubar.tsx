import Image from "next/image";
import MenuItem from "./MenuItem";
import Link from "next/link";

const Menubar = () => {
    return (
        <div className="h-16 w-screen bg-indigo-600 fixed top-0 right-0 z-30 border-t-2 border-b-2 border-indigo-900 flex flex-row-reverse">
            <Link href='/'>
                <Image src='/img/logo.png' className="h-full w-auto" alt='logo' width={0} height={0} sizes="100vh" />
            </Link>
            <MenuItem title="Booking" href="/booking" />
        </div>
    )
}
export default Menubar;