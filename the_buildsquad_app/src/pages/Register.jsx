import { supabase } from "../supabase";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [valid, setValid] = useState(false);


  const authenticatePassword = () => {
    const hasNumber = /\d/;
    const hasUpperCase = /[A-Z]/;
    const hasLowerCase = /[a-z]/;
    const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/;

    if (password.length < 8) {
      setMessage("Password must be of minimum 8 character.");
      setValid(false);
    } else if (!hasNumber.test(password)) {
      setMessage("Password must have number.");
      setValid(false);
    } else if (!hasUpperCase.test(password)) {
      setMessage("Password must have uppercase.");
      setValid(false);
    } else if (!hasLowerCase.test(password)) {
      setMessage("Passwod must have lowercase.");
      setValid(false);
    } else if (!hasSpecialCharacter.test(password)) {
      setMessage("Password must have special character.");
      setValid(false);
    } else {
      setMessage("Password is valid!");
      setValid(true);
    }
  };

  return (
    <div className="body">
      <div className="authentication">
        <h2>Register</h2>
        <table className="inputTable">
            <tr>
            <td>
              <label>Email:</label>
            </td>
            <td>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </td>
          </tr> 
          <tr>
            <td>
              <label>Username:</label>
            </td>
            <td>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Password:</label>
            </td>
            <td>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </td>
          </tr>
        </table>
        <button type="button" onClick={authenticatePassword}>
          Submit
        </button>
        <div style={{ color: valid ? "green" : "red" }}>{message}</div>
      </div>
    </div>
  );
}
