"use client";
import { sendGTMEvent } from "@next/third-parties/google";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const RegisterForm = () => {
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [password2value, setPassword2Value] = useState("");

  const router = useRouter();

  const registerHandler = async (e) => {
    e.preventDefault();

    if (passwordValue !== password2value) {
      alert("password not match");
      return;
    }

    const fetchData = async () => {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: usernameValue,
          password: passwordValue,
        }),
      });

      return await res.json();
    };

    const data = await fetchData();

    if (data.isLogin) {
      sendGTMEvent({
        event: "sign_up_success",
        value: { username: usernameValue },
      });
      alert("register success, please login");
      router.push("/login");
    } else {
      alert(data.message);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-[#6687F3] mb-10 lg:mb-10 xl:mb-15">
        Register
      </h1>
      <p className="text-xl font-semibold mb-5">Make your account</p>
      <form action="">
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
        <label htmlFor="" className="block mb-2 mt-4 text-lg">
          Confirm password
        </label>
        <input
          type="password"
          placeholder="Confirm password"
          className="block w-full border rounded-lg py-3 px-4"
          onChange={(e) => setPassword2Value(e.target.value)}
        />
        <button
          type="submit"
          className="mt-5 w-full bg-[#6687F3] hover:bg-[#6687f3e2] cursor-pointer text-white py-3 rounded-lg"
          onClick={registerHandler}
        >
          Sign In
        </button>
        <p className="mt-5">
          Have an account?{" "}
          <Link href={"/login"}>
            <span className="text-[#6687F3]">Login here</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
