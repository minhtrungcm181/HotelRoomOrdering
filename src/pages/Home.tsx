import Navbar from "../Components/Navbar";
import './Home.css'

const Home = () => {
return (
    <div className="flex flex-col lg:flex-row lg:min-h-screen">
     <Navbar/>
     <div className="container-lg Home">
     <div className="container text-center">
     <div className="d-grid gap-2 col-9 mx-auto">
        <div className="row gy-4">
            <div className="col-sm">
            <button type="button" className="btn_breakfast btn-lg" >
            <img src="./src/assets/breakfast.jpg" width="100px" height="100px"></img>
                <span>breakfast</span>
            </button>
            </div>
        </div>
        <div className="row gy-4">
            <div className="col-sm">
            <button type="button" className="btn_lunch btn-lg" >
            <img src="./src/assets/lunch.jpg" width="100px" height="100px"></img>
                <span>lunch</span>
            </button>
            </div>
            </div>
    </div>

     </div>
    </div>
    </div>
)
}
export default Home; 