import {
    RiBaiduLine,
    RiTwitterXFill,
    RiInstagramFill,
    RiFacebookFill,
    RiTiktokFill
} from "react-icons/ri";


const Footer = () => {
    return (
        <footer className=' bg-[#2E3E5C] p-8 xl:p-20 relative z-10'>

            <div className=" flex flex-col md:flex-row items-center justify-between border-b gap-5 border-gray-500 pb-6 pl-5 pt-2">
                <div className=" w-1/3 ">
                    <span className=" text-3xl font-bold relative p-0.5 bg-[#2E3E5C] rounded-md  text-white"> Patita
                        <span className="text-indigo-500 text-3xl">s</span>
                        <RiBaiduLine className=" absolute -left-12 text-indigo-500 text-7xl -rotate-45 -bottom-1 -z-10 " />
                    </span>

                </div>


                <nav className=" flex items-center gap-5">
                    <a href="https://twitter.com/" className=" block bg-indigo-400 text-white rounded-full p-3 hover:bg-blue-950 ">
                        <RiTwitterXFill />
                    </a>

                    <a href="https://www.instagram.com/" className=" block bg-indigo-400 text-white rounded-full p-3 hover:bg-blue-950">
                        <RiInstagramFill />
                    </a>

                    <a href="https://es-la.facebook.com/login" className=" block bg-indigo-400 text-white rounded-full p-3 hover:bg-blue-950">
                        <RiFacebookFill />
                    </a>

                    <a href="https://www.tiktok.com/es/" className=" block bg-indigo-400 text-white rounded-full p-3 hover:bg-blue-950 ">
                        <RiTiktokFill />
                    </a>
                </nav>

            </div>

            <div className=" mt-20">

                <span className="flex flex-col xl:flex-row gap-3 justify-center ">
                    <a
                        href="#"
                        className="text-gray-300 hover:text-white transition-colors text-center"
                    >
                        Términos y condiciones
                    </a>
                    <span className="hidden xl:flex text-white text-center">|</span>
                    <a
                        href="#"
                        className="text-gray-300 hover:text-white transition-colors text-center"
                    >
                        Política de privacidad
                    </a>
                </span>

                <p className=" text-gray-300 text-center p-10"> &copy; 2024 - Todos los derechos reservados. </p>
            </div>

        </footer>
    )
}

export default Footer
