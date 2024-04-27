
import { PropTypes } from 'prop-types';

const CarftCard = ({ data }) => {
    // console.log(data);
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="p-4">
                <img
                    src={data.
                        image}
                    className="w-20 md:w-40 max-w-full max-h-full"
                    alt="Apple Watch"
                />
            </td>
            <td className="px-6 py-4">{data.item_name
            }</td>

            <td className="px-6 py-4">
            <div className="ps-3">
                    <div className="text-base font-semibold">{data.
                        user_name}</div>
                    <div className="font-normal text-gray-500">
                        {data.
                            user_email
                        }
                    </div>
                </div>
            </td>
            <td className="px-6 py-4">
                <div className="flex items-center">
                    
                    $ {data.price}
                </div>
            </td>
            <td className="px-6 py-4">
                <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                    Edit user
                </a>
            </td>
        </tr>
    );
};

export default CarftCard;

CarftCard.propTypes = {
    data: PropTypes.object
}