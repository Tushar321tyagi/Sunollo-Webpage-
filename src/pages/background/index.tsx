import React from 'react'
import './background.scss'
import imgt from '../../styles/src/images/sunolloimg.webp'
import img2 from '../../styles/src/images/sunolloimg2.webp'
import img3 from '../../styles/src/images/sunolloimg3.webp'

const BackgroundContainer = () => {
  return (
    <>
    <section className='upper'>
      <div className='upperright'>
        <p>About<sup> </sup> Sunollo<sup>TM</sup></p>
        <p className='upperright2'>
         Illuminating the world <br />
         with sustainable energy <br />
         solutions.
        </p>
      </div>
      <div className='upperleft'>
      At Sunollo, we envision a future where clean energy isn't a luxury, but a right for every home and business.
      <p>
      Harnessing the power that comes from nature itself - the sun for all.
      </p>
      </div>
    </section>
    <section className='middle'>
      <div className='middleLeft'>
        <img src={imgt} alt="" className='imgt'/>
      </div>
      <div className='middleCenter'>
        <img src={img2} alt="" className='img2'/>
      </div>
      <div className='middleRight'>
        <img src={img3} alt="" className='img3'/>
      </div>
    </section>
    </>
  )
}

export default BackgroundContainer