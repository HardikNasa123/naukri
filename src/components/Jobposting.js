import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import './nik.css';
import {GrLocation} from "react-icons/gr";
import Button from 'react-bootstrap/Button'
import axios from "axios";
import {useState, useEffect} from 'react';
import  {AiFillHome } from 'react-icons/ai';
// import "./try.css";

const Jobposting = () => {

    function paginate(pageno) {
        // setPage(pageno);
        console.log(pageno)
            // setTimeout(() => {
                jonlists(pageno);
            // }, 10); 
      }
    var [records, setRecords] = useState([]);
    // var [page, setPage] = useState(null);
    // if (page == null){
    //     page =1;
    // }
    // var records = []
    const jonlists = (page=1) => {
        const storedJwt = localStorage.getItem('token');
        var url = 'https://jobs-api.squareboat.info/api/v1/recruiters/jobs?page='+page;
        
        var config = {
            headers: {"Authorization": storedJwt}
        };
        axios.get(url, config)
        .then(function (response) {
          console.log(response);
          var data = Array.from(response.data.data.data);
          setRecords(data);
        // records = data;
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    useEffect(
        jonlists, 
        [] 
    ) 

        console.log("records:::",records);
    
  const itemRows = [];
if(records && records.length > 0){ 
  for (var i = 0; i < 16; i += 4) {
      console.log(i);
     var eachrow = [];
      for (var j=i; j<i+4;j++){
        const job = (<div class="col-sm-3">
                <div className="job_box" style={{display:"flex",justifyContent:"space-between",flexDirection:"column"}}>
                    <h4>{records[j].title}</h4>
                    <p style={{maxHeight:"40px"}}>{records[j].description}</p>
                    <div style={{display:"flex",justifyContent:"space-between"}}>
                    <GrLocation/>{records[j].location}
                    <Button variant="primary" style={{backgroundColor:"#303F60",color:"white"}}>View Posting </Button>{' '}
                    </div> 
                </div>
        </div>
        )
        eachrow.push(job);
      }
      const row = (
        <div class="row">
            {eachrow}
        </div>
    );
    itemRows.push(row);
  }}
  console.log(itemRows);

  return (
    <>
    
    <div className="kisn">
      <div className='home' style={{position:"relative",top:"-34vh",color:"white"}}>
      <AiFillHome/>
      <span className='home_inside' style={{marginLeft:"5px"}}>HOME</span>
      </div>
    <h1 style={{position:"relative",top:"-26vh",color:"white"}}> Jobs posted by you</h1>
    
    </div>

{itemRows.map(ele => ele)}

<div className='paginate'><button  onClick={()=>paginate(1)} >1</button>&nbsp;&nbsp;&nbsp;<button onClick={()=>paginate(2)}>2</button>&nbsp;&nbsp;&nbsp;<button  onClick={()=>paginate(3)} >3</button></div>
   

   
     
    </>
  )
}

export default Jobposting;