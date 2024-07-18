import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";



const Visitorinfos = ()=>{

    const [visitor, setvisitor] = useState([]);
    useEffect(() => {
        loadvisitor();
 }, []);

 const {id} = useParams();
 const loadvisitor = async () => {
    const result = await axios.get("http://localhost:8080/visitor/getting");
    setvisitor(result.data);
 };

 const deletevisitor = async (id) => {
    await axios.delete('http://localhost:8080/visitor/delete?id=${id}');
    loadvisitor();
 };

    return(
    
    <div>

<div className="content" id="content">
    <table className="table border shadow">
        <thead>
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Visitor Name</th>
                <th scope="col">Prisoner Name</th>
                <th scope="col">Visit Date</th>
                <th scope="col">Time</th>
                <th scope="col">Relationship</th>
            </tr>
        </thead>
        <tbody>
            {visitor.map((visitor, index) =>(
                <tr key={visitor.id}>
                    <th scope="row">
                        {index + 1}
                    </th>
                    <td>{visitor.visitorName}</td>
                    <td>{visitor.prisonerName}</td>
                    <td>{visitor.visitDate}</td>
                    <td>{visitor.time}</td>
                    <td>{visitor.reltionship}</td>
                    <td>
                        <Link to={`Visitorpdate/${visitor.id}`}>
                            Edit
                        </Link>
                        <button
                            onClick={() => deletevisitor(visitor.id)}
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

export default Visitorinfos;