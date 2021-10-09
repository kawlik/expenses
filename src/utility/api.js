// core modules
import axios from 'axios';

// global config
import config from './config';


/*  Helpers functions
/*   *   *   *   *   *   *   *   *   *   */

const makePath = ( path, param = '' ) => config.API.host + path + param;

/*  Request functions
/*   *   *   *   *   *   *   *   *   *   */

const getData = async ( path, param ) => {

    try {

        // making request
        const req = await axios.get( makePath( path, param ));

        // parsing response
        const res = req?.data;
            
        // test res
        if( res?.success ) {

            // returns response
            return res.response;

        } else {

            throw new Error( 'Request could not be processed!' );
        }

    } catch( err ) {

        // error message
        console.error( err );

        // safe return value
        return null;
    }
};


const postData = async ( path, param, body ) => {

    try {

        // making request
        const req = await axios.post( makePath( path, param ), body );

        // parsing response
        const res = req?.data;
            
        // test res
        if( res?.success ) {

            // returns response
            return res.response;

        } else {

            throw new Error( 'Request could not be processed!' );
        }

    } catch( err ) {

        // error message
        console.error( err );

        // safe return value
        return null;
    }
};


const putData = async ( path, param, body ) => {

    try {

        // making request
        const req = await axios.put( makePath( path, param ), body );

        // parsing response
        const res = req?.data;
            
        // test res
        if( res?.success ) {

            // returns response
            return res.response;

        } else {

            throw new Error( 'Request could not be processed!' );
        }

    } catch( err ) {

        // error message
        console.error( err );

        // safe return value
        return null;
    }
};


const fetchFriends = async ( user ) => {

    try {

        const buffer = [];
        
        for( const friend of user.friends ) {
        
            const friendData = await getData( config.API.link.user.get.findOneBy_userID, friend );
        
            buffer.push( friendData );
        };

        return buffer;

    } catch( err ) {

        // error message
        console.error( err );

        // safe return value
        return null;
    }
};


/*  Module export
/*   *   *   *   *   *   *   *   *   *   */

export { getData, postData, putData, fetchFriends };