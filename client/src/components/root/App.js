import './App.css';
import {Route,Switch} from 'react-router-dom'; 
import Header from '../header/header.component';
import LoginPage from '../login/loginpage.component';
import SignUp from '../signup/signup.component';
import {AuthRoute} from '../../util/route_util';
import MainPage from '../mainpage/mainpage.component';


function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <AuthRoute exact path='/'
        component={MainPage}
        />
        <AuthRoute exact path='/login'
        component={LoginPage}
        />
        <AuthRoute exact path='/signup'
        component={SignUp}
        />
      </Switch>
    </div>
  );
}


export default App;





