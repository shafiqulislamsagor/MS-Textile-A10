import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { ApiContext } from "../context/Context";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const Register = () => {

    const { registerUser, UpdateProfile, LogOut, GoogleLogIn,GitHubLogIn } = useContext(ApiContext)
    const navigate = useNavigate();

    const passCondition = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;


    const Glogin = () => {
        GoogleLogIn()
            .then((current) => {
                const user = current.user
                // console.log(current,user);
                const { uid, email } = user
                const newUser = { uid, email }
                // console.log(newUser);
                fetch('http://localhost:4000/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => console.log(data))
                Swal.fire({
                    title: "Successfully",
                    text: "Your Account created is Successfully ..!!",
                    icon: "success"
                });
                navigate('/login')
                LogOut()
            })
            .catch(() => {
                toast.error('Please, Try Again')
            })
    }
    const Gitlogin = () => {
        GitHubLogIn()
            .then((current) => {
                const user = current.user
                // console.log(current,user);
                const { uid, email } = user
                const newUser = { uid, email }
                // console.log(newUser);
                fetch('http://localhost:4000/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => console.log(data))
                Swal.fire({
                    title: "Successfully",
                    text: "Your Account created is Successfully ..!!",
                    icon: "success"
                });
                navigate('/login')
                LogOut()
            })
            .catch(() => {
                toast.error('Please, Try Again')
            })
    }


    const registerFormHandler = event => {
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.url.value;
        const password = form.password.value;
        const Confirm_password = form.Confirm_password.value;

        if (passCondition.test(password)) {
            if (password === Confirm_password) {
                registerUser(email, password)
                    .then((userCredential) => {


                        // Signed up 
                        const user = userCredential.user;
                        // console.log(user)
                        UpdateProfile(name, photo)
                        const { uid, email } = user
                        const newUser = { uid, email }
                        fetch('http://localhost:4000/users', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(newUser)
                        })
                            .then(res => res.json())
                            .then(data => console.log(data))
                        LogOut()
                        Swal.fire({
                            title: "Successfully",
                            text: "Your Account is Successfully ..!!",
                            icon: "success"
                        });
                        navigate('/login')
                        // ...
                    })
                    .catch(() => {
                        Swal.fire({
                            title: "Error",
                            text: "Your Email Already used ...!!",
                            icon: "error"
                        });
                        // ..
                    })
            }
            else {
                toast.error("Confirm Password don't matched")
            }
        }
        else {
            toast.error('Uppercase,lowercase and minimum 6 character this field')
        }


    }
    return (
        <div className="w-3/5 p-10 mx-auto bg-base-300 my-12 rounded-lg">
            <form onSubmit={registerFormHandler} className="">
                <h2 className="text-3xl text-center mb-10">Register Now</h2>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="name" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Full Name</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="email" name="email" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Email Address</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="url" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Photo URL</label>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="password" name="password" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">New Password</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="password" name="Confirm_password" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm Password</label>
                    </div>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
            </form>
            <div className="divider">OR</div>
            <div className="flex mb-10 justify-center items-center gap-5">
                <button onClick={Glogin} className="text-4xl border p-2 rounded-full btn h-auto  border-white hover:border-white hover:scale-105"><FcGoogle /></button>
                <button onClick={Gitlogin} className="text-4xl border p-2 rounded-full btn h-auto  border-white hover:border-white hover:scale-105"><FaGithub /></button>
            </div>
            <Link to='/login' className="underline hover:text-cyan-600">Already have an account ? Log In</Link>
        </div>
    );
};

export default Register;