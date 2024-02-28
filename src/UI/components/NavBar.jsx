import { Link, NavLink, useNavigate } from 'react-router-dom';
import {useContext} from 'react';
import { AuthContext } from '../../auth/context/AuthContext';

export const Navbar = () => {

    const navigate = useNavigate ();
    const {logout} = useContext(AuthContext);

    const onLogOut = () => {

        logout();

        navigate ( '/login', { 
            replace: true
        });    
    } 

    const { user } = useContext(AuthContext);

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-3">
            
            <Link 
                className="navbar-brand" 
                to="/">
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({IsActive })=>` nav-item nav-link ${ IsActive ? 'active' : ' ' } ` }
                        to="/marvel">
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={ ({IsActive })=>` nav-item nav-link ${ IsActive ? 'active' : ' ' } ` }
                        to="/dc">
                        DC
                    </NavLink>

                    <NavLink 
                        className={ ({IsActive })=>` nav-item nav-link ${ IsActive ? 'active' : ' ' } ` }
                        to="/search">
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 justify-content-end">
                <ul className="navbar-nav ml-auto">
                   { user && <span className="nv-item nav-link text-primary"> { user.name } </span> }
                    <button className="nav-item nav-link btn" 
                            onClick = { onLogOut }>
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}