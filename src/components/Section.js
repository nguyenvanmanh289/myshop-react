import { memo } from "react";
//import image 
import image from "./images/image1.webp"
import bigbanner from "./images/big-banner.jpg";
import deals from "./images/deals.jpg"
import obspr1 from "./images/obs-pr1.jpg";
import obspr2 from "./images/obs-pr2.jpg";
import smailbanner0 from "./images/smail-banner0.jpg";
import smailbanner1 from "./images/smail-banner1.jpg";
import smailbanner2 from "./images/smail-banner2.jpg";
import user from "./images/user.jpg";
import play from "./images/play.png"
//import style & icon
import "./style/Section.scss";
import { HiArrowSmRight } from "react-icons/hi";
//import module 
import Product from "./Product.js"
import FptPr from "./FptPr";
import Cv from "./Cv.js";

function Section(){
    return(
        <div id="main-section">
            <div id="banner">
                <div>
                    <p>New Collection</p>
                    <h1>The Great Fashion <br/>
                        Collection 2022</h1>
                    <p>Up to 40% Off Final Sale Items<br/>
                        Caught in the Moment!</p>
                    <button type="button">Shop Colection <HiArrowSmRight/></button>
                </div>
                <img id="big-banner" src={bigbanner} alt="big-banner" />
            </div>
            <div className="container">
            <div id="content">
                <div id="banner-sale">
                    <div id="square-banner-sale">
                            <img src={smailbanner0} alt="smailbanner0" />
                            <p>17% Discount</p>
                            <h1>Spring Colection <br/>Style To</h1>
                            <a href="">View Discounts <HiArrowSmRight/></a>
                    </div>
                    <div id="group-banner-sale">
                        <div id="smail-banner-sale1" >
                            <img src={smailbanner1} alt="smailbanner01" />
                            <p style={{color: "red"}}>Shop Women</p>
                            <h1>Up to 70% Off & <br/>Free Shipping</h1>
                            <a href="">View Discounts <HiArrowSmRight/></a>
                        </div>
                        <div id="smail-banner-sale2">
                            <img src={smailbanner2} alt="smailbanner2" />
                            <p>Shop Women</p>
                            <h1>Free Shipping Over <br/> Order $120</h1>
                            <a href="">View Discounts <HiArrowSmRight/></a>
                        </div>
                        <div id="smail-banner-sale3">
                            <img src={obspr2} alt="smailbanner3" />
                            <p>25% Discount</p>
                            <h1>Leather Saddle</h1>
                            <a href="">View Discounts <HiArrowSmRight/></a>
                        </div>
                    </div>
                </div>
                <div id="new-product">
                    <h1 id="title-np">New Products</h1>
                    <div id="hr-style">______</div>
                    <div id="mini-nav">
                        <ul>
                            <li>Featured</li>
                            <li>Trending</li>
                            <li>New Arrival</li>
                        </ul>
                    </div>
                    <div id="list-products">
                        <div className="div-lp"><Product productInfo={{link:image,nameProduct:"quan ao cac kieu",price:100,oldprice:200}} /></div>
                        <div className="div-lp"><Product productInfo={{link:image,nameProduct:"quan ao cac kieu",price:100,oldprice:200}} /></div>
                        <div className="div-lp"><Product productInfo={{link:image,nameProduct:"quan ao cac kieu",price:100,oldprice:200}} /></div>
                        <div className="div-lp"><Product productInfo={{link:image,nameProduct:"quan ao cac kieu",price:100,oldprice:200}} /></div>
                        <div className="div-lp"><Product productInfo={{link:image,nameProduct:"quan ao cac kieu",price:100,oldprice:200}} /></div>
                        <div className="div-lp"><Product productInfo={{link:image,nameProduct:"quan ao cac kieu",price:100,oldprice:200}} /></div>
                        <div className="div-lp"><Product productInfo={{link:image,nameProduct:"quan ao cac kieu",price:100,oldprice:200}} /></div>
                        <div className="div-lp"><Product productInfo={{link:image,nameProduct:"quan ao cac kieu",price:100,oldprice:200}} /></div>
                        <div className="div-lp"><Product productInfo={{link:image,nameProduct:"quan ao cac kieu",price:100,oldprice:200}} /></div>
                        <div className="div-lp"><Product productInfo={{link:image,nameProduct:"quan ao cac kieu",price:100,oldprice:200}} /></div>
                    </div>
                    <div id="deals">
                        <img id="deals-img" src={deals} alt="deals of the day" />
                        <p id="p1">Hurry up and Get 25% Discount</p>
                        <h1>Deals Of The Day</h1>
                        <p id="p2">Lorem ipsum dolor sit amet. consectetur adipisicing elit<br/>
                        sed do eiusmod yempor incididunt ut labore</p>
                        <div id="clock">
                            <div className="clock">-183<br/><span>Days</span></div>
                            <div className="space">:</div>
                            <div className="clock">-11<br/><span>Hrs</span></div>
                            <div className="space">:</div>
                            <div className="clock">-12<br/><span>Mins</span></div>
                            <div className="space">:</div>
                            <div className="clock">-12<br/><span>Secs</span></div>
                        </div>
                        <button id="deals-button">Shop Colection <HiArrowSmRight/></button>
                        <div id="container-play"><img id="play" src={play} alt="play" /></div>
                    </div>
                </div>
                <div id="out-best-seller">
                    <h1 id="obs-title">Our Best Seller</h1>
                    <div id="obs-hr">______</div>
                    <div id="obs-top-sale">
                        <div className="div-ts"><Product productInfo={{link:image,nameProduct:"quan ao cac kieu",price:100,oldprice:200}} /></div>
                        <div className="div-ts"><Product productInfo={{link:image,nameProduct:"quan ao cac kieu",price:100,oldprice:200}} /></div>
                        <div className="div-ts"><Product productInfo={{link:image,nameProduct:"quan ao cac kieu",price:100,oldprice:200}} /></div>
                        <div className="div-ts"><Product productInfo={{link:image,nameProduct:"quan ao cac kieu",price:100,oldprice:200}} /></div>
                        <div className="div-ts"><Product productInfo={{link:image,nameProduct:"quan ao cac kieu",price:100,oldprice:200}} /></div>
                    </div>
                    <div id="obs-pr-sale">
                        <div>
                            <img src={obspr1} alt="obspr1" />
                            <p>Pick Your Items </p>
                            <h1>Up to 25% Off Order Now</h1>
                            <a href="#list-products" style={{color: "gray"}}>Shop now</a>                          
                        </div>
                        <div>
                            <img src={obspr2} alt="obspr2" />
                            <p>Special offer</p>
                            <h1>Up to 35% Off Order Now</h1>
                            <a href="#list-products" style={{color: "gray"}}>Discover now</a>
                        </div>
                    </div>
                </div>
                <div id="out-clients-say">
                    <h1 id="ocs-title">Our Clients Say</h1>
                    <div id="ocs-hr">______</div>
                    <div id="ocs-mini-cv">
                        <div className="cv-item"><Cv infoUser={{image:user,title:"nguyen van a",content:"lorem ipsum dolor sit amet consecteru adiipiscin elit sed do eisumod tempor incididunt ut labore et dolore magaa aliqua Ut enim ad minim"}}/></div>
                        <div className="cv-item"><Cv infoUser={{image:user,title:"nguyen van b",content:"lorem ipsum dolor sit amet consecteru adiipiscin elit sed do eisumod tempor incididunt ut labore et dolore magaa aliqua Ut enim ad minim"}}/></div>
                        <div className="cv-item"><Cv infoUser={{image:user,title:"nguyen van c",content:"lorem ipsum dolor sit amet consecteru adiipiscin elit sed do eisumod tempor incididunt ut labore et dolore magaa aliqua Ut enim ad minim"}}/></div>
                    </div>
                    <ul id="pagination">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <div id="ocs-pr">
                        <img src={bigbanner} alt="ocs-pr" />
                        <h1>Need Winter Boots?</h1>
                        <p>lorem ipsum dolor sit amet , consectetur adipiscing alit, sed do<br/>
                        eiusmod tempor incididunt ut labore et dolore magna aliqua<br/>
                        enim ad minim veniam, quis mostrud exercitation</p>
                        <div id="ocs-button">Shop Now <HiArrowSmRight/> </div>
                    </div>
                </div>
                <div id="from-the-blog">
                    <h1 id="ftb-title">From The Blog</h1>
                    <div id="ftb-hr">______</div>
                    <div id="ftb-pr">
                        <div id='ftbscroll'>
                            <div className="ftb-pr-item"><FptPr fptInfo={{link:image,nameFpt:'nguyen van manh'}}/></div>
                            <div className="ftb-pr-item"><FptPr fptInfo={{link:image,nameFpt:'nguyen van manh'}}/></div>
                            <div className="ftb-pr-item"><FptPr fptInfo={{link:image,nameFpt:'nguyen van manh'}}/></div>
                            <div className="ftb-pr-item" id="ftb-last"><FptPr fptInfo={{link:image,nameFpt:'nguyen van manh'}}/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default memo(Section);