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
    <section className='lower'>
     <h1>Our Track Record</h1>
     <div className='lower1'>
     <span className='lower2'>
      <h1>80000+</h1>
      <p>Solar panells installed.</p>
     </span>
     <span className='lower2'>
      <h1>52 GWH</h1>
      <p>Energy Produced</p>
     </span>
     <span className='lower2'>
      <h1>12000+</h1>
      <p>Household Served</p>
     </span>
     </div>
    </section>
    <section className='bottom1'>
    <p className='our'>Our purpose </p>
      <div className='bottom'>
        <h2 className=''>What if clean energy ☀️ <br />could power our planet <br /> for free?</h2>
      </div>
     <p className='parah'>
     At Sunollo™, our purpose is to lead the charge in driving the clean energy <br />
     revolution, starting with the homes and communities we serve.
     <br /><br />
     We believe in empowering individuals and businesses to embrace solar energy, <br />
     not only to reduce their carbon footprint but also to unlock new possibilities for <br />
     sustainable living.
     <br /><br />
     By harnessing the power of the sun, we aim to inspire positive change and create a <br />
     legacy of environmental stewardship for generations to come.
     </p>
    </section>
    </>
  )
}

export default BackgroundContainer