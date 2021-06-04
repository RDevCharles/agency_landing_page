const SmallDiv = () => {
    return (
        <div style={{display:'flex',backgroundColor:'#ff2d2d', height:'300px', width:'100vw', justifyContent:'center', alignItems: 'center', flexDirection:'column'}}>
        <h1 style={{ margin: '0rem', color: 'white' }} class="title is-3">Services</h1>
        <div style={{color: 'white', display: 'flex', flexDirection: 'row', justifyContent:'center', alignItems:'base-line', textAlign:'center'}}>
          <ul>
            <h4 style={{ marginTop: '4rem', width: '22rem', color: 'white' }} class="title is-5">iceland snackwave.</h4>
            <li>Some service offered</li>
            <li>Some service </li>
            <li>Some service offered</li>
            <li>Some service </li>
            <li>Some service offered</li>
            <li>Some service </li>
          </ul>
          <ul>
            <h4 style={{ marginTop: '4rem', width: '22rem', color: 'white' }} class="title is-5">iceland snackwave.</h4>
            <li>Some service offered</li>
            
            <li>Some service </li>
          </ul>
          <ul>
            <h4 style={{ marginTop: '4rem', width: '22rem', color: 'white' }} class="title is-5">iceland snackwave.</h4>
            <li>Some service offered</li>
            <li>Some service </li>
            <li>Some service offered</li>
            <li>Some service </li>
          </ul>
       
          
        </div>

      </div>
)
}

export default SmallDiv;