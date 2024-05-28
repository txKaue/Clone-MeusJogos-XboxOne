import React from "react";
import "./Buttons.css";

const Buttons = ({titulo, qntd, border}) => {
    if (border == true){
        return(
            <button style={{ borderBottom: "1px solid #4F4F4F", marginBottom: "10px" }}>
                {titulo} {qntd}
            </button>
        )
    }
    else{
        return(
            <button>
                {titulo} {qntd}
            </button>
        )
    }
}

export default Buttons;