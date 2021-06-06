import '../App.css';
import HeroImg from './assets/images/agency.jpg';

const Header = () => {
  return (
      <>
        <div  style={{ display: 'flex', flexDirection: 'row', backgroundColor:'#0f0f0f' }}>
        <div className='centerAdjust' style={{margin:'4rem 40% 0rem 4rem ',width:'35rem'}}>
          <h1  class='centerMargin' style={{marginBottom:'4rem', color:'white'}}class="title is-1">Be the first to know about upcoming offers & events</h1>
        <button style={{backgroundColor:'red', marginBottom:'4rem'}} class="button is-danger is-large">Join The Mailing List</button>
          </div>
        <img className="phoneMinus" style={{ width: '25rem' }} src={HeroImg} />
        
      </div>
     
      </>
)
}

export default Header;