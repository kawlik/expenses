import React, { useState } from 'react';


// local components
import SelectUser from './SelectUser';


// icons
import AddBoxIcon from '@mui/icons-material/AddBox';


/*  Module schema
/*   *   *   *   *   *   *   *   *   *   */

const AddNew = () => {


    const [ participant, setParticipant ] = useState( '' );


    const selectParticipant = ( event ) => {
        setParticipant( event.target.value );
    };


    /*   *   *   *   *   *   *   *   */

    return(
    <>        

        <section className='p-2 border' style={{ borderRadius: '10px' }}>


            <h2 className='fw-bold fs-5 mb-3'>
                Dodaj nowe rozliczenie
            </h2>

            <ul className='list-group border p-1 mb-2' style={{ overflowY: 'scroll', maxHeight: '40vh', borderRadius: '10px' }}>

                <SelectUser />
                
                <SelectUser />

                <SelectUser />

                <SelectUser />

                <SelectUser />

                <SelectUser />

                <SelectUser />

                <SelectUser />

            </ul>

            <button disabled={ participant === '' } className='w-100 btn btn-outline-success' type='button' style={{ height: '42px', borderRadius: '10px' }}>

                <span style={{ marginRight: '10px', verticalAlign: 'middle' }}><AddBoxIcon style={{ fontSize: '24px' }} /></span>
                
                <span style={{ verticalAlign: 'middle' }}>Dodaj</span>

            </button>

        </section>

    </>
    );
};



/*  Module export
/*   *   *   *   *   *   *   *   *   *   */

export default AddNew;