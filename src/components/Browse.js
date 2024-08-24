import Header from "./Header";
import useNowPlayingMovie from "../hooks/useNowPlayingMovie";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";
import usePopularMovie from "../hooks/usePopularMovie";
import useTopRatedMovie from "../hooks/useTopRatedMovie";
import useUpcomingMovie from "../hooks/useUpcomingMovie";


const Browse = () =>{

    useNowPlayingMovie();
    usePopularMovie();
    useTopRatedMovie();
    useUpcomingMovie();

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