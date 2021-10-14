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
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';


/*  Module schema
/*   *   *   *   *   *   *   *   *   *   */

const Profile = () => {

    const { user, setUser, setList, setLoad } = useContext( StoreContext );

    const [ searchFriend, setSearchFriend ] = useState( '' );
    const [ searchResult, setSearchResult ] = useState( [] );

    const changeSearchFriend = async ( event ) => {

        const search = event.target.value;

        setSearchFriend( search );

        try {
            
            if( search.length >= 3 ) {
    
                const buffer = await getData( config.API.link.user.get.findAllBy_name + search );

                const bufferNoUser = buffer.filter( buffered => buffered._id !== user._id );

                const bufferNoFriends = bufferNoUser.filter( buffered => {

                    for( const { _id } of user.friends ) {
                        
                        if( _id === buffered._id ) {

                            return false;
                        }
                    }

                    return true;
                });

                setSearchResult( bufferNoFriends );

            } else {

                setSearchResult( [] );
            }

        } catch( err ) {

            return console.error( err );
        }
    };

    const addUserAsFriend = async ( event, userID ) => {
        event.preventDefault();

        event.target.closest( 'button' ).classList.add( 'loading' );

        try {

            const buffer = await putData( config.API.link.user.put.addNewAsFriendBy_userID, userID, { auth: user.auth });

            user.friends = await fetchFriends( buffer );
        
            setSearchFriend( '' );
            setSearchResult( [] );

        } catch( err ) {

            event.target.closest( 'button' ).classList.remove( 'loading' );

            return console.error( err );
        }

        event.target.closest( 'button' ).classList.remove( 'loading' );
    };

    const removeUserAsFriend = async ( event, userID ) => {
        event.preventDefault();

        event.target.closest( 'button' ).classList.add( 'loading' );

        try {

            const buffer = await putData( config.API.link.user.put.romoveUserAsFriend_userID, userID, { auth: user.auth });

            user.friends = await fetchFriends( buffer );
        
            setSearchFriend( '' );
            setSearchResult( [] );

        } catch( err ) {

            event.target.closest( 'button' ).classList.remove( 'loading' );

            return console.error( err );
        }

        event.target.closest( 'button' ).classList.remove( 'loading' );
    };

    const logout = ( event ) => {
        event.preventDefault();

        event.target.closest( 'button' ).classList.add( 'loading' );

        const cookies = document.cookie.split( /; */ );

        for( const cookie of cookies ) {

            const [ key, val ] = cookie.split( '=' );

            document.cookie = key + `=;expires${ Date.now() - 1 }`;
        }

        setUser( null );
        setList( null );
        setLoad( false );

        event.target.closest( 'button' ).classList.remove( 'loading' );
    };

    /*   *   *   *   *   *   *   *   */

    return(
    <>
        
        <section className='mb-3 w-100 p-2'>

            <span style={{ verticalAlign: 'middle', marginRight: '10px' }}><img src={ user.body.picture } alt={ user.body.name } style={{ width: '50px', height:' 50px', borderRadius: '50px' }} /></span>

            <span style={{ verticalAlign: 'middle', fontSize: '32px', fontWeight: '300' }}>
                { user.body.name }
            </span>

            <button onClick={ logout } className='w-100 btn btn-outline-danger mt-3' type='button' style={{ borderRadius: '10px' }}>

                <span style={{ marginRight: '10px', verticalAlign: 'middle' }}><LogoutIcon style={{ fontSize: '24px' }} /></span>

                <span style={{ verticalAlign: 'middle' }}>Wyloguj</span>

            </button>

            <hr />
            
            <div className='input-group'>

                <input value={ searchFriend } onChange={ changeSearchFriend } type='text' className='form-control' placeholder='Wyszukaj znajomego' style={{ height: '42px', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px' }} />
                
                <span className='input-group-text' style={{ height: '42px', borderTopRightRadius: '10px', borderBottomRightRadius: '10px' }}>
                    <SearchIcon />
                </span>

            </div>

            {
                !searchResult.length
                ? null
                : (
                    <div className='my-2'>

                        <ul className='list-group border p-1 mb-2' style={{ overflowY: 'scroll', maxHeight: '40vh', borderRadius: '10px' }}>

                            {   
                                searchResult.map( friend => <FriendsListAddItem key={ friend._id } user={ friend } action={ addUserAsFriend } /> )
                            }

                        </ul>
                        
                    </div>
                )
            }

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