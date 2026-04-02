import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import { supabase } from '../supabase';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [valid, setValid] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if (error) {
      setMessage(error.message);
      setValid(false);
    } else {
      setMessage("Login Successful! Redirecting to dashboard...");
      setValid(true)
      setTimeout(() => navigate("/dashboard"), 2000);
    }
  };

  return (
    <div className="background">
      <Link to="/" >
        <img
          src="/app_icon.png"
          alt="The BuildSquad"
          className="w-12 h-12"
        />
      </Link>
      <div className="body">
        <div className="authentication">
          <h2>Login</h2>
          <table className="inputTable">
            <tr>
              <td>
                <label>Email:</label>
              </td>
              <td>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
          <button type="button" onClick={handleLogin}>
            Submit
          </button>

          <div style={{ color: valid ? "green" : "red" }}>{message}</div>
          <Link to="/register">Create a new account</Link>

        </div>
      </div>
    </div>
  );
}