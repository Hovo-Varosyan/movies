import Homeslide from "../components/homeslide";
import storeData from "../store/store";
import "../assets/style/homeslide.scss"
import Slide from "../components/slide";

const Home = () => {
    const data = storeData.data

    return (
        <>
            <Homeslide />
            <section >
                <div className="slidebar">
                    <h5>Новые фылми</h5>
                    <Slide data={data}  timer={Math.floor(Math.random() * 5000)+2000} />
                </div>
                <div className="slidebar">
                    <h5>Топ фылми</h5>
                    <Slide data={data} timer={Math.floor(Math.random() * 5000)+2000} />
                </div>
                <div className="slidebar">
                    <h5>Новые Аниме</h5>
                    <Slide data={data}  timer={Math.floor(Math.random() * 5000)+2000} />
                </div>
                <div className="slidebar">
                    <h5>Топ Аниме</h5>
                    <Slide data={data}  timer={Math.floor(Math.random() * 5000)+2000} />
                </div>
                <div className="slidebar">
                    <h5>Новые сериалы</h5>
                    <Slide data={data}  timer={Math.floor(Math.random() * 5000)+2000} />
                </div>
                <div className="slidebar">
                    <h5>Топ сериалы</h5>
                    <Slide data={data}  timer={Math.floor(Math.random() * 5000)+2000} />
                </div>
            </section>
        </>
    )
}

export default Home
