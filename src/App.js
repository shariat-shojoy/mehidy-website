import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import { BrowserRouter,Switch,Route } from 'react-router-dom';


import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Error from './components/Error/Error';
import About from './components/About/About';
import Login from './components/Login/Login';
 

function App() {
  return (
    <div >

    <BrowserRouter>
    <Switch>
      {/* HOME */}
    <Route exact path="/">
    <Home></Home>
    </Route>
    {/* HOME  */}
    <Route path="/home">
    <Home></Home>
    </Route>
    {/* SERVICES  */}
    <Route path="/services">
    <Services></Services>
     </Route>
     {/* ABOUT  */}
     <Route path="/about">
      <About></About>
      </Route>
      {/* LOGIN  */}
     <Route path="/login">
       <Login></Login>
      </Route>
      {/* ERROR  */}
       <Route path="*">
      <Error></Error>
      </Route> 
      </Switch>
    </BrowserRouter>
    </div>
 
  );
}

export default App;
