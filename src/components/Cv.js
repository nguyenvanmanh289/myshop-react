import { FaStar } from "react-icons/fa";
import {memo} from 'react';
import "./style/Cv.scss";

function Cv({infoUser}){
    const {image , title , content ,numStar} = infoUser;
    return(
        <div id="main-cv">
            <div>
                <img src={image} alt="" />
            </div>
            <h1>{title}</h1>
            <p>fashion</p>
            <p>{content}</p>
            <ul>
                <li><FaStar/></li>
                <li><FaStar/></li>
                <li><FaStar/></li>
                <li><FaStar/></li>
                <li><FaStar/></li>
            </ul>
        </div>
    )
}

export default memo(Cv);