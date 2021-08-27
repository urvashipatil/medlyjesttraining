import React from "react";
import Login from "../components/login";

export default function login() {
  const onLogin = (data) => {
    console.log(data);
  };
  return (
    <div>
      <Login onSubmit={(data) => onLogin(data)} />
    </div>
  );
}
