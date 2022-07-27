import React from 'react'

function About3() {
  return (
    <section className='mt-5' style={{backgroundColor:"#131112",maxHeight:"500px"}}>
        <div className='row m-0 p-0'>

        <div className=' col'>
        <div className='d-flex justify-content-center mt-5' style={{fontWeight:700, fontSize:"50px"
    ,color: "#CA9E67",}}>
        <span style={{textAlign:"justify",width:"300px",textTransform:"uppercase"}}>

            Allow the beverages to come to you.
        </span>
            </div>
        </div>
        <div className='col'>
            <img 
                src={process.env.PUBLIC_URL + "/images/Chef.png"} 
                alt="Chef" 
                className="img-fluid"
                 style={{width:"100%"}}/>

        </div>
        <div className='col'>
            <div className='w-100 h-100 d-flex  flex-column justify-content-center align-items-start' style={{fontWeight:300, fontSize:"25px", }}>
                <p>Beer And Food Delivered In Under 60 Minutes</p>
                <button className='btn mt-5' style={{backgroundColor:"#FFA54F",color:"white",borderColor:"black", borderRadius:"33px"}}>Order Now &rarr;</button>
            </div>
        </div>
        </div>
    </section>
  )
}

export default About3