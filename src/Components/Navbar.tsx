import logo_hotel1 from"../assets/logo_hotel1.jpg"
import { FaShoppingCart } from "react-icons/fa";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { useNavigate } from "react-router-dom";

const Navbar = () =>{ 
  const navigate = useNavigate();
  const directTo = () => {
    navigate(`/cart`);
  };
  
    return( 
    <>
    <nav className="navbar navbar-expand-sm bg-body-tertiary">
    <div className="container Nav_main">
      <a className="navbar-brand" href="/">
        <img src={logo_hotel1} alt = "" width="80" height="80"/>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse mt-auto" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Contact</a>
          </li>
          
        </ul>
       
          <button className="btn1"onClick={directTo}>
            Order
          </button>
     
      </div>
    </div>
  </nav>
  </>
  );
};
export default Navbar;