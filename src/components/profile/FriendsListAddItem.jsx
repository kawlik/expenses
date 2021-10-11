import React from 'react';

// icons
import AddBoxIcon from '@mui/icons-material/AddBox';


/*  Module schema
/*   *   *   *   *   *   *   *   *   *   */

const FriendsListAddItem = ({ user, action }) => {

    /*   *   *   *   *   *   *   *   */

    return(
    <>        
        <li className='list-group-item shadow-sm p-1' style={{ borderRadius: '10px' }}>

            <span style={{ verticalAlign: 'middle', marginRight: '10px' }}><img src={ user.body.picture } alt={ user.body.name } style={{ width: '32px', height:' 32px', borderRadius: '32px' }} /></span>

            <span style={{ verticalAlign: 'middle', fontSize: '20px', fontWeight: '300' }}>
                { user.body.name }
            </span>

            <button type='button' className='btn btn-outline-success py-1 px-3' onClick={ ( e ) => action( e, user._id ) } style={{ borderRadius: '10px', float: 'right' }}>
                <AddBoxIcon style={{ verticalAlign: 'middle' }} />
            </button>

        </li>
    </>
    );
};



/*  Module export
/*   *   *   *   *   *   *   *   *   *   */

export default FriendsListAddItem;