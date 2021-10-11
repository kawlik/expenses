import React, { useState, useContext } from 'react';

// icons
import AddBoxIcon from '@mui/icons-material/AddBox';

// store context
import { StoreContext } from '../../context';

// global config
import config from '../../utility/config';
import { postData } from '../../utility/api';

/*  Module schema
/*   *   *   *   *   *   *   *   *   *   */

const AddNew = ({ list }) => {

    const { user, setList } = useContext( StoreContext );

    const [ name, setName ] = useState( '' );
    const [ price, setPrice ] = useState( '' );
    const [ participant, setParticipant ] = useState( '' );


    const changeName = ( event ) => {
        setName( event.target.value );
    };

    const changePrice = ( event ) => {
        setPrice( Math.min( event.target.value, 10000 ) == 0 ? '' : Math.min( event.target.value, 10000 ));
    };

    const selectParticipant = ( event ) => {
        setParticipant( event.target.value );
    };


    const addNewExpense = async ( event ) => {
        event.preventDefault();

        const expense = {
            auth: user.auth,
            data: {
                _id_list: list._id,
                user: participant,
                name: name,
                value: price,
            },
        };

        try {
            
            const buffer = await postData( config.API.link.expense.post.addNewBy_listID, list._id, expense );

            list.expenses.push( buffer );
            
            setList( prev => [ ...prev.filter( item => item._id !== list._id ), list ] );
            setParticipant( '' );
            setPrice( '' );
            setName( '' );

        } catch( err ) {

            return console.error( err );
        }
    };


    /*   *   *   *   *   *   *   *   */

    return(
    <>
        <div className='row my-1 py-1'>

            <div className='col-12 mb-3'>

                <select value={ participant } onChange={ selectParticipant } className='form-select' style={{ height: '42px', borderRadius: '10px' }}>

                    <option value={ list.userA._id }>{ list.userA.body.name }</option>
                    <option value={ list.userB._id }>{ list.userB.body.name }</option>
                
                </select>

            </div>

            <div className='col-12 mb-3'>
                <input value={ name } onChange={ changeName } type='text' className='form-control' placeholder='Wydatek' style={{ height: '42px', borderRadius: '10px' }} />
            </div>

            <div className='col-12 mb-3 input-group'>

                <input value={ price } onChange={ changePrice } min={ 1 } max={ 10000 } step={ 1 } type='number' className='form-control' placeholder='Cena' style={{ height: '42px', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px' }} />

                <span className='input-group-text' style={{ height: '42px', borderTopRightRadius: '10px', borderBottomRightRadius: '10px' }}>
                    .00
                </span>

            </div>

            <div className='col-12'>
                <button disabled={ name === '' || price === '' || participant === '' } onClick={ addNewExpense } type='button' className='btn btn-outline-success w-100' style={{ height: '42px', borderRadius: '10px' }}>

                    <span style={{ marginRight: '10px', verticalAlign: 'middle' }}><AddBoxIcon style={{ fontSize: '24px' }} /></span>
                
                    <span style={{ verticalAlign: 'middle' }}>Dodaj</span>
                    
                </button>
            </div>

        </div>
    </>
    );
};



/*  Module export
/*   *   *   *   *   *   *   *   *   *   */

export default AddNew;