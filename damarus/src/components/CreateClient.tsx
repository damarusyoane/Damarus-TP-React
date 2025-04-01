import React, { useState } from 'react'; // importe React et useState de React
import { useNavigate } from 'react-router-dom'; // importe useNavigate de react-router-dom pour gerer la navigation
import axios from 'axios'; // importe axios pour gerer les requetes http a parti de axios

const CreateClient = () => {
    const [client, setClient] = useState({ name: '', adresse: '', tel: '' }); // initialise le state client avec un objet contenant les champs name, adresse et tel
    const navigate = useNavigate(); // initialise la navigation

    const handleCreate = async () => { // fonction pour gerer la creation d'un client
        await axios.post('http://localhost:3001/clients', client); // envoie une requete post a l'url http://localhost:3001/clients avec le client en parametre
        navigate('/clients', { replace: true }); // redirige vers la page des clients
    };
    return ( // retourne le composant
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Créer un Client</h1>
            <form className="space-y-4">
                <div>
                <label className="block text-sm font-medium text-gray-700">Nom:</label>
                <input 
                    type="text" 
                    value={client.name} 
                    onChange={(e) => setClient({ ...client, name: e.target.value })} 
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                </div>
                <div>
                <label className="block text-sm font-medium text-gray-700">Adresse:</label>
                <input 
                    type="text" 
                    value={client.adresse} 
                    onChange={(e) => setClient({ ...client, adresse: e.target.value })} 
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                </div>
                <div>
                <label className="block text-sm font-medium text-gray-700">Téléphone:</label>
                <input 
                    type="text" 
                    value={client.tel} 
                    onChange={(e) => setClient({ ...client, tel: e.target.value })} 
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                </div>
                <button 
                type="button" 
                onClick={handleCreate} 
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                Créer
                </button>
            </form>
            </div>
        </div>
    );
}

export default CreateClient;