import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';

export const ApiContext = createContext(null)

const Context = ({ children }) => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    const value = { data }
    return (
        <ApiContext.Provider value={value}>
            {children}
        </ApiContext.Provider>
    );
};

export default Context;

Context.propTypes = {
    children: PropTypes.node
}