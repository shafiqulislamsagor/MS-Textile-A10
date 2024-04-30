import { useContext, useEffect, useState } from "react";
import { ApiContext } from "../context/Context";
import Mycard from "../components/Mycard";

const MyCraftitems = () => {
    const { user } = useContext(ApiContext)

    const [cards, setCards] = useState([])


    // console.log(user);
    useEffect(() => {
        if(user !== null){
            fetch(`https://sm-bead.vercel.app/users/${user.uid}`)
            .then(res => res.json())
            .then(data => setCards(data))
        }
    }, [user])

    // console.log(cards);
    // console.log(user);
    if (user == null) {
        return
    }

    // console.log(user.uid);
    // console.log(cards);
    return (
        <div className="relative my-10 w-10/12 md:w-11/12 mx-auto overflow-x-auto shadow-md sm:rounded-lg">
            <h2 className="text-4xl font-bold text-center mb-12">My Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                        cards.slice(1).map((card, id) => <Mycard key={id} cardData={card} />)
                    }
            </div>
        </div>
    );
};

export default MyCraftitems;