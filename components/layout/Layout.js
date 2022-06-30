import { CustomCursor } from '../dom/cursor'
import Navbar from '../dom/navbar'

const Layout = ({ children }) =>{
  return(
    <div>

      <Navbar/>
      <CustomCursor/>
      {children}
    </div>
  )
}

export default Layout
