'use client'

import { useReducer } from "react";
import InfoCard from "./InfoCard";

type hospital = {
    id: number;
    name: string;
    image: string;
}

const data: hospital[] = [
    {
        id: 1,
        name: "Chulalongkorn University",
        image: "/img/chula.jpg"
    },
    {
        id: 2,
        name: "Rajvithi Hospital",
        image: "/img/rajavithi.jpg"
    },
    {
        id: 3,
        name: "Thammasat University",
        image: "/img/thammasat.jpg"
    }
]

type RatingMap = Map<string, number>

type ReducerAction = {
    type: ratingActionType;
    payload: {
        hospitalName: string;
        rating: number;
    }
}

enum ratingActionType {
    "SET_RATING",
    "REMOVE_RATING"
}

const ratingReducer = (currMap: RatingMap, action: ReducerAction) => {
    switch (action.type) {
        case ratingActionType.SET_RATING:
            return new Map(currMap.set(action.payload.hospitalName, action.payload.rating))
        case ratingActionType.REMOVE_RATING:
            currMap.delete(action.payload.hospitalName)
            return new Map(currMap)
        default:
            return currMap
    }
}


const CardPanel = () => {
    const [rating, dispatchRating] = useReducer(ratingReducer, new Map())

    const onSetRating = (hospital: string, rating: number) => dispatchRating({
        type: ratingActionType.SET_RATING,
        payload: {
            hospitalName: hospital,
            rating: rating
        }
    })

    const onRemove = (hospital: string) => dispatchRating({
        type: ratingActionType.REMOVE_RATING,
        payload: {
            hospitalName: hospital,
            rating: 0
        }
    })

    return (
        <>
            <div className="my-20 mx-60 flex justify-center gap-20" >
                {
                    data.map((item, index) => {
                        return (
                            <InfoCard
                                key={index}
                                name={item.name}
                                image={item.image}
                                value={rating.get(item.name) || 0}
                                onCompare={onSetRating}
                            />
                        )
                    })
                }
            </div>
            <div className="my-20">
                <h1 className="text-center text-3xl font-bold mb-4">Rating</h1>
                <div className="flex flex-col items-center w-screen">
                    {
                        rating.size === 0 && <h1 className="text-center text-xl mb-4">No rating, please rate some hospital to see the change :)</h1>
                    }
                    {
                        Array.from(rating).map(([name, rating], index) => {
                            return (
                                <div
                                    className="bg-gray-200 w-1/2 p-4 rounded-lg my-2 cursor-pointer hover:bg-gray-300"
                                    key={index}
                                    onClick={() => onRemove(name)}
                                >
                                    <h1>{name} - {rating}</h1>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default CardPanel