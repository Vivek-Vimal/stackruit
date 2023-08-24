"use client";
import React, { useState } from "react";
import LoginForm from "./components/loginForm";
import { auth } from "@/app/page";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [loginSignUp, setLoginSignUp] = useState(null);

  const onLoginSubmit = (loginProp: any) => {
    loginProp.preventDefault();
    if (
      loginProp?.target[0]?.value === "" ||
      loginProp?.target[1]?.value === ""
    ) {
      alert("Please fill all the fields");
    } else if (loginSignUp === "signUp") {
      createUserWithEmailAndPassword(
        auth,
        loginProp?.target[0]?.value,
        loginProp?.target[1]?.value
      )
        .then(() => {
          loginProp?.target.reset();
          alert("Success");
        })
        .catch((err) => {
          alert(err.message);
        });
    } else if (loginSignUp === "login") {
      signInWithEmailAndPassword(
        auth,
        loginProp?.target[0]?.value,
        loginProp?.target[1]?.value
      )
        .then(() => {
          loginProp?.target.reset();
          router.push('/stackruit/dashboard')
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  };

  const loginProp = {
    onLoginSubmit,
    setLoginSignUp,
  };

  return (
    <section className="flex flex-col h-screen p-8 items-center justify-center">
      <LoginForm {...loginProp} />
    </section>
  );
};

export default Login;
