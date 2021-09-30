import React from 'react';


// layout selector
import Index from './layout/Index';


// store context
import { StoreProvider } from './context';


// stylesheets
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.scss';


/*  Module schema
/*   *   *   *   *   *   *   *   *   *   */

const App = () => {


    /*   *   *   *   *   *   *   *   */

    return(
    <StoreProvider>

        <Index />

    </StoreProvider>
    );
};



/*  Module export
/*   *   *   *   *   *   *   *   *   *   */

export default App;