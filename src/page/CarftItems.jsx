import { useContext } from "react";
import { ApiContext } from "../context/Context";
import CarftCard from "../components/CarftCard";


const CarftItems = () => {
    const {data} = useContext(ApiContext)
    return (
        <div className="relative my-10 overflow-x-auto shadow-md sm:rounded-lg">

            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>

                        <th scope="col" className="px-6 py-3">
                            Product Photo
                        </th>
                        
                        <th scope="col" className="px-6 py-3">
                            Product Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Seller name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Details
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((card,id)=> <CarftCard data={card} key={id}/>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default CarftItems;