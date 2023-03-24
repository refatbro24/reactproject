import React, { Component } from 'react';
import {Routes,Route} from 'react-router-dom';
import Counters from './counters.component';
import Login from './login.component';
import Todolist from './todolist';
class App extends Component {
  state = {  } 
  render() { 
    return (
      <Routes>
        <Route path='/counters' element={<Counters/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/todolist' element={<Todolist/>}/>
      </Routes>
    );
  }
}
 
export default App;