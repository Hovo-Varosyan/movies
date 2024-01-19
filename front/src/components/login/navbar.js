import '../../assets/style/login.scss'

export default function Navbar({ views, setViews }) {

  return (
    <nav>
      <ul>
        <li className={views === "signin" ? "active" : null} onClick={() => setViews('signin')}>
          Login
        </li>
        <li className={views !== "signin" ? "active" : null} onClick={() => setViews('registr')}>
          Registration
        </li>
      </ul>
    </nav>
  );
}

