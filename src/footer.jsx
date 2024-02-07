import React from 'react'

export default function Footer() {
  return (
    <section className="dis-non"  style={{ bottom: '0px', width: '100%', position: 'fixed', zIndex: 999 , background:'#ffff'}}>
    <div className="copyright-wrap bg-navy-blue " style={{ paddingTop: '10px', paddingBottom: '10px' }}>
      <div className="">
        <div className="row text-md-left text-center" style={{ margin: '0px' }}>
           
            <div className="col-sm-4 col-md-4  text-center cop-f" >
               <a href="http://www.iifm.co.in"> © Copyright IIFM Ltd. | All Right Reserved</a>
            </div>
            <div className="col-sm-4 col-md-4  text-center dis-non cop-f" style={{ color: '#0d3d7e !important' }}>
               <img src="https://prathamonline.com/images/icon/call.png" style={{ width: '20px', paddingRight: '6px' }}/> +91- 99999 75392 , 011-42 666 000
            </div>
            <div className="col-sm-4 col-md-4  text-center dis-non cop-f" >
                <img src="https://prathamonline.com/images/icon/mesasage.png" style={{ width: '20px', paddingRight: '6px' }}/>INFO@PRATHAMONLINE.COM
            </div>
        </div>
      </div>
    </div>
 </section>
  )
}
