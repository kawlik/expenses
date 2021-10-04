import React, { useState } from 'react';


// additional components
import FriendsList from './profile/FriendsList';
import FriendsListAdd from './profile/FriendsListAdd';


// icons
import SearchIcon from '@mui/icons-material/Search';


/*  Module schema
/*   *   *   *   *   *   *   *   *   *   */

const Profile = () => {


    const [ friend, setFriend ] = useState( '' );

    const changeFriend = ( event ) => {
        setFriend( event.target.value );
    };

    /*   *   *   *   *   *   *   *   */

    return(
    <>
        
        <section className='mb-3 w-100 p-2'>

            <span style={{ verticalAlign: 'middle', marginRight: '10px' }}><img src='https://picsum.photos/200' alt='tmp-alt-text' style={{ width: '50px', height:' 50px', borderRadius: '50px' }} /></span>

            <span style={{ verticalAlign: 'middle', fontSize: '32px', fontWeight: '300' }}>
                Imię Nazwisko
            </span>

            <hr />
            
            <div className='input-group'>

                <input value={ friend } onChange={ changeFriend } type='text' className='form-control' placeholder='Wyszukaj znajomego' style={{ height: '42px', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px' }} />
                
                <span className='input-group-text' style={{ height: '42px', borderTopRightRadius: '10px', borderBottomRightRadius: '10px' }}>
                    <SearchIcon />
                </span>

            </div>

            <div className='my-2'>

                <FriendsListAdd />
                
            </div>

        </section>

        <section className='w-100 p-2'>

            <h2 className='display-6'>Znajomi</h2>

            <FriendsList />

        </section>
    </>
    );
};



/*  Module export
/*   *   *   *   *   *   *   *   *   *   */

export default Profile;