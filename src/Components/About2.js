import React from 'react'

function About2() {
  return (
    <section className=' p-5 ps-0 pe-0'>

    <div className='position-relative'>
        <div className='position-absolute top-0  m-5 p-5 circel' style={{left:"0%"}}>
            
            </div>
            <div className='position-absolute start-0 pt-5' style={{top:"5%",zIndex:"-1"}}>
            <img src={process.env.PUBLIC_URL + "/images/Bottle-1.png"} alt="about" className="img-fluid
            " style={{width:"70%"}} />
           </div>
           
           <div className='position-absolute end-0 d-flex justify-content-end' style={{top:"25%"}}>
           <div className='position-absolute top-0  m-5 p-5 circel' style={{left:"50%"}}>
            </div>
            <img src={process.env.PUBLIC_URL + "/images/Bottle-2.png"} alt="about" className="img-fluid
            "style={{width:"70%" }}  />
              </div>
        <div className='d-flex justify-content-center'>
            <img src={process.env.PUBLIC_URL + "/images/DogLogo.png"} alt="about" className="img-fluid" style={{width:"100px", heigth:"100px"}}/>
        </div>
        <div className='' style={{marginTop:"100px"}}>
            <h3 className='text-center' style={{fontWeight:700,fontSize:"50px"}}>
            Come by. Try everything twice.</h3>

        </div>
        <div>

        <span className='d-flex justify-content-center position-relative'
         style={{color:"#CA9E67", fontWeight:900, fontSize:"200px", marginTop:"10px"}}>

            LOVE
            </span>
            <div className='  w-100 start-0' style={{
                bottom:"25%",
                height:"400px",
                // background: "linear-gradient(180deg, #121011 0%, rgba(18, 16, 17, 0) 100%)"
                }}>

        

            <img 
            src={process.env.PUBLIC_URL + "/images/about-2.png"} alt="about" 
            className="position-absolute "
             style={{
                bottom:"-5%",
                zIndex:"-3", 
                mixBlendMode:"luminosity", 
                opacity:"0.5",
                 width:"100%",
             height:"auto"}}/>
            </div>

            
             </div>
        </div>
    </section>
  )
}

export default About2