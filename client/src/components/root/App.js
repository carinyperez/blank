import './App.css';
import {Route,Switch} from 'react-router-dom'; 
import Header from '../header/header.component';
import HomePage from '../homepage/homepage.component';
import SignUp from '../signup/signup.component';
import { AuthRoute } from '../../util/route_util';


function App() {
  return (
    <div className="App">
      <Header className="App-header"/>
      <Switch>
        <AuthRoute exact path='/' component={HomePage}/>
      </Switch>
      
    </div>
  );
}

export default App;

// <Route exact path='/' component={HomePage}/>
// <Route exact path='/login' component={HomePage}/>
// <Route exact path='/signup' component={SignUp}/>



