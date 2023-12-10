import React, { useContext, useEffect, useState } from 'react'
import { Create_Context } from './Context'
import { useLocation } from 'react-router-dom'
import './Add_ToCard.css'
import { clear } from '@testing-library/user-event/dist/clear'

function Add_ToCard(props) {
  const Location=useLocation()
  const data=useContext(Create_Context)
  const [Data,setData]=useState([])
 useEffect( ()=>{
    const Local_Data=(localStorage.getItem('AddCard'))?JSON.parse(localStorage.getItem('AddCard')):[]
     data.filter((e)=>{
         if(e.ind===Location.state.ind){
             if(Local_Data.includes(e)===false){
                  Local_Data.push(e)
                  localStorage.setItem('AddCard',JSON.stringify(Local_Data))
             }
         }
     })
     setData(Local_Data)
 },[])
 useEffect(()=>{
  localStorage.setItem('AddCard',JSON.stringify(Data))
 },[Data])
// const Local_Data=(localStorage.getItem('AddCard'))?JSON.parse(localStorage.getItem('AddCard')):[]
//   data.filter((e)=>{
//         if(Location.state.ind===e.ind){
//             if(Local_Data.includes(e)===false){    
//             const Up_Data=[...Local_Data,e]
//               localStorage.setItem('AddCard',JSON.stringify(Up_Data))
               

//           }
//         }
//   })
  return (
    <>
       {Data.map((e)=>{
        return(
          <>
            <div className='row col-12 mt-2' id='row'>
               {Data.map((e)=>{
                  return(
                     <>
                      <div class="card col-11">
                                <div className="row ">
                                       <div className="col-4">
                                        <img src={e.images} class="card-img-top" alt="..." height="200px"/>
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
                                <div className="col-2 mt-2">
                                  <span>Quantity</span>
                                  <input type='number' width="-50px"></input>
                                </div>
  <                             div class="card-body">
                                         <button className='col-5 ml-5'><i class="fa-solid fa-trash"></i>Remove</button>
                                         <button className='col-5 ml-5'><i class="fa-solid fa-cart-shopping"></i>Buy This Now</button>
                                  </div>
                      </div>
                     </>
                  )
               })}
           </div>
          </>
        )
       })}  
    </>
  )
}

export default Add_ToCard