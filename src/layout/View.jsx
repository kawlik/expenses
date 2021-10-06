import React, { useState, useEffect } from 'react';


// local components
import Active from '../components/Active';
import Profile from '../components/Profile';
import Saved from '../components/Saved';
import Selector from '../components/Selector';


// global config
import config from '../utility/config';


/*  Module schema
/*   *   *   *   *   *   *   *   *   *   */

const View = () => {


    const [ view, setView ] = useState( config.views.name.profile );
    const [ swipe, setSwipe ] = useState( null );

    /*   *   *   *   *   *   *   *   */


    const touch = { x: null, y: null, delta_x: null };

    const handleTouchStart = ( event ) => {

        touch.x = event.touches[0].clientX;
        touch.y = event.touches[0].clientY;
    };

    const handleTouchMove = ( event ) => {

        if( !touch.x || !touch.y ) { return; }

        const swipe_w = 2 * window.innerWidth / 3;
        const swipe_v = -0.8;

        const next_x = event.touches[0].clientX;
        const next_y = event.touches[0].clientY;
        
        const delta_x = touch.x - next_x;
        const delta_y = touch.y - next_y;

        touch.delta_x = delta_x;

        
        document.querySelector( '#view-content' ).style.opacity = 1 - ( Math.abs( delta_x ) / swipe_w );
        document.querySelector( '#view-content' ).style.transition = null;
        document.querySelector( '#view-content' ).style.transform = `translateX( ${swipe_v * delta_x }px )`;


        if( Math.abs( delta_x ) > Math.abs( delta_y ) && Math.abs( delta_x ) > swipe_w  ) {

            const min = 0;
            const max = config.views.list.length - 1;
            const idx = config.views.list.indexOf( view );

            if( delta_x < 0 && idx - 1 >= min ) {

                setView( config.views.list[ idx - 1 ] );
                setSwipe( 'left' );
            };

            if( delta_x > 0 && idx + 1 <= max ) {

                setView( config.views.list[ idx + 1 ] );
                setSwipe( 'right' );
            };

        }
    };

    const handleTouchEnd = ( event ) => {

        document.querySelector( '#view-content' ).style.opacity = 1;
        document.querySelector( '#view-content' ).style.transition = 'all ease-in-out 0.3s';
        document.querySelector( '#view-content' ).style.transform = null;
    }

    /*   *   *   *   *   *   *   *   */


    useEffect(() => {

        document.addEventListener( 'touchstart', handleTouchStart );
        document.addEventListener( 'touchmove', handleTouchMove );
        document.addEventListener( 'touchend', handleTouchEnd );

    return () => {
        
        document.removeEventListener( 'touchstart', handleTouchStart );
        document.removeEventListener( 'touchmove', handleTouchMove );
        document.removeEventListener( 'touchend', handleTouchEnd );


    }}, [ view ]);


    /*   *   *   *   *   *   *   *   */

    return(
    <>
        <main id='view-container'>

            <section id='view-content' className={ `p-2 w-100 ${swipe}` } key={ view }>


                { view === config.views.name.saved && <Saved /> }

                { view === config.views.name.active && <Active /> }

                { view === config.views.name.profile && <Profile /> }


            </section>
            
            <Selector view={ view } setView={ setView } setSwipe={ setSwipe } />

        </main>
    </>
    );
};



/*  Module export
/*   *   *   *   *   *   *   *   *   *   */

export default View;