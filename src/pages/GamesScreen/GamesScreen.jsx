import React from "react";
import "./GamesScreen.css"
import userImg from "../../assets/images/userEmpty.png"

const GamesScreen = () => {
    return (
        <div className="Tudo">
        <div className="user">
            <div className="iconUser">
                <img src={userImg} alt="userImg"></img>
            </div>
            <div className="nameUser">
                <h1>User Name</h1>
            </div>
        </div>

        <div className="pages">
            <div className="buttons">
                
            </div>
        </div>

        <div className="infos">
            <h1>oi</h1>
        </div>
    </div>
    );
}

export default GamesScreen;