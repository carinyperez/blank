import {connect} from 'react-redux';
import { logout } from '../../redux/actions/actions';
import Header from './header.component';


const mapStateToProps = state => (
    {loggedIn: state.session.isAuthenticated}
)

const HeaderContainer = connect(mapStateToProps, {logout})(Header); 

export default HeaderContainer; 