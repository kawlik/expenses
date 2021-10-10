import React, { useContext, useEffect } from 'react';

// additional components
import AddNew from './expense/AddNew';
import Header from './expense/Header';
import Saved from './expense/Saved';

// icon
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import SaveAltIcon from '@mui/icons-material/SaveAlt';

// store context
import { StoreContext } from '../context';

// global config
import config from '../utility/config';
import { postData } from '../utility/api';


/*  Module schema
/*   *   *   *   *   *   *   *   *   *   */

const Expense = ({ list }) => {

    
    /*   *   *   *   *   *   *   *   */

    return(
    <>
        <div className='mb-3 border p-2' style={{ borderRadius: '10px' }}>

            <Header list={ list }/>

            <details className='py-1 w-100 my-2'>

                <summary className='btn btn-outline-secondary w-100' style={{ height: '42px', borderRadius: '10px' }}>

                    <span style={{ marginRight: '10px', verticalAlign: 'middle' }}><ReadMoreIcon style={{ fontSize: '24px' }} /></span>

                    <span style={{ verticalAlign: 'middle' }}>Więcej</span>

                </summary>

                <div className='py-1 w-100 my-4'>

                    <h5 className='lead'>
                        Dodaj nowy wydatek
                    </h5>

                    <AddNew />

                </div>

                <div className='py-1 w-100'>

                    <h5 className='lead'>
                        Zapisane wydatki
                    </h5>

                    <Saved />

                </div>

            </details>

            <button className='w-100 btn btn-outline-danger mt-2' type='button' style={{ height: '42px', borderRadius: '10px' }}>

                <span style={{ marginRight: '10px', verticalAlign: 'middle' }}><SaveAltIcon style={{ fontSize: '24px' }} /></span>
                
                <span style={{ verticalAlign: 'middle' }}>Zakończ</span>

            </button>

        </div>
    </>
    );
};



/*  Module export
/*   *   *   *   *   *   *   *   *   *   */

export default Expense;