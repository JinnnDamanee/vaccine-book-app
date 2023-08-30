import Image from "next/image";

interface InfoCardProps {
    name: string;
    image: string;
}

const InfoCard = ({ name, image }: InfoCardProps) => {
    return (
        <div className="w-1/3 h-[300px] rounded-lg shadow-2xl">
            <div className="w-full h-[70%] relative rounded-t-lg">
                <Image src={image} alt={name} fill className="object-cover rounded-t-lg" />
            </div>
            <div className="w-full h-[30%] p-4">
                {name}
            </div>
        </div>

    )
}

export default InfoCard;