import { useState } from "react";

import { Link } from "react-router-dom";
import Input from "./Input";

const LoginForm = () => {
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
      <div className="text-6xl font-serif mb-6">SWEET SOUL</div>
      <form
        className="flex flex-col gap-5  font-serif leading-7"
        onSubmit={handleSubmit}
      >
        <Input
          label="Account/Email"
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
        <button className="w-full rounded-full px-8 font-serif py-2 bg-primary-2 text-white text-xl font-medium">
          Login
        </button>
      </form>
      <Link to="/auth/register" className = " leading-loose text-2xl font-serif text-">Create a new one? Signup</Link>
    </div>
  );
};

export default LoginForm;
