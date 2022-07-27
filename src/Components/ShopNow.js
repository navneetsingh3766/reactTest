import React from 'react'

function ShopNow() {
  return (
    <section>
       <div className="m-5 p-5 me-0 pe-0">
    
    <div className="d-flex justify-content-end  position-relative ">
        <div className='position-absolute top-0 end-0 m-5 p-5 me-0 pe-0 mt-0 pt-0'>

        
      <div className="position-relative " style={{width:"50vw" , zIndex:"-1"
    ,mixBlendMode:"luminosity"
    }}>

      <img
      style={{width:"100%"}}
      src={process.env.PUBLIC_URL + "/images/ShopNow.png"} alt="about" className="img-fluid 
      " />
  
      </div>
      <div className='position-absolute ' style={{zIndex:"1",top:"20%", left:"20%"}}>
            <img 
            style={{width:"350px",height:"auto"}}
            src={process.env.PUBLIC_URL + "/images/WhiteHat.png"} alt="about" className="img-fluid
            " />
            <img src={process.env.PUBLIC_URL + "/images/HatLogo.png"} alt="about" className="position-absolute
            " style={{width:"125px",height:"auto",top:"20%",left:"25%", zIndex:"2"}} />
            
        </div>
        </div>
    </div >
      <div className="d-flex justify-content-end  flex-column" style={{width:"30vw",marginTop:"10rem"}}>
       
          <h3 style={{width:"60vw" , fontWeight:700,fontSize:"70px",textTransform:"uppercase"}} className="d-flex justify-content-start">
          Want To purchase our  merchandise
          </h3>
          <p>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
          <button style={{
            width:"200px",
            height:"50px",
            color:"#CA9E67",
            backgroundColor:"#141011",
             borderRadius:"33px",
             borderColor:"#141022"}} >SHOP NOW &rarr;</button>
        </div>
    </div>
            </section>
  )
}

export default ShopNow