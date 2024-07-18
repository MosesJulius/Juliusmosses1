import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";



const PoliceInfos = ()=>{

    const [police, setpolicie] = useState([]);
    useEffect(() => {
        loadPolice();
 }, []);

 const {id} = useParams();
 const loadPolice = async () => {
    const result = await axios.get("http://localhost:8080/register/getting");
    setpolicie(result.data);
 };

 const deletePolice = async (id) => {
    await axios.delete('http://localhost:8080/register/delete?id=${id}');
    loadPolice();
 };

    return(
    
    <div>

<div className="content" id="content">
    <table className="table border shadow">
        <thead>
            <tr>
                <th scope="col">Id</th>
                <th scope="col">First Name</th>
                <th scope="col">Second Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Address</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Gender</th>
                <th scope="col">Password</th>
            </tr>
        </thead>
        <tbody>
            {police.map((police, index) =>(
                <tr key={police.id}>
                    <th scope="row">
                        {index + 1}
                    </th>
                    <td>{police.firstName}</td>
                    <td>{police.secondName}</td>
                    <td>{police.lastName}</td>
                    <td>{police.email}</td>
                    <td>{police.address}</td>
                    <td>{police.gender}</td>
                    <td>{police.password}</td>
                    <td>
                        <Link to={`policeupdate/${police.id}`}>
                            Edit
                        </Link>
                        <button
                            onClick={() => deletePolice(police.id)}
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

export default PoliceInfos;