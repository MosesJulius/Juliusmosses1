import React from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";


const Prisonerinfo = () => {

    const [prisoner, setprisoner] = useState([]);
    useEffect(() => {
        loadPrisoner();
 }, []);

 const {id} = useParams();
 const loadPrisoner = async () => {
    const result = await axios.get("http://localhost:8080/prisoner/getting");
    setprisoner(result.data);
 };

 const deleteprisoner = async (id) => {
    await axios.delete('http://localhost:8080/prisoner/delete?id=${id}');
    loadPrisoner();
 };

    return(
    
    <div>

<div className="content" id="content">
    <table className="table border shadow">
        <thead>
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Prisoner Name</th>
                <th scope="col">Prisoner Age</th>
                <th scope="col">Prisoner crime</th>
            </tr>
        </thead>
        <tbody>
            {prisoner.map((prisoner, index) =>(
                <tr key={prisoner.id}>
                    <th scope="row">
                        {index + 1}
                    </th>
                    <td>{prisoner.prisonerName}</td>
                    <td>{prisoner.prisonerAge}</td>
                    <td>{prisoner.prisonercrime}</td>
                    <td>
                        <Link to={`prisonerupdate/${prisoner.id}`}>
                            Edit
                        </Link>
                        <button
                            onClick={() => deleteprisoner(prisoner.id)}
                            >
                                Delete
                        </button>
                    </td>
                </tr>
            ) )}
        </tbody>
    </table> 
</div>

    </div>
        
    
    );
    
}

export default Prisonerinfo;