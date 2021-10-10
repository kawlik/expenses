import React, { useContext } from 'react';

// additional components
import FriendsListAddItem from './profile/FriendsListAddItem';

// store context
import { StoreContext } from '../context';

// global config
import config from '../utility/config';
import { postData } from '../utility/api';


/*  Module schema
/*   *   *   *   *   *   *   *   *   *   */

const AddNew = () => {

    const { user, setList } = useContext( StoreContext );

    const selectUser = async ( event, userID ) => {
        event.preventDefault();

        try {

            const buffer = await postData( config.API.link.list.post.addNewBy_userID, userID, { auth: user.auth });

            setList( prev => [ ...prev, buffer ] );
        
        } catch( err ) {

            return console.error( err );
        }
    };

    /*   *   *   *   *   *   *   *   */

    return(
    <>        

        <section className='p-2 border mt-5' style={{ borderRadius: '10px' }}>


            <h2 className='fw-bold fs-5 mb-3'>
                Dodaj nowe rozliczenie
            </h2>

            <ul className='list-group border p-1 mb-2' style={{ overflowY: 'scroll', maxHeight: '40vh', borderRadius: '10px' }}>

                {   
                    !user.friends.length
                    ?   <h3 className='fw-light fs-4 my-3 mx-2'>Dodaj znajomych, by móc towrzyć rozliczenia!</h3>
                    :   user.friends.map( friend => <FriendsListAddItem key={ friend._id } user={ friend } action={ ( e ) => selectUser( e, friend._id) } /> )
                }

            </ul>

        </section>

    </>
    );
};



/*  Module export
/*   *   *   *   *   *   *   *   *   *   */

export default AddNew;