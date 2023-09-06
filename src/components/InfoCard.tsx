import Image from "next/image";
import InteractiveCard from "./InteractiveCard";

interface InfoCardProps {
    name: string;
    image: string;
}

const InfoCard = ({ name, image }: InfoCardProps) => {
    return (
        <InteractiveCard>
            <div className="w-full h-[70%] relative rounded-t-lg">
                <Image src={image} alt={name} fill className="object-cover rounded-t-lg" />
            </div>
            <div className="w-full h-[30%] p-4">
                {name}
            </div>
        </InteractiveCard>
    )
}

export default InfoCard;