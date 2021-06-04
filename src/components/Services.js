import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import ServiceCard from './ServiceCard';
// ..
AOS.init();

const Services = () => {

    return(      <div data-aos="fade-up"
      data-aos-anchor-placement="top-center"
      data-aos-duration="1000"  style={{ display: 'flex', flexDirection: 'column',  alignItems: 'center', textAlign: 'center' }}>
    <h4 style={{marginTop:'4rem', width:'22rem'}}class="title is-3">Pok pok PBR&B quinoa 3 wolf moon iceland snackwave.</h4> 
    <div style={{display:'flex', flexDirection: 'row', flexWrap:'wrap', justifyContent: 'center',marginBottom:'4rem'}}>

      {/** Testimonials */}
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard/>
    
 
  
      </div>
    </div>)
}

export default Services;