import React , {useState} from 'react';
import {Message} from './Message.js';
import './App.css';



function App() {
  
  let [count,setCount] = useState(0);
  let [count2,setCount2] = useState(0);
  let [ismorning, setmorning] =useState(true);
      // count if varialbe and setCount is its setter
      // in class we could not used this sentyx and used old method used in class form
      // this variable not save when brower refresh it will distroy 
  return (            
            <div className = {`box ${ismorning ? 'dayLight' : ''}`}>
              <h3> Day time is = {ismorning ? 'Morning' : 'Night'} </h3>
                  <h3>Parent Component counter {count2} </h3>
                  <Message  counter={count}/>
                  
                    <button onClick={
                                        ()=>setCount(count = count + 1)
                                    }
                    > Click Set to child component value 
                    </button>
                    <br/>

                    <button onClick={
                                    // ()=> alert("Button have clicked") 
                                    //()=> setCount(count + 1)
                                    //()=> setCount(count++) // postfix will not work
                                    ()=> setCount2(++count2)
                                    }
                      > Click button Parent component </button> 
                      <br/>
                      <button onClick={
                                        ()=>setmorning(true)
                                      }> 
                                    Click to Morning 
                                      </button>
                                      <br/>
                      <button onClick={
                                        ()=>setmorning(false)
                                      }> 
                                    Click to Night Mood 
                                      </button>
                                  
                         <h1> Thank You Much  Recpected Sir Zia And His Team         
            </div>
  );
}

// old method or render spcific part of app
// class Appclass extends React.Component
// {
//   this.status = {}
//   componentDidMount
/* <h3> this counter {count} </h3> */


//   render
// } 

export default App;
