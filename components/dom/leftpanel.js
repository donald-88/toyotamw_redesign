const LeftPanel = (props) =>{
  return(
    <div className="flex flex-col justify-center h-full w-3/4">
      <p className="text-lg">{props.year}</p>
      <h1 className="text-4xl mb-4 font-bold">TOYOTA <br/>{props.title}</h1>
      <div className="flex w-full">
        <button className="h-10 w-24 text-sm border-custom-white border font-light hover:bg-custom-white hover:text-black">
          Order Now
        </button>
        <button className="h-10 w-24 text-sm border-custom-white border font-light hover:bg-custom-white hover:text-black">
          Test Drive
        </button>
      </div>
    </div>
  )
}

export default LeftPanel
