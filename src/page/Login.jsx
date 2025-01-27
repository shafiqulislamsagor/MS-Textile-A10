import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { ApiContext } from "../context/Context";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const Login = () => {

    const location = useLocation()
    const navigate = useNavigate()

    const { LoginUser, GoogleLogIn , GitHubLogIn } = useContext(ApiContext)

    const Glogin = () => {
        GoogleLogIn()
            .then(() => {
                Swal.fire({
                    title: "Successfully",
                    text: "Your Account Login is Successfully ..!!",
                    icon: "success"
                });
                navigate(location?.state ? location.state : '/');
            })
            .catch(() => {
                toast.error('Please, Try Again')
            })
    }
    const GitLogIn = () => {
        GitHubLogIn()
            .then(() => {
                Swal.fire({
                    title: "Successfully",
                    text: "Your Account Login is Successfully ..!!",
                    icon: "success"
                });
                navigate(location?.state ? location.state : '/');
            })
            .catch(() => {
                toast.error('Please, Try Again')
            })
    }



    const loginFormHandler = event => {
        event.preventDefault()

        const target = event.target;
        const email = target.email.value;
        const password = target.password.value;



        LoginUser(email, password)
            .then(() => {
                // Signed in 
                Swal.fire({
                    title: "Successfully",
                    text: "Your Account Login is Successfully ..!!",
                    icon: "success"
                });
                navigate(location?.state ? location.state : '/');
                // ...
            })
            .catch(() => {
                Swal.fire({
                    title: "Error",
                    text: "Email or password wrong ..!!",
                    icon: "error"
                });
            })
    }
    return (
        <div className="w-[95%] lg:w-2/5 p-10 mx-auto bg-base-300 my-12 rounded-lg">
            <form onSubmit={loginFormHandler} className="">
                <h2 className="text-3xl text-center mb-10">Log In Now</h2>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="email" name="email" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Email Address</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="password" name="password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Password</label>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
            </form>
            <div className="divider">OR</div>
            <div className="flex mb-10 justify-center items-center gap-5">
                <button onClick={Glogin} className="text-4xl border p-2 rounded-full btn h-auto  border-white hover:border-white hover:scale-105"><FcGoogle /></button>
                <button onClick={GitLogIn} className="text-4xl border p-2 rounded-full btn h-auto  border-white hover:border-white hover:scale-105"><FaGithub /></button>
            </div>
            <Link to='/register' className="underline hover:text-cyan-600">Create a new accounts ? Register</Link>
        </div>
    );
};

export default Login;