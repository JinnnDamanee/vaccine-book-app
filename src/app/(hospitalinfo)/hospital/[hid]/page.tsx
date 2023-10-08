import { hospital as hospitalType } from "@/components/HospitalCatalog"
import getHospital from "@/libs/getHospital"
import Image from "next/image"

interface HospitalParams {
    params: {
        hid: string
    }
}

const HospitalDetails = async ({ params: { hid } }: HospitalParams) => {
    const hospital: hospitalType = await getHospital(hid);
    return (
        <main className="text-center p-5">
            <div className="flex flex-row my-5">
                <Image
                    src={hospital.picture}
                    alt={hospital.name}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="rounded-lg w-[30%]"
                />
                <div className="ml-10">
                    <h1 className="text-3xl font-bold">{hospital.name}</h1>
                    <div className="text-left mt-4">
                        <h1>Address : {hospital.address}</h1>
                        <h1>District : {hospital.district}</h1>
                        <h1>Province : {hospital.province}</h1>
                        <h1>Postal code : {hospital.postalcode}</h1>
                        <h1>Telephone : {hospital.tel}</h1>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default HospitalDetails;