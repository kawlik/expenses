import React from 'react';


// additional components
import AddNew from './expense/AddNew';
import Header from './expense/Header';
import Saved from './expense/Saved';


// icon
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import SaveAltIcon from '@mui/icons-material/SaveAlt';


/*  Module schema
/*   *   *   *   *   *   *   *   *   *   */

const Expense = ({ list }) => {

    /*   *   *   *   *   *   *   *   */

    return(
    <>

        <div className='mb-3 border p-2 shadow' style={{ borderRadius: '10px' }}>

            <Header list={ list } />

            <details className='py-1 w-100 mt-2'>

                <summary className='btn btn-outline-secondary w-100' style={{ height: '42px', borderRadius: '10px' }}>

                    <span style={{ marginRight: '10px', verticalAlign: 'middle' }}><ReadMoreIcon style={{ fontSize: '24px' }} /></span>

                    <span style={{ verticalAlign: 'middle' }}>Więcej</span>

                </summary>

                <div className='py-1 w-100 mt-4'>

                    <h5 className='lead'>
                        Zapisane wydatki
                    </h5>

                    <Saved list={ list } />

                </div>

            </details>

        </div>
    </>
    );
};



/*  Module export
/*   *   *   *   *   *   *   *   *   *   */

export default Expense;