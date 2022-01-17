import Navbar from '../dom/navbar'

const Layout = ({ children }) =>{
  return(
    <div>
      <Navbar/>
      {children}
    </div>
  )
}

export default Layout
