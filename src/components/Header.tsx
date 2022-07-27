import React from "react";
import { Link } from "react-router-dom";


const Header = () =>{


    return(
       <>
       
       <section className="flex">

        
        <span className="flex py-5 ml-10 text-white">NFT<span className="text-fuchsia-500 bold">aways</span></span> 
 
       
        <Link to="/">retornar a página inicial</Link>

       <section className=" w-screen  px-4 py-5 flex justify-center">
            <div className="w-12 h-8 mr-8 text-white">Discover</div>
            <div className="w-12 h-8 mr-8 text-white">Products</div>
            <div className="w-14 h-8 mr-12 text-white">Markteplace</div>
            <Link to='/Explore' className="w-12 h-8  text-white">Explore</Link>  
       </section>
       <button className=" rounded-sm self-auto bg-blue-900 mr-8 px-6 mt-4 mb-8  text-white   justify-end whitespace-nowrap">
        Create Account
       </button>
       </section>
       </>
    );
}

export default Header;