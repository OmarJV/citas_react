import Footer from "../components/Footer";
import Header from "../components/Header"
import { Link } from "react-router-dom";

const Home = () => {

    return (
        // <> </> Fragment

        <div>
            <div className="container mx-auto mt-16">
                <Header />
            </div>

            <selection className=" min-h-[90vh] grid grid-cols-1 xl:grid-cols-8">
                <div className=" md:col-span-5 flex items-center justify-center p-8 xl:p-20 ">

                    <div className=" flex flex-col gap-10">
                        <h1 className=" text-6xl xl:text-7xl font-bold xl:leading-[6rem] ">
                            Bienvenidos a la clínica veterinaria {" "}
                            <span className=" text-indigo-500 py-3 px-1 relative inline-block">Patitas</span>.
                        </h1>
                        <p className=" text-gray-500 text-2xl leading-[3rem] text-justify" >
                            Somos expertos en el cuidado de animales domésticos y estamos aquí para ayudarte a cuidar de tus mascotas ofreciendo servicios de vacunación, cirugía, exámenes de salud y mucho más.
                            <br />
                            Si necesitas programar una cita puedes elaborarla en el botón de abajo o en caso de preguntas, no dudes en ponerte en contacto con nosotros.
                        </p>

                        <div className=" gap-4 py-10">
                            <Link to={"cita"}>
                                <button to="cita" className=" bg-indigo-500 text-white py-3 px-8 rounded-xl text-xl 
                                                hover:bg-indigo-700 ">
                                    PROGRAMA UNA CITA
                                </button>
                            </Link>

                        </div>
                    </div>

                </div>

                <div className=" bg-transparent md:col-span-3 flex items-center justify-center relative p-8">
                    <div className=" z-10">
                        <img src="Veterinarian.png" alt="" className=" md:w-[600px] md:h-[750px] w-[450px] h-[450px] object-cover xl:-mt-18" />
                    </div>

                    <div className="absolute top-1/2 -translate-y-1/3 left-1/2
                    -translate-x-1/2 w-[280px] h-[280px] md:w-[490px] md:h-[490px] bg-transparent border-[18px] border-indigo-500 rounded-full " >
                    </div>

                    <img src="Gato.jpeg" alt=""
                        className="w-16 h-16 md:w-28 md:h-28 object-cover rounded-full border-l-8 border-gray-600 
                        absolute top-[15%] right-[18%] "
                    />

                    <img src="Canario.jpeg" alt=""
                        className="w-16 h-16 md:w-28 md:h-28 object-cover rounded-full border-l-8 border-gray-600 
                        absolute top-[10%] left-[15%] "
                    />

                    <img src="Conejo.jpeg" alt=""
                        className=" w-16 h-16 md:w-28 md:h-28 object-cover rounded-full border-l-8 border-gray-600 
                        absolute bottom-[10%] left-[10%] "
                    />

                </div>

            </selection>


            <div>
                <Footer />
            </div>
        </div>


    );
};

export default Home
