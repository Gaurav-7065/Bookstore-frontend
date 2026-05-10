const Contact=()=>{
    return(<>
       <div className="flex justify-center items-center h-screen ">
          <div className="flex flex-col p-8 rounded-xl shadow-xl border border-amber-500">
            <h1 className="font-semibold text-2xl">Contact Us</h1>
            <span>Name</span>
            
            <input 
            type="text"
            placeholder="Name"
            className="px-2  outline-none border rounded"
             />
             <br />
              <span>Email</span>
            <input 
            type="email"
            placeholder="Email Address"
            className="px-2  outline-none border rounded"

             />
             <br />
              <span>Message</span>  
             <textarea name="message" rows="2" cols="25" placeholder="Enter your message here" className="px-2  outline-none border rounded"></textarea>   
             <button className="py-2 bg-blue-500 hover:bg-blue-700  rounded text-white mt-4 cursor-pointer">Submit</button>
            
          </div>
       </div>
    </>)
}
export default Contact;