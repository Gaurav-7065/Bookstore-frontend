import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';
const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit =async(data)=>{ 
        
        const user={
            email:data.email,
            password:data.password
        }
       
        await axios.post('https://book-store-backend-sigma.vercel.app/user/login',user).
        then((res)=>{
            
            if(res.data){
                
                toast.success("loged in successfully");
                localStorage.setItem("User",JSON.stringify(res.data.user));
                document.getElementById("my_modal_3").close();
                setTimeout(()=>{
                    window.location.reload();
                },2000)
         
                
            }
        }).catch((err)=>{
            if(err.response){
                toast.error("Error: "+err.response.data.message);
            }

        })
    }
    return (<>
        <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}

            <dialog id="my_modal_3" className="modal">
                <div className="modal-box dark:bg-slate-700 dark:text-white">
                    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                        {/* if there is a button in form, it will close the modal */}
                        <button
                            type='button'
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={() => {
                                document.getElementById("my_modal_3").close();
                            }}
                        >✕</button>
                        <h3 className="font-bold text-lg">Login</h3>
                        <div className="flex flex-col space-y-6 mt-2">
                            <div className="flex flex-col">
                                <label htmlFor="">Email</label>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="px-4 py-2 border rounded outline-none "
                                    {...register("email", { required: true })}
                                />
                                {errors.email?.type === 'required' && <p role="alert" className='text-sm text-red-500'>Email is required</p>}
                            </div>
                            <div className="flex flex-col   ">
                                <label>Password</label>
                                <input type="password"
                                    placeholder="Password"
                                    className="px-4 py-2 border rounded outline-none"
                                    {...register("password", { required: true })}
                                />
                                {errors.password?.type === 'required' && <p role="alert" className='text-sm text-red-500'>Password is Required</p>}
                            </div>
                            <div className="flex justify-around cursor-pointer">
                                <button className="px-3 py-1 bg-pink-500 cursor-pointer rounded hover:bg-pink-700">Login</button>
                                <p >Not Registered? <Link 
                                 to='/Signup'
                                 className="text-blue-500 underline hover:text-blue-600"
                                 onClick={()=>{
                                    document.getElementById("my_modal_3").close();
                                 }}
                                >Signup</Link></p>
                            </div>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    </>)
}
export default Login;