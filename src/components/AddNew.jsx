import React, { useState } from 'react';


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


            <h2 className='fw-bold fs-5'>
                Dodaj nowe rozliczenie
            </h2>


            <select value={ participant } onChange={ selectParticipant } className='form-select my-2' style={{ height: '42px', borderRadius: '10px' }}>

                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                
            </select>


            <button disabled={ participant === '' } className='w-100 btn btn-outline-success mt-2' type='button' style={{ height: '42px', borderRadius: '10px' }}>

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