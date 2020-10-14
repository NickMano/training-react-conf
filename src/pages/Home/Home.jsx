import React from "react";
import './Home.scss'
import Navbar from "../../components/Navbar/Navbar";
import RickImage from "../../images/rick.png"
import { Link } from "react-router-dom";

const Home = () => {
    const cssClassName = "home";

    return(
    <>
     <Navbar />
     <div className={`${cssClassName}__background`}>
        <div className="grid">
            <div className={`${cssClassName}__decoration`}>
            <img src={RickImage} alt="rick-in-portal"/>
            </div>
            <div className={`${cssClassName}__check-in`}>
                <h3 className="h3--white">CHECK IN TO INTERDIMENSIONAL CONFERENCE</h3>
                <Link to="/badges/new" className="btn btn--primary">Enter</Link>
            </div>
        </div>
     </div>
    </>
    )
}

export default Home;