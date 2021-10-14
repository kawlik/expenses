import React, { useContext } from 'react';

// additional components
import FriendsListAddItem from './profile/FriendsListAddItem';

// store context
import { StoreContext } from '../context';

// global config
import config from '../utility/config';
import { getData, postData } from '../utility/api';


/*  Module schema
/*   *   *   *   *   *   *   *   *   *   */

const AddNew = () => {

    const { user, setList } = useContext( StoreContext );

    const selectUser = async ( event, userID ) => {
        event.preventDefault();

        event.target.closest( 'button' ).classList.add( 'loading' );

        try {

            const buffer = await postData( config.API.link.list.post.addNewBy_userID, userID, { auth: user.auth });

            buffer.userA = await getData( config.API.link.user.get.findOneBy_userID, buffer.userA );
            buffer.userB = await getData( config.API.link.user.get.findOneBy_userID, buffer.userB );

            buffer.expenses = await getData( config.API.link.expense.get.findAllBy_listID, buffer._id );

            setList( prev => [ ...prev, buffer ] );
        
        } catch( err ) {

            event.target.closest( 'button' ).classList.remove( 'loading' );

            return console.error( err );
        }

        event.target.closest( 'button' ).classList.remove( 'loading' );
    };

    /*   *   *   *   *   *   *   *   */

    return(
    <>        

        <section className='p-2 border mt-5 shadow' style={{ borderRadius: '10px' }}>


            <h2 className='fw-bold fs-5 mb-3'>
                Dodaj nowe rozliczenie
            </h2>

            <ul className='list-group border p-1 mb-2' style={{ overflowY: 'scroll', maxHeight: '40vh', borderRadius: '10px' }}>

                {   
                    !user.friends.length
                    ?   <h3 className='fw-light fs-4 mt-5 mx-2 text-center'>Dodaj znajomych, by móc towrzyć rozliczenia!</h3>
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