import React from "react";
import { useState } from "react";
import './nav.css'
// import  from 
import { AiOutlineUser } from "react-icons/ai"; 
import {AiOutlineHome} from "react-icons/ai";
import {BsCodeSlash} from "react-icons/bs";
import {RiServiceLine} from "react-icons/ri"
import {AiOutlinePhone} from "react-icons/ai";
function Nav(){
       const [nav,setnav]=useState('#');
return (
    <nav>
                    <a     onClick={()=>setnav('#')}      className={nav==='#'? 'active': ''}  href="#"><AiOutlineHome/></a>
                    <a href="#about" onClick={()=>setnav('#about')} className={nav=='#about'? 'active':''}><AiOutlineUser/></a>
                    <a href="#experience" onClick={()=>setnav('#experience')} className={nav=='#experience'? 'active':''} ><BsCodeSlash/></a>
                    <a href="#services" onClick={()=>setnav('#services')} className={nav=='#services'? 'active':''}><RiServiceLine/></a>
                    <a href="#contact" onClick={()=>setnav('#contact')} className={nav=='#contact'? 'active':''}><AiOutlinePhone/></a>
    </nav>
)

}

export default Nav;