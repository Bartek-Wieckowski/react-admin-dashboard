import React, { useState } from "react";
import "./login.scss";

export const Login = () => {
  const [error, setError] = useState(false);

  return (
    <div className="login">
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
        {error && <span>Wrong email or password!</span>}
      </form>
    </div>
  );
};
