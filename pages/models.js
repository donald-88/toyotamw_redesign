import { useState } from 'react'
import LeftPanel from '../components/dom/leftpanel'
import Features from '../components/dom/features'
import RightPanel from '../components/dom/rightpanel'


const Models = () =>{

  const cars = [
    { title:"FORTUNER", year:"2021", },
    { title:"HILUX", year:"2021"}
  ]

  const engine = [
    { diesel:"Turbo-Diesel", dieselCapacity:"2.8 Litres", petrol:"Turbo-Petrol", petrolCapacity:"2.7 Litres", power:"500Nm"},
    { diesel:"Turbo-Diesel", dieselCapacity:"2.7 Litres", petrol:"Turbo-Petrol", petrolCapacity:"2.7 Litres", power:"480Nm"}
  ]

  const [index, setIndex ] = useState(0)

  const handleNext = () =>{
    if(index < cars.length - 1){
    const newIndex = index + 1
    setIndex(newIndex)}
  }

  const handlePrevious = () =>{
    if(index > 0){
    const newIndex = index - 1
    setIndex(newIndex)}
  }

  return(
    <div className="flex h-screen w-full p-8">
      <LeftPanel title={cars[index].title} year={cars[index].year}/>
      <RightPanel next={handleNext} previous={handlePrevious} diesel={engine[index].diesel} dieselCapacity={engine[index].dieselCapacity} petrol={engine[index].petrol} petrolCapacity={engine[index].petrolCapacity} power={engine[index].power} currentIndex={index + 1} totalIndex={cars.length}/>
    </div>
  )
}

export default Models
