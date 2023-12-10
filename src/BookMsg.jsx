import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function BookMsg() {
    const Location=useLocation()
   const Arr=Location.state.Add
   const Arr2=['FullName','Mobile_Number','Bulding','Read_No']
    console.log(Arr)
  return (
    <>  
         <h1 style={{textAlign:'center'}}>Your Order Is Booked</h1>
        <div className="row mt-5">
            <div className="col-5 mt-5 mb-3">
              
            </div>
            <div className="col-6 mt-5">
                 <span><i class="fa-solid fa-circle-check" style={{fontSize:'200px',color:'green'}}></i></span>
            </div>

        </div>
        <div className="row">
            <div className="col-5">

            </div>
            <div className="col-6 mt-4">
            <h2><span>These Address</span></h2>
             {Arr.map((e,i)=>{
                return(
                    <>
                       <h6 style={{display:'flex'}}><span style={{color:'blue'}}>{Arr2[i]}:-</span><span>{e}</span></h6> 
                    </>
                )
            })}
            </div>
        </div>
       <Link to='/book/web' className='btn btn-success mt-3' style={{marginLeft:'610px'}}>GoTo Home Page</Link>

    </>
  )
}

export default BookMsg
