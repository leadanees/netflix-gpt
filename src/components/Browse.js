import Header from "./Header";
import useNowPlayingMovie from "../hooks/useNowPlayingMovie";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";


const Browse = () =>{

    useNowPlayingMovie();


    return (
        <div>
            <Header/>
            <MainContainer/>
            <SecondContainer/>
            {/* 
            -maincontainer
                -trailer vedio background
                -video titles
            -secondcontainer
                -movielist * n
                    -cards * n
                    -name

            */}

        </div>
    );
};

export default Browse;