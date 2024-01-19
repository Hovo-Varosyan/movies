import { useNavigate } from "react-router";
import "../../assets/style/login.scss";
import axios from 'axios'
import { useState } from "react";

export default function SignIn() {

  const navigate = useNavigate()
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [err, setErr] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    axios.post("http://localhost:4000/login", { email, password, })
      .then((e) => navigate(`/user/${e.data.id}`))
      .catch((err) => {
        console.log(err)
        if (err.response && err.response.status === 400) {
          setErr(err.response.data.message)
        }
        else if (err.response && err.response.status === 401) {
          setErr(err.response.data.message)
        }
        else if(err.response && err.response.status === 500){
          navigate('/error', { state: { err: err.response.data.message } });
        }
      })
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} method="POST">
      {err && <p>{err}</p>}
      <label htmlFor="username">Email</label>
      <input type="email" placeholder="Email " className={email && 'blue'} onChange={(e) => setEmail(e.target.value)} name="email" id="email" required />
      <label htmlFor="password">Password</label>
      <input type="password" minLength="6" placeholder="Password" className={password && 'blue'} onChange={(e) => setPassword(e.target.value)} name="password" id="password" required />
      <input type="submit" value="Login" />

    </form>
  );
}
