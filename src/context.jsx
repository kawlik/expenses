import React, { createContext, useEffect, useState } from 'react';


// context basic config
import config from './utility/config';


/*  Module schema
/*   *   *   *   *   *   *   *   *   *   */

// store context init
const StoreContext = createContext( null );

// store provider wrapper
const StoreProvider = ({ children }) => {


    const [ user, setUser ] = useState( null );


    /*   *   *   *   *   *   *   *   */

    const storeValues = {

        user, setUser,  //  user propeties
    };

    /*   *   *   *   *   *   *   *   */

    useEffect(() => {

    return () => {

    }}, []);

    /*   *   *   *   *   *   *   *   */

    return(
    <StoreContext.Provider value={ storeValues } >
            
        { children }

    </StoreContext.Provider>
    );
};



/*  Module export
/*   *   *   *   *   *   *   *   *   *   */

export { StoreContext, StoreProvider };