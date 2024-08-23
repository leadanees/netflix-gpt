import { useRef, useState } from "react";
import Header from "./Header";
import { CheckedData } from "../utils/Validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const massage = CheckedData(email.current.value, password.current.value);
    setErrorMessage(massage);
    if (massage) return;
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:USER_AVATAR
          })
            .then(() => {
              debugger;
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              console.log(error);
            });
          setIsSignIn(!isSignIn);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          dispatch(
            addUser({
              uid: user.uid,
              email: user.email,
              password: user.password,
              photoURL: user.photoURL,
            })
          );
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleForSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_large.jpg"
          alt="background_image"
        />
      </div>
      <form
        // onSubmit={(e) => e.preventDefault()}
        onSubmit={(e) => handleSubmit(e)}
        action=""
        className="w-3/12 absolute p-12 bg-black my-40 mx-auto right-0 left-0 text-white opacity-75"
      >
        <h1 className="text-3xl my-4">{isSignIn ? "Sign In" : "Sign Up"}</h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            className="p-2 my-4 w-full bg-gray-600 rounded-sm "
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          type="email"
          className="p-2 my-4 w-full bg-gray-600 rounded-sm "
          placeholder="Email"
        />
        <input
          ref={password}
          type="password"
          className="p-2 my-4 w-full bg-gray-700 rounded-sm"
          placeholder="Password"
        />
        <p className="text-red-700 text-sm my-2">{errorMessage}</p>
        <button className="my-6 p-4 w-full bg-red-500 rounded-lg">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer my-6" onClick={toggleForSignIn}>
          {isSignIn
            ? "Not have account? Sign in here"
            : "Already have account? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
