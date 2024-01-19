import ElementMovies from "../components/movies/element";
import video from "../assets/video/trailer.mp4";
import "../assets/style/elementpage.scss"
import storeData from "../store/store";
import { observer } from "mobx-react-lite";
import Comment from "../components/comment";
import Slide from "../components/slide";
import Rating from '@mui/material/Rating';
import { useEffect, useState } from "react";


const Elementpage = observer(() => {
  const data = storeData.data
  const [raiting, setRaiting] = useState(2.5)
  useEffect(()=>{

  })

  return (
    <>
        <div className="container__div">
          <div className="favorite"><span>&#9733;</span><b>в ызбранное</b></div>
          <ElementMovies data={data[0]} />
        </div>
        <section className="video">
          <section className="rating">
            <h3>Оцените фылм</h3>
            <div className="rating__flex">
              <Rating name="half-rating" defaultValue={2.5} precision={0.5} onChangeActive={(e, v) => { e.type !== "mouseleave" ? setRaiting(v) : setRaiting(2.5) }} className="stars" />
              <span>{raiting}</span>
            </div>

          </section>
          <video width="100%" height="400px" controls>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>
        <h5>Похожые</h5>
        <Slide data={data} />
        <section>
          <div>
            <h5>Comment</h5>
            <Comment data={data} />
          </div>
        </section>

    </>
  );
})

export default Elementpage
