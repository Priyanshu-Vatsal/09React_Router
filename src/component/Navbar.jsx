import React from "react";
import Logo from '../assets/Logo.svg'
import { NavLink, Link } from "react-router-dom";
import { toast } from "react-toastify";

function Navbar(props){

    let isLoggedIn=props.isLoggedIn;
    let setIsLoggedIn=props.setIsLoggedIn;

    return(
        <div className=" flex items-center justify-evenly">
            {/* LOGO */}
            <Link to="/">
                <img src={Logo} alt="LOGO IMAGE" loading="lazy"/>
            </Link>

            {/* OPTIONS */}
            <ul className="flex gap-10 text-2xl m-3">
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/'>About</NavLink>
                </li>
                <li>
                    <NavLink to='/'>Contact</NavLink>
                </li>
            </ul>

            {/* BUTTONS */}

            <div>
                {!isLoggedIn &&
                   <Link to="/login">
                        <button>
                            Login
                        </button>
                   </Link>
                }
                {!isLoggedIn&&
                   <Link to="/signup">
                         <button>
                            Sign Up
                        </button>
                   </Link>
                }
                {isLoggedIn&&
                   <Link to="/">
                        <button onClick={()=>{
                            setIsLoggedIn(false);
                            toast.success("Logged Out");
                        }}>
                            Log Out
                        </button>
                   </Link>
                }
                {isLoggedIn&&
                   <Link to="/dashboard">
                        <button>
                            Dashboard
                        </button>
                   </Link>
                }
            </div>
        </div>
    )
}

export default Navbar