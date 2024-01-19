import { useEffect, useRef, useState } from 'react';
import '../assets/style/login.scss'
import Navbar from '../components/login/navbar';
import SignIn from '../components/login/signin';
import Registration from '../components/login/registration';
import { useNavigate } from 'react-router';
import axios from 'axios';



export default function Login() {

    const navigate = useNavigate()
    const [views, setViews] = useState('signin')
    const shapeOne = useRef(null)
    const shapeTwo = useRef(null)

    useEffect(() => {
        axios.get("http://localhost:4000/login").then(e => {
            console.log(e)
            navigate(`/user/${e.data.id}`)
        }).catch((e) => { })
    }, [])
    return (
        <>

            <div className="shape" ref={shapeOne} ></div>
            <div className="shape" ref={shapeTwo} ></div>

            <div className='form'>
                <Navbar views={views} setViews={setViews} />
                {
                    views === "signin" ? <SignIn /> : <Registration />
                }

            </div>

        </>

    );
}

