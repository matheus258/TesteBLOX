import React, { useState, Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from '../pages/Login/Login';
import { SingIn } from '../pages/Registration/SingIn';
import { Home } from '../pages/Home/Home';
// import Register from '../components/FormRegister/teste';

import { AuthContext } from '../contexts/auth';

//Criação de rotas Publicas e Privadas.
const Private = ({ Item }) => {
    const signed = false;
    // Para deixar rota privada alterar valor para TRUE e add logica.
    return signed === false ? <Item /> : <Login />
};


function Routers() {
    const [token, setToken] = useState();

    if (token) {
        return <Home setToken={setToken} />
    }
    return (
        <Router>
            <Fragment>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/cadastro' element={<SingIn />} />
                    {/* <Route path='/cadastro1' element={<Register />} /> */}
                    <Route path='/home' element={<Private Item={Home} />} />
                </Routes>
            </Fragment>
        </Router>
    )
}

export default Routers;