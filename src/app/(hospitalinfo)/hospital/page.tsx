import HospitalCatalog from "@/components/HospitalCatalog";
import getHospitals from "@/libs/getHospitals";
import { LinearProgress } from "@mui/material";
import { Suspense } from "react";

const HospitalPage = () => {
    const hospitals = getHospitals();
    return (
        <Suspense fallback={
            <div className="mt-[400px] flex flex-col justify-center mx-20">
                <h1 className="text-xl text-center mb-4">Loading...</h1>
                <LinearProgress />
            </div>
        }>
            <HospitalCatalog hospitalLoading={hospitals} />
        </Suspense>
    )
}
export default HospitalPage;    