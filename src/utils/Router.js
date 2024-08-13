import { Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import Browse from "../components/Browse";

const Router = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/browse' element={<Browse/>}/>
            </Routes>
        </div>
    );
};

export default Router;