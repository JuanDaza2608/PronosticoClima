import React from "react";
import usePronostico from "../hooks/usePronostico.jsx";
import '../Styles/CiudadPronostico.css'

const CiudadPronostico = (props) =>{
      

    return (
        <div className="card cardP">
            <div className="card-body body-P">
                <h5 className="card-title title-P">{props.cityP}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary paisP">{props.paisP}</h6>
                <p className="card-text">{props.temperaturaP} ºC</p>
                <p className="card-text fechaP">{props.fechaP}</p>
                <p className="card-text-d">{props.descripcionP}</p>
                
            </div>
        </div>    

    );
}

export default CiudadPronostico