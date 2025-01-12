import logo from '../../assets/logo.svg';
import './Header.css';

const Header = () => (
    <div className="header">
        <img src={logo} alt="Stackline Logo" className="logo" />
    </div>
)

export default Header;