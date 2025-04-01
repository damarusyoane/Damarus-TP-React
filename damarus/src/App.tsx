
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//importation des composants
import ClientList from './components/ClientsList';
import CreateClient from './components/CreateClient';
import ClientDetails from './components/ClientsDetails';
import UpdateClient from './components/UpdateClients';
const App = () => {
return (
<Router>
<Routes>
   <Route path="/" element={<ClientList />}  />
<Route path="/clients" element={<ClientList/>} />
<Route path="/clients/create" element={<CreateClient/>} />
<Route path="/clients/clients/:id" element={<ClientDetails/>} />
<Route path="/clients/clients/:id/update" element={<UpdateClient/>} />
</Routes>
</Router>
);
}

export default App;
