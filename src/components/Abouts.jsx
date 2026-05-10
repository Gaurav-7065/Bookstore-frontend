import About from "./About"
import Footer from "./Footer"
import NavBar from "./NavBar"

const Abouts=()=>{
    return<>
        <NavBar/>
        <div className="min-h-screen p-32">
            <About/>
        </div>
        
        <Footer/>
    </>

}
export default Abouts