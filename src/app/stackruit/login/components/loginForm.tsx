import React from "react";
import Link from "next/link";

const LoginForm = (props: any) => {
  const { onLoginSubmit, setLoginSignUp } = props;

  return (
    <div>
      <form id="loginForm" onSubmit={onLoginSubmit}>
        <div className="mb-4">
          <p>UserId</p>
          <input
            type="text"
            placeholder="Enter UserId"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <p>Password</p>
          <input
            type="text"
            placeholder="Enter Password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </form>
      <div>
        <button
          form="loginForm"
          type="submit"
          onClick={() => setLoginSignUp("login")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Login
        </button>

        <button
          form="loginForm"
          type="submit"
          onClick={() => setLoginSignUp("signUp")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
