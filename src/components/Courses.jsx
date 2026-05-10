import NavBar from "./NavBar";
import Footer from "./Footer";
import Course from "./Course";

const Courses=()=>{
    return (
        <>
         <NavBar/>
         <div className="min-h-screen">
           <Course/>
         </div>
         <Footer/>
        </>
    )

}
export default Courses;