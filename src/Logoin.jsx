import React from 'react'
import Fam_Img from './Photos/FamLog.png'
import { Link,useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'

function Logoin() {
  const Navigate=useNavigate()
  const Location=useLocation()
  const Gmail_Data=(localStorage.getItem('Gmail'))?JSON.parse(localStorage.getItem('Gmail')):[];
  const Mobile_Data=(localStorage.getItem('Mobile'))?JSON.parse(localStorage.getItem('Mobile')):[];
  const Pass_Data=(localStorage.getItem('Pass'))?JSON.parse(localStorage.getItem('Pass')):[];
  if(Location.state){
       const Arr=Location.state.Nav
       if(Gmail_Data.includes(Arr[2])===false){
              const Up_Gmail=[...Gmail_Data,Arr[2]]
              localStorage.setItem('Gmail',JSON.stringify(Up_Gmail))
             
       }
       if(Mobile_Data.includes(Arr[1])===false){
        const Up_Mobile=[...Mobile_Data,Arr[1]]
        localStorage.setItem('Mobile',JSON.stringify(Up_Mobile))
       
       }
       if(Pass_Data.includes(Arr[3])===false){
        const Up_Pass=[...Pass_Data,Arr[3]]
        localStorage.setItem('Pass',JSON.stringify(Up_Pass))
       }



  }
  const [Input,setInput]=useState({
    In1:'',
    In2:''
  })
  const LogoinFunc=()=>{
        if( Input.In1=='' || Input.In2=='' ){
             alert('Enter Mail/Mobile And Password')
             return false
         }
        if(Gmail_Data && Mobile_Data && Pass_Data){
              if((Gmail_Data.includes(Input.In1) || Mobile_Data.includes(Input.In1)) && (Pass_Data.includes(Input.In2))){
                return true
              }
              else{
                  alert('Gmail/Password Account Not There')
              }
         }
         
  }
  return (
    <>
            <div className="row ml-2 card-body">
              
                 <div className="col-6 bg-primary" style={{height:'80vh'}}>
                     <img src={Fam_Img} alt="" srcset=""  height="250px" style={{marginTop:'70px',marginLeft:'100px'}}  />
                     <h5 style={{marginLeft:"280px", marginTop:"-30px" ,color:'white'}}>LFamily</h5>
                     <span style={{marginLeft:'225px',color:'yellow'}}>India Most Shoping Website</span>
                 </div>
                 <div className="col-6">
                          <h3 style={{marginTop:'50px'}} className='ml-2'>Login</h3>
                          <p style={{color:'gray',marginLeft:'11px',marginTop:'-5px'}}>Get access to your Order,Wishlist and Recommendations</p>
                          <form className='mr-5 ml-3'>
                            <div>
                               <label style={{color:"black",fontFamily:'monospace'}}>Enter Email/Mobile Number</label><br></br>
                               <input onChange={(e)=>{setInput({...Input,In1:e.target.value})}} style={{borderRadius:'200px'}} type='text' placeholder='Enter Mobile/Email' className='form-control'></input>
                            </div>
                            <div className='mt-3'>
                               <label style={{color:"black",fontFamily:'monospace'}}>Enter Password</label><br></br>
                               <input  onChange={(e)=>{setInput({...Input,In2:e.target.value})}} style={{borderRadius:'200px'}} type='password' placeholder='Enter Mobile/Email' className='form-control'></input>
                            </div>
                          </form>
                        <button onClick={()=>{
                          const Check = LogoinFunc()
                          if(Check){
                            Navigate('/login/web')
                          }
                        }} 
                        className='btn btn-primary col-4 mt-5 ml-3'>Login</button><br></br>
                      <span className='btn mt-2'>You Don't Have Account Click Here :-</span><Link to='/create_accont' className='mt-2 ml-2 btn'>Create new Account</Link>
                 </div>
            </div>
          
       
    </>
  )
} 

export default Logoin