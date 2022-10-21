import style from "./login.less"
import React, { useEffect, useState } from "react";
import Axios from "axios";

export default function LoginPage() {

  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  const host = "https://techservicevip.com/api"

  const register = () => {
    Axios.post(`${host}/register`, {
      username: usernameReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
    });
  };

  const login = () => {
    Axios.post(`${host}/login`, {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].username);
      }
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:7000/login").then((response) => {
      if (response.data.loggedIn == true) {
        setLoginStatus(response.data.user[0].username);
      }
    });
  }, []);

  return (
    <div className={style.container}>
        <div className={style.registration}>
           <h1>Registration</h1>
           <div className={style.item}>
               <input
                 placeholder=" Username"
                 type="text"
                 onChange={(e) => {
                   setUsernameReg(e.target.value);
                 }}
               />
           </div>

           <div className={style.item}>
               <input
                 placeholder=" Password"
                 type="text"
                 onChange={(e) => {
                   setPasswordReg(e.target.value);
                 }}
               />
           </div>

           <button onClick={register}> Register </button>
      </div>

      <div className={style.login}>
           <h1>Login</h1>
           <div className={style.item}>
              <input
                type="text"
                placeholder=" Username"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
           </div>

           <div className={style.item}>
               <input
                 type="password"
                 placeholder=" Password"
                 onChange={(e) => {
                   setPassword(e.target.value);
                 }}
               />
           </div>

        <button onClick={login}> Login </button>
      </div>

      <h1>{loginStatus}</h1>
    </div>
  );
}
