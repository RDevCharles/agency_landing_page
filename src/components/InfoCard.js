import React from 'react';
import Close from './icons/close.png';
const InfoCard = (props) => {

    const [disp, setDisplayed ] = React.useState('flex')
    return (
      <div
        
        style={{display:`${disp}`, width: '20rem', height: '24rem', margin: '2rem 1rem',zIndex:1,  }} class="card">

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} class="card-content">
  
                <div style={{ height: '14rem' }} >
                    <img className="btnImg" onClick={() => {
                        setDisplayed('none')
                }} style={{ position: 'absolute', width: '1.2rem', top: '1rem',right: '.5rem'}} src={Close}/>
            <h3>{props.title}</h3>
                    <p style={{ fontSize: '13px', fontWeight: 'bold' }}>{props.message}
                        <input style={{margin:'2rem 0rem'}} class="input" type="text" placeholder="Phone Number"/>
                        <input style={{ marginBottom: '2rem' }} class="input" type="text" placeholder="Email" />
                        <button onClick={() => {
                        setDisplayed('none')
                }} style={{backgroundColor:'red', color:'white'}}class="button is-small is-fullwidth">Submit</button>
</p>
           
      
      </div>
        </div>
        
        
          </div>
)
}

export default InfoCard