import React, { useState } from 'react';


// icons
import AddBoxIcon from '@mui/icons-material/AddBox';


/*  Module schema
/*   *   *   *   *   *   *   *   *   *   */

const AddNew = () => {


    const [ name, setName ] = useState( '' );
    const [ price, setPrice ] = useState( '' );

    const changeName = ( event ) => {
        setName( event.target.value );
    };

    const changePrice =( event ) => {
        setPrice( event.target.value );
    };

    /*   *   *   *   *   *   *   *   */

    return(
    <>
        <div className='row my-1 py-1'>

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
                <button disabled={ name === '' || price === '' } type='button' className='btn btn-outline-success w-100' style={{ height: '42px', borderRadius: '10px' }}>

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