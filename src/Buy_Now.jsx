import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useLocation,useNavigate} from 'react-router-dom'
import { Create_Context } from './Context'
import { useState } from 'react'
import { useRef } from 'react'

function Buy_Now(props) {
    const Location=useLocation()
    const data=useContext(Create_Context)
    const [Data,setData]=useState([])
    const[Count,setCount]=useState(1)
    const[In,SetIn]=useState({
        In1:'',
        In2:'',
        In3:'',
        In4:'',
    })
    // Use Ref
    const FullNameRef=useRef(null)
    const MobileRef=useRef(null)
    const BuldingRef=useRef(null)
    const RoadRef=useRef(null)
    // Use Ref
    const MinusButton=()=>{
      if(Count!=0){
        return setCount(Count-1)
      }
    }
    const AddButton=()=>{
        return setCount(Count+1)
    }
    const AddressSub=()=>{
           console.log(In.In1)
    }
   useEffect(()=>{
         const Data2=[]
          data.filter((e)=>{
            if(e.ind===Location.state.ind){
                Data2.unshift(e)
                 setData(Data2)
            }
          })
   },[])
   const Address=()=>{
    const FullName=FullNameRef.current.value
    const Mobile=MobileRef.current.value
    const Bulding=BuldingRef.current.value
    const Road=RoadRef.current.value
     return[FullName,Mobile,Bulding,Road]
   }
   const Navigate=useNavigate()
  return (
   <>
       <nav className="bg-primary" style={{display:'flex',justifyContent:'space-around'}}>
            <h1 style={{color:'white'}}>LFamily<i class="fa-solid fa-people-roof ml-2" style={{color:'yellow'}}></i></h1>
            <p>India Most Shoping WebSite</p>
       </nav>
        <div className="row mt-5">
            <div className="col-1">
                 
            </div>
        <div className="addres col-8">
          <h2>Give Address</h2>
          <form className='mt-2' style={{border:'2px solid red'}}>
            <div className='mt-3 ml-3 mr-3'>
            <lable>Full Name(requered)<span>*</span></lable>
             <input  required type='text' className='form-control'  ref={FullNameRef} placeholder='Enter Your Full Name' required></input>
            </div>
            <div className='mt-3 ml-3 mr-3'>
            <lable>Phone Number(requered)<span>*</span></lable>
             <input required type="text" className="form-control"  ref={MobileRef} placeholder='Enter Your Mobile Number' required />
            </div>
             <div className='mt-3 ml-3 mr-3 mb-4'>
             <input required  type="text" className="form-control"   ref={BuldingRef} placeholder='House No.,Bulding Name(Required)*' required />
             <input required  type="text" className="form-control mt-3"  ref={RoadRef}  placeholder='Road name,Area,Colony(Required)*' required />
             </div>
          </form>
       </div>
        </div>
            <div className='row  mt-5' >
                  <div className="col-1">

                  </div>
          
               {Data.map((e)=>{
                  return(
                     <>
                     
                      <div class="card col-8">
                                <div className="row ">
                                       <div className="col-4">
                                        <img src={e.images} class="card-img-top" alt="..." height="300px"/>
                                        </div>
                                        <div className="col-6">
                                          <h5>{e.title}:</h5>
                                          <h5>Brand={e.brand}</h5>
                                         <span> Description:-</span><span className='des'>{e.description}</span><br></br>
                                       <span>Rating:-</span>   <span className='rat'>{e.rating+'*'}</span><br></br>
                                         <span>Stock=</span> <span className='sto'>{e.stock}</span><br></br>
                                         <span>Price:-</span> <span className='pri'>{e.price*84} INR</span>
                                        </div>
                                </div>
                                <div className="col-4 mt-2 ">
                                  <span style={{color:'gray'}}>Quantity:-</span><i class="fa-solid fa-plus bg-secondary mr-2"onClick={AddButton}></i>  
                                  <span>{Count} </span>  <i class="fa-solid fa-minus bg-primary ml-2" onClick={MinusButton}></i>
                                  <h4>Total Price:-{Count*e.price*84}</h4>
                                </div>
                      </div>
                     
                      
                     </>
                  )
               })}
           </div>
             <button onClick={()=>{
                 const Add=Address()
                 Navigate('/buy_now/Book',{state:{Add}})
                 
             }} className='btn btn-danger mt-4' style={{marginLeft:'500px', marginBottom:'100px'}}>Click To Book</button>
         
         
      
   </>
  )
}

export default Buy_Now