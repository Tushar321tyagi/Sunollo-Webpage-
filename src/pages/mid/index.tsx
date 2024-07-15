import React from 'react'
import './index.scss'
import img6 from '../../styles/src/images/img6.webp'
import img7 from '../../styles/src/images/img7.webp'
import img8 from '../../styles/src/images/img8.webp'
import img9 from '../../styles/src/images/img9.webp'
import img10 from '../../styles/src/images/img10.webp'
import img12 from '../../styles/src/images/img12.webp'
import img13 from '../../styles/src/images/img13.webp'
import img14 from '../../styles/src/images/img14.webp'


const MidContent = () =>{
  return (
    <>
      <section className='journey'>
        <div className='img' >
          <img src={img6} alt="" className='image' />
        </div>
        <div className='element2'>
           <p>But how do we get there?</p>
           <span className='line1'>
            <p>01
            <h2>Build an <br />Ecosystem</h2></p>
            <p>Comprising of individuals, communities, <br />businesses, industry leaders.</p>
           </span><hr />
           <span className='line1'>
            <p>02
            <h2>Drive <br />Sustainability</h2></p>
            <p>Comprising of individuals, communities, <br />businesses, industry leaders.</p>
           </span><hr />
           <span className='line1'>
            <p>03
            <h2>Make Solar  <br />Hassle-Free</h2></p>
            <p>Comprising of individuals, communities, <br />businesses, industry leaders.</p>
           </span>
        </div>
      </section>
      <section>
        <div className='element3'>
            <span>
            <h4>Our Goal</h4>
            <h2>Bring Sunollo <br />around the world</h2>
            <p>Sunollo aims to transform the energy landscape and <br />
            commit to fostering energy independence, promoting <br />
            sustainable development, and contributing to a <br />
            healthier planet for future generations.</p>
            </span>
            <div className='element3a'>
                
                <p>1000000
                <p>Roofs installed with <br /><b>Sunollo</b> Solar by 2030</p></p>
            </div>
        </div>
        <h1>Our Work</h1>
        <div className='element4'>
            <div className='imga'>
               <img src={img7} alt="" className='img7'/>
            </div>
            <div className='imga'>
               <img src={img8} alt="" className='img8'/>
            </div>
            <div className='imga'>
               <img src={img9} alt="" className='img9'/>
            </div>
        </div>
        <div className='element5'>
        <div className='imgb'>
               <img src={img10} alt="" className='img10'/>
            </div>
            <div className='imgb'>
               <img src={img8} alt="" className='img11'/>
            </div>
        </div>
        <div className='element5'>
            <div className='imga'>
               <img src={img12} alt="" className='img7'/>
            </div>
            <div className='imga'>
               <img src={img13} alt="" className='img8'/>
            </div>
            <div className='imga'>
               <img src={img14} alt="" className='img9'/>
            </div>
        </div>
        <div className='element6'>
            <span>
                <p>OUR PARTNERS</p>
                <h2 className='element6a'>We've worked on mega <br />scale projects with forward- <br />thinkers across countries.</h2>
            </span>
            <p className='element6b'>Sunollo partners with companies and organizations to <br />develop projects together and shape a <br />sustainable tomorrow.</p>
        </div>
      </section>
    </>
  )
}

export default MidContent;