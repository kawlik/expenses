import React from 'react';


// local components
import AddNew from './AddNew';
import ExpenseActive from './ExpenseActive';


/*  Module schema
/*   *   *   *   *   *   *   *   *   *   */

const Active = () => {

    /*   *   *   *   *   *   *   *   */

    return(
    <>

        <ExpenseActive />

        <AddNew />
        
    </>
    );
};



/*  Module export
/*   *   *   *   *   *   *   *   *   *   */

export default Active;