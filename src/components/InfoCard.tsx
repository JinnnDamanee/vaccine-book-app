import Image from "next/image";
import InteractiveCard from "./InteractiveCard";
import { Rating } from "@mui/material";

interface InfoCardProps {
    name: string;
    image: string;
    value: number;
    onCompare: Function;
}

const InfoCard = ({ name, image, value, onCompare }: InfoCardProps) => {
    return (
        <InteractiveCard>
            <div className="w-full h-[60%] relative rounded-t-lg">
                <Image src={image} alt={name} fill className="object-cover rounded-t-lg" />
            </div>
            <div className="w-full p-4">
                <h1 className="mb-4">{name}</h1>
                <Rating
                    value={value}
                    onChange={(e, newValue) => {
                        e.stopPropagation()
                        onCompare(
                            name,
                            newValue
                        )
                    }}
                />
            </div>

        </InteractiveCard>
    )
}
export default InfoCard;