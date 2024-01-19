
import { useNavigate } from "react-router";
import "../../assets/style/movies_element.scss"

export default function ElementMovies({data}) {   
    const navigate = useNavigate();

    return (
        
        <section className="movies" key={data.key}> 
                    <figure className="url" onClick={() => navigate(data.name)}>
                        <img src={data.img} alt={data.name} />
                    </figure>
                    <div className="table__div__container">
                        <p className="url">
                            <span >Название:</span> {data.name}
                        </p>
                        <p>
                           <span>Год:</span>  {data.year}
                        </p>
                        <p>
                            <span>Реитинг:</span>{data.raiting}
                        </p>
                        <p>
                        <span>время:</span>   {data.time}
                        </p>
                        <p>
                        <span>Жанры:</span>    {data.name}
                        </p>
                        <p>
                        <span>Страна:</span>    {data.continent}
                        </p>
                        <p>
                        <span>Режисёр:</span>    {data.director}
                        </p>
                        <p>
                        <span>Актёры:</span> 
                        <>
                            {data.actors.map((i,e) => {
                                return <i key={e}>{i}, </i>
                            })}
                        </>
                          
                        </p>
                        <p>
                        <span>сюжет: </span>    {data.content}
                        </p>
                    </div>

        </section>
    )
}
