import React, { Component } from 'react'
import { Row, Col, Tag, Icon, Divider ,Badge , Tooltip} from 'antd';
import './Restrant.scss' 
 

export default class RestrantCard extends Component {
   
  // "Restaurant ID" : 6318506,
  //   "Restaurant Name" : "Ooma",
  //   "Cuisines" : "Japanese, Sushi",
  //   "Average Cost for two" : 1500,
  //   "Currency" : "Botswana Pula(P)",
  //   "Has Table booking" : "No",
  //   "Has Online delivery" : "No",
  //   "Aggregate rating" : 4.9,
  //   "Rating color" : "Dark Green",
  //   "Rating text" : "Excellent",
  //   "Votes" : 365
  

  render() {
 
   
   const {  
    "Restaurant Name" : RestName,
     Cuisines,
    "Average Cost for two" : avgF2,
    Currency,
    "Has Table booking" : HTB,
    "Has Online delivery" : HOD,
    "Aggregate rating" : AVR,
    "Rating color" : RC,
    "Rating text" : RT,
    Votes,
    restaurantsAdd
  } = this.props.datanew;

 const { City,Address,Locality } 
 = restaurantsAdd[0];
 

/*
 "Restaurant ID" : 6304287,
    "Country Code" : 162,
    "City" : "Makati City",
    "Address" : "Little Tokyo, 2277 Chino Roces Avenue, Legaspi Village, Makati City",
    "Locality" : "Little Tokyo, Legaspi Village, Makati City",
    "Locality Verbose" : "Little Tokyo, Legaspi Village, Makati City, Makati City",
    "Longitude" : 121.014101,
    "Latitude" : 14.553708

*/
    return (
      <div className="card">
        <Row>
        <Col  sm={12}  md={{ span: 8 ,offset:1 }}  >
         <div className="nameLoc" >
         <span><h2> <Icon type="shop" /> {RestName}</h2></span>
         <span> <Icon type="environment" /> {City}</span>
         <span> {Address}</span>
         <span style={{fontSize:".8rem",fontStyle:"italic"}}>{ Locality }</span>
         <span>
         <Icon type="wallet" /> <h3>Average Cost for two </h3>
         </span>
         <span>   {Currency } {avgF2}</span>
         </div>

        
        </Col>  
        
        <Col  sm={12}  md={{ span: 6, offset: 1 }}  >
        <div className="review" >
        <span><h3 style={{fontWeight:"bold"}}>Review</h3></span>
        <span>Aggregate rating : <Icon type="star" theme="filled" />  <Badge count={AVR} />({Votes}) </span>
        <Tooltip placement="topLeft" title={RC}>
        <span>Rating Color : <Icon type="tag"  theme="filled"  style={{color:RC}}/></span>
        
      </Tooltip>
      <br></br>
      <span><h3 style={{fontWeight:"bold"}} > <Icon type="alert" /> Cursine</h3></span>
      <span>
{
  Cuisines.split(',').map( (f) => {
    return(
      <Tag key={Math.random()} color="magenta">{f.trim()}</Tag>
    )
    
  })
}
    
      </span>
        <br></br>
        <span> <h3 style={{fontWeight:"bold"}} >  <Icon type="notification" /> User Rating </h3><b> {RT}</b>  </span>
        </div>
        </Col>
        <Col  sm={12}  md={{ span: 7, offset: 1 }}  >
       
       
       <iframe width="100%" title="myFrame"  frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=10.972546935081484%2C49.59850757245689%2C10.97988545894623%2C49.60164362863992&amp;layer=mapnik&amp;marker=49.600075625759565%2C10.976216197013855"  ></iframe><br/><small><a href="http://www.openstreetmap.org/?mlat=49.60008&amp;mlon=10.97622#map=18/49.60008/10.97622">Größere Karte anzeigen</a></small> 
         
        </Col>

        </Row>
 

        <Row>
        <Col  sm={6}  md={{ span: 8, offset: 1 }}  > 
        <Icon className={ (HTB === "Yes") ? 'green' : 'red' } type={((HTB === "Yes") ? 'check' : 'close')} />  Table booking 
        <Divider type="vertical"/>
        <Icon className={ (HOD === "Yes") ? 'green' : 'red' } type={((HOD === "Yes") ? 'check' : 'close')} />   Online delivery 
         
         </Col>
        <Col  sm={6}  md={{ span: 4, offset: 8 }}  > <button className={"write"}> Order</button></Col>
        </Row>
        
      </div>
    )
  }
}
