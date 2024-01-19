import '../assets/style/user.scss';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import CloseIcon from '@mui/icons-material/Close';
import { Userhome } from '../components/navigation/component/userhome';
import { Sentings } from '../components/sentings';
import { Favorite } from '../components/favorite';
import LogoutIcon from '@mui/icons-material/Logout';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { Button } from "@mui/material";


const User = observer(() => {
  const navigate = useNavigate()
  const [showMenu, setShowMenu] = useState(false);
  const [show, setShow] = useState('home')
  const [person, setPerson] = useState(null)

  function handleSubmit() {
    axios.post("http://localhost:4000/user/logout").then(e => navigate('/')).catch(err => {
      navigate('/error', { stat: { err: err.respons.data.message } })
    })
  }

  useEffect(() => {
    axios.get("http://localhost:4000/user/:id").then(e => setPerson(e.data.user)).catch(err => {
      if (err.response && err.response.data.message === "JWT false") {
        navigate('/login');
      } else if (err.response && err.response.data.message === "Token error") {
        navigate('/login');
      }
    })
  }, [])
console.log(person)

  return (

    <>
      {
        person && <>

          <section className='user__container' >
            <div className='user__data'>
              <span>{person.name}</span>


              <figure>
                <img src={person.img} alt="user" />
              </figure>
            </div>
          </section>
          <section className='user__list'>
            <section className='user__menu'>
              {
                showMenu ? <div>
                  <div className='close'>
                    <CloseIcon onClick={() => { setShowMenu(false) }} />
                  </div>

                  <div className='menu__list'>
                  <Button className='menu__name' variant="contained" onClick={() => { setShow('home') }} >

                      <HomeIcon />
                      <i>Домои</i>
</Button>
                    <Button className='menu__name' variant="contained" onClick={() => { setShow('favorite') }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                      </svg>
                      <i>Сохраненные</i>
                    </Button>
                    <Button className='menu__name' variant="contained" onClick={() => { setShow('sentings') }}>

                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gear" viewBox="0 0 16 16">
                        <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                        <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                      </svg>
                      <i>Настроики </i>
                    </Button>
                    <Button className='menu__name' variant="contained" onClick={() => handleSubmit()}>

                      <LogoutIcon />
                      <i>Выйти </i>
                    </Button>
                  </div>


                </div> : <button className='menu__button' onClick={() => { setShowMenu(true) }}><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                </svg></span><i>Menu</i></button>
              }

            </section>
            {
              show === 'home' ? <Userhome /> : show === 'sentings' ? <Sentings /> : <Favorite />

            }
          </section>

        </>}
    </>



  );
});

export default User;
