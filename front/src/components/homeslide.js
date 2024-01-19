import { useState } from "react";
import storeData from "../store/store";
import "../assets/style/homeslide.scss"
import { Button } from "@mui/material";


const Homeslide = () => {
    const data = storeData.data
    const [slide, setSlide] = useState(0)


    return (
        <>
            <section className="homeslide">
                <div className="slidebutton" onMouseEnter={(e) => { e.currentTarget.style.cursor = "pointer" }} onClick={() => { slide !== 0 ? setSlide(slide - 1) : setSlide(2) }}> {"<"} </div>
                {
                    <div className="slide__relative" >
                        <div>
                            <video autoPlay muted preload="auto"  >
                                <source src="../src/assets/video/trailer.mp4" type="video/mp4" />
                                Ваш браузер не поддерживает формат video.

                            </video>
                        </div>
                        <div className="content">
                            <div>
                                {data[slide].content}
                            </div>
                            <div>
                                <Button variant="contained">Смотреть</Button>
                            </div>
                        </div>
                    </div>
                }
                <div className="slidebutton" onMouseEnter={(e) => { e.currentTarget.style.cursor = "pointer" }} onClick={() => { slide !== 2 ? setSlide(slide + 1) : setSlide(0) }} > {">"} </div>
            </section>
        </>
    )
}

export default Homeslide
