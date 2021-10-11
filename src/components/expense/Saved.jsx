import React from 'react';

// icons
import LocalAtmIcon from '@mui/icons-material/LocalAtm';

/*  Module schema
/*   *   *   *   *   *   *   *   *   *   */

const Saved = ({ list }) => {

    /*   *   *   *   *   *   *   *   */

    return(
    <>
        {
            list.expenses.map( item => (
                
                <figure key={ item._id } className='m-1 p-1 shadow-sm rounded'>

                    <blockquote className='blockquote'>
        
                        <span className='badge bg-secondary' style={{ verticalAlign: 'middle', marginRight: '10px', minWidth: '84px', height:' 32px', textAlign: 'left' }}>

                            <span style={{ verticalAlign: 'middle', marginRight: '5px' }} ><LocalAtmIcon /></span>

                            <span style={{ verticalAlign: 'middle' }} >{ item.value }</span>

                        </span>
                            
                        <span style={{ marginRight: '10px', verticalAlign: 'middle' }}>
                            { item.name }
                        </span>
        
                    </blockquote>
        
                    <figcaption className="blockquote-footer">
                        { list.userA._id === item.user ? list.userA.body.name : list.userB.body.name }
                    </figcaption>
        
                </figure>

            ))
        }
    </>
    );
};



/*  Module export
/*   *   *   *   *   *   *   *   *   *   */

export default Saved;