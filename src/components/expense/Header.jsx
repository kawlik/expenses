import React from 'react';

// icons
import LocalAtmIcon from '@mui/icons-material/LocalAtm';


/*  Module schema
/*   *   *   *   *   *   *   *   *   *   */

const Header = ({ list }) => {
    
    const mapValueUserA = list.expenses.filter( item => item.user === list.userA._id ).map( item => item.value );
    const mapValueUserB = list.expenses.filter( item => item.user === list.userB._id ).map( item => item.value );

    const valueUserA = mapValueUserA.length ? mapValueUserA.reduce(( p, q ) => p + q ) : 0;
    const valueUserB = mapValueUserB.length ? mapValueUserB.reduce(( p, q ) => p + q ) : 0;

    /*   *   *   *   *   *   *   *   */

    return(
    <>
        <h4 className='lead'>{ list.date.split('T')[0] }</h4>
            
        <div className='py-1 w-100'>
                
            <span className='badge bg-info' style={{ verticalAlign: 'middle', marginRight: '10px', minWidth: '84px', height:' 32px', textAlign: 'left' }}>

                <span style={{ verticalAlign: 'middle', marginRight: '5px' }} ><LocalAtmIcon /></span>

                <span style={{ verticalAlign: 'middle' }} >{ valueUserA }</span>

            </span>

            <span style={{ verticalAlign: 'middle', marginRight: '10px' }}><img src={ list.userA.body.picture } alt={ list.userA.body.name } style={{ width: '32px', height:' 32px', borderRadius: '32px' }} /></span>

            <span style={{ verticalAlign: 'middle', fontSize: '20px', fontWeight: '300' }}>
                { list.userA.body.name }
            </span>

        </div>

        <div className='py-1 w-100'>
                
            <span className='badge bg-info' style={{ verticalAlign: 'middle', marginRight: '10px', minWidth: '84px', height:' 32px', textAlign: 'left' }}>

                <span style={{ verticalAlign: 'middle', marginRight: '5px' }} ><LocalAtmIcon /></span>

                <span style={{ verticalAlign: 'middle' }} >{ valueUserB }</span>

            </span>

            <span style={{ verticalAlign: 'middle', marginRight: '10px' }}><img src={ list.userB.body.picture } alt={ list.userB.body.name } style={{ width: '32px', height:' 32px', borderRadius: '32px' }} /></span>

            <span style={{ verticalAlign: 'middle', fontSize: '20px', fontWeight: '300' }}>
                { list.userB.body.name }
            </span>

        </div>
    </>
    );
};



/*  Module export
/*   *   *   *   *   *   *   *   *   *   */

export default Header;