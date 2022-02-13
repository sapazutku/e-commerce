import "./login.style.scss";
import {
  signup,
  login,
  logout,
  useAuth,
} from "../../firebase/firebase.utils.js";
import { useRef, useState } from "react";

//TODO: Add header user info


export default function Log() {
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleLogin() {
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  async function handleSignup() {
    setLoading(true);
    try {
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  return (
    <div className="main">
      <div className="info">
        Currently logged in as: <span id="user">{currentUser?.email}</span>
      </div>

      <div className="form">
        <input type="input" ref={emailRef} placeholder="Email" name="email" />
        <input
          type="password"
          ref={passwordRef}
          placeholder="Password"
          name="password"
        />
      </div>
      <div className="buttons">
        <button disabled={loading || currentUser} onClick={handleSignup}>
          Sign Up
        </button>
        <button disabled={loading || currentUser} onClick={handleLogin}>
          Log In
        </button>
        <button disabled={loading || !currentUser} onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </div>
  );
}
