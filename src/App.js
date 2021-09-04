
import './App.css';
 import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //dark mode is enabled or not!
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type)=>{
        setAlert({
          msg:message,
          type:type
})
 setTimeout(() => {
   setAlert(null);
 }, 2000);
  }

  
  
  const toggleMode=()=>{
    
    if(mode ==='light'){
      setMode('dark');
      document.body.style.background ='#042743';
      showAlert(" Dark Mode has been Enabled", " success");
      // document.title="TextUtils-Dark Mode";
    }
    else{
        setMode('light');
        document.body.style.background ='white';
        showAlert(" Light Mode has been Enabled", "success");
        // document.title="TextUtils-Light Mode";
    }
    
  }
  return (
    <>
     <Router> 
    <Navbar title="Textutils" aboutText="About" mode={mode} toggleMode={toggleMode} />
    {/* <Router> */}
    {/* <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/> */}
    <Alert alert={alert}/>
    <div className="container my-3 ">
    <Switch> 
           <Route exact path="/about"> 
            <About mode={mode}/>
          </Route>
         
           <Route exact path="/"> 
          <TextForm  showAlert={showAlert} heading="Try TextUtils-Word Counter, Character Counter, Remove Extra Spaces." mode={mode}/>
          
          </Route>
    </Switch>
    
  </div>
  </Router>
    
    </>
  );
}

export default App;
