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
            
            <button onClick={ ( e ) => action( e, user._id ) } type='button' className='btn btn-outline-success mt-2 w-100' style={{ height: '42px', borderRadius: '10px' }}>

                <span style={{ marginRight: '10px', verticalAlign: 'middle' }}><AddBoxIcon style={{ fontSize: '24px' }} /></span>

                <span style={{ verticalAlign: 'middle' }}>Dodaj</span>

            </button>

        </li>
    </>
    );
};



/*  Module export
/*   *   *   *   *   *   *   *   *   *   */

export default FriendsListAddItem;