import Contact from "./contact"
import Course from "./Course"
import Footer from "./Footer"
import NavBar from "./NavBar"

const Contacts=()=>{
    return(<>
    <NavBar/>
    <div className="min-h-screen">
        <Contact/>
    </div>
    <Footer/>
     

    </>)

}
export default Contacts;