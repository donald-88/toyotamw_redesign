const NavigationControls = () =>{
  return(
    <div className="flex justify-between items-center w-3/4 h-screen p-8">
      <button className="flex justify-center items-center h-20 w-20 border-custom-white border">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-8 -5 24 24" width="24" height="24" preserveAspectRatio="xMinYMin" className="jam jam-chevron-left"><path d='M2.757 7l4.95 4.95a1 1 0 1 1-1.414 1.414L.636 7.707a1 1 0 0 1 0-1.414L6.293.636A1 1 0 0 1 7.707 2.05L2.757 7z' fill='#c2c4c3'/></svg>
      </button>
      <button className="flex justify-center items-center h-12 w-12 border-custom-white border rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-8 -5 24 24" width="24" height="24" preserveAspectRatio="xMinYMin" className="jam jam-chevron-right"><path d='M5.314 7.071l-4.95-4.95A1 1 0 0 1 1.778.707l5.657 5.657a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 0 1-1.414-1.414l4.95-4.95z' fill='#c2c4c3'/></svg>
      </button>
    </div>
  )
}

export default NavigationControls
