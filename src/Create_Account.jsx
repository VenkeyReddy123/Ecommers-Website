import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

function Create_Account() {
  const Navigate=useNavigate()
    const FNameRef=useRef(null)
    const LNameRef=useRef(null)
    const MobileRef=useRef(null)
    const EmailRef=useRef(null)
    const PassRef=useRef(null)
    const ConPasRef=useRef(null)

    const SetRefValue=(e)=>{

      const FName=FNameRef.current.value
      const LName=LNameRef.current.value
      const Mobile=MobileRef.current.value
      const Email=EmailRef.current.value
      const Pass=PassRef.current.value
      const ConPas=ConPasRef.current.value
      if(Pass===ConPas){
         return [true,Mobile,Email,Pass]
      }
      else{
        return false
      }
      
    }

  return (
    <>
      <div className="fullbar">
           <h5>Wellcome TO Our Family Shoping Website</h5>
          <span>Create New Account</span>
          <div className="row" style={{marginTop:'50px'}}>
             <div className="col-2">

             </div>
             <div className="col-7">
               <form style={{border:'2px solid green'}}>
                  <div className='mt-2 ml-2 mr-2'>
                      <lable>Enter First_Name<span>*</span></lable>
                      <input type="text" className='form-control' ref={FNameRef} required ></input>
                  </div >
                  <div className='mt-2 ml-2 mr-2'>
                      <lable>Enter Last Name<span>*</span></lable>
                      <input type="text" className='form-control' ref={LNameRef} required ></input>
                  </div>
                  <div className='mt-2 ml-2 mr-2'>
                      <lable>Enter Mobile_Number<span>*</span></lable>
                      <input type="number" className='form-control' ref={MobileRef} required ></input>
                  </div>
                  <div className='mt-2 ml-2 mr-2'>
                      <lable>Enter EMail<span>*</span> </lable>
                      <input type="email" className='form-control' ref={EmailRef}required></input>
                  </div>
                  <div className='mt-2 ml-2 mr-2'>
                      <lable>Enter Password<span>*</span></lable>
                      <input type="password" className='form-control' ref={PassRef} required></input>
                  </div>
                  <div className='mt-2 ml-2 mr-2'>
                      <lable>Enter Agian  Password<span>*</span></lable>
                      <input type="password" className='form-control' ref={ConPasRef} required></input>
                  </div>
                  <div className='mt-3 ml-2 mr-2 mb-2' style={{textAlign:'center'}}>
                    <button className='btn btn-danger' onClick={()=>{const Nav=SetRefValue()
                     if(Nav[0]){
                           Navigate('/create_account/login',{state:{Nav}})
                     }
                     else{
                      alert('Password Not Matche ')
                     }}}>
                      Submit</button>
                  </div>
               </form>
             </div>
          </div>
      </div>
    </>
  )
}

export default Create_Account