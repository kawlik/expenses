import React from 'react';


/*  Module schema
/*   *   *   *   *   *   *   *   *   *   */

const SelectUser = ({ user }) => {

    /*   *   *   *   *   *   *   *   */

    return(
    <>     

        <li className='list-group-item' style={{ borderRadius: '10px' }}>

            <span style={{ verticalAlign: 'middle', marginRight: '10px' }}><img src='https://picsum.photos/200' alt='tmp-alt-text' style={{ width: '32px', height:' 32px', borderRadius: '32px' }} /></span>

            <span style={{ verticalAlign: 'middle', fontSize: '20px', fontWeight: '300' }}>
                Imię Nazwisko
            </span>

        </li>

    </>
    );
};



/*  Module export
/*   *   *   *   *   *   *   *   *   *   */

export default SelectUser;