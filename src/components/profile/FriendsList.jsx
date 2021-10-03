import React from 'react';


/*  Module schema
/*   *   *   *   *   *   *   *   *   *   */

const FriendsList = () => {

    /*   *   *   *   *   *   *   *   */

    return(
    <>
        <li className='w-100 mb-2' style={{ listStyle: 'none' }}>

            <span style={{ verticalAlign: 'middle', marginRight: '10px' }}><img src='https://picsum.photos/200' alt='tmp-alt-text' style={{ width: '42px', height: '42px', borderRadius: '42px' }} /></span>

            <span style={{ verticalAlign: 'middle', fontSize: '28px', fontWeight: '300' }}>
                Imię Nazwisko
            </span>

        </li>
    </>
    );
};



/*  Module export
/*   *   *   *   *   *   *   *   *   *   */

export default FriendsList;