const Features = () =>{
  return(
    <div className="h-full w-1/2 flex flex-col justify-end">
      <div className="flex justify-evenly w-full h-32 p-8">
        <button className="h-24 w-24 text-black bg-custom-white border rounded-full flex justify-center items-center leading-4 hover:cursor-move">Engine</button>
        <button className="h-24 w-24 border-custom-white border rounded-full flex justify-center items-center leading-4">Top<br/>Speed</button>
        <button className="h-24 w-24 border-custom-white border rounded-full flex justify-center items-center leading-4">Exterior</button>
        <button className="h-24 w-24 border-custom-white border rounded-full flex justify-center items-center leading-4">Interior</button>
        <button className="h-24 w-24 border-custom-white border rounded-full flex justify-center items-center leading-4">Trans<br/>mission</button>
      </div>
    </div>
  )
}


export default Features
