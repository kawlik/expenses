import React from 'react';

// icons
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';


/*  Module schema
/*   *   *   *   *   *   *   *   *   *   */

const FriendsListItem = ({ user, action }) => {

    /*   *   *   *   *   *   *   *   */

    return(
    <>        
        <li className='w-100 mb-2' style={{ listStyle: 'none' }}>

            <span style={{ verticalAlign: 'middle', marginRight: '10px' }}><img src={ user.body.picture } alt={ user.body.name } style={{ width: '42px', height: '42px', borderRadius: '42px' }} /></span>

            <span style={{ verticalAlign: 'middle', fontSize: '28px', fontWeight: '300' }}>
                { user.body.name }
            </span>

            <button type='button' className='btn btn-outline-danger py-1 px-3' onClick={ ( e ) => action( e, user._id ) } style={{ borderRadius: '10px', float: 'right' }}>
                <IndeterminateCheckBoxIcon style={{ verticalAlign: 'middle' }} />
            </button>

        </li>

        <hr className='mb-3' style={{ height: '0.5px' }}/>
    </>
    );
};



/*  Module export
/*   *   *   *   *   *   *   *   *   *   */

export default FriendsListItem;