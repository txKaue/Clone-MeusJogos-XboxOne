import React from "react";
import "./GamesScreen.css"
import userImg from "../../assets/images/userEmpty.png"
import { Buttons, StorageInfo, UserInfo } from "../../components";

const GamesScreen = () => {
    return (
        <div className="Tudo">

            <UserInfo></UserInfo>

            <div className="pages">
                <Buttons titulo="Games"></Buttons>
                <Buttons titulo="Apps"></Buttons>
                <Buttons titulo="Groups" border={true}></Buttons>
                <Buttons titulo="Full Library"></Buttons>
                <Buttons titulo="Manage"></Buttons>
            </div>

            
            
        </div>
    );
}

export default GamesScreen;