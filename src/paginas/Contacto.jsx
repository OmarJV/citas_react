import Header from "../components/Header"
import FormularioContacto from "../components/FormularioContacto"
import BasicFooter from "../components/BasicFooter"

import { useNavigate } from "react-router-dom"

import {
  RiArrowLeftDoubleLine,
  RiTwitterXFill,
  RiInstagramFill,
  RiFacebookFill,
  RiTiktokFill
} from "react-icons/ri";

const Contacto = () => {

  const navigate = useNavigate();

  return (

    <div>
      <div className="container mx-auto mt-16">
        <Header />

        <button className=" ml-8 mt-5 left-8 xl:left-56 xl:top-44 top-36 cursor-pointer border 
                    border-gray-900 p-2 rounded-lg 
                    text-gray-900 hover:translate-x-1 transition-all duration-100
                    hover:border-y-4 hover:border-x-4 "
          onClick={() => navigate(-1)}>
          <RiArrowLeftDoubleLine />
        </button>

        <div className=" mt-10">




          <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto">
            Ponte en contacto con  {' '}
            <span className="text-indigo-500">Patitas.</span>

          </h1>



          <div className="mt-20 md:flex justify-center">
            <FormularioContacto />
          </div>
        </div>

      </div>

      <div name="" id="" className=" min-h-[30vh] mt-16 " >

        <div className=" p-10 xl:py-20 flex flex-col items-center ">
          <div className=" flex items-center gap-2">
            <p className=" text-gray-500 text-2xl leading-[3rem] text-justify font-bold " >
              Dirección:
            </p>
            <p className=" text-xl xl:text-2xl font-light ">
              Ciudad de México, México
            </p>
          </div>

          <div className=" flex items-center gap-2">
            <p className=" text-gray-500 text-2xl leading-[3rem] text-justify font-bold " >
              Telefono:
            </p>
            <h2 className=" text-xl xl:text-2xl font-light">
            001 (913) 535-6280
            </h2>
          </div>


          <div className=" flex items-center gap-2">
            <p className=" text-gray-500 text-2xl leading-[3rem] text-justify font-bold " >
              Horarios:
            </p>
            <h2 className=" text-xl xl:text-2xl font-light">
              10:00 am - 18 pm {'(Lunes a Viernes)'}
            </h2>
          </div>


          <nav className=" flex items-center gap-5 mt-5">
            <a href="https://twitter.com/" className=" block text-indigo-400 p-3 hover:text-blue-950 text-3xl font-extrabold">
              <RiTwitterXFill />
            </a>

            <a href="https://www.instagram.com/" className=" block text-indigo-400 p-3 hover:text-blue-950 text-3xl font-extrabold">
              <RiInstagramFill />
            </a>

            <a href="https://es-la.facebook.com/login" className=" block text-indigo-400 p-3 hover:text-blue-950 text-3xl font-extrabold">
              <RiFacebookFill />
            </a>

            <a href="https://www.tiktok.com/es/" className=" block text-indigo-400 p-3 hover:text-blue-950 text-3xl font-extrabold">
              <RiTiktokFill />
            </a>
          </nav>

        </div>

        {/* <div className=" md:col-span-4 flex items-center relative p-2 flex-col gap-3">
          <p className=" text-indigo-400 text-3xl leading-[3rem] p-4 font-semibold " >
            Nuestra Ubicación
          </p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240864.19511669505!2d-99.30876694535266!3d19.390659055556263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce0026db097507%3A0x54061076265ee841!2sCiudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1705446595502!5m2!1ses-419!2smx"
            className=" rounded-lg h-full w-3/4 md:h-64  " >
          </iframe>
        </div> */}

      </div>


      <div>

        <BasicFooter />
      </div>
    </div>
  )
}

export default Contacto
