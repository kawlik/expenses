import React from 'react';

// icons
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';


/*  Module schema
/*   *   *   *   *   *   *   *   *   *   */

const FriendsListItem = ({ user, action }) => {

    /*   *   *   *   *   *   *   *   */

    return(
    <>        
        <li className='w-100 mb-2 shadow-sm rounded p-1' style={{ listStyle: 'none' }}>

            <span style={{ verticalAlign: 'middle', marginRight: '10px' }}><img src={ user.body.picture } alt={ user.body.name } style={{ width: '36px', height: '36px', borderRadius: '36px' }} /></span>

            <span style={{ verticalAlign: 'middle', fontSize: '26px', fontWeight: '300' }}>
                { user.body.name }
            </span>

            <button onClick={ ( e ) => action( e, user._id ) } type='button' className='btn btn-outline-danger mt-2 w-100' style={{ height: '42px', borderRadius: '10px' }}>

                <span style={{ marginRight: '10px', verticalAlign: 'middle' }}><IndeterminateCheckBoxIcon style={{ fontSize: '24px' }} /></span>

                <span style={{ verticalAlign: 'middle' }}>Usuń</span>

            </button>

        </li>

        <hr className='mb-3' style={{ height: '0.5px' }}/>
    </>
    );
};



/*  Module export
/*   *   *   *   *   *   *   *   *   *   */

export default FriendsListItem;