import React, { useContext, useEffect, useState } from 'react';

// icons
import FacebookIcon from '@mui/icons-material/Facebook';

// store context
import { StoreContext } from '../context';

// global config
import config from '../utility/config';
import { getData, fetchFriends } from '../utility/api';


/*  Module schema
/*   *   *   *   *   *   *   *   *   *   */

const Login = () => {

    const { setUser, setList } = useContext( StoreContext );

    const documentHasCookie = ( name ) => {

        if( document.cookie !== '' ) {

            const cookies = document.cookie.split( /; */ );

            for( const cookie of cookies ) {

                const [ key, val ] = cookie.split( '=' );

                if( key === decodeURIComponent( name )) {

                    // cookie has been found
                    return true;
                }
            }
        }

        // coockie has not been found
        return false;
    }

    const documentReadCookie = ( name ) => {

        const cookies = document.cookie.split( /; */ );

        for( const cookie of cookies ) {

            const [ key, val ] = cookie.split( '=' );

            if( key === decodeURIComponent( name )) {

                return val;
            }
        }
    };

    const autoLogin = async ( auth ) => {

        try {

            const user = await getData( config.API.link.user.get.findOneBy_auth, auth );

            if( auth === user?.auth ) { 

                user.friends = await fetchFriends( user );
                
                const list = await getData( config.API.link.list.get.findAllBy_userID, user._id );

                for( const item of list ) {

                    item.userA = await getData( config.API.link.user.get.findOneBy_userID, item.userA );
                    item.userB = await getData( config.API.link.user.get.findOneBy_userID, item.userB );

                    item.expenses = await getData( config.API.link.expense.get.findAllBy_listID, item._id );
                };

                // store data
                setUser( user );
                setList( list );
            };
            
        } catch( err ) {

            return console.error( err );
        }
    };

    /*   *   *   *   *   *   *   *   */

    useEffect(() => {

        // clears url history
        window.history.replaceState( null, document.title, window.location.pathname );

        // reads cookie name auth and tries to proces login
        if( documentHasCookie( 'auth' )) {

            const auth = documentReadCookie( 'auth' );

            autoLogin( auth );
        };

    }, []);

    /*   *   *   *   *   *   *   *   */

    return(
    <>

        <div className='modal modal-signin position-static d-block bg-light py-5'>
        <div className='modal-dialog'>
        <div className='modal-content shadow' style={{ borderRadius: '15px' }}>

            <div className='modal-body p-4'>


                <h2 className='fw-bold p-2 mb-4'>
                    Logowanie
                </h2>

                <a href={ config.API.auth.facebook } className='w-100 btn btn-lg btn-outline-primary mb-2' type='button' style={{ borderRadius: '10px' }}>

                    <span style={{ marginRight: '10px', verticalAlign: 'middle' }}><FacebookIcon style={{ fontSize: '32px' }} /></span>

                    <span style={{ verticalAlign: 'middle' }}>Zaloguj z Facebook</span>
                    
                </a>

                <hr className='mb-3' />

                <small className='text-muted'>
                    Do zalogowania się konieczne jest skorzystanie z wybranego serwisu społecznościowego. Korzystanie z takiej metody logowania zwiększa bezpieczeństwo i zmniejsza ilość koniecznych do zapamiętania haseł.
                </small>

            </div>

        </div>
        </div>
        </div>
    </>
    );
};



/*  Module export
/*   *   *   *   *   *   *   *   *   *   */

export default Login;