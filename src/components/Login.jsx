import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { UserLogin } from "../api";
import { loginSuccess } from "../redux/reducers/UserSlice";
import { Button } from '@mui/material';
import TextInput from './TextInput';

function Login() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateInputs = () => {
    if (!email || !password) {
      alert("Please fill in all fields");
      return false;
    }
    return true;
  };

  const handleSignIn = async () => {
    setLoading(true);
    setButtonDisabled(true);
    if (validateInputs()) {
      await UserLogin({ email, password })
        .then((res) => {
          dispatch(loginSuccess(res.data));
          alert("Login Success");
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
        <p className="text-base font-normal text-secondary">Please Login with your details here</p>
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
           <Button
          variant="contained"
          onClick={handleSignIn}
          disabled={buttonDisabled}
        >
          Sign In
        </Button>
      </div>
    </div>
  );
}

export default Login;
