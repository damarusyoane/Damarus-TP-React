import React, { useEffect, useState } from 'react'; // importe React useeffect et useState de React
import { Link, redirect, useNavigate } from 'react-router-dom'; // importe Link pour gerer les liens, redirect pour gerer les redirections des liens et pages et useNavigate pour gerer la navigation de react-router-dom
import axios from 'axios'; // importe axios pour gerer les requetes http a parti de axios

const ClientList= () => {
    const [clients, setClients] = useState([]);
    const navigate = useNavigate();
    const fetchData= async () => {
        const response= await axios.get('http://localhost:3001/clients');
        setClients(response.data);

    };
    useEffect(() => {
        fetchData();
    }, []); 
    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:3001/clients/${id}`);
        fetchData();
    } // fonction pour supprimer un client a base de son id

    return(
        <div className="container mx-auto p-4">
            <center>
            <h1 className="text-2xl font-bold mb-4">Liste des clients</h1>
            <Link to={'/clients/create'}>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4">
                Ajouter un Client
                </button>
            </Link>
            <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                <tr className="bg-gray-200">
                    <th className="border border-gray-300 px-4 py-2">Nom</th>
                    <th className="border border-gray-300 px-4 py-2">Adresse</th>
                    <th className="border border-gray-300 px-4 py-2">Téléphone</th>
                    <th className="border border-gray-300 px-4 py-2">Opérations</th>
                </tr>
                </thead>
                <tbody>
                {clients.map(client => (
                    <tr key={client.id} className="hover:bg-gray-100">
                    <td className="border border-gray-300 px-4 py-2">
                        <Link to={`clients/${client.id}`} className="text-blue-500 hover:underline">
                        {client.name}
                        </Link>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">{client.adresse}</td>
                    <td className="border border-gray-300 px-4 py-2">{client.tel}</td>
                    <td className="border border-gray-300 px-4 py-2 space-x-2">
                        <Link to={`clients/${client.id}/update`}>
                        <button className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">
                            Modifier
                        </button>
                        </Link>
                        <button
                        onClick={() => handleDelete(client.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                        >
                        Supprimer
                        </button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </center>
        </div>

    );
}


export default ClientList;