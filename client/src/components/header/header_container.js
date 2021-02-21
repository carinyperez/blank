import {connect} from 'react-redux';
import { logout } from '../../redux/reducers/session/session-actions';
import Header from './header.component';


const mapStateToProps = state => (
    {loggedIn: state.session.isAuthenticated}
)

const HeaderContainer = connect(mapStateToProps, {logout})(Header); 

export default HeaderContainer; 