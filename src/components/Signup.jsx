import React, { useState } from 'react';
import TextInput from "./TextInput";
import Button from "./Button";
import { UserSignup } from '../api'; 
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/reducers/UserSlice";

function Signup() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateInputs = () => {
    if (!name || !email || !password) {
      alert("Please fill in all fields");
      return false;
    }
    return true;
  };

  const handleSignUp = async () => {
    setLoading(true);
    setButtonDisabled(true);
    if (validateInputs()) {
      await UserSignup({ name, email, password })
        .then((res) => {
          dispatch(loginSuccess(res.data));
          alert("Account Created Success");
          setLoading(false);
          setButtonDisabled(false);
        })
        .catch((err) => {
          alert(err.response.data.message);
          setLoading(false);
          setButtonDisabled(false);
        });
    }
  };

  return (
    <div className="w-full max-w-500px flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold text-primary">Welcome to FitTone 👋</h1>
        <p className="text-base font-normal text-secondary">Please SignUp with your details here</p>
      </div>
         <TextInput
          label="Full name"
          placeholder="Enter your full name"
          value={name}
          handelChange={(e) => setName(e.target.value)}
        />
        <TextInput
          label="Email Address"
          placeholder="Enter your email address"
          value={email}
          handelChange={(e) => setEmail(e.target.value)}
        />
         <TextInput
          label="Password"
          placeholder="Enter your password"
          password
          value={password}
          handelChange={(e) => setPassword(e.target.value)}
        />
       <button
        type="submit"
        className="w-full py-2 px-4 bg-primary bg-black font-sans font-bold text-white rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none"
        onClick={handleSignUp}
        
      >
        {loading ? 'Signing Up...' : 'Sign Up'}
      </button>
    </div>
  );
}

export default Signup;
