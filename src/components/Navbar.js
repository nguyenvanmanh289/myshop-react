import "./style/Navbar.scss";
import Dropdownbox from "./Dropdownbox";
import { memo } from "react";
import React, { useState,useEffect } from "react";

import { FaSearch,FaWpexplorer } from 'react-icons/fa';
import { FaRegUser,FaRegEnvelope,FaBars } from "react-icons/fa";
import { RiHeartLine } from "react-icons/ri";
import { CiShoppingCart} from "react-icons/ci";
import { GiShoppingCart } from "react-icons/gi";
import { SiDarkreader } from "react-icons/si";
import { AiOutlineClose } from "react-icons/ai";

import logoUk from "./images/united-kingdom.png";
import logoUs from "./images/united-states.png";


function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false);
    const [hiddenTop,setHiddenTop] = useState(false);
  const handleMenuOpen = () => {
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  useEffect(()=>{
    const checkWidth =()=>{
        if(window.innerWidth<1024 && window.innerWidth>765)
         setHiddenTop(true);
         else setHiddenTop(false);
    }
    window.addEventListener('resize',checkWidth)
  },[])
  useEffect(()=>{
    if (window.innerWidth > 1024) 
        setMenuOpen(true);

    const handleChangWidth =()=>{
        if (window.innerWidth > 1024) {
            setMenuOpen(true);
        }
        else setMenuOpen(false);
    }
        window.addEventListener('resize',handleChangWidth);
    }
    ,[])
 

    return(    
        <div className="header row gy-0" >
            {menuOpen && <div className="menuBar"onClick={handleMenuClose}>
                <div id="close-menu" onClick={handleMenuClose}><AiOutlineClose/></div>
            </div>}
            <div className="navbar-top row">
                <ul className="col-6">
                    <li id="only-top">Welcome to Netmark online store</li><li>|</li>
                    {hiddenTop &&<>
                    <li id="in-menu-bottom1"><FaWpexplorer/></li>
                    <li id="in-menu-bottom2">Track Your Order</li><li>|</li>
                    <li id="in-menu-bottom3"><FaRegEnvelope/></li> 
                    <li id="in-menu-bottom4">demo@gmail.com</li></>}
                    {menuOpen &&<>
                    <li id="in-menu-bottom1"><FaWpexplorer/></li>
                    <li id="in-menu-bottom2">Track Your Order</li><li>|</li>
                    <li id="in-menu-bottom3"><FaRegEnvelope/></li> 
                    <li id="in-menu-bottom4">demo@gmail.com</li></>}
                    
                </ul>
                
                {menuOpen && <ul className="col-2 country">
                        <li><img src={logoUk}/></li>
                        <li>English</li><li>|</li>
                        <li><img src={logoUs}/></li>
                        <li>$ US Dollar</li>
                </ul>}
            </div>

            <div className="navbar-mid row">
                <ul className="d-flex row" >
                    <div id='menu-button'onClick={handleMenuOpen} className="col-3" style={{color: 'black'}}><FaBars/></div>
                    <div id="logo" className="col-3">
                        <li id="logoBanner"><GiShoppingCart/></li>
                        <li>SURUKI</li>
                    </div>

                    {menuOpen &&<li id="inputData" className="d-flex col-4">
                        <select>
                            <option value="AllCategories">AllCategories</option>
                            <option value="Categories1">Categories1</option>
                            <option value="Categories2">Categories2</option>
                            <option value="Categories3">Categories3</option>
                        </select>
                        <input type="text" name="search" placeholder="Keyword here..."/>
                        <button><FaSearch/></button>
                    </li>}
                    
                    <li className="d-flex service col-3"style={{color: "gray"}}>
                        <div className="col-3" >
                            <i><FaRegUser/></i>
                            <p>My Account</p>
                        </div>
                        <div  className="col-3">
                            <i><RiHeartLine/></i>
                            <p>Wish List</p>
                        </div>
                        {menuOpen &&<div id="mycart" className="col-3">
                            <i><CiShoppingCart/></i>
                            <p>My cart</p>
                        </div>}
                    </li>

                </ul>
            </div>

           {menuOpen && <div className="navbar-bot">
                <ul >
                    <li>
                        <Dropdownbox options={["Home","home1","home2"]}/>
                    </li>
                    <li>
                        <Dropdownbox options={["Shop","shop1","shop2"]}/>
                    </li>
                    <li>About Us</li>
                    <li>
                        <Dropdownbox options={["Blog","blog1","blog2"]}/>   
                    </li>
                    <li>Ctegories</li>
                    <li>
                        <Dropdownbox options={["Page","page1","page2"]}/>
                    </li>
                    <li>Contact</li>
                                          
                </ul>
                <ul>
                    <li style={{color: "red"}}><SiDarkreader/></li>
                    <li>Special Up to 60% off for All Itemt</li>
                </ul>

            </div>}
        
        </div>
    
    )
}

export default memo(Navbar);