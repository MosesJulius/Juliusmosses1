import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";



const OtherWorkersInfos = ()=>{

    const [otherWorkers, setotherWorkers] = useState([]);
    useEffect(() => {
        loadOtherWorker();
 }, []);

 const {id} = useParams();
 const loadOtherWorker = async () => {
    const result = await axios.get("http://localhost:8080/register/getting");
    setotherWorkers(result.data);
 };

 const deleteOtherWorker = async (id) => {
    await axios.delete('http://localhost:8080/register/delete?id=${id}');
    loadOtherWorker();
 };

    return(
    
    <div>

<div className="content" id="content">
    <table className="table border shadow">
        <thead>
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Role</th>
                <th scope="col">Department</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Address</th>

            </tr>
        </thead>
        <tbody>
            {otherWorkers.map((otherWorkers, index) =>(
                <tr key={otherWorkers.id}>
                    <th scope="row">
                        {index + 1}
                    </th>
                    <td>{otherWorkers.name}</td>
                    <td>{otherWorkers.role}</td>
                    <td>{otherWorkers.department}</td>
                    <td>{otherWorkers.phoneNumber}</td>
                    <td>{otherWorkers.address}</td>
                    <td>
                        <Link to={`otherworkerupdate/${otherWorkers.id}`}>
                            Edit
                        </Link>
                        <button
                            onClick={() => deleteOtherWorker(otherWorkers.id)}
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

export default OtherWorkersInfos;