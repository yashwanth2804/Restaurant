import React from 'react'
import './Nav.scss';

import { Row, Col} from 'antd';
export default function Nav() {
  return (
    <div className={"nav"}>
    <Row>
    <Col span={8}>
    <h2>Restraunt Booking app</h2>
    </Col>
    <Col span={2} offset={4} >
    
   
    </Col>
    <Col span={2} offset={2}>
    <button className={"write"}>Logout</button>
    </Col>

     
    <Col span={6} offset={0} >
    {/***
    <div> 
          
         <a className="bmc-button" target="_blank" href="https://www.buymeacoffee.com/nQTRvte">
         <img src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" alt="Buy me a coffee" />
         <span style={{marginLeft: '15px', fontSize: '19px !important'}}>Buy me a coffee</span>
         </a>
      </div>
    */}
    <a href="https://www.buymeacoffee.com/nQTRvte" target="_blank">
      <img src="https://cdn.buymeacoffee.com/buttons/arial-red.png" alt="Buy Me A Coffee" className={"f"} />
    </a>
    
    </Col>

     

  </Row>
    </div>
  )
}
