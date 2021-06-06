import React from 'react';
import './App.css';
import "aos/dist/aos.css";
import AOS from 'aos';
import TopNav from './components/TopNav';
import TopQuestion from './components/TopQuestion';
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
    
<TopQuestion/>
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
     
      <Footer />
     
    </div>
  );

  
}

export default App;
