import React from 'react';
import {useSiteMetadata} from '../hooks/useSiteMetadata'

const App = () => {
    const { title, description } = useSiteMetadata();
    return (
        <>
        <h1>{title}</h1>
        <p>{description}</p>
        </>
    );
};

export default App