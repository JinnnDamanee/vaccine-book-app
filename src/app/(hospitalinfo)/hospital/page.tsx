import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AddHospitalForm from "@/components/AddHospitalForm";
import HospitalCatalog from "@/components/HospitalCatalog";
import getHospitals from "@/libs/getHospitals";
import getUserProfile from "@/libs/getUserProfile";
import { LinearProgress } from "@mui/material";
import { getServerSession } from "next-auth";
import { Suspense } from "react";

const HospitalPage = async () => {
    const session = await getServerSession(authOptions)
    if (!session || !session.user.token) return null;

    const hospitals = getHospitals();
    const profile = await getUserProfile(session.user.token);

    return (
        <Suspense fallback={
            <div className="mt-[400px] flex flex-col justify-center mx-20">
                <h1 className="text-xl text-center mb-4">Loading...</h1>
                <LinearProgress />
            </div>
        }>
            <HospitalCatalog hospitalLoading={hospitals} />
            {
                profile.role == 'admin' ? <AddHospitalForm /> : null
            }
        </Suspense>
    )
}
export default HospitalPage;    