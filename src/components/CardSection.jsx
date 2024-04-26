
import { useContext } from "react";
import { ApiContext } from "../context/Context";
import CardSec from "./Card";

const CardSection = () => {
    const context = useContext(ApiContext)
    const { data } = context
    const initialData = data.slice(0, 6)
    return (
        <div className="my-10 w-[90%] mx-auto">
            <h2 className="text-4xl fontLarge text-center mb-5">Our Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    initialData.map(card => <CardSec key={card.NewId} card={card}/>)
                }
            </div>
            <div className="flex justify-center mt-8">
                <button className="btn rounded-md bg-teal-500 text-white">All Products</button>
            </div>
        </div>
    );
};

export default CardSection;