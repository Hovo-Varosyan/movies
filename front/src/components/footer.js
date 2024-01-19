import React from 'react'
import '../assets/style/footer.scss'
export const Footer = () => {
    return (
        <>
            <hr className='hr'/>
            <footer className='footer'>
                <ul>
                    <li>
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
                </ul>
                <p>© 2023  все авторские права зашишены </p>
            </footer>
            <hr className='hr' />
        </>
    )
}
