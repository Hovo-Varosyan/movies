import React from 'react'
import storeData from '../store/store'
import '../assets/style/favorite.scss'
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export const Favorite = () => {
    const data = storeData.data
    return (
        <>
            <section className='favorite__conteiner'>
                {
                    data.map((e, i) => {
                        return <div key={i} className='favorite__div'>
                            <figure>
                                <img src={e.img} alt='' />
                            </figure>
                            <div >
                                <div>
                                    <div>
                                        {e.name}
                                    </div>
                                    <div className='star' >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-star-fill" viewBox="0 -2 15 22">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                    </div>
                                    <div className='content'>

                                        <Rating name="read-only" value={3} readOnly /> <Typography component="legend">3</Typography>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }
            </section>
        </>
    )
}
