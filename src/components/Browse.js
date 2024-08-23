import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import Header from "./Header";


const Browse = () =>{


    useEffect(()=>{
        browserMoviesData();
    },[])

    const browserMoviesData = async () =>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/now_playing?page=1`,API_OPTIONS);
        const jsonData = await data.json();
        console.log(jsonData,"anees");
    };

   

    return (
        <div>
            <Header/>
        </div>
    );
};

export default Browse;