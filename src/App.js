import './App.css';
import "aos/dist/aos.css";
import TopNav from './components/TopNav';
import Header from './components/Header';
import Services from './components/Services';
import SmallDiv from './components/SmallDiv';
import Footer from './components/Footer';
import RollImg from './components/assets/images/roll.jpg';
import BigButton from './components/BigButton';
import PhoneHeader from './components/PhoneHeader';

function App() {
  return (
    <div className="App">
      <TopNav />
    
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }} className='image_roll'>
      <BigButton/>

</div>
      <div className='regHeader'>
        <Header />
        </div>
      <div className='phoneHeader' >
        <PhoneHeader/>
        </div>
      <Services />
      <div style={{ display: 'flex',alignItems:'center',justifyContent: 'center', }} className='image_roll2'>

      <BigButton/>
      </div>
     
      <Footer/>
    </div>
  );
}

export default App;
