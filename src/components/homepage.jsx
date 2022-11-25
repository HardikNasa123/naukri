import "./homepage.css"
import photo from './Screenshot 2020-09-21 at 2.06.52 PM@2x.png';
import { Navigate, useNavigate } from "react-router-dom"
import Navbar from "./navbar";

function HomePage(){
    const history = useNavigate();
    function Navigate() {
        history('/login');
      }
    return (
        <>
      {/* <Navbar/> */}
        <div className="blueTile">
        

        {/* <button className='inputbutton1' onClick={()=> Navigate()}>Login</button> */}
        <div className="textEle1">Welcome To</div>
        <div className="textEle2"><b>My</b></div>
        <div className="textEle3"><b>Jobs</b></div>
        <div className="textEle4" style={{color:"black !important"}}><b>Why Us</b></div>
        <div>
        <img className="aunty" src={photo} alt="logo" />

        </div>

        <div className="box_one"><p1 className="heading">Get More Visibility</p1><p2 className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p2></div>
        <div className="box_two"><p1 className="heading">Get More Visibility</p1><p2 className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p2></div>
        <div className="box_three"><p1 className="heading">Get More Visibility</p1><p2 className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p2></div>

        </div>


        </>
    )
}

export default HomePage
