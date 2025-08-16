import React, { useState, useRef} from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";

import { createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = isSignInForm ? checkValidateData(email.current.value , password.current.value) : checkValidateData(email.current.value , password.current.value, name.current.value);
    console.log("message :", message);
    setErrorMessage(message);
    if(message) return;

    if(!isSignInForm){
      createUserWithEmailAndPassword(auth, email.current.value , password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log("User : ", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+ "-"+ errorMessage);
      });
    }else{
      signInWithEmailAndPassword(auth,  email.current.value , password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("User :", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode +"-"+ errorMessage);
      });
    }
  }

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg"
          alt="bg-img"
        ></img>
      </div>
      <form onClick={(e) => {e.preventDefault()}}
      className="w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80 ">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {
            !isSignInForm && 
            <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700 rounded-sm"
            ></input> 
        }

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700 rounded-sm"
        ></input>

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-sm"
        ></input>

        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>

        <button onClick={handleButtonClick}
        className="p-4 my-4 w-full bg-red-700 rounded-sm">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm ? "New to Netflix? Sign Up now." : "Already Registered ? Sign In now." }
        </p>

      </form>
    </div>
  );
};

export default Login;
