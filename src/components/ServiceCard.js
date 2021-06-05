
const ServiceCard = (props) => {
    return (
      <div
        
        style={{ width: '16rem', height: '6rem', margin: '2rem 1rem' }} class="card">

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} class="card-content">
         
       
          <div style={{ height: '14rem' }} >
            
            <p style={{ fontSize: '13px', fontWeight: 'bold' }}>{props.p}</p>
            <a>See More</a>
      
      </div>
        </div>
        
        
          </div>
)
}

export default ServiceCard