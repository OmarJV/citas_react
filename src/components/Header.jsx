import { useState } from "react";
import { RiBaiduLine, RiMenuLine, RiCloseFill } from "react-icons/ri";

import { Link } from "react-router-dom";

import { RiHome2Fill, RiPencilFill, RiFeedbackFill } from "react-icons/ri";

function Header() {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className=" flex items-center justify-between xl:justify-start w-full  p-4 z-50">

            <div className="xk:w-1/6 text-center " >
                <span className=" text-3xl font-bold relative p-0.5 bg-gray-100 rounded-md mx-8 "> Patita
                    <span className="text-indigo-500 text-3xl">s</span>
                    <RiBaiduLine className=" absolute -left-12 text-indigo-500 text-7xl -rotate-45 -bottom-1 -z-10 " />
                </span>
            </div>

            <nav
                className={`fixed bg-gray-100 w-[80%] md:w-[40%] xl:w-full h-full 
                            ${showMenu ? "left-0" : "-left-full"} 
                            top-0 xl:static flex-1 flex flex-col xl:flex-row items-center 
                            justify-center gap-12 transition-all duration-400 z-50 `
                        }>

                <Link to="/">
                
                    <a className=" text-xl xl:py-1 xl:px-4 rounded-lg hover:underline decoration-indigo-800 transition-colors ml-5 xl:ml-3">
                    <RiHome2Fill className=" absolute text-gray-400 mt-1 "/>
                        HOME
                    </a>
                </Link>
                <Link to="/cita">
                    <a className=" text-xl xl:py-1 xl:px-4 rounded-lg hover:underline ml-5 xl:ml-3">
                    <RiPencilFill className=" absolute text-gray-400 mt-1 "/>
                        CITA
                    </a>
                </Link>

                <Link to="/contacto">
                    <a className=" text-xl xl:py-1 xl:px-4 rounded-lg hover:underline decoration-indigo-800 ml-5 xl:ml-3">
                    <RiFeedbackFill className=" absolute text-gray-400 mt-1 "/>

                        CONTACTO
                    </a>
                </Link>

            </nav>

                {/* Botón Menú  */}

            <button onClick={() => setShowMenu(!showMenu)} 
                    className=" xl:hidden text-3xl p-2 z-50">
                    {showMenu ? <RiCloseFill /> : <RiMenuLine />}
            </button>

        </div>
    )
}

export default Header