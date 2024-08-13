import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

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
        action=""
        className="w-3/12 absolute p-12 bg-black my-40 mx-auto right-0 left-0 text-white opacity-75"
      >
        <h1 className="text-3xl my-4">{isSignIn ? "Sign In" : "Sign Up"}</h1>
        {!isSignIn && (
          <input
            type="text"
            className="p-2 my-4 w-full bg-gray-600 rounded-sm "
            placeholder="Full Name"
          />
        )}
        <input
          type="email"
          className="p-2 my-4 w-full bg-gray-600 rounded-sm "
          placeholder="Email"
        />
        <input
          type="password"
          className="p-2 my-4 w-full bg-gray-700 rounded-sm"
          placeholder="Password"
        />
        <button className="my-6 p-4 w-full bg-red-500 rounded-lg">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer" onClick={toggleForSignIn}>
          {isSignIn
            ? "Not have account? Sign in here"
            : "Already have account? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
