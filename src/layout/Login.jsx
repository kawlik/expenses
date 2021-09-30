import React, { useContext } from 'react';


// store context
import { StoreContext } from '../context';



/*  Module schema
/*   *   *   *   *   *   *   *   *   *   */

const Login = () => {


    // context values
    const { setUser } = useContext( StoreContext );


    /*   *   *   *   *   *   *   *   */

    return(
    <>

        <div className="modal modal-signin position-static d-block bg-light py-5">
        <div className="modal-dialog">
        <div className="modal-content shadow" style={{ borderRadius: '15px' }}>

            <div className="modal-body p-4">


                <h2 className="fw-bold p-2 mb-4">
                    Logowanie
                </h2>


                <div className="form-floating my-2">

                    <input id="login-token" className="form-control" type="password" placeholder="Token logowania" style={{ borderRadius: '10px' }}/>

                    <label for="login-token">
                        Token logowania
                    </label>

                </div>
                

                <button class="w-100 btn btn-lg btn-success my-2" type="button" style={{ borderRadius: '10px' }}>
                    Zaloguj
                </button>


                <small className="text-muted">
                    Do zalogowania się konieczne jest uzyskanie z serwisu Facebook indywidualnego tokenu logowania.
                </small>


                <hr className="my-4"></hr>


                <h2 className="fw-bold fs-5">
                    Pobierz token logowania
                </h2>


                <button class="w-100 btn btn-lg btn-outline-primary my-2" type="button" style={{ borderRadius: '10px' }}>
                    Zaloguj z Facebook
                </button>

            </div>

        </div>
        </div>
        </div>
    </>
    );
};



/*  Module export
/*   *   *   *   *   *   *   *   *   *   */

export default Login;