import { useAuth } from "../context/AuthProvider.jsx";
import toast from "react-hot-toast";

function Logout(){
    const [Authuser,setAuthUser]=useAuth();
    const handleLogout=()=>{
        try{
            localStorage.removeItem("User");
            setAuthUser(null)
            toast.success("logged out successfully")
            setTimeout(()=>{
             window.location.reload();
            },3000);
        }  
        catch(err){
            toast.error("Error: "+err);
            setTimeout(()=>{},2000);
        }
    }
    return(
        <div>
            <button 
            className="px-2 py-1 ml-4 rounded-md bg-red-400 text-white cursor-pointer"
            onClick={handleLogout}
            >Logout</button>
        </div>
    )
}
export default Logout;