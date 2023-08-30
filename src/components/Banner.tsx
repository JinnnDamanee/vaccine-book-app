import Image from "next/image"

const Banner = () => {
    return (
        <div className='block p-5 m-0 w-screen h-[50vh] relative'>
            <Image
                src="/img/cover.jpeg"
                alt="cover"
                objectFit="cover"
                priority
                fill
            />
            <div className='text-slate-800 relative top-[60px] z-20 text-right mr-10'>
                <h1 className="text-6xl font-bold"> Getting <span style={{ color: '#16a34a' }}>Sick</span>  is not <span style={{ color: '#16a34a' }}>COOL ! </span> </h1>
                <h3 className="text-3xl font-semibold mt-4"> Book your vaccine now </h3>
            </div>
        </div>
    )
}
export default Banner