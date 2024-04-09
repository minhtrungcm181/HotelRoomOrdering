
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import './Home.css'

const Home = () => {

    let navigate = useNavigate(); 
    const routeBreakfast = () =>{ 
        let path = `/breakfast`; 
      navigate(path);
    }
    const routeLunch = () =>{ 
        let path = `/lunch`; 
      navigate(path);
    }
    const routeDinner = () =>{ 
        let path = `/dinner`; 
      navigate(path);
    }


return (
  
     <div className="container Home">

     <div className="container text-center">

     <div className="d-grid col-9 mx-auto">


        <div className="row gy-1">
            <div className="col-lg">
            <button type="button" className="btn_menu" onClick={routeBreakfast}>
                breakfast
            </button>
            </div>
        </div>


        <div className="row gy-1">
            <div className="col-lg">
            <button type="button" className="btn_menu" onClick={routeLunch}>
                lunch
            </button>
            </div>
        </div>


        <div className="row gy-1">
            <div className="col-lg">
            <button type="button" className="btn_menu" onClick={routeDinner}>
                dinner
            </button>
            </div>
        </div>

        <div className="row gy-1">
            <div className="col-lg">
            <button type="button" className="btn_menu">
                beverage
            </button>
            </div>
        </div>


    </div>


     </div>

    </div>

    
)
}
export default Home; 