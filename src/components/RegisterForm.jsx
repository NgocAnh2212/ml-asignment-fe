import React from "react";
import { useState } from "react";
import Input from "./Input";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    // validation : kiểm tra data có đúng format

    // gọi về BE
    //...
  };

  return (
    <div className="p-8 w-full">
      <div className="text-6xl font-serif mb-10">SWEET SOUL</div>
      <form
        className="flex flex-col gap-5 font-serif mb-16"
        onSubmit={handleSubmit}
      >
        <Input
          label="Username"
          inputType="text"
          value={username}
          onChange={setUsername}
        />
        <Input
          label="Email"
          inputType="text"
          value={email}
          onChange={setEmail}
        />
        <Input
          label="Password"
          inputType="password"
          value={password}
          onChange={setPassword}
        />
        <button className="w-full rounded-full px-8 font-serif py-2 bg-primary-2 text-white text-xl font-medium mb-0 outline-slate-950 outline-1 outline-none">
          Sign up
        </button>
      </form>
      <div className="text-xl font-serif">
        <div className="flex flex-row gap-16">
          Already have an account?       
          <Link to="/auth/login" className="rounded-full px-6  bg-slate-400 bg-opacity-40 outline-slate-700 outline-none ">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
