import Login from './Login.jsx';
import { Link, Navigate,useNavigate,useLocation } from 'react-router-dom'
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';
const Signup = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
    const { register, handleSubmit, formState: { errors } } = useForm();
        const onSubmit =async(data)=>{ 
            const user={
            fullname:data.fullname,
            email:data.email,
            password:data.password
        }
        await axios.post('https://book-store-backend-sigma.vercel.app/user/signup',user).
        then((res)=>{
            if(res.data){
               
                toast.success("Signup Successfully")
                navigate(from, { replace: true });
            }
            localStorage.setItem("User: ",JSON.stringify(res.data.user));
        }).catch((err)=>{
            if(err.response){
               
                toast.error("Error: "+err.response.data.message)
            }

        })
        
    }

    return (<>
        <div className='flex h-screen justify-center items-center '>
            <div >
                <div className="relative model-box w-64  md:w-92  dark:bg-slate-700 dark:text-white p-8 rounded">
                    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                        {/* if there is button button in form, it will close the modal */}
                        <Link to="/"><button type='button' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button></Link>

                        <h3 className="font-bold text-lg">SignUp</h3>
                        <br />
                        <div className="flex flex-col space-y-1">
                            <div className="flex flex-col">
                                <label htmlFor="">Name</label>
                                <input type="text"
                                    placeholder="Email"
                                    className="px-4 py-2 border rounded outline-none  "
                                    {...register("fullname", { required: true })}

                                />
                                {errors.fullname?.type === 'required' && <p role="alert" className='text-sm text-red-500'>Username is required</p>}
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="">Email</label>
                                <input type="email"
                                    placeholder="Email"
                                    className="px-4 py-2 border rounded outline-none  "
                                    {...register("email", { required: true })}
                                />
                                {errors.email?.type === 'required' && <p role="alert" className='text-sm text-red-500'>Email is required</p>}
                            </div>
                            <div className="flex flex-col">
                                <label>Password</label>
                                <input type="password"
                                    placeholder="Password"
                                    className="px-4 py-2 border rounded outline-none"
                                    {...register("password", { required: true })}
                                />
                                {errors.password?.type === 'required' && <p role="alert" className='text-sm text-red-500'>Password is required</p>}
                            </div>
                            <div className="flex justify-between ">
                                <button className=" px-1 md:px-3 md:py-1 bg-pink-500 cursor-pointer rounded hover:bg-pink-600 cursor-pointer hover:bg-pink-700">Signup</button>
                                <div>
                                    <p >Have Registered?</p>
                                 
                                    <button type='button' className="text-blue-500 underline hover:text-blue-600 cursor-pointer"
                                        onClick={() =>
                                            document.getElementById("my_modal_3").showModal()
                                        }
                                    >Login</button>
                                    
                                </div>
                            </div>

                        </div>
                    </form>
                    <Login />
                </div>

            </div>

        </div>
    </>)

}
export default Signup;