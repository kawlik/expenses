import React from 'react';


// icons
import AddBoxIcon from '@mui/icons-material/AddBox';


/*  Module schema
/*   *   *   *   *   *   *   *   *   *   */

const FriendsListAdd = () => {

    /*   *   *   *   *   *   *   *   */

    return(
    <>     
        <li className='w-100 mb-4' style={{ listStyle: 'none' }}>

            <span style={{ verticalAlign: 'middle', marginRight: '10px' }}><img src='https://picsum.photos/200' alt='tmp-alt-text' style={{ width: '32px', height:' 32px', borderRadius: '32px' }} /></span>

            <span style={{ verticalAlign: 'middle', fontSize: '20px', fontWeight: '300' }}>
                Imię Nazwisko
            </span>

            <button className='w-100 btn btn-outline-success mt-2' type='button' style={{ height: '42px', borderRadius: '10px' }}>

                <span style={{ marginRight: '10px', verticalAlign: 'middle' }}><AddBoxIcon style={{ fontSize: '24px' }} /></span>
                
                <span style={{ verticalAlign: 'middle' }}>Dodaj</span>

            </button>

        </li>
    </>
    );
};



/*  Module export
/*   *   *   *   *   *   *   *   *   *   */

export default FriendsListAdd;