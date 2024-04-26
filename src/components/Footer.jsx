import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { MdPhoneInTalk } from "react-icons/md";

const Footer = () => {
    return (
        <footer className="bg-white rounded-lg shadow dark:bg-gray-900 ">
            <div className="w-[90%] mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link  className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-4xl font-semibold whitespace-nowrap dark:text-white">SM Textile</span>
                    </Link>
                    <ul className="flex flex-col items-start space-y-2  mb-6 text-base font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li className="text-2xl">Contact</li>
                        <li className="flex gap-2 items-center">
                            <CiLocationOn/> Nakla-2150 , Sherpur , Mymensingh
                        </li>
                        <li className="flex gap-2 items-center">
                            <CiMail/> shafiqulislamsagor277@gmail.com
                        </li>
                        <li className="flex gap-2 items-center">
                            <MdPhoneInTalk/> +8801793035257
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <Link to='/' className="hover:underline">SM Textile™</Link>. All Rights Reserved.</span>
            </div>
        </footer>

    );
};

export default Footer;