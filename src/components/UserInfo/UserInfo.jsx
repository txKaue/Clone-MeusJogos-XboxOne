import React from "react";
import userImg from "../../assets/images/userEmpty.png"
import "./UserInfo.css";
import { BsController } from "react-icons/bs";

const UserInfo = () => {
    return (
        <div className="user">

            <BsController style={{ color: "white", width: "10%", height:"40%", 
                 paddingBottom: "5px"}}/>

            <div className="iconUser">
                <img src={userImg} alt="userImg"></img>
            </div>
            <div className="nameUser">
                <h1>User Name</h1>
            </div>
        </div>
    )
}

export default UserInfo;