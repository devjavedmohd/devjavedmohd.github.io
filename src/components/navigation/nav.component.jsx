import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';

import './navigation.styles.scss';

const Navigation = () => {
    return (
        <div className="bg-white">
            <nav className="container topnav">
                <ul>
                    <li>
                        <Link to="/" className="no-pad">
                            <img src={logo} alt="Mohd Javed" />
                        </Link>
                    </li>
                </ul>
                <ul className="flex-all-center">
                    <li><Link className="active" to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation;