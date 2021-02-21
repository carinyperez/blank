import './App.css';
import {Route,Switch} from 'react-router-dom'; 
import Header from './header/header.component';
import LoginPage from '../pages/loginpage/loginpage.component';
import SignUp from '../pages/signuppage/signuppage.component';
import MainPage from '../pages/mainpage/mainpage.component';
import LoginFormContainer from './loginform/loginform_container';
import SignUpFormContainer from './signupform/signupform_container';
import HeaderContainer from './header/header_container';
import {AuthRoute, ProtectedRoute} from '../util/route-util';

function App() {
  return (
    <div className="App">
      <HeaderContainer/>
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





