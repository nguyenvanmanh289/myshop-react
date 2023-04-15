import { memo } from "react";
import { FaStar } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { HiOutlineHeart,HiEye } from "react-icons/hi";
import "./style/Product.scss";

import { useState } from "react";

function Product({productInfo}){
    const { link, nameProduct, price, oldprice, levelStar } = productInfo;
    console.log(link);
    const [liked,setliked] = useState(false);
    const [hided,setHided] = useState(false);
  
    const Liker=()=>{
        if(!liked) setliked(true);
        else setliked(false);      
    }

    return(   
            <div id='main-product'>
                <img src={link} alt="product" />
                <div id="info">
                    <p>jacket,Women</p>
                    <h1 id="name">{nameProduct}</h1>
                    <p id="price">${price} __<span style={{textDecoration: 'line-through'}}>${oldprice}</span></p>
                    <ul>
                        <li id="s1"><FaStar/></li>
                        <li id="s2"><FaStar/></li>
                        <li id="s3"><FaStar/></li>
                        <li id="s4"><FaStar/></li>
                        <li id="s5"><FaStar/></li>
                    </ul>
                    <div id="product-service">
                        <div id="add-to-car">
                            <span id="add-text"><FiShoppingCart/> <span id="text">+ add to cart</span></span>
                        </div>
                        <div id="like" onClick={Liker} style={{ color: liked ? 'red' : 'black' }}><HiOutlineHeart/></div>
                        <div id="hide"><HiEye/></div>
                    </div>
                    
                </div>
            </div>    
    )
}

export default memo(Product);