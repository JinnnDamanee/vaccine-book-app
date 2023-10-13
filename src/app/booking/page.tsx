import getUserProfile from "@/libs/getUserProfile"
import Form from "./Form"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"

const Booking = async () => {
    const session = await getServerSession(authOptions)
    if (!session || !session.user.token) return null;

    const userProfile = await getUserProfile(session?.user.token);

    return (
        <main className="h-[800px] flex items-center flex-col gap-4">
            <div className="bg-white mx-auto shadow-2xl p-5 w-fit">
                <h1 className="text-2xl font-semibold leading- text-indigo-600 mb-2">User Profile</h1>
                <table className="table-auto border-separate border-spacing-2">
                    <tbody>
                        <tr>
                            <td className="font-bold">Email</td>
                            <td>{userProfile.email}</td>
                        </tr>
                        <tr>
                            <td className="font-bold">Name</td>
                            <td>{userProfile.name}</td>
                        </tr>
                        <tr>
                            <td className="font-bold">Tel.</td>
                            <td>{userProfile.tel}</td>
                        </tr>
                        <tr>
                            <td className="font-bold">Member Since</td>
                            <td>{userProfile.createdAt}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className=" bg-white mx-auto shadow-2xl p-10 w-fit">
                <Form />
            </div>
        </main>
    )
}
export default Booking;