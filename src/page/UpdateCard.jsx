import { useEffect, useState } from "react";
import { useContext } from "react";
import { ApiContext } from './../context/Context';
import {  useNavigate, useParams } from "react-router-dom";
import { TiStarHalfOutline } from "react-icons/ti";
import Swal from "sweetalert2";


const UpdateCard = () => {
    const [data, setData] = useState([])
    const [updated , setUpdated] = useState({})
    const { id } = useParams()
    const navigate = useNavigate(); 
    let currentData = data.find(data => data._id == id)
    if(updated.rating){
        currentData = updated
    }

    useEffect(() => {
        fetch(`https://sm-bead.vercel.app/users`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    const { user } = useContext(ApiContext)
    const uid = user?.uid
    const userName = user?.displayName
    const userEmail  = user?.email

    const addCardHandler = event => {
        event.preventDefault()
        const target = event.target;
        const item_name = target.productName.value;
        const user_name = userName;
        const user_email = userEmail;
        const image = target.productPhoto.value;
        const short_description = target.description.value;
        const price = target.price.value;
        const rating = target.rating.value;
        const stockStatus = target.order.value;
        const customization = target.customization.value;
        const subcategory_Name = target.category.value;
        const processing_time = target.date.value;
        const newUserCard = { uid,user_email, user_name, id, item_name, image, short_description, price, rating, stockStatus, customization, subcategory_Name, processing_time }

        fetch(`https://sm-bead.vercel.app/users/card/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUserCard)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setUpdated(newUserCard)
                Swal.fire({
                    title: "Successfully",
                    text: "Your Product Updated ..!!",
                    icon: "success"
                });
            })

        fetch(`https://sm-bead.vercel.app/alldata`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUserCard)
        }).then(res => res.json())
            .then(data => {
                console.log(data);
            })
        target.reset()
    }

    const deleteHandle = (id) => {
        console.log(id);
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://sm-bead.vercel.app/users/card/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        swalWithBootstrapButtons.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        navigate('/mycraftitems'); 
                    })
                    .catch(error => {
                        console.error('Error:', error);
                        swalWithBootstrapButtons.fire({
                            title: "Error",
                            text: "An error occurred while deleting your file.",
                            icon: "error"
                        });
                    });
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "Your imaginary file is safe :)",
                    icon: "error"
                });
            }
        });
    }

    if (!currentData) {
        return null;
    }
    const { image, customization, item_name, price, processing_time, rating, short_description, stockStatus, subcategory_Name, user_email, user_name } = currentData


    return (
        <div className="w-[90%] mx-auto">
            <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
                <div className="xl:w-2/6 lg:w-2/5 w-80 md:block mx-auto">
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
                            <p className="text-sm flex items-center gap-2 leading-none text-gray-600 dark:text-gray-300 mr-3"><TiStarHalfOutline />{rating}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-12">
                <h2 className="text-center text-3xl my-5">Update Product Form</h2>
                <form onSubmit={addCardHandler} className="w-4/5 md:w-3/5 mx-auto">
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            name="productName"
                            id="productName"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="productName"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Product name
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            name="productPhoto"
                            id="productPhoto"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="productPhoto"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Photo url
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            name="description"
                            id="description"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="description"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Short Description
                        </label>
                    </div>

                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="number"
                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                name="price"
                                id="price"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="price"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Price
                            </label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="number"
                                name="rating"
                                id="rating"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                min={1} max={5}
                                required
                            />
                            <label
                                htmlFor="rating"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Rating
                            </label>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-5 group">
                            <fieldset>
                                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">stockStatus</label>

                                <div className="flex items-center mb-4">
                                    <input id="country-option-1" type="radio" name="order" value=" In stock" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" defaultChecked />
                                    <label htmlFor="country-option-1" className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        In stock
                                    </label>
                                </div>

                                <div className="flex items-center mb-4">
                                    <input id="country-option-2" type="radio" name="order" value="Made to Order" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="country-option-2" className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        Made to Order
                                    </label>
                                </div>


                            </fieldset>

                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <fieldset>
                                <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">customization</label>

                                <div className="flex items-center mb-4">
                                    <input id="country-option-2" type="radio" name="customization" value="Yes" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" defaultChecked />
                                    <label htmlFor="country-option-2" className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        Yes
                                    </label>
                                </div>

                                <div className="flex items-center mb-4">
                                    <input id="country-option-2" type="radio" name="customization" value="No" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="country-option-2" className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        No
                                    </label>
                                </div>


                            </fieldset>

                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-5 group">
                            <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">Select Category</label>
                            <select id="countries" name="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option>Macrame</option>
                                <option>Tie-Dyeing</option>
                                <option>Beadwork</option>
                                <option>Quilting</option>
                                <option>Knitting & Crocheting</option>
                                <option>Embroidery</option>
                            </select>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">Possess Date</label>
                            <div className="relative max-w-sm">

                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                    </svg>
                                </div>
                                <input type="date" required name="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date" />
                            </div>

                        </div>
                    </div>


                    <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Product Update
                    </button>

                </form>
                <div className="flex justify-center my-11"><button onClick={() => deleteHandle(id)} className="btn-primary btn textWhite">Delete Product</button></div>
            </div>
        </div>
    );
};

export default UpdateCard;