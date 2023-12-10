import { BrowserRouter,Routes, Route } from "react-router-dom";
import WarrperFunction from "./Context";
import Web_Site from "./Web_Site";
import Add_ToCard from "./Add_ToCard";
import Logoin from "./Logoin";
import About_Us from './About_Us'
import Create_Account from "./Create_Account";
import Buy_Now from "./Buy_Now";
import BookMsg from "./BookMsg";

function App() {
  return (
    
   <>
      <div className="App">
         
                  <WarrperFunction> 
                         <BrowserRouter>
                             <Routes>
                                 <Route path='/' element={<Logoin></Logoin>}></Route>
                                 <Route path='/add_card' element={<Add_ToCard></Add_ToCard>}></Route>
                                 <Route path='/logout' element={<Logoin></Logoin>}></Route>
                                 <Route path="/login/web" element={<Web_Site></Web_Site>}></Route>
                                 <Route path="/create_accont" element={<Create_Account></Create_Account>}>
                        
                                 </Route>
                                 <Route path='/aboutus' element={<About_Us></About_Us>}></Route>
                                 <Route path='/buy' element={<Buy_Now></Buy_Now>}></Route>
                                 <Route path='/create_account/login' element={<Logoin></Logoin>}></Route>
                                  <Route path="/buy_now/book" element={<BookMsg></BookMsg>}></Route>
                                  <Route path="/book/web" element={<Web_Site></Web_Site>}></Route>
                             </Routes>
                          </BrowserRouter>
                   </WarrperFunction>
      
  
    </div> 
   </>
  );
}

export default App;
