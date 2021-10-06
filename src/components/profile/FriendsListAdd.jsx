import React from 'react';


// local components
import SelectUser from '../SelectUser';


// icons
import AddBoxIcon from '@mui/icons-material/AddBox';


/*  Module schema
/*   *   *   *   *   *   *   *   *   *   */

const FriendsListAdd = () => {

    /*   *   *   *   *   *   *   *   */

    return(
    <>        
        <ul className='list-group border p-1 mb-2' style={{ overflowY: 'scroll', maxHeight: '40vh', borderRadius: '10px' }}>

            <SelectUser />
                
            <SelectUser />

            <SelectUser />

            <SelectUser />

            <SelectUser />

            <SelectUser />

            <SelectUser />

            <SelectUser />

        </ul>

        <button disabled={ true } className='w-100 btn btn-outline-success' type='button' style={{ height: '42px', borderRadius: '10px' }}>

            <span style={{ marginRight: '10px', verticalAlign: 'middle' }}><AddBoxIcon style={{ fontSize: '24px' }} /></span>

            <span style={{ verticalAlign: 'middle' }}>Dodaj</span>

        </button>

    </>
    );
};



/*  Module export
/*   *   *   *   *   *   *   *   *   *   */

export default FriendsListAdd;