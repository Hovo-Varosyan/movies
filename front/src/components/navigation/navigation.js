
import "../../assets/style/navigation/navigation.scss"
import Search from "./component/search"
import { useNavigate } from 'react-router-dom';


export default function Navigation() {
    const navigate=useNavigate()
    return (
        <section className="section__navigation">
            <nav className="nav__navigation">
                <ul className="nav__ul">
                    <li onClick={()=>navigate('/')}>
                        Главная
                    </li>
                    <li>
                        Фылми
                    </li>
                    <li>
                        Сериали
                    </li>
                    <li>
                        Дорама
                    </li>
                    <li>
                        Аниме
                    </li>
                    <li>
                        <Search value={"Поиск"} />
                    </li>
                    <li>
                        <button className="login" onClick={() => { navigate("login") }}>&#128100;</button>
                    </li>
                </ul>
            </nav>
        </section>
    )
}
