import { Route, Routes, useLocation } from "react-router-dom";
import Table from "./pages/table";
import Elementpage from "./pages/elementpage";
import Login from "./pages/login";
import Home from "./pages/home";
import { Footer } from "./components/footer";
import Navigation from "./components/navigation/navigation";
import User from "./pages/user";
import { Sentings } from "./components/sentings";
import { Favorite } from "./components/favorite";
import Error from "./pages/error";
import axios from 'axios'

function App() {

  axios.defaults.withCredentials = true

  const location = useLocation();

  const shouldShow = location.pathname !== '/login' && location.pathname !== "/error";

  return (
    <>
      {shouldShow && <Navigation />}

      <main>
        <Routes>
          <Route path="/movies" element={<Table />} />
          <Route path="/movies/:id" element={<Elementpage />} />
          <Route path="/" element={<Home />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/sentings" element={<Sentings />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/login" element={<Login />} />
          <Route path="/error" element={<Error />} />
        </Routes>
        {shouldShow && <Footer />}
      </main>

    </>
  );
}

export default App;
