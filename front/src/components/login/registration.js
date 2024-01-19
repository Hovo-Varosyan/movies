import axios from 'axios'
import '../../assets/style/color.scss'
import { useState } from 'react';
import { useNavigate } from 'react-router';


export default function Registration() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [err, setErr] = useState(null)
    const navigate = useNavigate()
    
    function handleSubmit(e) {
        e.preventDefault()
        axios.post("http://localhost:4000/register", {
            name, email, password,
        }).then((e) => navigate(`/user/${e.data.id}`)).catch((err) => {
            console.log(err)
            if (err.response && err.response.status === 400) {
                setErr(err.response.data.message)
            }
            else {
                console.log(err)
                navigate('/error', { state: { err: err.response.data.message } });

            }
        })
    }

    return (
        <>

            <form onSubmit={(e) => handleSubmit(e)}>
                {err === null ? null : <p className='wrong'>{err}</p>}
                <label htmlFor="username">Username</label>
                <input type="text" placeholder="Name " className={name && 'blue'} onChange={(e) => setName(e.target.value)} minLength="6" name='Name' id="name" required />


                <label htmlFor="username">Email</label>
                <input type="email" placeholder="Email " className={email && 'blue' } onChange={(e) => setEmail(e.target.value)} name='email' id="email" required />
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password" className={password && 'blue' } onChange={(e) => setPassword(e.target.value)} name='password' id="password" required />

                <input type="submit" value="Registration" />
                <div className="social">
                    <div className="go"><i className="fab fa-google"></i>  Google</div>
                    <div className="fb"><i className="fab fa-facebook"></i>  Facebook</div>
                </div>
            </form>
        </>



    );
}

