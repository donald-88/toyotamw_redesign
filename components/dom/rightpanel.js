import { useState } from 'react'

const RightPanel = (props) =>{

  const [isActive, setIsActive] = useState(false)

  return(
    <div className="flex flex-col items-center justify-end w-1/4 h-full">

      <div className="flex flex-col items-start">
        <div className="flex pb-8">
          <button className="flex justify-center items-center h-10 w-10 border-custom-white border rounded-full pr-1"
            onClick={props.previous}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-8 -5 24 24" width="24" height="24" preserveAspectRatio="xMinYMin" className="jam jam-chevron-left"><path d='M2.757 7l4.95 4.95a1 1 0 1 1-1.414 1.414L.636 7.707a1 1 0 0 1 0-1.414L6.293.636A1 1 0 0 1 7.707 2.05L2.757 7z' fill='#c2c4c3'/></svg>
          </button>
          <div className="w-1"/>
          <button className="flex justify-center items-center h-10 w-10 border-custom-white border rounded-full pl-1"
            onClick={props.next}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-8 -5 24 24" width="24" height="24" preserveAspectRatio="xMinYMin" className="jam jam-chevron-right"><path d='M5.314 7.071l-4.95-4.95A1 1 0 0 1 1.778.707l5.657 5.657a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 0 1-1.414-1.414l4.95-4.95z' fill='#c2c4c3'/></svg>
          </button>
        </div>

        <h1 className="text-xl font-bold leading-5">{props.diesel}</h1>
        <p className="text-sm pb-4">{props.dieselCapacity}</p>
        <h1 className="text-xl font-bold leading-5">{props.petrol}</h1>
        <p className="text-sm pb-4">{props.petrolCapacity}</p>
        <h1 className="text-xl font-bold leading-5">Torque</h1>
        <p className="text-sm">{props.power}</p>

        <div className="w-full py-20">
          <p>0{props.currentIndex + "/" + props.totalIndex}</p>
          <input type="range" min="0" max={props.totalIndex} value={props.currentIndex} className="w-full pl-8"/>
        </div>
      </div>
    </div>
  )
}

export default RightPanel
