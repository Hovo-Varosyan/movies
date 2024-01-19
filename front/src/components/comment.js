import { v4 as uuidv4 } from 'uuid';
import "../assets/style/comment.scss"

export default function Comment({data}) {
  return (
    <>
    <form className='form__comment' method="post">
                <textarea placeholder="get  comment" name="comment"></textarea>
                <input type="submit" value="Отправить" />
              </form>
              <div>
                {data[0].Comment.map((e) => {
                  return (
                    <div key={uuidv4()} className="comment">
                      <div>
                        <figure>
                          <img src={e.img} alt="author" />
                        </figure>
                        <span>{e.author}</span>
                      </div>

                      <div>
                        <p>
                          {e.comment}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div></>
  )
}
