import React from 'react'
import Slide from '../../slide'
import storeData from '../../../store/store'

export const Userhome = () => {
    const data=storeData.data
  return (
    <section>


    <div >
      <h5>История</h5>
      <Slide data={data} />
    </div>

    <div>
      <h5>Сохраненные</h5>
      <Slide data={data} />
    </div>
  </section>
  )
}
