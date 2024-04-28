
import { useLoaderData, useParams } from "react-router-dom";


const ViewCard = () => {
    const { id } = useParams()
    const alldata = useLoaderData()
    const currentData = alldata.find(data => data._id == id)
    // console.log(currentData);
    const { image, customization, item_name, price, processing_time, rating, short_description, stockStatus, subcategory_Name, user_email, user_name } = currentData

    
    return (
        <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
            <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
                <img className="w-full h-[400px] rounded-lg" alt="image of a girl posing" src={image} />
            </div>
            <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
                <div className="border-b border-gray-200 pb-6">
                    <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">{item_name}</h1>
                </div>
                <div className="py-4 border-b border-gray-200 flex items-center gap-4">
                    <p className="text-base leading-4 text-gray-800 dark:text-gray-300">Saller:</p>
                    <div className="flex items-center justify-center">
                        <p className="text-sm leading-none text-gray-600 dark:text-gray-300">{user_name}</p>
                        
                    </div>
                </div>
                <div className="py-4 border-b border-gray-200 flex items-center gap-4">
                    <p className="text-base leading-4 text-gray-800 dark:text-gray-300">Price:</p>
                    <div className="flex items-center justify-center">
                        <p className="text-sm leading-none text-gray-600 dark:text-gray-300 mr-3">$ {price}</p>
                        
                    </div>
                </div>
                <div>
                    <p className="text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-7"><span className="text-lg font-bold fontLarge">Description:</span> {short_description}</p>
                    <p className="text-base leading-4 mt-7 text-gray-600 dark:text-gray-300">Product Released: {processing_time}</p>
                    <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">Category: {subcategory_Name} inches</p>
                    <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">Contact Email : {user_email}</p>
                    <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">Customization : {customization}</p>
                    <div className="flex items-center justify-between mt-3">
                        <p className="text-sm leading-none text-gray-600 dark:text-gray-300 mr-3">{stockStatus}</p>
                        <p className="text-sm leading-none text-gray-600 dark:text-gray-300 mr-3">{rating}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewCard;