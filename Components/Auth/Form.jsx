import { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { GoogleLogin } from "@react-oauth/google";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

function Form({ isRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubtimt = async (e) => {
    e.preventDefault();
    const loginData = {
      email: email,
      password: password,
    };
    try {
      const response = await axios.post(
        `https://green-tripper-bde41b13eec3.herokuapp.com/api/${
          isRegister ? "register" : "login"
        }`,
        isRegister ? { email, username, password } : { email, password }
      );
      console.log(response.data); // Handle success response

      if (!isRegister) {
        const { token, user_id, username, email } = response.data;

        localStorage.setItem("token", token);
        localStorage.setItem("id", user_id);
        localStorage.setItem("email", email);
        localStorage.setItem("username", username);

        if (user_id && token) {
          console.log(user_id, token);
          navigate("/worked");
        } else {
          alert("Invalid email or password");
        }
      }
    } catch (error) {
      console.error(`${isRegister ? "register" : "login"} failed`, error);
      // Handle error
    }
  };

  return (
    <div className="container-form">
      <div className="container-form-header">
        <h2>
          {isRegister ? "Register Your Account" : "Login Your Account"}{" "}
          &#x1F642;
        </h2>
        <p>
          {isRegister
            ? "Kindly register to create a new account"
            : "Kindly log in to gain access to your account"}
        </p>
      </div>
      <div className="google">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </div>
      <p className="line">OR</p>
      <form action="" className="form" onSubmit={handleSubtimt}>
        {isRegister && (
          <>
            <label htmlFor="username">Nickname</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              required
            />
          </>
        )}
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        />
        {showPassword ? (
          <FaEyeSlash
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="eye"
          />
        ) : (
          <FaEye
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="eye"
          />
        )}
        <a href="">Forgot password?</a>
        <button type="submit" className="submit">
          {isRegister == true ? "Register" : "Log in"}
        </button>
      </form>
      <p className="create-account">
        {isRegister ? "Already have an account?" : "Don't have an account?"}
        <Link className="link" to={isRegister ? "/login" : "/register"}>
          {isRegister ? "Log in" : "Create an account"}
        </Link>
      </p>
    </div>
  );
}

export default Form;
