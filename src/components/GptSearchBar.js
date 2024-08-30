import React, { useRef } from "react";
import { useSelector } from "react-redux";
import language from "../utils/languageConstant";
import client from "../utils/openAi";

const GptSearchBar = () => {
  const languageKey = useSelector((store) => store.lang?.lang);
  const searchText=useRef(null);
  const handleGetMovieFromOpenAi = async (e)=>{
    let query = "Act as a movie Recommandation system and suggestion some movie for you the query : "+searchText.current.value + ". Only give me name of 5 movies. comma seperated liek the example result given ahead. Example Result : Gadar, Golmaal, Houseful , dhol , hera pheri";
    
    const chatCompletion = await client.chat.completions.create({
      messages: [{ role: 'user', content:query , 
      }],
      model: 'gpt-3.5-turbo',
    });
    console.log(chatCompletion)
  }

  return (
    <div className="pt-[10%] flex justify-center ">
      <form
        action=""
        onSubmit={(e) => e.preventDefault()}
        className="w-1/2 px-2 py-1 float-start grid grid-cols-12 rounded-lg bg-black"
      >
        <input
          ref={searchText}
          className="col-span-9 p-4 m-4 rounded-md"
          type="text"
          name="searchbar"
          placeholder={language[languageKey].placeHolder}
        />
        <button
          type="submit"
          onClick={e => handleGetMovieFromOpenAi(e)}
          className="col-span-3 bg-red-700 py-2 m-4 px-2 text-white rounded-lg"
        >
          {language[languageKey].buttonValue}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
