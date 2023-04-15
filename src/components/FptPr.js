import { memo } from "react";
import "./style/Product.scss";

function FptPr({fptInfo}){
    const { link, nameFpt } = fptInfo;

    return(   
            <div id='main-product'>
                <img src={link} alt="product" />
                <div id="info">
                    <p>jacket,Women</p>
                    <h1 id="name">{nameFpt}</h1>
                    <div id="product-service">
                        <div id="add-to-car">
                            <span id="add-text">Read More</span>
                        </div>
                    </div>          
                </div>
            </div>    
    )
}

export default memo(FptPr);