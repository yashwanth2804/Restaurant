import React, { Component } from 'react'
import RestrantCard from '../RestrantCard/RestrantCard'
import { Alert } from 'antd'
export default class index extends Component {
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

    
      const data__ = this.props.data;

     let y =  data__.map((d,i) =>{

       
       return(
         <div  key={i} ><RestrantCard datanew={d} />  <br></br> </div>
        
       )

      });
     const r  =  (y.length > 0 ) ? (  y ) : (    <Alert type="error"  message="No more Reseults found !!" banner /> )
 

    return (
      <div id="Restrantresult">
     { r }
       
      </div>
    )
  }
}
