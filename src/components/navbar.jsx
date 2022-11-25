import "./navbar.css"
import logo from './MyJobs.png';
import { Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom"


function Navbar(){
    let token = localStorage.getItem("token");
    console.log(token)
    const history = useNavigate();

    function navigate() {
        localStorage.removeItem("token")
        history('/login');
      }

    return (
        <>
            {
                (token)?<div className="navbar2"> <Link to="/"><img src={logo} className="logo" alt="logo" /></Link>
                <button className='inputbutton1' onClick={() => navigate()}>Logout</button><div className="avatar" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "10%" }}></div>
                <div className="avatar_nav">Avatar</div>&nbsp;
                <div className="avatar_dash">dash</div></div>
                :<div className="navbar"> <Link to="/"><img src={logo} className="logo" alt="logo" /></Link>
                <Link to="/login"><div className="login">Login</div></Link><hr className="liner"></hr></div> 
                }
            </>
        
    )
}

export default Navbar