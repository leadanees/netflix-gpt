import { useEffect } from "react";
import Router from "../utils/Router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Body = () => {

    

    return (
        <div>
            <Router/>
        </div>
    )
};

export default Body;