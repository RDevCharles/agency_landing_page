import React from 'react';
import Close from './icons/close.png';
const InfoCard = (props) => {

    const [disp, setDisplayed ] = React.useState('flex')
    return (
      <div
        
        style={{display:`${disp}`, width: '20rem', height: '20rem', margin: '2rem 1rem',zIndex:1,  }} class="card">

        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center' }} class="card-content">
  
                <div style={{ height: '14rem' }} >
                    <img className="btnImg" onClick={() => {
                        setDisplayed('none')
                }} style={{ position: 'absolute', width: '1.2rem', top: '1rem',right: '.5rem'}} src={Close}/>
            <h3>{props.title}</h3>
                    <p style={{ fontSize: '13px', fontWeight: 'bold', }}>{props.message}
                      
                    </p>      
                        <a href={"https://docs.google.com/document/d/1bk4-jz8-QK_TU-Qa9brroSzyoSQDFL8Wf-gHOv2IYCg/edit?usp=sharing "} style={{marginTop:'4rem'}}onClick={() => {
                        setDisplayed('none')
                }} style={{backgroundColor:'red', color:'white'}}class="button is-small is-fullwidth">Take questionnaire</a>

           
      
      </div>
        </div>
        
        
          </div>
)
}

export default InfoCard