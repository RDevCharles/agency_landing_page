import './App.css';
import "aos/dist/aos.css";
import AOS from 'aos';
import TopNav from './components/TopNav';
import Header from './components/Header';
import Services from './components/Services';
import Footer from './components/Footer';
import BigButton from './components/BigButton';
import PhoneHeader from './components/PhoneHeader';

AOS.init();

function App() {
  return (
    <div className="App">
      <TopNav />
    
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection:'column' }} className='image_roll'>
      
        <h1 data-aos="fade-up"
     data-aos-duration="3000" class='centerMargin' style={{ marginBottom: '4rem', color: 'white' }} class="title is-1">Before we get started... Would you hire yourself?</h1>
        <div data-aos="fade-up"
     data-aos-duration="3000" style={{ display:'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems:'center'}}><BigButton title='I am the boss' /> <BigButton title="I'm not sure" /></div>
  
       

</div>
      <div className='regHeader'>
        <Header />
        </div>
      <div className='phoneHeader' >
        <PhoneHeader/>
        </div>
      <Services />
     
      <div style={{ display: 'flex',alignItems:'center',justifyContent: 'center', }} className='image_roll2'>

      <BigButton title='Book Free Consultation'/>
      </div>
     
      <Footer/>
    </div>
  );
}

export default App;
