import { Link,useNavigate } from "react-router-dom";
import books from "../assets/books.jpg"


const Banner = () => {
    const navigate=useNavigate();
    return (<>
        <div className="flex flex-col md:flex-row md:flex-row max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white ">

            <div className="w-full md:w-1/2 mt-12 md:mt-32   md:order-1 order-2">
                <div className="space-y-6">
                    <h1 className=" text-4xl font-bold">Hello,Welcome Here To Learn
                        <br />    Something <span className="text-pink-500">new everyday!!!</span></h1>
                    <p className="text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias fuga magnam ullam ad? Earum, natus?</p>
                    <fieldset className="w-full ">
                        <input type="text" className="input outline-none dark:bg-slate-900 dark:text-white dark:border-white" placeholder="Type here" />
                    </fieldset>
                </div>
                <div className="mt-8">
                    <button 
                    className="bg-pink-500 px-3 py-2 rounded cursor-pointer text-white active:bg-pink-600 "
                    onClick={()=>navigate("/courses")}>
                        Get Started
                    </button>
                </div>
            </div>
            <div className="order-1 w-full md:w-1/2 mt-8 md:mt-8 dark:bg-slate-900 dark:text-white">
                <img src={books} className="w-full" alt="" />
            </div>
        </div>
    </>)
}
export default Banner;