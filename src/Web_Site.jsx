import React, { useState,useEffect, useContext, useReducer} from 'react'
import {Create_Context} from './Context'
import './Web_Site.css'
import { Link } from 'react-router-dom'
function Web_Site(){
  const data=useContext(Create_Context)
  const[Data,setData]=useState(data)
  
 
  const DisFunc=(state,action)=>{
      switch (action.type){
        case 'click1':
           let Data1=[]
           data.filter((e)=>{
               if(e.price*84<=20000){
                  Data1.push(e) 
                  console.log('hii1')
               }
           })
           setData(Data1)
           return
        case 'click2':
          let Data2=[]
          data.filter((e)=>{
              if((e.price*84<=100000)&&(e.price*84>=20000)){
                Data2.push(e) 
              }
          })
          setData(Data2)
            return
        case 'click3':
          let Data3=[]
          data.filter((e)=>{
              if((e.price*84>=100000)){
                Data3.push(e) 
              }
          })
          setData(Data3)
            return
        case 'click4':
          let Data4=[]
          data.filter((e)=>{
              if((e.id==="Mobile")){
                Data4.push(e) 
              }
          })  
          setData(Data4)   
            return
        case 'click5':
          let Data5=[]
          data.filter((e)=>{
              if((e.id==="Shoes")){
                Data5.push(e) 
              }
          })
          setData(Data5)
            return
        case 'click6':
          let Data6=[]
          data.filter((e)=>{
              if((e.id==="LapTop")){
                Data6.push(e) 
              }
          })
          setData(Data6)
            return
        case 'click7':
          let Data7=[]
          data.filter((e)=>{
              if((e.id==="Other")){
                Data7.push(e) 
              }
          })
          setData(Data7)
            return
        case 'click8':
          let Data8=[]
          data.filter((e)=>{
              if((e.id==="Mobile")){
                Data8.push(e) 
              }
          }) 
          setData(Data8)
            return
        case 'click9':
          let Data9=[]
          data.filter((e)=>{
              if((e.id==="LapTop")){
                Data9.push(e) 
              }
          })
          setData(Data9)
            return
        case 'click10':
          let Data10=[]
          data.filter((e)=>{
              if((e.brand==="ADIDAS")){
                Data10.push(e) 
              }
          })
          setData(Data10)
            return
        case 'click11':
          let Data11=[]
          data.filter((e)=>{
              if((e.brand==="HUSHPUPPIES")){
                Data11.push(e) 
              }
          })
          setData(Data11)
            return
        case 'click12':
          let Data12=[]
          data.filter((e)=>{
              if((e.brand==="NIKE")){
                Data12.push(e) 
              }
          })
          setData(Data12)
              return
      }
  }
  const[State,Dispatch]=useReducer(DisFunc,data)
  return (
   <>
     <div className="body">
       <nav className="navbar">
        <div className="part1">
         <h3>LFamily</h3> 
         <input type='text' placeholder='Search For Products'></input> 
        </div>
         <div className="part2">
        <Link to='/logout' className='btn1'><i class="fa-solid fa-user"></i>LogOut</Link>
        <Link to='/aboutus' className='btn2'>About Us</Link>  
        
         </div>
       </nav>
       <aside className="sidebar">
           <h5>Filter By Prices:-<br></br>
          
             <input type='radio' name='rr' onClick={()=>{Dispatch({type:'click1'})}}></input><span>10K-20K</span><br></br>
              <input type='radio' name='rr' onClick={()=>{Dispatch({type:'click2'})}}></input><span>20K-100k</span><br></br>
             <input type='radio' name='rr' onClick={()=>{Dispatch({type:'click3'})}}></input><span>more 100k</span><br></br>
          
           </h5>
           <h5>Filter By Products:-<br></br>   
             <input type='radio' name='rr' onClick={()=>{Dispatch({type:'click4'})}}></input><span>Mobiles</span><br></br>
              <input type='radio'name='rr' onClick={()=>{Dispatch({type:'click5'})}} ></input><span>Shoes</span><br></br>
             <input type='radio' name='rr' onClick={()=>{Dispatch({type:'click6'})}}></input><span>Lap_Tops</span><br></br>
             <input type='radio' name='rr' onClick={()=>{Dispatch({type:'click7'})}}></input><span>Other</span><br></br>
           </h5>
           <h5>Filter By Brands:-<br></br>
          
             
              <input type='radio' name='rr' onClick={()=>{Dispatch({type:'click8'})}}></input><span>Mobile</span><br></br>
              <input type='radio' name='rr' onClick={()=>{Dispatch({type:'click9'})}}></input><span>Laptop</span><br></br>
             <p>Shoes Brands<br></br>
             <input type='radio' name='rr' onClick={()=>{Dispatch({type:'click10'})}}></input><span>Adidas</span><br></br>
             <input type='radio' name='rr' onClick={()=>{Dispatch({type:'click11'})}}></input><span>Hushpuppies</span><br></br>
             <input type='radio' name='rr' onClick={()=>{Dispatch({type:'click12'})}}></input><span>Nike</span><br></br>
             </p>
           
         
           </h5>
       </aside>
        <nav className="smallnavbar">

        </nav>
        <section className="sectionbar">
           <div className='row' id='row'>
               {Data.map((e)=>{
                  return(
                     <>
                        <div class="card">
                           <img src={e.images} class="card-img-top" height="150px" alt="..."/>
                           <div class="card-body">
                           <span> Product Name:-</span> <h5 class="card-title">{e.title}</h5>
                             <span>Price:-</span><h5>{e.price*84} Ruppes</h5>
                             <Link to="/buy" state={{ind:e.ind}} className='btn btn-primary' >Buy Now<i class="fa-solid fa-cart-plus ml-2"></i></Link>
                           </div>
                           <div className="card-footer">
                           <Link to='/add_card' state={{ind:e.ind}} ><span><i class="fa-solid fa-right-to-bracket"></i>Clikc TO Add To card<i class="fa-solid fa-cart-plus"></i></span></Link>
                           </div>
                       </div>
                     </>
                  )
               })}
           </div>
        </section>
       
     </div>
   </>
  )
}

export default Web_Site