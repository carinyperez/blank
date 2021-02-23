import './App.css';
import {Route,Switch} from 'react-router-dom'; 

import MainPage from './pages/mainpage/mainpage.component';
import LoginFormContainer from './components/loginform/loginform_container';
import SignUpFormContainer from './components/signupform/signupform_container';
import HeaderContainer from './components/header/header_container';
import {AuthRoute, ProtectedRoute} from './util/route-util';

function App() {
  return (
    <div className="App">
      <HeaderContainer/>
      <Switch>
        <AuthRoute exact path='/'
        component={MainPage}
        />
        <AuthRoute exact path='/login'
        component={LoginFormContainer}
        />
        <AuthRoute exact path='/signup'
        component={SignUpFormContainer}
        />
      </Switch>
    </div>
  );
}


export default App;





