import Carousel from "react-bootstrap/Carousel";

function Carousels() {
  const images = [
    "https://prathamonline.com/updatedbanners/law.png",
    "https://prathamonline.com/images/clat/1.jpg",
    'https://prathamonline.com/images/clat/2.jpg',
    "https://prathamonline.com/images/clat/3.jpg",
    'https://prathamonline.com/images/clat/5.jpg',
    'https://prathamonline.com/images/clat/6.jpg',

  ];
  return (
    <div style={{background: '#081054',marginTop:'150px',position:'relative'}}>
<Carousel data-bs-theme="dark" controls={false}   >
        {images.map((item,id)=>(
             <Carousel.Item interval={1000} key={id}>
             <img
               className="d-block"
               src={item}
               style={{display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto'}}
               alt="CLAT Coaching Institute, CLAT Test Series, CLAT Test Series, CLAT Coaching, Preparation for CLAT, Coaching after className 12, in India's Leading CLAT Coaching Institute, PRATHAM Test Prep after className 11 and className 12 for Exhaustive CLAT, CLAT 2023-24-25 Best Coaching Institute, Avail Mock test Series"
             />
           </Carousel.Item>
        ))}
   

    





  );


    </Carousel>
    <section style={{ padding: '20px 0px 0px', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <nav style={{ margin: '0 auto' }}>
        <ol className="breadcrumb" style={{ marginBottom: '0px', marginTop: '0px', fontWeight: 600 }}>
          <li className="breadcrumb-item"><img src="https://prathamonline.com/images/home.png" style={{ width: '15px', marginBottom: '2px' }} alt="CLAT Coaching Institute, CLAT Test Series, CLAT Test Series, CLAT Coaching, Preparation for CLAT, Coaching after Class 12, in India's Leading CLAT Coaching Institute, PRATHAM Test Prep after Class 11 and Class 12 for Exhaustive CLAT, CLAT 2023-24-25 Best Coaching Institute, Avail Mock test Series" /></li>
          <li className="breadcrumb-item white">Pages</li>
          <li className="breadcrumb-item white" aria-current="page">Common Law Aptitude Test</li>
        </ol>
      </nav>
    </section>
    </div>
  );
}

export default Carousels;
