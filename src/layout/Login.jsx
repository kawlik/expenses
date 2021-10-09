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

    const { setUser } = useContext( StoreContext );

    const autoLogin = async ( auth ) => {

        try {

            const user = await getData( config.API.link.user.get.findOneBy_auth, auth );

            if( auth === user?.auth ) { 

                user.friends = await fetchFriends( user );
        
                setUser( user );
            };
            
        } catch( err ) {

            return console.error( err );
        }
    };

    /*   *   *   *   *   *   *   *   */

    useEffect(() => {

        // init url search
        const url = new URL( window.location.href );
        const params = new URLSearchParams( url.search );

        // proces login with url
        if( params.has( 'auth' )) {

            autoLogin( params.get( 'auth' ));
        }

        // clears url history
        window.history.replaceState( null, document.title, window.location.pathname );

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

                <a href={ config.API.auth.facebook } className='w-100 btn btn-outline-primary mb-2' type='button' style={{ height: '42px', borderRadius: '10px' }}>

                    <span style={{ marginRight: '10px', verticalAlign: 'middle' }}><FacebookIcon style={{ fontSize: '28px' }} /></span>

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