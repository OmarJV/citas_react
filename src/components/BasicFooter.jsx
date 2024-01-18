import React from 'react'

const BasicFooter = () => {
    return (
        <footer className="bg-[#2E3E5C] flex flex-col xl:flex-row justify-center items-center gap-4 xl:gap-0 xl:justify-between w-full p-6">
            <div>
                <p className="text-gray-300 text-center md:text-left">
                    &copy; 2024
                     Todos los derechos reservados.
                </p>
            </div>
            <div className="flex flex-col xl:flex-row items-center gap-2">
                <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                >
                    Términos y condiciones
                </a>
                <span className="hidden xl:flex text-white">|</span>
                <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                >
                    Política de privacidad
                </a>
            </div>
        </footer>
    )
}

export default BasicFooter
