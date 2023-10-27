import InfoCard from "./InfoCard";
import Link from "next/link";

export type hospital = {
    address: string;
    district: string;
    id: string;
    name: string;
    picture: string;
    postalcode: string;
    province: string;
    tel: string;
}

interface IHospitalCatalog {
    hospitalLoading: Promise<any>;
}

const HospitalCatalog = async (hospitalLoading: IHospitalCatalog) => {
    const hospitals: hospital[] = await hospitalLoading.hospitalLoading
    return (
        <>
            <div className="my-20 mx-auto flex flex-wrap justify-center gap-20 w-screen" >
                {
                    hospitals.map((item, index) => {
                        return (
                            <Link
                                href={`/hospital/${item.id}`}
                                className="w-[100%] sm:w-[50%] md:w-[30%] lg:w-[25%] p-2 sm:p-4 md:p-4 lg:p-8"
                                key={index}
                            >
                                <InfoCard
                                    key={index}
                                    name={item.name}
                                    image={item.picture}
                                />
                            </Link>
                        )
                    })
                }
            </div>
        </>
    )
}
export default HospitalCatalog