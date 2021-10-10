import React, { useContext } from 'react';

// local components
import AddNew from './AddNew';
import ExpenseActive from './ExpenseActive';

// store context
import { StoreContext } from '../context';

// global config
import config from '../utility/config';
import { postData } from '../utility/api';

/*  Module schema
/*   *   *   *   *   *   *   *   *   *   */

const Active = () => {

    const { list } = useContext( StoreContext );

    const unfinishedList = list.filter( item => !item.status.finished );

    /*   *   *   *   *   *   *   *   */

    return(
    <>

        {
            unfinishedList.map( item => <ExpenseActive key={ item._id } list={ item } /> )
        }

        <AddNew />
        
    </>
    );
};



/*  Module export
/*   *   *   *   *   *   *   *   *   *   */

export default Active;