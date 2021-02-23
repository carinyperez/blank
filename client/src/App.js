import './App.css';
import {Route,Switch} from 'react-router-dom'; 

import MainPage from './pages/mainpage/mainpage.component';
import LoginFormContainer from './components/loginform/loginform_container';
import SignUpFormContainer from './components/signupform/signupform_container';
import HeaderContainer from './components/header/header_container';
import {AuthRoute, ProtectedRoute} from './util/route-util';
import TweetsContainer from './components/tweets/tweets_container';


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
        <ProtectedRoute exact path='/tweets'
          component={TweetsContainer}
        />
      </Switch>
    </div>
  );
}


// <ProtectedRoute exact path='/profile'
//   component={ProfileContainer}
// />
// <ProtectedRoute exact path='/new_tweet'
//   component={TweetComposeContainer}
//   />

export default App;





