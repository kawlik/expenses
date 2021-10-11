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
            unfinishedList.length
            ?   unfinishedList.map( item => <ExpenseActive key={ item._id } list={ item } /> )
            :   <h3 className='fw-light fs-4 mt-5 mx-2 text-center'>Tu pojawiają się aktywne rozliczenia z innymi użytkownikami.</h3>
        }

        <AddNew />
        
    </>
    );
};



/*  Module export
/*   *   *   *   *   *   *   *   *   *   */

export default Active;