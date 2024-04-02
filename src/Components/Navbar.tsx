import { MdMargin } from "react-icons/md";
import logo1 from "../assets/logo1.jpg"
import logo_hotel1 from"../assets/logo_hotel1.jpg"
import { FaShoppingCart } from "react-icons/fa";
const Navbar = () =>{ 
    return( 
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container Nav_main">
      <a className="navbar-brand" href="#">
        <img src={logo_hotel1} alt = "" width="150" height="150"/>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse mt-auto" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Contact</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form className="d-flex align-items-center nav_last" role="search">
             <FaShoppingCart size="30px" />
          <button className="btn1" type="button">
            Order
          </button>
        </form>
      </div>
    </div>
  </nav>
  </>
  );
};
export default Navbar;