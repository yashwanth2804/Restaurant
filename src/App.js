import React, { Component  } from 'react';
import Nav from './Nav/Nav'
import './App.scss';
import axios from 'axios'
import {  Row, Col, Divider, Icon, Button, AutoComplete,Skeleton  } from 'antd';

import RestarantList from './RestarantList/index'
 
class App extends Component {
  
  state = {
    skip: 0,
    search_rest: "",
    search_Cur: "",
    data: [],
    Count: 0,
    sort: "Aggregate rating",
    sortOrder: -1,
    page: 1,
    hasNxt: false,
    cuisines:[],
    isLoadingCompleted:false


  }

  async componentDidMount() {
   
    const response = await axios.get("https://nodejs-hhjs72fhf.now.sh/restaurant");
   

    const data_ = response.data;
    const RestrantsCount = data_.Restrants.length;
    const hasNxt = (RestrantsCount === 0) ? false : true;
    
    const response1 = await axios.get("https://nodejs-hhjs72fhf.now.sh/restaurant/cuisines");
   
    const cuisines =  response1.data;
    
   


this.setState({ ...this.state, data: data_.Restrants, Count: data_.Count, hasNxt,
  cuisines: [...this.state.cuisines,...cuisines] , isLoadingCompleted:true
}); 

  }




  render() {



    const handleRest = (e) => {

      this.setState({ search_rest: e.target.value })

    }
    const handleCursine = (e) => {

      console.log( e )
      this.setState({ search_Cur: e})

    }
    const handleSort = async (sort, sortOrder) => {
      console.log(sort + " 7777  " + sortOrder)
      this.setState({
        ...this.state,
        sort,
        sortOrder
      }
        ,
        () => handleSearch()
      );



    }

    const handlePageDec = async () => {

      if (this.state.page > 1) {
        await this.setState({ page: this.state.page - 1 })

        var elementsCount = document.getElementById("Restrantresult").childElementCount;

        this.setState({ skip: elementsCount * this.state.page }, () => handleSearch());
      }


    }

    const handlePageInc = async () => {
      await this.setState({ page: this.state.page + 1 });

      var elementsCount = document.getElementById("Restrantresult").childElementCount;

      this.setState({ skip: elementsCount * this.state.page }, () => handleSearch());


    }

    const handleSrch = async () => {
      await this.setState({ page: 1, skip: 0 }, () => handleSearch());

    }

    const handleSearch = async () => {

      const { search_rest, search_Cur, sort, sortOrder, skip } = this.state;

      this.setState({isLoadingCompleted:false});

      const obj = {
        Res_Name: search_rest,
        Cuisines: search_Cur,
        sort,
        sortOrder,
        skip

      }
      

      const r = await axios.post("https://nodejs-hhjs72fhf.now.sh/restaurant/search", {
        obj
      });

      const { Count, matchedRestrants } = r.data;
      const matchedRestrantsCount = matchedRestrants.length;

      const hasNxt = (matchedRestrantsCount === 0) ? false : true;


      this.setState({
        ...this.state,

        Count,
        hasNxt,
        data: matchedRestrants,
        isLoadingCompleted:true

      })

    }

    return (
      <div className="App">
        <Nav />
        <section className={"container"} >
          <Row>
            <Col md={{ span: 10 }} >
              <input className={"g inp"} value={this.state.search_rest} onChange={(e) => handleRest(e)} placeholder={"Restrant   "} /> </Col>
            <Col md={{ span: 10 }} >
            <AutoComplete
            className={"g inp"}
             style={{ padding:"0px" }}
            dataSource={this.state.cuisines}
             placeholder="Cuisines ..."
             value={this.state.search_Cur}
             onChange={(e) => handleCursine(e)}
             filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
           />

           
{/**           <input className={"g inp"} onChange={(e) => handleCursine(e)} value={this.state.search_Cur} placeholder={"Cursine ...   "} />  */}
</Col>
             
              <Col md={{ span: 4 }} >
              <button className={"write"} onClick={handleSrch}>Search</button></Col>

          </Row>

          <br></br>
          <Row>
            <Col md={{ span: 6 ,offset: 1 }} style={{ borderRight: "2px solid #14b38e" }}  > <b>Rating </b>
              <Icon style={{ cursor: "pointer" }} type="arrow-down" onClick={() => { handleSort("Aggregate rating", -1) }} /> <Divider type="vertical" />
              <Icon style={{ cursor: "pointer" }} type="arrow-up" onClick={() => { handleSort("Aggregate rating", 1) }} />   </Col>
            <Col md={{ span: 6, offset: 1 }} style={{ borderRight: "2px solid #14b38e" }} >
              <b>Votes</b> <Icon onClick={() => { handleSort("Votes", -1) }} style={{ cursor: "pointer" }} type="arrow-down" />
              <Divider type="vertical" /> <Icon onClick={() => { handleSort("Votes", 1) }} style={{ cursor: "pointer" }} type="arrow-up" />
            </Col>
            <Col md={{ span: 8, offset: 1 }}  >
              <b>Average Cost for two</b> <Icon onClick={() => { handleSort("Average Cost for two", -1) }} style={{ cursor: "pointer" }} type="arrow-down" />
              <Divider type="vertical" /> <Icon onClick={() => { handleSort("Average Cost for two", 1) }} style={{ cursor: "pointer" }} type="arrow-up" /> </Col>
          </Row>
          <Divider />
          <Row>
            <Col md={{ span: 2, offset: 1 }}> <Button disabled={(this.state.page <= 1) ? "disabled" : ""} type="dashed" onClick={handlePageDec} >Prev</Button> </Col>
            <Col md={{ span: 8, offset: 4 }}> <span>About {this.state.Count} results <Divider type="vertical" /> Page : {this.state.page}</span> </Col>
            <Col md={{ span: 2, offset: 6 }}> <Button disabled={(this.state.hasNxt) ? "" : "disabled"} type="dashed" onClick={handlePageInc} >Next</Button> </Col>

          </Row>



        </section>
        <section className={"RestarantCard"}>
     
       {(!this.state.isLoadingCompleted) 
          ?<div style={{width:"70%",marginLeft:"10%"}} ><Skeleton  active /></div>
          :<RestarantList data={this.state.data} />}
    
           
        </section>
      </div>
    );
  }
}

export default App;
