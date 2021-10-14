import React, { useContext } from 'react';

// additional components
import AddNew from './expense/AddNew';
import Header from './expense/Header';
import Saved from './expense/Saved';

// icon
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import SaveAltIcon from '@mui/icons-material/SaveAlt';

// store context
import { StoreContext } from '../context';

// global config
import config from '../utility/config';
import { putData } from '../utility/api';


/*  Module schema
/*   *   *   *   *   *   *   *   *   *   */

const Expense = ({ list }) => {

    const { user, setList } = useContext( StoreContext );

    const lockList = async ( event ) => {
        event.preventDefault();

        event.target.closest( 'button' ).classList.add( 'loading' );

        try {

            const buffer = await putData( config.API.link.list.put.lockBy_listID, list._id, { auth: user.auth, lock: true });

            list.status = buffer.status;

            setList( prev => [ ...prev.filter( item => item._id !== list._id ), list ] );
        
        } catch( err ) {

            event.target.closest( 'button' ).classList.remove( 'loading' );

            return console.error( err );
        }

        event.target.closest( 'button' ).classList.remove( 'loading' );
    };
    
    const unlockList = async ( event ) => {
        event.preventDefault();

        event.target.closest( 'button' ).classList.add( 'loading' );

        try {

            const buffer = await putData( config.API.link.list.put.lockBy_listID, list._id, { auth: user.auth, lock: false });

            list.status = buffer.status;

            setList( prev => [ ...prev.filter( item => item._id !== list._id ), list ] );
        
        } catch( err ) {

            event.target.closest( 'button' ).classList.remove( 'loading' );

            return console.error( err );
        }

        event.target.closest( 'button' ).classList.remove( 'loading' );
    };
    
    /*   *   *   *   *   *   *   *   */

    return(
    <>
        <div className='mb-3 border p-2 shadow' style={{ borderRadius: '10px' }}>

            <Header list={ list }/>

            <details className='py-1 w-100 my-2'>

                <summary className='btn btn-outline-secondary w-100' style={{ height: '42px', borderRadius: '10px' }}>

                    <span style={{ marginRight: '10px', verticalAlign: 'middle' }}><ReadMoreIcon style={{ fontSize: '24px' }} /></span>

                    <span style={{ verticalAlign: 'middle' }}>Więcej</span>

                </summary>

                {
                    list.status.locked
                    ? null
                    : (<div className='py-1 w-100 mt-4'>

                        <h5 className='lead'>
                            Dodaj nowy wydatek
                        </h5>

                        <AddNew list={ list } />

                    </div>)
                }

                <div className='py-1 mt-4 w-100'>

                    <h5 className='lead'>
                        Zapisane wydatki
                    </h5>

                    <Saved list={ list } />

                </div>

            </details>

            {
                !list.status.locked
                ? null
                : <h3 className='fw-light fs-5 mt-5 text-center'>Użytkownik { list.status.lockUserA ? list.userA.body.name : list.userB.body.name } wysłał propozycję, by zakończyć dane rozliczenie. Czy chcesz zakończyć?</h3>
            }

            {
                !list.status.locked
                ? null
                : (<button onClick={ unlockList } className='w-100 btn btn-outline-success mt-2' type='button' style={{ height: '42px', borderRadius: '10px' }}>

                    <span style={{ marginRight: '10px', verticalAlign: 'middle' }}><AccessTimeIcon style={{ fontSize: '24px' }} /></span>
                    
                    <span style={{ verticalAlign: 'middle' }}>Rozliczaj dalej</span>

                </button>)
            }

            {
                ( list.status.locked && list.status.lockUserA && list.userA._id === user._id ) ||
                ( list.status.locked && list.status.lockUserB && list.userB._id === user._id )
                ? null
                : (<button onClick={ lockList } className='w-100 btn btn-outline-danger mt-2' type='button' style={{ height: '42px', borderRadius: '10px' }}>

                    <span style={{ marginRight: '10px', verticalAlign: 'middle' }}><SaveAltIcon style={{ fontSize: '24px' }} /></span>
                    
                    <span style={{ verticalAlign: 'middle' }}>Zakończ teraz</span>

                </button>)
            }

        </div>
    </>
    );
};



/*  Module export
/*   *   *   *   *   *   *   *   *   *   */

export default Expense;