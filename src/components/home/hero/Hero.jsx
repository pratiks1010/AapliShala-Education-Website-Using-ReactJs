import React from 'react'

import './hero.css'

const Hero = () => {
  return (
    <div>

     <section className='hero'>

          <div className="container">
               <div className="row">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut ipsam omnis natus sed voluptatibus laboriosam delectus itaque soluta hic explicabo aliquid labore, sapiente dolorum totam quae? Aliquam atque tempora similique.</p>
                    <div className="button">
                         <button className="primary-btn">
                              GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
                         </button>

                         <button className="primary-btn">
                              VIEW COURSES <i className='fa fa-long-arrow-alt-right'></i>
                         </button>
                    </div>
               </div>
          </div>
     </section>

     <div className="margin"></div>


    </div>
  )
}

export default Hero