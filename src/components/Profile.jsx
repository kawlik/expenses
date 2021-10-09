import React, { useContext, useState } from 'react';

// additional components
import FriendsListItem from './profile/FriendsListItem';
import FriendsListAddItem from './profile/FriendsListAddItem';

// store context
import { StoreContext } from '../context';

// global config
import config from '../utility/config';
import { getData, putData, fetchFriends } from '../utility/api';

// icons
import SearchIcon from '@mui/icons-material/Search';


/*  Module schema
/*   *   *   *   *   *   *   *   *   *   */

const Profile = () => {

    const { user, setUser } = useContext( StoreContext );

    const [ searchFriend, setSearchFriend ] = useState( '' );
    const [ searchResult, setSearchResult ] = useState( [] );

    const changeSearchFriend = async ( event ) => {

        const search = event.target.value;

        setSearchFriend( search );

        try {
            
            if( search.length >= 3 ) {
    
                const buffer = await getData( config.API.link.user.get.findAllBy_name + search );

                setSearchResult( buffer.filter( buffered => ( buffered._id !== user._id ) || !user.friend.includes( buffered )));

            } else {

                setSearchResult( [] );
            }

        } catch( err ) {

            return console.error( err );
        }
    };

    const addUserAsFriend = async ( event, userID ) => {
        event.preventDefault();

        try {

            const buffer = await putData( config.API.link.user.put.addNewAsFriendBy_userID, userID, { auth: user.auth });

            user.friends = await fetchFriends( buffer );
        
            setSearchFriend( '' );
            setSearchResult( [] );
            setUser( user );

        } catch( err ) {

            return console.error( err );
        }
    };

    const removeUserAsFriend = async ( event, userID ) => {
        event.preventDefault();

        try {

            const buffer = await putData( config.API.link.user.put.romoveUserAsFriend_userID, userID, { auth: user.auth });

            user.friends = await fetchFriends( buffer );
        
            setSearchFriend( '' );
            setSearchResult( [] );
            setUser( user );

        } catch( err ) {

            return console.error( err );
        }
    };

    /*   *   *   *   *   *   *   *   */

    return(
    <>
        
        <section className='mb-3 w-100 p-2'>

            <span style={{ verticalAlign: 'middle', marginRight: '10px' }}><img src={ user.body.picture } alt={ user.body.name } style={{ width: '50px', height:' 50px', borderRadius: '50px' }} /></span>

            <span style={{ verticalAlign: 'middle', fontSize: '32px', fontWeight: '300' }}>
                { user.body.name }
            </span>

            <hr />
            
            <div className='input-group'>

                <input value={ searchFriend } onChange={ changeSearchFriend } type='text' className='form-control' placeholder='Wyszukaj znajomego' style={{ height: '42px', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px' }} />
                
                <span className='input-group-text' style={{ height: '42px', borderTopRightRadius: '10px', borderBottomRightRadius: '10px' }}>
                    <SearchIcon />
                </span>

            </div>

            <div className='my-2'>

                <ul className='list-group border p-1 mb-2' style={{ overflowY: 'scroll', maxHeight: '40vh', borderRadius: '10px' }}>


                    {
                        searchResult.map( friend => <FriendsListAddItem key={ friend._id } user={ friend } action={ addUserAsFriend } /> )
                    }

                </ul>
                
            </div>

        </section>

        <section className='w-100 p-2'>

            <h2 className='display-6'>Znajomi</h2>

            {
                user.friends.map( friend => <FriendsListItem key={ friend._id } user={ friend } action={ removeUserAsFriend } /> )
            }

        </section>
    </>
    );
};



/*  Module export
/*   *   *   *   *   *   *   *   *   *   */

export default Profile;