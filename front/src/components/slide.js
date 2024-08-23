import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import '../assets/style/slide.scss'
export default function Slide({ data, timer=3000 }) {

    const [slide, setSlide] = useState(0)
    
    function next() {
        slide !== 9 ? setSlide(slide + 1) : setSlide(0)
    }


    useEffect(() => {
        const slideInterval = setTimeout(() => {
            next()
        }, timer)

        return () => clearInterval(slideInterval);

    }, [slide])




    return (
        <>
            <section className="slidegrid">
                <div className="slidebutton" onMouseEnter={(e) => { slide === 0 ? e.currentTarget.style.cursor = "not-allowed" : e.currentTarget.style.cursor = "pointer" }} onClick={() => { slide !== 0 && setSlide(slide - 1)  }}> {"<"} </div>
                <div className="slidegridelem">
                    {
                        data.slice(slide, slide + 5).map((e) => {
                            return <figure key={uuidv4()}>
                                <img src={e.img} alt={e.name} />
                            </figure>
                        })
                    }
                </div>
                <div className="slidebutton" onMouseEnter={(e) => { slide === 9 ? e.currentTarget.style.cursor = "not-allowed" : e.currentTarget.style.cursor = "pointer" }} onClick={() => { next() }} > {">"} </div>
            </section>
        </>
    )
}
