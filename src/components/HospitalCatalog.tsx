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
            <div className="my-20 mx-auto flex justify-center gap-20 w-screen" >
                {
                    hospitals.map((item, index) => {
                        return (
                            <Link
                                href={`/hospital/${item.id}`}
                                className="w-1/4"
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