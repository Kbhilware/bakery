import { NavLink, Outlet } from "react-router-dom";
import Header from './Header';

const Navbar = (props) => {
    return (
        <>
            <nav className="navbar justify-content-between bg-dark">
            <div className="container">
                <NavLink to="/" className="navbar-brand text-light" >
                    {props.siteName}
                </NavLink>
                <div className="form-inline">
                    <ul className="navbar-nav d-table">
                        <li className="nav-item">
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about">About Us</NavLink>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
            <Header />
            <div>
            
              { props.componentProduct ? <props.componentProduct/> : '' }
              { props.componentAbout ? <props.componentAbout/> : '' }
            </div>
            <Outlet />
        </>
    )
}

export default Navbar
