import { PropTypes } from 'prop-types';
import { useContext } from 'react';
import { Navigate,useLocation } from "react-router-dom";
import { ApiContext } from './Context';
const Privet = ({children}) => {
    const location = useLocation()
    // console.log(location);
    const {user} = useContext(ApiContext)
    // console.log(user);
    if(user){
        return children
    }
    return <Navigate to='/login' state={location.pathname} />
};


export default Privet;


Privet.propTypes = {
    children: PropTypes.node
}