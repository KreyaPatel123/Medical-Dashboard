// import { FaFacebook } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { FcGoogle } from "react-icons/fc";
// import { Link } from "react-router-dom";
// const Login = ()=>{
// return(
//     <div className="flex flex-row w-full h-full  relative  overflow-x-hidden overflow-y-hidden justify-between">
//     <div className=" relative w-[1000px] h-screen   ">
//     <img src="../first1.jpeg" className="w-[1000px] h-screen rounded-[52px] absolute left-[-42px]  "/>
//     </div>


//     <div className=" w-[700px] h-[700px]  flex flex-col mt-[140px]  gap-5 rounded-[22px] shadow-[0_12px_15px_-2px_rgba(0,0,0,0.1)]
//     mr-[120px] p-14">
//            <div className="flex flex-row mt-7 mb-7">
//                 <img src="../image.png" className="w-10 h-10 mr-2"/> 
//                 <p className=" text-blue-900 text-3xl font-bold  ">Pre Clinic</p>
//            </div>

//            <div className="flex flex-col gap-5">
//            <h1 className="font-bold text-3xl mb-5">Login</h1>
//           <fieldset className=" border-[2px] border-gray-300  rounded-[10px] ">
//             <legend className="text-md font-mono">Email</legend>
//             <input
//               type="email"         
//               className="w-full outline-none mb-2 p-1 border-none bg-transparent"
//             />
//           </fieldset>

//             <fieldset className=" border-[2px] border-gray-300  rounded-[10px]  ">
//             <legend className="text-md  font-mono">Password</legend>
//             <input
//               type="password"         
//               className="w-full outline-none mb-2 p-1 border-none bg-transparent"
//             />
//           </fieldset>

//             {/* <fieldset className="border border-black p-3 rounded-md relative">
//             <legend className="text-sm">Password</legend>
//             <input
//               type="password"
//               placeholder="Enter Password"
//               className="w-full outline-none"
//             />
//           </fieldset>           */}

//            <div className="flex flex-row justify-between mt-2 mb-5 ">
//            <div className="flexflex-row">
//            <input type="checkbox"  className="hover:cursor-pointer m-1 bg-transparent p-10"/><span>Remember Me</span>
//            </div>
//            <a href="#" className="text-blue-700 font-bold hover:font-bold cursor-pointer">Forgot Password?</a>
//            </div>

//           <Link to="/Home">
//            <button className="w-full bg-blue-700 p-3 rounded-[10px] text-white font-mono text-[20px]
//                             hover:font-bold ">
//             Login
//            </button>
//           </Link>


//            <div className="flex flex-row  items-center justify-between">
//            <div className="mt-6">
//               <p className="font-bold text-gray-400 justify-center items-center flex">Need an account?<a href="#" className="text-blue-700">Sign up</a></p>
//             </div>
//               <div className="flex flex-row items-center justify-center gap-2 mt-7 ">
//                 <div className="w-[50px] h-[50px] bg-gray-200 rounded-[10px] flex items-center justify-center">
//                   <FcGoogle className="w-[30px] h-[30px]" />
//                 </div>

//                 <div className="w-[50px] h-[50px] bg-gray-200 rounded-[10px] flex items-center justify-center">
//                   <FaFacebook className="text-blue-600 w-[30px] h-[30px]" />
//                 </div>

//                 <div className="w-[50px] h-[50px] bg-gray-200 rounded-[10px] flex items-center justify-center">
//                   <FaTwitter className="text-[#1DA1F2] w-[30px] h-[30px] "/>
//                 </div>
//               </div>     
//            </div>
//       </div>

//     </div>
// </div>  
// )}
// export default Login; 


import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !password) {
      setError("Please enter both email and password.");
    } else if (!emailRegex.test(email)) {
      setError("Please enter a valid email.");
    } else {
      setError("");
      // Navigate only if valid
      navigate("/Home");
    }
  };

  return (
    <div className="flex flex-row w-full h-full relative overflow-x-hidden overflow-y-hidden justify-between">
      <div className="relative w-[1000px] h-screen">
        <img
          src="../first1.jpeg"
          className="w-[1000px] h-screen rounded-[52px] absolute left-[-42px]"
        />
      </div>

      <div className="w-[700px] h-[700px] flex flex-col mt-[140px] gap-5 rounded-[22px] shadow-[0_12px_15px_-2px_rgba(0,0,0,0.1)] mr-[120px] p-14">
        <div className="flex flex-row mt-7 mb-7">
          <img src="../image.png" className="w-10 h-10 mr-2" />
          <p className="text-blue-900 text-3xl font-bold">Pre Clinic</p>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="font-bold text-3xl mb-5">Login</h1>

          <fieldset className="border-[2px] border-gray-300 rounded-[10px]">
            <legend className="text-md font-mono">Email</legend>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full outline-none mb-2 p-1 border-none bg-transparent"
            />
          </fieldset>

          <fieldset className="border-[2px] border-gray-300 rounded-[10px]">
            <legend className="text-md font-mono">Password</legend>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full outline-none mb-2 p-1 border-none bg-transparent"
            />
          </fieldset>

          {error && <p className="text-red-600 font-semibold">{error}</p>}

          <div className="flex flex-row justify-between mt-2 mb-5">
            <div className="flex flex-row">
              <input
                type="checkbox"
                className="hover:cursor-pointer m-1 bg-transparent p-10"
              />
              <span>Remember Me</span>
            </div>
            <a
              href="#"
              className="text-blue-700 font-bold hover:font-bold cursor-pointer"
            >
              Forgot Password?
            </a>
          </div>

          <button
            onClick={handleLogin}
            className="w-full bg-blue-700 p-3 rounded-[10px] text-white font-mono text-[20px] hover:font-bold"
          >
            Login
          </button>

          <div className="flex flex-row items-center justify-between">
            <div className="mt-6">
              <p className="font-bold text-gray-400 justify-center items-center flex">
                Need an account? che Need
                <a href="#" className="text-blue-700">
                  Sign up
                </a>
              </p>
            </div>
            <div className="flex flex-row items-center justify-center gap-2 mt-7">
              <div className="w-[50px] h-[50px] bg-gray-200 rounded-[10px] flex items-center justify-center">
                <FcGoogle className="w-[30px] h-[30px]" />
              </div>
              <div className="w-[50px] h-[50px] bg-gray-200 rounded-[10px] flex items-center justify-center">
                <FaFacebook className="text-blue-600 w-[30px] h-[30px]" />
              </div>
              <div className="w-[50px] h-[50px] bg-gray-200 rounded-[10px] flex items-center justify-center">
                <FaTwitter className="text-[#1DA1F2] w-[30px] h-[30px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
