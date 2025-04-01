import React, {useState, useEffect} from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

const ClientDetails=()=>{
    const {id}=useParams();
    const [client, setClient] = useState({});
    const history= useNavigate;
    useEffect(() => {
       const fetchClient= async() =>{
        const response= await axios.get(`http://localhost:3001/clients/${id}`);
        setClient(response.data);

       };
       fetchClient()
       console.log(client);
    }, [id]);

    return(
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold mb-4 text-gray-800">Details Client</h1>
            <p className="text-lg text-gray-700 mb-2">
            <span className="font-semibold">Client Name:</span> {client.name}
            </p>
            <p className="text-lg text-gray-700 mb-2">
            <span className="font-semibold">Client Tel:</span> {client.tel}
            </p>
            <p className="text-lg text-gray-700 mb-4">
            <span className="font-semibold">Client Adresse:</span> {client.adresse}
            </p>
            <Link to={`/clients`}>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Retour
            </button>
            </Link>
        </div>

    );
   
}

export default ClientDetails;

