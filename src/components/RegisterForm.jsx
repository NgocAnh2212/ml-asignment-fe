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
      <div className="text-4xl font-bold mb-6">Register</div>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
        <button className="w-full rounded-full px-4 py-2 bg-primary-2 text-white text-xl font-medium">
          Register
        </button>
      </form>
      <Link to="/auth/login">Already have an account! Login</Link>
    </div>
  );
};

export default RegisterForm;
