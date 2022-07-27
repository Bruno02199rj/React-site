import React from "react";
import {VscGithub } from 'react-icons/vsc'
import {SiTelegram} from 'react-icons/si'
import {AiFillInstagram} from 'react-icons/ai'
import {TiSocialSkype} from 'react-icons/ti'
import {FaFacebook} from 'react-icons/fa'
import {BsReddit} from 'react-icons/bs'

function Nav() {


   return (
      <section>
         <nav className="mt-52 h-72 w-6 ml-4">
               <div className="bg-black rounded-full  w-10 h-8 inline-block">
                  <VscGithub className="ml-2 bg-white rounded-lg border-solid" style={{ marginTop: '2px' }} size={25}/>
            </div>
            <div className=" rounded-full mt-4  w-10 h-8 inline-block  bg-black">
                  <SiTelegram className="ml-2 bg-white rounded-lg " size={25} style={{ marginTop: '2px' }}/>
            </div>
            <div className="bg-black rounded-full  w-10 h-8 inline-block mt-4">
                  <AiFillInstagram className="ml-2 bg-white rounded-lg " size={25} style={{ marginTop: '2px' }}/>
            </div>
            <div className="bg-black rounded-full  w-10 h-8 inline-block mt-4">
                  <TiSocialSkype className="ml-2 bg-white rounded-lg " size={25} style={{ marginTop: '2px' }}/>
            </div>
            <div className="bg-black rounded-full  w-10 h-8 inline-block mt-4">
                  <FaFacebook  className="ml-2 bg-white rounded-lg " size={25} style={{ marginTop: '2px' }}/>
            </div>
            <div className="bg-black rounded-full  w-10 h-8 inline-block mt-4">
                  <BsReddit className="ml-2 bg-white rounded-lg " size={25} style={{ marginTop: '2px' }}/>
            </div>
         </nav>
      </section>
   );

}

export default Nav;