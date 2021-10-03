import React from 'react';


// icons
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SaveIcon from '@mui/icons-material/Save';


// global config
import config from '../utility/config';


/*  Module schema
/*   *   *   *   *   *   *   *   *   *   */

const Selector = ({ view, setView, setSwipe }) => {

    /*   *   *   *   *   *   *   *   */

    return(
    <>        
        <nav className='nav navbar-dark bg-light row p-2 pb-3 w-100' id='view-selector'>

            <li className={`col-3 row mx-auto ${ view === config.views.name.saved && 'active' }`}>
                <button className='mx-auto btn' onClick={() => { setView( config.views.name.saved ); setSwipe( null); }}>
                    
                    <SaveIcon style={{ fontSize: '28px' }} />

                    <small>Zapisane</small>

                </button>
            </li>

            <li className={`col-3 row mx-auto ${ view === config.views.name.active && 'active' }`}>
                <button className='mx-auto btn' onClick={() => { setView( config.views.name.active ); setSwipe( null); }}>

                    <AddShoppingCartIcon style={{ fontSize: '28px' }} />

                    <small>Aktywne</small>

                </button>
            </li>

            
            <li className={`col-3 row mx-auto ${ view === config.views.name.profile && 'active' }`}>
                <button className='mx-auto btn' onClick={() => { setView( config.views.name.profile ); setSwipe( null); }}>

                    <AccountBoxIcon style={{ fontSize: '28px' }} />

                    <small>Profil</small>

                </button>
            </li>

        </nav>
    </>
    );
};



/*  Module export
/*   *   *   *   *   *   *   *   *   *   */

export default Selector;