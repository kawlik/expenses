import React from 'react';


// icons
import LocalAtmIcon from '@mui/icons-material/LocalAtm';


/*  Module schema
/*   *   *   *   *   *   *   *   *   *   */

const Header = () => {

    /*   *   *   *   *   *   *   *   */

    return(
    <>
        <h4 className='lead'>10-10-2021</h4>
            
        <div className='py-1 w-100'>
                
            <span className='badge bg-info' style={{ verticalAlign: 'middle', marginRight: '10px', minWidth: '84px', height:' 32px', textAlign: 'left' }}>

                <span style={{ verticalAlign: 'middle', marginRight: '5px' }} ><LocalAtmIcon /></span>

                <span style={{ verticalAlign: 'middle' }} >0</span>

            </span>

            <span style={{ verticalAlign: 'middle', marginRight: '10px' }}><img src='https://picsum.photos/200' alt='tmp-alt-text' style={{ width: '32px', height:' 32px', borderRadius: '32px' }} /></span>

            <span style={{ verticalAlign: 'middle', fontSize: '20px', fontWeight: '300' }}>
                Imię Nazwisko
            </span>

        </div>

        <div className='py-1 w-100'>
                
            <span className='badge bg-info' style={{ verticalAlign: 'middle', marginRight: '10px', minWidth: '84px', height:' 32px', textAlign: 'left' }}>

                <span style={{ verticalAlign: 'middle', marginRight: '5px' }} ><LocalAtmIcon /></span>

                <span style={{ verticalAlign: 'middle' }} >0</span>

            </span>

            <span style={{ verticalAlign: 'middle', marginRight: '10px' }}><img src='https://picsum.photos/200' alt='tmp-alt-text' style={{ width: '32px', height:' 32px', borderRadius: '32px' }} /></span>

            <span style={{ verticalAlign: 'middle', fontSize: '20px', fontWeight: '300' }}>
                Imię Nazwisko
            </span>

        </div>
    </>
    );
};



/*  Module export
/*   *   *   *   *   *   *   *   *   *   */

export default Header;