
const Error = ({ error }) => {
  return (
    // <div className={` ${error.err? 'bg-red-500' : 'bg-cyan-500'}  text-white uppercase text-center p-2
    // font-bold mb-3 rounded-xl`}>
    //      {error.msg}
    // </div>

    <div className={` ${error.err? 'bg-red-500' : 'bg-cyan-500'} max-w-md py-4 px-6 shadow-xl shadow-red-800 rounded-lg w-full`}>
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
          <h3 className="text-xl text-white font-semibold">Error</h3>
        </div>
        <p className="text-white uppercase"> {error.msg} </p>
      </div>
    </div>

  )
}

export default Error
