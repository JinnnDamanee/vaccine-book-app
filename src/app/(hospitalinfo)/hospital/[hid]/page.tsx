import Image from "next/image"

interface HospitalParams {
    params: {
        hid: string
    }
}

type MockRepo = Map<string, {
    name: string,
    image: string
}>

// mock repo for easy replacing API later
const mockHospitalRepo: MockRepo = new Map()
mockHospitalRepo.set('1', {
    name: 'Chulalongkorn University',
    image: '/img/chula.jpg'
})
mockHospitalRepo.set('2', {
    name: 'Rajvithi Hospital',
    image: '/img/rajavithi.jpg'
})
mockHospitalRepo.set('3', {
    name: 'Thammasat University',
    image: '/img/thammasat.jpg'
})

const HospitalDetails = ({ params: { hid } }: HospitalParams) => {
    return (
        <main className="text-center p-5">
            <div className="flex flex-row my-5">
                <Image
                    src={mockHospitalRepo.get(hid)!.image || ''}
                    alt={mockHospitalRepo.get(hid)!.name || ''}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="rounded-lg w-[30%]"
                />
                <div className="text-md mx-5">
                    {
                        mockHospitalRepo.get(hid)!.name
                    }
                </div>
            </div>
        </main>
    )
}
export default HospitalDetails;