import { useContext, useEffect, useState } from "react";
import { ApiContext } from "../context/Context";
import MyProduct from "../components/MyProduct";

const MyCraftitems = () => {
    const { user } = useContext(ApiContext)

    const [cards, setCards] = useState([])


    // console.log(user);
    useEffect(() => {
        if(user !== null){
            fetch(`http://localhost:4000/users/${user.uid}`)
            .then(res => res.json())
            .then(data => setCards(data))
        }
    }, [user])

    if (user == null) {
        return
    }

    // console.log(user.uid);
    // console.log(cards);
    return (
        <div className="relative my-10 overflow-x-auto shadow-md sm:rounded-lg">
            <h2 className="text-4xl font-bold text-center mb-12">My Products</h2>
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
                        cards.slice(1).map((card, id) => <MyProduct data={card} key={id} />)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyCraftitems;