import React from 'react'
import './App.css';


const Photo = React.lazy(() => import('./components/Photo'));


function App() {
  
  return (
    <div className="App">
    <h1>Photo Search App</h1>
 <Photo/>
    </div>
  
  );
}

export default App;
