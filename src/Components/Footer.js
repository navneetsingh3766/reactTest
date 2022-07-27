import React from 'react'

function Footer() {
  return (
    <section>
        <div className='position-relative pt-5 mt-5'>
        <div className='w-100'>
            <div className='d-flex justify-content-center align-items-center flex-column w-100 '>
                <span  style={{color:"#F8E32D"}}>&uarr;</span>
                <p>TOP</p>
                </div>
            </div>
            {/* footer start */}
        <div className='w-100 '>
            <div className='row m-0 p-0'>
                <div className='col-4 pe-0' style={{paddingLeft:"10vw",color:"#DC9696"}}>

                    <ul className='list-group' >
                        <li className='' style={{listStyle:"none"}}><span className='pe-3'>&rarr;</span>ABOUT</li>
                        <li style={{listStyle:"none"}}><span className='pe-3'>&rarr;</span>BEERS</li>
                        <li style={{listStyle:"none"}}><span className='pe-3'>&rarr;</span>FOOD</li>
                        <li style={{listStyle:"none"}}><span className='pe-3'>&rarr;</span>SHOP</li>
                        <li style={{listStyle:"none"}}><span className='pe-3'>&rarr;</span>CONTACT</li>
                    </ul>
                    <p style={{marginTop:"10rem"}}>© Copyright 2021 </p>
                    </div>
                <div className='col-4 ps-0'>
                    <p  className='d-flex justify-content-center' style={{color:"#CA9E67",textTransform:"uppercase" }}>Newsletter sign up</p>
                    <div className='d-flex justify-content-center' style={{}}>
                        <input type='text' placeholder='Enter your email' className='' style={{
                            border: "2px solid #CA9E67",
                            background:" transparent"}}/>
                        <button className='btn ' style={{backgroundColor:"#CA9E67" , borderRadius:"0px"}}>
                            <img src={process.env.PUBLIC_URL + "/images/Submit.png"} alt="mail"
                             className="img-fluid" 
                            style={{width:"20px"}}/>
                        </button>
                    </div>
                    </div>
                <div className='col-4' style={{color:"#DC9696"}}>
                    <p>298, 100 Ft Rd,
                    Indira Nagar II Stage,
                    Bengaluru 560038 Karnataka</p>
                    <p>+91 90197 13388</p>
                    <p>toitblr@toit.in</p>
                    <p style={{marginTop:"9rem"}}>All Rights Reserved</p>
                    </div>
                    </div>

                    
        </div>
        <div className='w-100  position-absolute' 
        style={{
            zIndex:"-1",
            top:"40%"
            }}>
            <img 
            className='w-100 '
            src={process.env.PUBLIC_URL + "/images/Footer-Img.png"} alt="footer"/>
        </div>
        </div>
            </section>
  )
}

export default Footer