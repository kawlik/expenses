import React, { useContext } from 'react';

// store context
import { StoreContext } from '../context';

// local components
import ExpenseSaved from './ExpenseSaved';


/*  Module schema
/*   *   *   *   *   *   *   *   *   *   */

const Saved = () => {

    const { list } = useContext( StoreContext );

    const finishedList = list.filter( item => item.status.finished );

    /*   *   *   *   *   *   *   *   */

    return(
    <>     
        {   
            finishedList.length
            ?   finishedList.map( item => <ExpenseSaved key={ item._id } list={ item } /> )
            :   <h3 className='fw-light fs-4 mt-5 mx-2 text-center'>Tu pojawiają się zakończone przez Ciebie rozliczenia.</h3>
        }
    </>
    );
};



/*  Module export
/*   *   *   *   *   *   *   *   *   *   */

export default Saved;