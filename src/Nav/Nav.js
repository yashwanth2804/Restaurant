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
    <Col span={2} offset={6} >
    
   
    </Col>
    <Col span={6} offset={2}>
    <button className={"write"}>Logout</button>
    </Col>
  </Row>
    </div>
  )
}
