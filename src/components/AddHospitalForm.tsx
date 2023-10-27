import { dbConnect } from "@/db/dbConnect"
import Hospital from "@/db/models/Hospital"
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

interface IinputSection {
    name: string
}

const InputSection = ({ name }: IinputSection) => {
    return (
        <div className="flex items-center my-4">
            <label className="w-auto block text-gray-700 pr-4" htmlFor={name}>{name}</label>
            <input type="text" required id={name} name={name} placeholder={`Hospital ${name}`}
                className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-indigo-400" />
        </div >
    )
}

const AddHospitalForm = () => {

    const addHospital = async (addHospitalForm: FormData) => {
        'use server'
        const name = addHospitalForm.get('name')
        const address = addHospitalForm.get('address')
        const district = addHospitalForm.get('district')
        const province = addHospitalForm.get('province')
        const postalcode = addHospitalForm.get('postalcode')
        const tel = addHospitalForm.get('tel')
        const picture = addHospitalForm.get('picture')

        try {
            await dbConnect()
            const hospital = await Hospital.create({
                "name": name,
                "address": address,
                "district": district,
                "province": province,
                "postalcode": postalcode,
                "tel": tel,
                "picture": picture
            })
        } catch (err) {
            console.log(err)
        }

        revalidateTag('hospitals')
        redirect('/hospital')
    }


    return <div className="flex justify-center mb-10 items-center">
        <form className="p-6 shadow-lg rounded" action={addHospital}>
            <div className="text-xl text-indigo-700">Add Hospital</div>
            <InputSection name="name" />
            <InputSection name="address" />
            <InputSection name="district" />
            <InputSection name="province" />
            <InputSection name="postalcode" />
            <InputSection name="tel" />
            <InputSection name="picture" />
            <button
                type="submit"
                className="mt-2 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                Add Hospital
            </button>
        </form>
    </div>
}
export default AddHospitalForm;