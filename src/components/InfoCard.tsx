import Image from "next/image";
import InteractiveCard from "./InteractiveCard";
import { Rating } from "@mui/material";

interface InfoCardProps {
    name: string;
    image: string;
    value?: number;
    onCompare?: Function;
    onRemove?: Function;
}

const InfoCard = ({ name, image, value, onCompare, onRemove }: InfoCardProps) => {
    return (
        <InteractiveCard>
            <div className="w-full h-[60%] relative rounded-t-lg">
                <Image src={image} alt={name} fill className="object-cover rounded-t-lg" />
            </div>
            <div className="w-full p-4">
                <h1 className="mb-4">{name}</h1>
                {
                    onCompare && onRemove ? (
                        <Rating
                            value={value}
                            onChange={(e, newValue) => {
                                if (newValue === null) {
                                    onRemove(name)
                                } else {
                                    onCompare(
                                        name,
                                        newValue
                                    )
                                }
                            }}
                            onClick={(e) => e.stopPropagation()}
                        />
                    ) : <></>
                }
            </div>
        </InteractiveCard>
    )
}
export default InfoCard;