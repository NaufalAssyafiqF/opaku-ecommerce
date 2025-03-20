import Link from 'next/link';
import React from 'react'

const LoginForm = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-[#6687F3] mb-10 lg:mb-10 xl:mb-15">Login</h1>
      <p className="text-xl font-semibold mb-5">Login to your account</p>
      <form action="">
        <label htmlFor="" className="block mb-2 text-lg">
          Username
        </label>
        <input
          type="text"
          placeholder="Username"
          className="block w-full border rounded-lg py-3 px-4"
        />
        <label htmlFor="" className="block mb-2 mt-4 text-lg">
          Password
        </label>
        <input
          type="password"
          placeholder="Password"
          className="block w-full border rounded-lg py-3 px-4"
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
}

export default LoginForm