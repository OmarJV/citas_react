import { useForm } from "react-hook-form";
import { useState } from "react";
import Error from "./Error";

import {RiUser3Line, RiMailFill, RiPhoneFill,  } from "react-icons/ri";

const FormularioContacto = ( ) => {

    // const [cliente, setCliente] = useState('');
    // const [correo, setCorreo] = useState('');
    // const [tel, setTel] = useState('');
    // const [mensaje, setMensaje] = useState('');
    // const [check, setCheck] = useState('');

    //  const [error, setError] = useState(false);


    // //  Función generar id
    
    // // const generarId = () => {
    // //     const random = Math.random().toString(36).substr(2);
    // //     const fecha = Date.now().toString(36)


    // //     return random + fecha;
    // // }

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     console.log("Enviando info para contacto ...");

    //     if ([cliente, correo, tel, mensaje, ].includes('') || mensaje.length > 220) {
    //         //alert('Hay al menos un campo vacio');
    //         setError(true);
    //         return;
    //     }

    //     setError(false);

    //     const objetoContacto = {
    //         cliente,
    //         correo,
    //         tel,
    //         mensaje,
    //         check,
    //     }

        
    //     // objetoContacto.id = generarId();
    //     // setContacto([...contacto, objetoContacto]);

    //     console.log( objetoContacto);




    //     // Resetenado Formulario
    //     setCliente('');
    //     setCorreo('');
    //     setTel('');
    //     setMensaje('');
    //     setCheck(true);
    // }

    const { register, 
        handleSubmit, 
        formState:{errors},
        reset,
    } = useForm({
        defaultValues: {
            check: "true",
        }
    }); 

    const onSubmit = handleSubmit((data) => {
        console.log(data);

        reset()
    });

    // reset();

    return (

        <div >

            <span className=" grid grid-cols-1 xl:grid-cols-8 ">

                {/* <div className="  bg-green-200">

                    <h2 className="font-black text-center text-3xl ">
                        ¿Cómo podemos ayudarte? </h2>

                    <p className="text-lg mt-5 text-center mb-10 ">
                        Dejanos un  {' '}
                        <span className=" text-indigo-500 font-bold">Mensaje</span>
                    </p>
                </div> */}

                <form className=" rounded-lg py-10 px-5 mx-3 my-5 xl:w-3/5 md:col-span-5 bg-white shadow-md mt-16"
                    onSubmit={onSubmit}
                >
                    {/* </form> */}

                    {/* <form
                        className="bg-white shadow-md rounded-lg py-10 px-5 "
                    // onSubmit={handleSubmit}
                    > */}

                    {/* {error && <Error> <p>Todos los campos son obligatorios</p></Error>} */}

                    <div className="mb-5">
                        <label htmlFor="cliente" className="block text-gray-700 uppercase font-bold">
                            Nombre
                        </label>
                        <div className=" relative">

                            <RiUser3Line className="text-gray-500 absolute top-7 -translate-y-1/3 left-3"/>
                            <input
                                id="cliente"
                                type="text"
                                placeholder="Nombre y apellido"
                                className="border-2 w-full p-2 pl-10 mt-2 placeholder-gray-400 rounded-md "
                                { ...register('cliente', {
                                    required: true,
                                    minLength: 2,
                                    maxLength: 80,

                                })}
                                // value={cliente}
                                //onBlur={() => validateInput('cliente')}
                                // onChange={(e) => setCliente(e.target.value)} // Escribe el cambio con la func. modificadora

                            />
                            {errors.cliente?.type === 'required' && <p className=" text-red-400"> El campo nombre es requerido </p>}
                            {errors.cliente?.type === 'maxLength' && <p className=" text-red-400"> El campo debe ser menor a 80 caracteres </p>}
                            {errors.cliente?.type === 'minLength' && <p className=" text-red-400"> El campo nombre debe tener almenos dos caracteres </p>}

                          
                        </div>
                    </div>

                    <div className="mb-5">
                        <label htmlFor="correo" className="block text-gray-700 uppercase font-bold">
                            Correo Electrónico
                        </label>
                        <div className=" relative">
                            <RiMailFill  className="text-gray-500 absolute top-7 -translate-y-1/3 left-3" />
                            <input
                                id="correo"
                                type="email"
                                placeholder="email@dominio.com"
                                className="border-2 w-full p-2 pl-10 mt-2 placeholder-gray-400 rounded-md"
                                { ...register('correo', {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 255,
                                    pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
                                })}
                                // value={correo}
                                // onChange={(e) => setCorreo(e.target.value)}
                            />
                            {errors.correo?.type === 'required' && <p className=" text-red-400"> El campo email es requerido </p>}
                            {errors.correo?.type === 'maxLength' && <p className=" text-red-400"> El campo debe ser menor a 255 caracteres </p>}
                            {errors.correo?.type === 'minLength' && <p className=" text-red-400"> El campo nombre debe tener almenos seis caracteres </p>}
                            {errors.correo?.type === 'pattern' && <p className=" text-red-400"> Formato de email incorrecto </p>}


                        </div>
                    </div>

                    <div className="mb-5">
                        <label htmlFor="tel" className="block text-gray-700 uppercase font-bold">
                            Teléfono
                        </label>
                        <div className=" relative">
                            <RiPhoneFill className="text-gray-500 absolute top-7 -translate-y-1/3 left-3" />
                            <input
                                id="tel"
                                type="number"
                                placeholder="(XX) XXXX XXXX"
                                className="border-2 w-full p-2 pl-10 mt-2 placeholder-gray-400 rounded-md"
                                { ...register('tel',{
                                    required: true,
                                    minLength: 10,
                                    maxLength: 12,
                                    
                                })}
                                // value={tel}
                                
                                // onChange={(e) => setTel(e.target.value)}
                            />
                            {errors.tel?.type === 'required' && <p className=" text-red-400"> El campo teléfono es requerido </p>}
                            {errors.tel?.type === 'minLength' && <p className=" text-red-400"> El campo teléfono tener 10 números </p>}
                            {errors.tel?.type === 'maxLength' && <p className=" text-red-400"> El teléfono debe tener menos de 13 números</p>}
                            {/* {errors.tel?.type === 'pattern' && <p className=" text-red-400"> Formato de teléfono incorrecto </p>} */}

                        </div>
                    </div>

                    <div className="mb-8">
                        <label
                            className="block text-gray-700 uppercase font-bold">
                            Mensaje
                        </label>
                        <textarea
                            name="mensaje"
                            id="mensaje"
                            type="text"
                            // maxLength={221}
                            className={`border-2 w-full shadow-lg p-2 mt-2 placeholder-gray-400 rounded-md outline-none
                               
                            `}
                            // ${mensaje.length > 220? "shadow-red-300 && border-red-400" : "border-gray-300"}
                            placeholder=""
                            { ...register('mensaje',{
                                required:true,
                                maxLength:221,
                            })}
                            // value={mensaje}
                            // onChange={(e) => setMensaje(e.target.value)}
                        />
                        {errors.mensaje?.type === 'required' && <p className=" text-red-400"> El campo mensaje es requerido </p>}
                        {errors.mensaje?.type === 'maxLength' && <p className=" text-red-400"> Número de caracteres excedido </p>}

                    </div>

                    <div className="mb-6 flex items-center">
                        <input type="checkbox"
                            // value={""}
                            className=" text-blue-600 bg-gray-100 border-gray-300 rounded-md focus:ring-blue-500 dark:focus:ring-blue-600
                                         dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "
                            
                            { ...register('check')}
                            // value={check}
                            // onChange={(e) => setCheck(e.target.value)}
                        />
                        <label htmlFor="checked-checkbox" className=" ms-3 block text-gray-700 uppercase font-bold">
                            ¿Le gustaría recibir novedades de la veterinaria Patitas?
                        </label>

                    </div>

                    <button type="submit"
                        className="bg-indigo-600 w-full p-3 text-white uppercase font-bold
                          hover:bg-indigo-800 cursor-pointer transition-colors rounded-lg">
                        CONTACTAR
                    </button>


                </form>

                {/* IMAGEN */}

                <div className=" md:col-span-3 flex items-center justify-center relative p-5">
                    <div className=" z-10 ">
                        <img src="Veterinaria2.png" alt="" className=" md:w-[465px] md:h-[700px] w-[350px] h-[450px] object-cover xl:-mt-10" />
                        {/* <img src="Veterinaria2.png" alt="" className=" xl:w-[650px] xl:h-[750px] w-[370px] h-[530px] object-cover xl:-mt-18" /> */}
                    </div>
                    
                    <div className="absolute top-1/2 -translate-y-1/3 left-1/2 
                    md:-translate-x-56 -translate-x-44 w-[380px] h-[380px] md:w-[510px] md:h-[510px] bg-transparent border-[18px] border-indigo-500 rounded-full " >
                    </div>

                    <img src="gato-com.png" alt=""
                        className=" w-20 h-20 md:w-28 md:h-28 object-cover rounded-full border-l-8 border-gray-600 
                        absolute bottom-[10%] md:-left-[15%] left-[5%]"
                    />

                    <img src="perro-telefono.jpeg" alt=""
                        className="w-20 h-20 md:w-28 md:h-28 object-cover rounded-full border-l-8 border-gray-600 
                        absolute top-[10%] left-[15%] "
                    />

                    {/* <div className="absolute top-1/2 -translate-y-1/3 left-1/2
                    -translate-x-1/2 w-[390px] h-[390px] xl:w-[590px] xl:h-[590px] bg-transparent border-[18px] border-indigo-500 rounded-full " >
                    </div> */}



                </div>

            </span>

            

        </div>


    )
}

export default FormularioContacto
