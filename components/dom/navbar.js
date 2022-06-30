import { useState } from 'react'
import Link from 'next/link'


const Navbar = () =>{

  const [showMenu, setShowMenu] = useState(false)
  let menu

  if(showMenu){
    menu =
    <div className="w-1/2 h-screen fixed top-0 right-0 flex flex-col bg-custom-gray bg-opacity-5 backdrop-blur-xl">
      <button className="absolute top-0 right-0 h-12 w-12 border-custom-white border flex justify-center items-center rounded-full m-8" onClick={() => {setShowMenu(!showMenu)}}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-6 -6 24 24" width="24" height="24" preserveAspectRatio="xMinYMin" className="jam jam-close"><path d='M7.314 5.9l3.535-3.536A1 1 0 1 0 9.435.95L5.899 4.485 2.364.95A1 1 0 1 0 .95 2.364l3.535 3.535L.95 9.435a1 1 0 1 0 1.414 1.414l3.535-3.535 3.536 3.535a1 1 0 1 0 1.414-1.414L7.314 5.899z' fill='#c2c4c3'/></svg>
      </button>
      <nav className="flex flex-col justify-center items-center h-screen">

        <ul className="flex flex-col flex-wrap h-1/2 w-full p-8">
          <li className="pb-6 flex items-end">
            <p className="text-lg px-1">01.</p>
            <Link href="/">HOME</Link>
          </li>

          <li className="pb-6 flex items-end">
            <p className="text-lg px-1">02.</p>
            <Link href="#">MODELS</Link>
          </li>

          <li className="pb-6 flex items-end">
            <p className="text-lg px-1">03.</p>
            <Link href="#">SERVICES</Link>
          </li>


          <li className="pb-6 flex items-end">
            <p className="text-lg px-1">04.</p>
            <Link href="#">BUY A TOYOTA</Link>
          </li>


          <li className="pb-6 flex items-end">
            <p className="text-lg px-1">05.</p>
            <Link href="#">ABOUT US</Link>
          </li>


          <li className="pb-6 flex items-end">
            <p className="text-lg px-1">06.</p>
            <Link href="#">CONTACT US</Link>
          </li>
        </ul>


        <div className="flex justify-between w-full absolute bottom-0 left-0 p-8">
          <p className="text-sm font-light">All rights reserved.2022</p>
          <div className="flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -4 24 24" width="24" height="24" preserveAspectRatio="xMinYMin" className="jam jam-twitter"><path d='M20 1.907a8.292 8.292 0 0 1-2.356.637A4.07 4.07 0 0 0 19.448.31a8.349 8.349 0 0 1-2.607.98A4.12 4.12 0 0 0 13.846.015c-2.266 0-4.103 1.81-4.103 4.04 0 .316.036.625.106.92A11.708 11.708 0 0 1 1.393.754a3.964 3.964 0 0 0-.554 2.03c0 1.403.724 2.64 1.824 3.363A4.151 4.151 0 0 1 .805 5.64v.05c0 1.958 1.415 3.591 3.29 3.963a4.216 4.216 0 0 1-1.08.141c-.265 0-.522-.025-.773-.075a4.098 4.098 0 0 0 3.832 2.807 8.312 8.312 0 0 1-5.095 1.727c-.332 0-.658-.02-.979-.056a11.727 11.727 0 0 0 6.289 1.818c7.547 0 11.673-6.157 11.673-11.496l-.014-.523A8.126 8.126 0 0 0 20 1.907z' fill='#c2c4c3'/></svg>

            <div className="w-2"/>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="24" height="24" preserveAspectRatio="xMinYMin" className="jam jam-instagram"><path d='M14.017 0h-8.07A5.954 5.954 0 0 0 0 5.948v8.07a5.954 5.954 0 0 0 5.948 5.947h8.07a5.954 5.954 0 0 0 5.947-5.948v-8.07A5.954 5.954 0 0 0 14.017 0zm3.94 14.017a3.94 3.94 0 0 1-3.94 3.94h-8.07a3.94 3.94 0 0 1-3.939-3.94v-8.07a3.94 3.94 0 0 1 3.94-3.939h8.07a3.94 3.94 0 0 1 3.939 3.94v8.07z' fill='#c2c4c3'/><path d='M9.982 4.819A5.17 5.17 0 0 0 4.82 9.982a5.17 5.17 0 0 0 5.163 5.164 5.17 5.17 0 0 0 5.164-5.164A5.17 5.17 0 0 0 9.982 4.82zm0 8.319a3.155 3.155 0 1 1 0-6.31 3.155 3.155 0 0 1 0 6.31z' fill='#c2c4c3'/><circle cx='15.156' cy='4.858' r='1.237' fill='#c2c4c3'/></svg>

            <div className="w-2"/>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-7 -2 24 24" width="24" height="24" preserveAspectRatio="xMinYMin" className="jam jam-facebook"><path d='M2.046 3.865v2.748H.032v3.36h2.014v9.986H6.18V9.974h2.775s.26-1.611.386-3.373H6.197V4.303c0-.343.45-.805.896-.805h2.254V0H6.283c-4.34 0-4.237 3.363-4.237 3.865z' fill='#c2c4c3'/></svg>

            <div className="w-2"/>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -5 24 24" width="24" height="24" preserveAspectRatio="xMinYMin" className="jam jam-envelope"><path d='M3.598 2l5.747 5.12a1 1 0 0 0 1.33 0L16.423 2H3.598zM18 3.273l-5.994 5.341a3 3 0 0 1-3.992 0L2 3.254V12h16V3.273zM2 0h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z' fill='#c2c4c3'/></svg>
          </div>
          <p className="text-sm font-light">Site Credits</p>
        </div>
      </nav>
    </div>
  }


  return(
    <nav className="absolute top-0 left-0 w-full flex justify-between p-8 z-100">
      <button>
        <svg width="57.6" height="37.152" version="1.1" viewBox="0 0 400 258.8" xmlns="http://www.w3.org/2000/svg">
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
