import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
const UpdateClient = () => {
const { id } = useParams();
const [client, setClient] = useState({ name: '', adresse: '', tel: '' });
const navigate = useNavigate();
useEffect(() => {
const fetchClient = async () => {
const response = await axios.get(`http://localhost:3001/clients/${id}`);
setClient(response.data);
};
fetchClient();
}, [id]);
const handleUpdate = async () => {
await axios.put(`http://localhost:3001/clients/${id}`, client);
navigate('/clients', { replace: true });//retour à la liste
};
return (
<div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
    <h1 className="text-2xl font-bold mb-4 text-center">Mettre à jour le client</h1>
    <form className="space-y-4">
        <div>
            <label className="block text-sm font-medium text-gray-700">Nom du client:</label>
            <input
                type="text"
                value={client.name}
                onChange={(e) => setClient({ ...client, name: e.target.value })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
        </div>
        <div>
            <label className="block text-sm font-medium text-gray-700">Adresse:</label>
            <input
                type="text"
                value={client.adresse}
                onChange={(e) => setClient({ ...client, adresse: e.target.value })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
        </div>
        <div>
            <label className="block text-sm font-medium text-gray-700">Téléphone:</label>
            <input
                type="text"
                value={client.tel}
                onChange={(e) => setClient({ ...client, tel: e.target.value })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
        </div>
        <button
            type="button"
            onClick={handleUpdate}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
            Mettre à jour
        </button>
    </form>
</div>
);
};
export default UpdateClient;
