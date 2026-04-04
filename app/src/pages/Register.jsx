import { supabase } from "../supabase";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [valid, setValid] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async () => {
    const hasNumber = /\d/;
    const hasUpperCase = /[A-Z]/;
    const hasLowerCase = /[a-z]/;
    const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/;

    let errorMessage = "";

    if (password.length < 8) {
      errorMessage = "Password must be of minimum 8 character."
    } else if (!hasNumber.test(password)) {
      errorMessage = "Password must have number."
    } else if (!hasUpperCase.test(password)) {
      errorMessage = "Password must have uppercase."
    } else if (!hasLowerCase.test(password)) {
      errorMessage = ""
    } else if (!hasSpecialCharacter.test(password)) {
      errorMessage = "Passwod must have lowercase."
    }

    if (errorMessage) {
      setMessage(errorMessage);
      setValid(false);
      return;
    }

    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          display_name: username,
        },
      },
    })

    if (error) {
      setMessage(error.message);
      setValid(false);
      setTimeout(() => navigate("/login"), 2000);
    } else {
      setMessage("Regsitration Successful! Redirecting to login...");
      setValid(true)
      setTimeout(() => navigate("/login"), 2000);
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
      <div className="login-body">
        <div className='welcome-page'>
          Create a new account with us
        </div>
        <div className="authentication">
          <h2 className='text-center text-3xl text-amber-300'>Register</h2>
          <table className="inputTable">
            <tr>
              <td>
                <label>Email:</label>
              </td>
              <td>
                <input
                  type="email"
                  value={email}
                  className="bg-gray-600 rounded-[12px] pr-5 pl-5"
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
                className="bg-gray-600 rounded-[12px] pr-5 pl-5"
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
                  className="bg-gray-600 rounded-[12px] pr-5 pl-5"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </td>
            </tr>
          </table>
          <button type="button" className='submit-button' onClick={handleSignUp}>
            Submit
          </button>

          <div style={{ color: valid ? "green" : "red" }}>{message}</div>
          <Link className='text-blue-200' to="/login">Go to Login</Link>

        </div>
      </div>
    </div>
  );
}
