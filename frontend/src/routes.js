import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Contatos from './Pages/contato';

const MainRoutes = () => {
    return(
        <Routes>
            <Route
                path="/"
                element={<Contatos />}
            />
        </Routes>
    )
}

export default MainRoutes;
