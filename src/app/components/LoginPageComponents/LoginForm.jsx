"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const LoginForm = () => {
  const router = useRouter();
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const loginHandler = async (e) => {
    e.preventDefault();
    const fetchData = async () => {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: usernameValue,
          password: passwordValue,
        }),
      });

      return res.json();
    };

    const data = await fetchData();

    console.log({data});
    
    if (data.isLogin==true) {
      localStorage.setItem("username", usernameValue);
      localStorage.setItem("userId", data.data.id);
      router.push("/");
    } else {
      alert(data.message);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-[#6687F3] mb-10 lg:mb-10 xl:mb-15">
        Login
      </h1>
      <p className="text-xl font-semibold mb-5">Login to your account</p>
      <form action="" onSubmit={loginHandler}>
        <label htmlFor="" className="block mb-2 text-lg">
          Username
        </label>
        <input
          type="text"
          placeholder="Username"
          className="block w-full border rounded-lg py-3 px-4"
          onChange={(e) => setUsernameValue(e.target.value)}
        />
        <label htmlFor="" className="block mb-2 mt-4 text-lg">
          Password
        </label>
        <input
          type="password"
          placeholder="Password"
          className="block w-full border rounded-lg py-3 px-4"
          onChange={(e) => setPasswordValue(e.target.value)}
        />
        <button
          type="submit"
          className="mt-5 w-full bg-[#6687F3] hover:bg-[#6687f3e2] cursor-pointer text-white py-3 rounded-lg"
        >
          Sign In
        </button>
        <p className="mt-5">
          Don't have an account?{" "}
          <Link href={"/register"}>
            <span className="text-[#6687F3]">Register here</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
