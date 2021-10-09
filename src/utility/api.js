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


/*  Module export
/*   *   *   *   *   *   *   *   *   *   */

export { getData };