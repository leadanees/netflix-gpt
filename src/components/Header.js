import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { LANGUAGE, LOGO } from "../utils/constants";
import { toggleShowGPTSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/languageSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showgpt = useSelector((store) => store.gpt?.showGptSearch);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe;
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("error");
      });
  };
  const handleGPTSearch = () => {
    dispatch(toggleShowGPTSearchView());
  };

  const handelOnChangeLanguage = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="z-50 absolute w-screen px-8 py-2 bg-gradient-to-b from-black flex justify-between">
      <img className="w-44" src={LOGO} alt="logo" />

      {user && (
        <div className="flex p-2">
          {showgpt && (
            <select
              className="px-4 py-2 m-2 cursor-pointer bg-gray-700 text-white rounded-lg"
              onClick={(e) => handelOnChangeLanguage(e)}
            >
              {LANGUAGE?.map((lang) => (
                <option
                  className="cursor-pointer"
                  key={lang?.identifier}
                  value={lang.identifier}
                >
                  {lang.langName}{" "}
                </option>
              ))}
            </select>
          )}
          <button
            className="z-20 bg-purple-500 px-4 py-2 mr-4 m-2 text-white rounded-lg"
            onClick={handleGPTSearch}
          >
            {showgpt === true ? "Home Page" : "GPT Search"}
          </button>
          <img className="w-16 h-16" src={user?.photoURL} alt="profile_image" />
          <button className="text-white font-bold " onClick={handleLogout}>
            (sing out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
