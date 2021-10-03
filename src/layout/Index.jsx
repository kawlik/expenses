import React, { useContext } from 'react';


// local views
import Login from './Login';
import View from './View';


// store context
import { StoreContext } from '../context';



/*  Module schema
/*   *   *   *   *   *   *   *   *   *   */

const Index = () => {


    // context values
    const { user } = useContext( StoreContext );


    /*   *   *   *   *   *   *   *   */

    return(
    <>

        { !user ? <View /> : <Login /> }

    </>
    );
};



/*  Module export
/*   *   *   *   *   *   *   *   *   *   */

export default Index;