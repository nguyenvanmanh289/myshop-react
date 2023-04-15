import { memo,useState,useEffect } from "react"
//import images
import "./style/Footer.scss";
import ins1 from "./images/ins1.jpg";
import ins2 from "./images/ins2.jpg";
import ins3 from "./images/ins3.jpg";
import ins4 from "./images/ins4.jpg";
import ins5 from "./images/ins5.jpg";
import ins6 from "./images/ins6.jpg";
import pay1 from "./images/pay1.jpg";
import pay2 from "./images/pay2.jpg";
import pay3 from "./images/pay3.webp";
import pay4 from "./images/pay4.png";
import pay5 from "./images/pay5.png";
import pay6 from "./images/pay6.png";
//import icon
import { BsFacebook,BsInstagram,BsYoutube,BsTwitter } from 'react-icons/bs';
import { MdKeyboardArrowDown } from "react-icons/md";
//import npm module method res/req 
import axios from 'axios';
function Footer(){
     // giả lập hover cho một nhãn label trên desktop
    const [hover,setHover]=useState({state:false,index:null});
    let shadow ={};
    shadow={boxShadow: "2px 2px 12px 2px white , -2px -2px 12px 2px white"};

    // sử đụng mội gói là npm axios để send datadata đến sẻver khi đã chống hành vi mặc định của form html khi submit 
    const [email, setEmailData] = useState(""); 
    const handleSubmit = event => {
        event.preventDefault(); // ngăn chặn hành vi mặc định của trình duyệt khi click submit
    
        axios.post('', email)
          .then(response => {
            // cập nhật trạng thái của ứng dụng
          })
          .catch(error => {
            console.error(error);
          });
      }

    //hide/show footer
    const [checkHide,setHidden]=useState(false);
    const [checkHide1,setHidden1]=useState(false);
    const [checkHide2,setHidden2]=useState(false);
    const [checkHide3,setHidden3]=useState(false);
    const [checkHide4,setHidden4]=useState(false);
    
    const [whoOnclick,setWho] = useState(null);

    const [displayNone,setDisplay]=useState({display: "none"});
    const [displayBlock,setDisplay1]=useState({display: "block"});

    const checkHideFooter = (indexCheck, indexFunction) => {
        if (indexCheck) {
          indexFunction(false);
        } else {
          indexFunction(true);
        }
    }
    switch (whoOnclick) {
        case 1:
            checkHideFooter(checkHide,setHidden);
            setWho(null);
        break; 
        case 2:
            checkHideFooter(checkHide1,setHidden1);
            setWho(null);
        break;
        case 3:
            checkHideFooter(checkHide2,setHidden2);
            setWho(null);
        break;
        case 4:
            checkHideFooter(checkHide3,setHidden3);
            setWho(null);
        break;
        case 5:
            checkHideFooter(checkHide4,setHidden4);
            setWho(null);
        break;
    }
    // chống ấn vào dropdown list trên tablet và desktop
    useEffect(()=>{
        if(window.innerWidth>765){
            setDisplay({display: "block"})
        }
        else setDisplay({display: "none"})
        const handleChangWidth = ()=>{
             if(window.innerWidth>765){
                setDisplay({display: "block"})
             }
             else setDisplay({display: "none"})
        }
        window.addEventListener('resize',handleChangWidth);

    },[])
    /////////////////////////////////////////////////////

    return(
        <div id="container-main_footer" className="container-fluid">
            <div id="container-content-footer" className="container">
                <div id="about-us">
                    <h1 onMouseMove={()=>setHover({state:true,index:1})} onMouseLeave={()=>setHover({state:false,index:1})} onClick={()=>setWho(1)}>About Us<span><MdKeyboardArrowDown/></span></h1>
                    <div id="hide" style={checkHide ? displayBlock : displayNone}>
                    <hr style={(hover.index ==1 && hover.state) ? shadow : null } />
                    <p>lorem ipsum dolor sit amet , consectetur adipiscing alit sed do<br/>
                        eiusmod tempor incididunt ut labore et dolore magna aliqua<br/>
                        enim ad minim veniam, quis mostrud exercitation
                    </p>
                    <h2>Follow Us</h2>
                    <ul>
                        <li><BsFacebook/></li>
                        <li><BsTwitter/></li>
                        <li><BsInstagram/></li>
                        <li><BsYoutube/></li>
                    </ul>
                    </div>
                </div>
                <div id="my-acc">
                    <h1 onMouseMove={()=>setHover({state:true,index:2})} onMouseLeave={()=>setHover({state:false,index:2})} onClick={()=>setWho(2)}>My Account<span><MdKeyboardArrowDown/></span></h1>
                    <hr style={(hover.index ==2 && hover.state) ? shadow : null }/>
                    <div className="wrap-list" style={checkHide1 ? displayBlock : displayNone}>
                        <div id="my-acc-list"> 
                            <a href="">My Account</a>
                            <a href="">Shopping Cart</a>
                            <a href="">Login</a>
                            <a href="">Register</a>
                            <a href="">Checkout</a>
                            <a href="">Wishlist</a>
                        </div>   
                    </div>
                </div>
                <div id="categories">
                    <h1 onMouseMove={()=>setHover({state:true,index:3})} onMouseLeave={()=>setHover({state:false,index:3})} onClick={()=>setWho(3)}>Categories<span><MdKeyboardArrowDown/></span></h1>
                    <hr style={(hover.index ==3 && hover.state) ? shadow : null }/>
                    <div className="wrap-list" style={checkHide2 ? displayBlock : displayNone}>
                        <div>  
                            <a href="">About Us</a>
                            <a href="">Contact Us</a>
                            <a href="">Porfolio</a>
                            <a href="">Privacy Policy</a>
                            <a href="">Compare</a>
                            <a href="">Frequentlyt</a>
                        </div>
                    </div>
                </div>
                <div id="instagram">
                    <h1 onMouseMove={()=>setHover({state:true,index:4})} onMouseLeave={()=>setHover({state:false,index:4})} onClick={()=>setWho(4)}>Instagram<span><MdKeyboardArrowDown/></span></h1>
                    <hr style={(hover.index ==4 && hover.state) ? shadow : null }/>
                    <div className="wrap-list" style={checkHide3 ? displayBlock : displayNone}>
                    <ul>
                        <li><img src={ins1} alt="instagram image" /></li>
                        <li><img src={ins2} alt="instagram image" /></li>
                        <li><img src={ins3} alt="instagram image" /></li>
                        <li><img src={ins4} alt="instagram image" /></li>
                        <li><img src={ins5} alt="instagram image" /></li>
                        <li><img src={ins6} alt="instagram image" /></li>
                    </ul>
                    </div>
                </div>
                <div id="newsletter">
                    <h1 onMouseMove={()=>setHover({state:true,index:5})} onMouseLeave={()=>setHover({state:false,index:5})} onClick={()=>setWho(5)}>Newsletter<span><MdKeyboardArrowDown/></span></h1>
                    <hr style={(hover.index ==5 && hover.state) ? shadow : null }/>
                    <div className="wrap-list" style={checkHide4 ? displayBlock : displayNone}>
                    <p>Fill their seed open meat. Sea you<br/>
                        great Saw image stl
                    </p>
                    <form onSubmit={handleSubmit}>
                        <input onChange ={
                            (e)=>setEmailData(e.target.value)} 
                            type="text" 
                            name="email" 
                            value={email} id="" 
                            placeholder="Email Address"
                            accept="email"
                            required/>
                        <button type="submit">Subscribe</button>
                    </form>
                </div>  
                </div> 
                <div id="license-and-payment">
                    <hr />
                    <p>Copyright &copy; 2022 Suruchi .All Rights Revserved.Design By Suruchi</p>
                    <ul>
                        <li><img src={pay1} alt="payment" /></li>
                        <li><img src={pay2} alt="payment" /></li>
                        <li><img src={pay3} alt="payment" /></li>
                        <li><img src={pay4} alt="payment" /></li>
                        <li><img src={pay5} alt="payment" /></li>
                        <li><img src={pay6} alt="payment" /></li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default memo(Footer);