import { useState } from 'react'
import Link from 'next/link'


const Navbar = () =>{

  const [showMenu, setShowMenu] = useState(false)
  let menu

  if(showMenu){
    menu =
    <div className="w-1/2 h-screen absolute top-0 right-0 flex flex-col bg-custom-gray z-10">
      <button className="absolute top-0 right-0 h-12 w-12 border-custom-white border flex justify-center items-center rounded-full m-8" onClick={() => {setShowMenu(!showMenu)}}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-6 -6 24 24" width="24" height="24" preserveAspectRatio="xMinYMin" className="jam jam-close"><path d='M7.314 5.9l3.535-3.536A1 1 0 1 0 9.435.95L5.899 4.485 2.364.95A1 1 0 1 0 .95 2.364l3.535 3.535L.95 9.435a1 1 0 1 0 1.414 1.414l3.535-3.535 3.536 3.535a1 1 0 1 0 1.414-1.414L7.314 5.899z' fill='#c2c4c3'/></svg>
      </button>
      <nav className="flex flex-col justify-center items-center h-screen">
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="#">Models</Link></li>
          <li><Link href="#">Services</Link></li>
          <li><Link href="#">Buy A Toyota</Link></li>
          <li><Link href="#">About Us</Link></li>
          <li><Link href="#">Contact Us</Link></li>
        </ul>
      </nav>
    </div>
  }


  return(
    <nav className="absolute top-0 left-0 w-full flex justify-between p-8">
      <button>
        <svg width="48" height="30.96" version="1.1" viewBox="0 0 400 258.8" xmlns="http://www.w3.org/2000/svg">
         <path d="m200 0c-110.45 0-200 57.931-200 129.37 0 71.468 89.552 129.43 200 129.43 110.45 0 200-57.931 200-129.43 0-71.494-89.552-129.37-200-129.37zm0 203.26c-16.428 0-29.833-32.356-30.674-73.071 9.883 0.86735 20.16 1.3405 30.674 1.3405s20.791-0.47304 30.674-1.3405c-0.84111 40.689-14.246 73.071-30.674 73.071zm-28.65-105.4c4.4684-28.782 15.613-49.205 28.65-49.205s24.182 20.423 28.65 49.205c-9.1733 0.81479-18.741 1.2617-28.65 1.2617-9.9093 0-19.477-0.4468-28.65-1.2617zm28.65-79.143c-21.448 0-39.742 32.12-46.498 76.962-40.662-6.3346-69.05-20.791-69.05-37.587 0-22.657 51.728-41.03 115.55-41.03 63.819 0 115.55 18.373 115.55 41.03 0 16.796-28.387 31.252-69.05 37.587-6.7552-44.842-25.049-76.962-46.498-76.962zm-171.32 105.82c0-21.921 8.4373-42.502 23.131-60.166-0.15746 1.2354-0.2631 2.497-0.2631 3.7587 0 27.625 41.425 51.176 99.225 59.85-0.0538 1.9977-0.0538 4.0216-0.0538 6.0455 0 51.492 14.43 95.098 34.38 109.9-87.659-5.2832-156.42-56.722-156.42-119.38zm186.23 119.38c19.95-14.798 34.38-58.405 34.38-109.9 0-2.0502-0.0269-4.0478-0.0538-6.0455 57.774-8.6739 99.225-32.199 99.225-59.85 0-1.2617-0.10497-2.5233-0.2631-3.7587 14.693 17.716 23.131 38.244 23.131 60.166 0 62.663-68.761 114.1-156.42 119.38z" fill="#c2c4c3"/>
        </svg>
      </button>

      <button className="h-12 w-12 border-custom-white border rounded-full flex justify-center items-center" onClick={() => {setShowMenu(!showMenu)}}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -7 24 24" width="24" height="24" preserveAspectRatio="xMinYMin" className="jam jam-menu"><path d='M1 0h5a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2zm7 8h5a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2zM1 4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2z' fill='#c2c4c3'/></svg>
      </button>
      {menu}
    </nav>
  )
}

export default Navbar
